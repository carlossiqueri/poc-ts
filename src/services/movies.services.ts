import { QueryResult } from "pg";
import { Movie } from "../protocols";
import * as movieRepository from "../repositories/movies.repository";

export async function createMovie(movie: Movie): Promise<void> {
  return await movieRepository.createMovie(movie);
}

export async function getMovies(): Promise<QueryResult<Movie>> {
  return await movieRepository.getMovies();
}

export async function updateMovies(status: boolean, id: number): Promise<void> {
  return await movieRepository.updateMovies(status, id);
}

export async function deleteMovie(deleteId: number): Promise<void> {
  return await movieRepository.deleteMovies(deleteId);
}
