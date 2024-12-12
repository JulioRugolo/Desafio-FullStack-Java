import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { HttpService } from '../../service/http-service.service';

@Component({
  selector: 'app-cadastro-comentario',
  templateUrl: './cadastro-comentario.component.html',
  styleUrls: ['./cadastro-comentario.component.css']
})
export class CadastroComentarioComponent implements OnInit {
  formComentario: FormGroup;
  pontoTuristicoId: string;

  constructor(
    private formBuilder: FormBuilder,
    private poNotification: PoNotificationService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {
    this.formComentario = this.formBuilder.group({
      autor: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obter o ID do ponto turístico da rota
    this.pontoTuristicoId = this.activatedRoute.snapshot.paramMap.get('idPontoTuristico');
    if (!this.pontoTuristicoId) {
      this.poNotification.error('ID do ponto turístico não encontrado.');
      this.router.navigate(['/ponto-turistico']);
    }
  }

  salvar(): void {
    if (this.formComentario.invalid) {
      this.poNotification.warning('Preencha todos os campos antes de salvar.');
      return;
    }

    const novoComentario = {
      ...this.formComentario.value,
      pontoTuristicoId: this.pontoTuristicoId
    };

    this.httpService.post(`ponto-turistico/${this.pontoTuristicoId}/comentarios`, novoComentario).subscribe({
      next: () => {
        this.poNotification.success('Comentário adicionado com sucesso!');
        this.router.navigate([`/ponto-turistico/${this.pontoTuristicoId}`]);
      },
      error: () => {
        this.poNotification.error('Erro ao adicionar o comentário.');
      }
    });
  }

  cancelar(): void {
    this.router.navigate([`/ponto-turistico/${this.pontoTuristicoId}`]);
  }
}
