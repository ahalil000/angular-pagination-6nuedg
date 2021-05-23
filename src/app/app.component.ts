import { Component } from '@angular/core';
import { MyClass } from './myclass';
import { getSampleData } from './sampledata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  sampledata: MyClass[] = getSampleData();
}

