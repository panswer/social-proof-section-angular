import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from '../../atoms/user-avatar/user-avatar.component';
import { UserNameComponent } from '../../atoms/user-name/user-name.component';
import { UserStatusComponent } from '../../atoms/user-status/user-status.component';

@Component({
  selector: 'app-user-comment',
  imports: [UserAvatarComponent, UserNameComponent, UserStatusComponent],
  templateUrl: './user-comment.component.html',
  styleUrl: './user-comment.component.scss'
})
export class UserCommentComponent {
  @Input() avatar = "";
  @Input() name = "";
  @Input() status = "";
}
