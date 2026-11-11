// Taglish explanations and memory hooks, part 2: interviews, English, culture, support, vibe coding, entrepreneurship.
(() => {
const T = (t, m) => ({ t, m });
Object.assign(window.TAGLISH = window.TAGLISH || {}, {
'interview.0': T(`Ang 60-second introduction ay may hugis: Present (sino ka ngayon), Past (isang patunay na may numero), Future (bakit ang trabahong ito). Practice hanggang eksaktong isang minuto.`, `"Ngayon, Noon, Bukas": Present, Past, Future.`),
'interview.1': T(`Kapag nabubulol ka, planuhin ang unang pangungusap, bagalan, at huminga bago magsalita. Karamihan ng bulol ay nangyayari sa unang salita. Kung sumablay, ngumiti at sabihing "Let me restart that."`, `"Planong simula, mabagal, hinga."`),
'interview.2': T(`Ihanda ang mga karaniwang tanong: tell me about yourself, strength, weakness, conflict, five years. Sulat ng limang bullets bawat isa, hindi buong script, para natural ang dating.`, `"Bullets, hindi script."`),
'interview.3': T(`Sa remote interview, mag-rehearsal ng tech isang araw bago: camera, mic, internet, ilaw, backup hotspot, charger. Karamihan ng disaster ay tech, hindi talento.`, `"Camera, Mic, Net, Ilaw, Hotspot": CMNIH checklist.`),
'interview.4': T(`Sa behavioral questions, laging may kuwento ng conflict na naayos mo nang propesyonal. Sabihin: "I listened first, then proposed..." Ipinapakita nito na madali kang katrabaho.`, `"Makinig muna, mungkahi pagkatapos."`),
'interview.5': T(`Sa technical question, ipakita ang proseso mo kahit hindi mo alam ang sagot: confirm symptoms, check basics, isolate the cause. Ang proseso ay mas mahalaga kaysa sa memorya.`, `"Alamin, Tingnan, Ihiwalay."`),
'interview.6': T(`Kapag tinanong ang sweldo, magbigay ng researched range na may dahilan at manatiling flexible. Kapag may offer, huwag sumang-ayon agad: "Can I review and reply by tomorrow?"`, `"Range, Dahilan, Oras para pag-isipan."`),
'interview.7': T(`Pagkatapos ng mock interview, panoorin muna nang walang tunog (tingin, tindig), tapos pakinggan nang walang video (pace, filler). Dalawang pass ang nakakakita ng mas maraming mali.`, `"Mata muna, tenga pagkatapos."`),
'interview.8': T(`Sa phone screen, tumayo at ngumiti habang nagsasalita; maririnig ang energy. Maghanda ng cheat sheet na may intro, tatlong kuwento, at tatlong tanong.`, `"Tayo at ngiti": stand up, smile.`),
'interview.9': T(`Kapag na-reject, magpadala ng maikling thank-you at humingi ng isang tip. Isulat ang lesson. Ang rejection ay datos, hindi hatol sa pagkatao mo.`, `"Salamat, Tanong, Tuloy."`),
'interview.10': T(`Kung may gap sa CV, sagutin sa loob ng 20 segundo: honest, walang paumanhin, at tapusin sa kinabukasan: "I am ready to work full time now."`, `"Totoo, Maikli, Susunod."`),
'interview.11': T(`Ipakita ang bilingual skill sa live na demo at ihanda ang remote setup mo: backup internet, power, tahimik na lugar. Mas nakakumbinsi ang patunay kaysa pangako.`, `"Patunay, hindi pangako."`),

'fluency.0': T(`Para tumigil sa pagta-translate sa isip, magsalaysay ng ginagawa mo sa English buong araw: "I am making coffee." Sampung minuto araw-araw ay nag-iipon ng direktang pag-iisip sa English.`, `"Sabihin ang ginagawa": narrate your day.`),
'fluency.1': T(`Mas tatatak ang bagong salita kung may larawan at pangungusap na gagamitin mo talaga sa trabaho. Mas mabuti ang sampung gamit na salita kaysa isang daang hindi mo ginagamit.`, `"Larawan + Pangungusap + Gamit."`),
'fluency.2': T(`Memorize ang 20 work phrases hanggang awtomatiko: "Let me check on that," "Just to confirm." Kapag awtomatiko ang grammar, ang utak mo ay nakatuon sa problema.`, `"Awtomatikong parirala."`),
'fluency.3': T(`Huwag habulin ang perpektong accent; ayusin ang tatlong tunog na nagdudulot ng hindi pagkakaintindihan, lalo na ang dulong consonants at stress. Malinaw at mabagal ang panalo.`, `"Linaw bago accent."`),
'fluency.4': T(`Ang phrasal verbs (look into, follow up, set up) ay ginagamit nang madalas ng mga Amerikano. Mag-aral ng sampu bawat linggo at gumawa ng isang pangungusap mula sa buhay mo.`, `"Sampu bawat linggo."`),
'fluency.5': T(`Para humusay sa pakikinig, pumili ng 2-minutong clip, i-transcribe, at ihambing sa transcript. Ulitin hanggang 95 porsiyento. Magpalit-palit ng US, UK, at AU speakers.`, `"Sulat habang pakinggan."`),
'fluency.6': T(`Gumawa ng listahan ng limang paulit-ulit mong grammar slip (articles, tense, plurals) at tingnan bago mag-send. Limang pattern na ayos ay mas mabuti kaysa lahat na pangit.`, `"Limang paulit-ulit na mali."`),
'fluency.7': T(`Sundin ang 30-day plan na may isang batas: huwag lalaktawan ang dalawang araw nang sunud-sunod. Mag-record sa araw 1 at araw 30; ang pagkakaiba ang motivation mo.`, `"Hindi dalawang absent."`),

'culture.0': T(`Sa small talk gamitin ang FORD at magtanong ng dalawa sa bawat isa. Magdagdag ng "tell me more" at magbahagi ng isang detalye para hindi parang interogasyon.`, `FORD: "Pamilya, Trabaho, Libangan, Pangarap."`),
'culture.1': T(`Mahalaga sa mga Amerikano ang direkta, on time, at can-do. Sabihin ang "I can do X by Friday," hindi "I will try." Kung may limitasyon, "yes, if..." ang gamitin.`, `"May petsa ang pangako."`),
'culture.2': T(`Idioms ay nakakalito kapag literal. Mag-aral ng pares: "touch base" = check in, "ballpark" = rough estimate. Intindihin muna, gamitin nang kaunti.`, `"Idyoma, hindi literal."`),
'culture.3': T(`Sa US calls, simulan nang malinaw at masigla: "Thanks for calling, this is [name]. How can I help you today?" Ulitin ang numero at sabihing "Let me look into that."`, `"Salamat, Pangalan, Tulong."`),
'culture.4': T(`Ligtas na small talk: panahon, weekend plans, pagkain, biyahe, alaga, sports. Iwasan ang pulitika, relihiyon, sweldo. Kung lumitaw, "That is interesting" at lumipat sa magaan.`, `"Ligtas: panahon, pagkain, biyahe."`),

'support.0': T(`Ang employers ay naghahanap ng attitude, communication, reliability, at bilis ng pagkatuto. Ilagay ang mga ito sa CV na may tig-isang patunay. Para sa remote, banggitin ang workspace at backup internet.`, `"Ugali, Usapan, Tiwala, Tuto."`),
'support.1': T(`Sa galit na customer: Makinig, Empathize, Solve, Confirm. Huwag sabihing "calm down." Sabihin: "I want to fix this with you." Isulat ang sinasabi niya.`, `"MESC": Makinig, Empatiya, Solusyon, Kumpirma.`),
'support.2': T(`Para hindi masunog sa WFH, gumawa ng "start at stop" ritual: lakad bago at pagkatapos ng trabaho, parehong mesa. Ang trabaho ay dapat may hangganan.`, `"Simula at tapos na ritwal."`),
'support.3': T(`Isulat ang ticket para masolusyonan ng estranghero: Problem, Steps tried, Result, Next step. Ilagay ang device, version, oras. Nakakatipid ito ng sampung minuto sa susunod.`, `"PSRN": Problem, Steps, Result, Next.`),
'support.4': T(`Alamin ang CSAT (satisfaction), AHT (handle time), at FCR (first contact resolution). Kapag naayos sa unang tawag, bumubuti ang tatlo. Itanong sa manager kung alin ang priority.`, `"Sa unang tawag, tapos na."`),
'support.5': T(`Alagaan ang boses sa mahabang shift: tubig, pantay na lakas, break. Huwag mag-clear ng lalamunan nang madalas; lumunok o uminom na lang.`, `"Tubig bago boses."`),
'support.6': T(`Sa billing, mag-verify muna, basahin ang halaga at petsa, at kumpirmahin nang nakasulat. Huwag mangako ng refund timeline na hindi mo kontrolado.`, `"Verify, Basahin, Isulat."`),

'vibe.0': T(`Ang vibe coding loop: Describe, Run, Test, Tweak. Maliliit na ikot, laging may gumaganang bersyon. Mas mahalaga ang malinaw na pag-iisip kaysa bilis mag-type.`, `"DRTT": Describe, Run, Test, Tweak.`),
'vibe.1': T(`Magbigay sa AI ng role, goal, constraints, at halimbawa. Mas tiyak ang prompt, mas kaunti ang rework. Ipaliwanag sa iyo ng AI ang code para matuto ka.`, `"Role, Goal, Limit, Halimbawa."`),
'vibe.2': T(`Ang web ay tatlong layers: HTML (balangkas), CSS (itsura), JavaScript (kilos). Kapag may sira, itanong: aling layer ito? Iyon ang paliit ng problema.`, `"Buto, Damit, Galaw": HTML, CSS, JS.`),
'vibe.3': T(`Mag-publish nang maliit at maaga. Ang live link ay mas mabuti kaysa perpektong proyektong nakatago. Maglagay ng README na may screenshot at ano ang natutunan mo.`, `"Ilabas na ang link."`),
'vibe.4': T(`I-save ang bersyon bago bawat malaking pagbabago. Kapag sumabog, ibalik ang huling gumagana. I-paste sa AI ang eksaktong error at kontekstong code.`, `"Save bago sira."`),
'vibe.5': T(`Huwag ilagay sa AI o public repo ang passwords, keys, at data ng customer. Tanungin: okay ba ito sa billboard? Kung hindi, tanggalin.`, `"Billboard test."`),
'vibe.6': T(`Apat na Git commands: clone, add, commit, push. Ang malinis na commit history ay nagpapakitang propesyonal ka at madaling magbalik.`, `"CACP": clone, add, commit, push.`),
'vibe.7': T(`Gamitin ang AI sa unang draft ng reply, buod ng thread, at checklist, tapos i-edit. Huwag ipadala sa customer nang hindi binabasa; ikaw pa rin ang responsable.`, `"Draft ni AI, hatol mo."`),
'vibe.8': T(`Gumawa ng maliit na tool para sa sariling problema sa trabaho: reply generator o checklist. Subukan sa limang tunay na halimbawa at ilagay sa portfolio.`, `"Maliit, kapaki-pakinabang, tapos."`),

'entre.0': T(`Ang magandang negosyo ay galing sa problemang paulit-ulit na inirereklamo. Magtanong ng limang tao ng "ano ang pinaka-nakakainis sa...?" at bilangin ang pag-uulit.`, `"Reklamo ay ginto."`),
'entre.1': T(`Mag-validate bago gumawa: mag-pre-sell, landing page, o gawin nang manual para sa tatlong customer. Kung walang magbabayad, baguhin ang ideya, hindi lang ang presyo.`, `"Benta bago build."`),
'entre.2': T(`60-second pitch: Problem, Solution, Proof, Ask. Maikling pangungusap, may halimbawa, tapos maliit na hiling gaya ng 15-minutong tawag.`, `"PSPA": Problem, Solution, Proof, Ask.`),
'entre.3': T(`I-package ang alok at presyuhan ayon sa halaga. Magbigay ng tatlong tier: basic, standard, premium. Unang customers: kakilala ng kakilala, kapalit ay testimonial.`, `"Tatlong presyo, gitna ang bida."`),
'entre.4': T(`Ang headline sa LinkedIn ay: sino ang tinutulungan mo at paano. Mag-post ng isang kapaki-pakinabang na tip lingguhan. Hanapin ng recruiters ang keywords.`, `"Sino, Paano, Lingguhan."`),
'entre.5': T(`Magbukas ng hiwalay na account para sa trabaho at maglaan ng bahagi ng bawat bayad para sa buwis at fees. Itanong sa lokal na accountant kung ano ang akma sa iyo.`, `"Hiwalay na pera, nakalaan na buwis."`),
'entre.6': T(`Ang magandang proposal ay sumasagot ng tatlo: naiintindihan ko ba ang problema mo, kaya ko bang lutasin, ano ang susunod. Simulan sa sariling salita ng client.`, `"Problema, Kaya, Susunod."`),
'entre.7': T(`Sa customer interview, huwag mag-pitch. Itanong: "Tell me about the last time..." Makinig sa pera, oras, at inis. Limang interview ay karaniwang nagpapakita ng pattern.`, `"Kuwento ng huling beses."`)
});
})();
