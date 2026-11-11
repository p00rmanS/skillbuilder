// Career features: interview simulator, answer bank, job tracker, call roleplay, listening drills, progress report,
// reminders, backup restore and app install. Loaded before app.js; app.js merges the views and actions below.
(() => {
'use strict';
const X = window.SBX = { views: {}, actions: {}, after: null };
const sb = () => window.SB;
const S = () => sb().S;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => sb().esc(s);
const icon = (n, c) => sb().icon(n, c);
const toast = m => sb().toast(m);
const hero = (h, lead) => `<div class="hero"><h1>${esc(h)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}</div>`;
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
const shuffled = (arr, seed) => { let x = hash(seed) || 1; const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const rnd = a => a[Math.floor(Math.random() * a.length)];
const lessonLink = id => { const [c, i] = id.split('.'); const co = sb().courseById(c), l = co && co.lessons[+i]; return l ? `<a href="#/lesson/${id}">${esc(l.t)}</a>` : ''; };

/* ---------- toolbox hub ---------- */
X.views.hub = () => {
  const jobsDue = (S().jobs || []).filter(j => j.follow && j.follow <= sb().dayStr() && ['Applied', 'Screening', 'Interview'].includes(j.stage)).length;
  const t = (href, ic, title, sub) => `<a class="card tool" href="#/${href}">${icon(ic)}<b>${title}</b><span class="muted small">${sub}</span></a>`;
  return `${hero('Everything you need for the job hunt', 'Tools to run your search, prepare your answers and see your progress.')}
  <div class="grid g3 tools" data-nav>
    ${t('toolkit', 'file', 'Toolkit', 'Emails, scripts and answers to copy')}
    ${t('answers', 'edit', 'Answer bank', 'Write and rehearse your best answers')}
    ${t('jobs', 'briefcase', 'Job tracker', jobsDue ? `${jobsDue} follow-up${jobsDue === 1 ? '' : 's'} due` : 'Applications and follow-ups')}
    ${t('sim', 'mic', 'Interview simulator', 'Ten questions and a scored report')}
    ${t('progress', 'chart', 'Progress report', 'Speaking, XP and skills over time')}
    ${t('tips', 'zap', 'Tips', 'Short ideas from every lesson')}
  </div>`;
};

/* ---------- recording helper ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
async function recStart() {
  const r = { chunks: [], text: '', url: '', mic: false, live: false, t0: Date.now() };
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
      r.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      r.rec = new MediaRecorder(r.stream); r.rec.ondataavailable = e => e.data.size && r.chunks.push(e.data); r.rec.start(); r.mic = true;
    }
  } catch { toast('Microphone unavailable. Using the timer only.'); }
  if (SR && r.mic) {
    try {
      r.sr = new SR(); r.sr.continuous = true; r.sr.interimResults = false; r.sr.lang = navigator.language || 'en-US';
      r.sr.onresult = e => { for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) r.text += e.results[i][0].transcript + ' '; };
      r.sr.onend = () => { if (r.live) { try { r.sr.start(); } catch { /* already running */ } } };
      r.live = true; r.sr.start();
    } catch { r.sr = null; }
  }
  r.t0 = Date.now();
  r.stop = () => new Promise(res => {
    r.live = false;
    const done = () => { if (r.chunks.length) r.url = URL.createObjectURL(new Blob(r.chunks, { type: (r.rec && r.rec.mimeType) || 'audio/webm' })); r.secs = Math.max(1, Math.round((Date.now() - r.t0) / 1000)); res(r); };
    try { r.sr && r.sr.stop(); } catch { /* noop */ }
    if (r.stream) r.stream.getTracks().forEach(t => t.stop());
    if (r.rec && r.rec.state !== 'inactive') { r.rec.onstop = done; r.rec.stop(); } else done();
  });
  return r;
}
const FILL = [/\bum+\b/g, /\buh+\b/g, /\ber+m?\b/g, /\blike\b/g, /\byou know\b/g, /\bbasically\b/g, /\bliterally\b/g, /\bactually\b/g, /\bi mean\b/g, /\bkind of\b/g, /\bsort of\b/g];
function speechStats(text, secs) {
  const t = (text || '').trim(), words = t ? t.split(/\s+/).length : 0;
  if (!words) return { words: 0, wpm: null, fillers: null };
  const low = t.toLowerCase();
  return { words, wpm: Math.round(words / (Math.max(secs, 1) / 60)), fillers: FILL.reduce((n, r) => n + (low.match(r) || []).length, 0) };
}
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const pace = w => w == null ? '' : w < 110 ? 'A little slow. Fine if you are pausing on purpose.' : w <= 170 ? 'Good pace.' : 'Fast. Add pauses.';

