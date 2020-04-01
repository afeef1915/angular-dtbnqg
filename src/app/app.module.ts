import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AComponentComponent,
    BComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
