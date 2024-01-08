import { Request, Response } from "express";
import axios from "axios";
import cheerio from "cheerio";
import TvServices from "../services/tv";

const handleGetDetail = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  if (slug.trim()) {
    try {
      const response = await axios.get(`https://flixhq.to/movie/${slug}`);
      if (response.data) {
        const $ = cheerio.load(response.data);
        const data = await TvServices.detail($);
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

const handleGetEpisode = async (req: Request, res: Response) => {
  const ssId = req.query["seasonId"]?.toString().trim() || "";
  if (ssId) {
    try {
      const response = await axios.get(
        "https://flixhq.to/ajax/season/episodes/" + ssId
      );
      if (response.data) {
        const $ = cheerio.load(response.data);
        const data = (await TvServices.episode($)) || [];
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
      console.log("🚀 ~ file: tv.ts:48 ~ handleGetEpisode ~ error:", error);
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Invalid or missing season id!",
      data: null,
    });
  }
};

const handleGetServers = async (req: Request, res: Response) => {
  const episodeId = req.query.episodeId?.toString().trim() || "";
  if (episodeId) {
    try {
      const response = await axios.get(
        "https://flixhq.to/ajax/episode/servers" + episodeId
      );
      if (response.data) {
        console.log(
          "🚀 ~ file: tv.ts:89 ~ handleGetServers ~ response.data:",
          response.data
        );
        return res.status(200).json({
          statusCode: 200,
          message: "OK!",
          data: "test",
        });
      } else {
        return res.status(500).json({
          statusCode: 500,
          message: "Internal Server Error!",
          data: null,
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: tv.ts:87 ~ handleGetServers ~ error:", error);
      return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request: Invalid or missing episode id!",
      data: null,
    });
  }
};

const handleGetSource = async (req: Request, res: Response) => {};

const TVControllers = {
  handleGetDetail,
  handleGetSource,
  handleGetEpisode,
  handleGetServers,
};
export default TVControllers;