/* ---------- interview simulator ---------- */
const CHECK = ['Answered the question in my first sentence', 'Gave a specific example or a number', 'Used pauses instead of filler words', 'Stayed under 90 seconds', 'Finished with a clear last line'];
const SIM = { phase: 'setup', set: 'All', n: 10, qs: [], i: 0, rec: null, tick: null, left: 0, res: [], cur: null, saved: false };
const SETS = { All: () => true, 'Support and technical': q => ['Technical', 'Situational', 'Remote'].includes(q.cat), Behavioral: q => ['Behavioral', 'Strengths', 'Introduction'].includes(q.cat), 'Motivation and closing': q => ['Motivation', 'Closing', 'Introduction'].includes(q.cat) };
function simStop() {
  clearInterval(SIM.tick); SIM.tick = null;
  if (SIM.rec && SIM.phase === 'rec') { SIM.rec.stop(); }
  if (SIM.phase === 'rec' || SIM.phase === 'ask' || SIM.phase === 'check') SIM.phase = 'setup';
}
function simRender() {
  const el = $('#simbox'); if (!el) return;
  const q = SIM.qs[SIM.i];
  if (SIM.phase === 'setup') {
    el.innerHTML = `<div class="card sim-setup"><h2 class="h-card">Choose your round</h2>
      <div class="chips" data-nav role="group" aria-label="Question set">${Object.keys(SETS).map(k => `<button class="chip ${k === SIM.set ? 'on' : ''}" data-act="simSet" data-v="${esc(k)}" aria-pressed="${k === SIM.set}">${esc(k)}</button>`).join('')}</div>
      <label class="f" for="simN">Number of questions</label><select id="simN" data-fx="simN" style="width:auto">${[5, 10, 15].map(n => `<option value="${n}" ${n === SIM.n ? 'selected' : ''}>${n} questions</option>`).join('')}</select>
      <p class="muted small note">Answer out loud. Your voice stays in this browser. After each answer you check yourself against five points, then get a report with your pace, filler words and the lessons to review.</p>
      <div class="row end-row"><button class="btn primary lg" data-act="simStart">Start the interview</button></div></div>
      ${(S().sims || []).length ? `<section class="sec tight"><h2 class="h-card">Past rounds</h2><div class="card flat">${S().sims.slice(0, 6).map(s => `<div class="entry"><div class="row between"><b>${esc(s.date)} · ${s.n} questions</b><span class="muted small">${s.wpm != null ? s.wpm + ' wpm · ' : ''}${s.fillers != null ? s.fillers + ' fillers · ' : ''}checklist ${s.score}/5</span></div></div>`).join('')}</div></section>` : ''}`;
  } else if (SIM.phase === 'ask') {
    el.innerHTML = `<div class="card sim-q"><p class="eyebrow">Question ${SIM.i + 1} of ${SIM.qs.length} · ${esc(q.cat)}</p><div class="prompt">${esc(q.q)}</div>
      <details class="hint-box"><summary>Need a hint?</summary><p class="muted">${esc(q.tip)}</p></details>
      <div class="row" style="justify-content:center"><button class="btn primary lg" data-act="simRec">Start answering</button></div></div>`;
  } else if (SIM.phase === 'rec') {
    el.innerHTML = `<div class="card sim-q"><p class="eyebrow">Question ${SIM.i + 1} of ${SIM.qs.length}</p><div class="prompt">${esc(q.q)}</div><div class="timer" id="simT">${fmt(SIM.left)}</div>
      <p><span class="rec-dot"></span><span class="muted">${SIM.rec && SIM.rec.mic ? 'Recording' : 'Timer only (no microphone)'}</span></p>
      <div class="row" style="justify-content:center"><button class="btn primary lg" data-act="simDone">Finish answer</button></div></div>`;
  } else if (SIM.phase === 'check') {
    const c = SIM.cur;
    el.innerHTML = `<div class="card sim-q"><p class="eyebrow">Question ${SIM.i + 1} of ${SIM.qs.length}</p><h2 class="h-card">${esc(q.q)}</h2>
      <div class="metrics"><div class="metric"><b>${c.secs}s</b><span class="muted small">Time</span></div><div class="metric"><b>${c.wpm ?? '–'}</b><span class="muted small">Words / min</span></div><div class="metric"><b>${c.fillers ?? '–'}</b><span class="muted small">Filler words</span></div></div>
      ${c.wpm != null ? `<p>${pace(c.wpm)}</p>` : `<p class="muted small">${SR ? 'No speech detected, so there are no stats for this answer.' : 'Live transcript needs Chrome or Edge, so use the checklist.'}</p>`}
      ${c.url ? `<audio controls src="${c.url}"></audio>` : ''}${c.text ? `<div class="transcript">${esc(c.text)}</div>` : ''}
      <div class="selfcheck"><b>Check yourself</b>${CHECK.map((t, k) => `<label class="check"><input type="checkbox" data-fx="simCheck" data-k="${k}"><span>${t}</span></label>`).join('')}</div>
      <div class="row end-row"><button class="btn primary lg" data-act="simNext">${SIM.i + 1 < SIM.qs.length ? 'Next question' : 'See my report'}</button></div></div>`;
  } else if (SIM.phase === 'report') {
    const r = SIM.res, n = r.length, wp = r.filter(x => x.wpm != null), avgW = wp.length ? Math.round(wp.reduce((a, x) => a + x.wpm, 0) / wp.length) : null;
    const fl = r.some(x => x.fillers != null) ? r.reduce((a, x) => a + (x.fillers || 0), 0) : null, sc = r.reduce((a, x) => a + x.score, 0) / n;
    const tally = CHECK.map((t, k) => [t, r.filter(x => x.checks[k]).length]).sort((a, b) => a[1] - b[1]);
    const weak = r.filter(x => x.score <= 2);
    el.innerHTML = `<div class="card"><h2 class="h-card">Your interview report</h2>
      <div class="metrics"><div class="metric"><b>${n}</b><span class="muted small">Answers</span></div><div class="metric"><b>${avgW ?? '–'}</b><span class="muted small">Avg words / min</span></div><div class="metric"><b>${fl ?? '–'}</b><span class="muted small">Filler words</span></div><div class="metric"><b>${sc.toFixed(1)}/5</b><span class="muted small">Checklist</span></div></div>
      ${avgW != null ? `<p>${pace(avgW)}</p>` : ''}
      <h3>What to work on next</h3><p>Your weakest point: <b>${esc(tally[0][0])}</b> (${tally[0][1]} of ${n} answers). Strongest: <b>${esc(tally[CHECK.length - 1][0])}</b>.</p>
      ${weak.length ? `<h3>Lessons to review</h3><ul class="reviewlist">${weak.map(x => `<li><span>${esc(x.q)}</span><span class="muted small">${lessonLink(x.lesson)}</span></li>`).join('')}</ul>` : '<p>Strong round. Raise the difficulty with a different question set.</p>'}
      <h3>Your answers</h3>${r.map((x, k) => `<div class="entry"><div class="row between"><b>${k + 1}. ${esc(x.q)}</b><span class="muted small">${x.secs}s · ${x.score}/5${x.wpm != null ? ' · ' + x.wpm + ' wpm' : ''}</span></div>${x.url ? `<audio controls src="${x.url}"></audio>` : ''}</div>`).join('')}
      <div class="row end-row"><button class="btn" data-act="simAgain">Run another round</button></div></div>`;
  }
}
Object.assign(X.actions, {
  simSet(el) { SIM.set = el.dataset.v; simRender(); },
  simStart() {
    SIM.n = +($('#simN') && $('#simN').value) || SIM.n;
    const pool = window.SIMQ.filter(SETS[SIM.set]);
    SIM.qs = shuffled(pool, String(Date.now())).slice(0, Math.min(SIM.n, pool.length)); SIM.i = 0; SIM.res = []; SIM.saved = false; SIM.phase = 'ask'; simRender();
  },
  async simRec() {
    const b = $('[data-act="simRec"]'); if (b) { b.disabled = true; b.classList.add('busy'); b.textContent = 'Waiting for microphone'; }
    SIM.rec = await recStart();
    if (location.hash !== '#/sim') { SIM.rec.stop(); return; }
    SIM.phase = 'rec'; SIM.left = 0; simRender();
    clearInterval(SIM.tick); SIM.tick = setInterval(() => { SIM.left++; const t = $('#simT'); if (t) t.textContent = fmt(SIM.left); if (SIM.left >= 120) X.actions.simDone(); }, 1000);
  },
  async simDone() {
    if (SIM.phase !== 'rec') return; clearInterval(SIM.tick); SIM.tick = null;
    const r = await SIM.rec.stop(), st = speechStats(r.text, r.secs);
    SIM.cur = { secs: r.secs, wpm: st.wpm, fillers: st.fillers, text: r.text.trim(), url: r.url, checks: [] }; SIM.phase = 'check'; simRender();
  },
  simNext() {
    const c = SIM.cur, q = SIM.qs[SIM.i]; c.score = c.checks.filter(Boolean).length; SIM.res.push({ q: q.q, lesson: q.lesson, ...c });
    if (SIM.i + 1 < SIM.qs.length) { SIM.i++; SIM.phase = 'ask'; }
    else {
      SIM.phase = 'report';
      if (!SIM.saved) {
        SIM.saved = true; const r = SIM.res, wp = r.filter(x => x.wpm != null);
        S().sims.unshift({ date: sb().dayStr(), n: r.length, wpm: wp.length ? Math.round(wp.reduce((a, x) => a + x.wpm, 0) / wp.length) : null, fillers: r.some(x => x.fillers != null) ? r.reduce((a, x) => a + (x.fillers || 0), 0) : null, score: +(r.reduce((a, x) => a + x.score, 0) / r.length).toFixed(1), secs: r.reduce((a, x) => a + x.secs, 0) });
        S().sims = S().sims.slice(0, 40); sb().touch(40); toast('Round saved +40 XP');
      }
    }
    simRender(); window.scrollTo(0, 0);
  },
  simAgain() { SIM.phase = 'setup'; simRender(); window.scrollTo(0, 0); }
});
X.views.sim = () => `${hero('Run a full interview, then read your report', 'Ten questions, your voice, and a score on pace, filler words and structure.')}<div id="simbox"></div>`;

