/**
 * Hero Component
 * 
 * This component displays a responsive image carousel/slider at the top of the page
 * with the following features:
 * - Auto-playing slides with smooth transitions
 * - Different images for mobile and desktop views
 * - Dots navigation indicator
 * - Hover effects on images
 * - Trusted customers counter section
 * 
 * Uses react-slick library for the carousel functionality
 */

import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

// Array of slide objects containing image URLs for mobile and desktop
const slides = [
  {
    href: '',
    mobile: 'https://www.zuclothing.com/cdn/shop/files/ZU_mobile_banner_shyam_2_x800.jpg?v=1750679582',
    desktop: 'https://www.zuclothing.com/cdn/shop/files/zu_web_banner_shyam_2_x800.jpg?v=1750679588',
  },
  {
    href: '',
    mobile: 'https://www.zuclothing.com/cdn/shop/files/ZU_mobile_banner_shyam_1c5b59f0-bfa9-45f8-98f5-45e88ef06bdc_x800.jpg?v=1750664498',
    desktop: 'https://www.zuclothing.com/cdn/shop/files/zu_web_banner_shyam_ff062b20-3809-41ba-9c14-13edde7dd973_x800.jpg?v=1750664490',
  },
  {
    href: '',
    mobile: 'https://www.zuclothing.com/cdn/shop/files/1_6fa6104c-4849-4aaa-b694-e3d7da0f0eac_x800.jpg?v=1750483769',
    desktop: 'https://www.zuclothing.com/cdn/shop/files/1_2f7df87d-676a-4cb6-a7f2-9d7ab4f09c2f_x800.jpg?v=1750483737',
  },
  {
    href: '',
    mobile: 'https://www.zuclothing.com/cdn/shop/files/4_2947e051-a9f5-4ac7-97f4-4b6a3ae0f74e_x800.jpg?v=1750483769',
    desktop: 'https://www.zuclothing.com/cdn/shop/files/4_x800.jpg?v=1750483737',
  },
];

// Configuration settings for the react-slick carousel
const settings = {
  dots: true,                   // Show dots navigation
  infinite: true,               // Infinite loop sliding
  speed: 800,                   // Transition speed in ms
  slidesToShow: 1,              // Number of slides to show at once
  slidesToScroll: 1,            // Number of slides to scroll
  autoplay: true,               // Auto-play slides
  autoplaySpeed: 3000,          // Auto-play interval in ms
  arrows: false,                // Hide navigation arrows
  pauseOnHover: false,          // Continue autoplay on hover
  adaptiveHeight: true,         // Adjust height to current slide
};

const Hero = () => {
  return (
    <>
      {/* Main carousel section */}
      <section id="zu-carousel-section" className="bg-dark">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.href}
              className="carousel-cell"
              style={{ display: 'block', width: '100%' }}
            >
              {/* Responsive image with different sources for mobile/desktop */}
              <picture>
                <source media="(min-width: 768px)" srcSet={slide.desktop} />
                <img
                  src={slide.mobile}
                  alt={`ZU Slide ${index + 1}`}
                  className="img-fluid w-100"
                  style={{ minHeight: '400px', objectFit: 'cover' }}
                />
              </picture>
            </a>
          ))}
        </Slider>
      </section>

      {/* Trusted customers counter section */}
      <div className="hero-bottom">
        <h3>Trusted by</h3>
        <h2>1LAC+ CUSTOMERS</h2>
      </div>

      {/* Spacer div (adjust height as needed) */}
      <div className="height"></div>
    </>
  );
};

export default Hero;