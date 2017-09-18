import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate} from "@angular/animations";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
      trigger('testAnimate', [
          transition('* => fadeIn', [style({opacity:0}),
              animate(2000, style({opacity: 1}))
          ]),
          transition('* => fadeOut', [
              animate(2000, style({opacity: 0}))
          ])
      ])
  ]
})
export class FooterComponent implements OnInit {
  isClicked = false;
  isAnimate = '';

  fadeIn() {
      this.isAnimate = 'fadeIn';
  }
  fadeOut(){
      this.isAnimate = 'fadeOut';
  }

  toggle(){
      this.isAnimate == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
      this.isClicked = !this.isClicked;
  }

}
