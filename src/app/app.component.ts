import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-graphs';

  states = [
    {
      name: "AZ",
      biden: 45,
      trump: 55
    },
    {
      name: "TX",
      biden: 20,
      trump: 80
    }
  ];

  name = '';
  trump = 0;
  biden = 0;

  addState() {
    const newState = {
      name: this.name,
      biden: this.biden,
      trump: this.trump
    }

    this.states.push(newState);

  }


}