/* ---------- answer bank ---------- */
const wc = t => (t.trim() ? t.trim().split(/\s+/).length : 0);
const ansMeta = id => { const a = S().answers[id] || { text: '' }, w = wc(a.text); return `${w} word${w === 1 ? '' : 's'} · about ${Math.round(w / 2.2)} seconds spoken${a.practised ? ` · practised ${a.practised}×` : ''}`; };
X.views.answers = () => `${hero('Write your best answers once, then rehearse them', 'Aim for 45 to 90 seconds each. Practise aloud until you can say them without reading.')}
  <div class="grid" id="anslist">${window.ANSWERQ.map(q => { const a = S().answers[q.id] || { text: '' };
    return `<article class="card ans"><div class="row between"><h3>${esc(q.t)}</h3><span class="small muted" id="am-${q.id}">${ansMeta(q.id)}</span></div>
      <p class="muted small">${esc(q.hint)} ${q.lesson ? 'Lesson: ' + lessonLink(q.lesson) : ''}</p>
      <textarea data-fx="ans" data-id="${q.id}" aria-label="${esc(q.t)}" placeholder="Write it the way you would say it.">${esc(a.text)}</textarea>
      <div class="row"><button class="btn tint" data-act="ansPractice" data-id="${q.id}">I practised it aloud</button><button class="btn ghost" data-act="ansCopy" data-id="${q.id}">Copy</button></div></article>`; }).join('')}</div>`;
