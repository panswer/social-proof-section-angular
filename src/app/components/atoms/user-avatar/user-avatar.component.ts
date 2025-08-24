import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  imports: [],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent {
  @Input() image = "";
}
