import glob
import json
import yaml


popularity = json.load(open("popularity.json"))

features = {}


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

print("window.featuredb="+json.dumps(features, indent=4))
