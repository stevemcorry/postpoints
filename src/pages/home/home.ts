import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Category } from '../../modals/category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  categories: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public angFire: AngularFire, public alertCtrl: AlertController) {
    this.categories = angFire.database.list('/Categories');
  }
  popular = [1,2,3];
  add(){
    let prompt = this.alertCtrl.create({
      title: 'Add a Category',
      inputs: [
        {
          name: 'name',
          placeholder: 'Category name'
        },
        {
          name: 'img',
          placeholder: "image"
        }
      ],
      buttons: [
        {
          text: "cancel",
          handler: data => {
          }
        },
        {
          text: "Save",
          handler: data => {
            this.categories.push({
              name: data.name,
              img: data.img
            })
          }
        }
      ]
    });
    prompt.present();
  }
  nextPage(x){
    this.navCtrl.push( Category, {category: x})
  }


  log(x){
    console.log(x)
  }
}
