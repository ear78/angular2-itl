import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PartsAndServiceComponent } from './components/parts-and-service/parts-and-service.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainService } from './services/main.service';
import { LoginComponent } from './components/login/login.component';
import { SlidedownDirective } from './directives/slidedown.directive';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PartsAndServiceComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    SlidedownDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-itl')
  ],
  providers: [MainService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
