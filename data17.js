// "Go deeper" material for the original lessons that had none: sections, example script, common mistakes and a 7-day plan.
(() => {
const DP = (sections, st, sl, mistakes, plan) => ({ sections, script: [st, sl], mistakes, plan });
const set = (key, d) => { const [c, i] = key.split('.'); window.COURSES.find(x => x.id === c).lessons[+i].deep = d; };

set('speak.4', DP([
  [`Prepare the questions before they are asked`, [`Most Q&A is predictable. Write the five hardest questions you could get, plus one "curveball". Answer each in two sentences and say them aloud. When the real question arrives, it will feel familiar.`]],
  [`The four-step answer`, [`Listen to the whole question, pause, answer in one sentence, add one example. If you do not understand, repeat it back: "So you are asking whether..." That buys thinking time and checks you heard correctly.`]],
  [`When you do not know`, [`Say so, then bridge: "I do not have that number with me. What I can say is X, and I will confirm Y by Thursday." Then actually send it. This is the single move that most separates trusted people from bluffers.`]]],
  `A hard question`, [[`Client`, `Why did the outage last four hours?`], [`You`, `Good question. Let me make sure I answer it properly. The root cause was a faulty update, and the fix took time because we needed to test it first.`], [`You`, `I will send you a written summary with the full timeline by Thursday noon.`], [`Client`, `Thank you.`]],
  [`Answering before the question ends.`, `Bluffing instead of bridging.`, `Over-apologising.`, `Never sending the promised follow-up.`],
  [`Day 1: List your five hardest questions.`, `Day 2: Write two-sentence answers.`, `Day 3: Say them aloud.`, `Day 4: Practise the repeat-back phrase.`, `Day 5: Practise a bridge sentence.`, `Day 6: Mock Q&A with an AI partner.`, `Day 7: Record and review.`]));

set('speak.5', DP([
  [`Set up so people forget the tech`, [`Camera at eye level, a window or lamp in front of you, headphones with a mic, and a plain background. Good sound matters more than good video: people forgive a dark image but not a crackly voice.`]],
  [`Speak to be seen`, [`On video your energy drops by about a quarter, so raise it a little. Slightly bigger facial expressions, a smile at the start, and short vocal confirmations while others speak ("right", "that makes sense") show you are engaged.`]],
  [`Handle the awkward moments`, [`Talking over each other is normal. Pause, say "Sorry, go ahead", and continue. If the connection drops, message "Dropping off, rejoining on my phone". If you freeze, switch the camera off to save bandwidth and say so.`]]],
  `Joining a call`, [[`You`, `Hi everyone, can you hear me okay?`], [`Host`, `Loud and clear.`], [`You`, `Great. Before we start, I will put my notes in the chat so we can all follow along.`], [`You`, `Sorry, you go first. I will add my point after.`]],
  [`Poor audio, great camera.`, `Reading notes with eyes down.`, `Talking while muted.`, `Multitasking visibly.`],
  [`Day 1: Fix lighting and camera height.`, `Day 2: Test your audio and record 30 seconds.`, `Day 3: Practise a warm opening line.`, `Day 4: Use short confirmations on a call.`, `Day 5: Practise recovering from interruptions.`, `Day 6: Share your screen smoothly.`, `Day 7: Record a full mock call.`]));

set('artic.3', DP([
  [`Learn words in families`, [`Instead of one word at a time, learn the family: decide, decision, decisive, indecisive. Then learn the common partners: make a decision, reach a decision, a tough decision. This is how native speakers store language.`]],
  [`Upgrade the words you overuse`, [`Pick three weak words you use too often (good, very, thing). Replace "very good" with "excellent", "thing" with the exact noun, "very tired" with "exhausted". Keep a short before-and-after list and use two new words in real conversation each day.`]],
  [`Make it stick`, [`Say each new word aloud in a work sentence, then use it within 24 hours. A word you have never said aloud will not come out when you are nervous.`]]],
  `Upgrading a sentence`, [[`Before`, `The meeting was very good and we did many things.`], [`After`, `The meeting was productive: we agreed three decisions and assigned owners.`], [`Before`, `I am very tired of this problem.`], [`After`, `This recurring problem is exhausting the team, so I would like to fix the root cause.`]],
  [`Learning huge word lists.`, `Using fancy words you cannot pronounce.`, `Never saying new words aloud.`, `Ignoring collocations.`],
  [`Day 1: Pick three weak words.`, `Day 2: Find stronger replacements.`, `Day 3: Learn their partner words.`, `Day 4: Use two in speech.`, `Day 5: Use two in writing.`, `Day 6: Review aloud.`, `Day 7: Teach them to someone.`]));

set('persuade.0', DP([
  [`Find their why first`, [`Every person has a goal, a fear and a constraint. Ask: "What are you trying to achieve?" "What worries you?" "What is getting in the way?" The answers tell you how to frame your message.`]],
  [`Translate your idea into their language`, [`Say what changes for them, in their words. Not "this tool has automation" but "this saves you two hours every Friday". Use their numbers, deadlines and priorities.`]],
  [`Make the next step tiny`, [`A big ask triggers a no. Ask for a small, specific, low-risk step: "Could we try it on one ticket type for a week?" Small yeses build toward bigger ones.`]]],
  `Framing an idea`, [[`You`, `What would make this month easier for you?`], [`Manager`, `Fewer repeat tickets.`], [`You`, `Then I would like to write three help articles for the top repeat issues. It would take two hours a week for a month.`], [`Manager`, `Sounds good. Try one first.`]],
  [`Talking about your needs only.`, `Starting with features.`, `Asking for too much at once.`, `Ignoring their objections.`],
  [`Day 1: Write the "why" questions.`, `Day 2: Interview one person.`, `Day 3: Rewrite a pitch in their words.`, `Day 4: Shrink your ask.`, `Day 5: Practise aloud.`, `Day 6: Try it on a real request.`, `Day 7: Review what worked.`]));

set('persuade.1', DP([
  [`The classic levers, used ethically`, [`Reciprocity: give something useful first. Social proof: show that others like them already do it. Authority: share credible evidence. Consistency: build on small commitments. Liking: be genuinely friendly. Scarcity: only mention real limits.`]],
  [`Where it turns into manipulation`, [`Fake deadlines, hidden costs, invented testimonials and guilt are manipulation. They work once and destroy trust. Test yourself: would I be comfortable if they knew exactly what I was doing and why?`]],
  [`Cultural fit`, [`Direct evidence persuades US audiences. Modest reasoning works in the UK. Honest plain talk fits Australia. Personal trust carries weight in Spain and Latin America. Adapt the lever, keep the integrity.`]]],
  `Using social proof`, [[`You`, `Three other teams are using this template and saved about an hour a week each.`], [`Manager`, `Which teams?`], [`You`, `Billing, onboarding and returns. I can share their notes if useful.`]],
  [`Inventing urgency.`, `Using every lever at once.`, `Ignoring the person's real needs.`, `Overselling.`],
  [`Day 1: Learn the six levers.`, `Day 2: Spot them in an ad.`, `Day 3: Spot them in a real email.`, `Day 4: Write an honest social-proof line.`, `Day 5: Write a give-first message.`, `Day 6: Apply the integrity test.`, `Day 7: Review.`]));

set('persuade.2', DP([
  [`Prepare your numbers`, [`Before any negotiation, know three numbers: your ideal, your acceptable, and your walk-away. Research the market with job boards and salary surveys, and write down your evidence.`]],
  [`Ask, then stay quiet`, [`State your range with a reason, then stop talking. Silence is uncomfortable, and people fill it with concessions. Never negotiate against yourself by adding "but I am flexible" in the same breath.`]],
  [`Think beyond salary`, [`Pay, start date, equipment, schedule, paid time off, training budget, a review date. If they cannot move on salary, ask for something else of value, and agree a date to revisit.`]]],
  `A negotiation`, [[`Employer`, `We can offer 50,000.`], [`You`, `Thank you, I am excited about the role. Based on the market and my results, I was hoping for 56 to 60. Is there room to get closer to that?`], [`Employer`, `We can do 54 plus a review in six months.`], [`You`, `That is helpful. Could we confirm the review date and a training budget in writing? Then I am happy to accept.`]],
  [`Giving a number first with no research.`, `Accepting on the spot.`, `Threatening to leave.`, `Forgetting to get it in writing.`],
  [`Day 1: Research the market.`, `Day 2: Write your three numbers.`, `Day 3: Write your ask line.`, `Day 4: Practise the silence.`, `Day 5: List non-salary asks.`, `Day 6: Role-play with an AI partner.`, `Day 7: Review.`]));

set('write.0', DP([
  [`The pyramid`, [`Put the conclusion on top, then the supporting points, then the details. Busy readers stop when they have what they need, so the first line must carry the message.`]],
  [`The three-part opening`, [`Line one: the ask or the answer. Line two: the key reason. Line three: what you need and by when. If the reader only gets those three lines, they can still act.`]],
  [`Make it skimmable`, [`Short paragraphs, descriptive subject lines, and bullets for lists of three or more. Bold sparingly: only the date or the decision.`]]],
  `Before and after`, [[`Before`, `Hi, I wanted to reach out regarding the thing from last week. We had some issues and I looked into it...`], [`After`, `Subject: Approval needed by Friday: refund for order 4521`], [`After`, `Hi Sam, could you approve a $120 refund for order 4521 by Friday? The customer was charged twice; screenshots are attached.`]],
  [`Burying the ask.`, `Vague subject lines.`, `Long paragraphs.`, `Several asks in one email.`],
  [`Day 1: Rewrite one old email top-down.`, `Day 2: Write three subject lines.`, `Day 3: Practise the three-part opening.`, `Day 4: Cut a draft by a third.`, `Day 5: Add bullets.`, `Day 6: Ask someone to skim it.`, `Day 7: Save your best as a template.`]));

set('write.1', DP([
  [`Edit in passes`, [`Pass one: cut anything that does not serve the reader. Pass two: replace vague words with specifics and numbers. Pass three: read aloud and fix every place you stumble.`]],
  [`Words to delete`, [`Most "just", "really", "very", "I think", "sort of", and "sorry to bother you" weaken your message. Delete them unless they carry meaning.`]],
  [`Active and short`, [`"The report was completed by me" becomes "I completed the report". Aim for sentences under 20 words and one idea each. Complex ideas deserve simple sentences, not the other way around.`]]],
  `An edit`, [[`Before`, `I just wanted to quickly check in and see if you might possibly have had a chance to look at the document I sent over.`], [`After`, `Have you had a chance to review the document? I need your feedback by Thursday.`]],
  [`Editing while writing.`, `Keeping every word because you wrote it.`, `Skipping the read-aloud.`, `Using long words to sound smart.`],
  [`Day 1: Delete filler words from one email.`, `Day 2: Shorten ten sentences.`, `Day 3: Change passive to active.`, `Day 4: Read aloud.`, `Day 5: Edit a chat message.`, `Day 6: Edit a CV bullet.`, `Day 7: Compare before and after.`]));

set('write.2', DP([
  [`Subject lines that get opened`, [`Use [action] + [topic] + [deadline]: "Review needed: onboarding guide by Thursday". Avoid "Hi", "Question", or all capitals. Specific subjects also help people find your email later.`]],
  [`Make replying easy`, [`Ask one clear question per email, offer options ("A or B?"), and say what happens if they do not reply. Yes/no questions get answered fastest.`]],
  [`Follow up without being annoying`, [`Wait two business days, reply on the same thread, add one new piece of value, and restate the ask. After two follow-ups, change channel (a call or message) rather than send a third email.`]]],
  `A follow-up`, [[`Subject`, `Re: Review needed: onboarding guide by Thursday`], [`You`, `Hi Sam, a quick follow-up. I attached the latest version with your earlier comments included. Could you confirm by Thursday noon whether it is ready to publish? Thanks!`]],
  [`Writing several questions in one email.`, `Vague subjects.`, `Waiting a week to follow up.`, `Sending a third angry reminder.`],
  [`Day 1: Rewrite five subject lines.`, `Day 2: Turn a long email into one question.`, `Day 3: Add options to a request.`, `Day 4: Write a polite follow-up.`, `Day 5: Write a nudge on another channel.`, `Day 6: Review your sent folder.`, `Day 7: Save your best templates.`]));

set('learn.0', DP([
  [`Recall beats rereading`, [`Closing the page and trying to remember forces your brain to rebuild the idea, which strengthens it far more than reading again. It feels harder, and that is the point.`]],
  [`Space it out`, [`Review a lesson one day later, then three days, a week, then a month. The Review tab here schedules your quiz questions for you. Short repeated reviews beat one long session.`]],
  [`Make it active`, [`After a lesson, write five things you remember with no notes, explain it aloud to an imaginary friend, then check what you missed. The gaps are where to study.`]]],
  `A recall session`, [[`Step`, `Close the lesson.`], [`Step`, `Write everything you remember in three minutes.`], [`Step`, `Open the lesson and mark what you missed.`], [`Step`, `Re-test the missed parts tomorrow.`]],
  [`Rereading and highlighting only.`, `Cramming the night before.`, `Never testing yourself.`, `Skipping reviews.`],
  [`Day 1: Do a blank-page test after a lesson.`, `Day 2: Review it again.`, `Day 3: Explain it aloud.`, `Day 4: Use the Review tab.`, `Day 5: Test an older lesson.`, `Day 6: Fix the gaps.`, `Day 7: Plan next week's reviews.`]));

set('learn.1', DP([
  [`Target the edge of your ability`, [`Practise things that are slightly too hard, not comfortably easy. If you never make mistakes, you are not improving. Choose one specific weakness per session.`]],
  [`Feedback is the engine`, [`Without feedback you can repeat a mistake perfectly. Record yourself, ask a mentor, or use an AI partner to critique one thing at a time. Fix, repeat, and compare.`]],
  [`Short, focused blocks`, [`Twenty to forty minutes of full attention beats three hours of drifting. Stop while you still have energy and write what you will practise next.`]]],
  `A practice block`, [[`Goal`, `Answer "tell me about a time you made a mistake" in 60 seconds.`], [`Step`, `Record it.`], [`Step`, `Listen once and note one fix.`], [`Step`, `Record again with the fix. Compare.`]],
  [`Practising only what you are already good at.`, `Practising without feedback.`, `Long unfocused sessions.`, `Never writing down what to fix next.`],
  [`Day 1: Pick one weakness.`, `Day 2: Design a drill for it.`, `Day 3: Practise with feedback.`, `Day 4: Record and compare.`, `Day 5: Raise the difficulty.`, `Day 6: Practise at your weakest time.`, `Day 7: Review progress.`]));

set('learn.2', DP([
  [`One home for everything`, [`Keep a single notebook or document for your learning: lessons, phrases, questions and wins. When everything is in one place, reviewing is easy.`]],
  [`A weekly rhythm`, [`Daily: a short lesson and one activity. Weekly: a quiz without notes and a speaking recording. Monthly: look at progress and choose the next goal. Rhythm beats willpower.`]],
  [`Design for bad days`, [`Define a minimum version that takes five minutes, like reading one lesson summary. On bad days do the minimum and keep the streak. Restart quickly after a miss without guilt.`]]],
  `A weekly plan`, [[`Mon`, `Lesson and activity.`], [`Wed`, `Speaking practice with feedback.`], [`Fri`, `Review and quiz.`], [`Sun`, `Weekly reflection and plan.`]],
  [`Starting too big.`, `Scattered notes.`, `No review.`, `Quitting after a missed day.`],
  [`Day 1: Create your notes home.`, `Day 2: Set your daily slot.`, `Day 3: Define your minimum version.`, `Day 4: Add a weekly test.`, `Day 5: Add a monthly review.`, `Day 6: Tell someone your plan.`, `Day 7: Adjust.`]));

set('lead.0', DP([
  [`Know your triggers`, [`Notice what makes you react: rude tone, ambiguity, interruptions, feeling ignored. Naming the trigger gives you a choice about the response.`]],
  [`The pause`, [`When you feel heat rising, breathe out slowly for six seconds before responding. In writing, draft the reply and wait ten minutes before sending. Calm responses are remembered long after sharp ones.`]],
  [`Reset and repair`, [`If you react badly, repair quickly: "I responded sharply earlier, and I am sorry. Can we restart?" This builds more trust than never making a mistake.`]]],
  `A calm reply`, [[`Message`, `Why wasn't this done yesterday?!`], [`You`, `Thanks for flagging. It slipped because of the outage, and I will finish it by 3 pm today.`], [`You`, `Going forward I will message you earlier when a deadline is at risk.`]],
  [`Replying while angry.`, `Blaming others.`, `Never apologising.`, `Ignoring stress signals.`],
  [`Day 1: List your three triggers.`, `Day 2: Practise the six-second pause.`, `Day 3: Draft and wait before replying.`, `Day 4: Practise a repair sentence.`, `Day 5: Review a heated moment.`, `Day 6: Add a reset ritual.`, `Day 7: Reflect.`]));

set('lead.1', DP([
  [`SBI in detail`, [`Situation: when and where. Behaviour: what you saw or heard, not your interpretation. Impact: the effect on you, the customer or the team. "In yesterday's call, you interrupted twice, and the customer sounded frustrated."`]],
  [`Make it a conversation`, [`After SBI, ask: "How did you see it?" Listen fully. Then agree what to try next time. Feedback is a two-way conversation, not a verdict.`]],
  [`Positive feedback too`, [`Use SBI for praise: "In the call, you stayed calm (B), and the customer thanked you (I)." Specific praise tells people exactly what to repeat.`]]],
  `Giving feedback`, [[`You`, `In yesterday's call, you gave the customer two options and let her choose.`], [`You`, `She ended the call happy, and that is exactly what we want. Could you do the same on billing calls?`]],
  [`Judging the person, not the behaviour.`, `Waiting weeks to give feedback.`, `Giving only criticism.`, `Not listening to their view.`],
  [`Day 1: Learn SBI.`, `Day 2: Write three SBI examples.`, `Day 3: Give one praise with SBI.`, `Day 4: Ask someone for feedback.`, `Day 5: Practise listening.`, `Day 6: Give a small improvement note.`, `Day 7: Reflect.`]));

set('lead.2', DP([
  [`Before: purpose and agenda`, [`Decide the purpose in one sentence and the outcome you need. Send an agenda with times 24 hours ahead. If a meeting has no clear purpose, replace it with a message.`]],
  [`During: facilitate`, [`Start on time, state the purpose, watch the clock, invite quiet people, and park side topics. Write decisions and owners as you go.`]],
  [`After: close the loop`, [`Send a recap within an hour: decisions, owners, dates. The person who writes the recap shapes what is remembered.`]]],
  `Opening a meeting`, [[`You`, `Thanks, everyone. We have 30 minutes. The goal is to decide X.`], [`You`, `We will take 10 minutes on options, 10 on risks, and finish with decisions and owners.`], [`You`, `Sam, what is your view?`]],
  [`No agenda.`, `Overrunning every time.`, `Letting one person dominate.`, `No recap.`],
  [`Day 1: Write a purpose sentence.`, `Day 2: Draft an agenda.`, `Day 3: Practise an opening.`, `Day 4: Practise inviting quiet voices.`, `Day 5: Draft a recap.`, `Day 6: Run a short practice meeting.`, `Day 7: Review.`]));

set('vibe.0', DP([
  [`The loop`, [`Describe what you want, run it, test with real examples, tweak, and save the working version. Small cycles beat big, unreviewed changes.`]],
  [`Describe like a designer`, [`State who uses it, what they do, what the screen shows, and what happens when they click. Add an example input and the output you expect. Clear descriptions give clear results.`]],
  [`You are the reviewer`, [`AI writes code, but you decide whether it is correct. Run it, read the summary, ask it to explain anything unclear, and test odd inputs like empty fields.`]]],
  `A first request`, [[`You`, `Build a single page with a text box and a button. When I type a customer name and click Create reply, it shows a polite reply I can copy.`], [`AI`, `Here is a first version with HTML, CSS and JavaScript.`], [`You`, `The Copy button does nothing. Please fix it and show me what you changed.`]],
  [`Asking for a huge app in one go.`, `Not testing.`, `Not saving versions.`, `Trusting without reading.`],
  [`Day 1: Pick a tiny tool.`, `Day 2: Write the description.`, `Day 3: Build version one.`, `Day 4: Test with five examples.`, `Day 5: Fix one bug at a time.`, `Day 6: Save a version.`, `Day 7: Show it to someone.`]));

set('vibe.1', DP([
  [`The anatomy of a good prompt`, [`Role, goal, context, constraints, examples and format. "You are a front-end developer. Goal: a tool that... Constraints: plain HTML, no libraries. Example: input X gives output Y. Reply with a single file."`]],
  [`Iterate in small steps`, [`Ask for one change at a time and say what you observed: "The button is too small on a phone". Specific feedback gets specific fixes.`]],
  [`Ask it to teach you`, [`"Explain this code like I am a beginner" and "What could go wrong?" turn each project into a lesson. Keep a list of the prompts that worked.`]]],
  `A strong prompt`, [[`Prompt`, `You are a senior front-end developer. Build a one-page time zone converter for support agents. Use plain HTML, CSS and JavaScript only. Include New York, London, Sydney, Madrid and Manila. Make it work on a phone. Explain the code briefly.`]],
  [`Vague prompts.`, `Changing many things at once.`, `Not stating constraints.`, `Never asking why.`],
  [`Day 1: Rewrite a vague prompt.`, `Day 2: Add a role and constraints.`, `Day 3: Add an example.`, `Day 4: Practise small iterations.`, `Day 5: Ask for explanations.`, `Day 6: Save your best prompts.`, `Day 7: Review.`]));

set('vibe.2', DP([
  [`What happens when you open a page`, [`Your browser asks a server for files, the server sends HTML, CSS and JavaScript, and your browser builds the page. Nothing mysterious: requests and responses.`]],
  [`The three layers`, [`HTML is the structure: headings and buttons. CSS is the look: colours and layout. JavaScript is the behaviour: what happens when you click. When something breaks, ask which layer it belongs to.`]],
  [`Debugging with your browser`, [`Right-click, Inspect. The Console shows errors, Elements shows the HTML and CSS, Network shows requests. Copy an error message into your AI prompt with the code around it.`]]],
  `Reading a bug`, [[`Symptom`, `The button does nothing.`], [`Layer`, `Behaviour, so JavaScript.`], [`Check`, `Open the Console for a red error message.`], [`Fix`, `Paste the error into your prompt and ask for a fix.`]],
  [`Changing code without knowing the layer.`, `Ignoring the Console.`, `Not refreshing the page.`, `Editing a copy of the file.`],
  [`Day 1: Learn the three layers.`, `Day 2: Open Inspect on a site.`, `Day 3: Find an element.`, `Day 4: Read the Console.`, `Day 5: Change a colour live.`, `Day 6: Fix a small bug.`, `Day 7: Explain it to someone.`]));

set('vibe.3', DP([
  [`Publish early`, [`A live link beats a perfect private project. GitHub Pages, Netlify and similar services host static pages for free. Publishing teaches you the real workflow.`]],
  [`Make it presentable`, [`A clear title, a short description, a screenshot and a README that says what it does, how to use it and what you learned. Recruiters look at this for under a minute.`]],
  [`Share and gather feedback`, [`Send the link to three people and ask one question: "What was confusing?" Fix one thing per week and note the update in the README.`]]],
  `A README`, [[`Title`, `Reply Helper`], [`What`, `A small page that creates polite support replies.`], [`Try it`, `Link to the live page.`], [`Learned`, `How to deploy a static site and test with real examples.`]],
  [`Waiting until it is perfect.`, `No README.`, `Not testing the live link.`, `Publishing private data.`],
  [`Day 1: Choose a project.`, `Day 2: Clean it up.`, `Day 3: Write the README.`, `Day 4: Publish.`, `Day 5: Test the live link on a phone.`, `Day 6: Share it.`, `Day 7: Improve one thing.`]));

set('vibe.4', DP([
  [`Debug like a detective`, [`Reproduce the bug, read the exact error, form one guess, change one thing, test. If the AI loops with the same answer, give it more context: the error, the code, what you tried.`]],
  [`Save versions constantly`, [`Before each bigger change, commit or copy the file with a name like version-3-working. When something breaks, you can go back in seconds instead of debugging in the dark.`]],
  [`Know when to restart`, [`If three attempts fail, take a break, then start a fresh chat with a clear summary: what the project does, what is broken, what you tried. Fresh context often fixes stuck loops.`]]],
  `A debugging prompt`, [[`You`, `The Copy button does nothing. The Console says "navigator.clipboard is undefined". Here is my code: [paste]. I am testing from a file on my computer. What is wrong and how do I fix it?`]],
  [`Changing many things at once.`, `Not reading the error.`, `No backups.`, `Arguing with the AI instead of giving context.`],
  [`Day 1: Reproduce a bug on purpose.`, `Day 2: Read an error aloud.`, `Day 3: Fix with one change.`, `Day 4: Use version names.`, `Day 5: Learn Git commit.`, `Day 6: Restart a stuck chat.`, `Day 7: Review.`]));

set('vibe.5', DP([
  [`Secrets stay secret`, [`Passwords, API keys and customer data never go into an AI chat, a public repository or a screenshot. If a key leaks, revoke it immediately and create a new one.`]],
  [`Review what you run`, [`Read what code does before running it. Be careful with commands that delete files, install unknown packages or ask for admin rights. Ask the AI: "What are the risks of running this?"`]],
  [`Privacy by design`, [`Use fake data for demos. Collect the minimum. Tell users what you store. Laws like GDPR in Europe and similar rules elsewhere protect personal data, so treat it as a duty, not an option.`]]],
  `A safety check`, [[`Ask`, `Would I be comfortable if this appeared on a public billboard?`], [`Ask`, `Does this contain a real name, email, password or key?`], [`Ask`, `What is the worst this command could do?`], [`Fix`, `Replace with fake data or remove it.`]],
  [`Pasting real customer data into AI.`, `Committing keys to GitHub.`, `Running unknown commands.`, `Skipping reviews.`],
  [`Day 1: List what counts as sensitive.`, `Day 2: Check a project for secrets.`, `Day 3: Learn to use fake data.`, `Day 4: Learn what an API key is.`, `Day 5: Read a privacy rule summary.`, `Day 6: Write your safety checklist.`, `Day 7: Review.`]));

set('entre.0', DP([
  [`Problems hide in complaints`, [`Notice what people repeatedly complain about, work around or pay to avoid. A problem people already spend time or money on is a better start than an idea you love.`]],
  [`Score the problem`, [`Rate it from one to five: how painful, how often, how many people, can I reach them, will they pay. Pick the one with the best total and the clearest first customer.`]],
  [`Start where you have an edge`, [`Your languages, IT knowledge and cultural experience are advantages. "Small businesses with Spanish-speaking customers that need IT help" is a real niche you can serve.`]]],
  `Scoring ideas`, [[`Idea`, `Help small shops fix Wi-Fi.`], [`Pain`, `4`], [`Frequency`, `3`], [`Reach`, `4`], [`Will pay`, `4`]],
  [`Falling in love with an idea.`, `Choosing problems you cannot reach.`, `Building before asking.`, `Ignoring your strengths.`],
  [`Day 1: List ten complaints you have heard.`, `Day 2: Pick three problems.`, `Day 3: Score them.`, `Day 4: Ask five people.`, `Day 5: Choose one.`, `Day 6: Write the problem in one sentence.`, `Day 7: Find your first customer.`]));

set('entre.1', DP([
  [`Test before you build`, [`Describe the offer, ask for a small commitment (a deposit, a booking, an email signup) and see who responds. A willing buyer is stronger evidence than a polite compliment.`]],
  [`Do it by hand first`, [`Deliver the service manually to your first three customers. You learn what matters, what to charge and what to automate. Manual first, then tools.`]],
  [`Decide with numbers`, [`Set a target before you test: "Ten conversations, three say they would pay." If you miss it, change the idea or the audience, not just the price.`]]],
  `A validation test`, [[`Offer`, `I will fix your shop's Wi-Fi in a day for $80.`], [`Ask`, `Would you book it for Saturday?`], [`Target`, `Three bookings from ten shops.`], [`Result`, `Two bookings, so I adjust my message and try ten more.`]],
  [`Asking friends who will say yes to be kind.`, `Building first.`, `No target.`, `Ignoring negative results.`],
  [`Day 1: Write the offer.`, `Day 2: Set a test target.`, `Day 3: Contact ten people.`, `Day 4: Record responses.`, `Day 5: Deliver to one customer.`, `Day 6: Review.`, `Day 7: Decide what to change.`]));

set('entre.2', DP([
  [`The 60-second pitch`, [`Problem, solution, proof, ask. "Small shops lose customers when Wi-Fi is slow. I fix it in a day. Last month I fixed six. Could I check yours for free?"`]],
  [`Say it like a person`, [`Use short sentences and a concrete example. Avoid jargon and buzzwords. Practise until it sounds like talking, not reciting.`]],
  [`End with a small ask`, [`A specific, easy next step: a 10-minute call, a trial, a referral. People say yes to small asks.`]]],
  `A pitch`, [[`You`, `Many small shops lose customers when their Wi-Fi drops.`], [`You`, `I fix it in a day and explain it in plain English or Spanish. Last month I helped six shops.`], [`You`, `Could I do a free 15-minute check at yours this week?`]],
  [`Starting with a long backstory.`, `Using jargon.`, `No proof.`, `No clear ask.`],
  [`Day 1: Write problem, solution, proof, ask.`, `Day 2: Cut to 60 seconds.`, `Day 3: Practise aloud.`, `Day 4: Record it.`, `Day 5: Pitch to a friend.`, `Day 6: Adjust.`, `Day 7: Pitch a real prospect.`]));

set('entre.3', DP([
  [`Package your offer`, [`Define exactly what the customer gets, how long it takes and the result. Name it simply: "Wi-Fi Fix in a Day". Clear packages are easier to buy than hourly guesses.`]],
  [`Price on value`, [`Think about the value to the customer, your time, and the market. Offer three tiers (basic, standard, premium); many choose the middle. Do not price from your own low confidence.`]],
  [`Get your first customers`, [`Start with people you know and ask for introductions. Offer a small discount in exchange for a testimonial and permission to use their story. Follow up personally.`]]],
  `Three tiers`, [[`Basic`, `Wi-Fi check and report: $40.`], [`Standard`, `Fix and set up: $80.`], [`Premium`, `Fix, set up and one month of support: $140.`]],
  [`Charging by hour for everything.`, `Working free with no outcome.`, `Underpricing because of your location.`, `No testimonials.`],
  [`Day 1: Define your package.`, `Day 2: Research prices.`, `Day 3: Build three tiers.`, `Day 4: List 20 prospects.`, `Day 5: Contact five.`, `Day 6: Ask for a testimonial.`, `Day 7: Review.`]));

set('entre.4', DP([
  [`A profile that sells`, [`Headline: who you help and how. About: three short paragraphs on what you do, proof and what you want next. Add a featured link to your portfolio and a clear contact.`]],
  [`Show up weekly`, [`Post one useful tip or lesson each week and comment thoughtfully on others' posts. Consistency builds recognition and trust.`]],
  [`Proof and recommendations`, [`Ask past colleagues or clients for short recommendations, and add certificates and projects. Keep claims honest and specific.`]]],
  `A headline`, [[`Weak`, `Student looking for opportunities`], [`Stronger`, `Bilingual IT support | English, Spanish, Filipino | Helping small businesses fix tech problems`]],
  [`A blank or vague profile.`, `Posting rarely.`, `Exaggerating.`, `Never asking for recommendations.`],
  [`Day 1: Write your headline.`, `Day 2: Write your About.`, `Day 3: Add proof.`, `Day 4: Request two recommendations.`, `Day 5: Write your first post.`, `Day 6: Comment on five posts.`, `Day 7: Review.`]));

set('entre.5', DP([
  [`Separate your money`, [`Use a separate account or wallet for work. It makes tracking income, expenses and taxes far easier.`]],
  [`Set money aside`, [`Move a share of each payment (often 20 to 30 percent, depending on your country) into a tax and fees pot. Ask a local accountant what applies to you.`]],
  [`Track and review monthly`, [`Record income, expenses and invoices in a simple spreadsheet. Once a month, check what you earned, what you owe, and what you can save.`]]],
  `A monthly routine`, [[`Step`, `Record all income.`], [`Step`, `Record all expenses.`], [`Step`, `Move money to the tax pot.`], [`Step`, `Back up your files.`]],
  [`Mixing personal and work money.`, `No records.`, `Spending the tax money.`, `Guessing the rules.`],
  [`Day 1: Open a separate account.`, `Day 2: Build a tracking sheet.`, `Day 3: Record last month.`, `Day 4: Decide your set-aside percent.`, `Day 5: Research local rules.`, `Day 6: Book an accountant chat.`, `Day 7: Review.`]));

set('spanish.0', DP([
  [`Where Spanish earns more`, [`Bilingual support is in demand in telecom, healthcare, banking, e-commerce and utilities, especially in the US. Many roles pay a language differential, so mention your skill on your CV and in interviews.`]],
  [`Prove your level`, [`State your level honestly (for example B2), take a free online test, and offer a short live demo. Employers trust proof more than claims.`]],
  [`Keep it sharp`, [`Practise Spanish professionally, not just socially: read business emails, listen to customer service calls, and write short replies in Spanish daily.`]]],
  `Stating your skill`, [[`You`, `I am fluent in English and Spanish, around B2 level, and I am happy to do a short role-play in Spanish if that would help.`], [`Interviewer`, `That would be great.`]],
  [`Overclaiming your level.`, `Never practising business Spanish.`, `Hiding the skill.`, `Using only casual Spanish.`],
  [`Day 1: Test your level.`, `Day 2: Add Spanish to your CV.`, `Day 3: Write a short Spanish reply.`, `Day 4: Learn 10 customer phrases.`, `Day 5: Record a demo.`, `Day 6: Practise with an AI partner.`, `Day 7: Review.`]));

set('spanish.1', DP([
  [`Core service phrases`, [`Greeting, verification, hold, apology, solution and closing cover most calls. Learn them as complete sentences, with "usted", until they are automatic.`]],
  [`Neutral Spanish`, [`Customers come from many countries. Use clear, neutral vocabulary and avoid slang. If a customer uses a regional word, follow it politely.`]],
  [`Read-back and spelling`, [`Say numbers digit by digit, spell names with a spelling alphabet, and read back details. Spanish speakers appreciate care, and it prevents costly mistakes.`]]],
  `Service phrases`, [[`You`, `Gracias por llamar, le habla [nombre]. ¿En qué puedo ayudarle?`], [`You`, `Entiendo la molestia. Voy a revisarlo ahora mismo.`], [`You`, `Para confirmar: su correo es [correo], ¿es correcto?`], [`You`, `Gracias por su paciencia. ¿Algo más en que pueda ayudarle?`]],
  [`Switching between tú and usted.`, `Using slang.`, `Rushing numbers.`, `Not reading back.`],
  [`Day 1: Learn the opening and closing.`, `Day 2: Learn apology phrases.`, `Day 3: Learn verification phrases.`, `Day 4: Practise numbers.`, `Day 5: Role-play a call.`, `Day 6: Record it.`, `Day 7: Review.`]));

set('spanish.2', DP([
  [`Build a bilingual glossary`, [`List 30 terms you use at work: password (contraseña), update (actualización), network (red), screen (pantalla), account (cuenta), refund (reembolso). Add a picture or an example sentence.`]],
  [`Follow the customer`, [`Many Spanish speakers use English tech words such as email, link and router. Use whatever the customer uses and clarify only if needed.`]],
  [`Regional differences`, [`Computer is ordenador in Spain and computadora in Latin America. Mobile phone is móvil or celular. Ask or listen first, and default to neutral words.`]]],
  `Glossary entries`, [[`Password`, `contraseña`], [`Update`, `actualización`], [`Network`, `red`], [`Refund`, `reembolso`]],
  [`Translating word for word.`, `Ignoring regional words.`, `Mixing languages in written replies.`, `Not checking spelling and accents.`],
  [`Day 1: List 10 terms.`, `Day 2: Add 10 more.`, `Day 3: Add pictures.`, `Day 4: Use five on a mock call.`, `Day 5: Learn regional differences.`, `Day 6: Quiz yourself.`, `Day 7: Review.`]));

set('spanish.3', DP([
  [`Structure of a Spanish business email`, [`Subject, greeting, purpose, details, request and closing. Start with "Estimado/a" for formal or "Hola" for friendly, and close with "Saludos cordiales" or "Un saludo".`]],
  [`Accents and spelling matter`, [`Accents change meaning (si and sí, el and él, te and té). Use a spell-checker and reread. Mistakes look careless in a language that clients take pride in.`]],
  [`Tone`, [`Slightly warmer than English emails, but still clear about dates and next steps. End with a concrete action and deadline.`]]],
  `A short email`, [[`Asunto`, `Confirmación de su solicitud`], [`Texto`, `Estimado señor Pérez: Hemos recibido su solicitud y la resolveremos antes del viernes. Le avisaremos por correo cuando esté lista. Quedo atento a cualquier duda.`], [`Cierre`, `Saludos cordiales, [Nombre]`]],
  [`Skipping accents.`, `Mixing formal and casual.`, `Vague deadlines.`, `Machine translation without review.`],
  [`Day 1: Study the structure.`, `Day 2: Write a short email.`, `Day 3: Check accents.`, `Day 4: Write a request email.`, `Day 5: Write a follow-up.`, `Day 6: Ask someone to review.`, `Day 7: Save templates.`]));

set('itfund.0', DP([
  [`A repeatable method`, [`Define the problem, reproduce it, gather facts, form a theory, test one change, confirm, document. A method keeps you calm and makes you look professional.`]],
  [`Ask smart questions`, [`When did it start? What changed? Does it happen on all devices? Any error message? These four questions solve a big share of tickets.`]],
  [`Document as you go`, [`Write what you tried and the result at every step. If you escalate, the next person can continue where you stopped, and you look reliable.`]]],
  `A support call`, [[`You`, `When did it start, and did anything change before that?`], [`Customer`, `It started after an update yesterday.`], [`You`, `Thank you. Let us check the update history, then try one change at a time.`]],
  [`Changing many things at once.`, `Skipping the questions.`, `Not documenting.`, `Not confirming the fix.`],
  [`Day 1: Learn the seven steps.`, `Day 2: Practise the four questions.`, `Day 3: Troubleshoot a practice issue.`, `Day 4: Write notes.`, `Day 5: Explain it to a friend.`, `Day 6: Practise escalation notes.`, `Day 7: Review.`]));

set('itfund.1', DP([
  [`The path`, [`Your device connects to a router, the router to your internet provider, and the provider to the internet. Each hop can fail. Test them in order from closest to farthest.`]],
  [`DNS, the phone book`, [`Websites have names, and computers use numbers. DNS translates names to numbers. If numbers work but names do not, DNS is the likely culprit.`]],
  [`Wi-Fi vs wired`, [`Wi-Fi is convenient but sensitive to distance, walls and interference. A cable test quickly tells you whether the problem is Wi-Fi or the connection itself.`]]],
  `Diagnosing slow internet`, [[`You`, `Does it happen on every device or just one?`], [`Customer`, `Every device.`], [`You`, `Then the router or provider is more likely. Let us restart the router and test with a cable.`]],
  [`Blaming the website first.`, `Skipping the one-device-or-all question.`, `Ignoring distance from the router.`, `Using jargon.`],
  [`Day 1: Draw the path.`, `Day 2: Find your router's address.`, `Day 3: Ping your router.`, `Day 4: Ping a website.`, `Day 5: Test Wi-Fi vs cable.`, `Day 6: Explain DNS.`, `Day 7: Review.`]));

set('itfund.2', DP([
  [`The five fixes`, [`Restart, update, check connections, clear temporary files or cache, and check storage. These resolve most everyday issues before you need anything advanced.`]],
  [`Windows and Mac tools`, [`Windows has Task Manager, Settings and Troubleshooters. Mac has Activity Monitor, System Settings and Disk Utility. Learn where each lives and what it shows.`]],
  [`Safe habits`, [`Back up before changes, write down settings you change and never follow instructions you do not understand. Official documentation first.`]]],
  `A slow computer`, [[`You`, `Let us check what is using the computer. Please open Task Manager.`], [`Customer`, `It shows a program using 90 percent.`], [`You`, `Thanks. Let us close it and check for updates, then restart.`]],
  [`Reinstalling the system too early.`, `Skipping backups.`, `Changing settings without notes.`, `Not restarting.`],
  [`Day 1: Learn the five fixes.`, `Day 2: Find Task Manager or Activity Monitor.`, `Day 3: Check storage.`, `Day 4: Practise updates.`, `Day 5: Make a cheat sheet.`, `Day 6: Explain it aloud.`, `Day 7: Review.`]));

set('itfund.3', DP([
  [`Rent, do not own`, [`Cloud providers own huge data centres and rent you pieces: storage for files, compute for programs, databases for data, networks to connect them. You pay for what you use.`]],
  [`The main names`, [`AWS, Microsoft Azure and Google Cloud lead the market. Learn the basic services: object storage, virtual machines, databases and identity. Free tiers let you practise safely.`]],
  [`Why support staff care`, [`Customers ask why a service is down, why files are slow, or how to share data securely. A simple cloud picture lets you explain and escalate precisely.`]]],
  `Explaining the cloud`, [[`You`, `Think of the cloud as a secure warehouse you rent instead of building one.`], [`Customer`, `So my files are in that warehouse?`], [`You`, `Yes. You can open them from any device, and the provider looks after the building.`]],
  [`Using cloud jargon.`, `Ignoring security basics.`, `Creating resources and forgetting to delete them.`, `Sharing keys.`],
  [`Day 1: Learn four core services.`, `Day 2: Draw the picture.`, `Day 3: Create a free account.`, `Day 4: Upload a file to storage.`, `Day 5: Learn about permissions.`, `Day 6: Explain it to a friend.`, `Day 7: Review.`]));

set('itfund.4', DP([
  [`Start with the customer's situation`, [`Ask what they want to do, not what is broken. Match your language to theirs. If they say "the internet is broken", do not start with "DNS".`]],
  [`Analogies and pictures`, [`Compare things to everyday items: DNS is a phone book, a firewall is a security guard, the cloud is a rented warehouse. Draw a quick sketch if you are in a chat or video call.`]],
  [`Check understanding`, [`Ask "Does that make sense?" or "Could you tell me what you will try next?" Then give one clear next step.`]]],
  `A plain explanation`, [[`Customer`, `What is a firewall?`], [`You`, `Think of it as a security guard for your network. It checks what comes in and out, and blocks anything suspicious.`], [`Customer`, `Ah, that makes sense.`]],
  [`Jargon and acronyms.`, `Talking down to the customer.`, `Long explanations.`, `No next step.`],
  [`Day 1: List five jargon terms.`, `Day 2: Write an analogy for each.`, `Day 3: Practise aloud.`, `Day 4: Explain to a non-technical friend.`, `Day 5: Sketch a diagram.`, `Day 6: Record yourself.`, `Day 7: Review.`]));

set('focus.0', DP([
  [`Single-tasking`, [`Switching tasks costs minutes of refocus each time. Pick one task, close other tabs, silence notifications and keep your phone out of sight.`]],
  [`The 25-minute sprint`, [`Set a timer for 25 minutes, work on one task, then take a five-minute break. After four sprints take a longer break. Write the next action before you stop.`]],
  [`Protect your attention`, [`Batch email and chat checks into set times. Tell your team when you are in a focus block. Deep work is where skills grow.`]]],
  `Planning a sprint`, [[`Goal`, `Draft the knowledge base article.`], [`Before`, `Close chat and email, phone in a drawer.`], [`During`, `Work for 25 minutes.`], [`After`, `Break, then write the next step.`]],
  [`Multitasking.`, `Skipping breaks.`, `Checking notifications constantly.`, `Starting without a clear goal.`],
  [`Day 1: Try one sprint.`, `Day 2: Try two.`, `Day 3: Silence notifications.`, `Day 4: Batch email checks.`, `Day 5: Write next-action notes.`, `Day 6: Tell your team about focus blocks.`, `Day 7: Review.`]));

set('focus.1', DP([
  [`Sleep is a skill`, [`Keep regular sleep and wake times, avoid screens close to bed, and make your room dark and cool. Poor sleep reduces memory, patience and speech clarity.`]],
  [`Energy through the day`, [`Eat regular meals, drink water, and move for a few minutes each hour. Plan hard tasks for your best energy window and routine tasks for the dips.`]],
  [`Shift workers`, [`If you work nights, keep the same schedule on days off as much as possible, use blackout curtains and plan light exposure when you wake. Consistency beats perfection.`]]],
  `An energy plan`, [[`Morning`, `Hard task first, after water and breakfast.`], [`Midday`, `Movement and a real meal.`], [`Afternoon`, `Routine tasks.`], [`Evening`, `Wind down and set tomorrow's top three.`]],
  [`Skipping sleep to study.`, `Caffeine late in the day.`, `Working without breaks.`, `Ignoring energy patterns.`],
  [`Day 1: Track energy hourly.`, `Day 2: Fix your wake time.`, `Day 3: Set a wind-down routine.`, `Day 4: Schedule the hard task.`, `Day 5: Add movement.`, `Day 6: Adjust caffeine.`, `Day 7: Review.`]));

set('focus.2', DP([
  [`Why we procrastinate`, [`We avoid tasks that feel unclear, boring or scary, not because we are lazy. Name the feeling, then make the task smaller.`]],
  [`The two-minute start`, [`Commit to two minutes: open the document and write one sentence. Starting is the hardest step, and momentum usually carries you on.`]],
  [`Design your environment`, [`Remove temptations, set a clear start time, and tell someone your goal. A visible next action on a sticky note beats a vague intention.`]]],
  `Starting small`, [[`Task`, `Write the knowledge base article.`], [`Smaller`, `Write the title and three bullets.`], [`Two-minute start`, `Open the document and type the title.`], [`Reward`, `A short walk.`]],
  [`Waiting for motivation.`, `Making the task bigger.`, `Punishing yourself.`, `Having no starting time.`],
  [`Day 1: Name what you avoid.`, `Day 2: Shrink the task.`, `Day 3: Do a two-minute start.`, `Day 4: Remove one distraction.`, `Day 5: Tell someone your goal.`, `Day 6: Reward yourself.`, `Day 7: Review.`]));
})();
