import axios from 'axios';
import constants from './constants';
import Manga from './Manga';
import { Source } from './Types';
import * as cheerio from 'cheerio';

const source: Source = "kunmanga";

// const MANGA_URL = "https://kunmanga.com/manga/weapon-maker/";

const manga = (await new Manga({ source, title: "Solo Leveling", fetchImages: true }).fetch())?.save();

// console.log(manga)

// const pages = 20;
// const mangasToFetch: string[] = [];
// for (let i = 1; i <= pages; i++) {
//   const response = await axios.get(constants[source].PAGINATE.replace("{page}", i + ""));
//   const $ = cheerio.load(response.data);
//   const mangasElements = $(constants[source].MANGAS).find('a');
//   for (let mangaElement of mangasElements) {
//     const mangaUrl = $(mangaElement).attr('href')?.trim();
//     if (mangaUrl) {
//       const mangaSlug = mangaUrl.split("/")[4];
//       if (mangasToFetch.includes(mangaSlug)) continue;
//       mangasToFetch.push(mangaSlug)
//     }
//   }
// }

// console.log(`Found ${mangasToFetch.length} mangas`);
// await Promise.all(mangasToFetch.map(async mangaSlug => {
//   const manga = await new Manga({ source, title: mangaSlug, fetchImages: true }).fetch();
//   if (manga) {
//     console.log(`Fetched manga ${manga.title}`);
//     manga.save();
//   }
// }));
// console.log("Finished fetching mangas");