import { CheerioAPI } from "cheerio";

const search = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const filter = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const genre = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const country = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const movies = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const TV = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const topIMDB = async ($: CheerioAPI) => {
  const movies = $("#main-wrapper .film_list-grid .film_list-wrap .flw-item")
    .get()
    .map((movie) => {
      const quality =
        $(".film-poster .film-poster-quality", movie).text() || "";
      const poster = $(".film-poster img", movie).attr("data-src") || "";
      const name = $(".film-detail .film-name a", movie).text() || "";
      const link = $(".film-detail .film-name a", movie).attr("href") || "";
      const yearOrSeason =
        $(".film-detail .fdi-item:eq(0)", movie).text() || "";
      const durationOrEP =
        $(".film-detail .fdi-item:eq(1)", movie).text() || "";
      const type = $(".film-detail .fdi-type", movie).text() || "";

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        type,
      };
    });

  return movies.length ? movies : [];
};

const AppSevices = {
  search,
  filter,
  genre,
  country,
  movies,
  TV,
  topIMDB,
};
export default AppSevices;
