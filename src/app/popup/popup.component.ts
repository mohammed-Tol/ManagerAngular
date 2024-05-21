import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  inputValue: string = '';

  @Output() close = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  closePopup() {
    this.close.emit(this.inputValue); // Pass data back to parent component if needed
  }
  ResetPopup(){
    this.onCancel.emit();
  }
}
