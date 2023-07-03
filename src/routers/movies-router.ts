import { Router } from "express";
import * as movieContoller from "../controllers/movie.controller"
import { validateMovies } from "../middlewares/validate_schema";

const movieRouter = Router();

movieRouter.post("/movies", validateMovies, movieContoller.createMovie);
movieRouter.get("/movies", movieContoller.getMovies);
movieRouter.put("/movies", movieContoller.updateMovies);
movieRouter.delete("/movies", movieContoller.deleteMovie);

export default movieRouter;