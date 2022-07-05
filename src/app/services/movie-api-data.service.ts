import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiDataService {
  apiurlString = '';
  apiUrl = 'https://mdblist.p.rapidapi.com/?s=';
  moviesByName: any;

  movieEmitter = new EventEmitter<string>();
  movieEmitterEvent(data: string) { this.movieEmitter.emit(data) }

  movieInput = 'avatar';
  movieInputEmitter = new BehaviorSubject<string>(this.movieInput)
  tasksIndex(movieInput: string) {
    this.movieInputEmitter.next(this.movieInput);
  }


  constructor(private http: HttpClient) { }

  getData() {

    this.apiurlString = this.apiUrl + this.movieInput;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '040bc4ff46msh71f01c94437891dp182330jsn74130fda7557',
        'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
      }
    };
    return this.http.get(this.apiurlString, options);

  }
  getMovieName() {
    
   }
  sendMovieData() { }
}

