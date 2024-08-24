export default {
  "kunmanga": {
    "URL": "https://kunmanga.com/manga/{manga}",
    "PATTERN": /https:\/\/(?:kunmanga\.com\/manga\/(?<manga>[^\/]+)(?:\/(?<chapter>[^\/]*))?\/?)\/?$/,
    "PAGINATE": "https://kunmanga.com/page/{page}",
    "TITLE": "body > div.wrap > div > div > div > div.profile-manga.summary-layout-1 > div > div > div > div.post-title > h1",
    "CHAPTERS": "body > div.wrap > div > div > div > div.c-page-content.style-1 > div > div > div > div > div > div.c-page > div > div.page-content-listing.single-page > div > ul",
    "IMAGES": "body > div.wrap > div > div > div > div > div > div > div > div > div.c-blog-post > div.entry-content > div > div > div.reading-content",
    "MANGAS": "#loop-content"
  },
  "aresmanga": {
    "URL": "https://fl-ares.com/{manga}",
    "PATTERN": /https:\/\/fs-ares\.com\/(?<manga>[^\/]+?)(?:-chapter-(?<chapter>[^\/]*))?\/?$/,
    "PAGINATE": "https://azoramoon.com/page/{page}",
    "TITLE": "#titlemove > h1",
    "CHAPTERS": "#chapterlist > ul",
    "IMAGES": "#readerarea",
    "MANGAS": "#loop-content"
  },
  "like-manga": {
    "URL": "https://like-manga.net/manga/{manga}",
    "PATTERN": /https:\/\/like-manga\.net\/manga\/(?<manga>[^/]+)(?:\/(?<chapter>\d+))?\/?$/,
    "PAGINATE": "https://like-manga.net/manga-genre/{genre}/?m_orderby=views&page={page}",
    "TITLE": "body > div.wrap > div > div > div > div.profile-manga > div > div > div > div.post-title > h1",
    "CHAPTERS": "body > div.wrap > div > div > div > div.c-page-content.style-1 > div > div > div > div > div > div > div > div.page-content-listing.single-page > div > ul",
    "IMAGES": "body > div.wrap > div > div > div > div > div > div > div > div > div.c-blog-post > div.entry-content > div > div > div",
    "MANGAS": "body > div.wrap > div > div > div.c-page-content.style-1 > div > div > div > div > div > div > div.c-page__content > div.tab-content-wrap > div > div"
  },
  "mangarose": {
    "URL": "https://mangarose.net/manga/{manga}",
    "PATTERN": /https:\/\/mangarose\.net\/manga\/(?<manga>[^/]+)(?:\/(?<chapter>\d+))?\/?$/,
    "PAGINATE": "https://azoramoon.com/page/{page}",
    "TITLE": "body > div.wrap > div > div.site-content > div > div.profile-manga.summary-layout-1 > div > div > div > div.post-title > h1",
    "CHAPTERS": "body > div.wrap > div > div.site-content > div > div.c-page-content.style-1 > div > div > div > div.main-col.col-md-8.col-sm-8 > div > div.c-page > div > div.page-content-listing.single-page > div > ul",
    "IMAGES": "body > div.wrap > div > div.site-content > div > div > div > div > div > div > div.c-blog-post > div.entry-content > div > div > div.reading-content",
    "MANGAS": "#loop-content"
  },
  "azoramoon": {
    "URL": "https://azoramoon.com/series/{manga}",
    "PATTERN": /https:\/\/azoramoon\.com\/series\/(?<manga>[^/]+)(?:\/(?<chapter>\d+))?\/?$/,
    "PAGINATE": "https://azoramoon.com/page/{page}",
    "TITLE": "body > div.wrap > div > div.site-content > div > div.profile-manga.summary-layout-1 > div > div > div > div.post-title > h1",
    "CHAPTERS": "body > div.wrap > div > div.site-content > div > div.c-page-content.style-1 > div > div > div > div.main-col.col-md-8.col-sm-8 > div > div.c-page > div > div.page-content-listing.single-page > div > ul",
    "IMAGES": "body > div.wrap > div > div.site-content > div > div > div > div > div > div > div.c-blog-post > div.entry-content > div > div > div.reading-content",
    "MANGAS": "#loop-content"
  }
}