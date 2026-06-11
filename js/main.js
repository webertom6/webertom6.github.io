function loadComponent(id, path) {
    const target = document.getElementById(id);
    if (!target) {
        return Promise.resolve();
    }

    return fetch(path)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${path}: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            target.innerHTML = data;
        })
        .catch((err) => console.error("Error loading component:", err));
}

function changeActivePropertyLinkHeader() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || "index.html";

    const links = document.getElementsByClassName("navbar-link");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const href = link.getAttribute("href") || "";

        if (href === page) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
}

function main() {
    loadComponent("header-placeholder", "./components/header.html")
        .then(() => changeActivePropertyLinkHeader());
    loadComponent("footer-placeholder", "./components/footer.html");
}

main();