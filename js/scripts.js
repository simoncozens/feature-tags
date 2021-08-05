var scripts_db = {
	adlm: { name: "Adlam" },
	ahom: { name: "Ahom" },
	hluw: { name: "Anatolian Hieroglyphs" },
	arab: { name: "Arabic", glyph: "ن" },
	armn: { name: "Armenian" },
	avst: { name: "Avestan" },
	bali: { name: "Balinese" },
	bamu: { name: "Bamum" },
	bass: { name: "Bassa Vah" },
	batk: { name: "Batak" },
	beng: { name: "Bengali" },
	bng2: { name: "Bengali", indic: true, glyph: "ব" },
	bhks: { name: "Bhaiksuki" },
	bopo: { name: "Bopomofo" },
	brah: { name: "Brahmi" },
	brai: { name: "Braille" },
	bugi: { name: "Buginese" },
	buhd: { name: "Buhid" },
	byzm: { name: "Byzantine Music" },
	cans: { name: "Canadian Syllabics" },
	cari: { name: "Carian" },
	aghb: { name: "Caucasian Albanian" },
	cakm: { name: "Chakma" },
	cham: { name: "Cham" },
	cher: { name: "Cherokee" },
	chrs: { name: "Chorasmian" },
	hani: { name: "CJK Ideographic" },
	copt: { name: "Coptic" },
	cprt: { name: "Cypriot Syllabary" },
	cyrl: { name: "Cyrillic" },
	dsrt: { name: "Deseret" },
	deva: { name: "Devanagari" },
	dev2: { name: "Devanagari", indic: true, glyph: "द" },
	diak: { name: "Dives Akuru" },
	dogr: { name: "Dogra" },
	dupl: { name: "Duployan" },
	egyp: { name: "Egyptian Hieroglyphs" },
	elba: { name: "Elbasan" },
	elym: { name: "Elymaic" },
	ethi: { name: "Ethiopic" },
	geor: { name: "Georgian" },
	glag: { name: "Glagolitic" },
	goth: { name: "Gothic" },
	gran: { name: "Grantha" },
	grek: { name: "Greek" },
	gujr: { name: "Gujarati" },
	gjr2: { name: "Gujarati", indic: true, glyph: "ગ" },
	gong: { name: "Gunjala Gondi" },
	guru: { name: "Gurmukhi" },
	gur2: { name: "Gurmukhi", indic: true, glyph: "ਗ" },
	hang: { name: "Hangul" },
	jamo: { name: "Hangul Jamo" },
	rohg: { name: "Hanifi Rohingya" },
	hano: { name: "Hanunoo" },
	hatr: { name: "Hatran" },
	hebr: { name: "Hebrew" },
	kana: { name: "Hiragana" },
	armi: { name: "Imperial Aramaic" },
	phli: { name: "Inscriptional Pahlavi" },
	prti: { name: "Inscriptional Parthian" },
	java: { name: "Javanese" },
	kthi: { name: "Kaithi" },
	knda: { name: "Kannada" },
	knd2: { name: "Kannada", indic: true, glyph: "ಕ" },
	kana: { name: "Katakana" },
	kali: { name: "Kayah Li" },
	khar: { name: "Kharosthi" },
	kits: { name: "Khitan Small Script" },
	khmr: { name: "Khmer", glyph: "ក" },
	khoj: { name: "Khojki" },
	sind: { name: "Khudawadi" },
	"lao ": { name: "Lao" },
	latn: { name: "Latin" },
	lepc: { name: "Lepcha" },
	limb: { name: "Limbu" },
	lina: { name: "Linear A" },
	linb: { name: "Linear B" },
	lisu: { name: "Lisu (Fraser)" },
	lyci: { name: "Lycian" },
	lydi: { name: "Lydian" },
	mahj: { name: "Mahajani" },
	maka: { name: "Makasar" },
	mlym: { name: "Malayalam" },
	mlm2: { name: "Malayalam", indic: true, glyph: "മ" },
	mand: { name: "Mandaic, Mandaean" },
	mani: { name: "Manichaean" },
	marc: { name: "Marchen" },
	gonm: { name: "Masaram Gondi" },
	math: { name: "Mathematics", glyph: "∑" },
	medf: { name: "Medefaidrin (Oberi Okaime, Oberi Ɔkaimɛ)" },
	mtei: { name: "Meitei Mayek (Meithei, Meetei)" },
	mend: { name: "Mende Kikakui" },
	merc: { name: "Meroitic Cursive" },
	mero: { name: "Meroitic Hieroglyphs" },
	plrd: { name: "Miao" },
	modi: { name: "Modi" },
	mong: { name: "Mongolian" },
	mroo: { name: "Mro" },
	mult: { name: "Multani" },
	musc: { name: "Musical Symbols" },
	mymr: { name: "Myanmar" },
	mym2: { name: "Myanmar", glyph: "မ" },
	nbat: { name: "Nabataean" },
	nand: { name: "Nandinagari" },
	newa: { name: "Newa" },
	talu: { name: "New Tai Lue" },
	"nko ": { name: "N'Ko" },
	nshu: { name: "Nüshu" },
	hmnp: { name: "Nyiakeng Puachue Hmong" },
	orya: { name: "Odia (formerly Oriya)" },
	ory2: { name: "Odia (formerly Oriya)", indic: true, glyph: "ଓ" },
	ogam: { name: "Ogham" },
	olck: { name: "Ol Chiki" },
	ital: { name: "Old Italic" },
	hung: { name: "Old Hungarian" },
	narb: { name: "Old North Arabian" },
	perm: { name: "Old Permic" },
	xpeo: { name: "Old Persian Cuneiform" },
	sogo: { name: "Old Sogdian" },
	sarb: { name: "Old South Arabian" },
	orkh: { name: "Old Turkic, Orkhon Runic" },
	osge: { name: "Osage" },
	osma: { name: "Osmanya" },
	hmng: { name: "Pahawh Hmong" },
	palm: { name: "Palmyrene" },
	pauc: { name: "Pau Cin Hau" },
	phag: { name: "Phags-pa" },
	phnx: { name: "Phoenician" },
	phlp: { name: "Psalter Pahlavi" },
	rjng: { name: "Rejang" },
	runr: { name: "Runic" },
	samr: { name: "Samaritan" },
	saur: { name: "Saurashtra" },
	shrd: { name: "Sharada" },
	shaw: { name: "Shavian" },
	sidd: { name: "Siddham" },
	sgnw: { name: "Sign Writing" },
	sinh: { name: "Sinhala" },
	sogd: { name: "Sogdian" },
	sora: { name: "Sora Sompeng" },
	soyo: { name: "Soyombo" },
	xsux: { name: "Sumero-Akkadian Cuneiform" },
	sund: { name: "Sundanese" },
	sylo: { name: "Syloti Nagri" },
	syrc: { name: "Syriac", glyph: "ܫ" },
	tglg: { name: "Tagalog" },
	tagb: { name: "Tagbanwa" },
	tale: { name: "Tai Le" },
	lana: { name: "Tai Tham (Lanna)" },
	tavt: { name: "Tai Viet" },
	takr: { name: "Takri" },
	taml: { name: "Tamil" },
	tml2: { name: "Tamil", indic: true, glyph: "த" },
	tang: { name: "Tangut" },
	telu: { name: "Telugu" },
	tel2: { name: "Telugu", indic: true, glyph: "త" },
	thaa: { name: "Thaana" },
	thai: { name: "Thai", glyph: "ท" },
	tibt: { name: "Tibetan" },
	tfng: { name: "Tifinagh" },
	tirh: { name: "Tirhuta" },
	ugar: { name: "Ugaritic Cuneiform" },
	"vai ": { name: "Vai" },
	wcho: { name: "Wancho" },
	wara: { name: "Warang Citi" },
	yezi: { name: "Yezidi" },
	"yi  ": { name: "Yi" },
	zanb: {
		name:
			"Zanabazar Square (Zanabazarin Dörböljin Useg, Xewtee Dörböljin Bicig, Horizontal Square Script)",
	},
};

var indic = Object.keys(scripts_db).filter((e) => scripts_db[e].indic);

function expandScript(scripts) {
	var newscripts = [];
	for (script of scripts) {
		if (script == "INDIC") {
			newscripts.push(...indic);
		} else {
			newscripts.push(script);
		}
	}
	return newscripts;
}

var scriptTemplate = Handlebars.compile(
	`
		<div class="tooltip" data-text="This feature applies to the {{name}} script.">
			<span class="representative-glyph">{{glyph}}</span>
			</div>
	`
);

function scriptsFor(feature) {
	if (!feature.script) {
		return "";
	}
	var out = "";
	for (script of expandScript(Object.keys(feature.script))) {
		out += scriptTemplate(scripts_db[script]);
	}
	return out;
}

function fillScriptsFilter() {
	for (var script of Object.keys(scripts_db)) {
		var name = scripts_db[script].name;
		let opt = $(`<option value="${script}">`);
		opt.append(`${name} [${script}]`);
		$("#script-filter").append(opt);
	}
}
