import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorageService: SessionStorageService,private baseURL: string,private http: HttpClient) {
      baseURL = 'localhost:3000'
   }

  login(loginRequest: AuthorizationRequest){
    return this.http.post<SuccessfulResponse>(this.baseURL + '/login',loginRequest)
    .pipe(map(response => {response.successful ?? this.sessionStorageService.setToken(response.result)}));
  }

  register(registerRequest: AuthorizationRequest){
    return this.http.post<RegistrationResponse>(this.baseURL + '/register',registerRequest)
    .pipe(map(response => {return response.successful ?? response.result}));
  }

  logout(){
    let token = this.sessionStorageService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.delete(this.baseURL + '/logout', {headers});
    this.sessionStorageService.deleteToken();
  }
}

interface AuthorizationRequest{
    name: string,
    email: string,
    password: string
}

interface AuthorizationResponse{
    name: string,
    email: string,
    password: string,
    role: string
}

interface RegistrationResponse{
    successful: boolean,
    result: string
}

interface SuccessfulResponse{
    successful: boolean,
    result: string,
    user: UserInfo
}

interface FailedRequest {
    successful: false;
    message?: string;
    errors?: string[];
  }

  interface UserInfo{
    email: string;
    name: string;

  }
