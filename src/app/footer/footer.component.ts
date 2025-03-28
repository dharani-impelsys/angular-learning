import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
@Input() greetMessage!:string;
@Input() byeMessage!:string;
constructor() { }
ngOnInit() {
  console.log(this.greetMessage);
  console.log(this.byeMessage);
}

}
