import { Application, Request, Response, Router } from 'express';
import HomeControllers from '../controllers/home';
import AppControllers from '../controllers';
import MovieControllers from '../controllers/movie';
import TVControllers from '../controllers/tv';

const router = Router();
const AppRoutes = (app: Application) => {
  router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      statusCode: 200,
      message: 'App working well! 🌹🌹🌹',
    });
  });

  router.get('/home', HomeControllers.handleGetHome);
  router.get('/search', AppControllers.handleSeach);
  router.get('/filter', AppControllers.handleFilter);
  router.get('/genre/:slug', AppControllers.handleGetDetailGenre);
  router.get('/country/:slug', AppControllers.handleGetDetailCountry);
  router.get('/movie', AppControllers.handleGetAllMovies);
  router.get('/tv-show', AppControllers.handleGetAllTV);
  router.get('/top-imdb', AppControllers.handleGetTopIMDB);
  //   detail movie
  router.get('/movie/:slug', MovieControllers.handleGetDetail);
  router.get('/movie/servers/:slug', MovieControllers.handleGetServers);
  router.get('/movie/source/:slug', MovieControllers.handleGetSource);
  //   detail tv show
  router.get('/tv/:slug', TVControllers.handleGetDetail);
  router.get('/tv/episodes/:slug', TVControllers.handleGetEpisode);
  router.get('/tv/servers/:slug', TVControllers.handleGetServers);
  router.get('/tv/source/:slug', TVControllers.handleGetSource);

  return app.use('/api', router);
};

export default AppRoutes;
