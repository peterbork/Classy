import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  backgroundColor;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((res) => {
      switch (this.router.url.split('/')[1]) {
          case '':
          this.backgroundColor = 'transparent';
          break;
          case 'collection':
          this.backgroundColor = 'transparent';
          break;
          case 'product':
          this.backgroundColor = '#333';
          break;
          case 'contact':
          this.backgroundColor = '#333';
          break;
      }
    });
  }
}
