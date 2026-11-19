// A 30-day job-ready challenge: three small tasks a day, each linked to a lesson or tool.
(() => {
const L = (t, id) => [t, `#/lesson/${id}`];
const A = (t, p) => [t, `#/${p}`];
window.PLAN30 = [
  { t: `Set your goal and your setup`, tasks: [L(`Read: Remote interview setup`, 'interview.3'), A(`Set your daily goal in Me`, 'profile'), L(`Read: What employers look for`, 'support.0')] },
  { t: `Your 60-second introduction`, tasks: [L(`Read: Your 60-second introduction`, 'interview.0'), A(`Write your intro in the Answer bank`, 'answers'), A(`Say it aloud once in the studio`, 'practice')] },
  { t: `Calm voice and breathing`, tasks: [L(`Read: Ground yourself in 60 seconds`, 'calm.0'), L(`Read: Calm speech: pacing, pausing and blocks`, 'interview.1'), A(`Do the box breathing exercise`, 'practice')] },
  { t: `Slow down and drop the fillers`, tasks: [L(`Read: Slow down and kill the fillers`, 'artic.0'), A(`Record a 60-second answer`, 'practice'), A(`Count your filler words`, 'progress')] },
  { t: `Stop translating in your head`, tasks: [L(`Read: Stop translating in your head`, 'fluency.0'), L(`Read: Ready-made phrases for work`, 'fluency.2'), A(`Narrate your day in English for 10 minutes`, 'journal')] },
  { t: `Understand fast English`, tasks: [L(`Read: Reductions: gonna, wanna, gotta`, 'ears.0'), A(`Do five number drills`, 'listen'), A(`Do five sentence drills`, 'listen')] },
  { t: `Week one review`, tasks: [A(`Review your cards`, 'review'), A(`Write three wins in your journal`, 'journal'), A(`Check your progress report`, 'progress')] },
  { t: `Strengths and weaknesses`, tasks: [L(`Read: Strengths and weaknesses without cliches`, 'qbank.0'), A(`Write both answers`, 'answers'), A(`Practise them aloud`, 'practice')] },
  { t: `Why this company, why leaving`, tasks: [L(`Read: Why this company, and why are you leaving`, 'qbank.1'), A(`Write both answers`, 'answers'), A(`Research one real company for 20 minutes`, 'jobs')] },
  { t: `Stories with STAR`, tasks: [L(`Read: Stories for work: STAR`, 'story.2'), A(`Write a conflict story`, 'answers'), A(`Write a mistake story`, 'answers')] },
  { t: `Angry customer story`, tasks: [L(`Read: De-escalate an angry customer`, 'cs.1'), A(`Write your angry-customer answer`, 'answers'), A(`Play the billing roleplay`, 'roleplay')] },
  { t: `Gaps and your languages`, tasks: [L(`Read: Explain gaps, career changes and being new`, 'interview.10'), A(`Write your gap answer`, 'answers'), A(`Write your bilingual answer`, 'answers')] },
  { t: `Salary and questions to ask`, tasks: [L(`Read: Salary, questions to ask and follow-up`, 'interview.6'), A(`Write your salary range answer`, 'answers'), L(`Read: Close strong and send a thank-you`, 'qbank.4')] },
  { t: `Week two review`, tasks: [A(`Run a five-question simulator round`, 'sim'), A(`Review the lessons it suggests`, 'sim'), A(`Review your cards`, 'review')] },
  { t: `Build your CV`, tasks: [L(`Read: A CV that passes screening`, 'jobhunt.0'), A(`Rewrite your top line and five bullets`, 'toolkit'), L(`Read: Spot job scams and apply safely`, 'jobhunt.1')] },
  { t: `Set up your job tracker`, tasks: [L(`Read: Run a job search system`, 'jobhunt.2'), A(`Add five real applications`, 'jobs'), A(`Set follow-up dates`, 'jobs')] },
  { t: `Technical questions`, tasks: [L(`Read: Technical questions for IT and support roles`, 'interview.5'), L(`Read: The troubleshooting loop`, 'itfund.0'), A(`Play the login roleplay`, 'roleplay')] },
  { t: `Tools and metrics`, tasks: [L(`Read: Help desk tools and ticket systems`, 'itkit.0'), L(`Read: Metrics that matter: CSAT, AHT and FCR`, 'support.4'), L(`Read: Questions about tools, metrics and your process`, 'qbank.3')] },
  { t: `Security basics`, tasks: [L(`Read: Security basics every support rep needs`, 'itkit.2'), L(`Read: Social engineering: how attackers use support staff`, 'sec.0'), A(`Play the phishing roleplay`, 'roleplay')] },
  { t: `Phone screens`, tasks: [L(`Read: Phone screens and the fear of blocking`, 'interview.8'), A(`Run a full 10-question simulator round`, 'sim'), A(`Listen to your worst answer again`, 'sim')] },
  { t: `Spanish for the job`, tasks: [L(`Read: Customer phrases in Spanish`, 'spanish.1'), L(`Read: Interview in Spanish`, 'spanint.0'), A(`Play the Spanish roleplay`, 'roleplay')] },
  { t: `Week three review`, tasks: [A(`Apply to three jobs`, 'jobs'), A(`Review your cards`, 'review'), A(`Check your progress report`, 'progress')] },
  { t: `Understand the culture`, tasks: [L(`Read: Workplace norms in the US`, 'culture.1'), L(`Read: Cultural cheat sheet: yes, no, feedback and time`, 'world.5'), L(`Read: Time, scheduling and time zones`, 'usa.1')] },
  { t: `Small talk`, tasks: [L(`Read: The small-talk playbook`, 'culture.0'), L(`Read: US topics for small talk`, 'culture.4'), A(`Practise the small-talk prompt in the studio`, 'practice')] },
  { t: `Your first 90 days`, tasks: [L(`Read: Your first 90 days`, 'jobhunt.5'), L(`Read: Day one: set up, show up, be easy to work with`, 'week1.0'), L(`Read: Ask for help without being annoying`, 'week1.2')] },
  { t: `Networking`, tasks: [L(`Read: Reach out to someone you do not know`, 'grow.0'), L(`Read: Your LinkedIn page that recruiters find`, 'grow.3'), A(`Send two outreach messages`, 'toolkit')] },
  { t: `Handle rejection`, tasks: [L(`Read: Handle rejection and keep going`, 'interview.9'), L(`Read: Bounce back after a bad day or a rejection`, 'calm.3'), A(`Write down one lesson from any past rejection`, 'journal')] },
  { t: `Week four review`, tasks: [A(`Apply to five jobs`, 'jobs'), A(`Follow up on every application that is due`, 'jobs'), A(`Review your cards`, 'review')] },
  { t: `Full mock interview`, tasks: [L(`Read: Full mock interview walkthrough`, 'interview.7'), A(`Run a 15-question simulator round`, 'sim'), A(`Fix your weakest answer in the Answer bank`, 'answers')] },
  { t: `Your next 30 days`, tasks: [L(`Read: A 12-month growth map`, 'grow.4'), A(`Check your progress report`, 'progress'), A(`Write your plan for the next month in the journal`, 'journal')] }
];
})();
