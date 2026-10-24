(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const KEY = 'skillbuilder.v1';
const dateOff = n => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
const dayStr = (d = new Date()) => d.toLocaleDateString('en-CA');
const addDays = n => dayStr(dateOff(n));

/* ---------- state ---------- */
const fresh = () => ({ profile: null, done: {}, ex: {}, xp: 0, streak: { last: '', count: 0, best: 0 }, days: {}, daily: { date: '', checked: [] }, dailyDone: {}, freezes: 1, goal: 50, journal: [], favs: [], cards: {}, sessions: [], wish: [], theme: 'auto' });
let S;
try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { S = fresh(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* storage unavailable */ } };
const applyTheme = () => { if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.dataset.theme = S.theme; };
applyTheme();

/* ---------- data helpers ---------- */
const courses = window.COURSES;
const courseById = id => courses.find(c => c.id === id);
const lessonId = (c, i) => `${c.id}.${i}`;
const allLessons = courses.flatMap(c => c.lessons.map((l, i) => ({ c, l, i, id: lessonId(c, i) })));
const lessonById = id => allLessons.find(x => x.id === id);
const courseDone = c => c.lessons.filter((_, i) => S.done[lessonId(c, i)]).length;
const courseMins = c => c.lessons.reduce((n, l) => n + l.mins, 0);
const level = () => Math.floor(S.xp / 200) + 1;
const streakNow = () => (S.streak.last === dayStr() || S.streak.last === addDays(-1) || (S.streak.last === addDays(-2) && S.freezes > 0)) ? S.streak.count : 0;
const todayXP = () => S.days[dayStr()] || 0;

/* Every learning action calls touch(): XP, daily goal and streak (with freezes). */
function touch(xp = 0) {
  const t = dayStr(), before = todayXP();
  S.days[t] = before + xp; S.xp += xp;
  let extended = false, usedFreeze = false;
  if (S.streak.last !== t) {
    if (S.streak.last === addDays(-1)) S.streak.count++;
    else if (S.streak.last === addDays(-2) && S.freezes > 0) { S.freezes--; S.streak.count++; usedFreeze = true; }
    else S.streak.count = 1;
    S.streak.last = t; extended = true;
    if (S.streak.count % 7 === 0) S.freezes = Math.min(2, S.freezes + 1);
    S.streak.best = Math.max(S.streak.best || 0, S.streak.count);
  }
  save();
  return { extended, usedFreeze, goalHit: before < S.goal && S.days[t] >= S.goal };
}
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

function orderedCourses() {
  const p = S.profile; if (!p) return courses;
  const score = c => (p.focus.includes(c.skill) ? -10 + p.focus.indexOf(c.skill) * 0.5 : 0) + (p.skills[c.skill] || 3);
  return [...courses].sort((a, b) => score(a) - score(b));
}
function nextLesson() {
  for (const c of orderedCourses()) for (let i = 0; i < c.lessons.length; i++) if (!S.done[lessonId(c, i)]) return { c, i, l: c.lessons[i], id: lessonId(c, i) };
  return null;
}
const dueCards = () => { const t = dayStr(); return Object.entries(S.cards).filter(([k, v]) => v.due <= t && questionFor(k)).map(([k]) => k); };
function skillNow(key) {
  const init = S.profile?.skills[key] || 3;
  const cs = courses.filter(c => c.skill === key);
  const tot = cs.reduce((n, c) => n + c.lessons.length, 0) || 1;
  const done = cs.reduce((n, c) => n + courseDone(c), 0);
  let frac = done / tot;
  if (key === 'speaking' || key === 'articulation' || key === 'interview') frac += Math.min(0.25, S.sessions.length * 0.03);
  return Math.min(5, init + (5 - init) * Math.min(1, frac) * 0.9);
}

/* ---------- icons ---------- */
const IC = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
};
const icon = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
const flame = () => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.5 2s5.5 4.4 5.5 10.2A6 6 0 0 1 12 18a6 6 0 0 1-6-5.8c0-2.2 1-3.9 2.2-5 .1 2 .9 3.2 2 3.7C9.6 7.8 10.6 4.3 12.5 2z"/><path d="M12 22a4 4 0 0 1-4-3.9c0-1.8 1.6-3 2.6-4 .3 1.2.8 1.8 1.6 2.2.9-.9 1.4-2 1.4-3.2A5 5 0 0 1 17 18a5 5 0 0 1-5 4z" opacity=".55"/></svg>';
const NAV = [['home', 'Today', 'home'], ['learn', 'Learn', 'book'], ['practice', 'Practice', 'mic'], ['tips', 'Tips', 'zap'], ['review', 'Review', 'repeat'], ['journal', 'Journal', 'edit'], ['profile', 'Me', 'user']];

