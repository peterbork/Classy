import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  changeTab(event) {
    const tabs = document.getElementsByClassName('tab');
    const contects = document.getElementsByClassName('content');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    for (let i = 0; i < contects.length; i++) {
      contects[i].classList.remove('active');
    }
    event.target.className += ' active';
    document.getElementsByClassName('content ' + event.target.classList[1])[0].className += ' active';
  }

}
