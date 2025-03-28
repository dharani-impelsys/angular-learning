import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AiTrendsComponent } from './ai-trends/ai-trends.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { GenAiComponent } from './gen-ai/gen-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    NotfoundComponent,
    HomeComponent,
    AiTrendsComponent,
    RegistrationComponent,
    ContactUsComponent,
    SignUpComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    MachineLearningComponent,
    DeepLearningComponent,
    GenAiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
