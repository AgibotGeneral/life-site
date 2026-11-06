(() => {
  'use strict';
  const en = {
    memoryDemosTitle: 'Two everyday stories, connected by memory.',
    memoryDemosHint: 'From past observations to present action',
    galleryCaption: "Scenes from LIFE demonstrations in everyday environments: ongoing observation, interaction with people and object handling.",
    memorySpatial: "Frames from both sources are assigned to shared views by location and viewing direction, connecting what a place looks like with what happened there. Place retrieval returns relevant spatial frames, the latest observation and matching event evidence. The agent can also retrieve images near requested times or review a view’s retained history in chronological order.",
    overviewCaption: "Six settings cover online localization, condition triggering, action boundaries, proactive responses, and memory QA on OVO-Bench and SSS-Bench. Each panel uses its own metric. Blue bars show RoboBeats; open markers show results before fine-tuning. RoboBeats-2B* uses OneStreamer-4B to answer questions.",
    sssDetails: "Explore SSS-Bench data and question types",
    sssCaption: "SSS-Bench: observe and build memory before answering at a specified time. All answer evidence precedes the question time. The benchmark contains 618 questions from 171 parent videos, six sources and 14 question subtypes.",

    skip: 'Skip to content', paper: 'Technical report', heroSubtitle: 'A step toward lifelong embodied intelligence.',
    heroDescription: 'Connecting proactive perception, persistent memory and reusable capabilities,<br class="desktop-break">toward embodied agents that learn from everyday experience.',
    readPaper: 'Read the paper PDF', watchDemos: 'Watch the demos', date: 'October 2026', type: 'Technical report', filmCaption: 'From waiting for instructions to taking part in everyday life.', playVideo: 'Play video',
    navStory: 'The idea', navPerception: 'Perception', navMemory: 'Memory', navEvolution: 'Learn & reuse', navExperience: 'A day of experience', navEvaluation: 'Evaluation',
    storyTitle: "Let intelligence keep growing in the real world.",
    storyLead: "We envision robots that live and learn over time in an open world, observing autonomously, understanding change, and accumulating experience through interactions with people and their environment. These experiences should deepen their understanding of the world and help them learn to solve new problems.",
    storyBody: "LIFE explores a path toward lifelong embodied intelligence: acquiring experience through proactive perception, connecting past and present through long-term memory, and turning exploration into reusable methods through capability accumulation. The aim is to make every interaction a foundation for future growth.",
    journey1: 'Notice meaningful changes', journey1sub: 'Let the world become a source of experience', journey2: 'Keep evidence worth revisiting', journey2sub: 'Use one experience to answer different questions', journey3: 'Retain methods that work', journey3sub: 'Turn a solution into a reusable capability',
    storyBridge: 'Reasoning and decision-making connect these processes: drawing on past experience and guiding further observation when evidence is missing.',
    perceptionTitle: 'The world changes before anyone asks.', perceptionLead: 'An elevator opens, a visitor arrives, a conversation is interrupted. Important moments often happen before the next instruction.',
    perceptionBody: "RoboBeats is a family of lightweight streaming perception gates based on Qwen3.5. It processes frames in temporal order, using the current image and earlier observations to judge whether a specified condition holds or a new event has occurred. These judgments update its gating state and determine which observations are passed downstream. Users can set monitoring conditions; environmental events can initiate processing without a new request.",
    conditionTitle: 'Track a condition', conditionText: '“Has the elevator door opened?”<br>Monitor a specified condition to identify when to respond.', eventTitle: 'Discover a new event', eventText: '“Has something new happened?”<br>Retain useful observations before future questions are known.',
    perceptionCaption: 'RoboBeats shares visual input and observation history across conditions while maintaining separate predictions. The diagram shows the 2B configuration; the model family includes 0.8B, 2B and 4B variants.',
    demoTitle: "Real-world robot demonstrations", demoHint: "Click to play · Robot recordings", perceptionDetailsTitle: 'How continuous operation manages computation',
    perceptionDetails: "The model reads true / false token scores directly rather than generating text for every frame. Conditions share images and bounded observation history, with independent predictions. Training combines per-step judgments with positive-interval supervision and gives greater weight to interval boundaries. Online inference processes inputs at 1 Hz by default, reuses KV and recurrent-state caches, and uses separate activation and exit thresholds. Consecutive active observations form intervals for downstream responses or memory writing.",
    memoryTitle: 'Let past observations answer later questions.', memoryLead: "A table the robot passes today may hold a clue it needs to find a cup tomorrow.",
    memoryBody: "Plastic Memory stores selected source images and associated JSON records in a flat file structure, adopting ReSight’s observation-based memory design. Each observation retains its time, available pose, and descriptions, people, objects and events extracted from the evidence. Source images remain accessible for verification and for adding details not captured initially.",
    exampleQuestion: 'A later question', memoryQuestion: '“Where is my cup?”', memoryStep1: 'Find relevant records', memoryStep2: 'Revisit past images', memoryStep3: 'Verify the current state',
    memoryExtension: 'When existing fields cannot support a new question, the agent can reanalyze retained images and add fields or indexes. Doorway images, for example, can become searchable by room number after those numbers are extracted. The same experience can then serve questions that were not anticipated when it was recorded.',
    memoryCaption: "Revisitable original evidence, extensible structured fields, and execution and coding agents that access and enrich memory through tools and builders.", memoryScope: 'Reanalysis can recover details not previously indexed in retained images. Historical records describe past observations; confirming the present still requires new evidence.',
    evolutionTitle: 'Keep the method, beyond the solved problem.', evolutionLead: 'Sometimes the information is already in memory. What is missing is a way to extract it and connect the clues.',
    evolutionBody: 'LIFE uses ReSight’s Explore–Distill–Mount (EDM) mechanism to address these capability gaps. A coding agent explores processing programs and distills useful procedures into tools, skills and memory builders. Once validated, these can be called by the execution agent on later questions.',
    edm1: 'Inspect evidence, write programs and explore an executable solution.', edm2: 'Remove scene-specific hardcoding, define interfaces and improve the method through execution feedback.', edm3: 'Make validated tools, skills and builders available to subsequent tasks.',
    edmCaption: 'Starting from “How many booths like this have I seen?”, the agent explores image retrieval, corrects duplicate counts and retains a reusable tool.', evolutionBridge: 'A new method can reprocess past experience and serve future tasks, connecting the accumulation of memory with the accumulation of capability.',
    experienceTitle: 'What can a day of experience help answer?', experienceLead: 'We build memory offline from 24 hours of office video collected by A3 Ultra, then ask questions about people, objects, times and places.',
    experienceBody: 'An early visitor, cups in a meeting, an object passed between people at different times: the questions arrive after the observations. The agent must retrieve relevant records, connect clues across time and return to the original images when needed.',
    dayStat1: 'Office video collected by a robot', dayStat2: 'Retained keyframes', dayStat3: 'Cross-time QA cases · 3 runs each', experienceCaption: 'Real-robot observations, timestamped memory records and historical evidence accessed through tools.',
    evaluationTitle: 'From capturing moments to reusing experience.', evaluationIntro: 'The report evaluates perception gating, historical memory QA and capability reuse in separate settings. Here are two benchmark studies: observation selection under the same write budget (SSS-Bench) and reuse of built capabilities (FindingDory). Real-robot memory QA results are in the previous section.',
    result1Title: 'More useful observations at the same writing budget', pp: 'percentage points', uniform: 'Uniform sampling', result1Note: "618 questions from 171 parent videos, six sources and 14 question subtypes. Methods retain the same number of frames per video and use the same memory writer, answering model, memory format and scorer. Up to 10 historical frames can be revisited at answer time. Gains vary by question type.",
    durationChart: 'Results by observation duration', durationNote: 'For observations of at least 20 minutes, RoboBeats-2B reaches 58.6%, exceeding uniform sampling by 5.2 percentage points.',
    result2Title: 'Can constructed capabilities transfer to unseen experience?', withoutEDM: 'Without EDM', frozenEDM: 'Frozen EDM', result2Note: "Original ReSight experiment: 597 test queries from episodes 81–90, which were excluded from capability construction. Capabilities remain frozen during evaluation. The metric is high-level task success.",
    result3Title: 'A day of memory for later questions', result3Sub: 'A3 Ultra · 24-hour video · 6 cases', tableCaption: 'Real-robot memory QA scores and answer time', configuration: 'Configuration', rubricScore: 'Rubric score', answerTime: 'Mean answer time', codexA: 'Video, registration data and poses', codexB: 'Also given the constructed memory', lifeConfig: 'Robot memory and access tools',
    result3Note: 'All configurations use the same answering model, with three runs per question. Scores are aggregate human-rubric points with partial credit. Time covers the answering stage only, excluding offline memory construction. This case study does not establish long-term online autonomous learning.',
    reportDate: "October 2026",
    reportTitle: "Read the LIFE technical report", reportBody: "Explore how LIFE connects proactive perception, persistent memory and capability development. The report details the system design, training methods, evaluation protocols and experimental results.", openArxiv: 'arXiv', openPdf: 'Paper PDF', openCode: 'Source code', releaseTitle: "Code, models and evaluation resources", releaseIntro: 'RoboBeats inference code, three model sizes, and SSS-Bench questions, rubrics and reproduction scripts are now available.', modelsBody: 'Qwen3.5-based LoRA adapters in 0.8B, 2B and 4B sizes. Detect events from a causal 1 fps stream and select observations for memory writing.', inferenceDocs: 'Inference and Python API', benchmarkBody: "618 questions from 171 parent videos and 14 question subtypes, with observations up to 30 minutes. The system answers questions about sparse events, times, order and objects using only experience available before the query.", benchmarkLink: 'Data and evaluation', reproduceTitle: 'Reproduce and compare', reproduceBody: 'Run the published gate, memory writer, reader and grading pipeline. Evaluate your own predictions and inspect results by question type, source and observation duration.', reproduceLink: 'Reproduction guide', releaseScope: 'The current release covers RoboBeats and SSS-Bench. Code: Apache 2.0. SSS-Bench data and rubrics: CC BY-NC 4.0. Obtain source videos separately under their original providers’ licenses.', citationTitle: 'Cite this report', copy: 'Copy BibTeX', backTop: 'Back to top ↑'
  };
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const zh = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.innerHTML]));
  let lang = 'zh';
  const localized = (zhText, enText) => lang === 'zh' ? zhText : enText;
  const videos = {
    hero: { file: 's2-home-cover', poster: 's2-scene-cover.webp', duration: '03:42', sound: true, aspect: '5 / 4', zh: ['LIFE · 参与日常', '机器人在真实办公室环境中的演示。'], en: ['LIFE · Everyday experience', 'A robot demonstration in a real office environment.'] },
    farewell: { file: 'door-farewell', duration: '00:11', zh: ['门口告别', '捕捉离开时刻，回应日常互动。'], en: ['A farewell at the door', 'Recognizing a departure and responding in the moment.'] },
    elevator: { file: 'elevator-entry', duration: '00:11', zh: ['等待电梯', '关注电梯状态，在合适时机进入。'], en: ['Waiting for the elevator', 'Tracking the elevator state and entering at the right moment.'] },
    conversation: { file: 'conversation', duration: '00:32', zh: ['参与对话', '在持续交互中关注情境变化。'], en: ['Taking part in a conversation', 'Following contextual changes during an ongoing interaction.'] },
    coat: { file: 'coat-handover', duration: '00:13', zh: ['衣物交接', '观察人的动作，衔接物品交接。'], en: ['A coat handover', 'Observing human actions during an object handover.'] },
    bag: { file: 'bag-handover', duration: '00:12', zh: ['接过袋子', '有人递来袋子时抬手去接，对方放手时握住收回。'], en: ['Taking a bag', 'Reaching out when a bag is offered, then gripping it as the person lets go.'] },
    visitor: { file: 'visitor-response', duration: '00:30', zh: ['回应访客', '发现来访事件，主动启动回应。'], en: ['Responding to a visitor', 'Noticing an arrival and initiating a response.'] },
    cup: { file: 'cup-explainer', poster: 'cup-explainer-cover.jpg', duration: '01:47', sound: true, aspect: '5 / 4', zh: ['水杯的线索，藏在过去的经历里', '从历史观察中找回线索，再回到现场寻找物品。'], en: ['A cup’s trail through past experience', 'Recovering clues from historical observations, then looking for the object in the scene.'] },
    breakfast: { file: 's2-home-cover', poster: 'breakfast-explainer-cover.jpg', duration: '03:42', sound: true, aspect: '5 / 4', zh: ['记住早餐，也记得先问一句', '前两天，主动感知唤醒记忆写入；再次相遇时，先询问意愿，再依据记忆取回早餐。'], en: ['Remember breakfast. Remember to ask.', 'Observations on two earlier days activate memory writing. On a later encounter, the robot asks first, then uses memory to fetch breakfast.'] },
    resight: { file: 'resight-8f', poster: 'resight-8f.jpg', duration: '01:13', zh: ['ReSight · 从经历中构建方法', '展示基于视觉记忆的检索与能力扩展。'], en: ['ReSight · Building methods from experience', 'Visual-memory retrieval and capability extension in action.'] }
  };
  // Raw footage behind each memory story: groups of clips that play together, on one shared clock.
  // offset = seconds into that clip at group time 0. The day 3 and cup clips play walking at 6x (cup waiting at 4x),
  // with the same segments in both views, so the two stay in step.
  const rawGroups = {
    breakfast: [
      { zh: '前两天 · 同一个习惯', en: 'Two earlier days · the same habit', clips: [
        { src: 'breakfast-day1', zh: '第一天', en: 'Day 1', aspect: '5 / 4' },
        { src: 'breakfast-day2', zh: '第二天', en: 'Day 2', aspect: '5 / 4' }] },
      { zh: '第三天 · 两个视角，同一时刻 · 走路快进', en: 'Day 3 · two views of the same moment · walking sped up', clips: [
        { src: 'breakfast-day3-robot', zh: '机器人第一视角', en: 'Robot view', aspect: '5 / 4' },
        { src: 'breakfast-day3-phone', zh: '手机第三视角', en: 'Phone view', aspect: '16 / 9' }] }
    ],
    cup: [
      { zh: '三种记忆，认出水杯', en: 'Three kinds of memory, one water bottle', clips: [
        { src: 'cup-level1', aspect: '5 / 4',
          zh: ['一级 · 主动告知', '你说一句，它就记住。'],
          en: ['Level 1 · Told', 'Say it once and it remembers.'] },
        { src: 'cup-level2', aspect: '5 / 4',
          zh: ['二级 · 观察行为', '不用开口，它看见她用这只杯子喝水，自己记下归属。'],
          en: ['Level 2 · Observed', 'No words needed: it sees her drink from this bottle and records whose it is.'] },
        { src: 'cup-level3', aspect: '5 / 4',
          zh: ['三级 · 回溯经历', '没注意到的也能补回来。被问到时，它从她出现过的画面，追到她用过的杯子，多跳推理找到证据，再写进记忆。'],
          en: ['Level 3 · Recalled', 'What it missed can still be recovered. Asked later, it follows the frames she appears in to the bottle she used, reasoning across several hops to the evidence, then writes it to memory.'] }] },
      { zh: '取杯 · 两个视角，同一时刻 · 走路快进', en: 'Fetching · two views of the same moment · walking sped up', clips: [
        { src: 'cup-fetch-robot', zh: '机器人第一视角', en: 'Robot view', aspect: '5 / 4', offset: 0 },
        { src: 'cup-fetch-phone', zh: '手机第三视角', en: 'Phone view', aspect: '16 / 9', offset: 0 }] }
    ]
  };
  function rawFootage(id) {
    const groups = rawGroups[id].map((g, gi) => `<div class="raw-group" data-group="${id}-${gi}"><div class="raw-head"><span>${g[lang]}</span><button type="button" class="raw-play" aria-label="${localized('同时播放', 'Play together')}">▶</button><input type="range" class="raw-seek" min="0" max="1000" value="0" aria-label="${localized('进度', 'Progress')}"><time>0:00</time></div><div class="raw-clips raw-n${g.clips.length}">${g.clips.map(c => `<figure style="--ar:${c.aspect};flex:${c.aspect.split('/').map(Number).reduce((w, h) => w / h)} 1 0"><video muted playsinline preload="none" data-src="assets/s2-demos/${c.src}.mp4?v=nav-fast-20261106b" data-offset="${c.offset || 0}" poster="assets/s2-demos/${c.src}.jpg?v=cup-overlay-20261106"></video><figcaption>${Array.isArray(c[lang]) ? `<strong>${c[lang][0]}</strong>${c[lang][1]}` : c[lang]}</figcaption></figure>`).join('')}</div></div>`).join('');
    return `<details class="raw-footage"><summary>${localized('原片 · 并排同时播放', 'Original footage · side by side')}</summary>${groups}</details>`;
  }
  function thumb(id) {
    const v = videos[id], text = v[lang];
    return `<button class="demo-thumb" data-video="${id}" aria-label="${localized('播放：', 'Play: ')}${text[0]}"><img src="assets/s2-demos/${v.poster || v.file + '-cover.jpg'}" loading="lazy" alt="${text[0]}"><span class="play-circle" aria-hidden="true">▶</span><span class="duration">${v.duration}</span></button>`;
  }
  const cases = [
    { zh: ['水杯与主人', '哪些水杯属于谁？', [['会前 → 会中', '关联不同时间的水杯位置、外观与人物互动。'], ['回看画面', '核实绿色水杯的归属；现有证据不足以确认黑色水杯的主人。']], '找到线索，也明确证据尚不能支持什么。'], en: ['Cups & owners', 'Which cup belongs to whom?', [['Before → during', 'Connect cup locations, appearance and interactions across the meeting.'], ['Revisit images', 'Verify the green cup’s ownership; the available evidence does not establish who owns the black cup.']], 'Recover useful clues and recognize what the evidence cannot establish.'] },
    { zh: ['跨时段交接', '靠垫在不同时间，经过了谁的手？', [['10:51', '回看交接记录，确定这一时刻的相关人物。'], ['11:02', '关联另一位携带靠垫的人，区分两次不同的事件。']], '相同物品不意味着同一个事件；时间是关联证据的关键。'], en: ['Across time', 'Who handled the cushion at different times?', [['10:51', 'Revisit the handover record to identify the person involved.'], ['11:02', 'Connect a later observation of another person carrying it, keeping the two events distinct.']], 'The same object does not imply the same event. Time is essential to linking evidence.'] },
    { zh: ['截止时刻', '站在 12:30，能知道外套最后出现在哪里？', [['12:18', '最后可见线索指向茶水间的椅背。'], ['12:30', '以提问时刻为截止，只使用此前可获得的记录。']], '历史问答需要遵守时间边界，不能用之后的观察回答之前的问题。'], en: ['A time cutoff', 'At 12:30, where was the jacket last seen?', [['12:18', 'The last visible evidence points to the back of a pantry chair.'], ['12:30', 'Apply the question-time cutoff and use only evidence available beforehand.']], 'Historical QA must respect time boundaries, without using later observations to answer earlier questions.'] },
    { zh: ['缩小时间范围', '午餐大约发生在什么时候？', [['12:00–14:00', '从较宽的候选时间段开始检索。'], ['13:41–13:50', '回看更密集的相关画面，将答案收窄至约 13:50。']], '从粗粒度索引到原始证据，逐步提高答案的时间精度。'], en: ['Narrowing a time', 'Around what time was lunch?', [['12:00–14:00', 'Start by searching a broad candidate interval.'], ['13:41–13:50', 'Inspect relevant images more closely and refine the answer to around 13:50.']], 'Move from coarse indexes to original evidence to improve temporal precision.'] }
  ];
  let activeCase = 0;
  function renderCase() {
    document.querySelector('#case-tabs').innerHTML = cases.map((c, i) => `<button role="tab" id="case-tab-${i}" aria-controls="case-panel" aria-selected="${i === activeCase}" tabindex="${i === activeCase ? 0 : -1}" data-case="${i}">${c[lang][0]}</button>`).join('');
    const c = cases[activeCase][lang], panel = document.querySelector('#case-panel');
    panel.setAttribute('aria-labelledby', `case-tab-${activeCase}`);
    panel.innerHTML = `<p class="case-question">${c[1]}</p><div class="case-trace">${c[2].map(row => `<div><time>${row[0]}</time><p>${row[1]}</p></div>`).join('')}</div><p class="case-takeaway">${c[3]}</p>`;
  }
  const getHero = () => document.querySelector('#long-film .hero-video');
  function setLanguage(next) {
    lang = next === 'en' ? 'en' : 'zh';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    nodes.forEach(n => { n.innerHTML = (lang === 'zh' ? zh : en)[n.dataset.i18n] || zh[n.dataset.i18n]; });
    document.querySelectorAll('[data-lang]').forEach(b => { b.classList.toggle('active', b.dataset.lang === lang); b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    document.querySelector('#perception-demos').innerHTML = ['farewell', 'elevator', 'conversation', 'coat', 'bag', 'visitor'].map(id => `<article class="demo-card">${thumb(id)}<h4>${videos[id][lang][0]}</h4><p>${videos[id][lang][1]}</p></article>`).join('');
    const videoMeta = id => `<div class="demo-meta"><div><h4>${videos[id][lang][0]}</h4><p>${videos[id][lang][1]}</p></div><span class="duration-text">${videos[id].duration}</span></div>`;
    document.getElementById('memory-demo').innerHTML = ['cup', 'breakfast'].map(id => `<article class="memory-demo-card">${thumb(id)}<p class="memory-demo-path">${id === 'cup' ? localized('记忆召回 → 寻物行动', 'Memory recall → Finding an object') : localized('主动感知 → 记忆写入 → 主动服务', 'Perception → Memory writing → Proactive help') }</p>${videoMeta(id)}${rawFootage(id)}</article>`).join('');
    document.getElementById('evolution-demo').innerHTML = thumb('resight') + videoMeta('resight');
    document.querySelectorAll('[data-figure]').forEach(b => { const img = b.querySelector('img'); if (!img) { b.setAttribute('aria-label', localized('查看论文原图：', 'View original figure: ') + figureNames[b.dataset.figure][lang === 'zh' ? 0 : 1]); return; } if (!img.dataset.zhAlt) img.dataset.zhAlt = img.alt; img.alt = lang === 'zh' ? img.dataset.zhAlt : figureNames[b.dataset.figure][1]; b.setAttribute('aria-label', localized('放大：', 'Enlarge: ') + img.alt); });
    document.querySelector('meta[name="description"]').content = lang === 'zh' ? 'LIFE 将主动感知、长期记忆与可复用能力连接起来，探索机器人如何从持续经历中学习。' : 'LIFE connects proactive perception, persistent memory and reusable capabilities toward embodied agents that learn from experience.';
    renderCase();
    document.querySelectorAll('[data-zh-aria-label][data-en-aria-label]').forEach(n => n.setAttribute('aria-label', lang === 'zh' ? n.dataset.zhAriaLabel : n.dataset.enAriaLabel));
    document.querySelectorAll('[data-zh][data-en]').forEach(n=>n.textContent=n.dataset[lang]);
    document.querySelectorAll('[data-zh-alt][data-en-alt]').forEach(n=>n.alt=lang === 'zh' ? n.dataset.zhAlt : n.dataset.enAlt);
    try { localStorage.setItem('life-language', lang); } catch (_) { /* Preference storage is optional. */ }
  }
  const figureNames = {
    'sss-results': ['SSS-Bench 完整结果', 'Full SSS-Bench results'],
    'findingdory-results': ['FindingDory 能力构建与复用', 'FindingDory capability construction and reuse'],
    'robot-results': ['真实机器人记忆问答', 'Real-robot memory QA'],
    "robot-gallery": ["LIFE · 真实机器人场景", "LIFE · Real-robot scenes"],
    "evaluation-overview": ["RoboBeats · 六组评测总览", "RoboBeats · Six evaluation settings"],
    "sss-overview": ["SSS-Bench · 数据与问题分布", "SSS-Bench · Data and question types"],
    robobeats: ['RoboBeats · 主动感知', 'RoboBeats · Proactive perception'], memory: ['可回溯的记忆与能力扩展', 'Revisitable memory and capability extension'], edm: ['Explore–Distill–Mount · 方法复用', 'Explore–Distill–Mount · Reusing methods'], 'robot-cases': ['24 小时机器人记忆问答', '24-hour real-robot memory QA'], 'sss-duration': ['SSS-Bench · 观察时长分析', 'SSS-Bench · Observation duration']
  };
  const dialog = document.querySelector('#media-dialog'), content = dialog.querySelector('.media-content');
  let opener = null, resumeHero = false;
  function showMedia(button) {
    opener = button; resumeHero = Boolean(getHero() && !getHero().paused); getHero()?.pause(); content.replaceChildren();
    if (button.dataset.video) {
      const v = videos[button.dataset.video], player = document.createElement('video');
      document.querySelector('#media-title').textContent = v[lang][0];
      document.querySelector('#media-caption').textContent = v[lang][1];
      player.controls = true; player.muted = !v.sound; player.playsInline = true; player.preload = 'metadata'; player.src = `assets/s2-demos/${v.file}.mp4${v.version ? '?v=' + v.version : ''}`; player.poster = `assets/s2-demos/${v.poster || v.file + '-cover.jpg'}`;
      player.style.aspectRatio = v.aspect || (v.file === 'resight-8f' ? '16 / 9' : '2.5');
      player.addEventListener('error', () => { const note = document.createElement('p'); note.className = 'media-error'; note.textContent = localized('暂时无法播放，请稍后重试。', 'Playback is unavailable. Please try again.'); content.append(note); }, { once: true });
      content.append(player); dialog.classList.remove("is-figure"); dialog.showModal(); player.play().catch(() => {});
    } else {
      const key = button.dataset.figure, img = document.createElement('img');
      img.src = `assets/s2-research/${key}.webp${key === 'evaluation-overview' ? '?v=ovo-78-4-20261105' : ''}`; img.alt = figureNames[key][lang === 'zh' ? 0 : 1];
      document.querySelector('#media-title').textContent = img.alt;
      document.querySelector('#media-caption').textContent = localized('技术报告原图 · 按 Esc 或点击关闭返回', 'Figure from the technical report · Press Esc or close to return');
      content.append(img); dialog.classList.add("is-figure"); dialog.showModal();
    }
    document.body.style.overflow = 'hidden';
  }
  dialog.addEventListener('close', () => { const player = content.querySelector('video'); if (player) { player.pause(); player.removeAttribute('src'); player.load(); } content.replaceChildren(); document.body.style.overflow = ''; if (resumeHero && getHero() && !document.hidden && getHero().getBoundingClientRect().bottom > 0) getHero().play().catch(() => {}); opener?.focus({ preventScroll: true }); });
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  document.addEventListener('click', event => {
    const languageButton = event.target.closest('[data-lang]'); if (languageButton) setLanguage(languageButton.dataset.lang);
    const mediaButton = event.target.closest('[data-video], [data-figure]'); if (mediaButton) showMedia(mediaButton);
    const caseButton = event.target.closest('[data-case]'); if (caseButton) { activeCase = Number(caseButton.dataset.case); renderCase(); document.querySelector(`#case-tab-${activeCase}`).focus({ preventScroll: true }); }
  });
  document.querySelector('#case-tabs').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault(); activeCase = event.key === 'Home' ? 0 : event.key === 'End' ? cases.length - 1 : (activeCase + (event.key === 'ArrowRight' ? 1 : -1) + cases.length) % cases.length;
    renderCase(); document.querySelector(`#case-tab-${activeCase}`).focus({ preventScroll: true });
  });
  let toastTimer;
  document.querySelector('#copy-citation').addEventListener('click', async () => {
    const toast = document.querySelector('.toast');
    try { await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent); toast.textContent = localized('BibTeX 已复制', 'BibTeX copied'); }
    catch (_) { toast.textContent = localized('请选中上方 BibTeX 文本复制', 'Select the BibTeX text above to copy'); }
    clearTimeout(toastTimer); toast.classList.add('visible'); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
  });
  const sectionLinks = [...document.querySelectorAll('.section-nav a')];
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) sectionLinks.forEach(a => { const active = a.hash === '#' + entry.target.id; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); }); }, { rootMargin: '-15% 0px -65% 0px' });
  sectionLinks.forEach(a => observer.observe(document.querySelector(a.hash)));

  let saved = 'zh'; try { saved = localStorage.getItem('life-language') || 'zh'; } catch (_) { /* Default Chinese. */ }
  setLanguage(saved);
})();
