import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import {MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import {MatSliderModule} from '@angular/material/slider';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 



import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './Services/dish.service';
import { PromotionService } from './Services/promotion.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
   
  ],
  entryComponents:[
LoginComponent    
  ],
  providers: [DishService,PromotionService, 
    {provide: 'BaseURL', useValue: environment.baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
