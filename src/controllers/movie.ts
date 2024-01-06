import axios from "axios";
import { Request, Response } from "express";
import cheerio from "cheerio";
import MovieServices from "../services/movie";

const handleGetDetail = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  if (slug.trim()) {
    try {
      const response = await axios.get(`https://flixhq.to/movie/${slug}`);
      if (response.data) {
        const $ = cheerio.load(response.data);
        const data = await MovieServices.detail($);
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
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Slug not found!",
      data: null,
    });
  }
};

const MovieControllers = {
  handleGetDetail,
};

export default MovieControllers;
