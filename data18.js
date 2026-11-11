// Data for the interview simulator, answer bank, call roleplay and listening drills.
window.SIMQ = [
  { q: `Tell me about yourself.`, cat: `Introduction`, lesson: `interview.0`, tip: `Present, past proof, future fit. Under 60 seconds.` },
  { q: `Why do you want this job?`, cat: `Motivation`, lesson: `qbank.1`, tip: `One specific thing about the company, then how your skills fit.` },
  { q: `Why are you leaving your current role, or why did you leave your last one?`, cat: `Motivation`, lesson: `qbank.1`, tip: `Talk about what you are moving toward. Never blame.` },
  { q: `What is your biggest strength?`, cat: `Strengths`, lesson: `qbank.0`, tip: `Claim, example, result.` },
  { q: `What is your biggest weakness?`, cat: `Strengths`, lesson: `qbank.0`, tip: `A real, fixable weakness plus the system you use now.` },
  { q: `Tell me about a time you dealt with an angry customer.`, cat: `Behavioral`, lesson: `story.2`, tip: `STAR. Listen, empathise, solve, confirm. End with the result.` },
  { q: `Tell me about a time you made a mistake. What did you do?`, cat: `Behavioral`, lesson: `conf.2`, tip: `Own it, fix it, show what you changed.` },
  { q: `Describe a conflict with a teammate and how you handled it.`, cat: `Behavioral`, lesson: `interview.4`, tip: `You listened first, then proposed a fix. Keep the relationship.` },
  { q: `Tell me about a time you learned something new quickly.`, cat: `Behavioral`, lesson: `learn.1`, tip: `Show your method, not only the outcome.` },
  { q: `Tell me about a time you went above and beyond for someone.`, cat: `Behavioral`, lesson: `story.2`, tip: `Pick a story with a number or a thank-you.` },
  { q: `A customer says the internet is down. Walk me through what you would do.`, cat: `Technical`, lesson: `itfund.0`, tip: `Ask questions, check one device vs all, test in order, document.` },
  { q: `How would you explain a router to someone who has never used one?`, cat: `Technical`, lesson: `itfund.4`, tip: `One analogy, then one next step.` },
  { q: `What would you do if you do not know the answer to a customer's question?`, cat: `Situational`, lesson: `qbank.2`, tip: `Be honest, check resources, give a follow-up time.` },
  { q: `A customer demands a refund that policy does not allow. What do you do?`, cat: `Situational`, lesson: `cs.2`, tip: `Empathise, explain briefly, offer what you can do.` },
  { q: `You have three tickets open and a customer is waiting on chat. How do you prioritise?`, cat: `Situational`, lesson: `focus.0`, tip: `Say your criteria: urgency, impact, promise made.` },
  { q: `How do you handle a long shift with many difficult calls?`, cat: `Situational`, lesson: `calm.2`, tip: `Resets between calls, breaks, boundaries.` },
  { q: `How will you stay productive working from home?`, cat: `Remote`, lesson: `interview.11`, tip: `Workspace, schedule, daily updates, backup plan.` },
  { q: `What happens if your internet or power goes out during a shift?`, cat: `Remote`, lesson: `interview.3`, tip: `Name your backups: hotspot, second device, power, who you message.` },
  { q: `How does speaking two languages help you in this role?`, cat: `Remote`, lesson: `interview.11`, tip: `Fewer transfers, higher satisfaction. Offer a live demo.` },
  { q: `How do you feel about working night shifts or different time zones?`, cat: `Remote`, lesson: `usa.1`, tip: `Show you have planned sleep and routines.` },
  { q: `What does good customer service mean to you?`, cat: `Motivation`, lesson: `cs.0`, tip: `Solve the real problem, make them feel heard, follow up.` },
  { q: `Tell me about a time you had to explain something technical to a non-technical person.`, cat: `Behavioral`, lesson: `itfund.4`, tip: `Analogy, check understanding, next step.` },
  { q: `How do you receive feedback?`, cat: `Strengths`, lesson: `lead.1`, tip: `Listen, thank, act, follow up.` },
  { q: `Where do you see yourself in five years?`, cat: `Motivation`, lesson: `grow.4`, tip: `Growth inside the company: tier 2, trainer, team lead.` },
  { q: `Is there a gap on your CV? Can you explain it?`, cat: `Introduction`, lesson: `interview.10`, tip: `20 seconds, honest, finish on the future.` },
  { q: `What are your salary expectations?`, cat: `Closing`, lesson: `interview.6`, tip: `A researched range, flexible on the full package.` },
  { q: `How would you handle a customer who is shouting and using bad language?`, cat: `Situational`, lesson: `cs.1`, tip: `Let them vent, acknowledge, set a calm boundary, warn once.` },
  { q: `What tools have you used for support, and how fast do you learn new ones?`, cat: `Technical`, lesson: `qbank.3`, tip: `Name tools, honest about gaps, show a learning example.` },
  { q: `Do you have any questions for us?`, cat: `Closing`, lesson: `qbank.4`, tip: `Ask two or three: success in 90 days, training, team metrics.` },
  { q: `Why should we hire you?`, cat: `Closing`, lesson: `interview.0`, tip: `Three reasons: skill, proof, fit. End on how you will help.` }
];

