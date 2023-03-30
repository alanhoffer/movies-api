import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { createMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService){

    }


    @Get()
    getMovies(){
        return this.moviesService.getMovies()
    }

    @Post()
    addMovie(@Body() Movie:createMovieDto){
        return this.moviesService.addMovie(Movie)
    }

    @Put()
    updateMovie(@Body() Movie:Movie){
        return this.moviesService.updateMovie(Movie);
    }
    
    @Delete()
    removeMovie(@Body() id:number){
        return this.moviesService.removeMovie(id);
    }




}