Object.assign(X.actions, {
  ansPractice(el) {
    const id = el.dataset.id, a = S().answers[id] || (S().answers[id] = { text: '' });
    if (!a.text.trim()) { toast('Write the answer first, then practise it.'); return; }
    a.practised = (a.practised || 0) + 1;
    if (a.xpDay !== sb().dayStr()) { a.xpDay = sb().dayStr(); sb().touch(10); toast('Practice logged +10 XP'); } else { sb().save(); toast('Practice logged'); }
    $('#am-' + id).textContent = ansMeta(id);
  },
  ansCopy(el) { const a = S().answers[el.dataset.id]; if (!a || !a.text) return; (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(a.text) : Promise.reject()).then(() => toast('Copied'), () => toast('Select the text and copy it by hand.')); }
});
let ansT;
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.fx === 'ans') { const id = t.dataset.id, a = S().answers[id] || (S().answers[id] = { text: '' }); a.text = t.value; a.ts = Date.now(); $('#am-' + id).textContent = ansMeta(id); clearTimeout(ansT); ansT = setTimeout(sb().save, 400); }
  if (t.dataset.fx === 'jobNotes') { const j = S().jobs.find(x => x.id === t.dataset.id); if (j) { j.notes = t.value; clearTimeout(ansT); ansT = setTimeout(sb().save, 400); } }
});

