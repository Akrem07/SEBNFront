import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-employee',

  templateUrl: './side-bar-employee.component.html',
  styleUrl: './side-bar-employee.component.css'
})
export class SideBarEmployeeComponent {
  @Output() emitter : EventEmitter<string> = new EventEmitter<string>();

  emit(page: string){
    this.emitter.emit(page);
  }
}
