import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    @Input() content;
    @Input() labels;
  constructor() { }
  active = 0;
  ngOnInit() {}
  changeTab(tabId) {
      this.active = tabId;
  }
}
