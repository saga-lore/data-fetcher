import axios from 'axios';
import slug from 'slug';
import * as cheerio from 'cheerio';
import constants from './constants';
import Chapter from './Chapter';
import fs from 'fs';
import path from 'path';
import { Source } from './Types';

export default class Manga {
  source: Source;
  url?: string;
  title?: string;
  chapters: Chapter[] = [];
  private fetchImages: boolean = false;

  constructor({ source, title, url, fetchImages = true }: { source: Source, title?: string, url?: string, fetchImages?: boolean }) {
    this.source = source;
    this.title = title;
    this.url = url;
    this.fetchImages = fetchImages;
  }

  getUrl = () => this.url ?? constants[this.source].URL.replace("{manga}", this.getSlug());

  fetch = async (): Promise<Manga | null> => {
    const timeStarted = Date.now();
    const response = await axios.get(this.getUrl())
    const $ = cheerio.load(response.data);
    this.title = $(constants[this.source].TITLE).text().trim();
    const chapters = $(constants[this.source].CHAPTERS).find('li');
    for (let i = 0; i < chapters.length; i++) {
      const chapterUrl = $(chapters[i]).find('a').attr('href')?.trim();
      const chapterId = chapterUrl?.match(constants[this.source].PATTERN)?.groups?.chapter ?? '';
      if (chapterUrl) {
        var chapter = new Chapter({ source: this.source, url: chapterUrl, id: chapterId, mangaTitle: this.title ?? '' });
        if (this.fetchImages) chapter = await chapter.fetch();
        this.chapters.push(chapter);
      }
    }
    if (!this.title) return null;
    console.log(`Loaded manga ${this.title} with ${this.chapters.length} chapters in ${((Date.now() - timeStarted) / 1000).toFixed(2)} seconds`);
    return this;
  }

  save = (): Manga => {
    if (!fs.existsSync(path.join(process.cwd(), '/data'))) fs.mkdirSync(path.join(process.cwd(), '/data'));
    if (!fs.existsSync(path.join(process.cwd(), `/data/${this.source}`))) fs.mkdirSync(path.join(process.cwd(), `/data/${this.source}`));
    fs.writeFileSync(path.join(process.cwd(), `/data/${this.source}/${this.getSlug()}.json`), JSON.stringify(this, null, 2));
    return this;
  }

  getSlug = () => {
    return this.title ? slug(this.title, { lower: true }) : this.url?.match(constants[this.source].PATTERN)?.groups?.manga ?? '';
  }
}