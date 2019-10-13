import { Component } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [AppService]
})
export class AppComponent  {
  name = 'Angular';
  result;
  errorFromSubscribe;
  errorFromCatch;
  displayItems;
  //constructor(private http : Http){}
  constructor(private appService : AppService){}
  onClick(){
    //this.http.get('https://api.myjson.com/bins/1gb9tf')
    this.appService.getdata()
    .subscribe((res : Response) => {
      this.result = res.json();
      this.displayItems = this.result['results'];
      console.log('reslut : ',this.displayItems[0]);
    },error => {
      this.errorFromSubscribe = error;
      console.log(error);
    });
  }

  
}
