import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { HttpService } from '../../service/http-service.service';

@Component({
  selector: 'app-cadastro-pontos-turisticos',
  templateUrl: './cadastro-pontos-turisticos.component.html',
  styleUrls: ['./cadastro-pontos-turisticos.component.css']
})
export class CadastroPontosTuristicosComponent implements OnInit {
  idPontoTuristico: string;
  formPontoTuristico: FormGroup;
  title: string = 'Novo cadastro de Ponto Turístico';

  constructor(
    private formBuilder: FormBuilder,
    private poNotification: PoNotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) {
    this.formPontoTuristico = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      melhorEstacao: ['', Validators.compose([Validators.required])],
      resumo: [''],
      paisId: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.idPontoTuristico = this.route.snapshot.paramMap.get('idPontoTuristico');
    if (this.idPontoTuristico !== null) {
      this.buscaDadosPontoTuristico();
      this.title = 'Alteração do Ponto Turístico';
    }
  }

  salvar(): void {
    if (this.validarRegistro()) {
      if (this.idPontoTuristico === null) {
        this.enviarPost();
      } else {
        this.enviarPut();
      }
    } else {
      this.poNotification.error('Preencha todos os campos antes de salvar as alterações!');
    }
  }

  voltar(): void {
    this.router.navigate(['/ponto-turistico'], { relativeTo: this.route });
  }

  validarRegistro(): boolean {
    return this.formPontoTuristico.valid;
  }

  enviarPost(): void {
    this.http.post('ponto-turistico', this.formPontoTuristico.value).subscribe({
      next: () => {
        this.poNotification.success('Registro criado com sucesso!');
        this.voltar();
      },
      error: (erro) => {
        this.poNotification.error(erro);
      }
    });
  }

  enviarPut(): void {
    this.http.put(`ponto-turistico/${this.idPontoTuristico}`, this.formPontoTuristico.value).subscribe({
      next: () => {
        this.poNotification.success('Registro atualizado com sucesso!');
        this.voltar();
      },
      error: (erro) => {
        this.poNotification.error(erro);
      }
    });
  }

  buscaDadosPontoTuristico(): void {
    this.http.get(`ponto-turistico/${this.idPontoTuristico}`).subscribe({
      next: (resposta) => {
        this.formPontoTuristico.patchValue({
          nome: resposta.nome,
          cidade: resposta.cidade,
          melhorEstacao: resposta.melhorEstacao,
          resumo: resposta.resumo,
          paisId: resposta.paisId
        });
      },
      error: (erro) => {
        this.poNotification.error(erro);
      }
    });
  }
}
