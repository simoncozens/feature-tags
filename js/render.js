Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
	return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

var featureTemplate = Handlebars.compile(`
	<div class="feature">
		<a name="{{tag}}"><h2> {{tag}}: {{feature.title}} </h2></a>

		{{#ifEquals feature.state "required"}}
			<div class="tooltip" data-text="Required feature: It's on, and you can't turn it off.">
			<span class="material-icons-outlined">check_circle</span>
			</div>
		{{/ifEquals}}

		{{#ifEquals feature.state "discretionary"}}
			<div class="tooltip" data-text="Discretionary feature: It's off, but can turn it on.">
			<span class="material-icons-outlined">toggle_off</span>
			</div>
		{{/ifEquals}}

		{{#ifEquals feature.state "default"}}
			<div class="tooltip" data-text="Default feature: It's on, but can turn it off.">
			<span class="material-icons-outlined">toggle_on</span>
			</div>
		{{/ifEquals}}

		{{#if feature.automatic}}
			<div class="tooltip" data-text="This feature is usually generated by your font editor.">
			<span class="material-icons-outlined">smart_toy</span>
			</div>
		{{/if}}

		{{#if feature.popularity_ix}}
			<div class="tooltip" data-text="This feature is {{feature.popularity}}.">
			{{{feature.stars}}}
			</div>
		{{else}}
			<div class="tooltip" data-text="This feature is {{feature.popularity}}.">
			<span class="material-icons-outlined">star_outline</span>
			</div>
		{{/if}}

		{{#if feature.script}}
			{{{feature.html_scripts}}}
		{{else}}
		<div class="tooltip" data-text="This feature applies to all scripts.">
			<span class="material-icons-outlined">public</span>
			</div>
		{{/if}}



		{{{ feature.html_description }}}

		{{#if feature.fea}}
			<details>
				<summary>Example Implementation</summary>
				<pre><code class="language-fea">{{feature.fea}}</code></pre>
			</details>
		{{/if}}

		{{#if feature.ui}}
			<details>
			<summary>User-Interface expectations</summary>
			{{feature.ui}}
			</details>
		{{/if}}

	</div>
`);

function renderAll() {
	$("#features").empty();
	console.log("Rendering");
	var tagfilter = $("#tag-filter").val();
	tags = Object.keys(window.featuredb);

	tags.sort();

	for (tag of tags) {
		if (tagfilter && !tag.includes(tagfilter)) {
			continue;
		}

		feat = window.featuredb[tag];
		if (!feat.stars) {
			feat.stars = `<span class="material-icons-outlined">star</span>`.repeat(
				feat.popularity_ix
			);
		}

		if (!feat.html_description) {
			feat.html_description = marked(feat.description);
		}

		if (!feat.html_scripts) {
			feat.html_scripts = scriptsFor(feat);
		}

		var featurediv = $(featureTemplate({ tag: tag, feature: feat }));
		$("#features").append(featurediv);
	}
}

$(function () {
	renderAll();
	console.log($("#tag-filter"));
	$("#tag-filter").on("change keyup paste", function () {
		renderAll();
	});
});
