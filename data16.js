// Toolkit: copy-ready templates, scripts and phrase banks. Replace the [brackets] and make each one sound like you.
window.TOOLKIT = [
/* ---------- Emails ---------- */
{ cat: `Emails`, t: `Thank-you after an interview`, when: `Send within 24 hours. Mention one real detail from the conversation.`,
  text: `Subject: Thank you, [Role] interview

Hi [Name],

Thank you for speaking with me today about the [Role] position. I enjoyed learning about [specific detail, e.g. how your team handles onboarding].

I am excited about the role and believe my experience in [skill] and my English and Spanish would help your customers. Please let me know if I can send anything else.

Kind regards,
[Your name]` },
{ cat: `Emails`, t: `Follow up when you have not heard back`, when: `Send once, about 5 business days after the date they gave you.`,
  text: `Subject: Following up, [Role] application

Hi [Name],

I hope you are well. I wanted to follow up on my interview for the [Role] position on [date]. I am still very interested and happy to provide anything that would help your decision.

Thank you for your time,
[Your name]` },
{ cat: `Emails`, t: `Polite reminder (invoice or request)`, when: `One day after the due date. Keep it friendly and specific.`,
  text: `Subject: Friendly reminder: [invoice or request]

Hi [Name],

A quick reminder that [invoice 003 for $120 / the document] was due on [date]. Could you let me know when to expect it?

Thanks so much,
[Your name]` },
{ cat: `Emails`, t: `Meeting recap`, when: `Within an hour of the meeting. People remember who writes the recap.`,
  text: `Subject: Recap: [meeting topic], [date]

Hi all,

Thanks for today. Here is what we agreed:

Decisions
- [Decision 1]
- [Decision 2]

Action items
- [Owner]: [task] by [date, with time zone]
- [Owner]: [task] by [date, with time zone]

Next meeting: [date and time, with time zone].

Please reply if I missed anything.
[Your name]` },
{ cat: `Emails`, t: `Say no kindly`, when: `Decline a request without damaging the relationship.`,
  text: `Hi [Name],

Thank you for thinking of me. I cannot take this on right now because [short honest reason, e.g. I am at capacity until Friday].

What I can do is [alternative: help next week / share a template / suggest someone else]. Would that work?

Best,
[Your name]` },
{ cat: `Emails`, t: `Ask for time off`, when: `Give notice early and offer coverage.`,
  text: `Hi [Manager],

Could I take [date or dates] off? I will finish my open tickets by [date] and hand over notes to [teammate] so nothing is missed.

Please let me know if that works or if you would like me to adjust.
Thanks,
[Your name]` },
{ cat: `Emails`, t: `Apologise for a delay`, when: `When you will miss a deadline: say it early, with a new date.`,
  text: `Hi [Name],

I want to let you know that [task] will be ready on [new date] instead of [old date]. The reason is [one-line honest reason]. I am sorry for the inconvenience.

In the meantime, [what you can share now]. I will confirm as soon as it is done.

Thank you for your patience,
[Your name]` },
{ cat: `Emails`, t: `Ask for feedback`, when: `After a project or at the end of your first month.`,
  text: `Hi [Name],

I would value your feedback on [project / my first month]. Could you share one thing I did well and one thing I could improve? Even a few lines would help me grow.

Thank you,
[Your name]` },
{ cat: `Emails`, t: `Ask for a raise or review`, when: `Book a meeting first, then bring evidence.`,
  text: `Hi [Manager],

Could we schedule 20 minutes to discuss my role and compensation? Over the last [period] I [result 1 with a number], [result 2], and completed [training]. I would like to talk about reflecting that in my pay and next steps.

Thank you,
[Your name]` },
{ cat: `Emails`, t: `Cold outreach to a professional`, when: `Short, specific, one easy question. Expect a reply from about one in three.`,
  text: `Hi [Name],

I read your post about [topic] and it helped me. I am training for [target role] and would love to ask two quick questions about how you started. Would you be open to a 15-minute chat or a short reply here?

Thank you either way,
[Your name]` },

/* ---------- Call scripts ---------- */
{ cat: `Call scripts`, t: `Opening a support call`, when: `First ten seconds. Warm, clear, then hand control to the customer.`,
  text: `"Thank you for calling [Company], this is [Name]. How can I help you today?"

After they explain:
"I am sorry about that, I can see why it is frustrating. Let me help. May I have your name and the email on the account?"` },
{ cat: `Call scripts`, t: `Putting a customer on hold`, when: `Always ask permission and give a time.`,
  text: `"May I place you on a brief hold while I check that? It should take about two minutes."

Coming back:
"Thank you for holding. I have the answer."` },
{ cat: `Call scripts`, t: `Verify identity`, when: `Follow your company process before sharing account details.`,
  text: `"To protect your account, I need to verify a few details. Could you confirm your full name, the email on the account and [security detail]?"

If it does not match:
"I am sorry, I cannot access the account without that. Here is how we can verify another way: [option]."` },
{ cat: `Call scripts`, t: `Calm an angry customer`, when: `Let them finish first, then use these three lines.`,
  text: `1. "Thank you for explaining. That should not have happened."
2. "Here is what I am going to do right now: [action]."
3. "I will [follow-up] by [time]. Does that work for you?"` },
{ cat: `Call scripts`, t: `Say no and offer options`, when: `Policy blocks you. Be clear, kind, and give a next step.`,
  text: `"I cannot [what you cannot do], because [one-sentence reason]. What I can do is [option A] or [option B]. Which would you prefer?"` },
{ cat: `Call scripts`, t: `Escalate or transfer a call`, when: `Hand over notes so the customer never repeats the story.`,
  text: `"This needs [team], who can [what they can do]. I will transfer you now and share my notes, so you will not need to repeat anything. If we get disconnected, I will call you at [number]."` },
{ cat: `Call scripts`, t: `Cannot hear or understand`, when: `Never guess. Clarifying is professional.`,
  text: `"I am sorry, the line is not clear on my side. Could you repeat that a little slower?"

"Just to confirm, did you say fifteen or fifty?"

"Let me read that back to make sure I have it right: [details]. Is that correct?"` },
{ cat: `Call scripts`, t: `Closing a call`, when: `Summarise, check, thank.`,
  text: `"To sum up, we [what you did] and you will [what happens next]. Is there anything else I can help with today?"

"Thank you for calling [Company], [Customer name]. Have a great day."` },
{ cat: `Call scripts`, t: `Voicemail to a customer or recruiter`, when: `Under 30 seconds. Say your number twice, slowly.`,
  text: `"Hi [Name], this is [Your name] from [Company] calling about [reason]. You can reach me at [number], that is [number repeated slowly]. I will also send an email. Thank you, and have a good day."` },

/* ---------- Interview ---------- */
{ cat: `Interview`, t: `60-second introduction`, when: `Present, past proof, future fit. Practise until it takes 60 seconds.`,
  text: `"I am a bilingual [role] who helps [type of customer] solve [type of problem] in English and Spanish.

Most recently, [one proof with a number, e.g. I resolved 20+ tickets a day with 96% satisfaction].

I am excited about [Company] because [specific reason], and I would like to bring [skill] to your team."` },
{ cat: `Interview`, t: `STAR answer`, when: `For any "tell me about a time" question. Use "I" for the action.`,
  text: `Situation: [one line: where and when]
Task: [one line: what was needed]
Action: [two or three lines: what I did, step by step]
Result: [one line with a number or clear outcome]
Lesson: [one line: what I would repeat or change]` },
{ cat: `Interview`, t: `Explain a gap or a career change`, when: `Under 20 seconds. Honest, no apology, finish on the future.`,
  text: `"I took time to [honest, short reason]. During that time I [training, project or certificate]. I am ready to work full time now and I am excited about this role."` },
{ cat: `Interview`, t: `Salary range answer`, when: `Give a researched range, tie it to the market, stay flexible.`,
  text: `"Based on similar roles and my experience, I am looking for [low] to [high]. I am flexible depending on the full package, including benefits and schedule."

When you receive an offer:
"Thank you, I am excited. Could I review it and reply by [tomorrow]?"` },
{ cat: `Interview`, t: `Questions to ask the interviewer`, when: `Always ask two or three. Avoid asking about pay first.`,
  text: `- What does success look like in the first 90 days?
- How is the team's performance measured?
- What does training look like?
- What is the biggest challenge the team faces right now?
- What are the working hours, and which time zones does the team cover?
- Is there anything about my background that gives you pause?` },
{ cat: `Interview`, t: `Handle a block or blank mind`, when: `A calm restart is professional. Nobody remembers it.`,
  text: `"Let me take a second to think about that."

"Let me restart that. What I wanted to say is [first sentence]."

"That is a good question. May I come back to it in a moment?"` },

/* ---------- Chat and Slack ---------- */
{ cat: `Chat and Slack`, t: `Ask for help without wasting time`, when: `Context, what you tried, a specific question.`,
  text: `Hi [Name], quick question on [topic]. I am trying to [goal]. I have tried [A] and [B], and I get [result or error]. Do you know what I might be missing? Happy to hop on a quick call if easier.` },
{ cat: `Chat and Slack`, t: `Daily async update`, when: `Post at the same time every day. Three lines.`,
  text: `Done today: [items]
Doing next: [items]
Blocked on: [item, and who could unblock it]` },
{ cat: `Chat and Slack`, t: `Out of office`, when: `Set before time off.`,
  text: `Hi, I am out of office from [date] to [date] with limited access. For urgent matters please contact [name] at [contact]. I will reply on [date]. Thank you!` },
{ cat: `Chat and Slack`, t: `Unblock a request across time zones`, when: `Saves a full day of waiting.`,
  text: `Hi [Name], I need a decision on [topic] by [time, with zone]. Option A: [short]. Option B: [short]. I recommend [A or B] because [reason]. If I do not hear back by then, I will proceed with [A or B]. Thanks!` },

/* ---------- Support writing ---------- */
{ cat: `Support writing`, t: `Ticket note`, when: `Write so a stranger could solve it tomorrow.`,
  text: `Problem: [customer's words]
Account / device: [details, version]
Steps tried: [1, 2, 3]
Result: [what happened]
Next step: [who does what by when]
Customer informed: [yes, how, when]` },
{ cat: `Support writing`, t: `Incident update`, when: `Facts, impact, actions, next update time. No blame.`,
  text: `At [time] some users could not [what]. We found [cause in plain words] and [action taken]. [Current status]. We will share the next update by [time, with zone].` },
{ cat: `Support writing`, t: `Refund explanation`, when: `Verify first, confirm the amount, be clear on timing.`,
  text: `Hi [Name], I have verified your account and can see [charge details]. I have issued a refund of [amount], which should appear within [timeframe] depending on your bank. I will follow up by [date] to confirm it arrived. Is there anything else I can help with?` },
{ cat: `Support writing`, t: `Knowledge base article`, when: `Title it like the customer's question.`,
  text: `Title: How do I [task]?
Summary: You can [task] in about [time].
What you need: [items]
Steps:
1. [Action]
2. [Action]
3. [Action]
If it does not work: [fix or who to contact]` },

/* ---------- Spanish ---------- */
{ cat: `Spanish`, t: `Saludo y verificación`, when: `Polite default with "usted".`,
  text: `"Gracias por llamar a [Empresa], le habla [Nombre]. ¿En qué puedo ayudarle?"

"Para continuar, ¿me confirma su nombre completo y su correo electrónico, por favor?"` },
{ cat: `Spanish`, t: `Espera, disculpa y cierre`, when: `Hold, apologise, close.`,
  text: `"Un momento, por favor. Voy a revisar su cuenta, serán unos minutos."

"Gracias por su paciencia. Disculpe la demora."

"¿Hay algo más en que pueda ayudarle? Que tenga un excelente día."` },
{ cat: `Spanish`, t: `Correo profesional`, when: `Warm but clear about dates and actions.`,
  text: `Asunto: [Tema]

Estimado/a [Nombre]:

Le escribo para [motivo]. [Detalle breve]. Quedo atento/a a su respuesta antes del [fecha].

Saludos cordiales,
[Su nombre]` },

/* ---------- Phrase banks ---------- */
{ cat: `Phrase banks`, t: `Ask for clarification`, when: `Keep these on a card beside your screen.`,
  text: `- Sorry, could you repeat that?
- Could you say that a little slower?
- Just to confirm, do you mean [x]?
- Could you give me an example?
- Could you spell that for me?
- I want to be sure I understood. You need [x] by [y], is that right?` },
{ cat: `Phrase banks`, t: `Soften a request or disagreement`, when: `Especially useful with UK and formal clients.`,
  text: `Requests: Would you mind...? / Could I possibly ask...? / I was wondering if...
Disagree: I see it a little differently. / Can I share another view? / I am not sure that will work because...
Suggest: Perhaps we could... / What if we...?` },
{ cat: `Phrase banks`, t: `Buy thinking time`, when: `Instead of "um". Pause, then speak.`,
  text: `- That is a good question. Let me think for a second.
- Let me make sure I answer that properly.
- I would say there are three things...
- The short answer is [x]. May I explain?` },
{ cat: `Phrase banks`, t: `Small-talk starters`, when: `FORD: Family, Occupation, Recreation, Dreams. Ask, listen, share one detail.`,
  text: `- How is your week going?
- Any plans for the weekend?
- Have you been working on anything fun lately?
- What do you do to unwind?
- Where are you based? How is the weather?
Follow-up: That sounds interesting, tell me more.` },
{ cat: `Phrase banks`, t: `Meeting phrases`, when: `Join, steer and close a discussion.`,
  text: `Join: Can I add something? / If I may...
Clarify: Just to clarify, are we saying...?
Agree: I agree, and I would add...
Move on: Shall we take that offline and move on?
Close: To recap: [decision], [owner], [date].` },
{ cat: `Phrase banks`, t: `Corporate jargon decoder`, when: `Understand it everywhere, use it sparingly.`,
  text: `circle back = return to it later
touch base = brief check-in
bandwidth = time and capacity
low-hanging fruit = easy wins
take it offline = discuss privately later
loop in = include someone
EOD = end of day
ETA = estimated time of arrival
OOO = out of office
KPI = key performance indicator
SLA = service level agreement` },
{ cat: `Phrase banks`, t: `IT support glossary`, when: `Explain each in one plain sentence.`,
  text: `DNS: turns website names into addresses.
IP address: a device's address on a network.
Router: sends traffic between your devices and the internet.
VPN: a private tunnel to a network.
MFA: a second proof of identity, like a phone code.
Cache: saved copies that speed things up; clearing it fixes some glitches.
Ticket: a record of a customer's issue.
Escalation: passing an issue to a more specialised team.` }
];
