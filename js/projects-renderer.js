(function () {
    const IMAGE_EXT_REGEX = /\.(jpeg|jpg|png|webp|gif|svg)(\?|$)/i;

    function createHTMLImageOrVideo(media) {
        if (!media || !media.url) {
            return "";
        }

        if (IMAGE_EXT_REGEX.test(media.url)) {
            return `<img src="${media.url}" alt="${media.alt || ""}" loading="lazy">`;
        }

        return `<video controls autoplay muted width="100%">
                    <source src="${media.url}" type="video/mp4">
                    ${media.alt || ""}
                </video>`;
    }

    function createProjectCard1(projectData) {
        const techHtml = (projectData.techs_list || []).map((tech) => `<li>${tech}</li>`).join("");
        const imageHtml = createHTMLImageOrVideo(projectData.image);

        return `
            <article class="project-card-1">
                <div class="card-header">
                    <img src="./assets/icons/github.svg" class="project-logo" alt="Logo">
                    <h3>${projectData.title}</h3>
                    <div class="links">
                        [<a href="${projectData.link}" target="_blank" rel="noopener noreferrer">GitHub repo</a>]
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-left">
                        <p class="description">${projectData.description}</p>
                        <div class="tech-stack">
                            <ul>${techHtml}</ul>
                        </div>
                    </div>
                    <div class="card-right">${imageHtml}</div>
                </div>
            </article>
        `;
    }

    function createProjectCard2(projectData) {
        let imageHtml = "";
        if (projectData.image) {
            for (const media of projectData.image) {
                imageHtml += `<div class="grid-item">${createHTMLImageOrVideo(media)}</div>`;
            }
        }

        const demoLink = projectData.demo
            ? ` | [<a href="${projectData.demo}" target="_blank" rel="noopener noreferrer">Demo</a>]`
            : "";

        return `
            <article class="project-card-2">
                <div class="card-header">
                    <img src="./assets/icons/github.svg" class="project-logo" alt="Logo">
                    <h3>${projectData.title}</h3>
                    <div class="links">
                        [<a href="${projectData.link}" target="_blank" rel="noopener noreferrer">GitHub repo</a>]${demoLink}
                    </div>
                </div>
                <div class="card-info">
                    <p>${projectData.description}</p>
                    <ul>${(projectData.techs_list || []).map((tech) => `<li>${tech}</li>`).join("")}</ul>
                </div>
                <div class="project-grid">${imageHtml}</div>
            </article>
        `;
    }

    function renderProjectCard(projectData, cardType) {
        if (cardType === 1) {
            return createProjectCard1(projectData);
        }
        if (cardType === 2) {
            return createProjectCard2(projectData);
        }
        return "";
    }

    function renderWorksMedia(mediaItem) {
        const mediaType = mediaItem.type ? mediaItem.type : (IMAGE_EXT_REGEX.test(mediaItem.url) ? "image" : "video");
        if (mediaType === "video") {
            return `<video controls muted playsinline preload="metadata"><source src="${mediaItem.url}" type="video/mp4">${mediaItem.alt || ""}</video>`;
        }
        return `<img src="${mediaItem.url}" alt="${mediaItem.alt || ""}" loading="lazy">`;
    }

    function renderWorksProjectCard(project) {
        const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
        const techList = (project.tech || []).map((item) => `<span class="tech-pill">${item}</span>`).join("");
        const media = (project.media || []).map((item) => `<figure class="media-block">${renderWorksMedia(item)}</figure>`).join("");
        const mediaClass = project.media && project.media.length === 1 ? "project-media single" : "project-media";

        return `
            <article class="project-card">
                <div class="project-head">
                    <div>
                        <div class="project-meta">
                            <span class="project-domain">${project.domain || ""}</span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
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
                    <div class="${mediaClass}">
                        ${media}
                    </div>
                </div>
            </article>
        `;
    }

    function renderProjectContainers(projectMap) {
        const containers = document.querySelectorAll('[class*="project-container"]');

        for (const container of containers) {
            let key = "";
            let value = null;

            for (const className of container.classList) {
                if (projectMap.has(className)) {
                    key = className;
                    value = projectMap.get(className);
                    break;
                }
            }

            if (!value && projectMap.has(container.className)) {
                key = container.className;
                value = projectMap.get(container.className);
            }

            if (!value) {
                console.warn(`No project data found for container with class: ${container.className}`);
                continue;
            }

            const [projectData, cardType] = value;
            const html = renderProjectCard(projectData, cardType);
            if (!html) {
                console.warn(`Unknown card type for container with class: ${key}`);
                continue;
            }

            container.innerHTML = html;
        }
    }

    window.PortfolioProjectsRenderer = {
        createHTMLImageOrVideo: createHTMLImageOrVideo,
        createProjectCard1: createProjectCard1,
        createProjectCard2: createProjectCard2,
        renderProjectCard: renderProjectCard,
        renderWorksMedia: renderWorksMedia,
        renderWorksProjectCard: renderWorksProjectCard,
        renderProjectContainers: renderProjectContainers
    };
})();
