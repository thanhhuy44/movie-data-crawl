import axios from "axios";
import cheerio, { CheerioAPI } from "cheerio";

const detail = async ($: CheerioAPI) => {
  const dataId = $("#main-wrapper .detail_page-watch").attr("data-id");

  const cover =
    $("#main-wrapper .w_b-cover")
      .attr("style")
      ?.split(";")[0]
      .split("(")[1]
      .split(")")[0] || "";
  const poster = $(".movie_information .film-poster .film-poster-img").attr(
    "src"
  );
  const name = $(".movie_information .heading-name a").text().trim() || "";
  const description = $(".movie_information .description").text().trim() || "";
  const quality =
    $(".movie_information .stats .btn-quality").text().trim() || "";
  const stars = $(".movie_information .stats .item:eq(1)").text().trim() || "";
  const duration =
    $(".movie_information .stats .item:eq(2)").text().trim() || "";
  const country =
    $(".movie_information .elements .row-line:eq(0) a").text().trim() || "";
  const genres =
    $(".movie_information .elements .row-line:eq(1) a").text().trim() || "";
  const release =
    $(".movie_information .elements .row-line:eq(2)")
      .text()
      .replace("Released:", "")
      .trim() || "";
  const production =
    $(".movie_information .elements .row-line:eq(3) a").text().trim() || "";
  const casts = $(".movie_information .elements .row-line:eq(4) a")
    .get()
    .map((cast) => {
      return $(cast).text();
    });

  const relatedMovies = $(
    ".film-related .film_list-grid .film_list-wrap .flw-item"
  )
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
      const seasons = $(".slt-seasons-dropdown .ss-item")
        .get()
        .map((ss) => {
          const id = $(ss).attr("data-id")?.trim() || "";
          const title = $(ss).text().trim() || "";
          return {
            id,
            title,
          };
        });

      return {
        quality,
        poster,
        name,
        link,
        yearOrSeason,
        durationOrEP,
        seasons,
        type,
      };
    });

  let servers;
  const fetchServers = await axios.get(
    "https://flixhq.to/ajax/movie/episodes/" + dataId
  );
  if (fetchServers.data) {
    // console.log(
    //   "🚀 ~ file: tv.ts:73 ~ detail ~ fetchServers.data:",
    //   fetchServers.data
    // );
    const $_server = cheerio.load(fetchServers.data);
    servers = $_server(".server-select .nav .nav-item")
      .get()
      .map((server) => {
        return {
          title: $_server(".link-item span", server).text(),
          linkId: $_server(".link-item", server).attr("data-linkid"),
        };
      });
  } else {
    console.log("Error when fetch server!!!");
  }

  let seasons;
  const fetSeasons = await axios.get(
    "https://flixhq.to/ajax/season/list/" + dataId
  );
  if (fetSeasons.data) {
    const $_seasons = cheerio.load(fetSeasons.data);
    seasons = $_seasons(".seasons-list .slt-seasons-dropdown .ss-item")
      .get()
      .map((ss) => {
        const id = $_seasons(ss).attr("data-id")?.trim() || "";
        const name = $_seasons(ss).text().trim() || "";
        return {
          id,
          name,
        };
      });
  } else {
    console.log("Error when fetch seasons!!!");
  }

  return {
    dataId,
    cover,
    poster,
    name,
    description,
    stars,
    quality,
    duration,
    country,
    genres,
    release,
    production,
    casts,
    servers: servers,
    seasons: seasons,
    relatedMovies,
  };
};

const episode = async ($: CheerioAPI) => {
  return $(".nav .nav-item .eps-item")
    .get()
    .map((ep) => {
      const id = $(ep).attr("id");
      const dataId = $(ep).attr("data-id");
      const title = $(ep).attr("title");
      return {
        id,
        dataId,
        title,
      };
    });
};

const servers = async ($: CheerioAPI) => {
  return $(".server-select .nav .nav-item .link-item")
    .get()
    .map((server) => {
      const id = $(server).attr("data-id")?.trim() || "";
      const name = $(server).text().trim() || "";
      return {
        id,
        name,
      };
    });
};

const source = async () => {};

const TvServices = {
  detail,
  source,
  episode,
  servers,
};

export default TvServices;
