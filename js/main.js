function loadComponent(id, path) {
    return fetch(path)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('Error loading component:', err));
}

function changeActivePropertyLinkHeader() {
    // get the current path
    const path = window.location.pathname;
    const page = path.split('/').pop();

    // get all the links in the header with class navbar-link
    const links = document.getElementsByClassName('navbar-link');

    // loop through the links and add the active class to the one that matches the current path
    for (let i = 0; i < links.length; i++) {
        const link = links[i];

        // get the href attribute of the link and compare it to the current page 
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
}

function main() {
    // load the header and footer components
    // after loading the header, call the function to change the active link
    loadComponent('header-placeholder', './components/header.html')
    .then(() => changeActivePropertyLinkHeader());
    loadComponent('footer-placeholder', './components/footer.html');
}

main();