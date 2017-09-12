import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
      {
      bg: 'slider-image-1.png',
      btn: 'learn more about great deals'
    },
    {
      bg: 'slider-image-2.png',
      btn: ''
    }
  ];
  currentSlide = 0;
  totalSlides = this.slides.length - 1;
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
  nextSlide() {
    (this.currentSlide !== this.totalSlides) ? this.currentSlide++ : this.currentSlide = 0;
    this.progress = 0;
  }
  prevSlide() {
      (this.currentSlide !== 0) ? this.currentSlide-- : this.currentSlide = this.totalSlides;
      this.progress = 0;
  }
  changeSlide(id) {
    this.currentSlide = id;
    this.progress = 0;
  }
}
