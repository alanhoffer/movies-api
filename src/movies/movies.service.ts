import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { createMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {

    private movieList = [];
    private movieQuantity: number = 1;

    getMovies(){
        return this.movieList;
    }

    addMovie(Movie:createMovieDto){

        Movie['id'] = this.movieQuantity;

        this.movieList.push(Movie);

        this.movieQuantity++;

        return this.movieList;
    }

    removeMovie(id:number){
        this.movieList = this.movieList.find(movie => movie.id != id)
    }

    updateMovie(Movie:Movie){
        this.movieList.forEach(movie => {
            if(movie.id == Movie.id){
                movie = Movie;
            }
        })
    }

}
