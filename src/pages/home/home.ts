import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
    
  }
  popular = [1,2,3]
  categories = [
    {name: "Food"},
    {name: "Fun & Fitness"},
    {name: "Shopping"},
    {name: "Online"},
    {name: "More"},
    {name: "Map"}
  ]
}
