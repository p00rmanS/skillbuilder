// Tailored courses: interviews, thinking in English, US culture, tech-rep/WFH careers, vibe coding, entrepreneurship.
Object.assign(window.SKILLS, {
  interview: 'Interview skills',
  fluency: 'English fluency & vocab',
  tech: 'Tech & business'
});

window.COURSES.push(
{
  id: 'interview', title: 'Ace the Interview', skill: 'interview', hue: 160, cat: 'Career',
  blurb: 'Calm, clear answers for remote tech-rep and WFH interviews, even if you tend to stutter or freeze.',
  lessons: [
  { t: 'Your 60-second introduction', mins: 9,
    flow: ['Present', 'Past', 'Future'],
    intro: '"Tell me about yourself" opens almost every interview. A prepared answer removes the scariest moment and sets a calm tone for everything after.',
    points: [
      ['Present', 'Start with what you do now and one strength. "I am an IT support specialist who enjoys solving problems for non-technical people."'],
      ['Past', 'Add two short proofs: a skill, a result, or a project. Bilingual in English, Spanish and Filipino is a real strength for customer roles, so say it.'],
      ['Future', 'Finish with why this role. "I want to use my technical and language skills to help customers in a remote team like yours."'],
      ['Write it, then shrink it', 'Write 120 to 150 words, then cut to about 8 short sentences. Short sentences are easier to say and easier to follow.']
    ],
    tips: ['Memorise the first sentence and the last sentence only. The middle can be flexible.', 'Use short sentences. Long ones increase stumbles and translation in your head.', 'Say it aloud ten times over three days until it feels boring. Boring means automatic.'],
    ex: { t: 'Build and record your intro', steps: ['Write Present, Past, Future in 8 short sentences.', 'Read it aloud slowly and time it. Aim for 60 seconds.', 'Record it in the Practice studio under Mock interview.', 'Repeat for 3 days and note which sentence still trips you.'] },
    quiz: [
      { q: 'What is the PPF structure?', o: ['Past, Present, Future', 'Present, Past, Future', 'Plan, Prepare, Finish', 'Pause, Pace, Finish'], a: 1, w: 'Starting with the present keeps it relevant, then proof, then why this job.' },
      { q: 'Why use short sentences in an interview?', o: ['They sound less intelligent', 'They are easier to say clearly and follow', 'They are longer', 'Interviewers like silence'], a: 1, w: 'Short sentences reduce stumbling and keep your thinking simple.' }
    ] },
  { t: 'Calm speech: pacing, pausing and blocks', mins: 10,
    flow: ['Breathe', 'Start easy', 'Short phrase', 'Pause', 'Repeat'],
    intro: 'Many people hesitate or stutter when nervous or when translating. You can reduce it with pacing and a calm start, and a speech-language pathologist can help further. Stumbling does not make you unqualified. Interviewers mostly judge clarity and honesty.',
    points: [
      ['Easy starts', 'Begin each sentence with a soft, slightly slower first word, as if you were sighing the word out. Tension on the first word creates blocks.'],
      ['Phrase in short chunks', 'Say 4 to 7 words, pause, breathe, then the next chunk. Pausing between phrases is normal and sounds thoughtful.'],
      ['Do not swap or avoid words', 'Replacing a word you fear teaches your brain to fear it more. Say the word slowly and continue. Light, easy repetition is fine.'],
      ['Reduce pressure', 'Tell yourself: "I can take my time." You may say, "Let me take a second to think about that." If you stutter often, a speech-language pathologist can give you personal techniques, and many offer video sessions.']
    ],
    tips: ['Breathe out slowly before you answer, then start on the exhale.', 'Drink water and keep your jaw and shoulders loose.', 'If you block, pause, breathe, and restart the phrase more gently. Do not apologise repeatedly.'],
    ex: { t: 'Easy-start practice', steps: ['Read a paragraph aloud, pausing at every comma and full stop.', 'Start each sentence with a gentle, slightly longer first sound.', 'Answer "Tell me about yourself" in short chunks with a breath between each.', 'Record, then listen only for calm, not for mistakes.'] },
    quiz: [
      { q: 'What helps most when you feel a block coming?', o: ['Swap to an easier word', 'Pause, breathe and restart gently', 'Speak faster to push through', 'Stop talking'], a: 1, w: 'Slow, easy restarts reduce tension and avoidance.' },
      { q: 'Short pauses between phrases usually sound...', o: ['Unprofessional', 'Thoughtful', 'Rude', 'Confusing'], a: 1, w: 'Strong speakers pause constantly.' }
    ] },
  { t: 'Answer the common questions', mins: 10,
    flow: ['Situation', 'Task', 'Action', 'Result'],
    intro: 'Tech-rep interviews repeat the same few questions. Prepare six stories once and you can answer almost anything with STAR.',
    points: [
      ['Strengths and weaknesses', 'Pick a real strength with proof. For a weakness, choose something fixable and show what you are doing about it: "I used to freeze on calls, so I now practise aloud daily."'],
      ['Angry customer story', 'Situation: upset customer. Task: calm them and fix the issue. Action: listened, apologised, solved, confirmed. Result: they thanked you or stayed.'],
      ['Hard technical problem', 'Explain simply: what broke, how you checked, what fixed it. Use plain words, not jargon.'],
      ['Why this company', 'Read their website and one product review. Say one specific thing you like and how you can help.']
    ],
    tips: ['Prepare 6 STAR stories: conflict, mistake, teamwork, speed, learning, customer win.', 'It is fine to say "That is a good question, let me think."', 'Ask for clarification when you do not understand a question. It shows care, not weakness.'],
    ex: { t: 'Six stories', steps: ['Write 6 STAR stories in 4 lines each.', 'Shrink each to about 60 seconds.', 'Practise one per day in the Practice studio.', 'Ask a friend to interview you once.'] },
    quiz: [
      { q: 'What is a good weakness answer?', o: ['"I have no weaknesses"', 'A real, fixable one plus what you are doing about it', 'Something that disqualifies you', 'Avoid answering'], a: 1, w: 'Honesty plus improvement shows maturity.' }
    ] },
  { t: 'Remote interview setup', mins: 7,
    flow: ['Test tech', 'Notes ready', 'Camera at eye level', 'Smile and start'],
    intro: 'Most WFH roles interview by video. A clean setup removes stress so your energy goes into your answers.',
    points: [
      ['Tech check 30 minutes early', 'Test the link, camera, microphone, headphones and internet. Keep your phone hotspot ready as backup.'],
      ['Camera and light', 'Put the camera at eye level, a window or lamp in front of you, a plain background, and look at the camera when you speak.'],
      ['Notes allowed', 'Keep a small sheet with your intro, six story headlines and questions to ask. Do not read it, just glance.'],
      ['Close strong', 'Ask two questions, thank them, and send a short thank-you email within 24 hours.']
    ],
    tips: ['Use wired headphones for clearer audio.', 'Ask them to repeat if the connection is poor.', 'Prepare questions like "What does success look like in the first 90 days?"'],
    ex: { t: 'Dry run', steps: ['Record a 5-minute fake interview on your computer.', 'Check light, sound and framing.', 'Write your two questions to ask.', 'Draft a thank-you email template.'] },
    quiz: [
      { q: 'Best camera position?', o: ['Below your chin', 'At eye level', 'Far to the side', 'Off'], a: 1, w: 'Eye level feels natural and professional.' }
    ] }
  ]
},
{
  id: 'fluency', title: 'Think in English', skill: 'fluency', hue: 200, cat: 'Communication',
  blurb: 'Stop translating, build vocabulary visually, and speak clearly with your Filipino accent.',
  lessons: [
  { t: 'Stop translating in your head', mins: 10,
    flow: ['Idea or picture', 'Simple English', 'Say it'],
    intro: 'Translating is a stage, not a flaw. The goal is not perfect English; it is shorter distance between idea and words. You already speak several languages, so your brain can do this.',
    points: [
      ['Think in pictures first', 'Imagine the thing, then say the English word. Skip the Filipino or Spanish word in between. Visual learners have an advantage here.'],
      ['Narrate your day', 'Talk to yourself in English: "I am making coffee. I am opening my laptop." Simple sentences are enough.'],
      ['Use simple English', 'Simple, clear sentences beat fancy ones. "I fixed the issue" is better than a complicated phrase you must translate.'],
      ['Shadow native speakers', 'Play a short video, pause, repeat each sentence with the same rhythm. This trains speech patterns directly without translation.']
    ],
    tips: ['Label 20 objects in your room with English sticky notes.', 'Dream, count and talk to yourself in English for 10 minutes a day.', 'Allow "good enough" English. Perfect grammar can wait.'],
    ex: { t: '10-minute narration', steps: ['Set a timer for 5 minutes and narrate what you are doing aloud in English.', 'Write down every word you could not find.', 'Look up those words with pictures.', 'Narrate again tomorrow using the new words.'] },
    quiz: [
      { q: 'Which habit best reduces mental translation?', o: ['Translate every sentence perfectly', 'Think in pictures and use simple English', 'Avoid speaking', 'Memorise a dictionary'], a: 1, w: 'Linking ideas directly to English shortens the path.' }
    ] },
  { t: 'Vocabulary that sticks (visual method)', mins: 9,
    flow: ['Picture', 'Word', 'Phrase', 'Use today'],
    intro: 'You do not need thousands of rare words. You need the 500 to 1000 that appear at work, and you need them in phrases. As a Spanish speaker, you also get a shortcut.',
    points: [
      ['Spanish cognates are free words', 'Many Spanish words match English: nación → nation, información → information, importante → important, posible → possible. Endings -ción become -tion and -dad becomes -ty (responsabilidad → responsibility). Learn the pattern and you unlock hundreds of words.'],
      ['Picture, word, phrase', 'For each word, find a picture, learn a short phrase ("resolve an issue"), and say a sentence of your own. Phrases are easier to say fluently than single words.'],
      ['Five a day', 'Five new words a day, used at least twice that same day, beat fifty you never use. Keep a visual deck in the Tips and Review tabs.'],
      ['Work power words', 'Escalate, clarify, resolve, troubleshoot, priority, deadline, follow up, update, confirm, assist. Learn these first.']
    ],
    tips: ['Use image search for every new noun, verb and idiom.', 'Learn collocations: make a decision, solve a problem, take responsibility.', 'Use the new word in a message to a friend before you sleep.'],
    ex: { t: 'Cognate hunt', steps: ['Write 10 Spanish business words ending in -ción or -dad.', 'Convert them to English and check spelling.', 'Say each in a sentence about your work.', 'Add 5 to your word log.'] },
    quiz: [
      { q: 'Spanish "responsabilidad" is closest to...', o: ['Respondability', 'Responsibility', 'Respect', 'Reaction'], a: 1, w: 'The ending -dad usually becomes -ty in English.' }
    ] },
  { t: 'Ready-made phrases for work', mins: 8,
    flow: ['Learn chunk', 'Fill in the blank', 'Say it live'],
    intro: 'Native speakers do not build every sentence word by word. They use chunks. Learn chunks and you speak faster with less translating and fewer stumbles.',
    points: [
      ['Clarify', '"Let me make sure I understand." "Could you say that again?" "Just to confirm, you mean..."'],
      ['Buy thinking time', '"Good question, let me think." "That is a great point." "Give me a second."'],
      ['Explain a fix', '"The issue is..." "What I did was..." "To fix this, you can..."'],
      ['Close', '"Is there anything else I can help you with?" "Thank you for your patience." "I will follow up by Friday."']
    ],
    tips: ['Memorise 5 chunks per week and use them in every call or practice.', 'Write them on sticky notes near your screen.', 'Listen for chunks in videos of customer support calls.'],
    ex: { t: 'Chunk deck', steps: ['Pick 5 chunks from this lesson.', 'Write one real example sentence for each.', 'Say them aloud 5 times each.', 'Use at least two in a practice answer today.'] },
    quiz: [
      { q: 'Why learn chunks?', o: ['They are longer', 'They let you speak faster without building each sentence', 'Native speakers hate them', 'They avoid grammar'], a: 1, w: 'Chunks are ready-made, so there is less to translate.' }
    ] },
  { t: 'Clear Filipino-English accent', mins: 9,
    flow: ['Listen', 'Copy rhythm', 'Stress key words', 'Finish word endings'],
    intro: 'You do not need to erase your accent. Clarity is the goal. Customers and interviewers understand a clear accent easily, and bilingual, multicultural speakers are in demand.',
    points: [
      ['Stress key words', 'English is stress-timed: important words are louder and longer, small words are quick. Stress verbs, nouns and numbers: "I can HELP you with that PROBlem."'],
      ['Finish the endings', 'Clearly pronounce final sounds like -t, -d, -s, -k, so "send" is not "sen" and "files" is not "file".'],
      ['Tricky sounds', 'Practise th (think, three), v versus b (very, berry), f versus p (fine, pine), and short i versus long ee (ship, sheep). Use slow tongue twisters from the Practice tab.'],
      ['Rhythm over single sounds', 'Intonation and rhythm matter more than any one sound. Shadow a clear speaker and copy the music of the sentence.']
    ],
    tips: ['Slow down 10 percent. Most unclear speech is speed.', 'Record yourself and compare with a native clip of the same sentence.', 'Ask a friend which words sound unclear, then drill only those.'],
    ex: { t: 'Shadow and compare', steps: ['Pick 30 seconds of a clear speaker.', 'Repeat each sentence immediately, copying stress and rhythm.', 'Record yourself and compare with the original.', 'Pick one sound to drill tomorrow.'] },
    quiz: [
      { q: 'What matters most for being understood?', o: ['Losing your accent', 'Clear stress, rhythm and word endings', 'Speaking fast', 'Using rare words'], a: 1, w: 'Clarity beats accent removal.' }
    ] }
  ]
},
{
  id: 'culture', title: 'American Culture and Small Talk', skill: 'listening', hue: 30, cat: 'Communication',
  blurb: 'Small talk, workplace norms and idioms, so American customers and coworkers feel at ease.',
  lessons: [
  { t: 'The small-talk playbook', mins: 8,
    flow: ['Greet', 'Ask', 'Share', 'Follow up', 'Exit kindly'],
    intro: 'Small talk is a social ritual, not a test. People care more about warmth than perfect answers. You already love small talk, so you have a head start.',
    points: [
      ['"How are you?" is a greeting', 'Most Americans answer "Good, you?" or "Pretty good, thanks." It is rarely a real question. Reply quickly and ask it back.'],
      ['Safe topics', 'Weather, weekend plans, food, travel, sports, pets, shows, and work. Avoid politics, religion, salary and age early on.'],
      ['Three-part answer', 'Answer, add a detail, ask back: "I went hiking. It was beautiful. Do you like being outdoors?"'],
      ['Follow-up questions', 'Pick one word they said and ask about it: "A road trip? Where did you go?"']
    ],
    tips: ['Compliment something specific: "Great mug!"', 'Smile and keep light eye contact.', 'Say "Nice talking to you" to end gracefully.'],
    ex: { t: 'Three chats', steps: ['Practise the three-part answer for 3 common questions aloud.', 'Use "How is your day going?" with three people this week.', 'Write one follow-up question for each person.'] },
    quiz: [
      { q: 'How should you reply to "How are you?"', o: ['Tell your whole life story', 'A quick positive answer and ask it back', 'Ignore it', 'Complain at length'], a: 1, w: 'It is a greeting. Be brief and friendly.' }
    ] },
  { t: 'Workplace norms in the US', mins: 8,
    flow: ['Friendly', 'Direct', 'On time', 'Proactive'],
    intro: 'Customs differ across cultures. Knowing common US norms helps you read situations and avoid misunderstandings. These are general patterns, and people vary.',
    points: [
      ['Friendly but professional', 'First names are normal, even with managers. Light humour and warmth are expected, especially in customer service.'],
      ['Direct communication', 'Americans often say what they mean. "Can you do this by Friday?" is a real request. Saying "I cannot do it by Friday, but I can by Monday" is welcomed, not rude.'],
      ['Time matters', 'Be on time, or a few minutes early, to calls. Send a message if you are late.'],
      ['Speak up and self-advocate', 'Share progress and wins. Quiet effort can go unnoticed. Say "Here is what I completed this week."']
    ],
    tips: ['Say please, thank you and sorry naturally. They are used a lot.', 'Smile in your voice during calls. Customers can hear it.', 'Ask a colleague "What is normal here for ...?" when unsure.'],
    ex: { t: 'Weekly win note', steps: ['Write 3 things you did this week.', 'Turn them into 3 short sentences starting with a verb.', 'Say them aloud as if to a manager.'] },
    quiz: [
      { q: 'In many US workplaces, saying "I can do it by Monday" is...', o: ['Rude', 'Honest and welcome', 'Forbidden', 'Weak'], a: 1, w: 'Clear honesty is usually appreciated.' }
    ] },
  { t: 'Idioms and phrases you will hear', mins: 7,
    flow: ['Hear it', 'Guess', 'Check', 'Use it'],
    intro: 'Idioms trip up even strong English speakers. Learn the common ones used at work and you will stop being surprised.',
    points: [
      ['Meetings', '"Touch base" = brief catch-up. "Circle back" = return to it later. "On the same page" = in agreement. "Loop me in" = include me.'],
      ['Estimates', '"Ballpark" = rough number. "ASAP" = as soon as possible. "EOD" = end of day. "ETA" = estimated arrival or finish.'],
      ['Support', '"Heads up" = early warning. "No worries" = it is fine. "Hang tight" = please wait. "Walk me through" = explain step by step.'],
      ['Feedback', '"Nice work" or "good job" is a real compliment. "Let us revisit this" can mean a polite no.']
    ],
    tips: ['Ask "What does that mean?" It is normal and shows curiosity.', 'Keep an idiom log with a picture or meaning.', 'Watch American sitcoms with English subtitles.'],
    ex: { t: 'Idiom card set', steps: ['Pick 6 idioms from this lesson.', 'Draw or find a small picture for each.', 'Write one sentence of your own.', 'Use two this week.'] },
    quiz: [
      { q: 'What does "touch base" mean?', o: ['Play baseball', 'Brief catch-up', 'Write a report', 'Say goodbye'], a: 1, w: 'It means a short check-in.' }
    ] }
  ]
},
{
  id: 'support', title: 'Tech Rep and WFH Careers', skill: 'tech', hue: 120, cat: 'Career',
  blurb: 'Win remote customer-support and technical-rep roles, and thrive working from home.',
  lessons: [
  { t: 'What employers look for', mins: 8,
    flow: ['Apply', 'Assessment', 'Interview', 'Training', 'Live calls'],
    intro: 'Remote tech-rep and support roles hire for communication, patience and basic troubleshooting more than advanced coding. Your IT background is a strength.',
    points: [
      ['Core skills', 'Clear speech, empathy, typing speed, basic troubleshooting, and comfort with tools like help-desk software, CRM and screen share.'],
      ['Assessments', 'Many companies test with a voice or typing exercise, a short grammar quiz, or a scenario like "customer cannot log in".'],
      ['Bilingual bonus', 'English plus Spanish opens bilingual support roles, often paid more. Mention it first.'],
      ['Where to look', 'Remote job boards, company career pages, BPO and outsourcing firms, and software companies. Apply to many; interviews improve quickly with practice.']
    ],
    tips: ['Tailor your CV: put "bilingual (English, Spanish, Filipino)" and your tools at the top.', 'Practise typing with free typing tests.', 'Apply consistently, 5 per week.'],
    ex: { t: 'Role map', steps: ['Collect 5 job posts for remote tech or support roles.', 'Highlight repeated skills.', 'Mark which you already have and which to learn.', 'Update your CV top line.'] },
    quiz: [
      { q: 'Which strength helps in bilingual support roles?', o: ['Speaking only one language', 'English plus Spanish', 'Typing slowly', 'Avoiding customers'], a: 1, w: 'Bilingual speakers are valued by employers.' }
    ] },
  { t: 'The call flow and angry customers', mins: 9,
    flow: ['Greet', 'Listen', 'Empathise', 'Fix', 'Confirm', 'Close'],
    intro: 'A repeatable call flow keeps you calm and sounding professional, even when the customer is upset or you are nervous.',
    points: [
      ['Greet and listen', '"Thank you for calling, this is [your name]. How can I help?" Let them finish. Take notes.'],
      ['Empathise', '"I understand how frustrating that is." One sentence of empathy calms most people.'],
      ['LAST for upset customers', 'Listen, Apologise, Solve, Thank. "I am sorry for the trouble. Here is what I can do right now."'],
      ['Confirm and close', '"Is that working now?" then "Is there anything else I can help with?" and thank them.']
    ],
    tips: ['Never say "calm down". Say "I want to fix this for you".', 'Lower your pace and pitch when they get louder.', 'If you do not know, say "Let me find out and follow up".'],
    ex: { t: 'Role-play a call', steps: ['Write a 6-step script for a "cannot log in" call.', 'Say it aloud twice at slow pace.', 'Record yourself in the Practice studio and check your tone.', 'Practise the LAST apology line.'] },
    quiz: [
      { q: 'What does LAST stand for?', o: ['Listen, Apologise, Solve, Thank', 'Learn, Act, Stop, Talk', 'Look, Ask, Shout, Type', 'Lead, Assist, Stay, Tell'], a: 0, w: 'It guides you through upset customer calls.' }
    ] },
  { t: 'Thrive working from home', mins: 7,
    flow: ['Routine', 'Workspace', 'Written updates', 'Boundaries'],
    intro: 'WFH rewards self-management. A simple routine and clear writing make you a standout remote worker.',
    points: [
      ['Routine', 'Start and end at fixed times and use a short start-up ritual: water, plan, open tools.'],
      ['Workspace', 'A fixed spot, good chair, headset with microphone, and a backup internet plan such as a mobile hotspot.'],
      ['Write clearly', 'Short, specific messages with the ask first. "Customer X still cannot log in after reset. Need access to logs. By 3pm please."'],
      ['Boundaries', 'Take breaks, move, log off on time. Burnout hurts your voice and your confidence.']
    ],
    tips: ['Use a daily 3-item to-do list.', 'Over-communicate: short end-of-day updates build trust.', 'Join a remote community or Discord to avoid isolation.'],
    ex: { t: 'Design your day', steps: ['Write your ideal WFH schedule.', 'List your setup gaps.', 'Write one practice status update.'] },
    quiz: [
      { q: 'A good remote message...', o: ['Is long and vague', 'States the ask clearly and early', 'Waits until the weekend', 'Avoids details'], a: 1, w: 'Clear, short messages keep remote work moving.' }
    ] }
  ]
},
{
  id: 'vibe', title: 'Vibe Coding, Visually', skill: 'tech', hue: 285, cat: 'Career',
  blurb: 'Build real things with AI by describing them. Learn the picture of how software works.',
  lessons: [
  { t: 'The vibe coding loop', mins: 8,
    flow: ['Describe', 'AI builds', 'Run it', 'Look', 'Refine'],
    intro: 'Vibe coding means describing what you want in plain language and letting AI write the code, then testing and refining. You still steer: you decide what is good.',
    points: [
      ['Describe the outcome', 'Say what a person sees and does: "A page with a big button that shows a random motivational quote."'],
      ['Run and look', 'Open it. Click it. Compare with what you imagined.'],
      ['Refine in small steps', 'Change one thing at a time: "Make the button blue and add a copy button." Small steps are easier to fix.'],
      ['You are the director', 'AI is fast but can be wrong. Your job is taste, testing and clear requests.']
    ],
    tips: ['Start tiny: one page, one feature.', 'Save working versions often.', 'Ask the AI to explain any part you do not understand.'],
    ex: { t: 'Your first tiny app', steps: ['Pick an idea: a tip generator, a tip tracker, or a simple timer.', 'Describe it in 3 sentences to an AI coding tool.', 'Run the result and list what is wrong.', 'Ask for fixes one at a time.'] },
    quiz: [
      { q: 'What is the best way to refine AI-made code?', o: ['Rewrite everything', 'Small, specific requests tested one at a time', 'Ignore errors', 'Ask for everything at once'], a: 1, w: 'Small steps keep you in control.' }
    ] },
  { t: 'Prompting like a pro', mins: 9,
    flow: ['Goal', 'Context', 'Constraints', 'Example', 'Ask for a plan'],
    intro: 'Better prompts give better apps. Clear goals and context beat clever tricks.',
    points: [
      ['Goal and user', 'Who is it for and what should it do? "A web app for me to track daily speaking practice."'],
      ['Context and constraints', 'Say the tools, style and limits: "Single HTML file, no frameworks, mobile friendly, dark mode."'],
      ['Show an example', 'Paste a sample input, a screenshot, or describe a similar app. As a visual learner, screenshots are your superpower.'],
      ['Ask for a plan first', '"Before coding, list the steps." Review it, then say go.']
    ],
    tips: ['Paste exact error messages back to the AI.', 'Ask "What could go wrong?" before shipping.', 'Say "explain like I am new" whenever something is unclear.'],
    ex: { t: 'Prompt rewrite', steps: ['Write a vague prompt for your idea.', 'Rewrite it with goal, context, constraints, example.', 'Compare the two results.'] },
    quiz: [
      { q: 'What is useful to give an AI coding tool?', o: ['Only a single word', 'A screenshot or example and clear constraints', 'Nothing', 'A long story'], a: 1, w: 'Context and examples improve accuracy.' }
    ] },
  { t: 'Understand the picture of the web', mins: 9,
    flow: ['HTML structure', 'CSS style', 'JavaScript behaviour', 'Data and APIs'],
    intro: 'You do not need to memorise syntax, but a mental picture of how software fits together makes you much better at directing AI and debugging.',
    points: [
      ['HTML is the skeleton', 'Headings, buttons and text. Think of boxes inside boxes.'],
      ['CSS is the paint and layout', 'Colours, spacing, fonts and how things move around on different screen sizes.'],
      ['JavaScript is the behaviour', 'What happens when you click, type or load: showing a message, saving data, calling services.'],
      ['Read errors like clues', 'Open the browser console (F12). Red text tells you what broke. Copy it to the AI with what you were doing.']
    ],
    tips: ['Use browser developer tools to inspect any website visually.', 'Watch short visual explainers on "how the web works".', 'Use Git to save versions so you can undo mistakes.'],
    ex: { t: 'Inspect and tweak', steps: ['Open any website and press F12.', 'Select an element and change its text or colour in the tools.', 'Describe the change to the AI in your own words.'] },
    quiz: [
      { q: 'Which part controls what happens when you click a button?', o: ['HTML', 'CSS', 'JavaScript', 'Colours'], a: 2, w: 'JavaScript is the behaviour layer.' }
    ] },
  { t: 'Ship it and show it', mins: 8,
    flow: ['Idea', 'Build', 'Publish', 'README', 'Show in interviews'],
    intro: 'A small published project is proof of skill and a great interview story. It shows initiative, problem solving and communication.',
    points: [
      ['Finish small', 'A working small tool beats a half-built big idea.'],
      ['Publish for free', 'Use a free static host so it has a link anyone can open.'],
      ['Write a short README', 'What it is, who it is for, what you learned, and a screenshot. Writing it also improves your English.'],
      ['Tell the story', 'In interviews: "I noticed a problem, I built a tool using AI, I tested it, and I improved it." That is STAR with proof.']
    ],
    tips: ['Build things you will use yourself.', 'Add a project line to your CV.', 'Keep a list of mini project ideas.'],
    ex: { t: 'Portfolio piece', steps: ['Pick a tiny project.', 'Publish it with a link.', 'Write a 5-line README.', 'Practise a 60-second story about it.'] },
    quiz: [
      { q: 'Why is a published project helpful?', o: ['It is decoration', 'It proves skill and gives you an interview story', 'It replaces English', 'It is required by law'], a: 1, w: 'Evidence beats claims.' }
    ] }
  ]
},
{
  id: 'entre', title: 'Entrepreneurship Starter', skill: 'tech', hue: 340, cat: 'Career',
  blurb: 'Spot problems, validate ideas cheaply, pitch clearly and win first customers.',
  lessons: [
  { t: 'Find a problem worth solving', mins: 8,
    flow: ['Talk to people', 'Spot pain', 'Pick a niche', 'Test'],
    intro: 'Businesses start with a painful problem, not a clever idea. Your languages and your experience give you access to niches others miss.',
    points: [
      ['Talk to ten people', 'Ask about their last frustration, not about your idea: "What was hardest about it?" "What did you try?"'],
      ['Look for painful, frequent, paid', 'The best problems happen often, hurt, and people already spend time or money on them.'],
      ['Use your unfair advantages', 'English plus Spanish plus Filipino networks, tech skills, remote work experience. Which communities do you understand better than most?'],
      ['Write a one-line problem', '"Small business owners who speak Spanish need help with ___."']
    ],
    tips: ['Keep an "annoyances" list of daily frustrations.', 'Listen more than you talk. It practises your skills too.', 'Prefer a small, clear niche to a big vague one.'],
    ex: { t: 'Ten conversations', steps: ['List 10 people you could ask.', 'Write 3 neutral questions.', 'Talk to 3 this week and note exact words.', 'Highlight the repeated pain.'] },
    quiz: [
      { q: 'What should you ask in early customer conversations?', o: ['Do you like my idea?', 'What was hardest about your last attempt?', 'Will you buy it?', 'Nothing'], a: 1, w: 'Past experiences reveal real needs.' }
    ] },
  { t: 'Validate before you build', mins: 8,
    flow: ['Idea', 'One-page canvas', 'Landing page', 'Pre-sell', 'Build'],
    intro: 'Cheap tests protect your time and money. Validate demand first, then build.',
    points: [
      ['One-page canvas', 'Draw boxes: customer, problem, solution, price, channel, costs. Visual and fast.'],
      ['Landing page test', 'A simple page that explains the offer, with a button to join a waitlist. Vibe coding can build one in an hour.'],
      ['Pre-sell', 'Ask a few people to pay or commit before it exists. Even one yes is strong evidence.'],
      ['Decide with numbers', 'Set a goal such as "5 of 20 say yes" before you test, then follow the result.']
    ],
    tips: ['Test the riskiest assumption first.', 'Offer a small paid pilot for one customer.', 'Do not fall in love with the product, fall in love with the problem.'],
    ex: { t: 'Canvas and test', steps: ['Draw your one-page canvas.', 'Write your riskiest assumption.', 'Design a test and a success number.', 'Run it for 7 days.'] },
    quiz: [
      { q: 'What is the best early signal of demand?', o: ['Compliments', 'Someone paying or committing', 'Likes', 'Your own belief'], a: 1, w: 'Commitment is stronger than praise.' }
    ] },
  { t: 'Pitch in 60 seconds', mins: 8,
    flow: ['Problem', 'Solution', 'Who', 'Proof', 'Ask'],
    intro: 'A pitch is storytelling with an ask. It combines everything you are learning: structure, voice, and calm.',
    points: [
      ['Problem', 'Start with a specific person and pain. "Maria runs a bakery and spends 5 hours a week answering messages."'],
      ['Solution', 'One sentence in plain language. Avoid jargon.'],
      ['Proof', 'A number, a quote, a test result, or a demo.'],
      ['Ask', 'Be specific: "Can I show you a demo this week?" End with a pause.']
    ],
    tips: ['Practise your first sentence until it is automatic.', 'Replace jargon with pictures or examples.', 'Time it: 60 seconds is about 130 words.'],
    ex: { t: 'Pitch and record', steps: ['Write the 5 parts in 1 line each.', 'Say it in 60 seconds.', 'Record it in the Practice studio.', 'Cut any word you stumbled on.'] },
    quiz: [
      { q: 'How should a pitch end?', o: ['Trailing off', 'A specific ask followed by a pause', 'A long apology', 'More slides'], a: 1, w: 'A clear ask prompts action.' }
    ] },
  { t: 'Offers, pricing and first customers', mins: 8,
    flow: ['Offer', 'Price', 'Outreach', 'Deliver', 'Ask for referral'],
    intro: 'The fastest start is a service with your existing skills: bilingual support, simple websites by vibe coding, or IT help. First customers fund everything else.',
    points: [
      ['A clear offer', '"I build a one-page bilingual website for local shops in 3 days for a fixed price."'],
      ['Price on value', 'Charge for the outcome, not the hours. Start with a fair, simple package.'],
      ['Outreach script', '"Hi, I noticed ___. I help businesses like yours with ___. Would a 10-minute chat help?" Short, specific and kind.'],
      ['Deliver and ask', 'Overdeliver once, then ask for a testimonial and one referral.']
    ],
    tips: ['Message 5 people a day. Most will not answer. That is normal.', 'Keep a simple spreadsheet of leads.', 'Collect testimonials and put them on your site.'],
    ex: { t: 'Offer sheet', steps: ['Write your offer in one sentence.', 'Pick a price.', 'Draft an outreach message.', 'Send it to 5 people.'] },
    quiz: [
      { q: 'What makes a good outreach message?', o: ['Long and vague', 'Short, specific and helpful', 'All caps', 'No ask'], a: 1, w: 'Short and specific is easy to respond to.' }
    ] }
  ]
}
);

