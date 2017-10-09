import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule, MatButtonModule, MatCheckboxModule, MatListModule, MatGridListModule, MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatListModule, 
    MatGridListModule, 
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
