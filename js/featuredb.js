window.featuredb={
    "abvs": {
        "title": "Above-base Substitutions",
        "registered": "Microsoft",
        "group": "Typographic",
        "script": {
            "INDIC": "",
            "khmr": "",
            "USE": "",
            "mym2": ""
        },
        "description": "This features is intended for substituting base glyphs and above marks with ligature forms, but may be used for any standard typographic substitutions; engineers may wish to restrict its use to substitutions concerning above-base marks for organisational purposes.\nThis feature is applied by the shaper as part of the standard typographic presentation phase for Indic scripts, Khmer, Myanmar, and scripts using the Universal Shaping Engine. It is applied with a per-syllable context for Indic scripts, but applied across the whole run in other scripts.\n",
        "fea": "feature abvs {\n  sub eCandraMatra-gujarati candraBindu-gujarati by eCandraMatraCandraBindu-gujarati;\n  sub eMatra-gujarati candraBindu-gujarati by eMatraCandraBindu-gujarati;\n  sub aiMatra-gujarati candraBindu-gujarati by aiMatraCandraBindu-gujarati;\n  # ...\n} abvs;\n",
        "done": "true",
        "state": "required",
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
                "order": "2"
            }
        },
        "description": "Replaces above-base forms with special forms. This feature is applied by Indic, Khmer and USE complex shapers as part of the orthographic unit shaping phase. The context of application is restricted to a syllabic cluster.\nThis feature was originally intended for a specific use case in Khmer, the OE vowel sign (U+17BE, \u25cc\u17be), which has pre-base and above-base components. The shaping engine [decomposes](https://github.com/n8willis/opentype-shaping-documents/blob/master/opentype-shaping-khmer.md#22-matra-decomposition) U+17BE into a pair of characters, U+17C1 (\u17c1) and U+17BE (again). It then reorders the syllable to put the pre-base vowel part before the base consonant, leaving the U+17BE after the base. The font is responsible for turning the remaining \u25cc\u17be glyph into the above-base part (\u17b8), hence the example implementation below.\nHowever, more generally, this feature is a good home for above-base substitutions such as choosing alternate widths of an above-base vowel mark.\nSee also `abvs` which applies to the whole run, rather than per-cluster.\n",
        "fea": "feature abvf {\n  sub uni17BE by uni17B8;\n} abvf;\n",
        "state": "required",
        "done": "true",
        "popularity": "rare",
        "popularity_ix": 2
    },
    "blwm": {
        "title": "Below-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it was intended for positioning marks which are placed below a base consonant in a syllabic script, but while the OpenType Specification describes this feature as being used for Indic scripts, Harfbuzz applies the `blwm` feature as part of common feature processing for all scripts.\nThe only distinction between this feature and the `mark` feature is a subtle one: in `blwm` processing, any ZWJ characters are skipped when matching input and any ZWNJ characters are skipped when matching context, whereas in `mark` processing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice of `blwm` versus `mark` is a matter of notational convenience for the engineer.\nSee also `blwm`.\n",
        "automatic": "true",
        "done": "true",
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
        "popularity": "extremely rare",
        "popularity_ix": 1
    },
    "abvm": {
        "title": "Above-base Mark Positioning",
        "registered": "Microsoft",
        "group": "Common",
        "description": "This feature allows for mark positioning, similar to the `mark` feature; it was intended for positioning marks which are placed over a base consonant in a syllabic script, but while the OpenType Specification describes this feature as being used for Indic scripts, Harfbuzz applies the `abvm` feature as part of common feature processing for all scripts.\nThe only distinction between this feature and the `mark` feature is a subtle one: in `abvm` processing, any ZWJ characters are skipped when matching input and any ZWNJ characters are skipped when matching context, whereas in `mark` processing, ZWJ/ZWNJ characters are not skipped. Other than that, the choice of `abvm` versus `mark` is a matter of notational convenience for the engineer.\nSee also `blwm`.\n",
        "automatic": "true",
        "done": "true",
        "state": "required",
        "popularity": "rare",
        "popularity_ix": 2
    }
}
