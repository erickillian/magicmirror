/* global Module */

/* Magic Mirror
 * Module: OurLogo
 *
 * By Eric Killian
 */

Module.register("ourlogo",{

	// Default module config.
	defaults: {
	},

	getTemplate: function () {
		return "ourlogo.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});
