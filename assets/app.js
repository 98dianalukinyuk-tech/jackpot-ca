
const banner=document.querySelector('.cookie');
const modal=document.querySelector('.modal');
const pref=localStorage.getItem('jackpot-city-canada-onrender_cookie_pref');
if(!pref&&banner)banner.style.display='block';
document.querySelectorAll('[data-open-cookies]').forEach(b=>b.addEventListener('click',()=>{modal.style.display='flex'}));
document.querySelectorAll('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('jackpot-city-canada-onrender_cookie_pref',b.dataset.cookie);if(banner)banner.style.display='none';if(modal)modal.style.display='none'}));
