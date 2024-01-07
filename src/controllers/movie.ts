import axios from "axios";
import { Request, Response } from "express";
import cheerio from "cheerio";
import MovieServices from "../services/movie";
import { MOVIES, StreamingServers } from "@consumet/extensions";

const flixhq = new MOVIES.FlixHQ();

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

const handleGetSource = async (req: Request, res: Response) => {
  const episodeId = req.query.episodeId;
  const serverId = req.query.serverId || undefined;
  const slug = req.params.slug;
  console.log(
    "🚀 ~ file: movie.ts:49 ~ handleGetSource ~ slug:",
    "movie/" + slug
  );
  if (episodeId?.toString().trim() && slug.trim()) {
    try {
      const sources = await flixhq.fetchEpisodeSources(
        "10214476",
        "watch-the-brothers-sun-104707",
        StreamingServers.UpCloud
      );

      return res.status(200).json({
        statusCode: 200,
        message: "OK!",
        data: sources,
      });
    } catch (error) {
      console.log("🚀 ~ file: movie.ts:61 ~ handleGetSource ~ error:", error);
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Invalid Link Id!",
      data: null,
    });
  }
};

const MovieControllers = {
  handleGetDetail,
  handleGetSource,
};

export default MovieControllers;
