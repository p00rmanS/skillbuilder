// More in-depth material (batch 2). Same schema as data4.js.
(() => {
const deep = (cid, idx, d) => { window.COURSES.find(c => c.id === cid).lessons[idx].deep = d; };

/* ================= INTERVIEW: remote setup ================= */
deep('interview', 3, {
  sections: [
    ['The 48-hour checklist', [
      `Two days before: confirm the time zone in the invitation, install or test the video app, and charge your devices. One day before: choose your spot, test your headset and camera, and prepare notes. One hour before: restart your computer, close other apps, silence your phone, put water nearby and open your CV and notes.`]],
    ['Your camera, light and sound', [
      `Put the camera at eye level so you look straight ahead, not down. Face a window or put a lamp behind the screen so light falls on your face, not behind you. A plain wall or a neat corner is enough. Use wired headphones if you can, because audio quality matters more than picture quality.`]],
    ['What to do if the technology fails', [
      `Internet drops: switch to your phone hotspot and rejoin, then say "Sorry about that, my connection dropped. Shall we continue?" Audio fails: type in the chat that you are reconnecting. Keep the interviewer's email or phone number from the invitation ready. Calm recovery is a skill employers like.`]],
    ['Notes that help without being obvious', [
      `Put a small sheet beside the camera with your intro, six story titles and three questions to ask. Glance for a second, then look back at the camera. Never read a full paragraph word for word.`]]
  ],
  script: ['Starting and recovering on a video interview', [
    ['Interviewer', 'Hi, can you hear and see me okay?'],
    ['You', 'Yes, I can hear you clearly, and I can see you. Thank you for having me.'],
    ['Interviewer', '(your audio cuts out)'],
    ['You', 'Sorry, my connection dropped for a moment. Could you repeat the last question, please?'],
    ['You', 'Thank you. (pause) Sure, I would be happy to answer that.']
  ]],
  mistakes: ['Testing the technology five minutes before the call.', 'Sitting with a bright window behind you.', 'Using laptop speakers, which causes echo.', 'Looking at your own face on screen the whole time.', 'Having notifications on.'],
  plan: ['Day 1: Pick your interview spot.', 'Day 2: Fix lighting and camera height.', 'Day 3: Test headset and record yourself for one minute.', 'Day 4: Test the video app and screen share.', 'Day 5: Prepare your notes sheet.', 'Day 6: Do a full dry run with a friend.', 'Day 7: Final tech check and rest.']
});

/* ================= FLUENCY ================= */
deep('fluency', 4, {
  sections: [
    ['Why phrasal verbs feel hard', [
      `The meaning of a phrasal verb often is not the sum of its parts. "Look up" can mean search for information, and "look into" means investigate. The fix is to stop translating each word and learn the whole phrase with a picture and a sentence.`]],
    ['Separable and inseparable', [
      `Some phrasal verbs can be split: "turn the printer off" and "turn off the printer" are both correct. If you use a pronoun, split it: "turn it off", never "turn off it". Others cannot be split: "look into the issue", "deal with the customer".`]],
    ['The core list for work', [
      `Start: set up, log in, log out, sign up, plug in, turn on, turn off, restart. Solve: figure out, look into, find out, check on, carry out. Communicate: follow up, get back to, reach out, bring up, point out, run through, wrap up. Learn only five at a time.`]]
  ],
  script: ['Phrasal verbs in a support call', [
    ['You', 'I will look into that for you right away.'],
    ['You', 'Could you turn the router off and then turn it back on?'],
    ['You', 'Let me figure out what is causing the error.'],
    ['You', 'I will get back to you by the end of the day.'],
    ['You', 'Thanks for reaching out. Let me run through the steps with you.']
  ]],
  mistakes: ['Learning a long list in one day.', 'Saying "turn off it" instead of "turn it off".', 'Translating them word by word.', 'Never using them aloud.'],
  plan: ['Day 1: Learn five setup phrasal verbs.', 'Day 2: Learn five solving verbs.', 'Day 3: Learn five communication verbs.', 'Day 4: Write a sentence for each.', 'Day 5: Say all fifteen aloud.', 'Day 6: Use five in a role-play.', 'Day 7: Review in the Review tab.']
});
deep('fluency', 5, {
  sections: [
    ['Why you understand reading better than listening', [
      `Spoken English connects words together: "want to" becomes "wanna", "going to" becomes "gonna", "what do you" becomes "whaddya". Your ear needs to hear this many times. It is training, not talent.`]],
    ['The four-pass method', [
      `Pass 1: listen for the main idea without stopping. Pass 2: listen with English subtitles and pause to note new phrases. Pass 3: listen without subtitles. Pass 4: shadow, speaking along a half-second behind the speaker. Use one two-minute clip for the whole week.`]],
    ['What to listen to', [
      `Choose content close to your goals: customer support call examples, tech explainers, interviews and podcasts about work. Interesting content keeps you coming back, which matters more than the perfect source.`]],
    ['Dictation for accuracy', [
      `Pause every sentence and write what you hear. Compare with the transcript. The words you missed are the exact sounds your ear needs to learn.`]]
  ],
  script: ['Connected speech to notice', [
    ['Written', 'What are you going to do?'],
    ['Often heard', 'Whatcha gonna do?'],
    ['Written', 'Could you send it to me?'],
    ['Often heard', 'Couldja send it tuh me?'],
    ['Written', 'I want to check it.'],
    ['Often heard', 'I wanna check it.']
  ]],
  mistakes: ['Only listening passively in the background.', 'Starting with content that is too fast and too hard.', 'Skipping shadowing.', 'Reading subtitles in your first language.'],
  plan: ['Day 1: Choose a 2-minute clip.', 'Day 2: Pass 1 and Pass 2.', 'Day 3: Pass 3 and note phrases.', 'Day 4: Dictate the first 5 sentences.', 'Day 5: Shadow one minute.', 'Day 6: Shadow and record yourself.', 'Day 7: Compare your recording with the original.']
});
deep('fluency', 6, {
  sections: [
    ['Articles in practice', [
      `Use "a" or "an" for one of many things you mention for the first time: "I have a problem." Use "the" when both of you know which one: "The printer is offline." No article for general plurals and uncountable ideas: "I like music", "We need information."`]],
    ['Prepositions of time and place', [
      `Time: on Monday, on March 3, at 3 pm, at night, in the morning, in March, in 2026. Place: at the office, in the building, on the screen, on the phone. Learn them as chunks, not rules.`]],
    ['Present perfect versus past simple', [
      `Use present perfect for experience or something that connects to now: "I have worked in support for two years." Use past simple for a finished time: "I worked there in 2022." If you give a finished time like yesterday or last year, use past simple.`]],
    ['Third person -s and plural -s', [
      `He works. She fixes. It does. Plurals: one file, two files. Spanish and Tagalog speakers often drop these endings in fast speech, so slow down and say the final sound.`]]
  ],
  script: ['Correct these sentences aloud', [
    ['Weak', 'I need help with problem on my computer.'],
    ['Strong', 'I need help with a problem on my computer.'],
    ['Weak', 'I am working here since 2024.'],
    ['Strong', 'I have been working here since 2024.'],
    ['Weak', 'She work from home.'],
    ['Strong', 'She works from home.']
  ]],
  mistakes: ['Dropping articles when you are nervous.', 'Using "since" with a period (for two years) instead of "for".', 'Skipping the -s ending.', 'Over-correcting while speaking and losing flow.'],
  plan: ['Day 1: Study articles and make 5 sentences.', 'Day 2: Study prepositions of time and place.', 'Day 3: Practise present perfect with your work history.', 'Day 4: Practise third person -s.', 'Day 5: Proofread an email aloud.', 'Day 6: Record a one-minute story and check endings.', 'Day 7: Review your mistakes list.']
});

/* ================= CULTURE ================= */
deep('culture', 2, {
  sections: [
    ['How to learn idioms without memorising lists', [
      `Learn an idiom when you meet it. Write the situation, the meaning and a picture. Then use it twice in the next two days. A list of 100 idioms you never use is useless; ten you use daily become yours.`]],
    ['Idioms you will hear in meetings', [
      `"Let's table this" can mean postpone or discuss now depending on context, so ask. "Low-hanging fruit" is an easy win. "Move the needle" means make real progress. "Bandwidth" means time and energy. "Deep dive" means a detailed look. "Take it offline" means discuss it separately.`]],
    ['Idioms with customers', [
      `"I'm happy to help." "No problem at all." "Bear with me." "Let me loop in my team." "We're on it." Customers hear warmth in these phrases, so they are worth using naturally.`]],
    ['What to do when you do not understand', [
      `Say: "Sorry, what does that mean?" or "Could you explain that idiom?" Asking is normal. Most people enjoy explaining.`]]
  ],
  script: ['An idiom-filled meeting', [
    ['Manager', 'Let us start with the low-hanging fruit and then take the bigger issues offline.'],
    ['You', 'Sorry, could you explain low-hanging fruit?'],
    ['Manager', 'It means the easy tasks we can finish quickly.'],
    ['You', 'Got it. I can finish the password reset guide today. That should be an easy win.'],
    ['Manager', 'Perfect, that moves the needle for us.']
  ]],
  mistakes: ['Using idioms you do not understand.', 'Pretending you understood.', 'Using too many idioms in one sentence.', 'Translating idioms literally from another language.'],
  plan: ['Day 1: Learn 3 meeting idioms.', 'Day 2: Learn 3 customer idioms.', 'Day 3: Use two aloud.', 'Day 4: Watch a show and note two new ones.', 'Day 5: Add pictures to your idiom cards.', 'Day 6: Use three in a role-play.', 'Day 7: Review.']
});
deep('culture', 3, {
  sections: [
    ['The first 10 seconds', [
      `Customers form an opinion quickly. Smile before you speak, even on the phone. Say the company, your name and an offer to help: "Thank you for calling Acme Support, this is [name]. How can I help you today?"`]],
    ['Speaking style that works', [
      `Use a friendly, steady tone. Say "absolutely", "of course" and "I'd be happy to". Avoid "no problem" if the customer is upset, because "I'm happy to help" sounds warmer. Use their name once or twice, not every sentence.`]],
    ['Writing chat messages', [
      `Short, warm and clear: "Hi Maria, thanks for reaching out! I'm sorry about the trouble. Could you tell me what error you see?" One question at a time. Avoid all capital letters and avoid long blocks of text.`]],
    ['Holds, transfers and goodbyes', [
      `Ask before putting someone on hold: "May I put you on a brief hold while I check?" Thank them when you return: "Thank you for holding." For transfers, explain who and why. Close with: "Is there anything else I can help you with today? Thank you for contacting us, have a great day!"`]]
  ],
  script: ['A warm call open and hold', [
    ['You', 'Thank you for calling Acme Support, this is [name]. How can I help you today?'],
    ['Customer', 'My order has not arrived.'],
    ['You', 'I am sorry about that. I would be happy to look into it. May I have your order number, please?'],
    ['You', 'Thank you. May I put you on a brief hold while I check?'],
    ['You', 'Thank you for holding. I found the issue and I will fix it now.']
  ]],
  mistakes: ['Speaking too quickly when nervous.', 'Not asking permission before a hold.', 'Using slang with a stranger.', 'Typing in all capital letters.'],
  plan: ['Day 1: Write your greeting and closing.', 'Day 2: Practise the hold script.', 'Day 3: Practise the apology line.', 'Day 4: Role-play an order problem.', 'Day 5: Write three chat replies.', 'Day 6: Record a full practice call.', 'Day 7: Review tone and pace.']
});
deep('culture', 4, {
  sections: [
    ['Sports without being a fan', [
      `You do not need to know the rules. Learn the season: American football (September to February), basketball (October to June), baseball (April to October). Useful lines: "Did you watch the game?" "Who are you rooting for?" "I'm new to the game. What should I know?"`]],
    ['Holidays and what people talk about', [
      `Thanksgiving (fourth Thursday in November): family, food, travel. Halloween (October 31): costumes and candy. Fourth of July: barbecues and fireworks. Christmas and New Year: plans, gifts and resolutions. Ask "Any plans for the holiday?"`]],
    ['Food, coffee and tipping', [
      `Coffee is part of daily life: "Want to grab a coffee?" is friendly, not romantic. In restaurants, tipping 15 to 20 percent is normal. "Brunch" is a late breakfast and lunch on weekends.`]],
    ['Share your own culture', [
      `Talking about Filipino food, family traditions, holidays and languages makes you interesting. Explain with simple examples: "Adobo is chicken or pork cooked in vinegar and soy sauce." People love learning from you.`]]
  ],
  script: ['Swapping culture in small talk', [
    ['Coworker', 'Any plans for Thanksgiving?'],
    ['You', 'We are cooking together as a family. I am still learning about Thanksgiving. What do you usually do?'],
    ['Coworker', 'Turkey, pie, and a lot of football!'],
    ['You', 'That sounds fun. In the Philippines, Christmas is a very big celebration. We start in September!'],
    ['Coworker', 'Really? Tell me more.']
  ]],
  mistakes: ['Pretending to be a fan and getting caught.', 'Asking personal money questions.', 'Only answering and never asking.', 'Hiding your own culture.'],
  plan: ['Day 1: Learn the sports seasons.', 'Day 2: Learn three holiday facts.', 'Day 3: Prepare two Filipino culture stories.', 'Day 4: Practise three small-talk questions.', 'Day 5: Use one in real life.', 'Day 6: Use two.', 'Day 7: Reflect in your journal.']
});

/* ================= SUPPORT ================= */
deep('support', 2, {
  sections: [
    ['Build a work day structure', [
      `Start and stop at fixed times. Begin with a five-minute routine: water, stretch, check schedule, open tools. Work in blocks with short breaks. End with a shutdown: update notes, write tomorrow's top three tasks, close the laptop.`]],
    ['Your workspace', [
      `A fixed desk or corner, a decent chair, a headset with a microphone, good light and a quiet background. Keep a backup internet plan such as a phone hotspot and know the outage steps for your employer.`]],
    ['Written communication for remote teams', [
      `Write messages that can be understood without a meeting: context, ask, deadline. Example: "Customer Maria cannot log in after a reset. I need access to the account logs by 3 pm to continue. Thanks!" Over-communicate progress in short updates.`]],
    ['Avoiding burnout and isolation', [
      `Take lunch away from the screen, walk daily, keep a hard stop time and join a remote team chat or community. Tell your manager early if you feel overwhelmed.`]]
  ],
  script: ['An end-of-day update message', [
    ['You', 'End of day update: I handled 22 tickets today. Two are waiting for customer replies.'],
    ['You', 'One issue with the billing page needs engineering help. I wrote the details in ticket 4821.'],
    ['You', 'Tomorrow I will follow up on those two tickets and finish the training module.']
  ]],
  mistakes: ['Working from the bed.', 'Never taking breaks.', 'Writing vague messages.', 'Hiding problems until they grow.'],
  plan: ['Day 1: Set your work hours.', 'Day 2: Set up your workspace.', 'Day 3: Write a morning routine.', 'Day 4: Write a shutdown routine.', 'Day 5: Write one update message.', 'Day 6: Test your backup internet.', 'Day 7: Review what works.']
});
deep('support', 3, {
  sections: [
    ['Why documentation is your career capital', [
      `Good notes save time, protect you in disputes and show professionalism. Teams promote people whose tickets others can understand without asking questions.`]],
    ['The anatomy of a great ticket', [
      `Summary: one line. Customer and contact details. Steps to reproduce. What you tried and the result of each step. Current status. Next action and owner. Add screenshots with captions, and exact error text.`]],
    ['Writing style', [
      `Use facts, not feelings: "Customer reports error 403" not "Customer is confused". Use simple present or past tense and short sentences. Avoid acronyms nobody knows, and define any you must use.`]],
    ['Knowledge base articles', [
      `When you solve a problem three times, write a short guide: Problem, Cause, Fix in numbered steps, and When to escalate. This shows leadership.`]]
  ],
  script: ['A clear ticket note', [
    ['Summary', 'Customer cannot print from laptop to office printer.'],
    ['Steps tried', '1. Restarted printer and laptop. 2. Reinstalled driver. 3. Printed a test page successfully.'],
    ['Result', 'Printing works. Cause: outdated driver.'],
    ['Next step', 'Customer will confirm tomorrow. I will close the ticket if there is no reply.']
  ]],
  mistakes: ['Writing "fixed" with no explanation.', 'Mixing opinions and facts.', 'Forgetting to record the cause.', 'Leaving the ticket without an owner.'],
  plan: ['Day 1: Study three good ticket examples.', 'Day 2: Write a ticket for a past problem.', 'Day 3: Rewrite it shorter.', 'Day 4: Write a knowledge base article.', 'Day 5: Ask a friend to follow your steps.', 'Day 6: Fix unclear parts.', 'Day 7: Save it to your portfolio.']
});
deep('support', 4, {
  sections: [
    ['Metrics in plain language', [
      `CSAT is a score customers give after a contact. FCR is the percent of issues solved on the first contact. AHT is the average time you spend per contact. QA score is the quality review of your calls or chats, checking greeting, accuracy, empathy and closing.`]],
    ['Balancing speed and quality', [
      `Do not rush at the cost of the customer. A fast but unresolved call creates a repeat contact, which hurts FCR. A slow but kind and accurate call can still be excellent. Improve speed by preparing notes, mastering your tools and using saved replies.`]],
    ['Use metrics in your career story', [
      `In interviews and CV bullets, use numbers: "Maintained a 96% CSAT over six months." "Resolved 85% of tickets on first contact." "Wrote 12 help articles that reduced repeat tickets."`]]
  ],
  script: ['A CV bullet and interview line', [
    ['CV', 'Resolved 85% of customer issues on first contact while maintaining 96% satisfaction.'],
    ['Interview', 'I focus on first-contact resolution because it saves customers time and reduces repeat contacts.']
  ]],
  mistakes: ['Rushing customers to reduce handle time.', 'Not asking for feedback.', 'Ignoring QA feedback.', 'Not tracking your own results.'],
  plan: ['Day 1: Learn the four metrics.', 'Day 2: Write what each means for you.', 'Day 3: Review one call or chat.', 'Day 4: Find one time-saver.', 'Day 5: Write two CV bullets with numbers.', 'Day 6: Say them aloud.', 'Day 7: Review your week.']
});

/* ================= PUBLIC SPEAKING ================= */
deep('speak', 1, {
  sections: [
    ['Pick one message', [
      `Write one sentence: "After this talk, the audience will ___." Then write two reasons why it matters to them. Everything in the talk either supports this sentence or gets cut.`]],
    ['Four structures you can reuse', [
      `Problem, solution, action. Past, present, future. What, why, how. Three points with an example each. Choose one and stay with it. Audiences relax when they can feel where you are going.`]],
    ['Openings and closings', [
      `Openers: a short story, a surprising number, a question, or a bold statement. Closers: repeat your message, give a clear action, pause and say thank you. Never end with "that's all I have".`]],
    ['Signposting', [
      `Tell people where you are: "First, ... Second, ... Finally, ..." and say "The key point is ..." for the line you want remembered.`]]
  ],
  script: ['A two-minute talk skeleton', [
    ['Hook', 'Last week, I spent three hours fixing a problem that should have taken ten minutes.'],
    ['Point', 'Today I want to share one habit that prevents that.'],
    ['Proof', 'First, ask what changed. Second, test one thing at a time. Third, write down the fix.'],
    ['Action', 'This week, try asking what changed before you touch anything.'],
    ['Close', 'Ask first, change second. Thank you.']
  ]],
  mistakes: ['Trying to cover five ideas.', 'Memorising the whole talk word by word.', 'Starting with an apology.', 'Ending with questions only.'],
  plan: ['Day 1: Write your one message.', 'Day 2: Choose a structure.', 'Day 3: Write the opening and closing.', 'Day 4: Add three proof points.', 'Day 5: Say it aloud and time it.', 'Day 6: Cut 20 percent.', 'Day 7: Record the final version.']
});
deep('speak', 2, {
  sections: [
    ['Pace: slower than you think', [
      `A comfortable pace is about 130 to 160 words per minute. Nervous speakers rush to 180 or more. Slow down on numbers, names and key points. Speed up slightly on stories.`]],
    ['Pause with purpose', [
      `Pause after a key point so it lands, before a surprise so it builds, and between topics so the audience can follow. A pause of two seconds feels like ten to you and is perfect for the listener.`]],
    ['Energy and pitch', [
      `A monotone voice makes any message sound boring. Emphasise key words, raise your pitch for questions and excitement, and lower it at the end of statements for authority.`]],
    ['Breath and posture', [
      `Stand tall, feet apart, and breathe from your belly. Finish your breath before the sentence runs out. Take a breath at every punctuation mark.`]]
  ],
  script: ['Read with marked pauses and stress (/ = pause)', [
    ['Practice', 'Our customers do not want / a fast answer. / They want / a CORRECT answer / delivered with CARE.'],
    ['Practice', 'The three steps are simple. / FIRST, / check the power. / SECOND, / restart the device. / THIRD, / test again.']
  ]],
  mistakes: ['Speaking in one long breath.', 'Rising tone at the end of every sentence.', 'Reading with no pauses.', 'Whispering to avoid mistakes.'],
  plan: ['Day 1: Measure your pace.', 'Day 2: Practise pauses on a paragraph.', 'Day 3: Practise stress on key words.', 'Day 4: Practise falling tone on statements.', 'Day 5: Record and compare to Day 1.', 'Day 6: Practise with a friend listening.', 'Day 7: Final recording.']
});
deep('speak', 3, {
  sections: [
    ['Stand like you belong', [
      `Feet shoulder width apart, weight even, shoulders relaxed, chin level. Plant yourself when making a key point. Move only to change topic or to include another part of the room.`]],
    ['Gestures that help', [
      `Keep gestures between waist and shoulder and use them to show size, number or direction. Drop your hands completely during pauses. Avoid pointing, fidgeting and hiding your hands.`]],
    ['Face and eyes', [
      `Smile at the start and when it fits. Match your expression to your words. For eye contact, finish a full thought with one person before moving to the next.`]],
    ['Online presence', [
      `Look into the camera for key points, sit up straight, and keep your hands visible for natural gestures. Raise your energy a little because video flattens you.`]]
  ],
  script: ['Pair your words with movement', [
    ['Words', 'We have three options.'],
    ['Body', 'Hold up three fingers.'],
    ['Words', 'The first one is small.'],
    ['Body', 'Show a small gap with your hands.'],
    ['Words', 'The last one is the best.'],
    ['Body', 'Pause, look at the audience, open palm.']
  ]],
  mistakes: ['Swaying side to side.', 'Pacing constantly.', 'Looking at the floor or the slides.', 'Crossing arms tightly.'],
  plan: ['Day 1: Film 60 seconds and watch on mute.', 'Day 2: Fix your stance.', 'Day 3: Plan three gestures.', 'Day 4: Practise one thought per person.', 'Day 5: Film again.', 'Day 6: Compare Day 1 and Day 5.', 'Day 7: Practise on a video call.']
});

/* ================= CONFIDENCE ================= */
deep('conf', 1, {
  sections: [
    ['How exposure works', [
      `When you avoid a feared situation, you feel relief, and your brain learns the situation was dangerous. When you face it in small steps, anxiety rises and then falls, and your brain learns you can cope. Repeated gentle exposure retrains the alarm.`]],
    ['Building your speaking ladder', [
      `Rate situations from 1 (easy) to 10 (scary). Example: 2 talk to a friend, 3 voice message, 4 ask a stranger for directions, 5 speak in a small group, 6 mock interview with a friend, 7 real phone call, 8 meeting update, 9 job interview, 10 presentation. Start at 3 or 4.`]],
    ['Rules of good exposure', [
      `Choose a step that is uncomfortable but possible. Stay until your anxiety drops a little. Repeat the same step three times before moving up. Log your anxiety before and after, and note what actually happened.`]],
    ['What to do when a step goes badly', [
      `Treat it as data. Repeat the same step, or drop one step lower and rebuild. Do not conclude that you cannot do it. Skill grows through repetition, not perfection.`]]
  ],
  script: ['A confidence log entry', [
    ['Step', 'Ask a stranger for directions.'],
    ['Before', 'Anxiety 5 out of 10. I expected to stumble.'],
    ['What happened', 'I asked clearly and the person smiled. I had one small pause.'],
    ['After', 'Anxiety 2 out of 10. I can do this again.']
  ]],
  mistakes: ['Jumping straight to the scariest step.', 'Leaving a step at peak anxiety.', 'Doing a step only once.', 'Not recording progress.'],
  plan: ['Day 1: Write your ladder.', 'Day 2: Do a level 3 step.', 'Day 3: Repeat it.', 'Day 4: Do a level 4 step.', 'Day 5: Repeat it.', 'Day 6: Try a level 5 step.', 'Day 7: Review your log.']
});
deep('conf', 2, {
  sections: [
    ['Why recovery matters more than perfection', [
      `Audiences watch how you handle a slip. Calm recovery builds trust. Panic or long apologies draw attention to a small error nobody would have remembered.`]],
    ['The three-step recovery', [
      `Pause and breathe. Say a reset phrase: "Let me restate that." Continue with your next point. The whole recovery takes five seconds.`]],
    ['When you blank completely', [
      `Repeat your last sentence, look at your notes card, or say: "Let me gather my thoughts." Keep a one-line outline card within sight. Remember the spotlight effect: you notice your mistakes far more than anyone else does.`]],
    ['After the talk', [
      `Name one thing that went well and one thing to improve. Avoid replaying every mistake. Write it down and move on.`]]
  ],
  script: ['Recovery phrases to practise', [
    ['You', 'Let me restate that more clearly.'],
    ['You', 'Give me a second to collect my thoughts.'],
    ['You', 'Let me come back to that point in a moment.'],
    ['You', 'Great question, let me think about the best way to answer it.']
  ]],
  mistakes: ['Apologising again and again.', 'Rushing to fill silence.', 'Staying silent for too long without a reset phrase.', 'Judging yourself harshly afterwards.'],
  plan: ['Day 1: Memorise three reset phrases.', 'Day 2: Practise them aloud.', 'Day 3: Deliver a talk and deliberately forget a line.', 'Day 4: Recover with a phrase.', 'Day 5: Repeat with a friend.', 'Day 6: Write a one-line outline card.', 'Day 7: Reflect in your journal.']
});
deep('conf', 3, {
  sections: [
    ['Why people stay quiet and how to break it', [
      `Silence feels safe but makes the next attempt harder. The longer you wait, the more pressure builds. Speak within the first ten minutes, even briefly.`]],
    ['Prepared contributions', [
      `Before the meeting, read the agenda and write one question and one comment. A question is the easiest start: "Could you clarify the timeline?" or "How will this affect support requests?"`]],
    ['Starter phrases', [
      `"I would like to add..." "One thing I noticed is..." "Building on what Maria said..." "Can I ask a quick question?" They give you a smooth first sentence.`]],
    ['Handling interruptions and fast talkers', [
      `Raise your hand slightly or say "May I finish my point?" Calm and polite is enough. In video meetings, use the chat and say "I will add my comment in the chat."`]]
  ],
  script: ['Speaking up in a meeting', [
    ['Manager', 'Any thoughts on the new process?'],
    ['You', 'Yes, one thing I noticed is that customers often ask about the refund step.'],
    ['You', 'It might help to add a short guide. I can draft one by Friday.'],
    ['Manager', 'That would be great. Thanks.']
  ]],
  mistakes: ['Waiting until the end.', 'Rehearsing a long speech.', 'Apologising before speaking.', 'Giving up after one interruption.'],
  plan: ['Day 1: Choose a meeting.', 'Day 2: Write a question and a comment.', 'Day 3: Practise starter phrases.', 'Day 4: Speak within the first ten minutes.', 'Day 5: Support a colleague aloud.', 'Day 6: Send a follow-up message.', 'Day 7: Count your contributions.']
});

/* ================= ARTICULATION ================= */
deep('artic', 0, {
  sections: [
    ['Why fillers appear', [
      `Fillers like um, uh, like and you know hold your turn while your brain finds the next words. They are strongest when you are unsure, tired or translating. Reducing them is about thinking in shorter chunks, not about willpower.`]],
    ['Measure before you fix', [
      `Record two minutes of talking. Count fillers and divide by minutes. Under three per minute is fine. Also notice where they appear: usually at the start of sentences and before key words.`]],
    ['Replacement strategies', [
      `Replace fillers with a silent pause and a breath. Start sentences with a deliberate connector: "First", "Next", "For example". Slow down a little so you can plan one phrase ahead.`]],
    ['Prepared transitions', [
      `Memorise four transitions: "Let me explain.", "For example,", "The next point is...", "To summarise,". Use them every time you feel a filler coming.`]]
  ],
  script: ['From fillers to pauses', [
    ['Before', 'So, um, I think, like, we should, you know, update the page.'],
    ['After', 'I think we should update the page. (pause) The reason is simple.']
  ]],
  mistakes: ['Trying to stop all fillers at once.', 'Speaking faster to avoid them.', 'Being embarrassed by silence.', 'Never recording yourself.'],
  plan: ['Day 1: Record and count fillers.', 'Day 2: Practise silent pauses.', 'Day 3: Learn four transitions.', 'Day 4: Record a second sample.', 'Day 5: Ask a friend to signal fillers.', 'Day 6: Practise on a call.', 'Day 7: Compare counts.']
});
deep('artic', 1, {
  sections: [
    ['The anatomy of clear speech', [
      `Clarity comes from breath, voice, tongue, lips and jaw working together. Tension anywhere reduces clarity. Warm-ups release tension and wake up the muscles you will use.`]],
    ['A five-minute routine', [
      `Yawn and stretch the jaw. Lip trills for 30 seconds. Hum up and down. Tongue circles inside your mouth, five each way. Then say tongue twisters slowly and precisely, and gradually faster.`]],
    ['Common sound challenges', [
      `For Filipino and Spanish speakers, common challenges include th (think, this), v and b, f and p, short i versus long ee (ship, sheep), final consonants and the s sound at the start of words like "school". Pick one per week.`]],
    ['Drill with minimal pairs', [
      `Practise pairs that differ by one sound: ship and sheep, fan and pan, berry and very, think and sink. Record yourself and ask: could a listener tell them apart?`]]
  ],
  script: ['Minimal pairs to say slowly', [
    ['Practice', 'ship, sheep, ship, sheep'],
    ['Practice', 'very, berry, very, berry'],
    ['Practice', 'fan, pan, fan, pan'],
    ['Practice', 'think, sink, think, sink']
  ]],
  mistakes: ['Skipping warm-ups.', 'Practising only fast.', 'Practising too many sounds at once.', 'Not listening to a model.'],
  plan: ['Day 1: Do the five-minute routine.', 'Day 2: Choose one sound.', 'Day 3: Practise minimal pairs.', 'Day 4: Practise in sentences.', 'Day 5: Record and compare.', 'Day 6: Use the sound in conversation.', 'Day 7: Choose the next sound.']
});
deep('artic', 2, {
  sections: [
    ['Why answer-first speaking sounds smart', [
      `People listen better when they know the point. Starting with the answer lowers listener effort, reduces your rambling, and gives you a clear path for the rest of your reply.`]],
    ['PREP and other frames', [
      `PREP: Point, Reason, Example, Point. Another frame: Answer, Why, Next step. For updates: Status, Issue, Plan. Use the same frame so your brain does not have to invent a structure every time.`]],
    ['Bottom line up front at work', [
      `Instead of "So, yesterday I checked the logs and then I saw...", say "The outage was caused by an expired certificate. I renewed it and the service is back. Here is how we will prevent it."`]],
    ['Recovering when you ramble', [
      `Stop, breathe, and say: "To summarise, ..." and give your point again in one sentence. It feels dramatic to you and sounds confident to listeners.`]]
  ],
  script: ['PREP in action', [
    ['Question', 'Should we change the support schedule?'],
    ['Point', 'Yes, I recommend adding one extra agent on Mondays.'],
    ['Reason', 'Monday has the highest ticket volume.'],
    ['Example', 'Last Monday, customers waited an average of 22 minutes.'],
    ['Point', 'So adding one agent would reduce waiting time.']
  ]],
  mistakes: ['Starting with the background story.', 'Giving three points when one is enough.', 'Not stopping after the answer.', 'Forgetting to restate the point.'],
  plan: ['Day 1: Learn the PREP letters.', 'Day 2: Answer five daily questions with PREP.', 'Day 3: Write one answer-first work update.', 'Day 4: Record a 45-second PREP answer.', 'Day 5: Use it in a real conversation.', 'Day 6: Do five rapid-fire PREP answers.', 'Day 7: Review recordings.']
});

/* ================= STORYTELLING ================= */
deep('story', 0, {
  sections: [
    ['The story spine step by step', [
      `Once upon a time (the normal world). Every day (the routine). Until one day (the change). Because of that (consequence 1). Because of that (consequence 2). Until finally (the resolution). And ever since then (what is different now). Use it to shape any experience.`]],
    ['Where to find stories', [
      `Small moments are best: a customer who surprised you, a mistake that taught you, the first time you spoke in English at work. Keep a notebook with one story idea a day.`]],
    ['The point of the story', [
      `Every story needs a reason to be told. Finish with one sentence that connects it to your audience: "That is why I always ask one more question before I fix a problem."`]]
  ],
  script: ['A 60-second story using the spine', [
    ['Once upon a time', 'I started a support job and was afraid of phone calls.'],
    ['Every day', 'I let chat tickets pile up so I would not have to call.'],
    ['Until one day', 'A customer needed urgent help and chat was not enough.'],
    ['Because of that', 'I took a deep breath and called.'],
    ['Finally', 'The call took four minutes and solved everything.'],
    ['So what', 'Now I call first when a problem is urgent.']
  ]],
  mistakes: ['Starting with too much background.', 'Skipping the change or conflict.', 'Having no point.', 'Making it too long.'],
  plan: ['Day 1: Write three story ideas.', 'Day 2: Spine story one.', 'Day 3: Tell it aloud in 60 seconds.', 'Day 4: Spine story two.', 'Day 5: Tell it to a friend.', 'Day 6: Spine story three.', 'Day 7: Record your best story.']
});
deep('story', 1, {
  sections: [
    ['Show, do not tell', [
      `Telling: "I was nervous." Showing: "My hands were cold and my voice felt too small for the room." Specific detail lets listeners feel the moment themselves.`]],
    ['Use senses and dialogue', [
      `Add one sound, one image and one feeling. Quote one line of speech. Dialogue makes the scene alive and breaks long narration.`]],
    ['Raise the stakes', [
      `What was at risk? A job, a friendship, a deadline, a reputation? If nothing is at risk, listeners drift. Say the stakes in one sentence early.`]],
    ['Edit for the ear', [
      `Spoken stories need short sentences. Remove side details that do not lead to the point. Practise aloud and cut anything you trip over.`]]
  ],
  script: ['Before and after adding detail', [
    ['Before', 'I had a difficult customer and I fixed the problem.'],
    ['After', 'A customer shouted, "This is the third time!" My stomach dropped. I took a breath, said "I am sorry, I will fix this now," and found the cause in five minutes.']
  ]],
  mistakes: ['Using general words like "difficult" and "nice".', 'Adding too many details.', 'Forgetting the stakes.', 'Never practising aloud.'],
  plan: ['Day 1: Pick one story.', 'Day 2: Add three details.', 'Day 3: Add one line of dialogue.', 'Day 4: Add the stakes.', 'Day 5: Cut 20 percent.', 'Day 6: Tell it aloud.', 'Day 7: Record it.']
});
deep('story', 2, {
  sections: [
    ['STAR in more depth', [
      `Situation: one or two sentences. Task: your responsibility or the problem. Action: three to four specific steps you took, in order. Result: a measurable outcome plus what you learned. Aim for 60 to 90 seconds.`]],
    ['Choosing the right story', [
      `Match the story to the skill the interviewer is testing: communication, teamwork, problem solving, initiative or handling pressure. Keep a story bank with tags.`]],
    ['Quantify results', [
      `Numbers make results real: time saved, tickets solved, satisfaction scores, money saved, people helped. If you do not have numbers, estimate honestly: "about 30 percent faster".`]],
    ['Avoid common STAR traps', [
      `Do not spend half the time on the situation. Do not use "we" for everything. Do not end without the result or learning.`]]
  ],
  script: ['STAR example', [
    ['Situation', 'Our team had a growing backlog of unanswered tickets.'],
    ['Task', 'I was asked to find a way to reduce waiting time.'],
    ['Action', 'I grouped similar tickets, wrote five reusable replies, and shared them with the team.'],
    ['Result', 'Average response time dropped from 6 hours to 3, and customer satisfaction rose by five points.'],
    ['Learning', 'I learned that small tools can save everyone time.']
  ]],
  mistakes: ['Too much situation detail.', 'No numbers.', 'Everything is "we".', 'No learning.'],
  plan: ['Day 1: List five proud moments.', 'Day 2: Write them in STAR.', 'Day 3: Add numbers.', 'Day 4: Cut to 90 seconds.', 'Day 5: Say two aloud.', 'Day 6: Say the other three.', 'Day 7: Tag them by skill.']
});

/* ================= LISTENING ================= */
deep('listen', 0, {
  sections: [
    ['Levels of listening', [
      `Level 1: waiting to speak. Level 2: hearing words. Level 3: understanding meaning. Level 4: noticing feelings and needs. Aim for levels 3 and 4, especially with customers.`]],
    ['Techniques', [
      `Paraphrase: "So the main issue is the delay, right?" Label feelings: "It sounds frustrating." Summarise: "Let me check I have everything: ..." Use minimal encouragers: "mm", "I see", "go on".`]],
    ['Barriers to good listening', [
      `Rehearsing your reply, judging, being distracted by notifications, finishing people's sentences and assuming you know. Notice which of these you do most.`]],
    ['Listening in a second language', [
      `If you miss a word, ask: "Sorry, could you repeat that?" or "Did you say X or Y?" Repeat numbers and names back. Asking is a sign of care, not weakness.`]]
  ],
  script: ['A paraphrase and feeling label', [
    ['Customer', 'I have been waiting for two weeks and nobody told me anything!'],
    ['You', 'I understand. You have been waiting two weeks without updates, and that sounds really frustrating.'],
    ['You', 'Let me check the status right now. Is that okay?']
  ]],
  mistakes: ['Interrupting.', 'Checking your phone.', 'Giving advice before understanding.', 'Pretending to understand.'],
  plan: ['Day 1: Notice your listening barrier.', 'Day 2: Paraphrase once.', 'Day 3: Paraphrase three times.', 'Day 4: Label one feeling.', 'Day 5: Summarise a conversation.', 'Day 6: Ask for a repeat politely.', 'Day 7: Reflect.']
});
deep('listen', 1, {
  sections: [
    ['Open versus closed questions', [
      `Closed questions get yes or no. Open questions get explanations: what, how, tell me about. Use closed questions to confirm facts and open questions to learn.`]],
    ['The follow-up ladder', [
      `After an answer, use one of: "Can you tell me more?", "What happened next?", "How did that feel?", "What did you try?" Three follow-ups turn small talk into a real conversation.`]],
    ['Diagnostic questions for support', [
      `"When did it start?", "What changed recently?", "What exactly do you see on the screen?", "Does it happen every time?" These save time and avoid wrong guesses.`]],
    ['The power of silence', [
      `After you ask, wait three seconds. People often add the most important detail after a pause. Do not rush to fill the silence.`]]
  ],
  script: ['Follow-up ladder', [
    ['You', 'What did you do last weekend?'],
    ['Other', 'I went hiking.'],
    ['You', 'Nice! Where did you go?'],
    ['Other', 'A trail near the coast.'],
    ['You', 'What was the best part?']
  ]],
  mistakes: ['Asking leading questions.', 'Asking several questions at once.', 'Interrupting the answer.', 'Not listening to the answer.'],
  plan: ['Day 1: Write five open questions.', 'Day 2: Use two in conversation.', 'Day 3: Ask three follow-ups.', 'Day 4: Practise diagnostic questions.', 'Day 5: Practise waiting three seconds.', 'Day 6: Role-play a support call.', 'Day 7: Reflect.']
});
deep('listen', 2, {
  sections: [
    ['Why small talk matters', [
      `Small talk builds the trust that makes bigger conversations easier. It is not about content; it is about showing that you are friendly and safe to talk to.`]],
    ['Starting and entering', [
      `Comment on the shared context: the event, the weather, the coffee. Introduce yourself: "Hi, I'm [name]." Join groups by listening first, then adding a related comment.`]],
    ['Share-then-ask', [
      `Give a small piece of information, then ask a question back. "I just started in support. How long have you been here?" It keeps the conversation balanced.`]],
    ['Leaving gracefully', [
      `"It was great talking with you." "I'm going to grab some water, but let's catch up later." "Enjoy the rest of your day." A warm exit leaves a good last impression.`]]
  ],
  script: ['Joining a conversation', [
    ['You', 'Hi, mind if I join? I am [name].'],
    ['Other', 'Sure, I am Alex. Are you new here?'],
    ['You', 'Yes, I started this month in support. How about you?'],
    ['Other', 'I have been here three years.'],
    ['You', 'That is great. What do you enjoy most about it?']
  ]],
  mistakes: ['Only answering without asking.', 'Talking too much about yourself.', 'Staying on the phone while talking.', 'Forgetting names.'],
  plan: ['Day 1: Prepare a 10-second intro.', 'Day 2: Practise share-then-ask.', 'Day 3: Start one conversation.', 'Day 4: Start two.', 'Day 5: Practise a polite exit.', 'Day 6: Remember one name.', 'Day 7: Follow up with someone.']
});
})();
