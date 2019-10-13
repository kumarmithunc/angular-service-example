import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';


@Injectable()
export class AppService {
  errorFromSubscribe;
  //result;

  constructor(private http : Http) { }

  //http : Http;
  

  getdata()  {
    
    return this.http.get('https://api.myjson.com/bins/1gb9tf')
      

      
  }

}