import { Movie } from "../protocols";
import { db } from "../database/database.config";

export async function createMovie(movie: Movie): Promise<void> {
  await db.query(
    `
    INSERT INTO movies (name, streaming, genre)
    VALUES ($1, $2, $3)
    `,
    [movie.name, movie.streaming, movie.genre]);
}
