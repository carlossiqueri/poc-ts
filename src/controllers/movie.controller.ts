import { Request, Response } from "express";
import { Movie } from "../protocols";
import * as movieService from "../services/movies.services";
import httpStatus from "http-status";

export async function createMovie(req: Request, res: Response): Promise<void> {
  const createdMovie = req.body as Movie;
  try {
    await movieService.createMovie(createdMovie);
    console.log(createdMovie);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function getMovies(req: Request, res: Response): Promise<void> {
  try {
    const allMovies = await movieService.getMovies();
    res.status(httpStatus.OK).send(allMovies.rows);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function updateMovies(req: Request, res: Response): Promise<void> {
  const { status, id } = req.body as Movie;
  try {
    await movieService.updateMovies(status, id);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function deleteMovie(req: Request, res: Response): Promise<void> {
  const id = req.body.id;

  try {
    await movieService.deleteMovie(id);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}
