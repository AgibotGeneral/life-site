/* Shared task captions follow the same cover media clock on home and S2. */
(()=>{
 document.querySelectorAll('.console-story').forEach(story=>{
  const rows=[...story.querySelectorAll('[data-story-at]')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  function init(){
   const video=story.closest('.wide-frame')?.querySelector('.wide-video')||document.querySelector('#long-film .hero-video');
   if(!video)return;
   story.classList.add('is-timed');
   function update(){
    const time=Number.isFinite(video.currentTime)?video.currentTime:0;
    rows.forEach(row=>{
     const visible=reduced.matches||time>=Number(row.dataset.storyAt);
     row.classList.toggle('is-revealed',visible);row.setAttribute('aria-hidden',String(!visible));
    });
   }
   function translate(){
    const lang=document.documentElement.lang.startsWith('en')?'en':'zh';
    story.querySelectorAll('[data-zh][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
   }
   ['timeupdate','loadedmetadata','seeking','seeked','emptied','pause','ended'].forEach(event=>video.addEventListener(event,update));
   reduced.addEventListener('change',update);
   new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
   translate();update();
  }
  if(document.documentElement.classList.contains('page-entering'))document.addEventListener('page-entry-complete',init,{once:true});else init();
 });
})();
