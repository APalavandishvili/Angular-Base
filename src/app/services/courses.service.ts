import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private baseURL: string) {
    baseURL = 'localhost:3000'
  }

  getAll(){
    return this.http.get<CoursesResult>(this.baseURL + '/courses/all')
    .pipe(map(response => {return response.successful ?? response.result}));
  }

  getById(id: string){
    return this.http.get<CoursesResult>(this.baseURL + '/courses/' + id)
    .pipe(map(response => {return response.successful ?? response.result}));
  }

  delete(id: string){
    return this.http.delete(this.baseURL + '/courses/' + id);
  }

  update(id: string, courseItem: Course){
    return this.http.put<GeneralResponse>(this.baseURL + '/courses/' + id,courseItem)
    .pipe(map(response => {return response.statusCode === 200 ? response.message : response.error}));;
  }

  add(courseItem: Course){
    return this.http.post<GeneralResponse>(this.baseURL + '/courses/add',courseItem)
    .pipe(map(response => {return response.statusCode === 200 ? response.message : response.error}));;
  }
}

interface Course{
    id: string,
    title : String,
    description : String,
    duration : number,
    authors: string[]
}

interface CoursesResult {
    successful: boolean,
    result: Course[]
}

interface GeneralResponse {
    statusCode: number,
    message: string,
    error: string
}
