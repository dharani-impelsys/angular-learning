import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  message:string = "I'm parent";
  childMessage:string = "I'm passed from header parent to child component";
}
