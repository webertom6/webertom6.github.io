function createHTMLImageOrVideo(image) {
    let image_html = ``;
    if (image.url.match(/\.(jpeg|jpg|png|webp|gif|svg)(\?|$)/i)) {
        image_html = `<img src="${image.url}" alt="${image.alt}" loading="lazy">`;
    } else {
        image_html = `<video controls autoplay muted width="100%">
                        <source src="${image.url}" type="video/mp4">
                        ${image.alt}
                    </video>`;
    }
    return image_html;
}

function createProjectCard1(project_data) {
    // generate tech stack list items
    const tech_html = project_data.techs_list.map(tech => `<li>${tech}</li>`).join('');

    let image_html = createHTMLImageOrVideo(project_data.image);

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
                    ${image_html}
                </div>
            </div>
        </article>
    `;
}

function createProjectCard2(project_data) {

    let image_html = '';
    if (project_data.image) {
        for (const img of project_data.image) {
            image_html += `<div class="grid-item">${createHTMLImageOrVideo(img)}</div>`;
        }
    }

    const demo_link = project_data.demo
        ? ` | [<a href="${project_data.demo}" target="_blank" rel="noopener noreferrer">Demo</a>]`
        : '';

    return `
        <article class="project-card-2">
            <div class="card-header">
                <img src="./assets/icons/github.svg" class="project-logo" alt="Logo">
                <h3>${project_data.title}</h3>
                <div class="links"> 
                    [<a href="${project_data.link}" target="_blank" rel="noopener noreferrer">GitHub repo</a>]${demo_link}
                </div>
            </div>
            
            <div class="card-info">
                <p>${project_data.description}</p>
                <ul>
                    ${project_data.techs_list.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>

            <div class="project-grid">
                ${image_html}
            </div>
        </article>
    `;
}

function renderProjectContainers(project_map) {
    const containers = document.querySelectorAll('[class*="project-container"]');

    for (const container of containers) {
        let mapping = null;

        for (const class_name of container.classList) {
            if (project_map[class_name]) {
                mapping = project_map[class_name];
                break;
            }
        }

        if (!mapping) {
            console.warn(`[project-render] no project mapping found for container class "${container.className}"`);
            continue;
        }

        if (!mapping.key) {
            console.warn(`[project-render] mapping has no project key for container class "${container.className}"`);
            continue;
        }

        const project_data = PROJECTS[mapping.key];
        if (!project_data) {
            console.warn(`[project-render] no project data found for key "${mapping.key}" (container "${container.className}")`);
            continue;
        }

        const card_type = mapping.card_type ?? mapping.cardType;
        if (card_type === 1) {
            container.innerHTML = createProjectCard1(project_data);
        } else if (card_type === 2) {
            container.innerHTML = createProjectCard2(project_data);
        } else {
            console.warn(`[project-render] invalid card type for key "${mapping.key}" on container "${container.className}"`);
        }
    }
}
