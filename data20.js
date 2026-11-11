// Taglish explanations and memory hooks, part 1. Read the Taglish first if the English feels heavy, then go back to the English version.
(() => {
const T = (t, m) => ({ t, m });
Object.assign(window.TAGLISH = window.TAGLISH || {}, {
'speak.0': T(`Normal lang na kabahan, kasi ang katawan mo ay naghahanda. Ang trick: isulat ang mga worries, piliin ang isang kaya mong kontrolin (ang first sentence mo), at huminga nang mabagal bago magsalita. Mas kalmado ka kapag alam mo na ang simula.`, `"Sulat, Piliin, Simulan": write the worries, pick one you control, start with your first sentence.`),
'speak.1': T(`Sa isang talk, sabihin mo muna ang conclusion, tapos ang reasons. Huwag ilibing ang point sa dulo. Ang listener, lalo na ang boss, ay gustong malaman agad: ano ang bottom line?`, `Remember "Sagot muna": answer first, details later, like a headline before the story.`),
'speak.2': T(`Ang boses mo ay may pace, pause, at power. Bagalan sa mahalagang salita, tumigil ng dalawang segundo pagkatapos ng key point. Mas mukhang confident ang taong hindi nagmamadali.`, `Think of a jeepney: slow down at the stop (key word), then continue. Pause = stop sign.`),
'speak.3': T(`Sa video call, mukha at balikat lang ang nakikita, kaya itaas ang camera sa eye level, ngumiti, at tumango habang nakikinig. Ang maliit na tango ay nagpapakita na nakikinig ka.`, `Camera = mata. Eye level, ngiti, tango. "Mata, Ngiti, Tango."`),
'speak.4': T(`Sa Q&A, huwag kabahan kung hindi mo alam ang sagot. Sabihin ang alam mo, tapos mag-promise ng follow-up na may oras: "I will confirm by Thursday." Mas pinagkakatiwalaan ang honest kaysa sa nagbi-bluff.`, `"Alam ko, Aalamin ko": say what you know, then promise to find out with a deadline.`),
'speak.5': T(`Para hindi masira ang video call mo: maganda ang audio, ilaw sa harap, at camera sa eye level. Mas mahalaga ang malinaw na boses kaysa sa magarbong background. Pumasok isang minuto nang maaga at mag-small talk.`, `"Audio, Ilaw, Eye level": three things before every call.`),
'speak.6': T(`Gumawa ng "story bank" ng limang maikling kuwento mo sa trabaho. Kapag tinanong ka ng "tell me about a time," pipili ka lang, hindi mag-iimbento. Isang kuwento = point, setup, problema, action, result.`, `Five stories in your pocket: kwento-kwento bank, like a sari-sari store of examples.`),

'artic.0': T(`Ang "um" at "uh" ay lumalabas kapag naghahanap ka ng salita. Palitan mo ng tahimik na hinga. Bibigyan nito ang utak mo ng kalahating segundo at mas matatag ang dating mo sa nakikinig.`, `"Hinga, hindi um": close your lips, breathe in, then speak.`),
'artic.1': T(`Bago ang call o interview, mag-warm up ang bibig mo: lip trills, tongue twisters, hum. Parang atleta, kailangan ng warm up ang muscles ng bibig para malinaw ang salita.`, `"Warm-up ng bibig": lips, tongue, hum, 90 seconds before every call.`),
'artic.2': T(`Gamitin ang PREP sa kahit anong "why" na tanong: Point, Reason, Example, Point ulit. Mas kaunti ang rambling at mas malinaw ang sagot mo.`, `PREP = "Punto, Rason, Example, Punto": say it twice, once at the start and once at the end.`),
'artic.3': T(`Mag-aral ng mga salita sa pares, hindi nag-iisa: "resolve an issue," "escalate a ticket." Mas natural itong marinig at mas madaling tandaan kaysa sa mahabang listahan.`, `Words travel in pairs, parang "kape at tinapay." Learn the partner word too.`),

'story.0': T(`Ang magandang kuwento ay may simpleng hugis: simula, problema, action, resulta. Simulan sa sandali ng problema, hindi sa mahabang background, para maaliw agad ang nakikinig.`, `"Simula, Sablay, Solusyon, Resulta": four S/R beats in every story.`),
'story.1': T(`Gawing buhay ang kuwento sa detalye: isang numero, isang amoy o tunog, at isang emosyon. Mas natatandaan ng utak ang konkretong detalye kaysa sa pangkalahatan.`, `Kwento = number + senses + feeling. "Bilang, Pandama, Damdamin."`),
'story.2': T(`Sa interview, gamitin ang STAR: Situation, Task, Action, Result. Gamitin ang "I" sa action, kahit teamwork, para malaman nila kung ano ang ginawa mo. Isama ang numero sa result.`, `STAR = "Sitwasyon, Tungkulin, Aksyon, Resulta": the Action gets the most time.`),

'listen.0': T(`Makinig para umintindi, hindi para sumagot. Pagkatapos magsalita ng kausap, ibuod mo muna: "So the deadline moved to Friday, right?" Mas nagtitiwala ang tao kapag naiintindihan sila.`, `"Ibuod bago sumagot": summarise before you answer.`),
'listen.1': T(`Ang magandang tanong ay bukas, hindi oo-hindi: "What does great look like for you?" Nalalaman mo agad ang tunay na pangangailangan at nakakaiwas ka sa maling trabaho.`, `Open questions start with "Ano, Paano, Bakit": what, how, why.`),
'listen.2': T(`Sa small talk, magtanong tungkol sa pamilya, trabaho, libangan, at pangarap (FORD). Magtanong, makinig, at magbahagi ng isang detalye mo para balanse ang usapan.`, `FORD = "Pamilya, Trabaho, Libangan, Pangarap" in English letters: Family, Occupation, Recreation, Dreams.`),

'conf.0': T(`Ang confidence ay galing sa ebidensya, hindi sa motivational speech. Gumawa ng "evidence file": lahat ng thank-you, numero, at panalo. Basahin ito bago ang interview.`, `"Ebidensya file": write every win down. Evidence beats feelings.`),
'conf.1': T(`Ang takot ay lumiliit kapag paulit-ulit mong hinaharap sa maliliit na hakbang. Gumawa ng hagdan ng sampung speaking tasks, mula sa pag-order ng kape sa English hanggang sa pag-lead ng meeting.`, `Hagdan ng takot: one small step a day, never skip rungs.`),
'conf.2': T(`Lahat ay nagkakamali. Ang mahalaga ay ang recovery: "Let me rephrase that." Isang maikling correction, tapos tuloy. Huwag mag-sorry nang tatlong beses.`, `"Ulitin, Itama, Tuloy": rephrase, correct, continue.`),
'conf.3': T(`Magsalita nang maaga sa meeting, kahit maikling tanong lang. Habang tumatagal, mas mahirap. Maghanda ng isang tanong bago ang meeting para madali ang unang pasok.`, `"Unang lima": speak in the first five minutes.`),
'conf.4': T(`Ang impostor feeling ay karaniwan, kahit sa magagaling. Tanungin ang sarili: ano ang sasabihin ko sa kaibigan? Tapos ilista ang tatlong tunay na skills mo. Kumilos kahit may kaba.`, `"Kaibigan test": speak to yourself like a friend.`),

'persuade.0': T(`Bago humiling, alamin ang goal ng kausap. Sabihin muna kung ano ang makukuha niya: "This will save you two hours a week." Ang pakiusap na may benefit sa kanya ay mas madaling tanggapin.`, `"Ano ang makukuha niya?" What is in it for them? Say it first.`),
'persuade.1': T(`May mga prinsipyo ng impluwensya: reciprocity, social proof, authority. Gamitin nang tapat. Huwag mag-imbento ng deadline o testimonial; isang beses lang gagana, tapos wala nang tiwala.`, `"Bigay muna": give value first, then ask.`),
'persuade.2': T(`Sa negotiation, ihanda ang tatlong numero: ideal, katanggap-tanggap, at walk-away. Magsabi ng range na may dahilan, tapos tumahimik. Ang katahimikan ay bahagi ng technique.`, `"Tatlong numero, isang katahimikan."`),

'write.0': T(`Sa email, ilagay ang hinihingi mo sa subject at unang pangungusap. Ang taong abala ay babasa lang ng unang linya. Dapat alam na niya agad ang gagawin.`, `Pyramid = "Taas ang sagot": answer on top.`),
'write.1': T(`I-edit nang tatlong beses: bawasan ng isang-katlo, palitan ang malabong salita ng numero, at basahin nang malakas. Kung nabubulol ka, mabubulol din ang bumabasa.`, `"Putol, Numero, Basa": cut, number, read aloud.`),
'write.2': T(`Ang subject line ay may formula: Action + Topic + Deadline. Mag-reply sa loob ng isang business day, kahit "Got it, I will reply by Thursday." Ang katahimikan ang pumapatay ng tiwala.`, `Subject = "Gawin, Ano, Kailan."`),
'write.3': T(`Sa incident update, sabihin ang facts: ano nangyari, sino apektado, ano ginawa, kailan ang susunod na update. Walang sisihan, walang drama.`, `"Ano, Sino, Ginawa, Susunod": four lines.`),

'learn.0': T(`Mas natututo ka kapag sinusubukang alalahanin kaysa paulit-ulit na basahin. Isara ang page, isulat ang natatandaan, tapos mag-review sa 1, 3, at 7 araw. Gamitin ang Review tab.`, `"Alala bago basa": recall before rereading.`),
'learn.1': T(`Ang deliberate practice ay pagsasanay sa pinakamahirap na bahagi mo, may feedback. Hindi sapat ang paulit-ulit na dali-dali. Isang mahinang punto bawat session.`, `"Isang kahinaan, isang session."`),
'learn.2': T(`Gumawa ng isang "tahanan" ng pag-aaral: isang notebook, isang weekly review, isang daily slot. Dagdagan ng minimum na bersyon para sa pagod na araw. Sistema ang panalo, hindi motivation.`, `"Maliit pero araw-araw": a five-minute minimum beats a perfect plan.`),

'lead.0': T(`Alamin ang triggers mo at gamitin ang six-second pause bago sumagot kapag naiinis. Isulat ang galit na reply pero huwag munang i-send. Ang kalmadong sagot ay naaalala.`, `"Hinga ng anim": breathe out for six seconds.`),
'lead.1': T(`Gamitin ang SBI sa feedback: Situation, Behavior, Impact. "Sa tawag kahapon, dalawang beses mong pinutol ang customer, at nainis siya." Tapos tanungin ang pananaw nila.`, `SBI = "Sitwasyon, Ginawa, Epekto."`),
'lead.2': T(`Bawat meeting ay may purpose, owner, at oras ng tapos. Magpadala ng agenda 24 oras bago at recap sa loob ng isang oras pagkatapos. Ang sumusulat ng recap ang naaalala.`, `"Layunin, Agenda, Recap."`)
});
})();
