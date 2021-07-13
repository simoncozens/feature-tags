window.featuredb={
    "cswh": {
        "title": "Contextual Swash",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature is similar to the `swsh` (Swash) feature, but is intended to be\nused for contextual (conditional) swash substitutions. For example, while\nAdobe Garamond Pro Italic uses the `swsh` feature to substitute *all*\ncapitals for swash forms, it uses the `cswh` feature to conditionally change\nonly capitals preceding a lowercase into swash forms.\n",
        "fea": "feature cswh {\n  sub @capitals' @lowercase by @capitals.swsh;\n} cswh;\n",
        "example": {
            "font": "Work Sans",
            "text": "WOWSERS!"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Contextual Alternates > Contextual Swash Alternates\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "nalt": {
        "state": "discretionary",
        "title": "Alternate Annotation Forms",
        "registered": "Adobe",
        "description": "This feature replaces glyphs with \"notational\" forms - glyphs in boxes,\ncircles, etc. It is often used in CJK fonts to access characters in the Unicode\n\"Enclosed CJK Letters and Months\" block (for example, `sub uni3131 by uni3200;`),\nbut may also be used to access other enclosed forms (`sub one by uni2460;`).\n\n\nNote that although the OT Specification describes this as implementable via\nalternate substitution lookups, no interface supports this, and single substitutions\nshould be used instead.\n",
        "ui": "No user interface to this feature has been found.\n",
        "done": "true",
        "example": {
            "font": "Work Sans",
            "text": "12345"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "vkna": {
        "title": "Vertical Kana Alternates",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature replaces standard kana forms with glyphs which are designed\nspecifically for vertical layout. This may take a variety of forms: fonts\ndesigned with proportional kana might provide fixed-width em-square kana\nglyphs; glyphs may be raised from the horizontal baseline and centered\nwithin the em-square; or structural changes may be made analogous to the\n[`hkna`](#hkna) feature. In many fonts, vertical alternates are only provided for\nthe \"small\" kana.\n",
        "example": {
            "font": "Cherry Bomb One",
            "text": "\u30b7\u30e3\u30c3\u30c8\u30a2\u30c3\u30d7"
        },
        "fea": "feature hkna {\n  sub ka-hira by ka-hira.vkna;\n  sub sa-hira by sa-hira.vkna;\n  sub ta-hira by ta-hira.vkna;\n  # ...\n} hkna;\n",
        "ui": "In the Mac OS X typography panel, this feature is accessed via \"Optimized\nKana Alternatives -> Vertical Alternatives\".\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "akhn": {
        "group": "Preprocessing",
        "script": {
            "INDIC": {
                "order": "2"
            },
            "USE": {
                "order": "0"
            }
        },
        "title": "Akhand",
        "registered": "Microsoft",
        "state": "required",
        "description": "This feature is intended to process ligatures of base characters in Indic scripts and scripts using the Universal Shaping Engine. It was designed for the processing of \"Akhand\" (unbreakable) character sequences in Devanagari, but may also be used for any substitutions which need to be applied early in the shaping process.\n",
        "fea": "feature akhn {\n  sub ka-deva halant-deva ssa-deva by kssa-deva;\n  sub ja-deva halant-deva nya-deva by jnya-deva;\n\n  sub ra-deva' halant-deva' zerowidthjoiner by eyelash-deva;\n} akhn;\n",
        "done": "true",
        "example": {
            "font": "Hind",
            "text": "\u0915\u094d\u0937"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "hojo": {
        "title": "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms)",
        "registered": "Adobe",
        "description": "The expected form of Japanese kanji characters in an OpenType font are the\nforms specified in JIS X 0213 (which replaces the older standard, JIS X\n0208). As well as JIS X 0208, an additional standard, JIS X 0212, defined\nsupplementary characters, including 5,801 kanji characters. 2,743 of those\ncharacters were included in the JIS X 0213 standard, but in some cases,\nthe representative forms are different between the 1990 revision of JIS X\n0212 and the current revision (2004) of JIS X 0213. This feature is used to\nselect the JIS X 0212-1990 representative forms of these characters.\n\n\nThe best source of information about which glyph forms differ, and how this\nfeature should be implemented, is the\n[Adobe-Japan1](https://github.com/adobe-type-tools/Adobe-Japan1) repository.\n",
        "fea": "feature hojo {\n  sub uni7462 by uni7462.hojo;\n  sub uni7626 by uni7626.hojo;\n  # ...\n} jp83;\n",
        "done": "true",
        "example": {
            "font": "Kiwi Maru",
            "text": "\u7462\u7626"
        },
        "ui": "In the Mac OS X typography panel, this feature is accessed via the \"character\nshape\" radio buttons.\n\nIn Adobe InDesign with CJK functionality, this feature can be accessed via\nthe \"Alternate Glyphs\" dropdown in the Advanced Character Formats panel of\nthe character style options dialog.\n",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "twid": {
        "title": "Third Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature replaces glyphs (normally figures and punctuation) with variants\nwhich are one-third of the em square. This is generally used with CJK fonts\nand in the context of vertical typesetting. (For placing a sequence of three\nnumbers horizontally across an em-width vertical column.)\n\nSee also [`fwid`](#fwid), [`hwid`](#hwid), [`qwid`](#qwid).\n",
        "fea": "feature twid {\n  sub one by one.twid;\n  sub two by two.twid;\n  # ...\n}\n",
        "example": {
            "font": "Feature Sans",
            "text": "\u304b123\u304b"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Third Width\".",
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "abvs": {
        "title": "Above-base Substitutions",
        "registered": "Microsoft",
        "group": "Typographic",
        "script": {
            "INDIC": {
                "order": "0"
            },
            "khmr": {
                "order": "0"
            },
            "USE": {
                "order": "0"
            },
            "mym2": {
                "order": "0"
            }
        },
        "description": "This feature is intended for substituting base glyphs and above marks with ligature forms, but may be used for any standard typographic substitutions; engineers may wish to restrict its use to substitutions concerning above-base marks for organisational purposes. As a typographic substitution, it will be applied after the [`abvf`](#abvf) feature.\n\nThis feature is applied by the shaper as part of the standard typographic presentation phase for Indic scripts, Khmer, Myanmar, and scripts using the Universal Shaping Engine. It is applied with a per-syllable context for Indic scripts, but applied across the whole run in other scripts.\n",
        "fea": "feature abvs {\n  sub eCandraMatra-gujarati candraBindu-gujarati by eCandraMatraCandraBindu-gujarati;\n  sub eMatra-gujarati candraBindu-gujarati by eMatraCandraBindu-gujarati;\n  sub aiMatra-gujarati candraBindu-gujarati by aiMatraCandraBindu-gujarati;\n  # ...\n} abvs;\n",
        "done": "true",
        "state": "required",
        "example": {
            "font": "Hind",
            "text": "\u0930\u0943"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "stch": {
        "title": "Stretching Glyph Decomposition",
        "registered": "Microsoft",
        "required": "true",
        "group": "Common",
        "script": {
            "arab": {
                "order": "0"
            },
            "syrc": {
                "order": "0"
            }
        },
        "description": "Right.\n\n\nThe `stch` feature is part of the Arabic complex shaper. (It is the first\nfeature processed in the glyph preprocessing phase). It was designed to\nimplement the Syriac Abbreviation Mark (U+070F), which stretches to fill the\nwidth of the enclosed text.\n\n\nThe feature should be implemented by the font engineer as a multiple substitution,\nreplacing the glyph mapped to U+070F with an *odd number of glyphs*. When applying\nthe feature, the shaper performs the following actions:\n\n\n  * The substitution rules specified in the `stch` feature are applied, and the\n  sequence of glyphs returned by the rule applications are collected.\n\n  * The first glyph in the returned sequence is placed at the start of the glyph stream.\n\n  * The final glyph in the returned sequence is placed at the end of the glyph stream.\n\n  * At the end of processing, after positioning rules have been applied, the\n    width of the whole glyph stream is calculated.\n\n  * Next, odd-numbered glyphs inside the returned sequence other than the\n    first and final glyph are positioned such that they are distributed\n    evenly across the glyph stream. (For example, if there are five glyphs in the\n    sequence returned from `stch`, the third glyph is positioned horizontally\n    to appear in the middle of the glyph stream. If there are seven glyphs, the\n    third glyph is positioned to appear one-third of the way along the glyph\n    stream, and the fifth to appear two-thirds of the way along.)\n\n  * Finally, even-numbered glyphs inside the returned sequence are positioned\n    and *repeated* such that their widths completely fill the spaces between\n    the odd-numbered glyphs.\n\nFurther: the first and last glyphs in the returned sequence may be base glyphs\nor mark glyphs, and should have a non-zero horizontal advance. The\nremaining glyphs must be set as mark glyphs, but should also have a non-zero\nhorizontal advance.\n\n\nNote that although the OpenType specification describes this feature as having\nno \"script/language sensitivity\", and in theory can be applied to any situation\nwhere a glyph is decomposed and repeated to stretch over an enclosed sequence\nof glyphs (for example, enclosed numbers, Arabic year or end-of-aya marks, etc.),\nit is only processed as part of the Arabic complex shaper.\n\n\nNote also that as of macOS 11.4, the CoreText shaper does not apply this feature,\nand even if the feature is manually applied, the CoreText shaper does not implement\nthe distribution and stretching algorithm required to make the feature operated\nas expected. This has led some font engineers to create their own, manual\nimplementation inside the font; while this is an interesting engineering exercise,\nadding in the repeated glyphs manually inside the `stch` feature leads to\nerroneous results when such a font is used with a shaping engine which *does*\nimplement `stch` as specified, and cannot be recommended.\n",
        "fea": "feature stch {\n  sub abbreviation-syriac by\n    abbreviation-syriac.start\n    abbreviation-syriac.line\n    abbreviation-syriac.linedot\n    abbreviation-syriac.line\n    abbreviation-syriac.end;\n} stch;\n",
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "c2sc": {
        "title": "Small Capitals From Capitals",
        "registered": "Adobe",
        "state": "discretionary",
        "automatic": "true",
        "description": "Substitutes capital characters for small capitals. Small capitals are often used to set acronyms.\n",
        "fea": "feature c2sc {\n  sub A by A.sc;\n  sub B by B.sc;\n  # ...\n} c2sc;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Uppercase ->\nSmall Capitals.\" In Adobe applications, this feature is accessed via \"All\nSmall Caps\" in the OpenType panel (although this also turns on `smcp`).\n\n\nIn CSS, this feature can be set with `font-variant-caps: all-small-caps;`\n(although this also turns on `smcp`).\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "cv01": {
        "title": "Character Variant 1 \u2013 Character Variant 99",
        "registered": "Microsoft",
        "state": "discretionary",
        "automatic": "true",
        "description": "These features - ranging from `cv01` to `cv99` - allow for stylistic variations\nof individual characters.\n\nThey are similar to the Stylistic Set (`ss01`--`ss20`) features, but (as their)\nname implies, stylistic sets are intended to allow a *set* of glyphs to\nvary in a common way (for example, straightening the \"leg\" of glyphs such as\n`hnm`, or overlining `MCXLVI`  characters to form Roman numerals).\nCharacter variant features, on the other hand, do not imply any common\nvariations across a range of glyphs.\n\n\nWhen this feature is coded manually, character variant features may be given\nidentifying names to be displayed in the user interface. See the\n[Adobe feature file specification](http://adobe-type-tools.github.io/afdko/OpenTypeFeatureFileSpecification.html#8.d)\nfor the format of these names.\n",
        "example": {
            "font": "Source Code Pro",
            "text": "Java"
        },
        "fea": "feature cv01 {\n  cvParameters {\n      FeatUILabelNameID {\n          name 3 1 0x0409 \"single-storey a\";\n          name 1 0 0 \"single-storey a\";\n      };\n      Character 0x61;\n  }\n  sub a by a.cv01;\n} cv01;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Glyph Variants\".\nIn CSS, this feature is accessed through the [`font-variant-alternates`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates) property.\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "mgrk": {
        "title": "Mathematical Greek",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature replaces Greek glyphs with mathematical symbols: for example,\n`Sigma` is replaced by the `summation` glyph.\n",
        "fea": "feature mgrk {\n  sub uni0394 by uni2206;\n  sub Pi by product;\n  sub Sigma by summation;\n  sub uni03A9 by uni2126;\n  sub uni03BC by uni00B5;\n  sub phi by uni03D5;\n} mgrk;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Mathematical Extras\n-> Mathematical Greek Letter Forms\".\n",
        "example": {
            "font": "Vollkorn",
            "text": "\u03c6(n)=\u03a3 \u0394n"
        },
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "cpsp": {
        "title": "Capital Spacing",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature inserts a small around of space (order of 5-10 units for a typical\nfont) around capital letters to improve the setting of all-capital runs.\n",
        "example": {
            "font": "Grenze",
            "text": "AAWW"
        },
        "fea": "feature cpsp {\n  pos @capitals <5 0 10 0>;\n} cpsp;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Case-Sensitive\nLayout > Capital Spacing\".\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "titl": {
        "title": "Titling",
        "registered": "Adobe",
        "state": "discretionary",
        "automatic": "true",
        "description": "This feature substitutes glyphs for alternate forms designed for titling,\ntypically some or all capital letters.\n",
        "example": {
            "font": "Work Sans",
            "text": "P\u00d6W"
        },
        "done": "true",
        "ui": "In the Mac OS X typography panel, this feature is accessed via \"Style Options >\nTitling Capitals\".\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "abvf": {
        "title": "Above-base Forms",
        "registered": "Microsoft",
        "group": "Orthographic",
        "script": {
            "INDIC": {
                "order": "5"
            },
            "khmr": {
                "order": "3"
            },
            "USE": {
                "order": "0"
            }
        },
        "description": "Replaces above-base forms with special forms. This feature is applied by\nIndic, Khmer and USE complex shapers as part of the orthographic unit\nshaping phase. The context of application is restricted to a syllabic cluster.\n\n\nThis feature was originally intended for a specific use case in Khmer, the\nOE vowel sign (U+17BE, \u25cc\u17be), which has pre-base and above-base components.\nThe shaping engine [decomposes](https://github.com/n8willis/opentype-shaping-documents/blob/master/opentype-shaping-khmer.md#22-matra-decomposition)\nU+17BE into a pair of characters, U+17C1 (\u17c1) and U+17BE (again). It then\nreorders the syllable to put the pre-base vowel part before the base consonant,\nleaving the U+17BE after the base. The font is responsible for turning the\nremaining \u25cc\u17be glyph into the above-base part (\u17b8), hence the example\nimplementation below.\n\n\nHowever, more generally, this feature is a good home for above-base\nsubstitutions such as choosing alternate widths of an above-base vowel mark.\n\n\nSee also [`abvs`](#abvs) which applies to the whole run, rather than per-cluster.\n",
        "fea": "feature abvf {\n  sub uni17BE by uni17B8;\n} abvf;\n",
        "state": "required",
        "done": "true",
        "example": {
            "font": "Noto Sans Khmer",
            "text": "\u1799\u179b\u17cb\u1783\u17be\u1789"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "isol": {
        "title": "Isolated Forms",
        "registered": "Microsoft/Adobe",
        "group": "topographical",
        "required": "true",
        "script": {
            "arab": {
                "order": "1"
            },
            "syrc": {
                "order": "1"
            },
            "USE": {
                "order": "1"
            }
        },
        "description": "This feature is used by the Arabic and USE complex shapers as part of topographic\nshaping. It is designed to replace joining characters with isolated forms. This means characters\nwhich have the Unicode joining type `Right_Joining` or `Dual_Joining` in a\nright-to-left script, and characters which have the Unicode joining type `Left_Joining`\nor `Dual_Joining` in a left-to-right script. These joining type properties\ncan be found in [`ArabicShaping.txt`](https://www.unicode.org/Public/UCD/latest/ucd/ArabicShaping.txt)\nin the Unicode Character Database.\n",
        "example": {
            "font": "Aref Ruqaa",
            "text": "\u06cc\u06bd\u06c1"
        },
        "automatic": "true",
        "fea": "feature isol {\n  sub yehHamzaabove-ar by CH_YEu1 HAMZA_ABOVE;\n  sub tehMarbutagoal-ar by HAYCu1 dda;\n  sub hah-ar by JIMu1;\n  sub noon-ar by NUNu1 sdi;\n} isol;\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "fin3": {
        "title": "Terminal Form #3",
        "registered": "Microsoft",
        "group": "orthographic",
        "required": "true",
        "script": {
            "syrc": {
                "order": "3"
            }
        },
        "description": "This feature is used by the Arabic complex shaper when processing the Syriac\nscript. The Syriac letter alaph (U+0710) has multiple final forms: the first\nfinal form, used when the preceding character is a joining\ncharacter, is selected using the [`fina`](#fina) feature, similar to an Arabic alif.\n\n\nHowever, when the preceding character is a non-joining character, the selection\nof the final form of alaph depends on whether the preceding character has\njoining group `Dalath_Rish`. If the preceding character (skipping all characters\nwith a transparent joining group) is either U+0715 (dalath), U+0716 (dotless\ndalath rish) or U+072A (rish), this feature is applied. Otherwise,\nthe [`fin2`](#fin2) feature is applied.\n",
        "example": {
            "font": "Noto Sans Syriac",
            "text": "\u0715\u0710"
        },
        "fea": "feature fin3 {\n  lookupflag RightToLeft IgnoreMarks;\n  sub uni0710 by uni0710.Fina3;\n  } fin2;\n",
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "kern": {
        "title": "Kerning",
        "registered": "Microsoft/Adobe",
        "automatic": "true",
        "state": "default",
        "description": "This feature is one of the two facilities for kerning within OpenType.\nThe original TrueType `kern` *table* in the font implements simple,\nnon-contextual pair-based and class-based kerning, and a pair-based (format 0)\n`kern` table was historically required for kerning to function in applications\nsuch as Microsoft PowerPoint.\n\n\nHowever, modern fonts tend to implement kerning through the use of\nthis feature instead (see [discussion](https://typedrawers.com/discussion/comment/15218)).\nThe standard implementation is to use GPOS 2 pair positioning rules to adjustment\nthe X advance of the first glyph in the pair, although note that when\ngenerating a `kern` feature for right-to-left text, the adjustment is\ngenerally made to both advance *and* placement:\n\n```\npos period parentheses <-30 0 -30 0>;\n```\n\n\nSee also the `vkrn` feature for kerning in vertical settings. Kerning may\nbe disabled based on user preference; for mandatory adjustments, use the\n[`dist`](#dist) feature instead.\n",
        "example": {
            "font": "Vollkorn",
            "text": "Avatar"
        },
        "ui": "In the OS X typography panel, this feature is *disabled* via \"Text Spacing > No Kerning\".",
        "done": "true",
        "popularity": "very common",
        "popularity_ix": 5
    },
    "jp78": {
        "title": "JIS78 Forms",
        "registered": "Adobe",
        "description": "The expected form of Japanese kanji characters in an OpenType font are the\nforms specified in JIS X 0213 (which replaces the older standard, JIS X\n0208). In the course of revision of this standard, the expected forms of a\nnumber of kanji characters have changed over time. For example, between\nthe 1978 and 1983 revisions, the \"road\" radical (*shinny\u014d*) changed form\nin some characters, moving from two initial dots to one dot. (This change\nwas reversed in the 2004 revision.)\n\n\nFonts should target the most recent revision of the standard (currently the\n2004 revision). However, features may be used to access forms specified in\nearlier revisions.\n\n\nA historical comparison between different character forms in JIS revisions\ncan be found at [this site](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/jisrev.html).\n\n\nIf the `jp78` feature is applied, kanji should be replaced by variant forms\nrepresenting those specified in the 1978 revision of the standard.\n",
        "fea": "feature jp78 {\n  sub uni5049 by uni5049.jp78;\n  sub uni5275 by uni5275.jp78;\n  sub uni8328 by uni8328.jp78;\n  # ...\n} jp83;\n",
        "done": "true",
        "example": {
            "font": "Shippori Mincho",
            "text": "\u5049\u8328\u5275"
        },
        "ui": "In the Mac OS X typography panel, this feature is accessed via the \"character\nshape\" radio buttons.\n\nIn Adobe InDesign with CJK functionality, this feature can be accessed via\nthe \"Alternate Glyphs\" dropdown in the Advanced Character Formats panel of\nthe character style options dialog.\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "blwf": {
        "title": "Below-base Forms",
        "registered": "Microsoft",
        "group": "Orthographic",
        "script": {
            "INDIC": {
                "order": "4"
            },
            "khmr": {
                "order": "2"
            },
            "USE": {
                "order": "0"
            },
            "mym2": {
                "order": "3"
            }
        },
        "description": "Replaces below-base forms with special forms. This feature is applied by\nIndic, Khmer, Myanmar and USE complex shapers as part of the orthographic unit\nshaping phase. The context of application is restricted to a syllabic cluster.\n\n\nThis is intended to be used for halant conjuncts, where consonant-virama-consonant\nsequences cause the second consonant to be displayed below the first.\n",
        "fea": "feature blwf {\n  sub virama-myanmar @consonant by @conjunct_consonant;\n} blwf;\n",
        "state": "required",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "vjmo": {
        "title": "Vowel Jamo Forms",
        "registered": "Microsoft",
        "group": "topographical",
        "required": "true",
        "script": {
            "hang": "2"
        },
        "description": "The Korean Hangul script is encoded in Unicode in two ways: first, as a series\nof precomposed syllable graphemes (encoded from U+AC00 to U+D7AF); second, as\na series of indivdual, conjoining *jamo*. Korean syllables form a LVT?\n(leading consonant, vowel, optional trailing consonant) pattern; the leading consonant\n(*choseong*) jamo are encoded between U+1100 and U+115F, the vowel (*jungseong*)\njamo are encoded between U+1160 and U+11A7, and the optional trailing consonant\n(*jongseong*) jamo between U+11A8 and U+11FF. (At least in the primary Hangul\nJamo Unicode block; other jamo are encoded in extension blocks.)\n\n\nThe Hangul shaper will first attempt to compose any sequences of conjoining jamo\ninto an encoded form in the precomposed syllable block. But where this is not\nsuccessful - for example, in an Old Korean form which is not encoded in Unicode\nas a precomposed syllable - then the shaper will instead *decompose* any LV\nsyllables to break the syllable into separate L, V, and T? characters, and then\napply the Korean shaping features ([`ljmo`](#ljmo), `vjmo`, [`tjmo`](#tjmo)) to select forms of\nthe jamo which are appropriately positioned and sized to combine into the correct\ngrapheme-image.\n\n\nFor example, the Old Korean syllable \u1112\u119e\u11af is not encoded in Unicode as a precomposed\nsyllable, and so must be encoded with the three individual jamo. The Hangul\nshaper applies the [`ljmo`](#ljmo) feature to the *choseong*, the `vjmo` feature to the\n*jungseong* and the [`tjmo`](#tjmo) feature to the *jongseong*. The resulting sequence\nproduces a glyph which renders the syllable correctly, with the `vjmo` and\n[`tjmo`](#tjmo) generally producing zero-width mark glyphs positioned appropriately. An\nalternative to this technique is to use the [`ccmp`](#ccmp) feature to turn decomposed\njamo into a precomposed glyph.\n\n\nFor further information, see sections 3.12 and 18.6 of the Unicode Standard.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "fin2": {
        "title": "Terminal Form #2",
        "registered": "Microsoft",
        "group": "topographical",
        "required": "true",
        "script": {
            "syrc": {
                "order": "3"
            }
        },
        "description": "This feature is used by the Arabic complex shaper when processing the Syriac\nscript. The Syriac letter alaph (U+0710) has multiple final forms: the first\nfinal form, used when the preceding character is a joining\ncharacter, is selected using the [`fina`](#fina) feature, similar to an Arabic alif.\n\n\nHowever, when the preceding character is a non-joining character, the selection\nof the final form of alaph depends on whether the preceding character has\njoining group `Dalath_Rish`. If the preceding character (skipping all characters\nwith a transparent joining group) is either U+0715 (dalath), U+0716 (dotless\ndalath rish) or U+072A (rish), the [`fin3`](#fin3) feature is applied. Otherwise,\nthis feature is applied.\n",
        "example": {
            "font": "Noto Sans Syriac",
            "text": "\u0712\u0710"
        },
        "fea": "feature fin2 {\n  lookupflag RightToLeft IgnoreMarks;\n  sub uni0710 by uni0710.Fina2;\n  } fin2;\n",
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "fwid": {
        "title": "Full Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature replaces glyphs with variants which fill the em square. This is\ngenerally used with CJK fonts for setting text within an em-square grid (*hanmen*).\n",
        "fea": "feature qwid {\n  sub one by uniFF11;\n  sub two by uniFF12;\n  # ...\n  sub a by uniFF41;\n  sub b by uniFF42;\n}\n",
        "example": {
            "font": "Shippori Mincho",
            "text": "\u304b12\u304bab"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Full Width\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "blws": {
        "title": "Below-base Substitutions",
        "registered": "Microsoft",
        "group": "Typographic",
        "script": {
            "INDIC": {
                "order": "0"
            },
            "khmr": {
                "order": "0"
            },
            "USE": {
                "order": "0"
            },
            "mym2": {
                "order": "0"
            }
        },
        "description": "This feature is intended for substituting base glyphs and below marks\nwith ligature forms, but may be used for any standard typographic\nsubstitutions; engineers may wish to restrict its use to substitutions\nconcerning below-base marks for organisational purposes. As a typographic\nsubstitution, it will be applied after the [`blwf`](#blwf) feature.\n\n\nThis feature is applied by the shaper as part of the standard typographic\npresentation phase for Indic scripts, Khmer, Myanmar, and scripts using the\nUniversal Shaping Engine. It is applied with a per-syllable context for\nIndic scripts, but applied across the whole run in other scripts.\n",
        "fea": "feature blws {\n    sub dvRA dvmU  by dvRA_mU;\n    sub dvRA dvmUU by dvRA_mUU;\n    sub dvHA dvmU  by dvHA_mU;\n    sub dvHA dvmUU by dvHA_mUU;\n    sub dvDA  dvmvR by dvDA_mvR;\n    sub dvSHA dvmvR by dvSHA_mvR;\n    sub dvHA  dvmvR by dvHA_mvR;\n} blws;\n",
        "done": "true",
        "state": "required",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "hkna": {
        "title": "Horizontal Kana Alternates",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature replaces standard kana forms with glyphs which are designed\nspecifically for horizontal layout. For example, while \"generic\" kana may\nhave curving crossbars for characters such as \u3055 and \u305f, horizontal variants\nmay use straight crossbars.\n",
        "example": {
            "font": "Feature Sans",
            "text": "\u304b12\u304b"
        },
        "fea": "feature hkna {\n  sub ka-hira by ka-hira.vkna;\n  sub sa-hira by sa-hira.vkna;\n  sub ta-hira by ta-hira.vkna;\n  # ...\n} hkna;\n",
        "ui": "In the Mac OS X typography panel, this feature is accessed via \"Optimized\nKana Alternatives -> Horizontal Alternatives\".\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "palt": {
        "title": "Proportional Alternate Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature is similar to the [`pwid`](#pwid) feature, but instead of replaces full-width\nglyphs with proportional equivalents, it re-spaces the glyphs using positioning\nrules.\n",
        "fea": "feature pwid {\n  pos uniFF41 <-186 0 -373 0>;\n  pos uniFF42 <-148 0 -346 0>;\n  pos uniFF43 <-220 0 -441 0>;\n  pos uniFF44 <-176 0 -353 0>;\n  # ...\n} palt;\n",
        "example": {
            "font": "Shippori Mincho",
            "text": "\u304b\uff41\uff42\uff43\u304b"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Alternative Proportional Widths\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "jp90": {
        "title": "JIS90 Forms",
        "registered": "Adobe",
        "description": "The expected form of Japanese kanji characters in an OpenType font are the\nforms specified in JIS X 0213 (which replaces the older standard, JIS X\n0208). In the course of revision of this standard, the expected forms of a\nnumber of kanji characters have changed over time. For example, between\nthe 1983 and 1990 revisions, the \"long stride\" radical (*inny\u014d*) changed form\nin some characters, losing the upstroke on the third stroke.\n\n\nFonts should target the most recent revision of the standard (currently the\n2004 revision). However, features may be used to access forms specified in\nearlier revisions.\n\n\nA historical comparison between different character forms in JIS revisions\ncan be found at [this site](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/jisrev.html).\n\n\nIf the `jp90` feature is applied, kanji should be replaced by variant forms\nrepresenting those specified in the 1990 revision of the standard.\n",
        "fea": "feature jp90 {\n  sub uni853D by uni853D.jp90;\n  sub uni8AB9 by uni8AB9.jp90;\n  sub uni990C by uni990C.jp90;\n  # ...\n} jp90;\n",
        "ui": "In the Mac OS X typography panel, this feature is accessed via the \"character\nshape\" radio buttons.\n\nIn Adobe InDesign with CJK functionality, this feature can be accessed via\nthe \"Alternate Glyphs\" dropdown in the Advanced Character Formats panel of\nthe character style options dialog.\n",
        "done": "true",
        "example": {
            "font": "Kiwi Maru",
            "text": "\u990c\u8ab9\u853d"
        },
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "halt": {
        "title": "Alternate Half Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature is similar to the [`hwid`](#hwid) feature, but instead of replacing half-width\nglyphs with proportional equivalents, it re-spaces the glyphs using positioning\nrules.\n",
        "fea": "feature halt {\n  pos [degree.full minute.full quotedblright.full quoteright.full second.full uni3001 uni3002 uni3009 uni300B uni300D uni300F uni3011 uni3015 uni301F uniFF09 uniFF0C uniFF0E uniFF3D uniFF5D] -500;\n  pos [quotedblleft.full quoteleft.full uni3008 uni300A uni300C uni300E uni3010 uni3014 uni301D uniFF08 uniFF3B uniFF5B] <-500 0 -500 0>;\n  pos [uni30FB uniFF01 uniFF1A uniFF1B] <-250 0 -500 0>;\n} halt;\n",
        "example": {
            "font": "Reggae One",
            "text": "\u304b\u3001\u304c\u3002\u3055"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Alternative Half Width\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "expt": {
        "title": "Expert Forms",
        "registered": "Adobe",
        "description": "This feature is used to substitute Japanese kanji for alternative forms which\nare considered more \"typographical\". This includes the use of JIS78 forms\n(see [`jp78`](#jp78)), but also a wide range of other substitutions.\n\nThe expected substitutions of the `expt` feature are defined in terms of the\n[Adobe-Japan1](https://github.com/adobe-type-tools/Adobe-Japan1) glyphset.\nEngineers creating Japanese fonts according to that glyphset should read the\ninformation at the Adobe-Japan1 repository, and use the latest version of the\nfeature code provided there to implement this feature.\n\n(Thanks to Ken Lunde for the information about implementing this feature.)\n",
        "done": "true",
        "example": {
            "font": "Kiwi Maru",
            "text": "\u66c1\u5819\u50ca"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "falt": {
        "title": "Final Glyph on Line Alternates",
        "registered": "Microsoft",
        "description": "This feature was intended to allow a justification system to substitute a\nglyph for another form when the glyph is the final one on a line of text,\nto improve the fitting of the line. (See also [`jalt`](#jalt).) No known layout\nengine supports activating this and it is unclear whether any fonts\nimplemented the feature.\n",
        "done": "true",
        "status": "deprecated",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "half": {
        "title": "Half Forms",
        "registered": "Microsoft",
        "group": "Orthographic",
        "script": {
            "INDIC": {
                "order": "6"
            },
            "USE": {
                "order": "0"
            }
        },
        "description": "This feature produces half forms of conjuncts. It is processed in the Indic\nand USE complex shapers as part of the orthographic shaping group.\n\n\nHalf forms are used in scripts such as Devanagari to display dead (unvoiced)\nconsonants after a virama in conjuncts which do not have a predetermined\nconjunct form. Half forms should be provided for all base consonants. These\nhalf forms can then be substituted into conjuncts later using the `pres`\nfeature. For example:\n\n```\nfeature half {\n  sub ka-deva halant-deva by k-deva;\n  ...\n} half;\nfeature pres {\n  sub k-deva sa-deva by ksa-deva;\n  ...\n} pres;\n```\n",
        "example": {
            "font": "Hind",
            "text": "\u0917\u094d\u0924"
        },
        "state": "required",
        "done": "true",
        "fea": "feature half {\n  sub ka-deva halant-deva by k-deva;\n  sub kha-deva halant-deva by kh-deva;\n  sub ga-deva halant-deva by g-deva;\n  sub gha-deva halant-deva by gh-deva;\n  ...\n} half;\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "dlig": {
        "title": "Discretionary Ligatures",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature is used for additional typographic ligatures which are selectable\nby the end-user.\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Ligatures -> Rare\nLigatures.\" (Not to be confused with the `rlig` feature, which is for required\nligatures...) In Adobe applications, this feature is\naccessed via \"Discretionary Ligatures\" in the OpenType panel.\n",
        "fea": "sub dlig {\n  sub t h by t_h;\n  sub p p by p_p;\n} dlig;\n",
        "example": {
            "font": "Allura",
            "text": "coppersmith"
        },
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "hlig": {
        "title": "Historical Ligatures",
        "registered": "Microsoft",
        "state": "discretionary",
        "description": "Substitutes ligature forms which are no longer commonly used, or which\ngive the text a \"historical\" feel: for example, the \"st\" ligature. See\nalso the [`hist`](#hist) feature.\n",
        "fea": "feature hlig {\n  sub s t by s_t;\n} hlig;\n",
        "example": {
            "font": "EB Garamond",
            "text": "a\u017f\u017fi\u017ft"
        },
        "done": "true",
        "ui": "In the OS X typography panel, this feature is accessed via \"Ligatures -> Historical\nLigatures.\"\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "jalt": {
        "title": "Justification Alternates",
        "registered": "Microsoft",
        "state": "discretionary",
        "description": "This feature is intended to allow text layout engines to improve line justification\nby selecting alternate glyphs. A layout engine can set a line of text, and then\ntry applying the `jalt` feature to the line to see if the resulting glyphs have\na better fit. It is rarely implemented in layout engines, with Adobe InDesign\nand Photoshop being the only known implementations.\n",
        "fea": "feature jalt {\n  sub qaf-ar by qaf-ar.jalt;\n  sub seen-ar by seen-ar.jalt;\n  # ...\n} jalt;\n",
        "example": {
            "font": "Aref Ruqaa",
            "text": "\u0633\u0627\u0631\u0642 \u0627\u0644\u063a\u0646\u0645"
        },
        "done": "true",
        "ui": "In Adobe InDesign, this can be automatically applied at the paragraph level by choosing \"Justification\" from the paragraph panel menu and selecting \"Justification Alternates (Naskh)\" in the Justification dropdown. It can also be manually applied at the character level by choosing the Justification Alternate option from the character panel menu.\nIn Adobe Photoshop, it can be manually applied at the character level by choosing \"Justification Alternates\" from the character panel.",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "hngl": {
        "status": "deprecated",
        "title": "Hangul",
        "registered": "Adobe",
        "description": "This feature is deprecated and should not be used. The idea of this\nfeature was to replace hanja (Chinese Han characters) with hangul\nsyllables. But such semantic behavior should be processed at the\ninput method environment level, not at the font level, meaning this\nfeature was never a good idea.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "lnum": {
        "automatic": "true",
        "state": "discretionary",
        "title": "Lining Figures",
        "registered": "Adobe",
        "description": "This feature substitutes digits for lining forms. Lining figures are\ndesigned to fit in all-capital settings.\n\nIn theory, this feature should not just substitute the default form\nof figures (e.g. `one`, `two`) for lining forms, but also any alternate\nnon-lining forms (such as oldstyle figures) for lining forms. Where\nlining forms are the default, implementing a substitution from oldstyle\nfigures to lining figures is not typographically necessary but will cause\nthe UI of layout programs to display lining figures as an option.\n\nSee also [`onum`](#onum), `pnum`, `tnum`.\n",
        "fea": "feature lnum {\n  sub one by one.lf;\n  sub two by two.lf;\n  # ...\n} lnum;\n",
        "example": {
            "font": "Baskervville",
            "text": "ABC1234"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Number Case >\nLining Figures\". In Adobe applications, selecting \"Tabular lining\" from the\nOpenType panel will apply this feature and the `tnum` feature, while selecting\n\"Proportional lining\" will apply this feature and the `pnum` feature.\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "pwid": {
        "title": "Proportional Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature replaces glyphs (normally figures and punctuation) sized to\nthe em-square with variants which are proportionally spaced. This is generally\nused with CJK fonts. It is the opposite of the [`fwid`](#fwid) feature.\n",
        "fea": "feature pwid {\n  sub uniFF11 by one;\n  sub uniFF12 by two;\n  # ...\n  sub uniFF41 by a;\n  sub uniFF42 by b;\n  # ...\n} pwid;\n",
        "example": {
            "font": "Kiwi Maru",
            "text": "\u304b\uff41\uff42\uff43\u304b"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Proportional Widths\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "jp83": {
        "title": "JIS83 Forms",
        "registered": "Adobe",
        "description": "The expected form of Japanese kanji characters in an OpenType font are the\nforms specified in JIS X 0213 (which replaces the older standard, JIS X\n0208). In the course of revision of this standard, the expected forms of a\nnumber of kanji characters have changed over time. For example, between\nthe 1983 and 1990 revisions, the \"eight\" radical (*hachigashira*) changed form,\nlosing its top horizontal line.\n\n\nFonts should target the most recent revision of the standard (currently the\n2004 revision). However, features may be used to access forms specified in\nearlier revisions.\n\n\nA historical comparison between different character forms in JIS revisions\ncan be found at [this site](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/jisrev.html).\n\n\nIf the `jp83` feature is applied, kanji should be replaced by variant forms\nrepresenting those specified in the 1983 revision of the standard.\n",
        "fea": "feature jp83 {\n  sub uni82A6 by uni82A6.jp83;\n  sub uni9022 by uni9022.jp83;\n  # ...\n} jp83;\n",
        "done": "true",
        "example": {
            "font": "Shippori Mincho",
            "text": "\u9022\u82a6\u6666"
        },
        "ui": "In the Mac OS X typography panel, this feature is accessed via the \"character\nshape\" radio buttons.\n\nIn Adobe InDesign with CJK functionality, this feature can be accessed via\nthe \"Alternate Glyphs\" dropdown in the Advanced Character Formats panel of\nthe character style options dialog.\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "curs": {
        "automatic": "true",
        "title": "Cursive Positioning",
        "registered": "Microsoft",
        "state": "default",
        "group": "positioning",
        "description": "This feature is used to position glyphs with cursive connections.\n\n\nCertain scripts, in particular Arabic, are \"connected\" scripts, where the\nstart of a character has its position adjusted relative to the end of the previous\ncharacter. In font editors, this is normally defined by setting \"exit\" and\n\"entry\" anchor points. These are then converted to GPOS 3 cursive positioning\nrules.\n\n\nWhile this feature is not mandatory for designers - some styles of Arabic\nare aligned along the baseline, and so glyphs do not need to be repositioned\n- it is applied by default if present, and is not specific to Arabic script.\nIt is not impossible, but exceptionally uncommon, to use this feature for\nconnected \"cursive\" Latin fonts, and is often unnecessary because of the\npresence of a fixed baseline in Latin.\n",
        "example": {
            "font": "Aref Ruqaa",
            "text": "\u0633\u0645\u0631"
        },
        "done": "true",
        "fea": "feature curs {\n  pos cursive uni066F.medi <anchor 606 35> <anchor 0 35>;\n  pos cursive uni0640 <anchor 250 35> <anchor 0 35>;\n  pos cursive uni06A1.medi <anchor 606 35> <anchor 0 35>;\n  # ...\n} curs;\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "ljmo": {
        "title": "Leading Jamo Forms",
        "registered": "Microsoft",
        "group": "topographical",
        "required": "true",
        "script": {
            "hang": "1"
        },
        "description": "The Korean Hangul script is encoded in Unicode in two ways: first, as a series\nof precomposed syllable graphemes (encoded from U+AC00 to U+D7AF); second, as\na series of indivdual, conjoining *jamo*. Korean syllables form a LVT?\n(leading consonant, vowel, optional trailing consonant) pattern; the leading consonant\n(*choseong*) jamo are encoded between U+1100 and U+115F, the vowel (*jungseong*)\njamo are encoded between U+1160 and U+11A7, and the optional trailing consonant\n(*jongseong*) jamo between U+11A8 and U+11FF. (At least in the primary Hangul\nJamo Unicode block; other jamo are encoded in extension blocks.)\n\n\nThe Hangul shaper will first attempt to compose any sequences of conjoining jamo\ninto an encoded form in the precomposed syllable block. But where this is not\nsuccessful - for example, in an Old Korean form which is not encoded in Unicode\nas a precomposed syllable - then the shaper will instead *decompose* any LV\nsyllables to break the syllable into separate L, V, and T? characters, and then\napply the Korean shaping features (`ljmo`, [`vjmo`](#vjmo), [`tjmo`](#tjmo)) to select forms of\nthe jamo which are appropriately positioned and sized to combine into the correct\ngrapheme-image.\n\n\nFor example, the Old Korean syllable \u1112\u119e\u11af is not encoded in Unicode as a precomposed\nsyllable, and so must be encoded with the three individual jamo. The Hangul\nshaper applies the `ljmo` feature to the *choseong*, the [`vjmo`](#vjmo) feature to the\n*jungseong* and the [`tjmo`](#tjmo) feature to the *jongseong*. The resulting sequence\nproduces a glyph which renders the syllable correctly, with the [`vjmo`](#vjmo) and\n[`tjmo`](#tjmo) generally producing zero-width mark glyphs positioned appropriately. An\nalternative to this technique is to use the [`ccmp`](#ccmp) feature to turn decomposed\njamo into a precomposed glyph.\n\n\nFor further information, see sections 3.12 and 18.6 of the Unicode Standard.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "tjmo": {
        "title": "Trailing Jamo Forms",
        "registered": "Microsoft",
        "group": "topographical",
        "required": "true",
        "script": {
            "hang": "3"
        },
        "description": "The Korean Hangul script is encoded in Unicode in two ways: first, as a series\nof precomposed syllable graphemes (encoded from U+AC00 to U+D7AF); second, as\na series of indivdual, conjoining *jamo*. Korean syllables form a LVT?\n(leading consonant, vowel, optional trailing consonant) pattern; the leading consonant\n(*choseong*) jamo are encoded between U+1100 and U+115F, the vowel (*jungseong*)\njamo are encoded between U+1160 and U+11A7, and the optional trailing consonant\n(*jongseong*) jamo between U+11A8 and U+11FF. (At least in the primary Hangul\nJamo Unicode block; other jamo are encoded in extension blocks.)\n\n\nThe Hangul shaper will first attempt to compose any sequences of conjoining jamo\ninto an encoded form in the precomposed syllable block. But where this is not\nsuccessful - for example, in an Old Korean form which is not encoded in Unicode\nas a precomposed syllable - then the shaper will instead *decompose* any LV\nsyllables to break the syllable into separate L, V, and T? characters, and then\napply the Korean shaping features ([`ljmo`](#ljmo), [`vjmo`](#vjmo), `tjmo`) to select forms of\nthe jamo which are appropriately positioned and sized to combine into the correct\ngrapheme-image.\n\n\nFor example, the Old Korean syllable \u1112\u119e\u11af is not encoded in Unicode as a precomposed\nsyllable, and so must be encoded with the three individual jamo. The Hangul\nshaper applies the [`ljmo`](#ljmo) feature to the *choseong*, the [`vjmo`](#vjmo) feature to the\n*jungseong* and the `tjmo` feature to the *jongseong*. The resulting sequence\nproduces a glyph which renders the syllable correctly, with the [`vjmo`](#vjmo) and\n`tjmo` generally producing zero-width mark glyphs positioned appropriately. An\nalternative to this technique is to use the [`ccmp`](#ccmp) feature to turn decomposed\njamo into a precomposed glyph.\n\n\nFor further information, see sections 3.12 and 18.6 of the Unicode Standard.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "fina": {
        "title": "Terminal Forms",
        "registered": "Microsoft/Adobe",
        "group": "topographical",
        "required": "true",
        "script": {
            "arab": {
                "order": "2"
            },
            "syrc": {
                "order": "2"
            },
            "USE": {
                "order": "4"
            }
        },
        "description": "This feature is used by the Arabic and USE complex shapers as part of topographic\nshaping. It is *not* appropriate for general end-of-word detection, but is\ndesigned to replace joining characters with final forms. This means characters\nwhich have the Unicode joining type `Right_Joining` or `Dual_Joining` in a\nright-to-left script, and characters which have the Unicode joining type `Left_Joining`\nor `Dual_Joining` in a left-to-right script. These joining type properties\ncan be found in [`ArabicShaping.txt`](https://www.unicode.org/Public/UCD/latest/ucd/ArabicShaping.txt)\nin the Unicode Character Database.\n",
        "example": {
            "font": "Aref Ruqaa",
            "text": "\u062c\u0631"
        },
        "automatic": "true",
        "fea": "feature fina {\n  lookupflag RightToLeft IgnoreMarks;\n  sub alef-ar by alef-ar.fina;\n  sub beh-ar by beh-ar.fina;\n  # ...\n}\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "hwid": {
        "title": "Half Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature replaces glyphs (normally figures and punctuation) with variants\nwhich are one-half of the em square. This is generally used with CJK fonts\nand in the context of vertical typesetting. (For placing a sequence of two\nnumbers horizontally across an em-width vertical column.)\n\nSee also [`fwid`](#fwid), [`qwid`](#qwid), [`twid`](#twid).\n",
        "fea": "feature hwid {\n  sub one by one.hwid;\n  sub two by two.hwid;\n  # ...\n}\n",
        "example": {
            "font": "Feature Sans",
            "text": "\u304b12\u304b"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Half Width\".",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "ccmp": {
        "state": "required",
        "title": "Glyph Composition/Decomposition",
        "registered": "Microsoft",
        "group": "Common",
        "order": "0",
        "description": "After OpenType normalization but before the processing of other features,\nit may be useful to decompose single glyphs into sequences, or combine\nsequences into a single glyph. For example:\n\n\n* In Arabic fonts, treating the rasm letters and the nukta dots separately\nallows for more flexible positioning and reduces the number of glyphs which\nneed to be drawn. Using rules such as `sub beh-ar by behDotless-ar dotbelow;`\nin the `ccmp` feature decomposes the dots into separate glyphs.\n\n* The i acute character (\u00ed, U+00ED) is normalized to U+0069 U+0301 (i acutecomb).\nHowever, as the acute replaces the tittle on the `i`, it is useful to substitute\nthis for a dotless form: `sub i' acutecomb by idotless;`.\n\n* Conversely, multiple glyphs may be combined into one. In Tibetan, stacked\nletters such as \u0f43 (U+0F43) have their own Unicode codepoints, but can\nalternatively be encoded in documents using the decomposed form U+0F42 (\u0f42)\n\u25cc\u0fb7 (U+0FB7). These two encodings can be unified in the font with a rule such\nas `sub uni0F42 uni0FB7 by uni0F43;`.\n",
        "fea": "feature ccmp {\n  sub alefHamzaabove-ar by alef-ar hamzaabove-ar;\n  sub alefHamzabelow-ar by alef-ar hamzabelow-ar;\n  sub beh-ar by behDotless-ar dotbelow-ar;\n  sub teh-ar by behDotless-ar twodotsabove-ar;\n  sub theh-ar by behDotless-ar threedotsabove-ar;\n  sub jeem-ar by hah-ar dotbelow-ar;\n  sub khah-ar by hah-ar dotabove-ar;\n  ...\n} ccmp;\n",
        "done": "true",
        "popularity": "common",
        "popularity_ix": 4
    },
    "frac": {
        "title": "Fractions",
        "state": "discretionary",
        "registered": "Microsoft/Adobe",
        "description": "The feature is used to set fractions, both those fractions for which there is a precomposed glyph in the font (for example, `sub three slash four by threequarters;`) and those made up of numerator and denominator forms of numerals.",
        "example": {
            "font": "Recursive",
            "text": "3/4 cup (145/793g)"
        },
        "fea": "feature frac {\n  sub one slash four by onequarter;\n  sub three slash four by threequarters;\n  # ...\n\n  # This implementation due to Tal Leming and Ben Kiel\n  lookup FractionBar {\n      ignore sub slash @figures @figures @figures @figures @figures @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures @figures slash;\n      ignore sub slash @figures @figures @figures slash';\n      ignore sub slash' @figures @figures @figures slash;\n      ignore sub slash @figures @figures slash';\n      ignore sub slash' @figures @figures slash;\n      ignore sub slash @figures slash';\n      ignore sub slash' @figures slash;\n      ignore sub slash slash';\n      ignore sub slash' slash;\n      sub @figures slash' @figures by fraction;\n  } FractionBar;\n\n  lookup Numerator1 {\n      sub @figures' fraction by @figuresNumerator;\n  } Numerator1;\n\n  lookup Numerator2 {\n      sub @figures' @figuresNumerator fraction by @figuresNumerator;\n  } Numerator2;\n\n  lookup Numerator3 {\n      sub @figures' @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator3;\n\n  lookup Numerator4 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator4;\n\n  lookup Numerator5 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator5;\n\n  lookup Numerator6 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator6;\n\n  lookup Numerator7 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator7;\n\n  lookup Numerator8 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator8;\n\n  lookup Numerator9 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator9;\n\n  lookup Numerator10 {\n      sub @figures' @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator @figuresNumerator fraction by @figuresNumerator;\n  } Numerator10;\n\n  lookup Denominator {\n      sub [fraction @figuresDenominator] @figures' by @figuresDenominator;\n  } Denominator;\n\n  sub @figures space' @figuresNumerator by space.frac;\n} frac;\n",
        "ui": "In the OS X Typography panel, this feature is accessed via \"Contextual Fraction\nForms -> Diagonal.\"\n\nIn Adobe applications, this feature is accessed via \"Fractions\" in the OpenType\npanel.\n",
        "done": "true",
        "popularity": "common",
        "popularity_ix": 4
    },
    "mset": {
        "status": "deprecated",
        "group": "typographic",
        "title": "Mark Positioning via substitution",
        "script": {
            "arab": {
                "order": "4"
            }
        },
        "registered": "Microsoft",
        "description": "This feature is used by the Arabic shaping as the final phase of the typographic\nshaping group. It was intended for substitutions which combine marks and bases\ninto precomposed forms as an alternative to using positioning rules in the `mark`\nfeature; however, it is possible to use *substitution* rules in the `mark`\nfeature, making the `mset` feature redundant.\n\nIt was used in Microsoft's Windows 95 Arabic fonts, and practically no other font.\nNew fonts should use `mark`, [`ccmp`](#ccmp), `rlig` or other features instead.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "liga": {
        "title": "Standard Ligatures",
        "registered": "Microsoft/Adobe",
        "state": "default",
        "description": "Ligatures provide typographic refinement by replacing multiple glyphs with a\nsingle, ligated form. This feature is used for standard ligatures, which are\nto be applied by default; in Latin text, this is generally sequences such as\n`f f`, `f f l`, `f f`, `f i`, and `f f i`.\n\nLigature code is often automatically generated by the font editor based on\ndetecting sequences of glyph names combined with underscores; note, however,\nthat the common ligature glyph `fi` does *not* contain an underscore.\n",
        "automatic": "true",
        "fea": "feature liga {\n  sub f f i by f_f_i;\n  sub f f l by f_f_l;\n  sub f f by f_f;\n  sub f i by fi;\n  sub f l by f_l;\n}\n",
        "example": {
            "font": "EB Garamond",
            "text": "Official"
        },
        "done": "true",
        "ui": "In the OS X typography panel, this feature is *disabled* via \"Ligatures >\nCommon Ligatures\".\n",
        "popularity": "common",
        "popularity_ix": 4
    },
    "dtls": {
        "title": "Dotless Forms",
        "script": {
            "math": ""
        },
        "registered": "Microsoft",
        "description": "This feature is used by a math layout handler to substitute glyphs by dotless\nforms when accents are to be added to the base character.\n",
        "fea": "feature dtls {\n  sub i by i.dotless;\n  sub j by j.dotless;\n  sub uni2148 by uni2148.dotless;\n  sub uni2149 by uni2149.dotless;\n  sub u1D422 by u1D422.dotless;\n  sub u1D423 by u1D423.dotless;\n  # ...\n} dtls;\n",
        "example": {
            "math": "<mover accent=\"true\"><mi> i </mi> <mo> &#x0005E; </mo> </mover>"
        },
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "blwm": {
        "title": "Below-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it\nwas intended for positioning marks which are placed below a base consonant in\na syllabic script, but while the OpenType Specification describes this feature\nas being used for Indic scripts, Harfbuzz applies the `blwm` feature as\npart of common feature processing for all scripts.\n\n\nThe only distinction between this feature and the `mark` feature is a subtle\none: in `blwm` processing, any ZWJ characters are skipped when matching input\nand any ZWNJ characters are skipped when matching context, whereas in `mark`\nprocessing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice\nof `blwm` versus `mark` is a matter of notational convenience for the engineer.\n\n\nSee also [`abvm`](#abvm).\n",
        "state": "required",
        "automatic": "true",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "calt": {
        "title": "Contextual Alternates",
        "registered": "Adobe",
        "state": "default",
        "group": "Typographic",
        "description": "This feature is used to substitute glyphs with alternate forms, generally on\na contextual basis. For example, a script font may wish to use joining forms\nof the letter `o` when followed by another letter starting at the x-height.\n\n\nThis feature is processed as part of the standard typographic presentation group;\nin the Indic and Arabic complex shapers, it is processed as part of the language\nform group.\n",
        "fea": "feature calt {\n  sub T' @letter by T.wide;\n  sub o' space by o.swash;\n  sub o' [i k m n o] by o.join;\n  sub [f o t v w] s' by s.noinstroke;\n} calt;\n",
        "example": {
            "font": "Kristi",
            "text": "Two hoots!"
        },
        "done": "true",
        "ui": "In the OS X typography panel, this feature is accessed via \"Contextual Alternates -> Contextual Alternates.\" In Adobe applications, this feature is accessed via \"Contextual Alternates\" in the OpenType panel.\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "haln": {
        "title": "Halant Forms",
        "registered": "Microsoft",
        "required": "true",
        "group": "Typographic",
        "script": {
            "INDIC": {
                "order": "6"
            }
        },
        "description": "This feature is applied by the Indic shaper during the typographic presentation\nphase, and is intended to \"clean up\" dead consonant sequences which have not\nbeen formed into conjuncts, by replacing them with correct dead consonant forms.\n\n\nFor example, consider the two sequences \"tta nukta virama ra\" and \"tta nukta virama\"\nwithout the final ra. In Noto Sans Devanagari, the \"tta nukta virama\" sequence is\nfirst composed into `ttanuktadeva` by the `nukt` feature, leaving\n`ttanuktadeva viramadeva radeva` and `ttanuktadeva viramadeva` respectively.\n\n\nWhen the final ra is present, the `rkrf` feature creates a conjunct form\n`ttanuktaradeva`. But without the final ra, we are left with `ttanuktadeva viramadeva`.\nIn this case, the default positioning of the nukta underneath the tta is\nincorrect, as it needs to move to the left to accommodate the virama. A\nprecomposed glyph `ttanuktaprehalfdeva` is substituted in the `haln`\nfeature to tidy up this dead consonant sequence.\n",
        "example": {
            "font": "Noto Sans Devanagari",
            "text": "\u091f\u093c\u094d\u0930 \u091f\u093c\u094d"
        },
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "cpct": {
        "title": "Centered CJK Punctuation",
        "description": "This feature is intended to center punctuation (typically the ideographic\ncomma \u3001 and ideographic full stop \u3002) in Chinese fonts. Where presented, it\nis often implemented as GPOS lookup 1 positioning rules to place these\nglyphs within the center of the em square.\n",
        "example": {
            "text": "\u304b\u3001\u304b",
            "font": "Feature Sans"
        },
        "registered": "Adobe",
        "done": "true",
        "fea": "feature cpct {\n   pos comma-han <328 350 0 0>;\n   pos period-han <359 350 0 0>;\n} cpct;\n",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "numr": {
        "title": "Numerators",
        "automatic": "true",
        "state": "discretionary",
        "status": "deprecated",
        "registered": "Adobe",
        "description": "This deprecated feature replaces numeric glyphs with numerator forms. See also [`dnom`](#dnom).\n\nNote that, despite the description of this feature in the OpenType specification,\nthe application of the [`frac`](#frac) feature is independent of this feature. It was\noriginally intended that applying the [`frac`](#frac) feature would \"trigger\" the\napplication of the `numr` feature for glyphs before the division slash and\nthe [`dnom`](#dnom) feature for glyphs after it. This behavior was never implemented in\nOpenType shaping, and instead contextual rules are used within the [`frac`](#frac) feature\nto choose appropriate glyphs for numerator and denominator.\n\nNew fonts should use the [`frac`](#frac) feature in preference to this feature.\n",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "aalt": {
        "title": "Access All Alternates",
        "registered": "Adobe",
        "done": "true",
        "description": "Allows the end user to access glyphs which are either not available, or not\neasily available, via other feature applications. The expectation is that this\nfeature will allow substituting a glyph with all possible \"alternative\" forms\nof the glyph provided in the font: for example, for the glyph `a`, it will\nprovide a substitution to small capital forms, swash alternates, superior forms,\nand so on. This is normally achieved through one-from-many (GSUB3) substitutions,\nbut where only a single alternate is provided, the use of a one-to-one (GSUB1)\nsubstitution may be appropriate.\n\n\nA layout application will not apply this feature in the ordinary course of layout,\nbut may use it to implement a \"glyph picker\" interface allowing the end user\nto choose the desired substitution, or to cycle through the alternates available\nfor a glyph. Because of way that the layout application will apply this feature,\nit is undefined what would happen to lookup types other than GSUB1 and GSUB3 if\nplaced inside an `aalt` feature.\n\n\n*Note*: AFDKO feature syntax offers special handling of the `aalt` feature.\nWithin the context an `aalt` feature block, the `feature` keyword can be used\nto reference the lookups of other features, arrange any GSUB1 or GSUB3 rules\nwithin those lookups by glyph, and combine them into one-from-many rules.\nThis allows the engineer to more easily generate an `aalt` feature by\ncombining the effects of other features.\n\n\nFor example, given a feature `smcp` which contains the rule `sub b by B.sc;` and a\nfeature `salt` which contains the rule `sub b by b.alt;`, the effect of\n\n\n```fea\nfeature aalt {\n  feature salt;\n  feature smcp;\n} aalt;\n```\n\nwould be to create the rule `sub b from [b.alt B.sc];`.\n",
        "fea": "feature aalt {\n  feature salt;\n  feature smcp;\n  feature swsh;\n  sub quoteleft by quoteleft.fr;\n  sub quoteright by quoteright.fr;\n} aalt;\n",
        "automatic": "true",
        "state": "discretionary",
        "ui": "In the OS X typography panel, this feature is accessed via \"Glyph Variants\".\n",
        "popularity": "common",
        "popularity_ix": 4
    },
    "clig": {
        "title": "Contextual Ligatures",
        "registered": "Adobe",
        "group": "typographic",
        "state": "default",
        "script": {
            "khmr": {
                "order": "5"
            }
        },
        "done": "true",
        "description": "This feature has two distinct uses.\n\n\nIt was originally intended for ligature forms which are contextual in nature,\nfor example, for Latin script fonts, and typically made up of GSUB lookup 8 rules.\nHowever, these rules may also be placed in other discretionary ligature\nfeatures, such as `rlig` or [`liga`](#liga), and these should be used instead. As such\nthis use is relatively rare.\n\n\nSeparately, in the Khmer complex shaper, this is a mandatory feature used\nfor \"ligatures that are desired for typographical correctness\". It is\ntherefore used widely in Khmer fonts for general typographic shaping.\n",
        "fea": "feature clig {\n  sub kho-khmer.conjunct aaSign-khmer by kho-khmer.conjunct.aa;\n  sub kho-khmer.conjunct auSign-khmer by kho-khmer.conjunct.au;\n  # ...\n  sub nyo-khmer' @conjuncts by nyo-khmer.alt;\n  sub nyo-khmer.alt nyo-khmer.conjunct' by nyo-khmer.conjunct.alt;\n  # ...\n}\n",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "afrc": {
        "title": "Alternative Fractions",
        "registered": "Microsoft",
        "state": "discretionary",
        "description": "This feature is intended to provide alternative forms of a fraction; the feature should match numerals surrounded by a slash, and substitute them with a nut fraction.\n",
        "fea": "feature afrc {\n  sub one slash two by onehalf.nut;\n} afrc;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Contextual Fractional Forms -> Vertical.\"\n",
        "done": "true",
        "example": {
            "font": "Recursive",
            "text": "1/2"
        },
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "unic": {
        "title": "Unicase",
        "registered": "Tiro Typeworks",
        "description": "This feature was intended for mapping both upper- and lowercase letters\nto a \"unicase\" alphabet, a set of glyphs with a common glyph height using\na mix of upper- and lowercase glyph forms. (For example, a font may use\nthe lowercase style of `a` but the uppercase style of `B`, but both glyphs\nwill have the same height; see Bradbury Thompson's [Alphabet 26](https://en.wikipedia.org/wiki/Bradbury_Thompson#Alphabet_26)\nor Zuzana Licko's [Filosofia Unicase](https://www.emigre.com/Fonts/Filosofia).)\n",
        "ui": "This feature can be activated using the CSS rule `font-variant-caps: unicase`,\nsubject to browser support.\n",
        "done": "true",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "subs": {
        "title": "Subscript",
        "registered": "Microsoft/Adobe",
        "state": "discretionary",
        "automatic": "true",
        "description": "This feature replaces glyphs, typically numerals, with subscript forms.\n",
        "example": {
            "font": "Alegreya",
            "text": "H2O"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Vertical Position > Inferiors/Subscripts\".",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "sinf": {
        "title": "Scientific Inferiors",
        "registered": "Microsoft/Adobe",
        "state": "discretionary",
        "automatic": "true",
        "description": "This feature replaces glyphs with subscript forms, similar to the [`subs`](#subs) feature,\nbut in theory for a wider range of glyphs (including Latin letters),\ngenerally for chemical or mathematical notation.\n\n\nAlso, in theory, subscript numerals should sit on the baseline, while scientific\ninferiors should bisect the baseline\n\nIn practice, the same substitutions are often made as those in the [`subs`](#subs) feature.\n",
        "example": {
            "font": "Alegreya",
            "text": "H2O"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Vertical Position > Scientific Inferiors\".",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "hist": {
        "title": "Historical Forms",
        "registered": "Microsoft",
        "state": "discretionary",
        "description": "Substitutes forms of letters which are no longer commonly used, or which\ngive the text a \"historical\" feel. See also the [`hlig`](#hlig) feature.\n",
        "fea": "feature hist {\n  sub J by J.hist;\n  sub s by longs;\n} hist;\n",
        "example": {
            "font": "EB Garamond",
            "text": "Justice"
        },
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "locl": {
        "title": "Localized Forms",
        "registered": "Tiro Typeworks",
        "required": "true",
        "group": "Common",
        "order": "0",
        "description": "This feature allows for localization of glyph forms by making substitutions\nconditional on the script and language selected by the user. Typical uses\nof this feature include:\n\n\n* Substituting Cyrillic glyphs with Bulgarian and Serbian variants.\n\n* In Turkish, Azeri, Kazakh, Tatar and Crimean Tartar, substituting the `i` by\nan `idotaccent` glyph so that when uppercased through case conversion features\nsuch as `smcp`, the dot can be preserved.\n(See [this tutorial](https://glyphsapp.com/learn/localize-your-font-turkish).)\n\n* In Romanian and Moldovan, substituting the `scedilla` (U+015E) with `scommaaccent`.\n\n* Repositioning the ogonek to the center of the glyph in Navajo.\n\n* In Dutch, substituting the j in an `\u00edj` pair with `\u00edj\u0301` (see [thread](https://typedrawers.com/discussion/1294/how-do-you-implement-ijacute-and-ijacute).)\n\n* Substituting the Catalan \"punt volat\" for `ldot` ([tutorial](https://glyphsapp.com/learn/localize-your-font-catalan-punt-volat))\n\n* In a font which has multiple scripts with different spacing conventions,\n  such as Latin and Urdu, conditionally resizing the advance width of the\n  space character to meet the expectations of the script in use.\n",
        "fea": "feature locl {\n  script latn;\n  language ROM;\n  sub Scedilla by Scommaaccent;\n  sub scedilla by scommaaccent;\n  language MOL;\n  sub Scedilla by Scommaaccent;\n  sub scedilla by scommaaccent;\n  language CAT;\n  sub l' periodcentered' l by ldot;\n  sub L' periodcentered' L by Ldot;\n} locl;\n",
        "done": "true",
        "popularity": "common",
        "popularity_ix": 4
    },
    "dist": {
        "title": "Distances",
        "registered": "Microsoft",
        "state": "required",
        "group": "positioning",
        "description": "This feature provides positional adjustments between glyphs. It is largely\nequivalent to the [`kern`](#kern) feature, but should be considered as \"required\"\nkerning in that no user interface is provided to disable it.",
        "done": "true",
        "example": {
            "font": "Noto Sans Devanagari",
            "text": "\u0926\u0957\u0915\u0957"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "init": {
        "title": "Initial Forms",
        "registered": "Microsoft/Adobe",
        "group": "topographical",
        "required": "true",
        "script": {
            "arab": {
                "order": "7"
            },
            "syrc": {
                "order": "7"
            },
            "USE": {
                "order": "2"
            }
        },
        "description": "This feature is used by the Arabic and USE complex shapers as part of topographic\nshaping. It is *not* appropriate for general start-of-word detection, but is\ndesigned to replace joining characters with initial forms. This means characters\nwhich have the Unicode joining type `Right_Joining` or `Dual_Joining` in a\nright-to-left script, and characters which have the Unicode joining type `Left_Joining`\nor `Dual_Joining` in a left-to-right script. These joining type properties\ncan be found in [`ArabicShaping.txt`](https://www.unicode.org/Public/UCD/latest/ucd/ArabicShaping.txt)\nin the Unicode Character Database.\n",
        "example": {
            "font": "Aref Ruqaa",
            "text": "\u062c\u0631"
        },
        "automatic": "true",
        "fea": "feature init {\n  lookupflag RightToLeft IgnoreMarks;\n  sub beh-ar by beh-ar.init;\n  sub jeem-ar by jeem-ar.init;\n  # ...\n}\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "jp04": {
        "title": "JIS04 Forms",
        "registered": "Adobe",
        "description": "The expected form of Japanese kanji characters in an OpenType font are the\nforms specified in JIS X 0213 (which replaces the older standard, JIS X\n0208). In the course of revision of this standard, the expected forms of a\nnumber of kanji characters have changed over time.\n\n\nFonts should target the most recent revision of the standard (currently the\n2004 revision). However, features may be used to access forms specified in\nearlier revisions. If the `jp04` feature is applied, kanji should be\nreplaced by variant forms representing those specified in the 2004 revision\nof the standard. As 2004 is the current revision, this feature should only\nbe implemented when providing updates to older fonts or to provide remappings\nfor glyphs where both older and newer forms are encoded in Unicode and provided\nin the font (for example, `sub uni5516 by uni555E;`).\n\n\nA historical comparison between different character forms in JIS revisions\ncan be found at [this site](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/jisrev.html).\n",
        "done": "true",
        "ui": "In the Mac OS X typography panel, this feature is accessed via the \"character\nshape\" radio buttons.\n\nIn Adobe InDesign with CJK functionality, this feature can be accessed via\nthe \"Alternate Glyphs\" dropdown in the Advanced Character Formats panel of\nthe character style options dialog.\n",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "c2pc": {
        "title": "Petite Capitals From Capitals",
        "registered": "Tiro Typeworks / Emigre",
        "state": "discretionary",
        "description": "Substitutes capital characters for petite capitals. See the `pcap` feature for a description of petite capitals. See also [`c2sc`](#c2sc).\n",
        "fea": "feature c2pc {\n  sub A by A.pc;\n  sub B by B.pc;\n  # ...\n} c2pc;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Uppercase ->\nPetite Capitals.\"\n\n\nIn CSS, this feature can be set with `font-variant-caps: all-petite-caps;`\n(although this also turns on `pcap`.)\n",
        "example": {
            "font": "EB Garamond",
            "text": "NASA and the FBI"
        },
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "onum": {
        "automatic": "true",
        "state": "discretionary",
        "title": "Oldstyle Figures",
        "registered": "Adobe",
        "description": "This feature substitutes digits for oldstyle forms. Oldstyle figures are\ndesigned to fit in mixed case text settings.\n\nIn theory, this feature should not just substitute the default form\nof figures (e.g. `one`, `two`) for oldstyle forms, but also any alternate\nlining forms (such as lining figures) for oldstyle forms. Where\noldstyle forms are the default, implementing a substitution from lining\nfigures to oldstyle figures is not typographically necessary but will cause\nthe UI of layout programs to display oldstyle figures as an option.\n\nSee also `onum`, `pnum`, `tnum`.\n",
        "fea": "feature lnum {\n  sub one by one.osf;\n  sub two by two.osf;\n  # ...\n} lnum;\n",
        "example": {
            "font": "Cardo",
            "text": "ABC1234"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Number Case >\nOld-Style Figures\". In Adobe applications, selecting \"Tabular oldstyle\" from the\nOpenType panel will apply this feature and the `tnum` feature, while selecting\n\"Proportional oldstyle\" will apply this feature and the `pnum` feature.\n",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "abvm": {
        "title": "Above-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it\nwas intended for positioning marks which are placed over a base consonant in\na syllabic script, but while the OpenType Specification describes this feature\nas being used for Indic scripts, Harfbuzz applies the `abvm` feature as\npart of common feature processing for all scripts.\n\n\nThe only distinction between this feature and the `mark` feature is a subtle\none: in `abvm` processing, any ZWJ characters are skipped when matching input\nand any ZWNJ characters are skipped when matching context, whereas in `mark`\nprocessing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice\nof `abvm` versus `mark` is a matter of notational convenience for the engineer.\n\n\nSee also [`blwm`](#blwm).\n",
        "automatic": "true",
        "done": "true",
        "state": "required",
        "example": {
            "font": "Hind",
            "text": "\u0915\u0902\u0938\u0902"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "cfar": {
        "state": "required",
        "script": {
            "khmr": {
                "order": "5"
            }
        },
        "group": "Orthographic",
        "title": "Conjunct Form After Ro",
        "registered": "Microsoft",
        "status": "discouraged",
        "description": "This feature is only applied during orthographic unit shaping in the Khmer\ncomplex shaper. In Khmer, the conjunct form of the letter ro (after a\ncoeng) is reordered to the left of the base consonant and displayed as a\ndeep letterform which can interact with below-base glyphs. This feature\nwas intended as offering an opportunity to fix up below-base glyphs to\navoid clashing with the coeng ro.\n\n\nNo examples of the use of this feature have been found. Consider using\n[`blws`](#blws) instead.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "size": {
        "status": "deprecated",
        "registered": "Adobe",
        "title": "Optical size",
        "description": "This feature was intended as a way to store information about the optical size of the font\nand the font's relationship to other optical size variants in the same family. It has\nbeen entirely superseded by the `STAT` table, and should not be used.\n",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "qwid": {
        "title": "Quarter Widths",
        "automatic": "true",
        "state": "discretionary",
        "registered": "Adobe",
        "description": "This feature replaces glyphs (normally figures and punctuation) with variants\nwhich are one-quarter of the em square. This is generally used with CJK fonts\nand in the context of vertical typesetting. (For placing a sequence of four\nnumbers horizontally across an em-width vertical column.)\n\nSee also [`fwid`](#fwid), [`hwid`](#hwid), [`twid`](#twid).\n",
        "fea": "feature qwid {\n  sub one by one.qwid;\n  sub two by two.qwid;\n  # ...\n}\n",
        "example": {
            "font": "Feature Sans",
            "text": "\u304b1231\u304b"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Text spacing > Quarter Width\".",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "flac": {
        "title": "Flattened accent forms",
        "script": {
            "math": ""
        },
        "example": {
            "math": "x&#x00301; X&#x00301;"
        },
        "registered": "Microsoft",
        "description": "This feature replaces accents with flatter forms allowing them to fit within\nthe line when placed over a tall base character. This feature is automatically\napplied by the math layout engine when an accent is placed over a base character\nat a height of more than `MATH.MathConstants.FlattenedAccentBaseHeight`.\n",
        "done": "true",
        "fea": "feature flac {\n  sub uni0300 by uni0300.mathcap;\n  sub uni0301 by uni0301.mathcap;\n  sub uni0302 by uni0302.mathcap;\n  sub uni0303 by uni0303.mathcap;\n  sub uni0304 by uni0304.mathcap;\n  sub uni0306 by uni0306.mathcap;\n  sub uni0307 by uni0307.mathcap;\n  sub uni0308 by uni0308.mathcap;\n  sub uni030A by uni030A.mathcap;\n  sub uni030C by uni030C.mathcap;\n} flac;\n",
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "ital": {
        "title": "Italics",
        "registered": "Adobe",
        "state": "discretionary",
        "description": "This feature is used in *very particular circumstances*. Despite its name, it\nis not a general mechanism for activating italic glyphs.\n\n\nHistorically CJK fonts, particular Japanese fonts, shipped with a glyphset\nwhich contained the Latin alphabet (usually full-width but sometimes proportional).\nAs will as upright forms, these fonts *also* included Latin italic glyphs.\n\n\nCJK fonts with both upright and italic Latin glyphs in the same font should use\nthis feature to select the italic forms\n",
        "fea": "feature ital {\n  sub a by a.ital;\n  sub b by b.ital;\n  # ...\n} ital;\n",
        "ui": "In the OS X typography panel, this feature is accessed via \"Italics -> On\".\nIn Adobe applications, this feature is accessed via \"Roman Italics\" in the OpenType panel.\nNote that in neither case can the italic feature be accessed from the \"Italicise\"\nbutton or the \"Font Style\" menu.\n",
        "example": {
            "font": "Feature Sans",
            "text": "\u304b123\u304b"
        },
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "cjct": {
        "title": "Conjunct Forms",
        "script": {
            "INDIC": {
                "order": "9"
            },
            "USE": {
                "order": "7"
            }
        },
        "group": "Orthographic",
        "registered": "Microsoft",
        "state": "required",
        "description": "This feature is applied to Indic scripts and scripts using the Universal\nShaping Engine as the final feature in the orthographic unit shaping phase,\nbefore final reordering. It was intended for use in creating consonant\nconjunct groups. (Consonant + Virama + Consonant.)\n\n\nThe difference between this feature and [`blwf`](#blwf) is that the [`blwf`](#blwf) feature\nis intended for substituting the \"tail\" (virama + consonant) for a below-base\nform, while this feature is intended for substituting the entire sequence\nwith a ligature.\n",
        "fea": "feature cjct {\n    # Actual implementation will depend on conjunct glyphs provided in your font.\n    sub nga-deva virama-deva ga-deva by ngga-deva;\n    sub nga-deva virama-deva ma-deva by ngma-deva;\n    sub nga-deva virama-deva ya-deva by ngya-deva;\n    sub tta-deva virama-deva tta-deva by tttta-deva;\n    sub tta-deva virama-deva ya-deva by ttya-deva;\n    # ...\n} cjct;\n",
        "done": "true",
        "example": {
            "font": "Noto Sans Devanagari",
            "text": "\u0919\u094d\u092e"
        },
        "popularity": "rare",
        "popularity_ix": 2
    },
    "case": {
        "title": "Case-Sensitive Forms",
        "state": "discretionary",
        "group": "typographic",
        "registered": "Adobe",
        "automatic": "true",
        "description": "This features is intended to reposition glyphs (either by substitution or\npositioning), particularly punctuation glyphs, so that they are better\naligned within all-capital sequences or sequences of lining numerals.\nIt should also change oldstyle numerals to lining numerals.\n\n\nNote that while it was hoped that layout engines would automatically apply\nthis feature within all-capital sequences, this is not currently known to\nbe automatically applied, and must be applied manually by the typesetter.\n",
        "done": "true",
        "fea": "feature case {\n  sub [guillemotleft guillemotright hyphen] by [guillemotleft.cap guillemotright.cap hyphen.cap];\n} case;\n",
        "example": {
            "font": "Zilla Slab",
            "text": "\u00abA-Za-z\u00bb"
        },
        "ui": "In the OS X typography panel, this feature is accessed via \"Case-Sensitive Layout -> Capital Forms.\"\n",
        "popularity": "normal",
        "popularity_ix": 3
    },
    "chws": {
        "state": "discretionary",
        "title": "Contextual Half-width Spacing",
        "registered": "Adobe/W3C",
        "description": "Layout engines which correctly support advanced typographic layout for CJK\n(see [JLREQ](https://www.w3.org/TR/jlreq/), [CLREQ](https://www.w3.org/TR/clreq),\n[KLREQ](https://www.w3.org/TR/klreq/)) will contain code to adjust the spacing\nof glyphs in certain circumstances. For example, punctuation sequences such as\n`\u3002\u300d` should be set with the full-stop taking up a half-em width instead of\na full em.\n\nThis feature is intended to improve the appearance of text set with software\nwhich does *not* implement these spacing adjustments, by moving the spacing\nlogic into the font.\n\nThis feature is relatively new as of 2021, and no implementations have been\nidentified.\n",
        "fea": "feature chws {\n  pos [comma-han period-han] -500 @closing_bracket;\n  pos @closing_bracket -500 [comma-han period_han];\n  pos [comma-han period-han @closing_bracket] 500 @opening_bracket;\n  pos @opening_bracket <500 0 0 0> @opening_bracket;\n  pos @closing_bracket @closing_bracket <-500 0 0 0>;\n} chws;\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "dnom": {
        "title": "Denominators",
        "automatic": "true",
        "state": "discretionary",
        "status": "deprecated",
        "registered": "Adobe",
        "description": "This deprecated feature replaces numeric glyphs with denominator forms. See also [`numr`](#numr).\n\nNote that, despite the description of this feature in the OpenType specification,\nthe application of the [`frac`](#frac) feature is independent of this feature. It was\noriginally intended that applying the [`frac`](#frac) feature would \"trigger\" the\napplication of the [`numr`](#numr) feature for glyphs before the division slash and\nthe `dnom` feature for glyphs after it. This behavior was never implemented in\nOpenType shaping, and instead contextual rules are used within the [`frac`](#frac) feature\nto choose appropriate glyphs for numerator and denominator.\n\nNew fonts should use the [`frac`](#frac) feature in preference to this feature.\n",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    }
}