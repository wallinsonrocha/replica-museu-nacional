//Menu Icon
const q = (e) => document.querySelector(e);

let openMenu = q('#menu-icon-mobile-open').addEventListener('click', ()=>{
    q('#menu-area').style.display = 'block';

    setTimeout(()=>{
        q('#menu-area').style.background = 'rgba(0, 0, 0, 0.8)';
    }, 1);
    
    q('#menu-mobile').style.display = 'block'
    
    setTimeout(()=>{
        q('#menu-mobile').style.transform = 'translateX(0)';
    }, 1);

    document.querySelector('body').style.overflowY = 'hidden';
});

let openClose = q('#menu-icon-mobile-close').addEventListener('click', ()=>{
    setTimeout(()=>{
        q('#menu-mobile').style.display = 'none';
    }, 300);
    
    q('#menu-mobile').style.transform = 'translateX(100%)';

    q('#menu-area').style.background = 'rgba(0, 0, 0, 0)';
    
    setTimeout(()=>{
        q('#menu-area').style.display = 'none';
    }, 300);

    document.querySelector('body').style.overflowY = 'scroll';
});