import { Component, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription, fromEvent, Observable, from } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search', { static: false }) txtSearch: ElementRef;
  subscription: Subscription;
  posts: Post[] = [];

  ngAfterViewInit() {
    this.subscription = this.initSearch().subscribe(
      posts => this.posts = posts
    );
  }

  initSearch(): Observable<Post[]> {
    return fromEvent<any>(this.txtSearch.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter(search => search.trim().length > 0),
      switchMap(this.searchPosts)
    );
  }

  searchPosts(searchTerm: string): Observable<Post[]> {
    return from(
      fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`)
        .then(response => response.json())
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

type Post = {
  id: number,
  title: string,
  body: string
};
