import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http-service.service';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  pontoTuristicoId: string; // ID do ponto turístico
  comentarios: Array<Comentario> = [];
  formComentario: FormGroup;

  constructor(
    private httpService: HttpService,
    private poNotification: PoNotificationService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.formComentario = this.formBuilder.group({
      autor: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Obter o ID do ponto turístico da URL
    this.pontoTuristicoId = this.activatedRoute.snapshot.paramMap.get('idPontoTuristico');
    if (this.pontoTuristicoId) {
      this.carregarComentarios();
    } else {
      this.poNotification.error('Ponto turístico não encontrado.');
    }
  }

  carregarComentarios(): void {
    this.httpService.get(`ponto-turistico/${this.pontoTuristicoId}/comentarios`).subscribe({
      next: (resposta) => {
        this.comentarios = resposta.length ? resposta : [];
      },
      error: () => {
        this.poNotification.error('Erro ao carregar os comentários.');
      }
    });
  }

  adicionarComentario(): void {
    if (this.formComentario.invalid) {
      this.poNotification.warning('Preencha todos os campos antes de enviar o comentário.');
      return;
    }

    const novoComentario = {
      ...this.formComentario.value,
      pontoTuristicoId: this.pontoTuristicoId,
    };

    this.httpService.post(`ponto-turistico/${this.pontoTuristicoId}/comentarios`, novoComentario).subscribe({
      next: (comentario) => {
        this.comentarios.push(comentario);
        this.formComentario.reset();
        this.poNotification.success('Comentário adicionado com sucesso!');
      },
      error: () => {
        this.poNotification.error('Erro ao adicionar o comentário.');
      }
    });
  }
}

interface Comentario {
  autor: string;
  texto: string;
  data: string;
}
