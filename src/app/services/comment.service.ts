import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { CommentItem } from '../interfaces/comment-item';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly api = inject(HttpClient);

  getComments(): Observable<CommentItem[]> {
    return this
      .api
      .get("/api/comments.json")
      .pipe(
        switchMap((res: any) => of(
          res.map((commentItem: any) => ({
            avatar: commentItem.avatar,
            comment: commentItem.comment,
            name: commentItem.name,
            status: commentItem.status,
          } as CommentItem)))
        )
      );
  }
}
