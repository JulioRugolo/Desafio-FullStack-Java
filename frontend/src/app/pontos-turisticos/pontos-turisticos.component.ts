import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { HttpService } from '../service/http-service.service';

@Component({
  selector: 'app-pontos-turisticos',
  templateUrl: './pontos-turisticos.component.html',
  styleUrls: ['./pontos-turisticos.component.css']
})
export class PontosTuristicosComponent implements OnInit {
  lsActions: Array<PoTableAction>;
  lsColumns: Array<PoTableColumn>;
  lsPontosTuristicos: Array<PontoTuristico> = [];

  constructor(
    private httpService: HttpService,
    private poNotification: PoNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Carregar ações e colunas
    this.lsActions = this.carregarActions();
    this.lsColumns = this.carregarColunas();
  }

  ngOnInit(): void {
    this.carregarPontosTuristicos();
  }

  carregarActions(): Array<PoTableAction> {
    return [
      {
        label: 'Editar',
        icon: 'po-icon-edit',
        action: (row: PontoTuristico) => this.navegarParaCadastro(row.id)
      },
      {
        label: 'Excluir',
        icon: 'po-icon-delete',
        action: (row: PontoTuristico) => this.deletarCadastro(row.id)
      }
    ];
  }

  deletarCadastro(id: string): void {
    this.httpService.delete(`ponto-turistico/${id}`).subscribe({
      next: () => {
        this.poNotification.success('Registro excluído com sucesso!');
        this.carregarPontosTuristicos();
      },
      error: (error) => {
        this.poNotification.error('Erro ao excluir o ponto turístico: ' + error.message);
      }
    });
  }

  navegarParaCadastro(idPontoTuristico: string = ''): void {
    if (idPontoTuristico) {
      this.router.navigate(['ponto-turistico', 'cadastro', idPontoTuristico]);
    } else {
      this.router.navigate(['ponto-turistico', 'cadastro']);
    }
  }

  navegarParaDetalhes(idPontoTuristico: string): void {
    if (idPontoTuristico) {
      this.router.navigate([`/ponto-turistico/${idPontoTuristico}`]);
    } else {
      this.poNotification.error('ID do ponto turístico não encontrado.');
    }
  }

  carregarPontosTuristicos(): void {
    this.httpService.get('ponto-turistico').subscribe({
      next: (resposta) => {
        this.lsPontosTuristicos = resposta.map((item: any) => ({
          id: item.id,
          nome: item.nome,
          cidade: item.cidade,
          melhorEstacao: item.melhorEstacao,
          resumo: item.resumo,
          pais: item.pais?.nome || 'Não informado'
        }));
      },
      error: (error) => {
        this.poNotification.error('Erro ao carregar os pontos turísticos: ' + error.message);
      }
    });
  }

  carregarColunas(): Array<PoTableColumn> {
    return [
      {
        property: 'nome',
        label: 'Nome',
        type: 'link',
        action: (row: any) => {
          if (row.id) {
            this.navegarParaDetalhes(row.id); // Certifique-se de usar `row.id`
          } else {
            this.poNotification.error('ID do ponto turístico não encontrado.');
          }
        }
      },
      {
        property: 'cidade',
        label: 'Cidade',
      },
      {
        property: 'melhorEstacao',
        label: 'Melhor Estação',
      },
      {
        property: 'pais',
        label: 'País',
      },
      {
        property: 'resumo',
        label: 'Resumo',
      },
    ];
  }
}

interface PontoTuristico {
  id: string;
  nome: string;
  cidade: string;
  melhorEstacao: string;
  resumo: string;
  pais: string; // Nome do país relacionado
}
