# Mafia Interactive Business Card

An interactive, luxury business card with official, serious Mafia theme. Features elegant animations and a sophisticated BLACK-dominant color scheme with subtle dark red accents.

## Features

### Main Elements
- **Elegant 3D "MAFIA" Title**: Bold serif typography with minimalist 3D depth using red shadow layers
- **Avatar Placeholder**: Circular placeholder with luxury black gradient design
- **Social Media Links**: Telegram, GitHub, and Reddit with custom SVG icons
- **Card Dimensions**: 700px wide, fully responsive

### Design Philosophy
- **BLACK as dominant color**: Pure black background and deep black gradients throughout
- **Dark red accents only**: Subtle, serious red tones (#8b0000, #700000) for highlights and borders
- **No bright neon effects**: Only deep, elegant tones for a professional, luxury appearance
- **Minimalist and official**: Like a real criminal organization's business card - serious, refined, no jokes

### Required Animations (3)

1. **Falling Snow**: Subtle gray snowflakes appear and fall when hovering over the card
2. **Red Highlight**: Deep red glow effect on card borders and shadows on hover (no flickering)
3. **Subtle Shake/Vibration**: Restrained trembling animation when hovering

### Additional Animations (6+)

4. **Avatar Pulse**: Avatar subtly scales and glows with dark red light on hover
5. **Text Glow Pulse**: Continuous subtle pulsing of red glow in title text shadows
6. **3D Title Rotation**: Gentle title rotation in 3D space on hover
7. **Shine Sweep**: Elegant red shine sweeps across the title text
8. **Social Link Hover**: Links scale up and lift on hover with sophisticated red glow
9. **Floating Social Icons**: Icons gently float up and down continuously
10. **Corner Glow**: Corner decorations intensify with red glow on hover
11. **Ripple Effect**: Click anywhere to create expanding red ripple effects
12. **Subtle Border Flow**: Animated gradient border effect on hover
13. **3D Parallax**: Card follows mouse movement with elegant 3D perspective

### Design Features
- **Black-dominant palette**: Pure black (#000000) with very dark grays (#0a0a0a, #1a1a1a)
- **Subtle red accents**: Dark crimson tones (rgba(139, 0, 0, ...), rgba(70, 0, 0, ...))
- **Multiple shadow layers** for depth and luxury feel
- **Animated background particles** (very subtle, dark)
- **Smooth transitions** with cubic-bezier easing
- **Fully responsive** design for mobile devices
- **Elegant serif font** (Georgia) for professional appearance

## Usage

Simply open `mafia-card.html` in any modern web browser. The card is fully self-contained with embedded CSS and JavaScript.

### Customization

To customize the card:
- **Avatar**: Replace the `.avatar-placeholder` background with `background-image: url('your-image.jpg')`
- **Social Links**: Update the `href` attributes (lines 621, 628, 635) with your actual profile URLs
- **Colors**: Modify the red accent values while keeping black as dominant
- **Animations**: Adjust animation durations and delays in the `@keyframes` sections
- **Card Size**: Change `.mafia-card` width property (currently 700px)

## Browser Compatibility

Works best in modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technologies

- HTML5
- CSS3 (Animations, Transforms, Gradients, 3D Transforms)
- Vanilla JavaScript (for dynamic particle and snow generation, parallax effects)

## Color Palette

- **Primary Black**: #000000 (main background)
- **Dark Gray**: #0a0a0a, #1a1a1a (card background gradients)
- **Dark Red Accents**: #8b0000, #700000, #5a0000, #400000 (shadows, borders)
- **Red Highlight**: rgba(139, 0, 0, 0.4-0.8) (hover effects)
- **Subtle Gray**: rgba(200, 200, 200, 0.5) (snowflakes)

## Style Guidelines

This business card is designed to look:
- **Official and professional** - like a luxury brand
- **Serious and refined** - no playful or flashy elements
- **Minimalist and elegant** - every element serves a purpose
- **High-end luxury** - sophisticated color scheme and animations
