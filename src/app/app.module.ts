import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { AccordionModule } from 'ng2-accordion';
import { WellApplicationServices } from './well-application.service';
import { PriceService } from './price.service';

import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginAccordianComponent, SafePipe } from './login-accordian/login-accordian.component';
import { ProjectDescriptionAccordianComponent } from './project-description-accordian/project-description-accordian.component';
import { LegalDocAccordianComponent } from './legal-doc-accordian/legal-doc-accordian.component';
import { HopeTheticalCalculatorComponent } from './hope-thetical-calculator/hope-thetical-calculator.component';
import { TaxEffectToolComponent } from './tax-effect-tool/tax-effect-tool.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginAccordianComponent,
    ProjectDescriptionAccordianComponent,
    LegalDocAccordianComponent,

    SafePipe,

    HopeTheticalCalculatorComponent,

    TaxEffectToolComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    IonRangeSliderModule,
    AccordionModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhdhhvdxmrwApkcQ_OPHaBQz4i2-lGZPI'
    })
  ],
  providers: [
    WellApplicationServices,
    PriceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
