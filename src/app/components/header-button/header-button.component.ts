import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  // what i get from the parnet commponnet
  @Input() text!: string;
  @Input() color!: string;
  // what i send out from the componnrt
  @Output() btnClick = new EventEmitter;

  onAdd() {
    this.btnClick.emit();
  }

}
