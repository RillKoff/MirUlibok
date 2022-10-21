const drop_down_hover =  document.querySelector('.header_nav_drop_down_wrapper');
const drop_down_menu = document.querySelector('.header_nav_drop_down');
const drop_down_a = document.querySelector('.header_nav_drop_down_a')

drop_down_hover.addEventListener('mouseover', () => {
    drop_down_menu.classList.remove('display_none');
    drop_down_a.classList.add('header_nav_drop_down_a_hover')
})

drop_down_hover.addEventListener('mouseout', () => {
    drop_down_menu.classList.add('display_none');
    drop_down_a.classList.remove('header_nav_drop_down_a_hover')
})