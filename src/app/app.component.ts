import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD59YCflhv7HWSTLJgqRFwBDA5iY0-GgjM",
      authDomain: "balkan-dreams-89.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
