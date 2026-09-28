# Design

<!-- impeccable:design-schema 1 -->

## Visual World

The architecture site uses a monograph-like visual world: graphite background, limestone text, brushed brass emphasis, plan-grid texture, compact controls, broad photographic plates, and quiet editorial type. It borrows the hamburger-category interaction from the emoji demo but replaces the catalog feel with a project portfolio.

## Color

Graphite and black-brown surfaces carry the page, with limestone foregrounds, muted stone secondary text, brass highlights, and moss-tinted atmosphere. Lines are low-contrast and architectural, like drawing layers rather than UI chrome.

## Typography

The interface uses system sans-serif text for clarity and a restrained Georgia display face for the oversized first-viewport headline. Type is sparse, high-contrast, and intentionally low on decoration.

## Components

- Top rail: sticky, glassy graphite header with a hamburger button, compact brand mark, and current category label.
- Category menu: left-aligned flyout overlay with typology buttons; it never pushes the portfolio content down.
- Hero: oversized lead photograph paired with a strong portfolio statement and featured project facts.
- Project grid: large image-led studies with overlay titles, typology chips, location/year context, and short summaries.

## Interaction

The hamburger opens a category drawer for All projects, Workplaces, Residential, Public Spaces, and Cultural. Selecting a category filters the gallery, updates the count and current label, refreshes the lead project, and closes the drawer. Selecting an individual project promotes it into the hero.

## Responsive Rules

Wide screens use a split first viewport and asymmetric photographic grid. Tablet screens stack the hero. Mobile screens keep the sticky hamburger rail, single-column project plates, and compact project facts.
