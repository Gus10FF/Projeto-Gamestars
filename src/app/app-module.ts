import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TelaInicioComponent } from './tela-inicio-component/tela-inicio-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { LoginComponent } from './login-component/login-component';
import { CadastroComponent } from './cadastro-component/cadastro-component';
import { PaginaJogoComponent } from './pagina-jogo-component/pagina-jogo-component';

@NgModule({
  declarations: [
    App,
    TelaInicioComponent,
    NavBarComponent,
    LoginComponent,
    CadastroComponent,
    PaginaJogoComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}