window.PROMPT_SETS = {
  'Impromptu': window.PROMPTS,
  'Mock interview': [
    'Tell me about yourself.',
    'Why do you want to work for our company?',
    'Tell me about a time you helped an upset customer.',
    'What is your biggest strength and how have you used it?',
    'What is your biggest weakness and what are you doing about it?',
    'Describe a technical problem you solved and how.',
    'How would you explain a Wi-Fi problem to someone who is not technical?',
    'Tell me about a time you made a mistake.',
    'How do you handle a stressful day?',
    'Why should we hire you for a remote role?',
    'How do you stay organised when working from home?',
    'Where do you see yourself in three years?'
  ],
  'Small talk': [
    'A new coworker asks: How was your weekend?',
    'Introduce yourself to someone at a networking event.',
    'A customer says: Crazy weather today, right? Respond and ask a question.',
    'Explain where you are from and what you do in 30 seconds.',
    'Ask someone about their favourite food and follow up.',
    'Chat about a movie or show you watched recently.',
    'Explain a Filipino dish or tradition to someone new.',
    'Make small talk in an elevator in three sentences.'
  ],
  'Pitch': [
    'Pitch a business idea in 60 seconds: problem, solution, ask.',
    'Sell your bilingual support skills to an employer.',
    'Describe a vibe-coded project you want to build.',
    'Explain why a small business should have a website.'
  ]
};

