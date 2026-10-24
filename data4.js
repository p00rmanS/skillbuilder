// In-depth material. deep = { sections:[[heading,[paragraphs]]], script:[title,[[speaker,text]]], mistakes:[...], plan:[...] }
(() => {
const C = id => window.COURSES.find(c => c.id === id);
const deep = (cid, idx, d) => { C(cid).lessons[idx].deep = d; };
const add = (cid, l) => C(cid).lessons.push(l);

/* ================= INTERVIEW ================= */
deep('interview', 0, {
  sections: [
    ['Why this one question decides the mood of the interview', [
      `"Tell me about yourself" is almost always the first question. If your first minute is clear and calm, your nerves drop and the interviewer relaxes too. If it wanders, you start the interview already behind. That is why it deserves more practice than any other answer.`,
      `The interviewer is not asking for your life story. They want to know four things quickly: what you do, whether you are good at it, whether you are right for this job, and what it is like to talk to you.`]],
    ['Build it in three layers', [
      `Layer 1, Present: your current role or situation, in one sentence. Layer 2, Past: two proofs, such as a skill, a number or a project. Layer 3, Future: why this job and what you want to do next.`,
      `Keep each layer to two or three short sentences. Short sentences are easier to say, easier to remember and much easier to deliver without stumbling or translating in your head.`]],
    ['Make your bilingual skills a headline', [
      `Do not apologise for your accent or your English. Say the strength first: you speak English, Spanish and Filipino, and you can support customers in more than one language. Employers pay for this.`]]
  ],
  script: ['Sample 60-second introduction (replace the brackets with your real details)', [
    ['You', `Hi, thank you for having me. I'm [your name]. I work in IT support, helping people fix everyday technical problems and explaining the fix in a simple way.`],
    ['You', `I'm bilingual in English, Spanish and Filipino, so I'm comfortable supporting customers in different languages.`],
    ['You', `Recently I [fixed/handled/built something specific], and [result or number].`],
    ['You', `I'm also learning to build small tools with AI, which helps me solve problems faster.`],
    ['You', `I'm looking for a remote tech support role where I can help customers and keep growing. That's why this position interests me.`]
  ]],
  mistakes: ['Starting with your childhood or your whole work history.', 'Speaking for more than 90 seconds.', 'Apologising: "Sorry, my English is not perfect."', 'Reading a long paragraph from memory with no pauses.', 'Ending with "yeah, that\'s it" instead of a confident last line.'],
  plan: ['Day 1: Write the three layers in short sentences.', 'Day 2: Say it aloud 5 times while looking at the page.', 'Day 3: Say it aloud 5 times without the page.', 'Day 4: Record it and listen once for calm and clarity.', 'Day 5: Say it to a friend or in a mirror.', 'Day 6: Do it with a 3-second pause between sentences.', 'Day 7: Record the final version and compare with Day 4.']
});

deep('interview', 1, {
  sections: [
    ['What is actually happening when you hesitate or block', [
      `Under stress the body tightens: throat, jaw, chest and tongue. Tight muscles and fast thinking make sounds harder to start, so people repeat, stretch or get stuck on a word. Translating in your head adds one more task on top, which raises the pressure.`,
      `Fear of stuttering then makes you tense even earlier, and the cycle repeats. The goal is not to be perfect. It is to lower the tension, slow the starting point of each phrase, and stop avoiding words.`,
      `This lesson gives general techniques that many people find helpful. It is not medical advice. If hesitation or stuttering affects your life, a speech-language pathologist can assess you and give a personal plan, and many offer sessions by video.`]],
    ['Technique 1: the easy start', [
      `Breathe out gently, then begin the first word softly and slightly slower, almost like a sigh turning into speech. Do not push or squeeze the first sound. Once the sentence is moving, speed up to normal.`]],
    ['Technique 2: phrase and pause', [
      `Break speech into short phrases of four to seven words. Pause between phrases and breathe. This gives your brain time to find the next words in English instead of translating them, and it sounds thoughtful, not slow.`]],
    ['Technique 3: stay with the word', [
      `Do not swap a word you are afraid of for an easier one. Avoiding teaches your brain that the word is dangerous. If you get stuck, pause, release the tension, and restart the phrase with an easy start. A little repetition is fine and listeners barely notice.`]],
    ['Technique 4: lower the pressure on purpose', [
      `You are allowed to take a moment. Useful sentences: "Let me think about that for a second." "Good question, give me a moment." You can also decide in advance that a short pause or repetition is acceptable and you will keep going calmly.`,
      `Some people choose to mention it briefly: "I sometimes take a moment to find my words. It does not affect my work." That is your choice, not a requirement.`]]
  ],
  script: ['Practising an answer with easy starts and pauses', [
    ['Interviewer', 'Can you tell me about a time you solved a problem for a customer?'],
    ['You', '(breathe out) ... Sure. (pause)'],
    ['You', 'Last month, a customer could not log in to her account. (pause)'],
    ['You', 'I asked a few questions to understand the problem. (pause)'],
    ['You', 'I found that her password had expired. (pause)'],
    ['You', 'I reset it and checked that she could log in. (pause)'],
    ['You', 'She was very happy and thanked me for my patience.']
  ]],
  mistakes: ['Rushing to finish the sentence before the words are ready.', 'Replacing words you are afraid of with easier ones.', 'Apologising again and again after a block.', 'Practising only in your head. You must practise aloud.', 'Comparing yourself with fluent speakers. Compare with your own last week.'],
  plan: ['Day 1: Read a paragraph aloud with a pause at every full stop and comma.', 'Day 2: Add easy starts on the first word of each sentence.', 'Day 3: Answer 3 interview questions in phrases of 4 to 7 words.', 'Day 4: Record yourself and listen for calm, not mistakes.', 'Day 5: Practise saying "Let me think about that for a second." naturally.', 'Day 6: Do a mock interview in the studio with a 60-second timer.', 'Day 7: Review recordings and pick one thing to keep improving.']
});

deep('interview', 2, {
  sections: [
    ['How to build your six story bank', [
      `Write six real stories from work, school or your side projects. Give each a title: Angry customer, Hard technical problem, Mistake I fixed, Team conflict, Learning something fast, Going beyond the job. These six stories can answer almost any behavioral question.`,
      `Write each in four lines using STAR: Situation, Task, Action, Result. Keep the Action part the longest because it shows what you personally did.`]],
    ['The question families and what they really ask', [
      `"Strengths and weaknesses" asks if you know yourself. "Angry customer" asks if you stay calm and kind. "Technical problem" asks how you think. "Why this company" asks if you did your homework. "Where do you see yourself" asks if you will stay and grow.`]],
    ['How to answer a weakness honestly', [
      `Pick a real weakness that is not essential for the job, explain what you do about it, and show progress. Example: "I used to feel nervous speaking on calls. I now practise aloud every day and record myself, and I have improved a lot."`]]
  ],
  script: ['Angry customer story using STAR', [
    ['Situation', 'A customer called because her internet was down and she had an online exam in an hour.'],
    ['Task', 'I needed to calm her and restore her connection quickly.'],
    ['Action', 'I apologised, told her I would help, and asked three questions. I found the router had lost its settings, so I walked her through resetting it and confirmed she could load a website.'],
    ['Result', 'She was online in ten minutes, thanked me, and gave a high satisfaction score.']
  ]],
  mistakes: ['Saying "we" for everything so the interviewer cannot see your work.', 'Telling a story with no result or number.', 'Choosing a fake weakness like "I work too hard".', 'Answering for more than two minutes.', 'Memorising word for word, then freezing when you forget one.']
  , plan: ['Day 1: Write the six story titles.', 'Day 2: Write STAR for stories 1 and 2.', 'Day 3: Write STAR for stories 3 and 4.', 'Day 4: Write STAR for stories 5 and 6.', 'Day 5: Say stories 1 to 3 aloud, 90 seconds each.', 'Day 6: Say stories 4 to 6 aloud.', 'Day 7: Mock interview with random questions from the studio.']
});

deep('interview', 4, {
  sections: [
    ['What interviewers listen for', [
      `Behavioral questions assume that past behavior predicts future behavior. They listen for ownership (you say what you did), emotional control (you stay calm), respect (you do not blame) and learning (you improved).`]],
    ['A simple conflict story formula', [
      `Name the disagreement in neutral terms, explain the other person's point of view fairly, say how you listened and what you suggested, and describe the outcome and what you learned. Avoid describing anyone as bad or lazy.`]],
    ['If you have little work experience', [
      `Use school projects, volunteering, family businesses, community events or personal projects. The interviewer cares about how you acted, not where it happened.`]]
  ],
  script: ['Team conflict answer', [
    ['Interviewer', 'Tell me about a time you disagreed with a teammate.'],
    ['You', 'On a group project, a teammate and I disagreed about how to organise the work. He wanted to split everything; I thought we should plan together first.'],
    ['You', 'I asked him to explain his idea and I listened. He was worried about time.'],
    ['You', 'I suggested a ten-minute plan first, then splitting the tasks. He agreed.'],
    ['You', 'We finished early, and I learned that asking about the real concern solves most disagreements.']
  ]],
  mistakes: ['Complaining about a boss or coworker.', 'Saying you never have conflicts.', 'Giving a story with no resolution.', 'Forgetting to say what you learned.'],
  plan: ['Day 1: Pick two conflict or teamwork stories.', 'Day 2: Write each in STAR.', 'Day 3: Remove blame words.', 'Day 4: Say them aloud, 90 seconds each.', 'Day 5: Record one and listen for calm.', 'Day 6: Practise with a friend interrupting you politely.', 'Day 7: Final recording.']
});

deep('interview', 5, {
  sections: [
    ['Show your method, not just your answer', [
      `In support and IT interviews you will get scenario questions: "A customer cannot connect to Wi-Fi. What do you do?" There is no single right answer. The interviewer wants a calm, logical method you can say out loud.`]],
    ['A reliable talking framework', [
      `Say it in five steps: clarify, check the basics, narrow it down, fix and confirm, document. For example: "First I would ask what exactly happens and when it started. Then I would check the basics: is Wi-Fi on, is the password right, can other devices connect? ..."`]],
    ['What to do when you really do not know', [
      `Say what you know, say how you would find out, and stay curious: "I have not seen that exact error. I would search the vendor documentation, check logs, and ask a senior colleague if needed." Interviewers prefer honesty over bluffing.`]]
  ],
  script: ['Wi-Fi scenario answer', [
    ['Interviewer', 'A customer says their Wi-Fi is not working. What do you do?'],
    ['You', 'First, I would ask questions: is it all devices or only one, and when did it start?'],
    ['You', 'Next I would check the basics: is Wi-Fi turned on, is the password correct, and are the router lights normal?'],
    ['You', 'If other devices work, the problem is the device, so I would restart it and forget and rejoin the network.'],
    ['You', 'If nothing works, I would restart the router and check with the internet provider for outages.'],
    ['You', 'Finally, I would confirm that it works and write a short note about the cause and fix.']
  ]],
  mistakes: ['Jumping to a complicated fix before the basics.', 'Using lots of jargon without explaining.', 'Going silent while thinking.', 'Pretending to know something you do not.'],
  plan: ['Day 1: Learn the five-step framework by heart.', 'Day 2: Apply it to "printer not working".', 'Day 3: Apply it to "cannot log in".', 'Day 4: Apply it to "slow computer".', 'Day 5: Explain each to a friend with no IT knowledge.', 'Day 6: Record yourself answering one scenario in 90 seconds.', 'Day 7: Review and tighten.']
});

deep('interview', 6, {
  sections: [
    ['Salary talk: preparation beats confidence', [
      `Most people feel awkward discussing pay. Preparation removes most of that. Research the typical range for the role and country, decide your minimum, your target and your dream number, and practise saying the target aloud.`]],
    ['How to answer "What are your salary expectations?"', [
      `Option A: give a range based on research. Option B: ask about their range first: "Could you share the range for this role?" Never give a number that is below your minimum, and never accept on the spot.`]],
    ['Great questions to ask at the end', [
      `Ask about training, onboarding, how success is measured, how the team supports hard customer calls, and what a typical week looks like. This shows maturity and helps you decide if the job is right.`]],
    ['The thank-you email', [
      `Send it within 24 hours. Keep it under 100 words: thank them, mention one specific thing from the conversation, restate your interest, and offer more information if needed.`]]
  ],
  script: ['Salary answer and thank-you email', [
    ['Interviewer', 'What are your salary expectations?'],
    ['You', 'Based on my research for this role, I am looking for a range of X to Y. I am flexible depending on the full package and growth opportunities.'],
    ['Email', 'Hi [Name], thank you for speaking with me today. I enjoyed hearing about how your team supports customers. I am very interested in the role and confident I can contribute. Please let me know if I can share anything else. Best regards, [your name].']
  ]],
  mistakes: ['Giving a number without any research.', 'Accepting immediately because you are nervous.', 'Not asking any questions at the end.', 'Forgetting the thank-you email.'],
  plan: ['Day 1: Research salary ranges for three similar roles.', 'Day 2: Decide minimum, target and dream numbers.', 'Day 3: Practise saying your range aloud 10 times.', 'Day 4: Write 5 questions to ask.', 'Day 5: Draft a thank-you email template.', 'Day 6: Do a mock close with a friend.', 'Day 7: Review and adjust.']
});

add('interview', {
  t: 'Full mock interview walkthrough', mins: 15,
  flow: ['Greeting', 'Intro', 'Experience', 'Scenario', 'Your questions', 'Close'],
  intro: 'This is a complete interview from hello to goodbye, with sample answers. Read it, then practise it aloud. It shows how every earlier lesson fits together.',
  points: [
    ['Minute 0 to 2: the greeting', 'Smile, say hello, thank them, and breathe. A short friendly line sets the tone: "Hi, thank you for having me. I am excited about this role."'],
    ['Minute 2 to 4: introduce yourself', 'Use your 60-second Present, Past, Future answer. End with why this job.'],
    ['Minute 4 to 20: experience and scenarios', 'Expect behavioral and technical questions. Use STAR for stories and the five-step method for scenarios. Pause, then answer in short phrases.'],
    ['Last 5 minutes: your questions and close', 'Ask two questions, restate your interest, thank them and ask about next steps.']
  ],
  tips: ['Practise the whole flow aloud once a day for a week.', 'Keep water nearby and take a sip before hard questions to buy a pause.', 'It is fine to ask them to repeat a question.'],
  ex: { t: 'Run the full mock', steps: ['Open the speaking studio and choose Mock interview.', 'Answer 5 prompts in a row at 60 seconds each.', 'Listen to the recording and note one thing to improve.', 'Repeat the next day.'] },
  quiz: [{ q: 'How should the interview end?', o: ['Quickly leave', 'Ask your questions, restate interest, ask about next steps and thank them', 'Say nothing', 'Ask for the job right away'], a: 1, w: 'A clear, polite close leaves a strong last impression.' }],
  deep: {
    sections: [
      ['How to use this walkthrough', [`Read the script once. Then cover your side and answer each question yourself, aloud, in short phrases. Finally compare with the sample. The sample is a guide, so always use your own real examples.`]]
    ],
    script: ['A complete remote support interview', [
      ['Interviewer', 'Hi [your name], thanks for joining. Can you hear me okay?'],
      ['You', 'Yes, I can hear you clearly. Thank you for having me. I am excited about this role.'],
      ['Interviewer', 'Great. Tell me a little about yourself.'],
      ['You', 'Sure. I work in IT support, helping people fix everyday technical problems. I am bilingual in English, Spanish and Filipino... (continue your 60-second answer)'],
      ['Interviewer', 'Tell me about a time you dealt with a difficult customer.'],
      ['You', 'Thank you. (pause) Last month a customer called very upset... (STAR answer, 90 seconds)'],
      ['Interviewer', 'A customer says their computer is very slow. What would you do?'],
      ['You', 'I would start by asking when it began and what changed. Then I would check the basics... (five-step method)'],
      ['Interviewer', 'What is a weakness of yours?'],
      ['You', 'I used to feel nervous speaking on calls, so I practise aloud daily and record myself. I have improved a lot.'],
      ['Interviewer', 'Do you have any questions for us?'],
      ['You', 'Yes. What does success look like in the first 90 days? And how does the team support new people on difficult calls?'],
      ['Interviewer', 'Thanks, we will be in touch.'],
      ['You', 'Thank you for your time. I am very interested in the role. May I ask what the next steps are?']
    ]],
    mistakes: ['Memorising all sentences instead of the structure.', 'Not breathing between answers.', 'Skipping the closing questions.', 'Forgetting the thank-you email.'],
    plan: ['Day 1: Read the script twice.', 'Day 2: Answer the intro aloud.', 'Day 3: Answer the story and scenario aloud.', 'Day 4: Practise the weakness and your questions.', 'Day 5: Full run in the studio.', 'Day 6: Full run with a friend.', 'Day 7: Final recording and review.']
  }
});

/* ================= FLUENCY ================= */
deep('fluency', 0, {
  sections: [
    ['Why you translate, and why it is not a failure', [
      `Learners translate because the fastest path in the brain goes through the strongest language. Over time, with repetition, the English path becomes strong enough to run on its own. You are not doing anything wrong. You just need more direct English repetitions.`]],
    ['The three-stage ladder', [
      `Stage 1: single words linked to pictures. Stage 2: ready-made phrases linked to situations. Stage 3: short thoughts directly in English. Move up one stage at a time by repeating each stage daily.`,
      `Do not try to think in complex English. Think in simple English. "I need to send this email. Then I will call the customer." Simple thoughts become automatic first.`]],
    ['Daily habits that actually change your brain', [
      `Narrate your day aloud for five minutes. Describe objects without translating. Keep a "no translation" notebook where you write a picture or a phrase, never a translation. Shadow short clips for ten minutes. Short daily practice beats long weekly practice.`]]
  ],
  script: ['Narration practice (say aloud)', [
    ['You', 'I am opening my laptop. I am checking my email. There are three new messages.'],
    ['You', 'I need to answer the first one. It is from a customer. She has a problem with her account.'],
    ['You', 'I will ask her a few questions. Then I will fix the problem and send her a short note.']
  ]],
  mistakes: ['Waiting until your English is perfect before speaking.', 'Writing a translation next to every new word.', 'Trying to think in long, advanced sentences.', 'Practising only by reading silently.'],
  plan: ['Day 1: Label 20 objects with English words.', 'Day 2: Narrate for 5 minutes in the morning.', 'Day 3: Shadow a 2-minute clip.', 'Day 4: Narrate a task with 10 new words.', 'Day 5: Describe pictures aloud.', 'Day 6: Talk to yourself for 10 minutes.', 'Day 7: Record a one-minute summary of your week in English.']
});
deep('fluency', 1, {
  sections: [
    ['Which words to learn first', [
      `Learn high-frequency words and work words first. The top 1000 words cover most everyday speech. For support roles, add words for problems (error, slow, frozen), actions (restart, update, reset) and manners (apologise, assist, confirm).`]],
    ['The picture, word, phrase, use method', [
      `For each word: find a picture, learn a short phrase, say it in a sentence about your life, and use it the same day. Spaced review in the Review tab keeps it alive.`]],
    ['Use your Spanish as a shortcut', [
      `Spanish and English share thousands of cognates. Patterns: -ción → -tion (información), -dad → -ty (responsabilidad), -mente → -ly (rápidamente), -oso → -ous (famoso). Watch out for false friends: embarazada is pregnant, not embarrassed; actualmente means currently, not actually.`]]
  ],
  script: ['Workplace power words in sentences', [
    ['You', 'I will escalate this issue to a senior technician.'],
    ['You', 'Let me clarify the steps before we continue.'],
    ['You', 'We resolved the problem and I will follow up tomorrow.'],
    ['You', 'This is a priority, so I will update you by the end of the day.']
  ]],
  mistakes: ['Memorising long lists of single words with no context.', 'Learning rare words before common ones.', 'Trusting every Spanish cognate without checking false friends.', 'Never saying new words aloud.'],
  plan: ['Day 1: Learn 5 cognate words and say them aloud.', 'Day 2: Learn 5 work power words.', 'Day 3: Review Day 1 and 2, add 5 new.', 'Day 4: Write 5 sentences using new words.', 'Day 5: Use 3 new words in a conversation.', 'Day 6: Review all 20 in the Review tab.', 'Day 7: Quiz yourself with pictures only.']
});
deep('fluency', 3, {
  sections: [
    ['Accent versus clarity', [
      `Everyone has an accent. Understanding depends less on accent and more on stress, rhythm, speed and word endings. A clear Filipino-English accent is fully professional. Aim to be clear, not to sound like someone else.`]],
    ['Stress and rhythm', [
      `English has strong and weak syllables. Stress the meaningful words (nouns, verbs, numbers), and say small words quickly. Compare "I want to HELP you" with every word equally loud. The first sounds natural.`]],
    ['Word endings and common sounds', [
      `Say final consonants: sent, files, worked. Practise th (think, this), v versus b (very, berry), f versus p (fine, pine), and the short i in ship versus the long ee in sheep. Use slow tongue twisters, then speed up.`]],
    ['How to compare yourself with a model', [
      `Pick a clear speaker. Listen to one sentence, copy it, record yourself, and listen to both. Change one thing at a time: speed, stress, or an ending. Three minutes a day works.`]]
  ],
  script: ['Say these with stress on the capital words', [
    ['You', 'I can HELP you with that PROBlem.'],
    ['You', 'Let me CHECK your ACcount.'],
    ['You', 'Could you RESTART the ROUter, please?'],
    ['You', 'I will FOLlow up with you toMORrow.']
  ]],
  mistakes: ['Trying to remove your accent completely.', 'Speaking too fast.', 'Dropping final sounds.', 'Practising without recording.'],
  plan: ['Day 1: Record 5 sentences and listen.', 'Day 2: Practise stress on the sentences above.', 'Day 3: Practise th and v sounds.', 'Day 4: Practise word endings.', 'Day 5: Shadow a clear speaker.', 'Day 6: Record a one-minute answer.', 'Day 7: Compare with Day 1.']
});
deep('fluency', 2, {
  sections: [
    ['Why chunks make you faster', [
      `Native speakers store common groups of words together. When you also store them as groups, you do not build sentences word by word, so there is less to translate and fewer pauses.`]],
    ['Chunks for the most common situations', [
      `Clarifying: "Just to make sure I understand..." Delay politely: "Let me check that for you." Soften: "I would suggest..." Confirm: "Does that work for you?" Close: "Is there anything else I can help with?"`]],
    ['How to practise a chunk', [
      `Read it aloud five times. Fill in the blank with three real examples. Use it in a real or practice conversation. Add it to the Review tab.`]]
  ],
  script: ['A support call using chunks', [
    ['Customer', 'My email is not working.'],
    ['You', 'I am sorry to hear that. Just to make sure I understand, you cannot send or receive messages?'],
    ['Customer', 'I can receive, but I cannot send.'],
    ['You', 'Thank you. Let me check that for you. Could you tell me what error you see?'],
    ['You', 'I would suggest restarting the app. Does that work for you?']
  ]],
  mistakes: ['Memorising chunks without ever saying them to someone.', 'Using the same chunk every time.', 'Trying too many at once.'],
  plan: ['Day 1: Pick 5 chunks.', 'Day 2: Make 3 sentences for each.', 'Day 3: Say them aloud 5 times.', 'Day 4: Use two in practice.', 'Day 5: Add 5 new chunks.', 'Day 6: Role-play a call.', 'Day 7: Review all.']
});

add('fluency', {
  t: 'Your 30-day English speaking plan', mins: 12,
  flow: ['Week 1: Sounds', 'Week 2: Phrases', 'Week 3: Stories', 'Week 4: Interview'],
  intro: 'A clear plan removes the guessing. Twenty to thirty minutes a day for 30 days is enough to feel a real difference in confidence and speed.',
  points: [
    ['Daily structure (25 minutes)', '5 minutes warm-up and breathing, 10 minutes lesson reading, 5 minutes aloud practice, 5 minutes review and journal.'],
    ['Track, do not judge', 'Tick each day. Missing one day is fine, but never miss two. Use the streak and freezes in this app.'],
    ['Record weekly', 'On the last day of each week, record a one-minute answer and compare it with the previous week.'],
    ['Adjust', 'If a week feels too hard, repeat it. Progress is not a race.']
  ],
  tips: ['Choose a fixed time and place.', 'Keep your phone away during practice.', 'Share your goal with one friend who can check in.'],
  ex: { t: 'Set up the 30 days', steps: ['Pick your daily time and write it down.', 'Record a one-minute baseline answer today.', 'Add your reminders.', 'Start Week 1 tomorrow.'] },
  quiz: [{ q: 'What should you do if you miss one day?', o: ['Quit', 'Restart tomorrow, never miss two days', 'Double the next day', 'Hide the streak'], a: 1, w: 'Missing one day is normal; two becomes a habit.' }],
  deep: {
    sections: [['How the four weeks fit together', [
      `Week 1 builds the physical foundation: breathing, easy starts, clear sounds and word endings. Week 2 builds chunks and vocabulary so you stop translating. Week 3 turns your experiences into short stories. Week 4 combines everything into mock interviews and small talk.`]]],
    mistakes: ['Skipping the weekly recording.', 'Practising silently.', 'Adding too many new words and never reviewing.', 'Giving up after a bad day.'],
    plan: ['Week 1: Breathing and easy starts, 5 tongue twisters, word endings, narrate your day.', 'Week 2: 5 chunks and 10 words per week, shadowing, phrasal verbs, small talk basics.', 'Week 3: Write and tell three STAR stories, practise the 60-second introduction, journal in English.', 'Week 4: Five mock interviews, two small-talk chats with real people, final recording and comparison.']
  }
});

/* ================= CULTURE ================= */
deep('culture', 0, {
  sections: [
    ['What small talk is for', [
      `In the US, small talk shows friendliness and builds comfort before serious conversation. It is brief, light and not meant to be deep. A short exchange with a customer or coworker makes the next part of the conversation easier.`]],
    ['A simple structure: greet, ask, share, follow, exit', [
      `Greet: "Hi, how is your day going?" Ask an open question. Share a small detail about yourself. Follow up with a curiosity question. Exit politely: "It was nice talking to you."`]],
    ['Questions that work in almost any situation', [
      `"Did you do anything fun this weekend?" "How long have you worked here?" "Have you tried the new coffee place?" "Any plans for the holidays?" Then listen and follow the answer.`]]
  ],
  script: ['A short conversation with a new coworker', [
    ['Coworker', 'Hey, how is it going?'],
    ['You', 'Pretty good, thanks! How about you?'],
    ['Coworker', 'Not bad. Did you do anything fun this weekend?'],
    ['You', 'Yes, I cooked adobo for my family. Have you ever tried it?'],
    ['Coworker', 'I have not, but I would love to.'],
    ['You', 'I can bring some to share one day!']
  ]],
  mistakes: ['Answering "How are you?" with a long complaint.', 'Asking about salary, age or politics early on.', 'Answering with one word and no question back.', 'Not smiling.'],
  plan: ['Day 1: Memorise 3 greetings.', 'Day 2: Practise the three-part answer aloud.', 'Day 3: Prepare 5 open questions.', 'Day 4: Chat with one person.', 'Day 5: Chat with two people.', 'Day 6: Use a follow-up question every time.', 'Day 7: Reflect in your journal.']
});
deep('culture', 1, {
  sections: [
    ['Direct versus indirect communication', [
      `In many US workplaces people say what they mean in clear words. A clear "no", "I do not agree" or "I need more time" is polite when it is said kindly. Silence or vague answers can be read as agreement or confusion.`]],
    ['Being proactive', [
      `Managers often expect updates without being asked. Share progress, ask for feedback and speak up about problems early. Being quiet may look like you are not engaged.`]],
    ['Feedback style', [
      `Feedback is often framed positively first. Do not take direct comments as personal attacks. Ask: "What would make it even better?"`]]
  ],
  script: ['Giving a clear but kind answer', [
    ['Manager', 'Can you finish this by Friday?'],
    ['You', 'I can finish most of it by Friday, but I will need until Monday for the final check. Is that okay?'],
    ['Manager', 'Monday works. Thanks for being clear.']
  ]],
  mistakes: ['Saying "yes" when you mean "maybe".', 'Never sharing wins.', 'Waiting too long to report a problem.'],
  plan: ['Day 1: Write three clear ways to say no kindly.', 'Day 2: Practise them aloud.', 'Day 3: Write your weekly win note.', 'Day 4: Share a win in a message.', 'Day 5: Ask for feedback once.', 'Day 6: Report a small problem early.', 'Day 7: Review how it felt.']
});

/* ================= SUPPORT ================= */
deep('support', 1, {
  sections: [
    ['A complete call, step by step', [
      `1. Greet warmly and give your name. 2. Listen without interrupting and take notes. 3. Empathise in one sentence. 4. Clarify with two or three questions. 5. Fix step by step, explaining each action. 6. Confirm the issue is solved. 7. Close warmly and offer more help.`]],
    ['What to say when the customer is angry', [
      `Lower your voice and slow down. Do not argue. Use LAST: Listen, Apologise, Solve, Thank. Example: "I am sorry for the trouble. I understand how frustrating this is. Let me fix it now."`]],
    ['When you do not know the answer', [
      `Say: "That is a good question. Let me check and I will be right back." Put the call on hold politely or consult your team. Never guess.`]]
  ],
  script: ['An upset customer call', [
    ['Customer', 'This is the third time my internet has gone down this week!'],
    ['You', 'I am really sorry about that. That sounds very frustrating. Let me help you fix it right now.'],
    ['You', 'Could you tell me what lights you see on the router?'],
    ['Customer', 'The red one is blinking.'],
    ['You', 'Thank you. That means there is no connection. Let me check for an outage in your area. One moment, please.'],
    ['You', 'Thank you for waiting. There was a short outage. It has been fixed. Can you check your connection now?']
  ]],
  mistakes: ['Saying "calm down".', 'Interrupting the customer.', 'Using jargon without explaining.', 'Forgetting to confirm the fix.'],
  plan: ['Day 1: Memorise the seven steps.', 'Day 2: Write your greeting and closing.', 'Day 3: Practise LAST aloud.', 'Day 4: Role-play a calm call.', 'Day 5: Role-play an angry customer.', 'Day 6: Record a full practice call.', 'Day 7: Review and fix one habit.']
});
deep('support', 0, {
  sections: [
    ['What a typical remote support day looks like', [
      `You answer calls, chats or emails, solve common problems, write notes and escalate hard cases. Targets often include response time, resolution and customer satisfaction. Training is usually paid and covers the product and tools.`]],
    ['How hiring usually works', [
      `Apply, take a short screening call, complete a typing, grammar or listening test, have one or two interviews, then do paid training. Each step is practice, so treat early rejections as free training.`]],
    ['How to stand out', [
      `Show that you are reliable, kind, clear and quick to learn. Mention your languages, your IT skills and a published project. Keep your CV to one page and put the strongest points first.`]]
  ],
  script: ['A short screening-call opening', [
    ['Recruiter', 'Thanks for your interest. Can you tell me why you want this role?'],
    ['You', 'I enjoy helping people solve technical problems and explaining things simply. I also speak English, Spanish and Filipino, and I work well remotely.']
  ]],
  mistakes: ['Applying to only a few jobs.', 'Sending the same CV to every role.', 'Not preparing for the typing and grammar test.'],
  plan: ['Day 1: Update your CV top line.', 'Day 2: Apply to 5 roles.', 'Day 3: Do a typing test.', 'Day 4: Do a grammar practice.', 'Day 5: Apply to 5 more.', 'Day 6: Practise your screening answer.', 'Day 7: Review what you learned.']
});

/* ================= SPEAK / CONFIDENCE ================= */
deep('speak', 0, {
  sections: [
    ['Understand your body first', [
      `Fast heartbeat, shaky hands and a dry mouth are signs of energy. You cannot switch them off, but you can use them. Slow breathing, movement and a clear first sentence give the energy a direction.`]],
    ['A 10-minute pre-talk routine', [
      `Ten minutes before: walk, shake out your arms, drink water. Five minutes before: slow breathing (in 4, out 7). One minute before: say your first sentence aloud quietly and smile. Then start.`]],
    ['The first 20 seconds', [
      `Memorise your opening. Say it slowly and look at one friendly face. Most nerves fade after the first 20 seconds once you realise the audience is on your side.`]]
  ],
  script: ['Opening line you can adapt', [
    ['You', 'Good morning, everyone. Thank you for being here. I want to talk about one simple idea that can save you an hour every week.']
  ]],
  mistakes: ['Opening with an apology.', 'Reading the slides.', 'Skipping practice because you feel nervous.'],
  plan: ['Day 1: Write your opening line.', 'Day 2: Say it ten times.', 'Day 3: Add the breathing routine.', 'Day 4: Practise standing up.', 'Day 5: Deliver to one person.', 'Day 6: Deliver to two people.', 'Day 7: Record and review.']
});
deep('conf', 0, {
  sections: [
    ['Confidence is a record, not a mood', [
      `You do not need to feel confident first. Confidence grows after you do hard things and notice you survived. Your evidence file turns scattered wins into a visible record.`]],
    ['What to put in your evidence file', [
      `Tough calls you handled, compliments, finished projects, languages you speak, improvements in your recordings, and every interview you attended even if you did not get the job.`]],
    ['How to read it', [
      `Read it for two minutes before an interview or hard call. Add one new line at the end of every day. Over weeks you will notice a pattern: you are capable and improving.`]]
  ],
  script: ['Example evidence file entries', [
    ['Entry', 'Handled an angry customer and got a thank-you.'],
    ['Entry', 'Recorded my 60-second intro and my pace improved.'],
    ['Entry', 'Spoke for 30 seconds in a group chat without stopping.'],
    ['Entry', 'Applied to 5 jobs this week.']
  ]],
  mistakes: ['Only collecting big wins and ignoring small ones.', 'Comparing your Day 1 with someone else\'s Year 5.', 'Throwing it away after a bad day.'],
  plan: ['Day 1: Create the note.', 'Day 2: Add 10 old wins.', 'Day 3: Add one new win.', 'Day 4: Read it before practice.', 'Day 5: Add a compliment you received.', 'Day 6: Add a challenge you handled.', 'Day 7: Review the week.']
});
})();
