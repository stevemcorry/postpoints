import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Saved } from '../pages/saved/saved';
import { Free } from '../pages/free/free';
import { Refer } from '../pages/refer/refer';
import { Contact } from '../pages/contact/contact';
import { Help } from '../pages/help/help';

//Modals
import { Category } from '../modals/category/category';


// ANGULAR FIRE
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyASGQLdYEPXziFCFjavt04Ik06hPlwTtmo",
    authDomain: "coupost-7fc1b.firebaseapp.com",
    databaseURL: "https://coupost-7fc1b.firebaseio.com",
    projectId: "coupost-7fc1b",
    storageBucket: "coupost-7fc1b.appspot.com",
    messagingSenderId: "852600373661"
  };

@NgModule({
  declarations: [
    MyApp,

    //Pages
    Home,
    Saved,
    Free,
    Refer,
    Contact,
    Help,

    //Modals
    Category,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // PAGES
    Home,
    Saved,
    Free,
    Refer,
    Contact,
    Help,

    //Modals
    Category,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
