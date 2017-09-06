import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentIndex;
  slideContainer;
  indicators;
  progress = 0;
  constructor(private router: Router) { }
  ngOnInit () {
    if (this.router.url === '/') {
        setInterval(() => {
            this.progress += 1;
            if (this.progress >= 100) {
                this.nextSlide();
                this.progress = 0;
            }
        }, 100);
    }
  }
  findCurrentSlide() {
    this.progress = 0;
    this.slideContainer = document.getElementById('slide-container');
    for (let i = 0; i < this.slideContainer.children.length; i++) {
      if (this.slideContainer.children[i].className === 'slide current') {
        this.currentIndex = i;
      }
    }
    this.indicators = document.getElementById('indicators');
    for (let i = 0; i < this.indicators.children.length; i++) {
      if (this.indicators.children[i].className === 'indicator current') {
        this.currentIndex = i;
      }
    }

    for (let i = 0; i < this.slideContainer.children.length; i++) {
      this.slideContainer.children[i].classList.remove('current');
    }
    for (let i = 0; i < this.indicators.children.length; i++) {
      this.indicators.children[i].classList.remove('current');
    }
  }
  nextSlide () {
    this.findCurrentSlide();
    const current = this.currentIndex;
    const childrenCount = this.slideContainer.children.length;
    if (current + 1 === childrenCount) {
      this.slideContainer.children[0].className += ' current';
      this.indicators.children[0].className += ' current';
    } else {
      this.slideContainer.children[current + 1].className += ' current';
      this.indicators.children[current + 1].className += ' current';
    }
  }
  prevSlide () {
    this.findCurrentSlide();
    const current = this.currentIndex;
    const childrenCount = this.slideContainer.children.length;
    if (current === 0) {
      this.slideContainer.children[this.slideContainer.children.length].className += ' current';
    } else {
      this.slideContainer.children[current - 1].className += ' current';
    }
  }
  changeToThisSlide(event) {
    this.findCurrentSlide();
    let localIndex;
    event.target.className += ' current';
    for (let i = 0; i < this.indicators.children.length; i++) {
      if (this.indicators.children[i].className === 'indicator current') {
        localIndex = i;
      }
    }
    this.slideContainer.children[localIndex].className += ' current';

  }
}
