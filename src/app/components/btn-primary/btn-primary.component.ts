import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = "primary" | "sencondary";

@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText : String = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

}
