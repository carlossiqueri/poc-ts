import { Movie } from "../protocols";
import * as movieRepository from "../repositories/movies.repository";

export async function createMovie(movie: Movie): Promise<void> {
    console.log(movie);
    return await movieRepository.createMovie(movie);
}
