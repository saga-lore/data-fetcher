import axios from "axios";
import * as cheerio from 'cheerio';
import constants from "./constants";
import { Source } from "./Types";

export default class Chapter {
  source: Source;
  id: string;
  mangaTitle: string;
  title?: string;
  url: string;
  images: string[] = [];

  constructor({ source, id, mangaTitle, url }: { source: Source, id: string; mangaTitle: string; url: string }) {
    this.source = source;
    this.id = id;
    this.mangaTitle = mangaTitle;
    this.url = url;
  }

  fetch = async (): Promise<Chapter> => {
    const timeStarted = Date.now();
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    const images = $(constants[this.source].IMAGES).find('img');
    for (let i = 0; i < images.length; i++) {
      const image = $(images[i]).attr('src');
      if (image) this.images.push(image.trim());
    }
    console.log(`Loaded chapter ${this.id} of manga ${this.mangaTitle} in ${Date.now() - timeStarted}ms`);
    return this;
  }
}