window.ANSWERQ = [
  { id: 'intro', t: `Tell me about yourself`, hint: `Present: who you are and what you do. Past: one proof with a number. Future: why this job.`, lesson: `interview.0` },
  { id: 'why', t: `Why this company and role?`, hint: `One specific thing about the company. Connect it to your skills.`, lesson: `qbank.1` },
  { id: 'leave', t: `Why did you leave (or why are you leaving)?`, hint: `What you are moving toward. No blame. Short.`, lesson: `qbank.1` },
  { id: 'strength', t: `My strengths`, hint: `Two strengths, each with a short example and a result.`, lesson: `qbank.0` },
  { id: 'weak', t: `My weakness`, hint: `A real one, what you do about it, and what changed.`, lesson: `qbank.0` },
  { id: 'gap', t: `Explain a gap or career change`, hint: `20 seconds. Honest, no apology, finish on the future.`, lesson: `interview.10` },
  { id: 'conflict', t: `A time I handled conflict`, hint: `STAR: Situation, Task, Action (I listened, I proposed), Result, Lesson.`, lesson: `interview.4` },
  { id: 'mistake', t: `A time I made a mistake`, hint: `Own it, fix it, show what you changed. Use a number if you can.`, lesson: `conf.2` },
  { id: 'angry', t: `A time I helped an angry customer`, hint: `Listen, empathise, solve, confirm. End with the result.`, lesson: `story.2` },
  { id: 'bilingual', t: `How my languages help the team`, hint: `Fewer transfers, higher satisfaction. Offer a short live demo.`, lesson: `interview.11` },
  { id: 'remote', t: `How I work well from home`, hint: `Workspace, schedule, daily update, backup internet and power.`, lesson: `interview.11` },
  { id: 'salary', t: `My salary range`, hint: `Researched range, tied to the market, flexible on the package.`, lesson: `interview.6` },
  { id: 'future', t: `Where I see myself in five years`, hint: `Growth in the company: new skills, tier 2, trainer, team lead.`, lesson: `grow.4` },
  { id: 'hire', t: `Why you should hire me`, hint: `Three reasons: skill, proof, fit. Finish with how you will help.`, lesson: `interview.0` }
];

