import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlnjuyF_hk_0k7WM0zHcqIRqNrWWSoAMs',
      authDomain: 'ng-course-recipes-e1b00.firebaseapp.com',
      databaseURL: 'https://ng-course-recipes-e1b00.firebaseio.com',
      projectId: 'ng-course-recipes-e1b00',
      storageBucket: 'ng-course-recipes-e1b00.appspot.com',
      messagingSenderId: '650318893167'
    });
  }
}
