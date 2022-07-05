import { Component, OnInit } from '@angular/core';
// import { MoviesServicesService } from 'src/app/services/movies-services.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieApiDataService } from 'src/app/services/movie-api-data.service';
import { MovieDetails } from 'src/app/interfaces/movie-details';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  moviesByName:any;

  //selected movie
  selectedMovieName=''
  selectedMovieNametype=''
  selectedMovieNameyear=''

//all movies
numberOfsearchesResult=''
movies:MovieDetails[]=[];
movietitle=''
movieName=''
MovieYear=''

  constructor(private http: HttpClient,private movieData:MovieApiDataService) { }
  ngOnInit(): void {
    this.movieData.movieEmitter
    .subscribe((value)=>
    {
      this.moviesByName=value;
      console.log(this.moviesByName)
    })

    this.movieData.getData()
    .subscribe((res: any)=> {
      console.log({res});
      if(res.search && res.search.length > 0) {
        this.numberOfsearchesResult =res.search.length
        this.moviesByName = res;
        this.movies=res.search
        console.log(this.movies)
      }
      this.selectedMovieName =res.search[0].title
      this.selectedMovieNametype=res.search[0].type
      this.selectedMovieNameyear=res.search[0].year
    })
  }
}

