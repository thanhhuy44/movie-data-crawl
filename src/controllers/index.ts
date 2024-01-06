import axios from "axios";
import { Request, Response } from "express";
import cheerio from "cheerio";
import AppSevices from "../services";

const handleSeach = async (req: Request, res: Response) => {
  const keyword = req.query.keyword;
  const page = req.query.page || 1;
  if (keyword?.toString().trim()) {
    const response = await axios.get(
      `https://flixhq.to/search/${keyword}?page=${page}`
    );
    if (response.data) {
      const $ = cheerio.load(response.data);
      const data = await AppSevices.search($);
      return res.status(200).json({
        statusCode: 200,
        message: "OK!",
        data,
      });
    } else {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const handleFilter = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const type = req.query.type || "all";
  const quality = req.query.quality || "all";
  const release_year = req.query.release_year || "all";
  const genre = req.query.genre || "all";
  const country = req.query.country || "all";
  const response = await axios.get(`https://flixhq.to/filter`, {
    params: {
      page,
      type,
      quality,
      release_year,
      genre,
      country,
    },
  });
  if (response.data) {
    const $ = cheerio.load(response.data);
    const data = await AppSevices.search($);
    return res.status(200).json({
      statusCode: 200,
      message: "OK!",
      data,
    });
  } else {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error!",
      data: null,
    });
  }
};

const handleGetDetailGenre = async (req: Request, res: Response) => {
  const genre = req.params.slug;
  const page = req.query.page || 1;
  if (genre.trim()) {
    const response = await axios.get(
      `https://flixhq.to/genre/${genre}?page=${page}`
    );
    if (response.data) {
      const $ = cheerio.load(response.data);
      const data = await AppSevices.genre($);
      return res.status(200).json({
        statusCode: 200,
        message: "OK!",
        data,
      });
    } else {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const handleGetDetailCountry = async (req: Request, res: Response) => {
  const country = req.params.slug;
  const page = req.query.page || 1;
  if (country.trim()) {
    const response = await axios.get(
      `https://flixhq.to/country/${country}?page=${page}`
    );
    if (response.data) {
      const $ = cheerio.load(response.data);
      const data = await AppSevices.country($);
      return res.status(200).json({
        statusCode: 200,
        message: "OK!",
        data,
      });
    } else {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const handleGetAllMovies = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const response = await axios.get(`https://flixhq.to/movie?page=${page}`);
  if (response.data) {
    const $ = cheerio.load(response.data);
    const data = await AppSevices.movies($);
    return res.status(200).json({
      statusCode: 200,
      message: "OK!",
      data,
    });
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const handleGetAllTV = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const response = await axios.get(`https://flixhq.to/tv-show?page=${page}`);
  if (response.data) {
    const $ = cheerio.load(response.data);
    const data = await AppSevices.TV($);
    return res.status(200).json({
      statusCode: 200,
      message: "OK!",
      data,
    });
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const handleGetTopIMDB = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const type = req.query.type || "all";
  const response = await axios.get(`https://flixhq.to/top-imdb`, {
    params: {
      page,
      type,
    },
  });
  if (response.data) {
    const $ = cheerio.load(response.data);
    const data = await AppSevices.topIMDB($);
    return res.status(200).json({
      statusCode: 200,
      message: "OK!",
      data,
    });
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Keyword not found!",
      data: null,
    });
  }
};

const AppControllers = {
  handleSeach,
  handleFilter,
  handleGetDetailGenre,
  handleGetDetailCountry,
  handleGetAllMovies,
  handleGetAllTV,
  handleGetTopIMDB,
};

export default AppControllers;
