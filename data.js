// Course content for SkillBuilder. Edit freely: add courses, lessons, tips, prompts.
window.SKILLS = {
  speaking: 'Public speaking',
  articulation: 'Clear articulation',
  storytelling: 'Storytelling',
  listening: 'Listening & conversation',
  confidence: 'Confidence',
  persuasion: 'Persuasion',
  writing: 'Writing & thinking',
  learning: 'Learning speed',
  leadership: 'Leadership & EQ'
};

window.COURSES = [
{
  id: 'speak', title: 'Public Speaking Foundations', skill: 'speaking', hue: 245, cat: 'Communication',
  blurb: 'Go from nervous to commanding: structure, voice and presence.',
  lessons: [
  { t: 'Make nerves work for you', mins: 8,
    intro: 'Nerves are not a sign you are bad at speaking. They are physical energy. Your heart rate, breathing and adrenaline are the same for fear and for excitement, so the skill is steering that energy, not removing it.',
    points: [
      ['Reframe, don\'t suppress', 'Telling yourself "calm down" fights your body. Saying "I am excited" matches the arousal you already feel. Research by Alison Wood Brooks found people who reappraised anxiety as excitement performed better on speaking tasks.'],
      ['Breathe out longer than in', 'Inhale for 4, exhale for 6 to 8. A long exhale activates the calming branch of your nervous system within a minute or two.'],
      ['Burn the adrenaline first', 'Walk, shake out your hands, or do ten squats before you go on. Physical energy needs somewhere to go besides your voice and knees.'],
      ['Point your attention outward', 'Nerves feed on self-focus. Ask "what does this audience need from me?" and you shift from performing to serving.']
    ],
    tips: ['Arrive early and stand in the room so it feels familiar.', 'Memorise your first 20 seconds word for word. A strong start calms everything after it.', 'Drink water at room temperature. Cold water tightens the throat.'],
    ex: { t: 'The 90-second reset', steps: ['Do 5 slow breaths: in for 4, out for 7.', 'Say aloud three times: "I am excited to share this."', 'Speak for 60 seconds on any topic you know well, standing up.', 'Rate your nerves 1 to 10 before and after.'] },
    quiz: [
      { q: 'Which approach is most supported for handling pre-talk nerves?', o: ['Telling yourself to calm down', 'Reframing the feeling as excitement', 'Avoiding thinking about the talk', 'Speaking faster to finish sooner'], a: 1, w: 'Anxiety and excitement share the same arousal, so reframing works with your body instead of against it.' },
      { q: 'A long exhale helps because it...', o: ['Fills your lungs with more oxygen', 'Activates your body\'s calming response', 'Makes your voice louder', 'Distracts the audience'], a: 1, w: 'Longer exhales stimulate the parasympathetic system, which lowers heart rate.' }
    ] },
  { t: 'Structure a talk people remember', mins: 10,
    intro: 'Audiences forget most of what you say within a day. Structure is how you decide which part survives. Great talks have one idea, a clear path to it, and an ending that asks for something.',
    points: [
      ['One talk, one idea', 'Before writing anything, finish this sentence: "After this talk, I want the audience to ___." If you cannot finish it, you are not ready to build slides.'],
      ['Hook, Point, Proof, Action', 'Hook them in the first 15 seconds (a story, a surprising number, a question). State your point. Back it up with two or three proofs. Close with one clear action.'],
      ['Rule of three', 'Three examples, three steps, three reasons. Three feels complete and is easy to recall and deliver.'],
      ['End on purpose', 'Never finish with "so, yeah, that\'s it" or "any questions?". Deliver your last line, pause, then say thank you.']
    ],
    tips: ['Write your closing line first. Then build toward it.', 'If it will not fit in one breath-length sentence, the idea is still too big.', 'Cut your talk by 20 percent. It will almost always improve.'],
    ex: { t: 'Build a 2-minute talk', steps: ['Write the sentence: "After this talk, I want the audience to ___."', 'Pick a hook: a story, a question, or a surprising fact.', 'List three proof points, one line each.', 'Write the closing action. Deliver it aloud once and time it.'] },
    quiz: [
      { q: 'What should you decide BEFORE building slides or notes?', o: ['The font and theme', 'The single idea the audience should leave with', 'How many jokes to include', 'The Q&A format'], a: 1, w: 'A single clear idea gives every other choice a filter.' },
      { q: 'Which is the strongest way to end?', o: ['"So, yeah, that\'s it."', '"Any questions?"', 'A clear action, a pause, then thank you', 'Trailing off while the slide changes'], a: 2, w: 'A deliberate ending signals confidence and makes the action memorable.' }
    ] },
  { t: 'Voice: pace, pause and power', mins: 9,
    intro: 'Your voice carries about as much meaning as your words. Three levers matter most: pace, pause and pitch. Most speakers only need to slow down and pause more.',
    points: [
      ['Pace', 'Conversational pace is roughly 130 to 160 words per minute. Nerves push people toward 180 or more. Aim slightly slower than feels natural, since it sounds normal to listeners.'],
      ['The pause is a power tool', 'A pause before a key point builds anticipation. A pause after it lets it land. Silence feels three times longer to you than to the audience.'],
      ['Vary pitch and volume', 'A flat voice is the fastest way to lose a room. Go quieter to signal importance, louder for energy, and let important sentences drop in pitch at the end.'],
      ['Land your sentences', 'Ending every sentence with a rising tone sounds like a question and weakens authority. Finish statements on a falling note.']
    ],
    tips: ['Record yourself on your phone. Listen once for pace, once for energy.', 'Mark pauses in your notes with a slash.', 'Speak from your diaphragm: hand on belly, feel it move as you talk.'],
    ex: { t: 'Pace and pause drill', steps: ['Read one paragraph aloud and time it. Count words and work out your words per minute.', 'Read it again and add a deliberate pause at every full stop.', 'Read it a third time, dropping your pitch on the last word of each sentence.', 'Compare all three recordings and note which sounded most confident.'] },
    quiz: [
      { q: 'A comfortable conversational pace is about...', o: ['80 wpm', '130 to 160 wpm', '200 to 220 wpm', 'It does not matter'], a: 1, w: 'This range is easy to follow and still sounds energetic.' },
      { q: 'Why add a pause before a key point?', o: ['To remember your notes', 'It builds anticipation and focuses attention', 'To make the talk longer', 'To check the time'], a: 1, w: 'Pauses create emphasis. They feel longer to you than to the audience.' }
    ] },
  { t: 'Body language and presence', mins: 8,
    intro: 'Presence is the sense that you are fully here and in control. It comes from stillness, eye contact and purposeful movement, not from big gestures.',
    points: [
      ['Eye contact by thought', 'Speak one full thought to one person, then move to someone else. This feels like conversation to the room and stops you scanning nervously.'],
      ['Be still, then move with purpose', 'Swaying and pacing leak nervous energy. Plant your feet, then move only when you change topic.'],
      ['Gestures between hip and chest', 'Keep hands visible and within the frame of your torso. Let gestures match your words and drop them when you pause.'],
      ['The first ten seconds', 'Walk up, stop, look at the audience, take a breath, smile if appropriate, then start. Do not start talking while walking or adjusting things.']
    ],
    tips: ['Hands in pockets or clasped for long stretches signal discomfort, so relax them at your sides.', 'On video calls, look at the camera when making your main point.', 'Open posture beats power poses. Think tall, relaxed, shoulders down.'],
    ex: { t: 'Mirror and phone check', steps: ['Film yourself giving a 90-second talk, standing, from the waist up.', 'Watch on mute: do you sway, fidget or look down?', 'Redo it with feet planted and one thought per imaginary person.', 'Pick one habit to remove this week.'] },
    quiz: [
      { q: 'Best way to use eye contact in a room?', o: ['Stare at the back wall', 'Scan constantly', 'One full thought to one person, then switch', 'Look at your notes'], a: 2, w: 'It feels like real conversation and keeps you steady.' }
    ] }
  ]
},
{
  id: 'artic', title: 'Articulate and Speak Clearly', skill: 'articulation', hue: 190, cat: 'Communication',
  blurb: 'Cut filler words, sharpen diction, and say exactly what you mean.',
  lessons: [
  { t: 'Slow down and kill the fillers', mins: 8,
    intro: 'Filler words (um, like, you know) are usually thinking noise. The fix is not to ban them but to replace them with silence, which makes you sound deliberate rather than hesitant.',
    points: [
      ['Fillers are a thinking habit', 'You say "um" to hold the floor while you plan the next phrase. Plan shorter chunks and give yourself permission to pause instead.'],
      ['Measure first', 'Record two minutes of natural speech and count fillers. Awareness alone often cuts them by a third.'],
      ['Finish the sentence in your head', 'Before you speak, know how the sentence ends. Then speak at a pace where you can look one phrase ahead.'],
      ['Swap in a silent breath', 'When you feel a filler coming, close your mouth, breathe in, and continue. Nobody notices a 1-second pause.']
    ],
    tips: ['Ask a friend to tap the table every time you filler. It is annoying and works.', 'Fillers rise when you are under-prepared. Rehearse openings and transitions.', 'Do not beat yourself up. The goal is fewer, not zero.'],
    ex: { t: 'Filler audit', steps: ['Record a 2-minute answer to "Tell me about your work".', 'Count fillers and note your count per minute.', 'Record again, replacing every filler with a silent breath.', 'Compare. Repeat daily for a week.'] },
    quiz: [
      { q: 'What is the best replacement for a filler word?', o: ['A louder voice', 'Another filler', 'A short, silent pause', 'Speaking faster'], a: 2, w: 'Silence sounds deliberate and gives you time to think.' }
    ] },
  { t: 'Diction and vocal warm-ups', mins: 7,
    intro: 'Clear speech is physical: lips, tongue, jaw and breath. Athletes warm up; speakers should too. Five minutes beats an hour of worrying.',
    points: [
      ['Release the jaw', 'Most mumbling comes from a tight jaw. Massage the hinge by your ears and open your mouth wider than feels polite while practising.'],
      ['Lip trills and humming', 'Blow raspberries on a rising and falling pitch for 30 seconds, then hum. These wake up breath support and resonance.'],
      ['Consonants carry meaning', 'Listeners understand speech through consonants. Practise finishing the ends of words (t, d, s, k) instead of dropping them.'],
      ['Tongue twisters, slowly', 'Say them slowly and precisely first, then speed up only while staying accurate. Accuracy before speed.']
    ],
    tips: ['Warm up in the car or shower before important calls.', 'Practise reading aloud with a pen held lightly between your teeth, then remove it and notice the clarity.', 'Hydrate and avoid heavy dairy right before a talk if it thickens your voice.'],
    ex: { t: 'Five-minute warm-up', steps: ['Roll shoulders and loosen jaw for 30 seconds.', 'Lip trill up and down for 30 seconds, then hum.', 'Say 3 tongue twisters from the Practice tab, slowly and then faster.', 'Read a paragraph aloud, over-articulating every consonant.'] },
    quiz: [
      { q: 'Which is the right order for tongue twisters?', o: ['Fast first, then slow', 'Slow and precise, then faster', 'Only whisper them', 'Skip warm-ups'], a: 1, w: 'Precision first, then speed. Speed without accuracy trains sloppiness.' }
    ] },
  { t: 'Answer first: PREP', mins: 9,
    intro: 'Rambling is usually answering before you know your point. Clear speakers give the headline first, then support it. The PREP model makes this a habit.',
    points: [
      ['Point', 'Open with your conclusion in one sentence. "I recommend we delay the launch."'],
      ['Reason', 'Give the main reason. "Testing found two critical bugs."'],
      ['Example', 'Make it concrete. "Last week a user lost their data when..."'],
      ['Point again', 'Close by restating your conclusion, optionally with the next step.']
    ],
    tips: ['If you get lost mid-answer, go back to the point and restate it.', 'Practise PREP on everyday questions like "What did you think of that film?".', 'For long answers use "three things": say the number first, then list them.'],
    ex: { t: 'PREP on demand', steps: ['Open the Practice tab and draw an impromptu prompt.', 'Answer it in 45 seconds using Point, Reason, Example, Point.', 'Replay your recording: was the point in the first 10 seconds?', 'Do three prompts in a row.'] },
    quiz: [
      { q: 'What does the first P in PREP stand for?', o: ['Preparation', 'Point (your conclusion first)', 'Pause', 'Persuasion'], a: 1, w: 'Lead with your point so listeners know where you are going.' }
    ] },
  { t: 'Precise words, bigger vocabulary', mins: 7,
    intro: 'A bigger vocabulary is not about fancy words. It is about the right word. Precise language makes you sound sharper and thinks more clearly.',
    points: [
      ['Replace vague words', '"Good", "nice", "thing" and "stuff" hide meaning. Swap them: reliable, generous, a deadline, the budget.'],
      ['Learn words in clusters', 'When you meet a new word, also learn its opposite and one close synonym, and use all three in a sentence.'],
      ['Read above your level', 'Long-form journalism and good non-fiction expose you to precise phrasing. Keep a note of three phrases a week.'],
      ['Use it within 24 hours', 'A word you do not use in speech within a day is unlikely to stick. Say it aloud to someone.']
    ],
    tips: ['Prefer short words. Precise does not mean pompous.', 'Keep a "word log" in your phone notes.', 'Replace "very + adjective" with one stronger word (very tired → exhausted).'],
    ex: { t: 'Weekly word log', steps: ['Pick 3 words you encountered recently.', 'Write a sentence using each in your own context.', 'Say each aloud to a friend or in a voice note today.', 'Review the log every Sunday.'] },
    quiz: [
      { q: 'Best approach to a larger working vocabulary?', o: ['Memorise a dictionary', 'Learn words in context and use them within a day', 'Use rare words as often as possible', 'Avoid new words'], a: 1, w: 'Context plus quick use turns recognition into recall.' }
    ] }
  ]
},
{
  id: 'story', title: 'Storytelling That Lands', skill: 'storytelling', hue: 20, cat: 'Communication',
  blurb: 'Turn experiences into stories that people feel and remember.',
  lessons: [
  { t: 'The story spine', mins: 8,
    intro: 'Every good story, from jokes to keynotes, follows a simple spine. Know it and you can build a story in a minute.',
    points: [
      ['Once upon a time...', 'Set up the normal world. Who, where, what was normal?'],
      ['Every day... until one day...', 'Show the routine, then the disruption. Change is what makes a story.'],
      ['Because of that... because of that...', 'Show the chain of consequences, with stakes rising.'],
      ['Until finally... and ever since...', 'The resolution and what changed. This is where your point lives.']
    ],
    tips: ['Start close to the action. Cut backstory.', 'Stories need a person, a problem and a change.', 'Always end with why it matters to this audience.'],
    ex: { t: 'Spine a memory', steps: ['Pick a small real event from the last month.', 'Fill the spine: Once... Every day... Until one day... Because of that... Finally...', 'Tell it aloud in under 90 seconds.', 'Add the "so what" in one sentence.'] },
    quiz: [
      { q: 'What makes a story rather than a description?', o: ['Length', 'Change and consequence', 'Jokes', 'Statistics'], a: 1, w: 'A disruption followed by consequences drives a story.' }
    ] },
  { t: 'Details, senses and stakes', mins: 8,
    intro: 'General stories are forgettable. Specific ones stick. Concrete detail, a touch of emotion and something at stake make listeners lean in.',
    points: [
      ['Show, don\'t tell', 'Not "I was nervous". Say "my hands were wet and the slide notes shook".'],
      ['Use the five senses', 'One smell, one sound or one texture can place people in the scene.'],
      ['Stakes', 'What could have been lost? If nothing is at risk, nobody cares what happens.'],
      ['Include dialogue', 'Quote what people actually said. It brings scenes to life.']
    ],
    tips: ['Name people and places instead of "my boss" or "a city".', 'Cut adjectives, keep nouns and verbs.', 'Pause before the turning point.'],
    ex: { t: 'Make it vivid', steps: ['Take your spine story from last lesson.', 'Add three concrete details and one line of dialogue.', 'State the stakes in one sentence.', 'Tell it again and notice the audience reaction.'] },
    quiz: [
      { q: 'Which line is strongest?', o: ['I was nervous.', 'It was a stressful day.', 'My hands were damp and the notes were shaking.', 'It was hard.'], a: 2, w: 'Specific physical detail shows the emotion without naming it.' }
    ] },
  { t: 'Stories for work: STAR', mins: 8,
    intro: 'In interviews, pitches and performance reviews, a structured story shows your impact. STAR keeps it tight.',
    points: [
      ['Situation', 'One or two sentences of context.'],
      ['Task', 'Your responsibility or the challenge.'],
      ['Action', 'What you did, in first person, with your decisions.'],
      ['Result', 'Measurable outcome plus what you learned.']
    ],
    tips: ['Spend 60 percent of your time on Action.', 'Quantify results: time saved, money, satisfaction.', 'Build a bank of five stories that can answer most questions.'],
    ex: { t: 'Story bank', steps: ['List five moments you are proud of.', 'Write each in STAR in four lines.', 'Tag each with themes: leadership, conflict, failure, learning.', 'Practise two aloud.'] },
    quiz: [
      { q: 'Where should most of a STAR answer focus?', o: ['Situation', 'Task', 'Action', 'Thanks'], a: 2, w: 'Your actions show your skill and judgement.' }
    ] }
  ]
},
{
  id: 'listen', title: 'Listening and Conversation', skill: 'listening', hue: 150, cat: 'Communication',
  blurb: 'Become the person people love talking to.',
  lessons: [
  { t: 'Listen to understand', mins: 7,
    intro: 'Most people listen to reply. Real listening means holding your response until you truly understand the other person.',
    points: [
      ['Aim for 70/30', 'In most conversations, listening 70 percent and talking 30 percent builds trust and information.'],
      ['Reflect back', 'Paraphrase what you heard: "So the deadline is the real problem, not the budget?" People feel heard and correct misunderstandings.'],
      ['Notice emotion', 'Name the feeling you hear: "That sounds frustrating". You don\'t need to fix it.'],
      ['Stop planning your reply', 'Let their sentence finish. A short pause before replying signals respect.']
    ],
    tips: ['Put your phone face-down and out of reach.', 'Nod and use short sounds ("mm") instead of interrupting.', 'Ask "is there more?" before moving on.'],
    ex: { t: 'Reflect three times', steps: ['In your next three conversations, paraphrase once before giving your view.', 'Notice how the other person reacts.', 'Write down what you learned that you would have missed.'] },
    quiz: [
      { q: 'What is paraphrasing for?', o: ['Showing off memory', 'Confirming understanding and making them feel heard', 'Changing the topic', 'Ending the chat'], a: 1, w: 'It checks accuracy and builds trust.' }
    ] },
  { t: 'Ask better questions', mins: 7,
    intro: 'Good questions are the shortest path to a good conversation. Open, curious and specific beats clever.',
    points: [
      ['Open over closed', '"What was the hardest part?" beats "Was it hard?".'],
      ['Follow-ups are gold', '"What makes you say that?", "What happened next?", "How did that feel?"'],
      ['Use silence', 'After they answer, wait 3 seconds. People often add the real answer.'],
      ['Avoid disguised opinions', '"Don\'t you think we should...?" is not a question. Ask what they think first.']
    ],
    tips: ['Prepare three questions before important meetings.', 'Ask about experiences, not just facts.', 'Use "tell me more about..." anywhere.'],
    ex: { t: 'Question ladder', steps: ['Pick a person you know and ask one open question.', 'Ask three follow-ups without sharing your own story.', 'Reflect: what surprised you?'] },
    quiz: [
      { q: 'Which is an open question?', o: ['Did you like it?', 'Was it easy?', 'What stood out to you?', 'Right?'], a: 2, w: 'Open questions invite explanation, not yes or no.' }
    ] },
  { t: 'From small talk to real talk', mins: 7,
    intro: 'Small talk is a doorway. Use it to find common ground, then move toward something real.',
    points: [
      ['Share then ask', 'Offer a bit about yourself, then hand the question back. It makes the exchange two-way.'],
      ['Use FORD', 'Family, Occupation, Recreation, Dreams: a simple menu of topics.'],
      ['Remember names', 'Repeat their name once in the first minute, and use a visual hook.'],
      ['Exit gracefully', 'End with warmth: "I\'ve really enjoyed this. I\'m going to grab some water, but let\'s catch up later."']
    ],
    tips: ['Comment on the shared situation to open ("How did you find the session?").', 'Be the first to introduce yourself.', 'Follow up within 24 hours with one specific detail.'],
    ex: { t: 'Three hellos', steps: ['This week, start a conversation with three people you do not know well.', 'Use share-then-ask.', 'Remember one detail from each and mention it next time.'] },
    quiz: [
      { q: 'What does "share then ask" mean?', o: ['Share a secret then leave', 'Offer a bit about yourself then ask them', 'Ask only', 'Share only'], a: 1, w: 'It keeps the conversation balanced and warm.' }
    ] }
  ]
},
{
  id: 'conf', title: 'Confidence and Presence', skill: 'confidence', hue: 330, cat: 'Mindset',
  blurb: 'Build real confidence through evidence, reps and recovery.',
  lessons: [
  { t: 'Self-talk and your evidence file', mins: 7,
    intro: 'Confidence is not a feeling you wait for. It is a record of evidence you build and review.',
    points: [
      ['Notice the inner critic', 'You can\'t change what you don\'t notice. Write down the sentence your mind says before a scary task.'],
      ['Talk to yourself like a friend', 'Say what you would say to a friend in the same position. Most people are much kinder to others.'],
      ['Keep an evidence file', 'A note of wins, thank-yous and tough things you handled. Read it before big moments.'],
      ['Focus on process', 'Confidence grows from "I prepared and did it", not from "I was perfect".']
    ],
    tips: ['Write three specific wins at the end of each day.', 'Replace "I can\'t" with "I can\'t yet".', 'Screenshot kind messages into a folder.'],
    ex: { t: 'Start the file', steps: ['Open a note called "Evidence".', 'Add 5 things you did well in the last year.', 'Add one from today.', 'Read it before your next hard task.'] },
    quiz: [
      { q: 'What builds durable confidence?', o: ['Waiting to feel ready', 'Evidence from doing hard things', 'Avoiding mistakes', 'Compliments only'], a: 1, w: 'Evidence from action beats mood.' }
    ] },
  { t: 'The exposure ladder', mins: 8,
    intro: 'Confidence in speaking comes from reps. Gradual exposure to slightly uncomfortable situations expands your comfort zone safely.',
    points: [
      ['Build a ladder', 'List situations from easiest to scariest: talk to a friend, a colleague, a small meeting, a larger meeting, a talk.'],
      ['Aim for 70% comfortable', 'Pick the rung that feels a little scary but doable. Too hard teaches avoidance.'],
      ['Stay until it eases', 'Do not bail at the peak of anxiety. Staying teaches your brain it was safe.'],
      ['Log each rep', 'Record the date and what happened. The log is your evidence.']
    ],
    tips: ['Aim for one small uncomfortable act every day.', 'Say yes to short intros, toasts and updates.', 'Join a group like Toastmasters for structured reps.'],
    ex: { t: 'Build your ladder', steps: ['Write 8 speaking situations, easiest to hardest.', 'Mark where you are now.', 'Schedule one rung for this week.', 'Log it afterwards.'] },
    quiz: [
      { q: 'What is the ideal difficulty for the next rung?', o: ['The scariest', 'The easiest', 'Slightly uncomfortable but doable', 'None'], a: 2, w: 'Challenge without overwhelm builds skill.' }
    ] },
  { t: 'Recover from mistakes', mins: 7,
    intro: 'Everybody stumbles. Audiences care far more about how you recover than about the slip itself.',
    points: [
      ['The spotlight effect', 'We think people notice our mistakes far more than they do. Most don\'t.'],
      ['Acknowledge, then move', 'A calm "let me restate that" is enough. Don\'t over-apologise.'],
      ['Have a reset phrase', 'Pause, breathe, and say "Let me come back to that point."'],
      ['Review without shame', 'Afterward, name one thing to improve and one thing that went well.']
    ],
    tips: ['If you blank, repeat your last sentence. It buys time.', 'Keep a one-line outline on a card.', 'Laugh with the room, not at yourself.'],
    ex: { t: 'Planned stumble', steps: ['Practise a talk and deliberately lose your place once.', 'Use your reset phrase and continue.', 'Notice how small it feels.'] },
    quiz: [
      { q: 'Best response to a mistake mid-talk?', o: ['Apologise repeatedly', 'Stop', 'Pause, reset calmly and continue', 'Speed up'], a: 2, w: 'Calm recovery shows composure.' }
    ] }
  ]
},
{
  id: 'persuade', title: 'Persuasion and Negotiation', skill: 'persuasion', hue: 40, cat: 'Career',
  blurb: 'Influence ethically and negotiate with calm and clarity.',
  lessons: [
  { t: 'Start with their why', mins: 8,
    intro: 'People are persuaded by their own reasons, not yours. Find out what matters to them before you pitch.',
    points: [
      ['Discover first', 'Ask what they care about, what is hard, and what success looks like.'],
      ['Translate features to outcomes', 'Not "it has automation" but "it saves your team five hours a week".'],
      ['Answer "what\'s in it for me?"', 'Say it early, in the audience\'s language.'],
      ['Handle objections as information', 'An objection is a clue to what they value. Ask about it before you answer.']
    ],
    tips: ['Prepare three outcomes for your audience in their words.', 'Say "help me understand..." when you hear resistance.', 'Use their examples.'],
    ex: { t: 'Reframe a pitch', steps: ['Pick something you want to propose.', 'Write who it affects and what they care about.', 'Rewrite your pitch leading with their benefit.', 'Say it in 30 seconds.'] },
    quiz: [
      { q: 'First step of persuading well?', o: ['Present your evidence', 'Learn what matters to them', 'Use urgency', 'Talk more'], a: 1, w: 'Persuasion works when it connects to their goals.' }
    ] },
  { t: 'Principles of influence', mins: 8,
    intro: 'Robert Cialdini identified recurring levers of influence. Use them honestly and they make you clearer, not manipulative.',
    points: [
      ['Reciprocity & liking', 'Give value first. People help people they like and who have helped them.'],
      ['Social proof & authority', 'Show that others like them have done it, and why you are credible.'],
      ['Consistency & commitment', 'Small agreements lead to larger ones. Start with a small ask.'],
      ['Scarcity', 'Real constraints can focus decisions, but only when true.']
    ],
    tips: ['Always be honest. Trust is your long-term asset.', 'Use stories of similar customers.', 'Ask for small next steps, not a big yes.'],
    ex: { t: 'Spot the levers', steps: ['Find an ad or email that persuaded you.', 'Name which principles it used.', 'Plan an honest way to use one in your next ask.'] },
    quiz: [
      { q: 'Which is an example of social proof?', o: ['Only 3 left!', 'Teams like yours have saved 20% with this', 'I\'m the expert', 'Free gift'], a: 1, w: 'People follow what similar others do.' }
    ] },
  { t: 'Negotiation basics', mins: 9,
    intro: 'Good negotiation is a joint problem-solving exercise with preparation, patience and a clear walk-away point.',
    points: [
      ['Know your BATNA', 'Best Alternative To a Negotiated Agreement: your fallback. The better it is, the more power you have.'],
      ['Anchor thoughtfully', 'The first number often frames the discussion. Make yours ambitious but defensible.'],
      ['Trade, don\'t concede', 'Give something only in exchange for something. "If I can do X, can you do Y?"'],
      ['Use silence and questions', 'After you state your ask, stop talking. Ask "what would make this work for you?"']
    ],
    tips: ['Prepare your ideal, target and walk-away numbers.', 'Negotiate the whole package, not one item.', 'Stay calm; slow your voice when pressured.'],
    ex: { t: 'Prep sheet', steps: ['Pick a real negotiation (salary, rent, price).', 'Write your BATNA, target and walk-away.', 'List three things you could trade.', 'Rehearse your opening ask aloud.'] },
    quiz: [
      { q: 'What is a BATNA?', o: ['A bonus', 'Your best alternative if no deal is reached', 'A type of contract', 'An opening offer'], a: 1, w: 'Knowing your alternative sets your confidence and limit.' }
    ] }
  ]
},
{
  id: 'write', title: 'Writing and Clear Thinking', skill: 'writing', hue: 215, cat: 'Career',
  blurb: 'Think clearly, write less, get replies.',
  lessons: [
  { t: 'Answer first: the pyramid', mins: 8,
    intro: 'Clear writing is clear thinking made visible. Put the answer on top, then support.',
    points: [
      ['Start with the answer', 'The reader should know your conclusion in the first sentence.'],
      ['Group your support', 'Two to four supporting points, each backed by facts.'],
      ['One message per paragraph', 'If a paragraph has two ideas, split it.'],
      ['Test with "so what?"', 'Read each point and ask whether it matters to the reader.']
    ],
    tips: ['Write the one-sentence summary before drafting.', 'Use headings and bullets in long documents.', 'Show your draft to someone and ask them to state your point back.'],
    ex: { t: 'Flip an update', steps: ['Take a recent email or note.', 'Rewrite so the conclusion is in line one.', 'Cut anything that doesn\'t support it.', 'Compare length and clarity.'] },
    quiz: [
      { q: 'Where does the conclusion go in the pyramid principle?', o: ['At the end', 'In the middle', 'At the top', 'Nowhere'], a: 2, w: 'Lead with the answer, then support.' }
    ] },
  { t: 'Edit ruthlessly', mins: 7,
    intro: 'First drafts are for you. Edits are for the reader. Cutting makes writing stronger.',
    points: [
      ['Cut 20 percent', 'Remove throat-clearing, repeated points and filler adverbs.'],
      ['Prefer active voice', '"The team shipped it" beats "It was shipped by the team".'],
      ['Short sentences, strong verbs', 'Replace "make a decision" with "decide".'],
      ['Read it aloud', 'Where you stumble, readers stumble.']
    ],
    tips: ['Delete "very", "really", "just", "actually".', 'Wait an hour before editing.', 'Use one idea per sentence.'],
    ex: { t: 'The 20% cut', steps: ['Take a 200-word text.', 'Cut it to 160 words without losing meaning.', 'Read it aloud and fix anything awkward.'] },
    quiz: [
      { q: 'Which is stronger?', o: ['A decision was made by the group.', 'The group decided.', 'It has been decided.', 'The decision is made.'], a: 1, w: 'Active voice is shorter and clearer.' }
    ] },
  { t: 'Emails that get replies', mins: 6,
    intro: 'Email is where most careers are written. Make yours easy to act on.',
    points: [
      ['Subject line as summary', '"Decision needed by Friday: venue choice" beats "Quick question".'],
      ['One ask per email', 'Make the request clear and early.'],
      ['Give a deadline and reason', 'People respond to clear time frames.'],
      ['Make it skimmable', 'Short paragraphs, bold the ask if needed.']
    ],
    tips: ['End with the next step: "I will book it unless I hear otherwise."', 'Keep emails under 150 words when possible.', 'Avoid reply-all unless needed.'],
    ex: { t: 'Rewrite one email', steps: ['Pick an email you need to send.', 'Write the subject as a summary.', 'State the ask in the first two lines.', 'Add a deadline.'] },
    quiz: [
      { q: 'Best subject line?', o: ['Hi', 'Quick question', 'Approval needed by Fri: Q4 budget', 'Re: Re: Fwd'], a: 2, w: 'It tells the reader the action and deadline.' }
    ] }
  ]
},
{
  id: 'learn', title: 'Learn Faster', skill: 'learning', hue: 270, cat: 'Mindset',
  blurb: 'The meta-skill: master anything with less time.',
  lessons: [
  { t: 'Active recall and spacing', mins: 8,
    intro: 'Re-reading feels productive but works poorly. Testing yourself and spreading practice over time works far better.',
    points: [
      ['Active recall', 'Close the book and write down what you remember. The struggle is the learning.'],
      ['Spaced repetition', 'Review after 1 day, 3 days, 1 week, 1 month. This app\'s Review tab does it for you.'],
      ['Interleave topics', 'Mix problems or skills instead of repeating one block.'],
      ['Sleep', 'Memory consolidates during sleep. Study, then sleep, then review.']
    ],
    tips: ['Turn notes into questions.', 'Do the Review tab daily, even for 3 minutes.', 'Prefer short, frequent sessions to marathons.'],
    ex: { t: 'Brain dump', steps: ['Close all notes.', 'Write everything you remember about the last lesson.', 'Check what you missed.', 'Review the gaps tomorrow.'] },
    quiz: [
      { q: 'Which method beats re-reading?', o: ['Highlighting', 'Active recall', 'Copying notes', 'Listening twice'], a: 1, w: 'Retrieval strengthens memory.' }
    ] },
  { t: 'Deliberate practice', mins: 8,
    intro: 'Hours alone don\'t make you better. Focused practice at the edge of your ability, with feedback, does.',
    points: [
      ['Pick a narrow target', 'Work on one sub-skill, like transitions or pace.'],
      ['Stretch zone', 'Work just beyond comfort. Too easy stalls, too hard overwhelms.'],
      ['Get fast feedback', 'Record yourself, ask a coach or friend, or compare to a model.'],
      ['Repeat and refine', 'Short, focused reps beat long distracted sessions.']
    ],
    tips: ['Time-box 25 minutes of full focus.', 'Write one thing to fix before each rep.', 'Find a model and study what they do.'],
    ex: { t: 'One sub-skill week', steps: ['Choose one speaking sub-skill.', 'Define what "good" looks like.', 'Do 5 short recorded reps this week.', 'Review the recordings and pick the next target.'] },
    quiz: [
      { q: 'What makes practice deliberate?', o: ['Many hours', 'Specific goals, stretch and feedback', 'Doing what you like', 'Passive reading'], a: 1, w: 'Targeted effort with feedback creates growth.' }
    ] },
  { t: 'Build your learning system', mins: 7,
    intro: 'Motivation fluctuates; systems don\'t. Design a small routine you can keep.',
    points: [
      ['Fix the time', 'Link learning to an existing habit: after morning coffee, 15 minutes here.'],
      ['Weekly review', 'Every Sunday: what did I learn, what stuck, what is next?'],
      ['Teach it (Feynman)', 'Explain a concept in simple words. Gaps in explanation are gaps in understanding.'],
      ['Track streaks gently', 'Don\'t break the chain twice. A missed day is fine; two is a pattern.']
    ],
    tips: ['Make it easy to start: tool open, plan ready.', 'Celebrate small wins.', 'Start with 10 minutes, then grow.'],
    ex: { t: 'Design your week', steps: ['Pick a daily 15-minute slot.', 'Set a recurring reminder.', 'Plan this week\'s lessons and drills.', 'Set a Sunday review.'] },
    quiz: [
      { q: 'What keeps learning going long term?', o: ['Willpower', 'A small repeatable system', 'Big bursts', 'Perfect conditions'], a: 1, w: 'Routines beat motivation.' }
    ] }
  ]
},
{
  id: 'lead', title: 'Leadership and Emotional Intelligence', skill: 'leadership', hue: 5, cat: 'Career',
  blurb: 'Lead yourself first, then others, with clarity and care.',
  lessons: [
  { t: 'Self-awareness and regulation', mins: 8,
    intro: 'Emotional intelligence starts with noticing your own state. You can\'t lead others well if you are hijacked by your emotions.',
    points: [
      ['Name it to tame it', 'Labelling an emotion ("I feel defensive") reduces its intensity.'],
      ['The six-second pause', 'Take a breath before replying to something provocative.'],
      ['Know your triggers', 'Notice patterns: tone, topics, tiredness.'],
      ['Choose your response', 'Between stimulus and response there is a gap. Practise widening it.']
    ],
    tips: ['Check in with yourself at the start of meetings.', 'Sleep, food and movement affect mood more than you think.', 'Write emotionally heated replies, then wait before sending.'],
    ex: { t: 'Trigger log', steps: ['For three days note when you felt a strong reaction.', 'Write the trigger, the feeling and what you did.', 'Choose one alternative response.'] },
    quiz: [
      { q: 'What does "name it to tame it" mean?', o: ['Give pets names', 'Labelling emotions reduces their intensity', 'Ignore feelings', 'Tell everyone'], a: 1, w: 'Labelling calms the emotional response.' }
    ] },
  { t: 'Give feedback with SBI', mins: 8,
    intro: 'Great leaders give feedback that is specific and kind. SBI is a simple, effective format.',
    points: [
      ['Situation', 'When and where: "In yesterday\'s client call..."'],
      ['Behavior', 'What you observed, not interpretations: "you interrupted twice".'],
      ['Impact', 'The effect: "the client stopped sharing their concerns".'],
      ['Then ask', 'Invite their view: "How did it feel from your side?"']
    ],
    tips: ['Give feedback soon and in private.', 'Balance praise with specifics, not just "good job".', 'End with support: "How can I help?"'],
    ex: { t: 'Write two SBIs', steps: ['Write one positive and one constructive SBI.', 'Check each is about behaviour, not character.', 'Deliver one this week.'] },
    quiz: [
      { q: 'In SBI, behaviour should be...', o: ['An interpretation', 'What you directly observed', 'A guess about motive', 'A label'], a: 1, w: 'Observable facts keep feedback fair and clear.' }
    ] },
  { t: 'Run clearer meetings', mins: 7,
    intro: 'Meetings are the stage where your communication shows. Clear outcomes make you someone people want to follow.',
    points: [
      ['Purpose and outcome', 'State why you are meeting and what a good result looks like.'],
      ['Agenda with time', 'Share it beforehand, with owners and minutes.'],
      ['Include quiet voices', 'Ask each person for their view, or use written input first.'],
      ['Close with owners and dates', 'End by confirming decisions, who does what, and by when.']
    ],
    tips: ['Cancel meetings that could be an email.', 'Start and end on time.', 'Send notes within 24 hours.'],
    ex: { t: 'Meeting upgrade', steps: ['Pick a recurring meeting.', 'Write its purpose and desired outcome.', 'Draft an agenda with times.', 'Send a closing recap with actions.'] },
    quiz: [
      { q: 'A good meeting ends with...', o: ['A joke', 'Decisions, owners and deadlines', 'More meetings', 'Silence'], a: 1, w: 'Clarity on actions makes meetings productive.' }
    ] }
  ]
}
];