/* Call roleplay: you choose what to say. 2 = excellent, 1 = okay, 0 = hurts the call. */
window.RP = [
  { id: 'billing', t: `Double charge, angry customer`, who: `Customer: Daniel, 42, charged twice for the same month.`, goal: `Calm him down, verify, fix, and confirm what happens next.`, start: 'a',
    nodes: {
      a: { c: `This is ridiculous! I was charged twice and nobody has helped me!`, o: [
        [`I am sorry about the double charge. That is stressful. Let me fix it right now.`, 'b', 2, `You named the problem, showed empathy and promised action.`],
        [`Please calm down, sir.`, 'b', 0, `"Calm down" almost always makes people angrier.`],
        [`That is not something I can see yet. What is your name?`, 'b', 1, `Moving to facts is fine, but you skipped empathy.`]] },
      b: { c: `Thank you. My name is Daniel Reyes. I want my money back today.`, o: [
        [`Thank you, Daniel. To protect your account, may I verify your email and the last four digits of the card?`, 'c', 2, `Verification is required, and you explained why.`],
        [`Sure, I will refund it now.`, 'c', 0, `Refunding before verifying risks a security incident.`],
        [`I need your password to continue.`, 'c', 0, `Never ask for passwords.`]] },
      c: { c: `Email is daniel.reyes@mail.com, card ends 4421. So what now?`, o: [
        [`I can see two charges of $19.99 on the 3rd. I will refund one today. You will see it within three to five business days. I will email you a confirmation.`, 'd', 2, `Specific, honest timing and a written confirmation.`],
        [`It should be fixed soon.`, 'd', 0, `Vague promises create repeat calls.`],
        [`I will refund it. Is there anything else?`, 'd', 1, `Good, but you did not say when or confirm in writing.`]] },
      d: { c: `Okay. Thank you. That is what I wanted to hear.`, o: [
        [`Thank you for your patience, Daniel. Is there anything else I can help with today?`, 'end', 2, `A warm, clear close.`],
        [`Bye.`, 'end', 0, `A cold close wastes the goodwill you just built.`]] },
      end: { end: true }
    } },
  { id: 'login', t: `Cannot sign in`, who: `Customer: Maria, 55, not confident with computers.`, goal: `Diagnose step by step in plain language.`, start: 'a',
    nodes: {
      a: { c: `Hello? I cannot get into my account. It does not work.`, o: [
        [`Hello Maria, I will help you. What do you see on the screen when you try to sign in?`, 'b', 2, `Warm, and an open question about what is happening.`],
        [`Have you tried resetting your password?`, 'b', 1, `Maybe right, but you assumed the cause.`],
        [`You need to enter the correct credentials.`, 'b', 0, `That sounds condescending.`]] },
      b: { c: `It says "incorrect password", but I am sure it is right.`, o: [
        [`Thank you. Let us check one thing together. Is the Caps Lock light on?`, 'c', 2, `A small, concrete check in plain language.`],
        [`Then your password is wrong. Reset it.`, 'c', 0, `Do not tell the customer they are wrong.`],
        [`Let me send a reset link to your registered email. Is that okay?`, 'c', 1, `A good option, but try a simple check first.`]] },
      c: { c: `Oh! Yes it was on. It worked now! Thank you so much.`, o: [
        [`Wonderful, Maria. One tip: if it happens again, check Caps Lock first. Anything else I can help with?`, 'end', 2, `You solved it and taught a small habit.`],
        [`Good. Bye.`, 'end', 1, `Solved, but you missed a chance to help them next time.`]] },
      end: { end: true }
    } },
  { id: 'refund', t: `Refund outside the policy window`, who: `Customer: Sam, 30, bought four months ago.`, goal: `Say no kindly and offer options.`, start: 'a',
    nodes: {
      a: { c: `I bought this four months ago and it stopped working. I want a full refund.`, o: [
        [`I am sorry it stopped working, Sam. Let me look at what we can do.`, 'b', 2, `Empathy first, then action.`],
        [`Our policy is thirty days. We cannot help.`, 'b', 0, `A flat no with no alternative loses trust.`],
        [`That is the manufacturer's problem.`, 'b', 0, `Blaming others does not help the customer.`]] },
      b: { c: `So can you refund it or not?`, o: [
        [`The refund window closed at 30 days, so I cannot refund it. What I can do is a warranty replacement or repair at no cost. Which would you prefer?`, 'c', 2, `Clear no, short reason, real alternatives.`],
        [`I will make an exception.`, 'c', 0, `Do not promise what you cannot approve.`],
        [`I do not know. Maybe.`, 'c', 0, `Uncertainty without a next step frustrates people.`]] },
      c: { c: `A replacement, I guess. That is something.`, o: [
        [`I will arrange it now and email you the details and shipping time. Thank you for your understanding.`, 'end', 2, `Action, written confirmation and a thank-you.`],
        [`Okay, someone will contact you.`, 'end', 1, `Vague. Say who and when.`]] },
      end: { end: true }
    } },
  { id: 'spanish', t: `Spanish-speaking customer`, who: `Customer: Sra. López, speaks Spanish, internet is slow.`, goal: `Use polite Spanish, verify and diagnose.`, start: 'a',
    nodes: {
      a: { c: `Buenas tardes. Mi internet está muy lento y necesito trabajar.`, o: [
        [`Buenas tardes, señora López. Gracias por llamar. Voy a ayudarle. ¿Desde cuándo está lento?`, 'b', 2, `Polite usted, empathy and a clear diagnostic question.`],
        [`Hola. ¿Qué pasa?`, 'b', 0, `Too casual and no empathy for a first contact.`],
        [`Please hold on, I will find a Spanish speaker.`, 'b', 0, `If you speak Spanish, use it. That is why you are on this call.`]] },
      b: { c: `Desde ayer. Todos los aparatos van lentos.`, o: [
        [`Entiendo. Si todos los aparatos están lentos, probablemente sea el módem. ¿Puede reiniciarlo, por favor? Lo desconecta 30 segundos y lo vuelve a conectar.`, 'c', 2, `You reasoned from the facts and gave clear steps.`],
        [`Cambie su contraseña de Wi-Fi.`, 'c', 0, `That does not follow from the symptoms.`],
        [`Voy a transferir la llamada.`, 'c', 1, `Fine for escalation, but try the basic fix first.`]] },
      c: { c: `Ya lo reinicié y funciona mejor. Muchas gracias.`, o: [
        [`Me alegra mucho, señora. Si vuelve a ocurrir, llámenos y revisamos la línea. ¿Algo más en que pueda ayudarle?`, 'end', 2, `You offered a next step and a polite close.`],
        [`De nada. Adiós.`, 'end', 1, `Polite, but short and missing the offer to help later.`]] },
      end: { end: true }
    } },
  { id: 'outage', t: `Service outage, upset customer`, who: `Customer: Priya, runs a small shop, system down for two hours.`, goal: `Own the issue, give honest information and a next update time.`, start: 'a',
    nodes: {
      a: { c: `Your system has been down for two hours. I am losing sales. What is going on?`, o: [
        [`I am sorry, Priya. Two hours is too long, and I understand the sales impact. Here is what I know.`, 'b', 2, `You acknowledged real impact before explaining.`],
        [`We are aware of the issue.`, 'b', 1, `True, but cold and gives nothing.`],
        [`It is not only you. Everyone is affected.`, 'b', 0, `It sounds like an excuse, not help.`]] },
      b: { c: `So when will it be fixed?`, o: [
        [`The engineers have found the cause and are testing a fix. I do not have an exact time, and I will not guess. I will update you by 3 pm.`, 'c', 2, `Honest, specific, and a next update time.`],
        [`It will be fixed in ten minutes.`, 'c', 0, `Do not invent times.`],
        [`I cannot say.`, 'c', 1, `Honest but unhelpful without a next update.`]] },
      c: { c: `Fine. I will wait for your update.`, o: [
        [`Thank you. I will call you at 3 pm even if there is no news, and I can note your account for a goodwill review once it is resolved.`, 'end', 2, `You committed to proactive contact and a goodwill gesture within policy.`],
        [`Thanks for waiting.`, 'end', 1, `Polite, but nothing concrete.`]] },
      end: { end: true }
    } }
];

