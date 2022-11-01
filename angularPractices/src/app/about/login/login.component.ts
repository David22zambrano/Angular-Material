import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Output() sideToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

 onSideToggle(){
  this.sideToggle.emit();
}
}
