import { Router } from "express";
import * as movieContoller from "../controllers/movie.controller";
import { validateMovies } from "../middlewares/validate_schema";
import { movieSchema } from "../schemas/movies.schema";

const movieRouter = Router();

movieRouter.post(
  "/movies",
  validateMovies(movieSchema),
  movieContoller.createMovie
);
movieRouter.get("/movies", movieContoller.getMovies);
movieRouter.put("/movies", movieContoller.updateMovies);
movieRouter.delete("/movies", movieContoller.deleteMovie);

export default movieRouter;
