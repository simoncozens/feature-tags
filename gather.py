import glob
import json
import yaml
import requests
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter,Options
from io import BytesIO
import re



popularity = json.load(open("popularity.json"))
font_db = json.load(open("fonts.json"))["items"]
font_db = {g["family"]: g for g in font_db}

features = {}
examples = {}


def feature_popularity(tag):
	tag = tag[0:4] # cv...
	if tag not in popularity:
		return ("non-existent", 0)
	if popularity[tag] < 5:
		return ("extremely rare", 1)
	if popularity[tag] / popularity["font_total"] > 0.75:
		return ("very common", 5)
	if popularity[tag] / popularity["font_total"] > 0.5:
		return ("common", 4)
	if popularity[tag] / popularity["font_total"] < 0.25:
		return ("rare", 2)
	return ("normal", 3)

for file in glob.glob("*.yml"):
	this_feature = yaml.load(open(file), Loader=yaml.BaseLoader)
	if not this_feature.get("done"):
		continue
	tag = file[:-4]
	this_feature["popularity"], this_feature["popularity_ix"] = feature_popularity(tag)
	features[tag] = this_feature
	if "example" in this_feature:
		ex = this_feature["example"]
		if "math" in ex:
			continue
		if ex["font"] not in examples:
			examples[ex["font"]] = ""
		examples[ex["font"]] += ex["text"]

def replacer(g, this_tag):
	feature = g.groups()[0]
	if feature in features.keys() and feature != this_tag:
		return f"[`{feature}`](#{feature})"
	else:
		return f"`{feature}`"

# Link features in descriptions
for tag, content in features.items():
	if "description" not in content:
		continue
	content["description"] = re.sub("`(....)`", lambda x: replacer(x,tag), content["description"])

with open("featuredb.js", "w") as f:
	f.write(("window.featuredb="+json.dumps(features, indent=4)))

with open("css2/fonts.css", "w") as f:
	for font, text in examples.items():
		f.write("""
			    @font-face {
		        font-family: "%s";
		        src: url("fonts/%s.ttf");
		    }
		 """ % (font,font))
		if font == "Recursive":
			reg = "https://github.com/google/fonts/raw/main/ofl/recursive/Recursive%5BCASL%2CCRSV%2CMONO%2Cslnt%2Cwght%5D.ttf"
		elif font == "Lohit Bengali":
			reg = "https://github.com/google/fonts/raw/main/ofl/lohitbengali/Lohit-Bengali.ttf"
		elif font == "Noto Sans Khmer":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosanskhmer/NotoSansKhmer%5Bwdth%2Cwght%5D.ttf"
		elif font == "Noto Sans Devanagari":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosansdevanagari/NotoSansDevanagari-Regular.ttf"
		elif font == "Noto Sans Math":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosansmath/NotoSansMath-Regular.ttf"
		elif font == "Noto Sans Tifinagh":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosanstifinagh/NotoSansTifinagh-Regular.ttf"
		elif font == "Noto Sans Javanese":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosansjavanese/NotoSansJavanese-Regular.ttf"
		elif font == "Noto Sans Syriac":
			reg = "https://github.com/google/fonts/raw/main/ofl/notosanssyriac/NotoSansSyriac-Regular.ttf"
		elif font == "Allura":
			reg = "https://github.com/google/fonts/raw/main/ofl/allura/Allura-Regular.ttf"
		elif font == "Cherry Bomb One":
			reg = "https://github.com/google/fonts/raw/main/ofl/cherrybombone/CherryBombOne-Regular.ttf"
		elif font not in font_db:
			print("Couldn't get %s" % font)
			continue
		else:
			reg = font_db[font]["files"].get("regular")
		if not reg:
			reg = list(font_db["font"]["files"].values())[0]
		fontdata = requests.get(reg)
		ttfont = TTFont(BytesIO(fontdata.content))
		ss = Subsetter(Options(layout_scripts=["*"], layout_features=["*"]))
		ss.populate(text=text)
		ss.subset(ttfont)
		ttfont.save("css2/fonts/%s.ttf" % font)
