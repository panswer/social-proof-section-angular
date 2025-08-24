import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../components/atoms/title/title.component';
import { ParagraphComponent } from '../../components/atoms/paragraph/paragraph.component';
import { RateComponent } from '../../components/molecules/rate/rate.component';
import { rateItems } from '../../utils/consts';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { CommentItem } from '../../interfaces/comment-item';
import { CardCommentComponent } from '../../components/organisms/card-comment/card-comment.component';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-home',
  imports: [TitleComponent, ParagraphComponent, RateComponent, CommonModule, CardCommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = "10,000+ of our users love our products.";
  paragraph = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.";

  rateList = rateItems;
  commentList: Comment[] = [];

  constructor(
    private readonly commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.loadComment();
  }

  loadComment() {
    this
      .commentService
      .getComments()
      .subscribe(res => {
        this.commentList = res.map((commentItem, index) => ({
          avatar: commentItem.avatar,
          comment: commentItem.comment,
          index,
          name: commentItem.name,
          status: commentItem.status,
        }))
      });
  }
}
