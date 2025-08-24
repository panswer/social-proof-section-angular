import { Component, Input } from '@angular/core';
import { CardComponent } from '../../atoms/card/card.component';
import { CardBodyComponent } from '../../atoms/card-body/card-body.component';
import { UserCommentComponent } from '../../molecules/user-comment/user-comment.component';

@Component({
  selector: 'app-card-comment',
  imports: [CardComponent, CardBodyComponent, UserCommentComponent],
  templateUrl: './card-comment.component.html',
  styleUrl: './card-comment.component.scss'
})
export class CardCommentComponent {
  @Input() avatar: string | undefined;
  @Input() name: string | undefined;
  @Input() status: string | undefined;
  @Input() comment: string | undefined;
}
