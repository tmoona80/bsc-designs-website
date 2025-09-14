BSC Designs Test Plan

This plan is a living document and can be updated as needed. 

Here is the current test areas we want to test:


## 20 Critical Test Cases for BSC Designs Website

### **Core Functionality Tests**

1. **Homepage loads successfully** - Verify main page loads within 3 seconds with all content visible
2. **Request a Quote form submission** - Fill out contact form and verify successful submission to Formspree
3. **Form validation works** - Test required field validation (name, email, message)
4. **Email delivery confirmation** - Verify form submissions reach both [info@bscdesigns.ca](mailto:info@bscdesigns.ca) and [01timsolomon@gmail.com](mailto:01timsolomon@gmail.com)
5. **Form error handling** - Test behavior when Formspree is unavailable or returns errors


### **Cross-Browser Compatibility**

6. **Chrome desktop rendering** - All sections display correctly in latest Chrome
7. **Safari desktop rendering** - All sections display correctly in latest Safari
8. **Firefox desktop rendering** - All sections display correctly in latest Firefox
9. **Edge desktop rendering** - All sections display correctly in latest Edge


### **Domain & URL Tests**

10. **Primary domain loads** - bscdesigns.ca loads correctly
11. **WWW subdomain loads** - [www.bscdesigns.ca](http://www.bscdesigns.ca) loads correctly
12. **Domain redirect consistency** - Both domains show identical content


### **Mobile Responsiveness**

13. **Mobile Chrome rendering** - Site is fully functional on mobile Chrome
14. **Mobile Safari rendering** - Site is fully functional on mobile Safari
15. **Tablet responsiveness** - Site adapts properly to tablet screen sizes
16. **Touch interactions work** - All buttons and forms work with touch input


### **Visual & Content Tests**

17. **Product showcase images load** - All 9 product category images display without broken links
18. **Navigation functionality** - All internal links and scroll-to-section navigation works
19. **Typography consistency** - All text renders correctly across different screen sizes
20. **Visual regression detection** - Screenshots match approved baseline designs


### **Performance Tests**

- **Bonus Test**: Page load performance stays under 3 seconds on 3G connection


// tests
  - npm test - Full test suite across all browsers
  - npm run test:core - Just core functionality tests
  - npm run test:headed - Tests with visible browser
  - npm run test:ui - Interactive test UI

