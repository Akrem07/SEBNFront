import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-depmanager',

  templateUrl: './side-bar-depmanager.component.html',
  styleUrl: './side-bar-depmanager.component.css'
})
export class SideBarDepmanagerComponent {
  @Output() emitter : EventEmitter<string> = new EventEmitter<string>();

  emit(page: string){
    this.emitter.emit(page);
  }
}
