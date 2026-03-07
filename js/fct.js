function createHTMLImageOrVideo(image) {
    let image_html = `` 
    // check if this is an image (among the .extension known) otherwise th is a video and adapt HTML
    if (image.url.match(/\.(jpeg|jpg|png|webp|gif|svg)(\?|$)/i)) {
        image_html = `<img src="${image.url}" alt="${image.alt}" loading="lazy">`;
        
    }
    else {
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

    return `
        <article class="project-card-2">
            <div class="card-header">
                <img src="./assets/icons/github.svg" class="project-logo" alt="Logo">
                <h3>${project_data.title}</h3>
                <div class="links"> 
                    [<a href="${project_data.link}" target="_blank">GitHub repo</a>]
                    | 
                    [<a href="${project_data.demo}" target="_blank">Demo</a>]
                </div>
            </div>
            
            <div class="card-info">
                <p>
                    ${project_data.description}
                </p>
                <p class="techs">
                    <ul>
                        ${project_data.techs_list.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </p>
            </div>

            <div class="project-grid">
                ${image_html}
            </div>
        </article>
    `;
}
