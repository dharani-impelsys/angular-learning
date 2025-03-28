import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AiTrendsComponent} from './ai-trends/ai-trends.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MachineLearningComponent} from './machine-learning/machine-learning.component';
import {DeepLearningComponent} from './deep-learning/deep-learning.component';
import {GenAiComponent} from './gen-ai/gen-ai.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'ai-trends', component: AiTrendsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'machine-learning', component: MachineLearningComponent},
  {path: 'deep-learning', component: DeepLearningComponent},
  {path: 'gen-ai', component: GenAiComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
