import { Movie } from "../protocols";
import { db } from "../database/database.config";
import { QueryResult } from "pg";

export async function createMovie(movie: Movie): Promise<void> {
  await db.query(
    `
    INSERT INTO movies (name, streaming, genre)
    VALUES ($1, $2, $3);
    `,
    [movie.name, movie.streaming, movie.genre]
  );
}

export async function getMovies(): Promise<QueryResult<Movie>> {
  const result = await db.query(`SELECT * FROM movies`);

  return result;
}

export async function updateMovies(status: boolean, id: number): Promise<void> {
  await db.query(
    `
    UPDATE movies
    SET status = $1
    WHERE id = $2
    `,
    [status, id]
  );
}

export async function deleteMovies(deleteId: number): Promise<void> {
  await db.query(
    `
    DELETE FROM movies WHERE id = $1
    `,
    [deleteId]
  );
}
