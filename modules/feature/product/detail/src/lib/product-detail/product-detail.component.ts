/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {

  id$!: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id$ = this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  }
}
