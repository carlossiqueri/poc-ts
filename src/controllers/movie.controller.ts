import { Request, Response } from "express";
import { Movie } from "../protocols";
import * as movieService from "../services/movies.services";
import httpStatus from "http-status";
import { db } from "../database/database.config";

export async function createMovie(req: Request, res: Response){
  const createdMovie = req.body as Movie;
  try {
    await movieService.createMovie(createdMovie);
    console.log(createdMovie);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function getMovies(req: Request, res: Response) {
    try{
        const result = await db.query(`SELECT * FROM movies`);
        res.status(200).send(result);
    }catch(err){
        res.sendStatus(500)
    }
}

export function updateMovies(req: Request, res: Response) {}

export function deleteMovie(req: Request, res: Response) {}
