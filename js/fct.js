function createHTMLImageOrVideo(image) {
    if (window.PortfolioProjectsRenderer) {
        return window.PortfolioProjectsRenderer.createHTMLImageOrVideo(image);
    }

    if (!image || !image.url) {
        return "";
    }

    if (image.url.match(/\.(jpeg|jpg|png|webp|gif|svg)(\?|$)/i)) {
        return `<img src="${image.url}" alt="${image.alt || ""}" loading="lazy">`;
    }

    return `<video controls autoplay muted width="100%">
                <source src="${image.url}" type="video/mp4">
                ${image.alt || ""}
            </video>`;
}

function createProjectCard1(projectData) {
    if (window.PortfolioProjectsRenderer) {
        return window.PortfolioProjectsRenderer.createProjectCard1(projectData);
    }

    return "";
}

function createProjectCard2(projectData) {
    if (window.PortfolioProjectsRenderer) {
        return window.PortfolioProjectsRenderer.createProjectCard2(projectData);
    }

    return "";
}
