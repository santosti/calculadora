import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  adicionarNumero(numero: string): void {
    if (!this.operacao) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal
   * @param numeroAtual
   * @param numeroConcatenado
   * @return string
   */
  concatenarNumero(numeroAtual: string, numeroConcatenado: string): string {
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }

    if (numeroConcatenado === '.' && numeroAtual === '') {
      return '0.';
    }

    if (numeroConcatenado === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcatenado;
  }

  definirOperacao(operacao: string): void {
    if (!this.operacao) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      console.log('oper',operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (!this.numero2) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora
   * @return string
   */
  get display(): string {
    if (this.resultado) {
      return this.resultado.toString();
    }

    if (this.numero2) {
      return this.numero2;
    }

    return this.numero1;
  }
}
