import axios from 'axios';
import slug from 'slug';
import * as cheerio from 'cheerio';
import constants from './constants';
import Chapter from './Chapter';
import fs from 'fs';
import path from 'path';

export default class Manga {
  url?: string;
  title?: string;
  chapters: Chapter[] = [];
  private fetchImages: boolean = false;

  constructor({ title, url, fetchImages = true }: { title?: string, url?: string, fetchImages?: boolean }) {
    this.title = title;
    this.url = url;
    this.fetchImages = fetchImages;
  }

  getUrl = () => this.url ?? constants.URL_REPLACER.replace("{manga}", this.getSlug());

  fetch = async (): Promise<Manga | null> => {
    const timeStarted = Date.now();
    const response = await axios.get(this.getUrl())
    const $ = cheerio.load(response.data);
    this.title = $(constants.TITLE).text().trim();
    const chapters = $(constants.CHAPTERS).find('li');
    for (let i = 0; i < chapters.length; i++) {
      const chapterUrl = $(chapters[i]).find('a').attr('href')?.trim();
      const chapterId = $(chapters[i]).find('a').text().trim();
      if (chapterUrl) {
        var chapter = new Chapter({ url: chapterUrl, id: chapterId, mangaTitle: this.title ?? '' });
        if (this.fetchImages) chapter = await chapter.fetch();
        this.chapters.push(chapter);
      }
    }
    if (!this.title) return null;
    console.log(`Loaded manga ${this.title} with ${this.chapters.length} chapters in ${((Date.now() - timeStarted) / 1000).toFixed(2)} seconds`);
    return this;
  }

  save = (): Manga => {
    fs.writeFileSync(path.join(process.cwd(), `/data/${this.getSlug()}.json`), JSON.stringify(this, null, 2));
    return this;
  }

  getSlug = () => {
    return this.title ? slug(this.title, { lower: true }) : this.url?.replace(constants.URL_REPLACER.split("{manga}")[0], "")
      .replace(constants.URL_REPLACER.split("{manga}")[1], "").replace("/", "");
  }
}