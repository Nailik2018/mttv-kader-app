import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  navbarOpen = false;
  selectedID = 'overview-players';
  elementStyleColor = '';
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  seletedRiter(event): void {
    console.log('Hallo Welt');
    document.getElementById(this.selectedID).style.color = 'white';
    this.selectedID = event.target.id;
    switch (this.selectedID) {
      case 'overview-players':
        document.getElementById('create-new-player').style.color = 'lightgray';
        break;
      case 'create-new-player':
        document.getElementById('overview-players').style.color = 'lightgray';
        break;
      default:
        console.log('default case selectedRiter');
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
