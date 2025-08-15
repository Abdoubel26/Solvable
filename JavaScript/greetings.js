const navbar = document.getElementById('navBar');



function closeSiddeBar(){
    navbar.classList.remove("show");
    document.getElementById('close-sidebar-button').setAttribute('aria-expanded', 'true');
     document.getElementById('open-sidebar-button').classList.remove('hidden');
}

function openSideBar(){
    navbar.classList.add("show");
    document.getElementById('close-sidebar-button').setAttribute('aria-expanded', 'true');
    document.getElementById('open-sidebar-button').classList.add('hidden');
}

document.querySelector('.greeting').addEventListener('click', closeSiddeBar);