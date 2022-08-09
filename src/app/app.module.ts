import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AllSolutionsComponent } from './all-solutions/all-solutions.component';
import { MulticloudComponent } from './multicloud/multicloud.component';
import { MicrosoftProductsComponent } from './microsoft-products/microsoft-products.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AllSolutionsComponent, MulticloudComponent, MicrosoftProductsComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
