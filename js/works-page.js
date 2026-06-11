function getProjectSource() {
    if (Array.isArray(window.WORKS_PROJECTS) && window.WORKS_PROJECTS.length > 0) {
        return window.WORKS_PROJECTS;
    }

    if (
        window.PortfolioProjectsData &&
        Array.isArray(window.PortfolioProjectsData.worksProjects) &&
        window.PortfolioProjectsData.worksProjects.length > 0
    ) {
        return window.PortfolioProjectsData.worksProjects;
    }

    return [];
}

function fallbackRenderWorksProjectCard(project) {
    const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
    const techList = (project.tech || []).map((item) => `<span class="tech-pill">${item}</span>`).join("");

    return `
        <article class="project-card">
            <div class="project-head">
                <div>
                    <div class="project-meta">
                        <span class="project-domain">${project.domain || ""}</span>
                    </div>
                    <h3 class="project-title">${project.title || ""}</h3>
                </div>
                <div class="project-link">
                    <a href="${project.repo}" target="_blank" rel="noopener noreferrer">View repository</a>
                </div>
            </div>
            <div class="project-body">
                <div class="project-details">
                    <p class="project-story">${project.story || ""}</p>
                    <ul class="project-list">${highlights}</ul>
                    <div class="tech-list">${techList}</div>
                </div>
            </div>
        </article>
    `;
}

function renderWorksPage() {
    const featuredContainer = document.getElementById("featured-projects");
    const allProjectsContainer = document.getElementById("all-projects");

    if (!featuredContainer || !allProjectsContainer) {
        return;
    }

    const projects = getProjectSource();
    const featured = projects.filter((project) => project.featured);
    const others = projects.filter((project) => !project.featured);
    const renderCard = window.PortfolioProjectsRenderer
        ? window.PortfolioProjectsRenderer.renderWorksProjectCard
        : fallbackRenderWorksProjectCard;

    featuredContainer.innerHTML = featured.map((project) => renderCard(project)).join("");
    allProjectsContainer.innerHTML = others.map((project) => renderCard(project)).join("");
}

renderWorksPage();
