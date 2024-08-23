import axios from 'axios';
import Manga from './Manga';
import * as cheerio from 'cheerio';
import constants from './constants';

const MANGA_URL = "https://azoramoon.com/series/youth-lovesome";

const manga = (await new Manga({ url: MANGA_URL, fetchImages: true }).fetch())?.save();
const pages = 1;
const genre = "اكشن";
const mangas: Manga[] = [];

// console.log(manga)

// for (let i = 1; i <= pages; i++) {
//   const response = await axios.get(constants.PAGINATE.replace("{page}", i + ""));
//   const $ = cheerio.load(response.data);
//   const mangasElements = $(constants.MANGAS).find('a');
//   const slugs: string[] = [];
//   for (let mangaElement of mangasElements) {
//     const mangaUrl = $(mangaElement).attr('href')?.trim();
//     if (mangaUrl) {
//       var mangaSlug = mangaUrl.split("/")[4];
//       var manga: Manga | null = new Manga({
//         url: constants.URL_REPLACER
//           .replace("{manga}", mangaSlug),
//         fetchImages: true
//       });
//       if (slugs.includes(mangaSlug)) continue;
//       manga = await manga.fetch();
//       slugs.push(mangaSlug);
//       if (!manga || !manga.title || manga.title.replace(" ", "") == "") continue;
//       mangas.push(manga.save());
//     }
//   }
// }

console.log(`Found ${mangas.length} mangas`);
