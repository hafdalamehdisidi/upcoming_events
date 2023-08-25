import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastEventsComponent } from './Events/components/past-events/past-events.component';
import { CreateEventComponent } from './Events/components/create-event/create-event.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Events/views/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginregisterComponent } from './Events/components/loginregister/loginregister.component';
import { PageregisterComponent } from './Events/components/pageregister/pageregister.component';
import { UpcomingEventsComponent } from '../app/Events/components/upcoming-events/upcoming-events.component';
import { SliderComponent } from './Events/components/slider/slider.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PastEventsComponent,
    HomeComponent,
    LoginregisterComponent,
    FooterComponent,
    PageregisterComponent,
    UpcomingEventsComponent,

    CreateEventComponent,

    SliderComponent,
      HeaderComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
