import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Author } from '../models/author/author.model';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorStoreService {
private defaultAuthors: Author[] = [];
private isLoading$$ = new BehaviorSubject<boolean>(false);
private authors$$ = new BehaviorSubject<Author[]>(this.defaultAuthors);

isLoading$ = this.isLoading$$.asObservable();
authors$ = this.authors$$.asObservable();

  constructor(private authorService: AuthorService) { }

  getAll(){
    return this.authorService.getAll().subscribe();
  }

  addAuthor(name: string){
      return this.authorService.addAuthor(name).subscribe(response => response);
  }
}
