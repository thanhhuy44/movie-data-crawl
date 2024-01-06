import { CheerioAPI } from "cheerio";

const topSlides = async ($: CheerioAPI) => {
  const slides = $("#slider .swiper-wrapper .swiper-slide")
    .get()
    .map((slide, index) => {
      const poster = $(slide).attr("style")?.split("(")[1].split(")")[0];
      const name = $(".film-title a", slide).text();
      const link = $(".film-title a", slide).attr("href");
      const quality = $(".scd-item .quality", slide).text();
      const duration = $(
        ".sc-detail .scd-item strong :first-child",
        slide
      ).text();
      const IMDB = $(".sc-detail .scd-item strong :eq(1)", slide).text();

      const genres = $(".sc-detail .scd-item strong a", slide)
        .get()
        .map((genre) => {
          return {
            text: $(genre).text(),
            link: $(genre).attr("href"),
          };
        });
      const description = $(".sc-desc", slide).text();
      return {
        poster,
        link,
        name,
        description,
        duration,
        quality,
        IMDB,
        genres,
      };
    });
  return Object.assign(slides);
};

const trendingMovies = async ($: CheerioAPI) => {
  const trendingMovies = $("#trending-movies .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality = $(".film-poster .film-poster-quality", movie).text();
      const poster = $(".film-poster .film-poster-img", movie).attr("data-src");
      const name = $(".film-detail .film-name a", movie).text();
      const link = $(".film-detail .film-name a", movie).attr("href");
      const time = $(".film-detail .fd-infor .fdi-item:eq(0)", movie).text();
      const duration = $(
        ".film-detail .fd-infor .fdi-item.fdi-duration",
        movie
      ).text();
      const type = $(".film-detail .fd-infor .fdi-type", movie).text();
      return {
        poster,
        name,
        link,
        quality,
        time,
        duration,
        type,
      };
    });

  return trendingMovies.length ? trendingMovies : [];
};

const trendingTV = async ($: CheerioAPI) => {
  const trendingTV = $("#trending-tv .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality = $(".film-poster .film-poster-quality", movie).text();
      const poster = $(".film-poster .film-poster-img", movie).attr("data-src");
      const name = $(".film-detail .film-name a", movie).text();
      const link = $(".film-detail .film-name a", movie).attr("href");
      const season = $(".film-detail .fd-infor .fdi-item:eq(0)", movie).text();
      const ep = $(".film-detail .fd-infor .fdi-item:eq(1)", movie).text();
      const type = $(".film-detail .fd-infor .fdi-type", movie).text();

      return {
        poster,
        name,
        link,
        quality,
        season,
        ep,
        type,
      };
    });

  return trendingTV.length ? trendingTV : [];
};

const latestMovies = async ($: CheerioAPI) => {
  const data = $(
    ".section-id-02:eq(0) .film_list-grid .film_list-wrap .flw-item"
  )
    .get()
    .map((movie) => {
      const quality = $(".film-poster .film-poster-quality", movie).text();
      const poster = $(".film-poster .film-poster-img", movie).attr("data-src");
      const name = $(".film-detail .film-name a", movie).text();
      const link = $(".film-detail .film-name a", movie).attr("href");
      const time = $(".film-detail .fd-infor .fdi-item:eq(0)", movie).text();
      const duration = $(
        ".film-detail .fd-infor .fdi-item.fdi-duration",
        movie
      ).text();
      const type = $(".film-detail .fd-infor .fdi-type", movie).text();
      return {
        poster,
        name,
        link,
        quality,
        time,
        duration,
        type,
      };
    });

  return data.length ? data : [];
};

const latestTV = async ($: CheerioAPI) => {
  const data = $(
    ".section-id-02:eq(1) .film_list-grid .film_list-wrap .flw-item"
  )
    .get()
    .map((movie) => {
      const quality = $(".film-poster .film-poster-quality", movie).text();
      const poster = $(".film-poster .film-poster-img", movie).attr("data-src");
      const name = $(".film-detail .film-name a", movie).text();
      const link = $(".film-detail .film-name a", movie).attr("href");
      const season = $(".film-detail .fd-infor .fdi-item:eq(0)", movie).text();
      const ep = $(".film-detail .fd-infor .fdi-item:eq(1)", movie).text();
      const type = $(".film-detail .fd-infor .fdi-type", movie).text();

      return {
        poster,
        name,
        link,
        quality,
        season,
        ep,
        type,
      };
    });
  return data.length ? data : [];
};

const coming = async ($: CheerioAPI) => {
  const data = $(
    ".section-id-02:eq(2) .film_list-grid .film_list-wrap .flw-item"
  )
    .get()
    .map((movie) => {
      const poster = $(".film-poster .film-poster-img", movie).attr("data-src");
      const name = $(".film-detail .film-name a", movie).text();
      const link = $(".film-detail .film-name a", movie).attr("href");
      const time = $(".film-detail .fd-infor .fdi-item:eq(0)", movie).text();
      const type = $(".film-detail .fd-infor .fdi-type", movie).text();
      return {
        poster,
        name,
        link,
        time,
        type,
      };
    });

  return data.length ? data : [];
};

const HomeServices = {
  topSlides,
  trendingMovies,
  trendingTV,
  latestMovies,
  latestTV,
  coming,
};

export default HomeServices;
