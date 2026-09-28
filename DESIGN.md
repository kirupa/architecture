# Design

<!-- impeccable:design-schema 1 -->

## Visual World

The architecture site uses a monograph-like visual world for Contoso Architects: graphite background, limestone text, brushed brass emphasis, compact controls, broad photographic plates, and quiet editorial type. It supports both a horizontal-tab category demo and the hamburger-category interaction from the emoji demo.

## Color

Graphite and black-brown surfaces carry the page, with limestone foregrounds, muted stone secondary text, brass highlights, and moss-tinted atmosphere. Lines are low-contrast and architectural, like drawing layers rather than UI chrome.

## Typography

The interface uses system sans-serif text for clarity and a restrained Georgia display face for the oversized first-viewport headline. Type is sparse, high-contrast, and intentionally low on decoration.

## Components

- Top rail: sticky, glassy graphite header with a compact brand mark for Contoso Architects and a current category label.
- Category navigation: `?e=default` displays horizontal typology tabs beneath the rail. `?e=vert` shows a hamburger button and left-aligned flyout overlay with the same typology buttons; the flyout never pushes the portfolio content down.
- Hero: oversized lead photograph paired with a strong portfolio statement and featured project facts.
- Project grid: large image-led studies with overlay titles, typology chips, location/year context, and short summaries.

## Interaction

The root URL redirects to the host 404. `?e=default` exposes All projects, Workplaces, Residential, Public Spaces, and Cultural as horizontal tabs. `?e=vert` exposes those categories through a hamburger drawer. Selecting a category filters the gallery, updates the count and current label, refreshes the lead project, and closes the drawer when the drawer variant is active. Selecting an individual project promotes it into the hero.

## Responsive Rules

Wide screens use a split first viewport and asymmetric photographic grid. Tablet screens stack the hero. Mobile screens keep the sticky rail, wrap horizontal tabs in the default variant, preserve the flyout in the vertical variant, and use single-column project plates with compact project facts.
