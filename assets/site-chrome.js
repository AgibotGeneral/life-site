/* Shared resource links, active-page state and bilingual labels. */
(()=>{
 const BRAND={name:'Hi',fullname:'远征 x Humanoid Intelligence'};
 function syncBrand(){
  document.querySelectorAll('.team-name').forEach(el=>{el.textContent=BRAND.name});
  document.querySelectorAll('.team-fullname').forEach(el=>{el.textContent=BRAND.fullname});
  document.querySelectorAll('.brand-lockup').forEach(el=>{el.setAttribute('aria-label','AGIBOT '+BRAND.name+' · '+BRAND.fullname+' — Home')});
  document.title=document.title.replace(/HI Team/g,BRAND.name);
 }
 function syncChrome(){
  syncBrand();
  const lang=document.documentElement.lang.startsWith('en')?'en':'zh';
  document.querySelector('.resource-nav')?.setAttribute('aria-label',lang==='zh'?'资源入口':'Resources');
  document.querySelectorAll('[data-site-zh][data-site-en]').forEach(el=>{
   const value=el.dataset[lang==='zh'?'siteZh':'siteEn'];
   if(el.classList.contains('resource-entry')){
    el.querySelector('.resource-name').textContent=value;
    const tip=el.querySelector('.resource-tip');
    if(tip)tip.textContent=lang==='zh'?'即将开放':'Coming soon';
    el.setAttribute('aria-label',value+(tip?' · '+tip.textContent:''));
   }else el.textContent=value;
  });
 }
 const current=location.pathname.split('/').pop();
 document.querySelectorAll('.resource-nav a').forEach(link=>{if(link.getAttribute('href')===current)link.setAttribute('aria-current','page')});
 new MutationObserver(syncChrome).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 syncChrome();
})();
