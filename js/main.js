function loadComponent(id, path) {
    fetch(path)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('Error loading component:', err));
}

function changeActivePropertyLinkHeader() {
    console.log('Changing active property link in header');
    const path = window.location.pathname;
    console.log(path);
    const propertyLink = document.querySelector('.property-link');
    if (path.includes('property.html')) {
        propertyLink.classList.add('active');
    } else {        propertyLink.classList.remove('active');
    }
}

function main() {
    loadComponent('header-placeholder', './components/header.html');
    loadComponent('footer-placeholder', './components/footer.html');
    // changeActivePropertyLinkHeader();
}

main();