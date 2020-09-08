import { Component ,OnInit} from '@angular/core';
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  constructor(  ) { }

  ngOnInit(): void { 
  }
  openNav() {
    document.getElementById('myNav').style.width = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.width = '0';
  }

}