/* Listening drills: sentences are read by your browser's voice. */
window.LISTEN = {
  names: [`Concepcion`, `Kowalczyk`, `Siobhan`, `Nguyen`, `Hernandez`, `Oyelaran`, `Thompson`, `Fitzgerald`, `Delacroix`, `Bautista`, `Gutierrez`, `Mackenzie`, `Albuquerque`, `Papadopoulos`, `Rasmussen`],
  sentences: [
    `Could you please confirm the email address on the account?`,
    `I will transfer you to the billing team and share my notes.`,
    `The update should be live by Thursday at three thirty Eastern.`,
    `Let me read that back to make sure I have it right.`,
    `Your refund of forty nine dollars will arrive in five business days.`,
    `We are seeing some delays, so I will update you by noon tomorrow.`,
    `Have you tried restarting the router and waiting thirty seconds?`,
    `I am sorry for the trouble, and I will fix it on this call.`,
    `The meeting has moved to Friday at ten in the morning Sydney time.`,
    `Please check your spam folder and let me know if the message arrives.`,
    `That ticket was escalated yesterday and the engineer is working on it.`,
    `Would you mind sending me a screenshot of the error message?`
  ],
  accents: [['en-US', 'American'], ['en-GB', 'British'], ['en-AU', 'Australian'], ['en-IN', 'Indian'], ['en-IE', 'Irish']]
};
