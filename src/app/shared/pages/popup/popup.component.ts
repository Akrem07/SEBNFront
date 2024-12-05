import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() title: string = '';
  @Input() showPopup: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit();
  }

  
}
