import { Component, OnInit } from '@angular/core';
import { Home } from '../../home';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    homes: Home[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
      this.homes = this.mainService.getData();
  }


}
