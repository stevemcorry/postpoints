import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class Category {
  categories: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public angFire: AngularFire, public alertCtrl: AlertController, public params: NavParams) {
    this.categories = angFire.database.list('/Categories');
    this.category = this.params.get('category')
  }
  category;
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