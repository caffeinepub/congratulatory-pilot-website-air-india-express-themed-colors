# Specification

## Summary
**Goal:** Add the user-provided photo to the top of the congratulatory page so the hero section prominently features Vivan Pathak first.

**Planned changes:**
- Optimize and crop the uploaded image (IMG_0098.jpeg) and save web-friendly variants under `frontend/public/assets/` for use in the hero section.
- Update `HeroSection` so the new photo appears first/as the primary hero visual while keeping the existing Air India Express-inspired theme and maintaining responsive layout.
- Add appropriate English alt text for the new hero image and ensure it does not cause layout shifts/overflow on common screen sizes.

**User-visible outcome:** When the page loads, the top/hero section prominently displays Vivan Pathak’s photo as the main congratulatory image, with the rest of the existing hero content/theme still looking balanced on mobile and desktop.
