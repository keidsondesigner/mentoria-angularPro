import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(value: number): unknown {
  if (value === 0) return 'Produto indisponível';
  if (value === 1) return 'Último em estoque. Corra antes que esgote!';
  return `${value} disponíveis`;
  }
}
