# Planning Guide

A modern, conversion-focused marketing landing page for RESPECT roofing materials factory that showcases products professionally and drives customer inquiries through strategic design and clear calls-to-action.

**Experience Qualities**:
1. **Professional** - Clean, trustworthy design that communicates industry expertise and quality manufacturing
2. **Modern** - Contemporary glassmorphic effects and smooth animations that feel current and sophisticated
3. **Conversion-driven** - Strategic layout with prominent CTAs and trust signals that guide visitors toward contact

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page focused on presenting product information, building credibility, and driving contact form submissions. It features multiple product categories with detailed specifications but no interactive commerce functionality.

## Essential Features

**Hero Section with Glassmorphic Design**
- Functionality: Eye-catching introductory section with company branding and primary CTA
- Purpose: Immediately communicate value proposition and capture visitor attention
- Trigger: Page loads
- Progression: User sees glassmorphic overlay → Reads company name and tagline → Notices primary CTA button → Clicks to contact
- Success criteria: Visually striking with readable text over background, CTA button clearly visible

**Trust Badges Section**
- Functionality: Display credibility indicators and company strengths
- Purpose: Build immediate trust and confidence in the business
- Trigger: User scrolls past hero
- Progression: Section enters viewport → Icons/badges fade in → User reads benefits → Confidence increases
- Success criteria: 3-4 key trust indicators visible with icons, smooth entrance animation

**Metal Roofing Tiles Showcase**
- Functionality: Detailed product cards for 3 metal tile variants (Classic, Granada, Finera) with specifications
- Purpose: Present technical details in an accessible, visually appealing format
- Trigger: User scrolls to products section
- Progression: User enters section → Product cards become visible → User hovers over card → Card elevates with animation → User reads specifications
- Success criteria: Specifications clearly displayed, hover effects smooth and noticeable

**Profiled Sheeting Showcase**
- Functionality: Product cards for 5 profiled sheet variants (ПС8, ПС10, ПС14, ПК20, ПК35) with technical specs
- Purpose: Communicate product range and technical capabilities
- Trigger: User continues scrolling
- Progression: Section enters view → Cards animate in → User explores different products → User compares specifications
- Success criteria: All products visible with clear categorization (wall/fence vs roofing)

**Metal Picket Fence Section**
- Functionality: Brief showcase for штакетник product line
- Purpose: Complete product range presentation
- Trigger: User scrolls through products
- Progression: Section appears → Visual representation shown → User aware of full product range
- Success criteria: Section exists and maintains visual consistency with other products

**Contact Information & CTA Section**
- Functionality: Prominent display of phone numbers, addresses, and contact button
- Purpose: Make contacting the business effortless
- Trigger: User ready to inquire after reviewing products
- Progression: User scrolls to footer → Sees contact options → Clicks phone number or prominent CTA button → Initiates contact
- Success criteria: Phone numbers clickable on mobile, addresses clearly formatted, CTA button stands out

## Edge Case Handling

- **Long Product Specifications**: Specifications formatted in compact, scannable lists that maintain readability on smaller screens
- **Mobile Navigation**: Simplified layout with stacked product cards and touch-friendly interactive elements
- **Slow Network**: Critical content (text, CTAs) loads first; animations degrade gracefully
- **Small Screens**: Glassmorphic effects remain readable with adjusted contrast and sizing
- **Hover on Touch Devices**: Cards remain visually distinct without requiring hover state

## Design Direction

The design should evoke industrial quality, reliability, and modern manufacturing expertise. It should feel professional yet approachable, combining the strength of metal materials with warm, inviting colors. The aesthetic should communicate "established business with contemporary standards" rather than "corporate cold" or "startup flashy."

## Color Selection

A sophisticated palette balancing industrial professionalism with warm approachability.

- **Primary Color**: Slate Gray (oklch(0.45 0.015 250)) - Represents metal materials, industrial quality, and professional reliability
- **Secondary Color**: Terracotta Orange (oklch(0.65 0.15 35)) - Warm, inviting accent that represents roofing/construction and adds energy
- **Accent Color**: Warm Orange (oklch(0.70 0.18 40)) - Attention-grabbing for CTAs and important interactive elements, creates urgency without aggression
- **Background**: Crisp White (oklch(0.98 0 0)) - Clean, spacious feel that lets products shine
- **Foreground/Text**: Deep Charcoal (oklch(0.25 0.01 250)) - Strong readability while softer than pure black

