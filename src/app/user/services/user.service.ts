import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userStoreService: UserStoreService,private baseURL: string,private http: HttpClient) {
    baseURL = 'localhost:3000'
}

checkUser(){
    return this.http.get<UserResponse>(this.baseURL + '/users/me')
    .pipe(map(response => {
        if(response.successful && response.result.role === 'admin'){
            return true;
        }
        else return false;
        }));
  }

getUserInfo(){
    return this.http.get<UserResponse>(this.baseURL + '/users/me')
    .pipe(map(response => {
        if(response.successful){
            return response.result.name;
        }
        else return '';
        }));
  }
}

interface UserResponse{
successful: boolean,
result: UserResult
}

interface UserResult{
    name: string,
    email: string,
    password: string,
    role: string,
    id: string
}
