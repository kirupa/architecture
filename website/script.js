const projects = [
  {
    title: "Northline Commons",
    category: "Workplaces",
    location: "Seattle, WA",
    year: "2026",
    summary: "A timber-framed workplace organized around daylit collaboration floors and quiet perimeter rooms.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82",
    alt: "Bright modern workplace with long tables and exposed ceiling structure."
  },
  {
    title: "Courtyard House",
    category: "Residential",
    location: "Marin County, CA",
    year: "2025",
    summary: "A low residential compound that wraps shared rooms around a planted court and long afternoon shade.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82",
    alt: "Modern residential house with warm lights and a clean facade."
  },
  {
    title: "Civic Steps",
    category: "Public Spaces",
    location: "Portland, OR",
    year: "2024",
    summary: "A public threshold of broad steps, civic planting, and protected edges for everyday gathering.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=82",
    alt: "Monumental concrete architecture with repeating columns and deep shadows."
  },
  {
    title: "Harbor Reading Room",
    category: "Cultural",
    location: "Vancouver, BC",
    year: "2026",
    summary: "A cultural interior tuned for long reading tables, indirect light, and a heavy acoustic ceiling plane.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=82",
    alt: "Dramatic architectural facade with geometric concrete forms."
  },
  {
    title: "Foundry Studio",
    category: "Workplaces",
    location: "Chicago, IL",
    year: "2025",
    summary: "An adaptive workplace that keeps the industrial shell visible while inserting precise rooms within rooms.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=82",
    alt: "Open office studio with desks, greenery, and large windows."
  },
  {
    title: "Hearth Ridge",
    category: "Residential",
    location: "Bend, OR",
    year: "2024",
    summary: "A compact mountain house with deep overhangs, durable cladding, and a living room shaped around the view.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=82",
    alt: "Modern living room with large windows and a warm interior palette."
  },
  {
    title: "Market Canopy",
    category: "Public Spaces",
    location: "Austin, TX",
    year: "2023",
    summary: "A civic market canopy that makes shade, rain protection, and flexible stall layouts the main architecture.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=82",
    alt: "Urban architectural space with a broad structural canopy."
  },
  {
    title: "Gallery House",
    category: "Residential",
    location: "Santa Fe, NM",
    year: "2025",
    summary: "A residential gallery plan with thick walls, controlled openings, and calm rooms for art and desert light.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=82",
    alt: "Contemporary home set in a quiet landscape."
  },
  {
    title: "Pier Pavilion",
    category: "Public Spaces",
    location: "Brooklyn, NY",
    year: "2026",
    summary: "A waterfront pavilion that turns circulation, seating, and weather protection into one continuous edge.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1800&q=82",
    alt: "Modern building exterior with glass and strong horizontal lines."
  },
  {
    title: "Archive Hall",
    category: "Cultural",
    location: "Boston, MA",
    year: "2024",
    summary: "A compact archive and exhibition hall built around controlled daylight, tactile storage walls, and a quiet central room.",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1800&q=82",
    alt: "Dense city architecture with repeating windows and strong vertical geometry."
  }
];

const categories = ["All projects", ...new Set(projects.map((project) => project.category))];
const defaultCategory = "All projects";
const routeParams = new URLSearchParams(window.location.search);
const useVerticalNav = routeParams.get("e") === "vert";
const menu = document.querySelector("#category-menu");
const navToggle = document.querySelector("#nav-toggle");
const selectionLabel = document.querySelector("#selection-label");
const resultCount = document.querySelector("#result-count");
const grid = document.querySelector("#project-grid");
const template = document.querySelector("#project-card-template");
const leadImage = document.querySelector("#lead-image");
const leadTitle = document.querySelector("#lead-title");
const leadCategory = document.querySelector("#lead-category");
const leadLocation = document.querySelector("#lead-location");
const leadYear = document.querySelector("#lead-year");

if (useVerticalNav) {
  document.documentElement.classList.add("variant-vert");
  navToggle.hidden = false;
}

function createCategoryButton(category, isActive = false) {
  const button = document.createElement("button");
  button.className = `category-button${isActive ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.category = category;
  button.setAttribute("aria-pressed", String(isActive));
  button.textContent = category;
  return button;
}

function setActiveButton(activeButton) {
  menu.querySelectorAll(".category-button").forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function toggleMenu() {
  if (!useVerticalNav) return;
  const isOpen = document.documentElement.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close project categories" : "Open project categories");
}

function closeMenu() {
  if (!useVerticalNav) return;
  document.documentElement.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open project categories");
}

function visibleProjects(category) {
  if (category === defaultCategory) return projects;
  return projects.filter((project) => project.category === category);
}

function setLeadProject(project) {
  leadImage.src = project.image;
  leadImage.alt = project.alt;
  leadTitle.textContent = project.title;
  leadCategory.textContent = project.category;
  leadLocation.textContent = project.location;
  leadYear.textContent = project.year;
}

function renderProjects(category = defaultCategory) {
  const visible = visibleProjects(category);
  grid.innerHTML = "";

  visible.forEach((project, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const button = card.querySelector(".project-button");
    const image = card.querySelector("img");

    image.src = project.image;
    image.alt = project.alt;
    image.loading = index < 2 ? "eager" : "lazy";
    card.querySelector(".project-category").textContent = project.category;
    card.querySelector("strong").textContent = project.title;
    card.querySelector(".project-location").textContent = `${project.location} · ${project.year}`;
    card.querySelector(".project-summary").textContent = project.summary;

    button.addEventListener("click", () => {
      setLeadProject(project);
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.append(card);
  });

  setLeadProject(visible[0] ?? projects[0]);
  selectionLabel.textContent = category;
  resultCount.textContent = `Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"}.`;
}

function renderCategoryMenu() {
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    fragment.append(createCategoryButton(category, category === defaultCategory));
  });

  menu.append(fragment);
  menu.addEventListener("click", (event) => {
    const button = event.target.closest(".category-button");
    if (!button) return;

    setActiveButton(button);
    renderProjects(button.dataset.category);
    closeMenu();
  });
}

if (useVerticalNav) {
  navToggle.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!document.documentElement.classList.contains("nav-open")) return;
    if (event.target.closest(".site-header")) return;
    closeMenu();
  });
}

renderCategoryMenu();
renderProjects(defaultCategory);
