/* Side-by-side original footage under the memory stories: each group's clips play together on one clock.
   A clip's data-offset is where it sits at group time 0. Clips load only when their group is first played. */
(() => {
  const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const state = new WeakMap();

  function setup(group) {
    if (state.has(group)) return state.get(group);
    const vids = [...group.querySelectorAll('video')];
    vids.forEach(v => { if (!v.getAttribute('src')) { v.src = v.dataset.src; v.preload = 'auto'; } });
    const s = { vids, t: 0, playing: false, timer: 0 };
    s.known = () => vids.every(v => v.duration > 0);   // durations arrive with the metadata
    s.span = () => Math.max(...vids.map(v => (v.duration || 0) - Number(v.dataset.offset)), 0);
    state.set(group, s);
    return s;
  }

  function place(s, t) {
    s.t = Math.max(0, t);
    if (!s.known()) {                                 // seek once the metadata is in
      s.vids.forEach(v => { if (!(v.duration > 0)) v.addEventListener('loadedmetadata', () => place(s, s.t), { once: true }); });
    }
    s.vids.forEach(v => {
      const want = s.t + Number(v.dataset.offset);
      if (v.duration && want >= v.duration) { v.pause(); return; }
      if (Math.abs(v.currentTime - want) > 0.2) v.currentTime = want;
    });
  }

  function draw(group, s) {
    const span = s.span();
    group.querySelector('.raw-seek').value = span ? Math.round(1000 * s.t / span) : 0;
    group.querySelector('time').textContent = fmt(s.t);
    group.querySelector('.raw-play').textContent = s.playing ? 'Ⅱ' : '▶';
  }

  function tick(group, s) {
    if (!s.playing) return;
    const lead = s.vids.find(v => !v.paused && !v.ended);
    if (lead) {
      s.t = lead.currentTime - Number(lead.dataset.offset);
      s.vids.forEach(v => {                           // keep the others in step with the lead clip
        const want = s.t + Number(v.dataset.offset);
        if (v === lead || !v.duration) return;
        if (want < v.duration && Math.abs(v.currentTime - want) > 0.25) v.currentTime = want;
        if (want < v.duration && v.paused) v.play().catch(() => {});
      });
    }
    if (s.known() && (!lead || s.t >= s.span() - 0.05)) { stop(group, s); s.t = 0; }
    draw(group, s);
  }

  function stop(group, s) {
    s.playing = false;
    clearInterval(s.timer);
    s.vids.forEach(v => v.pause());
    draw(group, s);
  }

  function play(group) {
    document.querySelectorAll('.raw-group').forEach(g => { if (g !== group && state.get(g)?.playing) stop(g, state.get(g)); });
    document.querySelector('#long-film .hero-video')?.pause();
    const s = setup(group);
    if (s.known() && s.t >= s.span() - 0.05) s.t = 0;
    place(s, s.t);
    s.playing = true;
    s.vids.forEach(v => { if (!v.duration || s.t + Number(v.dataset.offset) < v.duration) v.play().catch(() => {}); });
    clearInterval(s.timer);
    s.timer = setInterval(() => tick(group, s), 150);   // a timer, not rAF, so the clips stay in step in a background tab too
    tick(group, s);
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('.raw-play');
    if (!b) return;
    const group = b.closest('.raw-group'), s = state.get(group);
    if (s?.playing) stop(group, s); else play(group);
  });
  document.addEventListener('input', e => {
    if (!e.target.matches('.raw-seek')) return;
    const group = e.target.closest('.raw-group'), s = setup(group);
    place(s, s.span() * e.target.value / 1000);
    draw(group, s);
  });
  // With both memory drawers open, add space above the last group of the shorter one so both columns end on one line.
  function align() {
    const ds = [...document.querySelectorAll('#memory-demo .raw-footage')];
    ds.forEach(d => { const last = d.querySelector('.raw-group:last-child'); if (last) last.style.marginTop = ''; });
    if (ds.length < 2 || !ds.every(d => d.open) || matchMedia('(max-width: 680px)').matches) return;
    const end = d => d.lastElementChild.getBoundingClientRect().bottom;
    const [a, b] = ds, gap = end(a) - end(b), short = gap > 0 ? b : a, last = short.querySelector('.raw-group:last-child');
    if (Math.abs(gap) > 1 && last) last.style.marginTop = `${parseFloat(getComputedStyle(last).marginTop) + Math.abs(gap)}px`;
  }
  addEventListener('resize', align);
  new MutationObserver(align).observe(document.documentElement, { subtree: true, childList: true });
  document.addEventListener('toggle', e => {                // closing the drawer stops its clips
    if (e.target.matches?.('.raw-footage') && !e.target.open)
      e.target.querySelectorAll('.raw-group').forEach(g => { const s = state.get(g); if (s?.playing) stop(g, s); });
    if (e.target.matches?.('.raw-footage')) align();
  }, true);
})();
