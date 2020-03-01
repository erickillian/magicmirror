/* global Module */

/* Magic Mirror
 * Module: OurLogo
 *
 * By Eric Killian
 */

Module.register("ourlogo",{

	// Default module config.
	defaults: {
		fr_prefix: "/modules/ourlogo/LargeFRLoad/LFRL",
		file_ext: ".png",
		curr_fr_img: "/modules/ourlogo/LargeFRLoad/LFRL32.png",
		i: 0
	},

	getTemplate: function () {
		Log.info("1");
		return "ourlogo.njk";
	},

	getTemplateData: function () {
		return this.config;
	},

	updateFrLogo: function () {
		if (i <= 32) {
			curr_fr_img = fr_prefix+i.toString()+file_ext;
		}
	},

	start: function () {
		Log.info("Starting out crappy logo module");
		for (i=0; i <= 32; i++) {
			Log.info('1');
			setTimeout(() => {
			updateFrLogo();
			},1000);
		}
	}
	
});
