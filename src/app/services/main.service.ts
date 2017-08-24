import { Injectable } from '@angular/core';
import { Home } from '../home';
import { HOMES } from '../homeData';
@Injectable()
export class MainService {

  constructor() { }

  getData(): Home[] {
      return HOMES;
  }
}
