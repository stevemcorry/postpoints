import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Saved } from '../pages/saved/saved';
import { Free } from '../pages/free/free';
import { Refer } from '../pages/refer/refer';
import { Contact } from '../pages/contact/contact';
import { Help } from '../pages/help/help';



@NgModule({
  declarations: [
    MyApp,
    Home,
    Saved,
    Free,
    Refer,
    Contact,
    Help,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Saved,
    Free,
    Refer,
    Contact,
    Help,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
