import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  // EDIT THIS: Update with your company's actual location coordinates
  companyLocation = {
    lat: 40.7128,  // Example: New York City coordinates
    lng: -74.0060,
    name: 'CNC Cover Services'
  };

  enquiryForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    // EDIT THIS: Add your form submission logic here
    console.log('Form submitted:', this.enquiryForm);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.enquiryForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      this.submitted = false;
    }, 3000);
  }

  ngAfterViewInit() {
    // Scroll to enquiry form if hash is present in URL
    setTimeout(() => {
      if (window.location.hash === '#enquiry-form') {
        document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }

  scrollToEnquiry() {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  }
}
