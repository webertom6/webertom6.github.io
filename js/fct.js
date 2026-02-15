function createProjectCard1(project_data) {
    // generate tech stack list items
    const tech_html = project_data.techs_list.map(tech => `<li>${tech}</li>`).join('');

    return `
        <article class="project-card-1">
            <div class="card-header">
                <img src="./assets/icons/github.svg" class="project-logo" alt="Logo">
                <h3>${project_data.title}</h3>
                <div class="links">
                    [<a href="${project_data.link}" target="_blank">GitHub repo</a>]
                </div>
            </div>
            <div class="card-body">
                <div class="card-left">
                    <p class="description">${project_data.description}</p>
                    <div class="tech-stack">
                        <ul>
                            ${tech_html}
                        </ul>
                    </div>
                </div>
                <div class="card-right">
                    <img src="${project_data.image.url}" alt="${project_data.image.alt}" loading="lazy">
                </div>
            </div>
        </article>
    `;
}
