import { Request, Response } from "express";
import axios from "axios";
import cheerio from "cheerio";
import HomeServices from "../services/home";

const handleGetHome = async (req: Request, res: Response) => {
  const response = await axios.get("https://flixhq.to/home");
  if (response.data) {
    const $ = cheerio.load(response.data);
    const topSlides = await HomeServices.topSlides($);
    const trendingMovies = await HomeServices.trendingMovies($);
    const trendingTV = await HomeServices.trendingTV($);
    const latestMovies = await HomeServices.latestMovies($);
    const latestTV = await HomeServices.latestTV($);
    const coming = await HomeServices.coming($);

    return res.status(200).json({
      statusCode: 200,
      message: "OK!",
      data: {
        topSlides,
        trending: {
          trendingMovies,
          trendingTV,
        },
        latestMovies,
        latestTV,
        coming,
      },
    });
  } else {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
};

const HomeControllers = {
  handleGetHome,
};

export default HomeControllers;
