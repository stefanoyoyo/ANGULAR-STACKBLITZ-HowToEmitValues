import { Component, VERSION } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  constructor() {
this.getValue().subscribe((value) => {
      this.count = value;
    });
  }
  
  count: BehaviourSubject<number> = new BehaviourSubject(0);
  
  countInc(){
    this.setValue(++this.count.value);
  }
  
  /** Mehtods to monitor variavle changes */
    setValue(newValue): void {
      this.count.next(newValue);
    }
    
    getValue(): Observable<number> {
      console.log(this.count);
      return this.count.asObservable();
    }
  
  
}