window.TWISTERS.push(
  'Three thin thieves thought thirty-three thoughts.',
  'Very few vans have vivid velvet seats.',
  'Fifty-five fine flags flap on the first floor.',
  'The ship slipped, the sheep slept on the sheet.',
  'Ask the desk to send the files and fix the tests.',
  'I would like to help with that problem right now.'
);
window.JOURNAL_PROMPTS.push(
  'Which English phrase did I learn today and where did I use it?',
  'Where did I translate in my head today and how could I think in pictures instead?',
  'What small win did I have in speaking today?',
  'What is one thing about American culture I noticed today?'
);
window.QUICK_TIPS.push(
  'Prepare 6 STAR stories and you can answer almost any interview question.',
  'Pausing to breathe before answering is a strength in interviews, not a weakness.',
  'Think in pictures first, then English. It cuts mental translation.',
  'Simple English said clearly beats complex English said with stress.',
  'Spanish -ción words become -tion in English: información, information.',
  'Say "Let me make sure I understand" to buy time and show care.',
  'Your accent is fine. Clear stress and finished word endings matter more.',
  '"How are you?" in the US is a greeting. Reply quickly and ask it back.',
  'Send a short thank-you email within 24 hours after every interview.',
  'Build one small thing with AI and publish it. It becomes your best interview story.'
);
window.USER_DEFAULTS = {};
