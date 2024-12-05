import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-hm',

  templateUrl: './side-bar-hm.component.html',
  styleUrl: './side-bar-hm.component.css'
})
export class SideBarHmComponent {
  @Output() emitter : EventEmitter<string> = new EventEmitter<string>();

  emit(page: string){
    this.emitter.emit(page);
  }
}
