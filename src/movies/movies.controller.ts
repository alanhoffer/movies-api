import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

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

    @Put(':update:id')
    updateMovie(@Param('id', ParseIntPipe) id:number,@Body() Movie:updateMovieDto){
        return this.moviesService.updateMovie(id, Movie);
    }

    @Delete(':delete:id')
    removeMovie(@Param('id', ParseIntPipe) id:number, @Body() Movie:Movie){
        return this.moviesService.removeMovie(id, Movie);
    }




}
