import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'login' , component: LoginFormComponent},
  { path: 'feedback', component: FeedbackFormComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule=[LoginFormComponent,FeedbackFormComponent,RegisterComponent];