import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComentarioComponent } from './comentarios/cadastro-comentario/cadastro-comentario.component';
import { CadastroPaisesComponent } from './paises/cadastro-paises/cadastro-paises.component';
import { PaisesComponent } from './paises/paises.component';
import { CadastroPontosTuristicosComponent } from './pontos-turisticos/cadastro-pontos-turisticos/cadastro-pontos-turisticos.component';
import { PontosTuristicosComponent } from './pontos-turisticos/pontos-turisticos.component';

const routes: Routes = [
  {
    path: 'pais',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PaisesComponent,
      },
      {
        path: 'cadastro',
        children: [
          {
            path: ':idPais',
            component: CadastroPaisesComponent,
            data: { tipoCadastroPais: '' },
          },
          {
            path: '',
            pathMatch: 'full',
            component: CadastroPaisesComponent,
            data: { tipoCadastroPais: 'new' },
          },
        ],
      },
    ],
  },
  {
    path: 'ponto-turistico',
    children: [
      {
        path: '',
        component: PontosTuristicosComponent, // Listagem de pontos turísticos
      },
      {
        path: 'cadastro',
        children: [
          {
            path: ':idPontoTuristico',
            component: CadastroPontosTuristicosComponent,
            data: { tipoCadastroPontoTuristico: 'view' },
          },
          {
            path: '',
            pathMatch: 'full',
            component: CadastroPontosTuristicosComponent,
            data: { tipoCadastroPontoTuristico: 'new' },
          },
        ],
      },
      {
        path: ':idPontoTuristico',
        component: PontosTuristicosComponent, // Página de detalhes do ponto turístico
        children: [
          {
            path: 'comentario',
            children: [
              {
                path: '',
                component: CadastroComentarioComponent,
                data: { tipoCadastroComentario: 'new' },
              },
              {
                path: ':idComentario',
                component: CadastroComentarioComponent,
                data: { tipoCadastroComentario: 'view' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pais',
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
