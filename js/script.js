function toggleMenu(){
    document.getElementById('navbar3').classList.toggle('link_list_visible')
    document.getElementById('burger').classList.toggle('burger_in_x_form')
}
document.getElementById('burger').addEventListener('click', toggleMenu)