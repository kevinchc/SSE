import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {AppComponent} from './app.component';
import { BaTopPage } from './themes/components/baTopPage/baTopPage.component';
import { BaSidebar } from './themes/components/baSidebar/baSidebar.component';
import { Tables } from './pages/tables/components/tables.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, BaTopPage, BaSidebar,Tables],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