/* ---------- job tracker ---------- */
const STAGES = ['Saved', 'Applied', 'Screening', 'Interview', 'Offer', 'Rejected', 'Ghosted'];
let jobFilter = 'Active';
const isDue = j => j.follow && j.follow <= sb().dayStr() && ['Applied', 'Screening', 'Interview'].includes(j.stage);
const safeUrl = u => /^https?:\/\//i.test(u || '') ? u : '';
function jobsList() {
  const f = jobFilter, all = S().jobs;
  const list = all.filter(j => f === 'All' || (f === 'Active' ? !['Rejected', 'Ghosted'].includes(j.stage) : j.stage === f)).sort((a, b) => (isDue(b) - isDue(a)) || String(b.applied).localeCompare(String(a.applied)));
  return list.length ? list.map(j => `<article class="card job ${isDue(j) ? 'due' : ''}"><div class="row between"><div><h3>${esc(j.co)}</h3><p class="muted">${esc(j.role)}${safeUrl(j.link) ? ` · <a href="${esc(safeUrl(j.link))}" target="_blank" rel="noopener">Posting</a>` : ''}</p></div>
      <select data-fx="jobStage" data-id="${j.id}" aria-label="Stage for ${esc(j.co)}" style="width:auto">${STAGES.map(s => `<option ${s === j.stage ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
    <div class="row"><label class="small muted" for="jf-${j.id}">Follow up on</label><input type="date" id="jf-${j.id}" data-fx="jobFollow" data-id="${j.id}" value="${esc(j.follow || '')}" style="width:auto">${isDue(j) ? '<span class="status due-flag">Follow-up due</span>' : ''}<span class="small muted">Applied ${esc(j.applied)}</span></div>
    <textarea data-fx="jobNotes" data-id="${j.id}" aria-label="Notes for ${esc(j.co)}" placeholder="Contacts, questions they asked, what to say next." style="min-height:72px">${esc(j.notes || '')}</textarea>
    <div class="row"><button class="btn tint" data-act="jobFollowed" data-id="${j.id}">I followed up (+5 days)</button><button class="btn ghost danger" data-act="jobDel" data-id="${j.id}">Delete</button></div></article>`).join('') : '<p class="empty">Nothing here yet. Add your first application above.</p>';
}
X.views.jobs = () => {
  const J = S().jobs, applied = J.filter(j => j.stage !== 'Saved'), replies = applied.filter(j => ['Screening', 'Interview', 'Offer', 'Rejected'].includes(j.stage)), today = sb().dayStr();
  return `${hero('Run your job search like a pipeline', 'Log every application, set a follow-up date, and never lose track of a lead.')}
  <div class="metrics"><div class="metric"><b>${J.length}</b><span class="muted small">Tracked</span></div><div class="metric"><b>${applied.length}</b><span class="muted small">Applied</span></div><div class="metric"><b>${J.filter(j => j.stage === 'Interview').length}</b><span class="muted small">Interviews</span></div><div class="metric"><b>${applied.length ? Math.round(replies.length / applied.length * 100) : 0}%</b><span class="muted small">Heard back</span></div></div>
  <form class="card" data-fform="job"><h2 class="h-card">Add an application</h2><div class="grid g2"><div><label class="f" for="j-co">Company</label><input id="j-co" type="text" required></div><div><label class="f" for="j-role">Role</label><input id="j-role" type="text" required></div></div>
    <div class="grid g2"><div><label class="f" for="j-link">Link to the posting (optional)</label><input id="j-link" type="text" placeholder="https://"></div><div><label class="f" for="j-follow">Follow up on</label><input id="j-follow" type="date" value="${sb().addDays(5)}"></div></div>
    <div class="row end-row"><button class="btn primary">Add application</button></div></form>
  <section class="sec tight"><div class="chips" id="jobChips" data-nav>${['Active', 'All', ...STAGES].map(s => `<button class="chip ${s === jobFilter ? 'on' : ''}" data-act="jobFilter" data-v="${s}">${s}</button>`).join('')}</div></section>
  <div class="grid sec tight" id="joblist">${jobsList()}</div>`;
};
document.addEventListener('submit', e => {
  if (e.target.dataset.fform !== 'job') return; e.preventDefault();
  const co = $('#j-co').value.trim(), role = $('#j-role').value.trim(); if (!co || !role) return;
  S().jobs.unshift({ id: 'j' + Date.now().toString(36), co, role, link: $('#j-link').value.trim(), stage: 'Applied', applied: sb().dayStr(), follow: $('#j-follow').value || sb().addDays(5), notes: '' });
  sb().touch(10); toast('Application added +10 XP'); sb().render();
});
document.addEventListener('change', e => {
  const t = e.target, fx = t.dataset.fx; if (!fx) return;
  if (fx === 'jobStage') { const j = S().jobs.find(x => x.id === t.dataset.id); if (j) { j.stage = t.value; if (t.value === 'Interview') j.follow = sb().addDays(2); sb().save(); $('#joblist').innerHTML = jobsList(); } }
  if (fx === 'jobFollow') { const j = S().jobs.find(x => x.id === t.dataset.id); if (j) { j.follow = t.value; sb().save(); $('#joblist').innerHTML = jobsList(); } }
  if (fx === 'simN') SIM.n = +t.value;
  if (fx === 'simCheck') { SIM.cur.checks[+t.dataset.k] = t.checked; }
  if (fx === 'lsAcc') LS.acc = t.value;
  if (fx === 'lsRate') LS.rate = +t.value;
});
Object.assign(X.actions, {
  jobFilter(el) { jobFilter = el.dataset.v; $$('#jobChips .chip').forEach(c => c.classList.toggle('on', c === el)); $('#joblist').innerHTML = jobsList(); },
  jobFollowed(el) { const j = S().jobs.find(x => x.id === el.dataset.id); if (!j) return; j.follow = sb().addDays(5); sb().touch(5); $('#joblist').innerHTML = jobsList(); toast('Next follow-up in 5 days'); },
  jobDel(el) { if (confirm('Delete this application?')) { S().jobs = S().jobs.filter(x => x.id !== el.dataset.id); sb().save(); sb().render(); } }
});

/* ---------- text to speech ---------- */
const hasTTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
function speak(text, lang, rate) {
  if (!hasTTS) return false;
  try {
    speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = lang || 'en-US'; u.rate = rate || 1;
    const v = speechSynthesis.getVoices().find(x => x.lang === u.lang) || speechSynthesis.getVoices().find(x => x.lang.startsWith(u.lang.slice(0, 2)));
    if (v) u.voice = v; speechSynthesis.speak(u); return true;
  } catch { return false; }
}

/* ---------- call roleplay ---------- */
const RPS = { id: null, node: null, score: 0, max: 0, log: [], picked: null };
function rpRender() {
  const el = $('#rpbox'); if (!el) return;
  if (!RPS.id) {
    el.innerHTML = `<div class="grid g2" data-nav>${window.RP.map(r => { const b = S().rp[r.id]; return `<button class="card tool pick" data-act="rpPick" data-id="${r.id}">${icon('phone')}<b>${esc(r.t)}</b><span class="muted small">${esc(r.who)}</span><span class="small">${esc(r.goal)}</span>${b ? `<span class="status ok">${icon('check')} Best ${b.best}%</span>` : ''}</button>`; }).join('')}</div>`; return;
  }
  const sc = window.RP.find(r => r.id === RPS.id), n = sc.nodes[RPS.node];
  if (n.end) {
    const pct = RPS.max ? Math.round(RPS.score / RPS.max * 100) : 0;
    el.innerHTML = `<div class="card"><h2 class="h-card">${pct >= 85 ? 'Excellent call' : pct >= 60 ? 'Solid call, with room to grow' : 'Rough call. Try again.'}</h2><p class="lead">You scored ${pct}%.</p>
      ${RPS.log.map(l => `<div class="entry"><div class="row between"><b>${esc(l.pick)}</b><span class="status ${l.s === 2 ? 'ok' : l.s === 0 ? 'bad' : ''}">${l.s === 2 ? 'Best' : l.s === 1 ? 'Okay' : 'Weak'}</span></div><p class="muted small">${esc(l.why)}</p></div>`).join('')}
      <div class="row end-row"><button class="btn" data-act="rpBack">All scenarios</button><button class="btn primary" data-act="rpPick" data-id="${sc.id}">Try again</button></div></div>`; return;
  }
  const opts = shuffled(n.o.map((o, k) => ({ o, k })), RPS.id + RPS.node);
  el.innerHTML = `<div class="card"><p class="eyebrow">${esc(sc.t)}</p><p class="muted small">${esc(sc.who)} Goal: ${esc(sc.goal)}</p>
    <div class="bubble cust"><b>Customer</b><p>${esc(n.c)}</p>${hasTTS ? `<button class="btn ghost" data-act="rpHear">${icon('headphones')} Hear it</button>` : ''}</div>
    <p class="muted small">Choose what you would say. Say it out loud first.</p>
    ${opts.map(({ o, k }) => `<button class="opt" data-act="rpAns" data-k="${k}"><span>${esc(o[0])}</span></button>`).join('')}
    <div id="rpfb"></div></div>`;
  if (hasTTS && !RPS.picked) speak(n.c, 'en-US', 1);
}
Object.assign(X.actions, {
  rpPick(el) { Object.assign(RPS, { id: el.dataset.id, node: window.RP.find(r => r.id === el.dataset.id).start, score: 0, max: 0, log: [], picked: null }); rpRender(); window.scrollTo(0, 0); },
  rpBack() { RPS.id = null; rpRender(); },
  rpHear() { const sc = window.RP.find(r => r.id === RPS.id); speak(sc.nodes[RPS.node].c, 'en-US', 1); },
  rpAns(el) {
    if (RPS.picked != null) return;
    const sc = window.RP.find(r => r.id === RPS.id), n = sc.nodes[RPS.node], o = n.o[+el.dataset.k]; RPS.picked = +el.dataset.k;
    $$('#rpbox .opt').forEach(b => { b.disabled = true; }); el.classList.add(o[2] === 2 ? 'right' : o[2] === 0 ? 'wrong' : 'ok');
    RPS.score += o[2]; RPS.max += 2; RPS.log.push({ pick: o[0], s: o[2], why: o[3] });
    $('#rpfb').innerHTML = `<div class="why">${esc(o[3])}</div><div class="row end-row"><button class="btn primary" data-act="rpNext" data-next="${o[1]}">Continue</button></div>`;
  },
  rpNext(el) {
    const sc = window.RP.find(r => r.id === RPS.id); RPS.node = el.dataset.next; RPS.picked = null;
    if (sc.nodes[RPS.node].end) {
      const pct = Math.round(RPS.score / RPS.max * 100), prev = S().rp[sc.id], today = sb().dayStr();
      S().rp[sc.id] = { best: Math.max(pct, prev ? prev.best : 0), day: today };
      if (!prev || prev.day !== today) { sb().touch(25); toast('Call complete +25 XP'); } else sb().save();
    }
    rpRender(); window.scrollTo(0, 0);
  }
});
X.views.roleplay = () => `${hero('Handle a real customer call, one reply at a time', 'Pick what you would say. Say it aloud, then see why it worked or did not.')}<div id="rpbox"></div>`;

/* ---------- listening drills ---------- */
const LS = { mode: 'Numbers', acc: 'en-US', rate: 1, item: null, shown: false };
const dw = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const digitsSay = s => s.split('').map(c => /\d/.test(c) ? dw[+c] : c).join(' ');
function newItem() {
  const m = LS.mode, L = window.LISTEN;
  if (m === 'Numbers') {
    const t = rnd(['teens', 'money', 'time']);
    if (t === 'teens') { const pr = rnd([[13, 30], [14, 40], [15, 50], [16, 60], [17, 70], [18, 80], [19, 90]]), v = rnd(pr); return { say: `The ticket number is ${v}.`, ans: String(v), label: 'Type the number you heard. Listen for thirTEEN versus THIRty.' }; }
    if (t === 'money') { const v = rnd([49, 90, 119, 250, 1250, 3400, 15, 50, 780]); return { say: `The total is ${v} dollars.`, ans: String(v), label: 'Type the amount in digits.' }; }
    const h = rnd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), mi = rnd(['00', '15', '30', '45']); return { say: `The call is at ${h} ${mi === '00' ? "o'clock" : mi}.`, ans: `${h}:${mi}`, label: 'Type the time, for example 3:30.' };
  }
  if (m === 'Phone numbers') { const d = '555' + String(Math.floor(Math.random() * 1e7)).padStart(7, '0'); return { say: `My number is ${digitsSay(d.slice(0, 3))}, ${digitsSay(d.slice(3, 6))}, ${digitsSay(d.slice(6))}.`, ans: d, label: 'Type the 10 digits.' }; }
  if (m === 'Spelling') { const n = rnd(L.names); return { say: `The customer's last name is ${n}.`, ans: n, label: 'Type the name exactly as spelled.' }; }
  if (m === 'Emails') { const u = `${rnd(['maria', 'carlos', 'anna', 'james', 'sofia'])}.${rnd(['lopez', 'tan', 'reyes', 'smith', 'cruz'])}`, dg = rnd(['', '', String(10 + Math.floor(Math.random() * 90))]), dom = rnd(['mail.com', 'example.org', 'work.net']); const em = `${u}${dg}@${dom}`; return { say: `My email is ${u.replace('.', ' dot ')} ${dg ? digitsSay(dg) : ''} at ${dom.replace('.', ' dot ')}.`, ans: em, label: 'Type the email address.' }; }
  const s = rnd(L.sentences); return { say: s, ans: s, label: 'Type what you hear.', sentence: true };
}
const norm = s => s.toLowerCase().replace(/[$,]/g, '').replace(/\s+/g, ' ').trim();
const words = s => s.toLowerCase().replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
function lsRender() {
  const el = $('#lsbox'); if (!el) return;
  const L = window.LISTEN, D = S().drill;
  if (!hasTTS) { el.innerHTML = `<div class="card"><p>Your browser cannot read text aloud, so the listening drills are not available here. Try Chrome, Edge or Safari.</p></div>`; return; }
  if (!LS.item) LS.item = newItem();
  const it = LS.item;
  el.innerHTML = `<div class="card"><div class="chips" data-nav role="group" aria-label="Drill type">${['Numbers', 'Phone numbers', 'Spelling', 'Emails', 'Sentences'].map(m => `<button class="chip ${m === LS.mode ? 'on' : ''}" data-act="lsMode" data-v="${m}" aria-pressed="${m === LS.mode}">${m}</button>`).join('')}</div>
    <div class="row ls-opts"><label class="small muted" for="lsAcc">Accent</label><select id="lsAcc" data-fx="lsAcc" style="width:auto">${L.accents.map(([c, n]) => `<option value="${c}" ${c === LS.acc ? 'selected' : ''}>${n}</option>`).join('')}</select>
      <label class="small muted" for="lsRate">Speed</label><select id="lsRate" data-fx="lsRate" style="width:auto">${[[.75, 'Slow'], [1, 'Normal'], [1.25, 'Fast']].map(([v, n]) => `<option value="${v}" ${v === LS.rate ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
    <div class="ls-main"><button class="btn primary lg" data-act="lsPlay">${icon('headphones')} Play</button><p class="muted small">${esc(it.label)} You can replay as often as you like.</p>
    <input type="text" id="lsIn" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer" ${LS.shown ? 'disabled' : ''}>
    <div class="row"><button class="btn" data-act="lsCheck" ${LS.shown ? 'disabled' : ''}>Check</button><button class="btn ghost" data-act="lsNext">${LS.shown ? 'Next' : 'Skip'}</button></div><div id="lsfb" aria-live="polite"></div></div>
    <p class="small muted">Score so far: ${D.right} of ${D.total} correct. Voices come from your device, so some accents may sound alike.</p></div>`;
}
Object.assign(X.actions, {
  lsMode(el) { LS.mode = el.dataset.v; LS.item = null; LS.shown = false; lsRender(); },
  lsPlay() { if (!speak(LS.item.say, LS.acc, LS.rate)) toast('Could not play audio on this device.'); const i = $('#lsIn'); if (i && !LS.shown) i.focus(); },
  lsCheck() {
    const it = LS.item, v = ($('#lsIn').value || '').trim(); if (!v) { toast('Type what you heard first.'); return; }
    let ok, html;
    if (it.sentence) {
      const a = words(it.ans), b = words(v), hit = a.filter((w, i) => b[i] === w || b.includes(w)).length, pct = Math.round(hit / a.length * 100); ok = pct >= 90;
      html = `<div class="why ${ok ? '' : 'bad'}"><b>${pct}% of the words</b><p>${esc(it.ans)}</p></div>`;
    } else { ok = norm(v).replace(/\s/g, '') === norm(it.ans).replace(/\s/g, ''); html = `<div class="why ${ok ? '' : 'bad'}"><b>${ok ? 'Correct' : 'Not quite'}</b><p>The answer: ${esc(it.ans)}</p></div>`; }
    LS.shown = true; const D = S().drill; D.total++; if (ok) { D.right++; sb().touch(2); } else sb().save();
    lsRender(); $('#lsfb').innerHTML = html; $('#lsIn').value = v;
  },
  lsNext() { LS.item = newItem(); LS.shown = false; lsRender(); setTimeout(() => X.actions.lsPlay(), 150); }
});
X.views.listen = () => `${hero('Train your ear on numbers, names and accents', 'Listen, type what you hear, and check. The same skills you need on real calls.')}<div id="lsbox"></div>`;

/* ---------- progress report ---------- */
const svgBars = (vals, labels, goal) => {
  const W = 560, H = 170, pad = 26, max = Math.max(goal || 0, ...vals, 10), bw = (W - pad * 2) / vals.length;
  return `<svg class="chart" viewBox="0 0 ${W} ${H + 24}" role="img" aria-label="Bar chart">${goal ? `<line x1="${pad}" x2="${W - pad}" y1="${H - goal / max * (H - 10)}" y2="${H - goal / max * (H - 10)}" class="goal"/>` : ''}
    ${vals.map((v, i) => `<rect x="${pad + i * bw + 2}" y="${H - v / max * (H - 10)}" width="${Math.max(bw - 4, 2)}" height="${v / max * (H - 10)}" rx="3" class="bar"/>`).join('')}
    ${labels.map((l, i) => l ? `<text x="${pad + i * bw + bw / 2}" y="${H + 16}" text-anchor="middle">${l}</text>` : '').join('')}</svg>`;
};
const svgLine = (pts, lo, hi) => {
  const W = 560, H = 170, pad = 30; if (pts.length < 2) return '<p class="muted small">Do at least two speaking sessions to see a trend.</p>';
  const max = Math.max(hi + 20, ...pts), min = Math.min(lo - 20, ...pts), y = v => H - (v - min) / (max - min) * (H - 10), x = i => pad + i * (W - pad * 2) / (pts.length - 1);
  return `<svg class="chart" viewBox="0 0 ${W} ${H + 12}" role="img" aria-label="Line chart of words per minute"><rect x="${pad}" y="${y(hi)}" width="${W - pad * 2}" height="${y(lo) - y(hi)}" class="band"/>
    <polyline points="${pts.map((v, i) => `${x(i)},${y(v)}`).join(' ')}" class="line"/>${pts.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="4" class="dot"/>`).join('')}
    <text x="${pad}" y="${y(hi) - 4}">${hi}</text><text x="${pad}" y="${y(lo) + 12}">${lo}</text></svg>`;
};
X.views.progress = () => {
  const s = S(), all = sb().allLessons, done = Object.keys(s.done).length;
  const days = Array.from({ length: 28 }, (_, i) => { const d = sb().dateOff(-(27 - i)); return [sb().dayStr(d), d.getDate()]; });
  const xp = days.map(([k]) => s.days[k] || 0), labels = days.map(([, d], i) => (i % 7 === 0 || i === 27) ? d : '');
  const spoken = Math.round(([...s.sessions, ...(s.sims || [])].reduce((a, x) => a + (x.secs || 0), 0)) / 60);
  const sp = [...s.sessions.map(x => ({ d: x.date, w: x.wpm, f: x.fillers })), ...(s.sims || []).map(x => ({ d: x.date, w: x.wpm, f: x.fillers }))].filter(x => x.w != null).sort((a, b) => a.d.localeCompare(b.d)).slice(-12);
  const cats = [...new Set(sb().courses.map(c => c.cat))].map(cat => { const cs = sb().courses.filter(c => c.cat === cat), t = cs.reduce((a, c) => a + c.lessons.length, 0), d = cs.reduce((a, c) => a + c.lessons.filter((_, i) => s.done[sb().lessonId(c, i)]).length, 0); return [cat, d, t]; });
  const weeks = Array.from({ length: 8 }, (_, i) => { const end = Date.now() - (7 - i) * 6048e5, start = end - 6048e5; return Object.values(s.done).filter(x => x.ts > start && x.ts <= end).length; });
  return `${hero('See what practice has changed', 'Your numbers for the last four weeks, and the skills behind them.')}
  <div class="metrics"><div class="metric"><b>${s.xp}</b><span class="muted small">Total XP · level ${sb().level()}</span></div><div class="metric"><b>${done}</b><span class="muted small">of ${all.length} lessons</span></div><div class="metric"><b>${spoken}</b><span class="muted small">Minutes spoken</span></div><div class="metric"><b>${s.streak.best || 0}</b><span class="muted small">Best streak (days)</span></div></div>
  <section class="card sec tight"><h2 class="h-card">XP per day, last 28 days</h2>${svgBars(xp, labels, s.goal)}<p class="muted small">The line is your daily goal of ${s.goal} XP.</p></section>
  <section class="card sec tight"><h2 class="h-card">Speaking pace over time</h2>${svgLine(sp.map(x => x.w), 110, 170)}<p class="muted small">The shaded band is a clear pace for calls: 110 to 170 words per minute.${sp.length ? ' Fillers in your last session: ' + (sp[sp.length - 1].f ?? '–') + '.' : ''}</p></section>
  <div class="grid g2 sec tight"><section class="card"><h2 class="h-card">Lessons finished per week</h2>${svgBars(weeks, weeks.map((_, i) => i === 7 ? 'now' : ''), 0)}</section>
    <section class="card"><h2 class="h-card">Completion by area</h2>${cats.map(([c, d, t]) => `<div class="prog"><div class="row between"><span>${esc(c)}</span><span class="muted small">${d}/${t}</span></div><div class="bar"><i style="width:${d / t * 100}%"></i></div></div>`).join('')}</section></div>
  <section class="card sec tight"><h2 class="h-card">Your skill map</h2>${sb().radar()}</section>`;
};

/* ---------- reminders, backup restore, install ---------- */
let deferred = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; const b = $('#installBtn'); if (b) b.hidden = false; });
window.addEventListener('appinstalled', () => { deferred = null; toast('App installed'); });
function reminderTick() {
  const r = S().remind; if (!r || !r.on || !('Notification' in window) || Notification.permission !== 'granted') return;
  const n = new Date(), [h, m] = r.time.split(':').map(Number), t = sb().dayStr();
  if (r.last !== t && (n.getHours() > h || (n.getHours() === h && n.getMinutes() >= m)) && !(S().days[t] > 0)) { r.last = t; sb().save(); try { new Notification('SkillBuilder', { body: 'Fifteen minutes today keeps your streak alive.', icon: 'icon.svg' }); } catch { /* blocked */ } }
}
window.addEventListener('DOMContentLoaded', () => { reminderTick(); setInterval(reminderTick, 60000); });
Object.assign(X.actions, {
  installApp() { if (deferred) { deferred.prompt(); deferred = null; const b = $('#installBtn'); if (b) b.hidden = true; } },
  async remindSetup() {
    const cur = S().remind.time || '18:00', t = prompt('What time should I remind you each day? Use 24-hour time, like 18:30.', cur);
    if (t === null) return; if (!/^([01]?\d|2[0-3]):[0-5]\d$/.test(t.trim())) { toast('Use the form 18:30'); return; }
    const time = t.trim().padStart(5, '0');
    let granted = false; if ('Notification' in window) { try { granted = (await Notification.requestPermission()) === 'granted'; } catch { /* unsupported */ } }
    S().remind = { on: granted, time, last: '' }; sb().save();
    toast(granted ? `Reminder set for ${time} while the app is open or installed` : 'Notifications are blocked, so I made a calendar reminder instead');
    if (confirm('Also download a daily calendar reminder (.ics) for your phone or calendar app? It works even when the app is closed.')) {
      const [h, m] = time.split(':'), z = n => String(n).padStart(2, '0'), d = new Date(), ymd = `${d.getFullYear()}${z(d.getMonth() + 1)}${z(d.getDate())}`;
      const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SkillBuilder//EN', 'BEGIN:VEVENT', `UID:skillbuilder-daily-${Date.now()}@local`, `DTSTAMP:${ymd}T000000Z`, `DTSTART:${ymd}T${z(h)}${m}00`, 'DURATION:PT20M', 'RRULE:FREQ=DAILY', 'SUMMARY:SkillBuilder practice', `DESCRIPTION:Open SkillBuilder and keep your streak: ${location.href.split('#')[0]}`, 'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', 'DESCRIPTION:SkillBuilder practice', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'skillbuilder-reminder.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }
  },
  importData() {
    const f = document.createElement('input'); f.type = 'file'; f.accept = 'application/json,.json';
    f.onchange = () => {
      const file = f.files[0]; if (!file) return; const rd = new FileReader();
      rd.onload = () => {
        try {
          const d = JSON.parse(rd.result); if (!d || typeof d !== 'object' || !('xp' in d) || !('done' in d)) throw new Error('shape');
          if (!confirm('Replace your current progress with this backup? This cannot be undone.')) return;
          sb().S = Object.assign({}, S(), d); sb().save(); toast('Backup restored'); sb().render();
        } catch { toast('That file is not a SkillBuilder backup.'); }
      };
      rd.readAsText(file);
    };
    f.click();
  }
});

/* ---------- lifecycle ---------- */
X.after = view => {
  if (view !== 'sim') simStop();
  if (view !== 'listen' && view !== 'roleplay' && hasTTS) { try { speechSynthesis.cancel(); } catch { /* noop */ } }
  if (view === 'sim') simRender();
  if (view === 'roleplay') { RPS.id = null; rpRender(); }
  if (view === 'listen') lsRender();
  if (view === 'profile') { const b = $('#installBtn'); if (b) b.hidden = !deferred; }
};
})();
