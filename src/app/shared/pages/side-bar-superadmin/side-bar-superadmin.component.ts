import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-superadmin',

  templateUrl: './side-bar-superadmin.component.html',
  styleUrl: './side-bar-superadmin.component.css'
})
export class SideBarSuperadminComponent {
  @Output() emitter : EventEmitter<string> = new EventEmitter<string>();

  emit(page: string){
    this.emitter.emit(page);
  }
}
