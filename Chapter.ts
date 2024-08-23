import axios from "axios";
import * as cheerio from 'cheerio';
import constants from "./constants";

export default class Chapter {
  id: string;
  mangaTitle: string;
  title?: string;
  url: string;
  images: string[] = [];

  constructor({ id, mangaTitle, url }: { id: string; mangaTitle: string; url: string }) {
    this.id = id;
    this.mangaTitle = mangaTitle;
    this.url = url;
  }

  fetch = async (): Promise<Chapter> => {
    const timeStarted = Date.now();
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    const images = $(constants.IMAGES).find('img');
    for (let i = 0; i < images.length; i++) {
      const image = $(images[i]).attr('src');
      console.log(image, images[i])
      if (image) this.images.push(image);
    }
    console.log(`Loaded chapter ${this.id} of manga ${this.mangaTitle} in ${Date.now() - timeStarted}ms`);
    return this;
  }
}