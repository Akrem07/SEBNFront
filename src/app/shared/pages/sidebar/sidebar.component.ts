import { Component,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() emitter : EventEmitter<string> = new EventEmitter<string>();

  emit(page: string){
    this.emitter.emit(page);
  }
}
