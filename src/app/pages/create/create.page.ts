import { Component, OnInit } from '@angular/core';

const addActivityDivString: string = "add-activity-card"
const activityCardCode: string = "<ion-card class=\"activity-card\"><ion-card-header><ion-card-title>ADD ACTIVITY</ion-card-title></ion-card-header><ion-card-content><ion-item><ion-input id=\"activity-input\" type=\"text\" placeholder=\"Activity Name\"></ion-input></ion-item><ion-item><ion-label id=\"cost-input\" color=\"new\">Cost: </ion-label><ion-input type=\"number\" placeholder=\"0\"></ion-input></ion-item><ion-item><ion-textarea id=\"notes-input\" placeholder=\"Additional Notes (optional)\" class=\"ion-text-left\"></ion-textarea></ion-item></ion-card-content></ion-card>";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // When Add Activity button is clicked, create new activity card
  onClickAddActivity() {
    console.log("clicked add activity button");
    let element = document.getElementById(addActivityDivString);
    element.innerHTML = element.innerHTML + activityCardCode;
  }

  onClickSave() {
    console.log("clicked save button");
  }

}
