import Joi from "joi";
import { Movie } from "../protocols";

export const movieSchema = Joi.object<Movie>({
    name: Joi.string().required(),
    streaming: Joi.string().required(),
    genre: Joi.string().required(),
})