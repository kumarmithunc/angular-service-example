import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './filterPipe';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent , FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
