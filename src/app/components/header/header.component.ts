import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieApiDataService } from 'src/app/services/movie-api-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movieInput:string='';

  constructor(moviesData: MovieApiDataService) { }
  ngOnInit(): void {
    // this.moviesData.movieInputEmitter.subscribe((value: string) => {
    //   this.movieInput = value;
    // })
   }
 
  
  fetchMoviesDetails() { 
    console.log(this.movieInput);
  // this.moviesData.tasksIndex(this.movieInput);
 }
}
