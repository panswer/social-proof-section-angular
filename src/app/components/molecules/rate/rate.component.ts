import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SubTitleComponent } from '../../atoms/sub-title/sub-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rate',
  imports: [IconComponent, SubTitleComponent, CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss'
})
export class RateComponent implements OnInit {
  @Input({ required: true }) stars = 5;
  @Input({ required: true }) subTitle = "";
  countStar: string[] = [];

  ngOnInit(): void {
    const fixedStar = parseInt(this.stars.toFixed(0));
    this.countStar = new Array(fixedStar).fill("");
  }
}
