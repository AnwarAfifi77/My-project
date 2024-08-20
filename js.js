const menu = '.menu';
const divMenu = document.querySelector(menu);
const menuTrigger = document.querySelector('.menu-trigger');
menuTrigger.addEventListener('click', ()=> {
    setTimeout(() => {
        if(!divMenu.classList.contains('show')){
            divMenu.classList.add('show');
            document.body.classList.add('menu-visible')
        }
    }, 0) 
})


document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(menu);
    if (!isClosest && divMenu.classList.contains('show')) {
        divMenu .classList.remove('show');
        document.body.classList.remove('menu-visible')
    }
})