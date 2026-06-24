import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { CadastroComponent } from './cadastro-component/cadastro-component';
import { TelaInicioComponent } from './tela-inicio-component/tela-inicio-component';
import { PaginaJogoComponent } from './pagina-jogo-component/pagina-jogo-component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'jogos/:id', component: PaginaJogoComponent},
  { path: '', component: TelaInicioComponent } // rota padrão:
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
