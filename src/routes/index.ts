import { Application, Request, Response, Router } from "express";
import HomeControllers from "../controllers/home";
import AppControllers from "../controllers";
import MovieControllers from "../controllers/movie";

const router = Router();
const AppRoutes = (app: Application) => {
  router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      statusCode: 200,
      message: "App working well! 🌹🌹🌹",
    });
  });

  router.get("/home", HomeControllers.handleGetHome);
  router.get("/search", AppControllers.handleSeach);
  router.get("/filter", AppControllers.handleFilter);
  router.get("/genre/:slug", AppControllers.handleGetDetailGenre);
  router.get("/country/:slug", AppControllers.handleGetDetailCountry);
  router.get("/movie", AppControllers.handleGetAllMovies);
  router.get("/tv-show", AppControllers.handleGetAllTV);
  router.get("/top-imdb", AppControllers.handleGetTopIMDB);
  //   detail
  router.get("/movie/:slug", MovieControllers.handleGetDetail);

  return app.use("/api", router);
};

export default AppRoutes;