**Foreground/Background Pairings**:
- Primary Slate (oklch(0.45 0.015 250)): White text (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
- Accent Orange (oklch(0.70 0.18 40)): White text (oklch(0.98 0 0)) - Ratio 4.9:1 ✓
- Background White (oklch(0.98 0 0)): Deep Charcoal text (oklch(0.25 0.01 250)) - Ratio 11.8:1 ✓
- Terracotta (oklch(0.65 0.15 35)): White text (oklch(0.98 0 0)) - Ratio 5.3:1 ✓

## Font Selection

Modern, professional sans-serif typefaces that communicate technical expertise while remaining highly readable.

- **Primary Font**: Inter - Clean, technical sans-serif with excellent readability at all sizes, perfect for product specifications
- **Accent Font**: Bricolage Grotesque - Distinctive, slightly geometric sans-serif for headings that adds modern character without sacrificing professionalism

**Typographic Hierarchy**:
- H1 (Company Name/Hero): Bricolage Grotesque Bold/56px/tight tracking (-0.02em)
- H2 (Section Headers): Bricolage Grotesque SemiBold/36px/tight tracking (-0.01em)
- H3 (Product Names): Bricolage Grotesque SemiBold/24px/normal tracking
- Body (Specifications): Inter Regular/16px/relaxed line-height (1.6)
- Small (Labels/Meta): Inter Medium/14px/normal line-height (1.4)
- CTA Button: Inter SemiBold/18px/normal tracking

## Animations

Animations should enhance the sense of quality and draw attention to key conversion points while maintaining a professional, polished feel.

**Scroll-triggered Animations**:
- Product cards fade up with slight scale (0.95 → 1.0) as they enter viewport
- Trust badges stagger in with 100ms delays between each
- Section headings slide in from left with subtle fade

**Hover Interactions**:
- Product cards elevate with shadow increase and subtle scale (1.0 → 1.02)
- CTA buttons have warm glow effect that expands on hover
- Phone number links pulse slightly on hover to encourage clicks

**Hero Glassmorphism**:
- Subtle backdrop blur with semi-transparent overlay
- Gentle floating animation on CTA button (2-3px vertical movement, 3s duration)

All animations use easing curves (ease-out for entrances, ease-in-out for interactions) and stay under 400ms for responsiveness.

## Component Selection

**Components**:
- **Card** (shadcn): Primary container for product specifications with hover states
- **Button** (shadcn): CTAs throughout page, styled with orange accent color
- **Badge** (shadcn): Product category labels and feature highlights
- **Separator** (shadcn): Visual breaks between major sections

**Customizations**:
- **Glassmorphic Hero Container**: Custom div with backdrop-blur-md, bg-white/10, and border styling
- **Product Grid**: Custom CSS Grid layout with responsive columns (1 → 2 → 3 based on breakpoint)
- **Trust Badge Component**: Custom component combining icon from Phosphor with text overlay
- **Animated Card Wrapper**: Framer Motion wrapper for scroll-triggered animations

**States**:
- Buttons: Default (warm orange), Hover (darker orange with glow), Active (pressed with scale 0.98), Focus (ring)
- Cards: Default (white with subtle shadow), Hover (elevated with larger shadow), Focus (subtle ring for accessibility)
- Links: Default (slate), Hover (orange underline), Active (orange)

**Icon Selection**:
- Phone → Phone phosphor icon for contact numbers
- MapPin → For location addresses  
- Certificate/Seal → For trust/quality badges
- Package → For product features
- Rulers → For specifications/measurements
- Shield Check → For warranty/reliability indicators

**Spacing**:
- Section padding: py-16 md:py-24 (64px → 96px)
- Container max-width: max-w-7xl
- Card gaps: gap-6 md:gap-8 (24px → 32px)
- Content padding: p-6 md:p-8 (24px → 32px)
- Button padding: px-8 py-4 (generous touch targets)

**Mobile**:
- Hero text sizes reduce: 56px → 36px for H1
- Product grid: 1 column on mobile, 2 on tablet, 3 on desktop
- Glassmorphic effects maintain but with increased contrast for readability
- Touch-friendly spacing with minimum 44px touch targets
- Sticky CTA button appears at bottom on mobile for persistent conversion opportunity
