import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TelaInicioComponent } from './tela-inicio-component/tela-inicio-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { LoginComponent } from './login-component/login-component';
import { CadastroComponent } from './cadastro-component/cadastro-component';

@NgModule({
  declarations: [App, TelaInicioComponent, NavBarComponent, LoginComponent, CadastroComponent],

  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
