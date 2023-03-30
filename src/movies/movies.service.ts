import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

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

    removeMovie(id:number, Movie){
        this.movieList = this.movieList.find(movie => movie.id != id)
    }

    updateMovie(id:number, Movie:updateMovieDto){
        this.movieList.forEach(movie => {
            if(movie.id == id){
                movie = Movie;
            }
        })
    }

}
