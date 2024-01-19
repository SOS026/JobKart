import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { HelpcenterComponent } from './header/helpcenter/helpcenter.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofilesComponent } from './userprofiles/userprofiles.component';
import { ListjobComponent } from './listjob/listjob.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'about', component: AboutComponent},
  {path: 'helpcenter', component: HelpcenterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user-profiles', component: UserprofilesComponent},
  {path: 'list-job', component: ListjobComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
