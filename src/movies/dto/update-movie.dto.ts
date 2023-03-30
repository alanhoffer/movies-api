import { Actor } from "../actor.entity";
import { Genre } from "../genre.entity";

export class updateMovieDto {
    
    title: string;
    image: string;
    sinopsis: string;
    duration: number;
    releaseDate: Date;
    genres: Genre[];
    actors: Actor[];
    
}