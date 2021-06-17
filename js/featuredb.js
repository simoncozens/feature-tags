window.featuredb={
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
        "description": "This feature is intended for substituting base glyphs and above marks with ligature forms, but may be used for any standard typographic substitutions; engineers may wish to restrict its use to substitutions concerning above-base marks for organisational purposes. As a typographic substitution, it will be applied after the `abvf` feature.\n\nThis feature is applied by the shaper as part of the standard typographic presentation phase for Indic scripts, Khmer, Myanmar, and scripts using the Universal Shaping Engine. It is applied with a per-syllable context for Indic scripts, but applied across the whole run in other scripts.\n",
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
        "description": "Replaces above-base forms with special forms. This feature is applied by\nIndic, Khmer and USE complex shapers as part of the orthographic unit\nshaping phase. The context of application is restricted to a syllabic cluster.\n\n\nThis feature was originally intended for a specific use case in Khmer, the\nOE vowel sign (U+17BE, \u25cc\u17be), which has pre-base and above-base components.\nThe shaping engine [decomposes](https://github.com/n8willis/opentype-shaping-documents/blob/master/opentype-shaping-khmer.md#22-matra-decomposition)\nU+17BE into a pair of characters, U+17C1 (\u17c1) and U+17BE (again). It then\nreorders the syllable to put the pre-base vowel part before the base consonant,\nleaving the U+17BE after the base. The font is responsible for turning the\nremaining \u25cc\u17be glyph into the above-base part (\u17b8), hence the example\nimplementation below.\n\n\nHowever, more generally, this feature is a good home for above-base\nsubstitutions such as choosing alternate widths of an above-base vowel mark.\n\n\nSee also `abvs` which applies to the whole run, rather than per-cluster.\n",
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
        "description": "This feature is intended for substituting base glyphs and below marks\nwith ligature forms, but may be used for any standard typographic\nsubstitutions; engineers may wish to restrict its use to substitutions\nconcerning below-base marks for organisational purposes. As a typographic\nsubstitution, it will be applied after the `blwf` feature.\n\n\nThis feature is applied by the shaper as part of the standard typographic\npresentation phase for Indic scripts, Khmer, Myanmar, and scripts using the\nUniversal Shaping Engine. It is applied with a per-syllable context for\nIndic scripts, but applied across the whole run in other scripts.\n",
        "fea": "feature blws {\n    sub dvRA dvmU  by dvRA_mU;\n    sub dvRA dvmUU by dvRA_mUU;\n    sub dvHA dvmU  by dvHA_mU;\n    sub dvHA dvmUU by dvHA_mUU;\n    sub dvDA  dvmvR by dvDA_mvR;\n    sub dvSHA dvmvR by dvSHA_mvR;\n    sub dvHA  dvmvR by dvHA_mvR;\n} blws;\n",
        "done": "true",
        "state": "required",
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
    "blwm": {
        "title": "Below-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it\nwas intended for positioning marks which are placed below a base consonant in\na syllabic script, but while the OpenType Specification describes this feature\nas being used for Indic scripts, Harfbuzz applies the `blwm` feature as\npart of common feature processing for all scripts.\n\n\nThe only distinction between this feature and the `mark` feature is a subtle\none: in `blwm` processing, any ZWJ characters are skipped when matching input\nand any ZWNJ characters are skipped when matching context, whereas in `mark`\nprocessing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice\nof `blwm` versus `mark` is a matter of notational convenience for the engineer.\n\n\nSee also `abvm`.\n",
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
    "c2pc": {
        "title": "Petite Capitals From Capitals",
        "registered": "Tiro Typeworks / Emigre",
        "state": "discretionary",
        "description": "Substitutes capital characters for petite capitals. See the `pcap` feature for a description of petite capitals. See also `c2sc`.\n",
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
    "abvm": {
        "title": "Above-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it\nwas intended for positioning marks which are placed over a base consonant in\na syllabic script, but while the OpenType Specification describes this feature\nas being used for Indic scripts, Harfbuzz applies the `abvm` feature as\npart of common feature processing for all scripts.\n\n\nThe only distinction between this feature and the `mark` feature is a subtle\none: in `abvm` processing, any ZWJ characters are skipped when matching input\nand any ZWNJ characters are skipped when matching context, whereas in `mark`\nprocessing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice\nof `abvm` versus `mark` is a matter of notational convenience for the engineer.\n\n\nSee also `blwm`.\n",
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
        "description": "This feature is only applied during orthographic unit shaping in the Khmer\ncomplex shaper. In Khmer, the conjunct form of the letter ro (after a\ncoeng) is reordered to the left of the base consonant and displayed as a\ndeep letterform which can interact with below-base glyphs. This feature\nwas intended as offering an opportunity to fix up below-base glyphs to\navoid clashing with the coeng ro.\n\n\nNo examples of the use of this feature have been found. Consider using\n`blws` instead.\n",
        "done": "true",
        "popularity": "non-existent",
        "popularity_ix": 0
    },
    "case": {
        "title": "Case-Sensitive Forms",
        "state": "discretionary",
        "group": "typographic",
        "registered": "Adobe",
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
    }
}
