// Taglish explanations and memory hooks, part 3: Spanish, IT, job hunt, professional English, customer service, US life, remote work, sales, calm.
(() => {
const T = (t, m) => ({ t, m });
Object.assign(window.TAGLISH = window.TAGLISH || {}, {
'spanish.0': T(`Ang pagiging bilingual (English at Spanish) ay may dagdag na halaga sa maraming kumpanya. Sabihin ang antas mo nang tapat (hal. B2) at mag-alok ng live demo. Hanapin ang language differential, dagdag na bayad.`, `"Patunay ng wika": level + demo.`),
'spanish.1': T(`Gamitin ang "usted" sa customers maliban kung tú ang gamit nila. Mag-memorize ng 15 core phrases: greeting, hold, verify, apologize, close. Magsalita nang mabagal at ulitin ang numero.`, `"Usted muna."`),
'spanish.2': T(`Gumawa ng bilingual glossary ng tech words: password = contraseña, update = actualización. Gamitin ang salitang ginagamit ng customer, kasi madalas halo ang English at Spanish.`, `"Sundan ang customer."`),
'spanish.3': T(`Sa Spanish email: Estimado/a, layunin, detalye, hiling, at "Saludos cordiales." Mag-ingat sa accents (si/sí) at huwag literal na isalin ang English.`, `"Saludo, Layunin, Detalye, Pamamaalam."`),
'spanish.4': T(`Sa Spanish phone calls: greet, verify, explain, close. Basahin ang numero isa-isang digit at i-spell ang pangalan. "¿Podría repetirlo, por favor?" ay magalang at ayos lang.`, `"Gracias, Verifico, Explico, Cierro."`),

'itfund.0': T(`Ang troubleshooting ay may proseso: reproduce, isolate, baguhin ang isang bagay, test, document. Magtanong: kailan nagsimula, ano ang nagbago, lahat ba ng device? Ang notes ay nagpapakita ng propesyonalismo.`, `"Isa-isang pagbabago."`),
'itfund.1': T(`Ang network ay daan: device, Wi-Fi, router, ISP, internet. Itanong: isa lang ba ang device o lahat? Doon mo malalaman kung saan titingin. Ang DNS ay parang phone book.`, `"Device, Router, ISP, Internet."`),
'itfund.2': T(`Limang ayos na lumulutas ng karamihan: restart, update, check connections, clear cache, check storage. Gumawa ng one-page cheat sheet para sa Windows at Mac.`, `"R-U-C-C-S": Restart, Update, Connections, Cache, Storage.`),
'itfund.3': T(`Ang cloud ay inuupahan mong bodega ng ibang kumpanya: storage, compute, database, network. AWS, Azure, Google Cloud ang malaki. Mag-practice sa free tier.`, `"Upa, hindi bili."`),
'itfund.4': T(`Ipaliwanag ang tech gamit ang analogy at susunod na hakbang: "DNS is like a phone book." Iwasan ang acronyms maliban kung sila ang gumamit muna.`, `"Analohiya + hakbang."`),
'itfund.5': T(`Basahin nang buo ang error, kopyahin ang eksaktong text, i-search sa quotes kasama ang product at version. Piliin ang official docs. Huwag magpatakbo ng command na hindi mo naiintindihan.`, `"Kopya, Quotes, Opisyal."`),

'focus.0': T(`Mag-single-task: isang gawain, isang timer na 25 minuto, 5 minutong break. Itago ang phone. Sulatin ang "next action" bago huminto para madaling bumalik.`, `"25 at 5."`),
'focus.1': T(`Ang tulog ay performance tool. Regular na oras, madilim at malamig na kuwarto. Kung night shift, blackout curtains at pare-parehong iskedyul. Enerhiya ang pamahalaan, hindi lang oras.`, `"Tulog muna, grind pagkatapos."`),
'focus.2': T(`Ang procrastination ay galing sa malabo, nakakabagot, o nakakatakot na gawain. Gawing maliit: "two-minute start" na buksan ang file at sumulat ng isang pangungusap.`, `"Dalawang minuto lang."`),

'jobhunt.0': T(`Ang CV ay sinasala muna ng software, tapos ng recruiter sa ilalim ng isang minuto. Kopyahin ang keywords ng job post na totoo sa iyo, gumamit ng bullet na may numero, isang pahina.`, `"Keyword, Numero, Isang pahina."`),
'jobhunt.1': T(`Ang totoong employer ay hindi hihingi ng bayad para sa equipment o training. Tingnan ang website, email domain, at LinkedIn. Kung sobrang bilis, sobrang laki ng sahod, mag-ingat.`, `"Bayad? Hindi ito totoo."`),
'jobhunt.2': T(`Patakbuhin ang paghahanap na parang pipeline: 10 aplikasyon bawat linggo, follow-up sa ika-5 araw, 5 networking contacts. Gumamit ng spreadsheet at i-review lingguhan.`, `"10, 5, 5."`),
'jobhunt.3': T(`Sa skill tests (typing, scenario, mock call), mag-practice sa parehong format na may oras. Basahin ang instructions nang dalawang beses. Tapat na pagsisikap ay mas mabuti kaysa panic.`, `"Practice sa totoong format."`),
'jobhunt.4': T(`Ang contractor ang humahawak ng sariling buwis at benefits. Itanong: fixed schedule ba, sino ang nagbibigay ng equipment, may paid leave ba, ano ang notice period. Tingnan ang time zones at holidays.`, `"Contractor: ikaw ang bahala sa buwis."`),
'jobhunt.5': T(`Sa unang 90 araw: makinig sa unang 30, mag-ambag sa susunod na 30, mag-own ng gawain sa huling 30. Itanong sa manager kung ano ang success sa 30, 60, 90 araw.`, `"Makinig, Ambag, Angkinin."`),

'itkit.0': T(`Alamin ang bokabularyo ng ticket systems: queue, priority, SLA, escalation, tag, macro. Gumamit ng free trial ng Zendesk o Freshdesk at gumawa ng limang ticket at isang macro.`, `"Queue, SLA, Macro."`),
'itkit.1': T(`Bago ang remote session: kumuha ng consent, sabihin ang gagawin mo, tapusin ang session pagkatapos. Huwag humingi ng password. Ilahad ang bawat galaw para hindi sila mawala.`, `"Pahintulot, Paliwanag, Tapos."`),
'itkit.2': T(`Alamin ang phishing: pagmamadali, kakaibang link, maling sender domain. I-report, huwag lang burahin. Gumamit ng unique passwords at MFA.`, `"Madaliang link ay hinala."`),
'itkit.3': T(`Roadmap ng certs: CompTIA A+, Network+, Security+, tapos cloud badge. Piliin base sa mga trabahong nakikita mo. Magbayad ng exam kapag handa na.`, `"A+, N+, S+."`),
'itkit.4': T(`Para umangat: i-document ang wins, magboluntaryo sa mahihirap na ticket, matuto ng isang bagong tool bawat quarter, at sabihin sa manager ang goal mo.`, `"Resulta, Boluntaryo, Sabihin."`),

'proeng.0': T(`Palambutin ang request: "Could you possibly...", "Would you mind...". Magdagdag ng please at dahilan. Sa UK lalo, ang diretsong utos ay maaaring masungit.`, `"Pakiusap, hindi utos."`),
'proeng.1': T(`Ulitin ang numero sa grupo at isulat ang buwan bilang salita (May 4). Ang US ay buwan/araw; ang UK at AU ay araw/buwan. Kumpirmahin ang units (miles vs km).`, `"Buwan bilang salita."`),
'proeng.2': T(`Mag-save ng limang email templates: follow-up, apology, request, recap, thank-you. I-edit para sa sitwasyon. Hindi ipinapadala nang walang pagbabago.`, `"Limang template."`),
'proeng.3': T(`Sa meetings, maghanda ng isang komento at isang tanong. Gamitin ang "Can I add something?" at "Just to clarify." Magbuod ng desisyon sa dulo.`, `"Isang komento, isang tanong."`),
'proeng.4': T(`May tulay ang Tagalog, Spanish, at English: mesa, silya, kumusta. Gamitin sa pag-aaral pero mag-ingat sa false friends: "actualmente" ay currently, hindi actually.`, `"Tulay, hindi bitag."`),
'proeng.5': T(`Gamitin ang AI na kasama sa practice: hilingin ang correction sa table (pangungusap mo, mas mabuting bersyon, bakit), tapos ulitin nang malakas. Sampung minuto araw-araw.`, `"Mali, Tama, Bakit, Ulit."`),

'cs.0': T(`Ang empathy ay hindi mahabang sorry. Pangalanan ang tiyak na problema, isang pangungusap, tapos aksyon. "Sounds frustrating with your deadline. Let me fix it now."`, `"Pangalanan, Kumilos."`),
'cs.1': T(`Sa galit na customer: hayaang maglabas nang 30 segundo, mag-acknowledge, magtanong ng isang linaw, mag-alok ng options. Bawasan ang boses at bilis kapag lumalakas sila.`, `"Hayaan, Kilalanin, Linawin, Alok."`),
'cs.2': T(`Ang magalang na "no" ay may "What I can do is...". Sabihin ang limitasyon, maikling dahilan, at alternatibo. Huwag mag-overexplain.`, `"Hindi, pero pwede..."`),
'cs.3': T(`Sa chat: bumati agad, maiikling mensahe, saved replies na ine-edit, at sabihin kung gaano katagal ang pagsusuri. Ang katahimikan sa chat ay mahabang pakiramdam.`, `"Mabilis, Maikli, May update."`),
'cs.4': T(`Sumulat ng knowledge base article mula sa paulit-ulit na ticket. Gamitin ang tanong ng customer bilang title, numbered steps, screenshots. Subukan sa ibang tao.`, `"Title na tanong."`),

'usa.0': T(`Sa US, hindi kasama ang tax sa presyo sa shelf at 15-20 porsiyentong tip sa restaurants ay normal. Trick: ilipat ang decimal at doblehin para sa 20 porsiyento.`, `"Tax dagdag, tip 20."`),
'usa.1': T(`Isulat ang time zone sa bawat mensahe: "Thursday 10 am ET (11 pm in Manila)." Ang daylight saving ay nagbabago ng pagitan dalawang beses sa isang taon.`, `"Laging may zone."`),
'usa.2': T(`Alamin ang US holidays (Memorial Day, July 4, Labor Day, Thanksgiving). Nakakaapekto ito sa volume ng customers at availability. Itanong kung alin ang oobserbahan mo.`, `"Holiday, volume."`),
'usa.3': T(`Sa work chat: point muna, gamitin ang threads, at huwag magpadala ng "hi" lang. Magbigay ng konteksto. Iwasan ang sarkasmo kasi mahirap ang tono sa text.`, `"Point muna, thread lagi."`),
'usa.4': T(`Mga salita sa insurance: premium (buwanang bayad), deductible (babayaran mo muna), copay (fixed fee). Huwag magbigay ng medical advice; ituro ang plan documents.`, `"Premium buwan, deductible una."`),

'remote.0': T(`Sa async, sumulat ng mensaheng masasagot nang walang tawag: konteksto, tanong, options, deadline. Idagdag: "If I do not hear back by Thursday, I will proceed with A."`, `"Konteksto, Tanong, Deadline."`),
'remote.1': T(`Matuto ng limang spreadsheet moves: freeze header, sort, filter, SUM, COUNTIF. Mag-practice sa pekeng ticket log. Ang malinis na spreadsheet ay nakakabilib sa interview task.`, `"Sort, Filter, SUM."`),
'remote.2': T(`Bago ang call, 2-minutong checklist: mic, camera, charger, notifications off, notes, tubig. Kapag nawalan ng internet: "Dropping off, rejoining on my phone."`, `"MCCNNT checklist."`),
'remote.3': T(`Gumamit ng password manager at authenticator app. Itabi ang recovery codes offline. Huwag aprubahan ang sign-in prompt na hindi mo ginawa.`, `"Manager, MFA, Codes."`),
'remote.4': T(`Ang portfolio ay may tatlong piraso: ano ang ginawa, paano, resulta. Gumamit ng screenshot at isang numero. Ilagay ang link sa CV at email signature.`, `"Ginawa, Paano, Resulta."`),

'sales.0': T(`Magtanong muna bago magmungkahi: "What are you hoping to get done?" Ulitin ang narinig mo, tapos mag-recommend. Nagtitiwala ang tao kapag naiintindihan sila.`, `"Tanong, Buod, Mungkahi."`),
'sales.1': T(`Ang objection ay impormasyon. Pakinggan, kilalanin ("That is a fair concern"), magtanong ("Compared to what?"), sumagot gamit ang halaga o opsyon.`, `"Pakinggan, Kilalanin, Tanungin, Sagutin."`),
'sales.2': T(`Ang honest upsell ay nilulutas ang tunay na pangangailangan. Magmungkahi ng isa, ipaliwanag ang benefit, tanggapin ang "no." Huwag magtago ng bayarin.`, `"Isa lang, tapat."`),
'sales.3': T(`Kapag magka-cancel ang customer, itanong kung bakit, ayusin kung kaya, mag-alok ng isa o dalawang opsyon, at iproseso nang maayos kung gusto pa rin. Iwanang bukas ang pinto.`, `"Bakit, Ayusin, Igalang."`),
'sales.4': T(`Sa follow-up: sumangguni sa huling usapan, magbigay ng halaga, isang malinaw na hiling. Pagitan: 2, 5, at 10 araw, tapos tumigil.`, `"Banggitin, Halaga, Hiling."`),

'calm.0': T(`Ang box breathing: hinga 4, hawak 4, labas 4, hawak 4. Isama ang "five things I can see." Pangkalahatang wellbeing tool ito; kung malala ang anxiety, kumunsulta sa propesyonal.`, `"4-4-4-4."`),
'calm.1': T(`Kapag nabubulol: dahan-dahang simula, huminga, tumigil. Sabihin nang magaan: "I sometimes pause when I speak." Hindi ito kahinaan; maraming propesyonal ang nabubulol.`, `"Dahan, Hinga, Tuloy."`),
'calm.2': T(`Para hindi ma-burnout sa WFH: nakatakdang oras, break bawat oras, galaw araw-araw, at shutdown ritual. Sulatin ang tatlong gawain bukas, isara ang laptop, maglakad.`, `"Oras, Break, Shutdown."`),
'calm.3': T(`Pagkatapos ng masamang araw o rejection: Fact, Story, Lesson, Step. Paghiwalayin ang nangyari sa kuwentong ikinuwento mo sa sarili. Gumawa ng isang maliit na hakbang sa loob ng 24 oras.`, `"Fact, Story, Lesson, Step."`),
'calm.4': T(`Tulog, pagkain, at galaw ang pundasyon ng boses at isip. Magsimula sa isang maliit na habit na nakakabit sa gawaing ginagawa mo na (habit stacking).`, `"Dagdag sa gawi na meron na."`)
});
})();
