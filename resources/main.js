let menuState = false;
let menu = document.getElementById('menuToggle');
let sideMenu = document.getElementById('sideMenu');


const smothMenu = (state) =>{
    sideMenu.style.transition = 'margin-top 0.4s ease-in-out';
    if(state){ 
        sideMenu.style.marginTop = '4.3125rem';
        setTimeout(()=>{
            sideMenu.querySelectorAll('li').forEach(li => li.style.display='block');
        }, 350)
     }else
     {
        sideMenu.style.marginTop = '-8.3125rem';
        sideMenu.querySelectorAll('li').forEach(li => li.style.display='none')
    }
}



menu.addEventListener('click', ()=>{
    menuState = !menuState;
    let temp = menu.querySelector('img').src;
    menuState ? 
    menu.querySelector('img').src = temp.replace('menu', 'close')
    :
    menu.querySelector('img').src = temp.replace('close', 'menu')
    
    smothMenu(menuState)
})


