import { inject, TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ...', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('[SOMA] Deve garantir que 2 + 2 = 4', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(2, 2, CalculadoraService.SOMA);
      expect(soma).toEqual(4);
    }
  ));

  it('[SUBTRACAO] Deve garantir que 4 - 1 = 3', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(4, 1, CalculadoraService.SUBTRACAO);
      expect(soma).toEqual(3);
    }
  ));

  it('[DIVISAO] Deve garantir que 4 / 2 = 2', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(soma).toEqual(2);
    }
  ));

  it('[MULTIPLICACAO] Deve garantir que 2 * 2 = 4', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(2, 2, CalculadoraService.MULTIPLICACAO);
      expect(soma).toEqual(4);
    }
  ));

  it('[VALOR DEFAULT] Deve retornar 0 para operação inválida', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, '%');
      expect(soma).toEqual(0);
    }
  ));
});