// Extra quick tips, shown in the Tips tab and as tip of the day.
window.QUICK_TIPS = [
  'Pause for 1 second before answering any question. It sounds thoughtful and cuts fillers.',
  'Speak to one person at a time even in a big room.',
  'Slow is smooth. When in doubt, speak 10 percent slower.',
  'Your first sentence should be rehearsed. Everything else can be flexible.',
  'Use numbers and names. "Three reasons" and "Maria from finance" beat vagueness.',
  'Smile before you speak. It changes your voice, even on a phone call.',
  'Record a voice note every day. Awareness is the cheapest coach.',
  'Stand when you need energy on a call.',
  'Replace "I just wanted to" with the point itself.',
  'Never apologise for being nervous. Most people can\'t tell.',
  'Finish your sentences with a downward tone for authority.',
  'Ask for feedback with one specific question: "What is one thing I could do better?"',
  'Watch great speakers on mute to study body language, then with sound for voice.',
  'Before a meeting, decide the one thing you want to be remembered for saying.',
  'Hydrate. A dry mouth makes clicks and mumbles.',
  'Treat every conversation as a free speaking rep.'
];

window.PROMPTS = [
  'Explain your job to a ten-year-old.',
  'Describe the best piece of advice you ever received.',
  'Convince me to try a hobby you love.',
  'Introduce yourself in a way people will remember.',
  'What is a skill everyone should learn and why?',
  'Describe a mistake that taught you something.',
  'Pitch an idea for a product that would improve your commute.',
  'Explain a complicated thing you understand well.',
  'Tell a story about a time you were out of your depth.',
  'What would you do with an extra hour every day?',
  'Argue for a four-day work week.',
  'Describe your favourite place in three vivid details.',
  'Give a toast for a friend who is starting a new job.',
  'What does good leadership look like to you?',
  'Teach me one thing in 60 seconds.',
  'Sell me the pen on your desk.',
  'What is a belief you have changed your mind about?',
  'Give feedback to a colleague who interrupts a lot.',
  'Describe the last meal you really enjoyed.',
  'Why do stories matter?'
];

window.TWISTERS = [
  'Red leather, yellow leather.',
  'Unique New York, you know you need unique New York.',
  'She sells seashells by the seashore.',
  'Peter Piper picked a peck of pickled peppers.',
  'The sixth sick sheikh\'s sixth sheep\'s sick.',
  'Betty Botter bought some butter but she said the butter\'s bitter.',
  'Truly rural, truly rural, truly rural.',
  'Fresh fried fish, fish fresh fried, fried fish fresh.',
  'Rubber baby buggy bumpers.',
  'Which wristwatches are Swiss wristwatches?'
];

window.JOURNAL_PROMPTS = [
  'What is one thing I communicated well today?',
  'Where did I hold back and why?',
  'Who did I listen to deeply this week?',
  'What is one thing I would do differently in my last conversation?',
  'What am I avoiding that would help me grow?',
  'What did I learn today that I can teach someone?',
  'How did I feel before and after I spoke up?'
];
