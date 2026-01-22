import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  
  currentSlide = 0;
  
  carouselItems = [
    {
      title: 'Premium CNC Machine Covers',
      description: 'Protect your valuable CNC machines with our high-quality telescopic covers',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop'
    },
    {
      title: 'Expert Servicing & Maintenance',
      description: 'Professional servicing to keep your equipment running smoothly',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored covers designed specifically for your machine requirements',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop'
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
    }, 5000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  scrollToEnquiry() {
    this.router.navigate(['/contact'], { fragment: 'enquiry-form' });
  }
}
