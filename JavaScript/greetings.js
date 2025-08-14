const navbar = document.getElementById('navBar');



function closeSiddeBar(){
    navbar.classList.remove("show");
    document.getElementById('close-sidebar-button').setAttribute('aria-expanded', 'true');
}

function openSideBar(){
    navbar.classList.add("show");
    document.getElementById('close-sidebar-button').setAttribute('aria-expanded', 'true');
}
