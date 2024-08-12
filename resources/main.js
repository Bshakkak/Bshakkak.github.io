let menuState = false;
let menu = document.getElementById('menuToggle');
let sideMenu = document.getElementById('sideMenu');


const smothMenu = (state) =>{
    sideMenu.style.transition = 'margin-top 0.4s ease-in-out';
    if(state){ 
        sideMenu.style.marginTop = '4.3125rem';
        setTimeout(()=>{
            sideMenu.querySelectorAll('li').forEach(li => li.style.display='block');
        }, 350);
        setTimeout(()=>{
            sideMenu.querySelectorAll('li').forEach(li => li.onclick = ()=>{
                sideMenu.style.marginTop = '-8.3125rem';
                sideMenu.querySelectorAll('li').forEach(li => li.style.display='none');
                menuState = false;
                menu.querySelector('img').src = "./resources/images/menu.svg"
            }, 351);  
        })
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

let summText = `Highly motivated computer scientist and electrical & computer engineer with specialized expertise in web development and data science. Experienced in data analysis, visualization, web development, and ERP system promotion. Proficient in Python, and JavaScript. Published researcher with contributions in image encryption, secure ML-based facial recognition, and soft computing in tourism. Seeking to leverage technical skills and academic experience in a dynamic, research-focused role.`


document.getElementById('txtSumm').innerHTML = summText;
document.getElementById('txtSummTM').innerHTML = summText;
