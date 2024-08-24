import Manga from './Manga';

const MANGA_URL = "https://kunmanga.com/manga/weapon-maker/";

const manga = (await new Manga({ source: "kunmanga", title: "Solo Leveling", fetchImages: true }).fetch())?.save();

console.log(manga)

// const pages = 1;
// const genre = "اكشن";
// const mangas: Manga[] = [];
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
//         url: constants.PATTERN
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

// console.log(`Found ${mangas.length} mangas`);
