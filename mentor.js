// Mentor layer: attaches a mentor's note (real-world hack + cultural notes) and one scenario question to each lesson,
// then shuffles every quiz's options so the right answer is not always in the same spot. Loaded after all data files.
(() => {
  const MENTOR = window.MENTOR || {};
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rng = seed => () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  window.COURSES.forEach(c => c.lessons.forEach((l, i) => {
    const key = `${c.id}.${i}`, m = MENTOR[key];
    if (m && !l.mentor) {
      l.mentor = { hack: m.hack, world: m.world };
      if (m.q) l.quiz.push({ q: m.q[0], o: m.q.slice(1, 5), a: 0, w: m.q[5] });
    }
    const tg = (window.TAGLISH || {})[key];
    if (tg && !l.taglish) { l.taglish = tg.t; l.memory = tg.m; }
    l.quiz.forEach((q, k) => {
      if (q._s) return;
      const right = q.o[q.a], r = rng(hash(`${key}.${k}`)), o = q.o.slice();
      for (let n = o.length - 1; n > 0; n--) { const j = Math.floor(r() * (n + 1)); [o[n], o[j]] = [o[j], o[n]]; }
      q.o = o; q.a = o.indexOf(right); q._s = 1;
    });
  }));
})();
