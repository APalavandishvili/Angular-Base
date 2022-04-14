import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private baseURL: string) {
      baseURL = 'localhost:3000'
   }

  getAll(){
    return this.http.get<AllAuthors>(this.baseURL + '/authors/all')
    .pipe(map(response => {return response.successful ?? response.result;}));
  }

  addAuthor(name: string){
      return this.http.post<BaseResponse>(this.baseURL+'/authors/add',name).pipe(map(response => response.statusCode));
  }
}

interface AllAuthors{
    successful: boolean;
    result: Author[]
}

interface Author{
    name: string;
    id: string;
}

interface BaseResponse{

    statusCode: number,
    message: string;
    error: string;

}
