# claude.md - BSC Designs Website Context

## Project Overview

**BSC Designs** is a custom printing and apparel company based in Toronto, Canada. We provide professional DTF printing, screen printing, embroidery, photography services, and event planning for businesses and individuals.

### Business Information
- **Company**: BSC Designs
- **Website**: www.bscdesigns.ca
- **Email**: info@bscdesigns.ca  
- **Phone**: (416) 788-3355
- **Location**: Toronto, ON, Canada
- **Instagram**: @bsc.designs

### Services Offered
1. **DTF Printing** - Direct-to-Film printing for vibrant designs on any fabric
2. **Screen Printing** - Traditional printing for large orders with consistent results
3. **Embroidery** - Premium embroidery services for professional appearance
4. **Photography** - Fashion, wedding, corporate, and product photography
5. **Event Planning / Project Management** - Creating memorable events
6. **Training and Workshops** - Interactive training sessions for teams

## Technical Stack

### Frontend Framework
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** components library
- **Lucide React** for icons

### Hosting & Deployment
- **Vercel** for hosting and deployment
- **GitHub** repository: `tmoona80/bsc-designs-website`
- **Auto-deployment** enabled from main branch
- **Custom domain**: www.bscdesigns.ca

### Form Handling
- **Formspree** endpoint: `https://formspree.io/f/xnnbrllp`
- Emails sent to: `info@bscdesigns.ca`
- Contact form integrated in main page

### Analytics & Tracking
- **Google Analytics**: G-MBE2TCJ3NT
- **Google Search Console** (configured)

## Project Structure

```
bsc-designs-website/
├── app/
│   ├── layout.tsx          # Root layout with analytics
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn/ui components
│   └── ContactSection.tsx  # Contact form component
├── public/
│   └── images/             # Product images and logos
└── package.json
```

## Design Principles

### Color Palette
- **Primary**: Blue (#1172d4, #007cba)
- **Secondary**: Green (#30a68a, #56756e)
- **Accent**: Various product-specific colors
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary Font**: Inter, "Noto Sans", sans-serif
- **Headings**: Bold, large sizes (text-3xl to text-7xl)
- **Body**: Regular weight, readable sizes

### Layout Structure
1. **Header** - Logo, navigation, CTA button
2. **Hero Section** - Large banner with value proposition
3. **Products Section** - Grid of printable products with images
4. **Services Section** - Detailed service cards
5. **Portfolio Section** - Customer project showcase with carousel
6. **Contact Section** - Quote request form
7. **Footer** - Contact info, social links, legal pages

## Code Review Guidelines

When reviewing code for this project, please focus on:

### 1. Performance
- [ ] Image optimization (Next.js Image component usage)
- [ ] Lazy loading implementation
- [ ] Bundle size considerations
- [ ] Core Web Vitals optimization

### 2. Accessibility
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Alt text for images

### 3. SEO
- [ ] Meta tags optimization
- [ ] Structured data implementation
- [ ] URL structure
- [ ] Page loading performance
- [ ] Mobile responsiveness

### 4. User Experience
- [ ] Mobile-first responsive design
- [ ] Form validation and error handling
- [ ] Loading states and feedback
- [ ] Intuitive navigation
- [ ] Clear call-to-action buttons

### 5. Code Quality
- [ ] TypeScript type safety
- [ ] Component reusability
- [ ] Clean, readable code structure
- [ ] Proper error handling
- [ ] Security best practices

## Business Context for AI Feedback

### Target Audience
- **Small to medium businesses** needing custom apparel
- **Sports teams and organizations**
- **Event planners and coordinators**
- **Individuals** wanting custom merchandise
- **Corporate clients** needing branded materials

### Key Business Goals
1. **Generate leads** through contact form
2. **Showcase portfolio** to build credibility
3. **Educate customers** about available services
4. **Professional appearance** to compete with larger companies
5. **Mobile accessibility** for on-the-go customers

### Conversion Priorities
1. **Contact form submissions** (primary goal)
2. **Phone calls** to (416) 788-3355
3. **Email inquiries** to info@bscdesigns.ca
4. **Social media engagement** (@bsc.designs)

## Technical Constraints & Preferences

### Development Workflow
- Built with **v0.dev** for rapid prototyping
- Code exported and managed via **GitHub**
- **Vercel** handles CI/CD automatically
- Mobile-first development approach

### Performance Requirements
- **Core Web Vitals** must pass
- **Page load time** under 3 seconds
- **Mobile performance** optimized
- **SEO score** 90+ on Lighthouse

### Integration Requirements
- **Formspree** for contact form (currently implemented)
- **Google Analytics** for tracking (implemented)
- Future: **HubSpot CRM** integration planned
- Future: **Payment processing** for online orders

## Content Guidelines

### Tone of Voice
- **Professional** but approachable
- **Confident** in service quality
- **Local** focus (Toronto-centric)
- **Solutions-oriented** messaging

### Key Messaging
- "Custom Merchandise Printing"
- "High-quality printing for your brand"
- "Professional printing solutions tailored to your needs"
- "From single pieces to large corporate orders"

## Questions for AI Code Review

When reviewing code, please consider:

1. **Does this code support our lead generation goals?**
2. **Is the user experience optimized for conversion?**
3. **Are we following Next.js and React best practices?**
4. **Is the code accessible to users with disabilities?**
5. **Will this perform well on mobile devices?**
6. **Does this maintain our professional brand image?**
7. **Is the code maintainable for future updates?**
8. **Are we handling errors gracefully?**
9. **Is sensitive information properly secured?**
10. **Does this integrate well with our current tech stack?**

## Current Priorities

### Immediate (This Month)
- [x] Fix contact form with Formspree integration
- [ ] Implement proper error handling across all components
- [ ] Optimize images for better performance
- [ ] Add structured data for SEO

### Short-term (Next 2-3 Months)
- [ ] Integrate HubSpot CRM for lead management
- [ ] Add online quote calculator
- [ ] Implement testimonials section
- [ ] Create blog section for SEO

### Long-term (6+ Months)
- [ ] E-commerce functionality for online ordering
- [ ] Customer portal for order tracking
- [ ] Design upload and approval system
- [ ] Multi-language support (French)

## Contact for Questions

If you need clarification on any aspect of this project or business context, please ask specific questions about:
- Business requirements and goals
- Technical implementation details
- User experience expectations
- Integration requirements
- Performance criteria

---

*This document should be referenced when providing code reviews, suggestions, or technical guidance for the BSC Designs website project.*