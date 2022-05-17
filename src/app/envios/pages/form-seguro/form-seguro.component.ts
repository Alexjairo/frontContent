import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { FormService } from '../form-envio/form.service';
@Component({
  selector: 'app-form-seguro',
  templateUrl: './form-seguro.component.html',
  styleUrls: ['./form-seguro.component.css']
})
export class FormSeguroComponent implements OnInit {

  constructor(
    private FormService: FormService
  ) { }

  ngOnInit(): void {
  }
  @HostListener('click')
  click() {
    this.FormService.toggle();
  }
}
