---
name: spline-3d-integration
description: Expert skill for embedding interactive 3D Spline scenes into web projects with high-performance styling and vibe-consistent integration.
---

# Spline 3D Integration Skill

## Core Instruction
When provided with a Spline scene URL (ending in `.splinecode`), the agent must integrate it as a high-fidelity interactive element. Prioritize using the `<spline-viewer>` web component for its built-in loading states and interactivity support.

## 1. Technical Implementation
### Script Injection
- **Vanilla/HTML:** Add `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"></script>` to the `<head>`.
- **React/Next.js:** Use `@splinetool/react-spline`. For Next.js, ensure the component is wrapped in a Client Component (`'use client'`).

### Embedding Logic
Use the following structure to ensure accessibility and responsiveness:
```html
<div class="spline-container">
  <spline-viewer url="USER_URL_HERE" events-target="global"></spline-viewer>
</div>