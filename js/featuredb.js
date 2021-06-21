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
        "description": "Substitutes ligature forms which are no longer commonly used, or which\ngive the text a \"historical\" feel: for example, the \"st\" ligature. See\nalso the `hist` feature.\n",
        "fea": "feature hlig {\n  sub s t by s_t;\n} hlig;\n",
        "example": {
            "font": "EB Garamond",
            "text": "a\u017f\u017fi\u017ft"
        },
        "done": "true",
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
    "cpct": {
        "title": "Centered CJK Punctuation",
        "description": "This feature is intended to center punctuation (typically the ideographic\ncomma \u3001 and ideographic full stop \u3002) in Chinese fonts. Where presented, it\nis often implemented as GPOS lookup 1 positioning rules to place these\nglyphs within the center of the em square.\n",
        "example": {
            "text": "\u6211\u3001\u4f60",
            "font": "Kaiti"
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
        "description": "This deprecated feature replaces numeric glyphs with numerator forms. See also `dnom`.\n\nNote that, despite the description of this feature in the OpenType specification,\nthe application of the `frac` feature is independent of this feature. It was\noriginally intended that applying the `frac` feature would \"trigger\" the\napplication of the `numr` feature for glyphs before the division slash and\nthe `dnom` feature for glyphs after it. This behavior was never implemented in\nOpenType shaping, and instead contextual rules are used within the `frac` feature\nto choose appropriate glyphs for numerator and denominator.\n\nNew fonts should use the `frac` feature in preference to this feature.\n",
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
        "description": "This feature has two distinct uses.\n\n\nIt was originally intended for ligature forms which are contextual in nature,\nfor example, for Latin script fonts, and typically made up of GSUB lookup 8 rules.\nHowever, these rules may also be placed in other discretionary ligature\nfeatures, such as `rlig` or `liga`, and these should be used instead. As such\nthis use is relatively rare.\n\n\nSeparately, in the Khmer complex shaper, this is a mandatory feature used\nfor \"ligatures that are desired for typographical correctness\". It is\ntherefore used widely in Khmer fonts for general typographic shaping.\n",
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
    "dist": {
        "title": "Distances",
        "registered": "Microsoft",
        "state": "required",
        "group": "positioning",
        "description": "This feature provides positional adjustments between glyphs. It is largely\nequivalent to the `kern` feature, but should be considered as \"required\"\nkerning in that no user interface is provided to disable it.",
        "done": "true",
        "example": {
            "font": "Noto Sans Devanagari",
            "text": "\u0926\u0957\u0915\u0957"
        },
        "popularity": "rare",
        "popularity_ix": 2
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
        "description": "This feature is applied to Indic scripts and scripts using the Universal\nShaping Engine as the final feature in the orthographic unit shaping phase,\nbefore final reordering. It was intended for use in creating consonant\nconjunct groups. (Consonant + Virama + Consonant.)\n\n\nThe difference between this feature and `blwf` is that the `blwf` feature\nis intended for substituting the \"tail\" (virama + consonant) for a below-base\nform, while this feature is intended for substituting the entire sequence\nwith a ligature.\n",
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
        "description": "This deprecated feature replaces numeric glyphs with denominator forms. See also `numr`.\n\nNote that, despite the description of this feature in the OpenType specification,\nthe application of the `frac` feature is independent of this feature. It was\noriginally intended that applying the `frac` feature would \"trigger\" the\napplication of the `numr` feature for glyphs before the division slash and\nthe `dnom` feature for glyphs after it. This behavior was never implemented in\nOpenType shaping, and instead contextual rules are used within the `frac` feature\nto choose appropriate glyphs for numerator and denominator.\n\nNew fonts should use the `frac` feature in preference to this feature.\n",
        "done": "true",
        "popularity": "normal",
        "popularity_ix": 3
    }
}