/* ---------- router ---------- */
const route = () => (location.hash.replace(/^#\/?/, '') || 'home').split('/');
const go = h => { location.hash = '#/' + h; };
let L = null; /* lesson player state */

function render() {
  const [view, arg] = route();
  if (view !== 'lesson') L = null;
  const main = $('#main');
  if (!S.profile) {
    $('#nav').innerHTML = ''; $('#tabs').innerHTML = ''; $('#chips').innerHTML = '';
    main.innerHTML = onboardView(); window.scrollTo(0, 0); return;
  }
  const navHTML = NAV.map(([k, label, ic]) => { const on = view === k || (k === 'learn' && (view === 'course' || view === 'lesson')); return `<a href="#/${k}" class="${on ? 'on' : ''}" ${on ? 'aria-current="page"' : ''}>${icon(ic)}<span>${label}</span></a>`; }).join('');
  $('#nav').innerHTML = navHTML; $('#tabs').innerHTML = navHTML;
  $('#chips').innerHTML = `<span class="tchip fire" title="Day streak">${flame()}${streakNow()}</span><span class="tchip" title="XP">⚡ ${S.xp}</span><button class="tchip icon" data-act="theme" aria-label="Change theme">◐</button><button class="tchip icon" data-act="help" aria-label="Keyboard shortcuts">?</button>`;
  const views = { home: homeView, learn: learnView, course: courseView, lesson: lessonView, practice: practiceView, tips: tipsView, review: reviewView, journal: journalView, profile: profileView };
  main.innerHTML = (views[view] || homeView)(arg);
  window.scrollTo(0, 0);
  if (view === 'practice') initPractice();
}
window.addEventListener('hashchange', () => { stopStudio(); render(); $('#main').focus({ preventScroll: true }); });

/* ---------- onboarding ---------- */
const UD = window.USER_DEFAULTS || {};
let ob = Object.assign({ step: 0, name: '', role: '', goal: '', notes: '', focus: [], minutes: 20, wish: '', xp: 50 }, UD, { step: 0, focus: [...(UD.focus || [])], skills: Object.assign(Object.fromEntries(Object.keys(SKILLS).map(k => [k, 3])), UD.skills) });
if (S.profile) for (const k of Object.keys(SKILLS)) if (!S.profile.skills[k]) S.profile.skills[k] = 3;
const GOALS = [[20, 'Casual', '20 XP · about 1 lesson'], [50, 'Regular', '50 XP · 1 to 2 lessons'], [100, 'Serious', '100 XP · 2 to 3 lessons']];
function onboardView() {
  const dots = `<div class="dots">${[0, 1, 2, 3].map(i => `<i class="${i <= ob.step ? 'on' : ''}"></i>`).join('')}</div>`;
  let body = '';
  if (ob.step === 0) body = `
    <h1 style="font-size:2.4rem">Your personal training plan</h1>
    <p class="lead">Built only for you. Tell me about yourself and I will shape the path around your skills, goals and time.</p>
    <label class="f" for="o-name">What should I call you?</label><input id="o-name" type="text" value="${esc(ob.name)}" autocomplete="given-name">
    <label class="f" for="o-role">What do you do now?</label><input id="o-role" type="text" value="${esc(ob.role)}" placeholder="e.g. support specialist, student, founder">
    <label class="f" for="o-goal">Your big goal</label><input id="o-goal" type="text" value="${esc(ob.goal)}" placeholder="e.g. ace interviews, lead meetings with confidence">
    <label class="f" for="o-notes">Your current skillset</label><textarea id="o-notes" placeholder="Strengths, tools, languages, anything that helps me match your level">${esc(ob.notes)}</textarea>`;
  if (ob.step === 1) body = `
    <h1 style="font-size:2.4rem">What matters most?</h1><p class="lead">Pick any. These go to the top of your path.</p>
    <div class="multi" data-nav>${Object.entries(SKILLS).map(([k, v]) => `<button type="button" data-act="obFocus" data-k="${k}" class="${ob.focus.includes(k) ? 'on' : ''}" aria-pressed="${ob.focus.includes(k)}">${v}</button>`).join('')}</div>
    <h3 style="margin-top:26px">Daily goal</h3>
    <div class="multi" data-nav>${GOALS.map(([x, n, d]) => `<button type="button" data-act="obGoal" data-x="${x}" class="${ob.xp === x ? 'on' : ''}" aria-pressed="${ob.xp === x}"><b>${n}</b><br><span class="muted small">${d}</span></button>`).join('')}</div>
    <label class="f" for="o-min">Time per day: <b id="o-min-v">${ob.minutes} min</b></label>
    <input id="o-min" type="range" min="5" max="90" step="5" value="${ob.minutes}" style="width:100%;accent-color:var(--accent)">`;
  if (ob.step === 2) body = `
    <h1 style="font-size:2.4rem">Rate yourself honestly</h1><p class="lead">1 is just starting, 5 is excellent. This sets your baseline and your growth chart.</p>
    ${Object.entries(SKILLS).map(([k, v]) => `<div class="skill-row"><label for="s-${k}">${v}</label><input type="range" id="s-${k}" data-skill="${k}" min="1" max="5" value="${ob.skills[k]}"><b id="sv-${k}">${ob.skills[k]}</b></div>`).join('')}`;
  if (ob.step === 3) body = `
    <h1 style="font-size:2.4rem">Anything else to learn?</h1><p class="lead">Add skills outside my courses, one per line. They live on the Learn page as your wishlist.</p>
    <textarea id="o-wish" placeholder="e.g. Python&#10;Salary negotiation">${esc(ob.wish)}</textarea>`;
  return `<div class="onb">${dots}<div class="card">${body}
    <div class="row between" style="margin-top:26px">${ob.step > 0 ? '<button class="btn" data-act="obBack">Back</button>' : '<span></span>'}
    <button class="btn primary lg" data-act="obNext">${ob.step === 3 ? 'Create my plan' : 'Continue'}</button></div></div></div>`;
}
function obRead() {
  const v = id => $('#' + id)?.value;
  if (ob.step === 0) { ob.name = v('o-name').trim(); ob.role = v('o-role').trim(); ob.goal = v('o-goal').trim(); ob.notes = v('o-notes').trim(); }
  if (ob.step === 3) ob.wish = v('o-wish');
}

/* ---------- shared widgets ---------- */
function weekDots(light) {
  const names = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  return `<div class="week ${light ? 'light' : ''}" role="img" aria-label="Last 7 days of activity">${[6, 5, 4, 3, 2, 1, 0].map(i => { const d = dateOff(-i), on = (S.days[dayStr(d)] || 0) > 0; return `<div class="${on ? 'on' : ''} ${i === 0 ? 'today' : ''}">${names[d.getDay()]}<b>${on ? '✓' : ''}</b></div>`; }).join('')}</div>`;
}
function goalRing(size) {
  const pct = Math.min(1, todayXP() / S.goal), C = 2 * Math.PI * 52;
  return `<div class="ring ${pct >= 1 ? 'full' : ''}" style="${size ? `width:${size}px;height:${size}px` : ''}"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="track" cx="60" cy="60" r="52" fill="none" stroke-width="11"/><circle class="val" cx="60" cy="60" r="52" fill="none" stroke-width="11" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/></svg><span><div>${pct >= 1 ? '✓' : todayXP()}<small>/ ${S.goal} XP</small></div></span></div>`;
}
const SHORT = { speaking: 'Speaking', articulation: 'Articulation', storytelling: 'Stories', listening: 'Listening', confidence: 'Confidence', persuasion: 'Persuasion', writing: 'Writing', learning: 'Learning', leadership: 'Leadership', interview: 'Interviews', fluency: 'Languages', tech: 'Tech/Biz' };
function radar() {
  const keys = Object.keys(SKILLS), n = keys.length, cx = 210, cy = 170, R = 110;
  const pt = (i, v) => { const a = -Math.PI / 2 + (i * 2 * Math.PI / n); const r = R * v / 5; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
  const poly = vals => vals.map((v, i) => pt(i, v).join(',')).join(' ');
  const rings = [1, 2, 3, 4, 5].map(v => `<polygon points="${poly(keys.map(() => v))}" fill="none" stroke="var(--line)"/>`).join('');
  const axes = keys.map((k, i) => { const [x, y] = pt(i, 5), [lx, ly] = pt(i, 5.9); const anchor = lx < cx - 8 ? 'end' : lx > cx + 8 ? 'start' : 'middle'; return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line)"/><text x="${lx}" y="${ly + 3}" text-anchor="${anchor}">${SHORT[k] || k}</text>`; }).join('');
  const base = keys.map(k => S.profile.skills[k] || 3), now = keys.map(skillNow);
  return `<svg class="radar" viewBox="0 0 420 345" role="img" aria-label="Radar chart of baseline and current skill levels">${rings}${axes}
    <polygon points="${poly(base)}" fill="none" stroke="var(--muted)" stroke-dasharray="4 4" stroke-width="1.5"/>
    <polygon points="${poly(now)}" fill="var(--accent)" fill-opacity=".2" stroke="var(--accent)" stroke-width="2.5"/>
    ${now.map((v, i) => { const [x, y] = pt(i, v); return `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--accent)"/>`; }).join('')}</svg>
    <div class="legend"><span><i style="background:var(--accent)"></i>Now (estimate)</span><span><i style="border:1.5px dashed var(--muted)"></i>Baseline</span></div>`;
}

/* ---------- home ---------- */
function homeView() {
  const p = S.profile, hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening';
  const nl = nextLesson(), due = dueCards().length, st = streakNow();
  const tip = tipOfDay(), total = allLessons.length, done = Object.keys(S.done).length;
  const goalMsg = todayXP() >= S.goal ? 'Daily goal complete. Nice work!' : `${S.goal - todayXP()} XP to hit today's goal.`;
  return `
  <div class="hero"><p class="eyebrow">${new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
    <h1>${greet}${p.name ? ', <span class="grad">' + esc(p.name) + '</span>' : ''}.</h1>
    <p class="lead">${p.goal ? 'Your mission: ' + esc(p.goal) + '.' : 'Ready to level up?'}</p></div>
  <div class="grid g2">
    <section class="card streak-card" aria-label="Streak">
      <div class="big">${flame()}${st}</div>
      <p><b>${st === 1 ? 'day' : 'days'} streak</b> ${S.streak.last === dayStr() ? '· safe for today' : '· train today to keep it'}</p>
      ${weekDots(false)}
      <p class="small" style="margin-top:14px">❄ ${S.freezes} streak freeze${S.freezes === 1 ? '' : 's'} · earn one every 7 days · best ${S.streak.best || 0}</p>
    </section>
    <section class="card row" style="gap:24px;flex-wrap:nowrap" aria-label="Daily goal">
      ${goalRing()}
      <div><h2 style="font-size:1.4rem">Daily goal</h2><p class="muted">${goalMsg}</p><p class="small muted" style="margin:0">Level ${level()} · ${S.xp} XP · ${done}/${total} lessons</p></div>
    </section>
  </div>
  ${nl ? `<section class="card upnext sec" style="margin-top:16px"><div><p class="eyebrow">Today's reading · ${esc(nl.c.title)}</p><h2>${esc(nl.l.t)}</h2><p style="margin:0">${nl.l.mins} min · lesson ${nl.i + 1} of ${nl.c.lessons.length}</p></div><a class="btn lg" href="#/lesson/${nl.id}">Read lesson →</a></section>` : ''}
  ${dailyCard()}
  <div class="grid g2 sec" style="margin-top:16px">
    <section class="card"><h2 style="font-size:1.4rem">Today's plan</h2>
      <ul class="plan" data-nav>
        <li><a href="#/practice"><span class="ico">${icon('mic')}</span><span><b>Speak for 60 seconds</b><small>Mock interview or small-talk prompt</small></span></a></li>
        <li><a href="#/review"><span class="ico">${icon('repeat')}</span><span><b>Review ${due} card${due === 1 ? '' : 's'}</b><small>${due ? 'Spaced repetition due now' : 'You are caught up'}</small></span>${due ? '' : '<span class="tick">✓</span>'}</a></li>
        <li><a href="#/journal"><span class="ico">${icon('edit')}</span><span><b>Reflect for 2 minutes</b><small>${esc(journalPrompt())}</small></span></a></li>
        <li><a href="#/tips"><span class="ico">${icon('zap')}</span><span><b>Tip of the day</b><small>${esc(tip.text)}</small></span></a></li>
      </ul></section>
    <section class="card"><h2 style="font-size:1.4rem">Your skill map</h2>${radar()}</section>
  </div>
  <section class="sec"><div class="row between"><h2>Your path</h2><a href="#/learn">All courses →</a></div>
    <div class="grid g3" data-nav>${orderedCourses().slice(0, 3).map(courseCard).join('')}</div></section>`;
}

/* ---------- learn catalog ---------- */
function courseCard(c) {
  const d = courseDone(c), t = c.lessons.length, rec = S.profile && S.profile.focus.includes(c.skill);
  return `<a class="card course" style="--h:${c.hue}" href="#/course/${c.id}">
    <div class="top-row"><span class="badge">${esc(c.title[0])}</span>${rec ? '<span class="pill">Your focus</span>' : `<span class="pill gray">${c.cat}</span>`}</div>
    <h3>${esc(c.title)}</h3><p class="muted small" style="margin:0">${esc(c.blurb)}</p>
    <div class="meta"><div class="bar"><i style="width:${d / t * 100}%"></i></div><span class="small muted">${d}/${t} · ${courseMins(c)} min</span></div></a>`;
}
let learnFilter = 'All', learnQuery = '';
function catalogHTML() {
  const q = learnQuery.toLowerCase();
  const list = orderedCourses().filter(c => (learnFilter === 'All' || c.cat === learnFilter) && (!q || (c.title + c.blurb + c.lessons.map(l => l.t).join(' ')).toLowerCase().includes(q)));
  return list.length ? list.map(courseCard).join('') : '<p class="empty">No courses match. Try another word.</p>';
}
function learnView() {
  const cats = ['All', ...new Set(courses.map(c => c.cat))];
  return `<div class="hero"><p class="eyebrow">Catalog</p><h1>Learn</h1><p class="lead">${courses.length} courses and ${allLessons.length} lessons, ordered for you. Press <kbd>/</kbd> to search.</p></div>
  <div class="toolbar"><div class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg><input type="search" id="catQ" placeholder="Search courses and lessons" aria-label="Search courses" value="${esc(learnQuery)}"></div>
    <div class="chips" data-nav role="group" aria-label="Category">${cats.map(c => `<button class="chip ${c === learnFilter ? 'on' : ''}" data-act="filterLearn" data-v="${c}" aria-pressed="${c === learnFilter}">${c}</button>`).join('')}</div></div>
  <div class="grid g3" id="catalog" data-nav>${catalogHTML()}</div>
  <section class="sec"><h2>Your wishlist</h2><div class="card">
    ${S.wish.length ? S.wish.map((w, i) => `<label class="check"><input type="checkbox" data-act="wishTick" data-i="${i}" ${w.done ? 'checked' : ''}><span style="${w.done ? 'text-decoration:line-through;opacity:.6' : ''}">${esc(w.t)}</span></label>`).join('') : '<p class="muted">Add skills beyond these courses and track them here.</p>'}
    <form class="row" data-form="wish" style="margin-top:12px"><input type="text" id="wishIn" placeholder="Add a skill to learn" aria-label="New wishlist skill" style="flex:1;min-width:180px"><button class="btn primary">Add</button></form></div></section>`;
}
function courseView(id) {
  const c = courseById(id); if (!c) return learnView();
  const d = courseDone(c), nxt = c.lessons.findIndex((_, i) => !S.done[lessonId(c, i)]);
  return `<div class="crumb"><a href="#/learn">Learn</a> / ${esc(c.title)}</div>
  <div class="course-hero"><div style="max-width:640px"><p class="eyebrow">${c.cat} · ${c.lessons.length} lessons · ${courseMins(c)} min</p><h1>${esc(c.title)}</h1><p class="lead">${esc(c.blurb)}</p>
    <div class="bar" style="max-width:320px"><i style="width:${d / c.lessons.length * 100}%"></i></div><p class="small muted" style="margin-top:6px">${d} of ${c.lessons.length} complete</p></div>
    <a class="btn primary lg" href="#/lesson/${lessonId(c, nxt < 0 ? 0 : nxt)}">${d === 0 ? 'Start course' : nxt < 0 ? 'Review course' : 'Continue'}</a></div>
  <p class="small muted">Use <kbd>↑</kbd> <kbd>↓</kbd> to move and <kbd>Enter</kbd> to open a lesson.</p>
  <ul class="lessons" data-nav>${c.lessons.map((l, i) => { const dn = S.done[lessonId(c, i)]; return `<li><a href="#/lesson/${lessonId(c, i)}"><span class="num ${dn ? 'done' : ''}">${dn ? '✓' : i + 1}</span><span style="flex:1"><b>${esc(l.t)}</b><br><span class="muted small">${l.mins} min${dn && dn.answered ? ` · quiz ${dn.correct}/${dn.total}` : ''}</span></span><span aria-hidden="true" class="muted">›</span></a></li>`; }).join('')}</ul>`;
}

/* ---------- lesson reading page ---------- */
function lessonView(id) {
  const x = lessonById(id); if (!x) return learnView();
  if (!L || L.id !== id) L = { id, x, ans: {}, banner: null };
  const { c, l, i } = x, done = S.done[id], exs = S.ex[id] || [], d = l.deep || {};
  const prev = i > 0 ? lessonId(c, i - 1) : null, next = i < c.lessons.length - 1 ? lessonId(c, i + 1) : null;
  const toc = [['overview', 'Overview'], l.flow && ['picture', 'Big picture'], ['ideas', 'Key ideas'], d.sections && ['deeper', 'Go deeper'], d.script && ['script', 'Example script'], d.mistakes && ['mistakes', 'Common mistakes'], ['tips', 'Pro tips'], ['activities', 'Activities'], d.plan && ['plan', '7-day plan'], ['quiz', 'Quiz']].filter(Boolean);
  const b = L.banner;
  const banner = b ? `<div class="banner" role="status"><div><b style="font-size:1.4rem">${b.first ? 'Lesson complete!' : 'Marked again'} +${b.xp} XP</b><p style="margin:4px 0 0">${b.extended ? `🔥 Streak extended to ${S.streak.count} day${S.streak.count === 1 ? '' : 's'}! ` : 'Streak is safe for today. '}${b.goalHit ? '🎯 Daily goal reached!' : todayXP() >= S.goal ? 'Daily goal complete.' : `${S.goal - todayXP()} XP to your daily goal.`}</p></div>${weekDots(false)}</div>` : '';
  return `<div class="crumb"><a href="#/learn">Learn</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / Lesson ${i + 1} of ${c.lessons.length}</div>
  <div class="reader">
    <aside class="toc" aria-label="On this page"><p class="eyebrow">On this page</p>${toc.map(([k, t]) => `<button data-act="jump" data-to="sec-${k}">${t}</button>`).join('')}
      <p class="small muted" style="margin:14px 12px 0"><kbd>n</kbd> next · <kbd>p</kbd> previous<br><kbd>Esc</kbd> back to course</p></aside>
    <article class="doc">
      ${banner}
      <section id="sec-overview"><p class="eyebrow">${esc(c.title)} · ${l.mins} min read ${done ? '· ✓ completed' : ''}</p><h1>${esc(l.t)}</h1><p class="intro">${esc(l.intro)}</p></section>
      ${l.flow ? `<section id="sec-picture"><h2>The big picture</h2><div class="flow" role="img" aria-label="Steps: ${esc(l.flow.join(', then '))}">${l.flow.map((f, k) => `${k ? '<span class="arrow" aria-hidden="true">→</span>' : ''}<span class="step"><i>${k + 1}</i>${esc(f)}</span>`).join('')}</div></section>` : ''}
      <section id="sec-ideas"><h2>Key ideas</h2><div class="stack">${l.points.map(([h, p]) => `<div class="idea"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div></section>
      ${d.sections ? `<section id="sec-deeper" class="prose"><h2>Go deeper</h2>${d.sections.map(([h, ps]) => `<h3>${esc(h)}</h3>${ps.map(p => `<p>${esc(p)}</p>`).join('')}`).join('')}</section>` : ''}
      ${d.script ? `<section id="sec-script"><h2>Example script</h2><p class="muted small">${esc(d.script[0])}. Read it aloud, then say your own version.</p><div class="script">${d.script[1].map(([w, t]) => `<div class="line ${w === 'You' ? 'me' : ''}"><b>${esc(w)}</b><span>${esc(t)}</span></div>`).join('')}</div></section>` : ''}
      ${d.mistakes ? `<section id="sec-mistakes"><h2>Common mistakes</h2><ul class="mistakes">${d.mistakes.map(m => `<li>${esc(m)}</li>`).join('')}</ul></section>` : ''}
      <section id="sec-tips"><h2>Pro tips</h2><div class="tipbox"><ul>${l.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div></section>
      <section id="sec-activities"><h2>Activities: ${esc(l.ex.t)}</h2><div class="exbox">${l.ex.steps.map((t, k) => `<label class="check"><input type="checkbox" data-act="exTick" data-id="${id}" data-k="${k}" ${exs[k] ? 'checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div><p style="margin-top:14px"><a class="btn" href="#/practice" target="_blank" rel="noopener">Open the speaking studio ↗</a></p></section>
      ${d.plan ? `<section id="sec-plan"><h2>7-day practice plan</h2><ol class="planlist">${d.plan.map(p => `<li>${esc(p)}</li>`).join('')}</ol></section>` : ''}
      <section id="sec-quiz"><h2>Check yourself</h2>${l.quiz.map((q, k) => `<div class="q" data-q="${k}" data-ans="${q.a}"><b>${esc(q.q)}</b>${q.o.map((o, j) => `<button class="opt" data-act="qpick" data-k="${k}" data-j="${j}">${esc(o)}</button>`).join('')}<div class="why" hidden>${esc(q.w)}</div></div>`).join('')}</section>
      <section class="card completebox"><div><b style="font-size:1.2rem">${done ? 'Completed ✓' : 'Finished reading?'}</b><p class="muted small" style="margin:4px 0 0">${done ? 'Come back any time to reread. Marking again earns a little XP.' : 'Mark it complete to earn XP and extend your streak. Activities and quiz answers add bonus XP.'}</p></div><button class="btn good lg" data-act="complete">${done ? 'Mark again (+5 XP)' : 'Mark as complete'}</button></section>
      <div class="row between" style="margin-top:20px">${prev ? `<a class="btn" href="#/lesson/${prev}">← Previous</a>` : '<span></span>'}${next ? `<a class="btn primary" href="#/lesson/${next}">Next lesson →</a>` : `<a class="btn primary" href="#/course/${c.id}">Back to course</a>`}</div>
    </article></div>`;
}
function qPick(btn) {
  const q = btn.closest('.q'); if (q.dataset.done) return;
  const k = +btn.dataset.k, j = +btn.dataset.j, a = +q.dataset.ans;
  q.dataset.done = '1'; L.ans[k] = { j, ok: j === a };
  $$('.opt', q).forEach((o, n) => { o.disabled = true; if (n === a) o.classList.add('right'); else if (n === j) o.classList.add('wrong'); });
  $('.why', q).hidden = false;
}
function completeLesson() {
  const { x, id } = L, qs = x.l.quiz, answered = Object.keys(L.ans).length;
  const correct = qs.filter((_, k) => L.ans[k]?.ok).length, acts = (S.ex[id] || []).filter(Boolean).length, first = !S.done[id];
  const xp = first ? 30 + correct * 10 + Math.min(15, acts * 5) : 5;
  const old = S.done[id];
  S.done[id] = { ts: Date.now(), correct: Math.max(correct, old?.correct || 0), total: qs.length, answered: Math.max(answered, old?.answered || 0) };
  qs.forEach((_, k) => { const cid = `${id}.q${k}`; if (!S.cards[cid]) S.cards[cid] = { box: 0, due: addDays(1) }; });
  L.banner = Object.assign(touch(xp), { xp, first });
  if (first) confetti();
  if (L.banner.extended && S.streak.count % 7 === 0) toast('7-day streak! You earned a streak freeze ❄');
  render();
}
function confetti() {
  const box = document.createElement('div'); box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
  box.innerHTML = Array.from({ length: 36 }, () => `<i style="left:${Math.random() * 100}%;background:hsl(${Math.random() * 360} 85% 60%);animation-delay:${Math.random() * .8}s;animation-duration:${2 + Math.random() * 1.6}s"></i>`).join('');
  document.body.appendChild(box); setTimeout(() => box.remove(), 4500);
}
function lessonStep(dir) {
  const { c, i } = L.x, j = i + dir;
  if (j >= 0 && j < c.lessons.length) go('lesson/' + lessonId(c, j));
}

/* daily activity: one exercise per day from your focus courses */
function dailyPick() {
  const list = orderedCourses().slice(0, 6).flatMap(c => c.lessons.map(l => ({ c, l })));
  const d = new Date(), n = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  return list[n % list.length];
}
function dailyCard() {
  const p = dailyPick(), t = dayStr();
  if (S.daily.date !== t) S.daily = { date: t, checked: [] };
  const ck = S.daily.checked, all = p.l.ex.steps.every((_, k) => ck[k]);
  return `<section class="card sec" style="margin-top:16px"><div class="row between"><div><p class="eyebrow">Daily activity</p><h2 style="font-size:1.4rem">${esc(p.l.ex.t)}</h2></div><span class="pill ${all ? 'good' : ''}">${all ? 'Done ✓' : '+15 XP'}</span></div>
    <p class="muted small">From “${esc(p.l.t)}” · ${esc(p.c.title)}</p>
    ${p.l.ex.steps.map((s, k) => `<label class="check"><input type="checkbox" data-act="dailyTick" data-k="${k}" ${ck[k] ? 'checked' : ''}><span>${esc(s)}</span></label>`).join('')}</section>`;
}

/* ---------- practice studio ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let P = { kind: 'Mock interview', phase: 'idle', dur: 60, prompt: '', left: 60, tick: null, rec: null, stream: null, chunks: [], url: '', sr: null, text: '', start: 0, elapsed: 0, mic: false, review: {}, stats: {} };
const FILLERS = [/\bum+\b/g, /\buh+\b/g, /\ber+m?\b/g, /\blike\b/g, /\byou know\b/g, /\bbasically\b/g, /\bliterally\b/g, /\bactually\b/g, /\bi mean\b/g, /\bkind of\b/g, /\bsort of\b/g];
const rnd = a => a[Math.floor(Math.random() * a.length)];
const sets = () => window.PROMPT_SETS || { Impromptu: window.PROMPTS };
const nextPrompt = () => rnd(sets()[P.kind] || window.PROMPTS);
function practiceView() {
  return `<div class="hero"><p class="eyebrow">Speaking studio</p><h1>Practice out loud</h1><p class="lead">Mock interviews, small talk and pitches. Recordings stay in your browser and are never uploaded.</p></div>
  <section class="card studio" id="studio"></section>
  <div class="grid g2 sec" style="margin-top:16px">
    <section class="card"><h2 style="font-size:1.4rem">Warm up your voice</h2><div id="twister"></div></section>
    <section class="card" style="text-align:center"><h2 style="font-size:1.4rem">Box breathing</h2><p class="muted small">Inhale 4 · hold 4 · exhale 4 · hold 4</p><div class="breath" id="breath">Ready</div><button class="btn" data-act="breathe" id="breathBtn">Start</button></section>
  </div>
  <section class="sec"><h2>Past sessions</h2><div class="card">${S.sessions.length ? S.sessions.slice(0, 8).map(s => `<div class="entry"><div class="row between"><b>${esc(s.prompt)}</b><span class="muted small">${esc(s.date)}</span></div><div class="muted small">${s.secs}s${s.wpm ? ` · ${s.wpm} wpm` : ''}${s.fillers != null ? ` · ${s.fillers} fillers` : ''}${s.score != null ? ` · self-score ${s.score}/4` : ''}</div></div>`).join('') : '<p class="empty">No sessions yet. Do your first one above.</p>'}</div></section>`;
}
let twIdx = 0, breathT = null;
function initPractice() { P.phase = 'idle'; P.prompt = nextPrompt(); renderStudio(); renderTwister(); }
function renderTwister() { const el = $('#twister'); if (!el) return; el.innerHTML = `<p class="muted small">Say it slowly and precisely, then at speed.</p><div class="twister">“${esc(window.TWISTERS[twIdx % window.TWISTERS.length])}”</div><button class="btn" data-act="nextTwister">Next twister</button>`; }
function renderStudio() {
  const el = $('#studio'); if (!el) return;
  if (P.phase === 'idle') el.innerHTML = `<div class="chips" data-nav style="justify-content:center;margin-bottom:10px" role="group" aria-label="Prompt type">${Object.keys(sets()).map(k => `<button class="chip ${k === P.kind ? 'on' : ''}" data-act="kind" data-v="${k}" aria-pressed="${k === P.kind}">${k}</button>`).join('')}</div><div class="prompt">${esc(P.prompt)}</div>
    <div class="row" style="justify-content:center"><button class="btn" data-act="newPrompt">New prompt</button>
    <select id="durSel" aria-label="Duration" style="width:auto">${[30, 60, 90, 120].map(d => `<option value="${d}" ${d === P.dur ? 'selected' : ''}>${d} seconds</option>`).join('')}</select>
    <button class="btn primary lg" data-act="startStudio">Start speaking</button></div>
    <p class="muted small" style="margin-top:16px">Tip: use PREP. Point first, then Reason, Example, Point. Short sentences, easy starts.</p>`;
  if (P.phase === 'count') el.innerHTML = `<div class="prompt">${esc(P.prompt)}</div><div class="timer" id="cd">3</div><p class="muted">Breathe. Starting…</p>`;
  if (P.phase === 'rec') el.innerHTML = `<div class="prompt">${esc(P.prompt)}</div><div class="timer" id="tm">${fmt(P.left)}</div><p><span class="rec-dot"></span><span class="muted">${P.mic ? 'Recording' : 'Timer only (no microphone)'}</span></p><button class="btn danger" data-act="stopStudio">Finish</button>`;
  if (P.phase === 'done') {
    const words = P.text.trim() ? P.text.trim().split(/\s+/).length : 0, mins = Math.max(P.elapsed, 1) / 60, wpm = words ? Math.round(words / mins) : null;
    const low = P.text.toLowerCase(), fill = words ? FILLERS.reduce((n, r) => n + (low.match(r) || []).length, 0) : null;
    P.stats = { wpm, fillers: fill };
    const pace = wpm == null ? '' : wpm < 110 ? 'A little slow. Fine if you are pausing on purpose.' : wpm <= 170 ? 'Great pace.' : 'Fast. Add pauses.';
    el.innerHTML = `<h2>Nice work! ${P.elapsed}s of speaking</h2>
      <div class="metrics"><div class="metric"><b>${P.elapsed}s</b><span class="muted small">Time</span></div>
      <div class="metric"><b>${wpm ?? '–'}</b><span class="muted small">Words / min</span></div>
      <div class="metric"><b>${fill ?? '–'}</b><span class="muted small">Filler words</span></div></div>
      ${wpm != null ? `<p>${pace}</p>` : `<p class="muted small">${SR ? 'No speech detected, so there are no stats this time.' : 'Live transcript needs Chrome or Edge, so use the self-review below.'}</p>`}
      ${P.text ? `<div class="transcript">${esc(P.text)}</div>` : ''}
      ${P.url ? `<audio controls src="${P.url}"></audio>` : ''}
      <div style="text-align:left;max-width:420px;margin:18px auto 0"><b>Self-review</b>
      ${['Opened with a clear point or hook', 'Used pauses instead of fillers', 'Gave an example or detail', 'Ended with a strong last line'].map((t, k) => `<label class="check"><input type="checkbox" data-act="selfRev" data-k="${k}"><span>${t}</span></label>`).join('')}</div>
      <div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary lg" data-act="saveSession">Save session (+20 XP)</button><button class="btn" data-act="newPrompt">Skip &amp; new prompt</button></div>`;
  }
}
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
async function startStudio() {
  const sel = $('#durSel'); if (sel) P.dur = +sel.value;
  P.text = ''; P.chunks = []; P.url = ''; P.review = {}; P.mic = false;
  try {
    if (navigator.mediaDevices?.getUserMedia && window.MediaRecorder) {
      P.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      P.rec = new MediaRecorder(P.stream);
      P.rec.ondataavailable = e => e.data.size && P.chunks.push(e.data);
      P.rec.onstop = () => { if (P.chunks.length) P.url = URL.createObjectURL(new Blob(P.chunks, { type: P.rec.mimeType })); if (P.phase === 'done') renderStudio(); };
      P.mic = true;
    }
  } catch { toast('Microphone unavailable. Using timer only.'); }
  P.phase = 'count'; renderStudio();
  let n = 3;
  P.tick = setInterval(() => {
    n--;
    if (n > 0) { const c = $('#cd'); if (c) c.textContent = n; return; }
    clearInterval(P.tick); beginRec();
  }, 800);
}
function beginRec() {
  P.phase = 'rec'; P.left = P.dur; P.start = Date.now(); renderStudio();
  if (P.mic) P.rec.start();
  if (SR && P.mic) {
    try {
      P.sr = new SR(); P.sr.continuous = true; P.sr.interimResults = false; P.sr.lang = navigator.language || 'en-US';
      P.sr.onresult = e => { for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) P.text += e.results[i][0].transcript + ' '; };
      P.sr.onend = () => { if (P.phase === 'rec') { try { P.sr.start(); } catch { /* already started */ } } };
      P.sr.start();
    } catch { P.sr = null; }
  }
  P.tick = setInterval(() => {
    P.left--; const t = $('#tm'); if (t) t.textContent = fmt(Math.max(P.left, 0));
    if (P.left <= 0) finishStudio();
  }, 1000);
}
function finishStudio() {
  if (P.phase !== 'rec') return;
  clearInterval(P.tick); P.elapsed = Math.max(1, Math.round((Date.now() - P.start) / 1000));
  P.phase = 'done';
  if (P.sr) { try { P.sr.stop(); } catch { /* noop */ } }
  if (P.rec && P.rec.state !== 'inactive') P.rec.stop();
  if (P.stream) P.stream.getTracks().forEach(t => t.stop());
  setTimeout(() => { if (P.phase === 'done') renderStudio(); }, 700);
  renderStudio();
}
function stopStudio() {
  clearInterval(P.tick); clearInterval(breathT); breathT = null;
  if (P.phase === 'rec' || P.phase === 'count') {
    P.phase = 'idle';
    try { P.sr && P.sr.stop(); } catch { /* noop */ }
    try { P.rec && P.rec.state !== 'inactive' && P.rec.stop(); } catch { /* noop */ }
    P.stream && P.stream.getTracks().forEach(t => t.stop());
  }
}
function breathe() {
  const el = $('#breath'), btn = $('#breathBtn');
  if (breathT) { clearInterval(breathT); breathT = null; el.textContent = 'Ready'; el.classList.remove('big'); btn.textContent = 'Start'; return; }
  btn.textContent = 'Stop'; let i = 0;
  const phases = [['Inhale', true], ['Hold', true], ['Exhale', false], ['Hold', false]];
  const step = () => { const [t, big] = phases[i % 4]; el.textContent = t; el.classList.toggle('big', big); i++; };
  step(); breathT = setInterval(step, 4000);
}

/* ---------- tips ---------- */
function allTips() {
  const out = [];
  courses.forEach(c => c.lessons.forEach(l => l.tips.forEach(t => out.push({ text: t, src: c.title, cat: c.cat }))));
  window.QUICK_TIPS.forEach(t => out.push({ text: t, src: '', cat: 'Quick wins' }));
  return out.map((t, i) => ({ ...t, id: 't' + i }));
}
function tipOfDay() { const a = allTips(), d = new Date(); return a[(d.getFullYear() * 366 + d.getMonth() * 31 + d.getDate()) % a.length]; }
let tipFilter = 'All', tipQuery = '';
function tipList() {
  const q = tipQuery.toLowerCase();
  const list = allTips().filter(t => (tipFilter === 'All' || (tipFilter === 'Saved' ? S.favs.includes(t.id) : t.cat === tipFilter)) && (!q || (t.text + t.src).toLowerCase().includes(q)));
  return list.length ? list.map(t => `<div class="card tip"><div><div>${esc(t.text)}</div><div class="muted small">${esc(t.src || 'Quick win')}</div></div><button class="star ${S.favs.includes(t.id) ? 'on' : ''}" data-act="fav" data-id="${t.id}" aria-label="Save tip" aria-pressed="${S.favs.includes(t.id)}">${S.favs.includes(t.id) ? '★' : '☆'}</button></div>`).join('') : '<p class="empty">No tips match.</p>';
}
function tipsView() {
  const cats = ['All', 'Saved', 'Quick wins', ...new Set(courses.map(c => c.cat))];
  return `<div class="hero"><p class="eyebrow">Library</p><h1>Tips</h1><p class="lead">Small, high-leverage ideas. Star the ones to reread. Press <kbd>/</kbd> to search.</p></div>
  <div class="toolbar"><div class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg><input type="search" id="tipQ" placeholder="Search tips" aria-label="Search tips" value="${esc(tipQuery)}"></div>
  <div class="chips" id="tipChips" data-nav>${cats.map(c => `<button class="chip ${c === tipFilter ? 'on' : ''}" data-act="filterTip" data-v="${c}">${c}</button>`).join('')}</div></div>
  <div class="grid" id="tiplist">${tipList()}</div>`;
}

/* ---------- review (spaced repetition) ---------- */
const INTERVALS = [1, 2, 4, 8, 16, 32];
function questionFor(cid) { const [c, i, q] = cid.split('.'); const l = courseById(c)?.lessons[+i]; const qq = l?.quiz[+(q || 'q0').slice(1)]; return qq && { q: qq, title: l.t }; }
function nextDue() { const ds = Object.values(S.cards).map(c => c.due).sort(); return ds[0] > dayStr() ? 'on ' + ds[0] : 'soon'; }
function reviewView() {
  const head = '<div class="hero"><p class="eyebrow">Spaced repetition</p><h1>Review</h1>';
  if (!Object.keys(S.cards).length) return `${head}<p class="lead">Finish a lesson and its quiz questions will come back just before you would forget them.</p></div><a class="btn primary lg" href="#/learn">Start learning</a>`;
  const due = dueCards();
  if (!due.length) return `${head}<p class="lead">All caught up 🎉 ${Object.keys(S.cards).length} cards in rotation. Next ones are due ${nextDue()}.</p></div>`;
  const cid = due[0], { q, title } = questionFor(cid);
  return `${head}<p class="lead">${due.length} due · from “${esc(title)}”. Use <kbd>1</kbd>–<kbd>4</kbd> to answer.</p></div><div class="card" data-cid="${cid}" data-ans="${q.a}" id="rq" style="max-width:680px"><h2 style="font-size:1.5rem">${esc(q.q)}</h2><div>${q.o.map((o, j) => `<button class="opt" data-act="reviewAns" data-j="${j}"><kbd>${j + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div><div class="card flat why" hidden style="margin-top:14px">${esc(q.w)}</div></div><div id="revNext" style="margin-top:16px"></div>`;
}
function reviewAnswer(j) {
  const q = $('#rq'); if (!q || q.dataset.done) return;
  const a = +q.dataset.ans, ok = j === a, c = S.cards[q.dataset.cid], opts = $$('.opt', q);
  if (j >= opts.length) return;
  q.dataset.done = '1';
  opts.forEach((o, k) => { o.disabled = true; if (k === a) o.classList.add('right'); else if (k === j) o.classList.add('wrong'); });
  $('.why', q).hidden = false;
  c.box = ok ? Math.min(c.box + 1, INTERVALS.length - 1) : 0; c.due = addDays(INTERVALS[c.box]);
  touch(ok ? 5 : 1);
  $('#revNext').innerHTML = `<button class="btn primary lg" data-act="reviewNext" id="revBtn">${dueCards().length ? 'Next card' : 'Finish'} <kbd>↵</kbd></button>`;
  $('#revBtn').focus();
}

/* ---------- journal ---------- */
const journalPrompt = () => window.JOURNAL_PROMPTS[new Date().getDate() % window.JOURNAL_PROMPTS.length];
function journalView() {
  return `<div class="hero"><p class="eyebrow">Reflect</p><h1>Journal</h1><p class="lead">Reflection turns practice into progress.</p></div>
  <form class="card" data-form="journal"><label class="f" for="jt" style="margin-top:0">${esc(journalPrompt())}</label><textarea id="jt" placeholder="Write freely…"></textarea><div class="row between" style="margin-top:12px"><span class="muted small">Private, saved in this browser</span><button class="btn primary">Save entry (+10 XP)</button></div></form>
  <section class="sec"><h2>Past entries</h2><div class="card">${S.journal.length ? S.journal.map(j => `<div class="entry"><div class="row between"><b class="small muted">${esc(j.date)} · ${esc(j.prompt)}</b><button class="btn ghost danger" data-act="delJ" data-id="${j.id}" aria-label="Delete entry">Delete</button></div><p style="margin:6px 0 0;white-space:pre-wrap">${esc(j.text)}</p></div>`).join('') : '<p class="empty">Nothing yet.</p>'}</div></section>`;
}

/* ---------- profile ---------- */
function profileView() {
  const p = S.profile;
  return `<div class="hero"><p class="eyebrow">Profile</p><h1>Me</h1></div>
  <div class="grid g2"><section class="card streak-card"><div class="big">${flame()}${streakNow()}</div><p><b>day streak</b> · best ${S.streak.best || 0} · ❄ ${S.freezes} freeze${S.freezes === 1 ? '' : 'es'}</p>${weekDots(false)}</section>
  <section class="card"><h2 style="font-size:1.4rem">Daily goal</h2><div class="multi" data-nav>${GOALS.map(([x, n, d]) => `<button type="button" data-act="setGoal" data-x="${x}" class="${S.goal === x ? 'on' : ''}" aria-pressed="${S.goal === x}"><b>${n}</b><br><span class="muted small">${d}</span></button>`).join('')}</div>
  <p class="muted small" style="margin-top:14px">Level ${level()} · ${S.xp} XP · ${Object.keys(S.done).length}/${allLessons.length} lessons · ${S.sessions.length} speaking sessions · ${S.journal.length} journal entries</p></section></div>
  <form class="card sec" style="margin-top:16px" data-form="profile">
    <h2 style="font-size:1.4rem">Your details</h2>
    <label class="f" for="p-name" style="margin-top:0">Name</label><input id="p-name" type="text" value="${esc(p.name)}">
    <label class="f" for="p-role">What I do</label><input id="p-role" type="text" value="${esc(p.role)}">
    <label class="f" for="p-goal">Big goal</label><input id="p-goal" type="text" value="${esc(p.goal)}">
    <label class="f" for="p-notes">My skillset</label><textarea id="p-notes">${esc(p.notes)}</textarea>
    <label class="f" for="p-min">Daily minutes: <b id="p-min-v">${p.minutes}</b></label><input id="p-min" type="range" min="5" max="90" step="5" value="${p.minutes}" style="width:100%;accent-color:var(--accent)">
    <h3 style="margin-top:22px">Focus areas</h3><div class="multi" data-nav>${Object.entries(SKILLS).map(([k, v]) => `<button type="button" data-act="pFocus" data-k="${k}" class="${p.focus.includes(k) ? 'on' : ''}" aria-pressed="${p.focus.includes(k)}">${v}</button>`).join('')}</div>
    <h3 style="margin-top:22px">Self-ratings (baseline)</h3>
    ${Object.entries(SKILLS).map(([k, v]) => `<div class="skill-row"><label for="ps-${k}">${v}</label><input type="range" id="ps-${k}" data-skill="${k}" min="1" max="5" value="${p.skills[k]}"><b id="sv-${k}">${p.skills[k]}</b></div>`).join('')}
    <div class="row" style="margin-top:16px"><button class="btn primary">Save changes</button></div>
  </form>
  <section class="card sec" style="margin-top:16px"><h2 style="font-size:1.4rem">Settings</h2><div class="row"><button class="btn" data-act="theme">Theme: ${S.theme}</button><button class="btn" data-act="export">Export my data</button><button class="btn danger" data-act="reset">Reset everything</button></div></section>`;
}

/* ---------- events ---------- */
const actions = {
  obFocus(el) { const k = el.dataset.k, a = ob.focus; a.includes(k) ? a.splice(a.indexOf(k), 1) : a.push(k); render(); },
  obGoal(el) { ob.xp = +el.dataset.x; render(); },
  obBack() { obRead(); ob.step--; render(); },
  obNext() {
    obRead();
    if (ob.step === 0 && !ob.name) { toast('Add your name to continue'); return; }
    if (ob.step < 3) { ob.step++; render(); return; }
    S.profile = { name: ob.name, role: ob.role, goal: ob.goal, notes: ob.notes, focus: ob.focus, minutes: ob.minutes, skills: ob.skills };
    S.goal = ob.xp;
    S.wish = ob.wish.split('\n').map(s => s.trim()).filter(Boolean).map(t => ({ t, done: false }));
    save(); go('home'); render(); toast('Your plan is ready!');
  },
  setGoal(el) { S.goal = +el.dataset.x; save(); render(); },
  filterLearn(el) { learnFilter = el.dataset.v; $$('.chip', el.parentNode).forEach(c => { c.classList.toggle('on', c === el); c.setAttribute('aria-pressed', c === el); }); $('#catalog').innerHTML = catalogHTML(); },
  filterTip(el) { tipFilter = el.dataset.v; $$('#tipChips .chip').forEach(c => c.classList.toggle('on', c === el)); $('#tiplist').innerHTML = tipList(); },
  fav(el) { const id = el.dataset.id; S.favs.includes(id) ? S.favs.splice(S.favs.indexOf(id), 1) : S.favs.push(id); save(); $('#tiplist').innerHTML = tipList(); },
  wishTick(el) { S.wish[+el.dataset.i].done = el.checked; if (el.checked) touch(15); save(); render(); },
  exTick(el) { const a = S.ex[el.dataset.id] || (S.ex[el.dataset.id] = []); a[+el.dataset.k] = el.checked; save(); },
  qpick(el) { qPick(el); },
  complete() { completeLesson(); },
  jump(el) { document.getElementById(el.dataset.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
  dailyTick(el) {
    const t = dayStr(); if (S.daily.date !== t) S.daily = { date: t, checked: [] };
    S.daily.checked[+el.dataset.k] = el.checked;
    const p = dailyPick();
    if (p.l.ex.steps.every((_, k) => S.daily.checked[k]) && !S.dailyDone[t]) { S.dailyDone[t] = true; touch(15); toast('Daily activity done +15 XP'); } else save();
    if (S.dailyDone[t]) render();
  },
  newPrompt() { P.phase = 'idle'; P.prompt = nextPrompt(); renderStudio(); },
  kind(el) { P.kind = el.dataset.v; P.prompt = nextPrompt(); renderStudio(); },
  startStudio() { startStudio(); },
  stopStudio() { finishStudio(); },
  selfRev(el) { P.review[el.dataset.k] = el.checked; },
  saveSession() {
    const score = Object.values(P.review).filter(Boolean).length;
    S.sessions.unshift({ prompt: P.prompt, date: dayStr(), secs: P.elapsed, wpm: P.stats.wpm, fillers: P.stats.fillers, score });
    S.sessions = S.sessions.slice(0, 60); touch(20); toast('Session saved +20 XP'); P.phase = 'idle'; P.prompt = nextPrompt(); render();
  },
  nextTwister() { twIdx = (twIdx + 1) % window.TWISTERS.length; renderTwister(); },
  breathe,
  reviewAns(el) { reviewAnswer(+el.dataset.j); },
  reviewNext() { render(); },
  delJ(el) { if (confirm('Delete this entry?')) { S.journal = S.journal.filter(j => j.id !== el.dataset.id); save(); render(); } },
  pFocus(el) { const a = S.profile.focus, k = el.dataset.k; a.includes(k) ? a.splice(a.indexOf(k), 1) : a.push(k); el.classList.toggle('on'); el.setAttribute('aria-pressed', a.includes(k)); save(); },
  theme() { S.theme = { auto: 'light', light: 'dark', dark: 'auto' }[S.theme]; applyTheme(); save(); toast('Theme: ' + S.theme); },
  help() { $('#help').hidden = false; $('#help .btn').focus(); },
  closeHelp() { $('#help').hidden = true; },
  export() {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' }));
    a.download = 'skillbuilder-data.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },
  reset() { if (confirm('Erase all progress and start over? This cannot be undone.')) { S = fresh(); save(); ob.step = 0; go('home'); render(); } }
};
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el || el.type === 'checkbox') return;
  actions[el.dataset.act]?.(el, e);
});
document.addEventListener('change', e => {
  const el = e.target.closest('[data-act]'); if (el && el.type === 'checkbox') actions[el.dataset.act]?.(el, e);
  if (e.target.id === 'durSel') P.dur = +e.target.value;
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.skill) { const k = t.dataset.skill, v = +t.value; $('#sv-' + k).textContent = v; if (S.profile) { S.profile.skills[k] = v; save(); } else ob.skills[k] = v; }
  if (t.id === 'o-min') { ob.minutes = +t.value; $('#o-min-v').textContent = t.value + ' min'; }
  if (t.id === 'p-min') $('#p-min-v').textContent = t.value;
  if (t.id === 'tipQ') { tipQuery = t.value; $('#tiplist').innerHTML = tipList(); }
  if (t.id === 'catQ') { learnQuery = t.value; $('#catalog').innerHTML = catalogHTML(); }
});
document.addEventListener('submit', e => {
  const f = e.target.dataset.form; if (!f) return; e.preventDefault();
  if (f === 'wish') { const v = $('#wishIn').value.trim(); if (v) { S.wish.push({ t: v, done: false }); save(); render(); } }
  if (f === 'journal') {
    const v = $('#jt').value.trim(); if (!v) { toast('Write a few words first'); return; }
    S.journal.unshift({ id: String(Date.now()), date: dayStr(), prompt: journalPrompt(), text: v }); touch(10); toast('Saved +10 XP'); render();
  }
  if (f === 'profile') {
    const p = S.profile; p.name = $('#p-name').value.trim(); p.role = $('#p-role').value.trim(); p.goal = $('#p-goal').value.trim(); p.notes = $('#p-notes').value.trim(); p.minutes = +$('#p-min').value;
    save(); toast('Saved'); render();
  }
});

/* ---------- keyboard ---------- */
function arrowNav(e) {
  const t = e.target, box = t.closest('[data-nav]'); if (!box) return;
  const items = $$('a[href], button:not([disabled]), input[type=checkbox]', box).filter(el => el.offsetParent);
  if (!items.includes(t)) return;
  const k = e.key; let best = null;
  if (k === 'Home') best = items[0];
  else if (k === 'End') best = items[items.length - 1];
  else {
    const r = t.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2; let bd = Infinity;
    items.forEach(el => {
      if (el === t) return;
      const q = el.getBoundingClientRect(), x = q.left + q.width / 2 - cx, y = q.top + q.height / 2 - cy;
      const [main, cross] = k === 'ArrowRight' ? [x, y] : k === 'ArrowLeft' ? [-x, y] : k === 'ArrowDown' ? [y, x] : [-y, x];
      if (main <= 4) return;
      const d = main + Math.abs(cross) * 2; if (d < bd) { bd = d; best = el; }
    });
  }
  if (best) { e.preventDefault(); best.focus(); best.scrollIntoView({ block: 'nearest' }); }
}
let chord = false, chordT;
const CHORDS = { h: 'home', l: 'learn', p: 'practice', t: 'tips', r: 'review', j: 'journal', m: 'profile' };
document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target, k = e.key, help = $('#help');
  if (!help.hidden) { if (k === 'Escape') { e.preventDefault(); actions.closeHelp(); } return; }
  const typing = t.matches('textarea, select, input:not([type=checkbox]):not([type=button])');
  if (L && route()[0] === 'lesson' && !typing) {
    const free = t === document.body || t.tagName === 'MAIN';
    if (k === 'Escape') { e.preventDefault(); go('course/' + L.x.c.id); return; }
    if (k === 'n' || (k === 'ArrowRight' && free)) { e.preventDefault(); lessonStep(1); return; }
    if (k === 'p' || (k === 'ArrowLeft' && free)) { e.preventDefault(); lessonStep(-1); return; }
  }
  if (typing) {
    if (k === 'Escape') t.blur();
    if (k === 'ArrowDown' && t.id === 'catQ') { const a = $('#catalog a'); if (a) { e.preventDefault(); a.focus(); } }
    if (k === 'ArrowDown' && t.id === 'tipQ') { const b = $('#tipChips .chip'); if (b) { e.preventDefault(); b.focus(); } }
    return;
  }
  if (!S.profile) return;
  if (k === '?') { e.preventDefault(); actions.help(); return; }
  if (chord) { chord = false; const v = CHORDS[k.toLowerCase()]; if (v) { e.preventDefault(); go(v); } return; }
  if (k === 'g') { chord = true; clearTimeout(chordT); chordT = setTimeout(() => { chord = false; }, 1200); return; }
  if (k === '/') { const q = $('#catQ') || $('#tipQ'); if (q) { e.preventDefault(); q.focus(); } return; }
  if (route()[0] === 'review' && /^[1-4]$/.test(k) && $('#rq')) { e.preventDefault(); reviewAnswer(+k - 1); return; }
  if (route()[0] === 'review' && k === 'Enter' && $('#revBtn') && !t.matches('button')) { e.preventDefault(); render(); return; }
  if (k.startsWith('Arrow') || k === 'Home' || k === 'End') arrowNav(e);
});
render();
})();
