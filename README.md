# CNC Cover Services - Angular Website

A modern, responsive Angular website for a CNC machine telescopic cover servicing company.

## Features

- ✅ Responsive navigation bar with mobile menu
- ✅ Home page with trending carousel
- ✅ About page with company information
- ✅ Services page with detailed service offerings
- ✅ Product page showcasing products
- ✅ Contact page with Google Maps integration and enquiry form
- ✅ Floating enquiry button on all pages
- ✅ Modern, beautiful UI with gradient designs

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd cnc-cover-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization Guide

### 1. Update Company Information

#### Contact Page (`src/app/pages/contact/contact.component.html`)
- **Map Location**: Replace the Google Maps iframe `src` with your actual location embed code
  - Go to Google Maps → Search your location → Share → Embed a map → Copy iframe code
- **Address**: Update the address in the contact information section
- **Phone**: Update phone number
- **Email**: Update email address (use `&#64;` instead of `@` in HTML)
- **Business Hours**: Update your business hours

#### Contact Component (`src/app/pages/contact/contact.component.ts`)
- Update `companyLocation` coordinates (lat/lng) if needed

### 2. Customize Content

All pages have sample content marked with `<!-- EDIT THIS: -->` comments. Simply search for these comments and replace the content:

- **About Page** (`src/app/pages/about/about.component.html`): Company story, mission, values, team info
- **Services Page** (`src/app/pages/services/services.component.html`): Service descriptions, features, process steps
- **Product Page** (`src/app/pages/product/product.component.html`): Product names, descriptions, features, prices
- **Home Page** (`src/app/pages/home/home.component.html`): Carousel items, feature descriptions

### 3. Update Images

Replace placeholder images in:
- Home page carousel (`src/app/pages/home/home.component.ts` - `carouselItems` array)
- Product page product images (`src/app/pages/product/product.component.html`)

### 4. Customize Colors

The main color scheme uses a purple gradient. To change colors, update the gradient values in:
- Navbar: `src/app/components/navbar/navbar.component.css`
- Hero sections: All page component CSS files
- Buttons: All component CSS files

Search for `#667eea` and `#764ba2` to find gradient colors.

### 5. Form Submission

The contact form currently logs to console. To connect it to a backend:

1. Update `onSubmit()` method in `src/app/pages/contact/contact.component.ts`
2. Add HTTP service to send form data to your API

Example:
```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

onSubmit() {
  this.http.post('your-api-endpoint', this.enquiryForm).subscribe(
    response => {
      this.submitted = true;
      // Handle success
    },
    error => {
      // Handle error
    }
  );
}
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── navbar/          # Navigation bar component
│   ├── pages/
│   │   ├── home/            # Home page with carousel
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── product/         # Product page
│   │   └── contact/         # Contact page with map and form
│   ├── app.component.*      # Root component
│   └── app.routes.ts        # Routing configuration
└── styles.css               # Global styles
```

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Additional Notes

- All components are standalone (Angular 17+)
- The enquiry floating button appears on all pages
- The carousel on the home page auto-rotates every 5 seconds
- The website is fully responsive and mobile-friendly
- Google Maps integration requires you to replace the placeholder iframe code

## Support

For Angular documentation, visit [angular.dev](https://angular.dev)
