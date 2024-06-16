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

let summText = `A highly motivated computer scientist, electrical & computer engineer, and scientific researcher specialized in data science,
with experiences in data analysis and visualization, web development, modeling and simulation, image processing, and 
promoting ERP systems; and with a set of skills in Python, JavaScript, MATLAB, Java, and NI Multisim. Academically I have 
published journals on image encryption, secure ML based facial recognition systems (PCA and LDA), CNN face recognition
and soft computing implementations on tourism sector, and submitted a research on RF-EMR emissions measurement on 
North Al-Batinah region to TRC Oman under the supervision of Sohar University.`


document.getElementById('txtSumm').innerHTML = summText;
document.getElementById('txtSummTM').innerHTML = summText;

