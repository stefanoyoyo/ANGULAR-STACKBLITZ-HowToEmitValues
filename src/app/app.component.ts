import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements onChanges  {
  name = 'Angular ' + VERSION.major;
  
  count: number = 0;
  
  countInc(){
    ++ this.count;
  }
  
  onChanges() {
    
  }
  
  
}
