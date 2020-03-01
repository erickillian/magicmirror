/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
			}
		},
		{
			module: "compliments",
			position: "upper_third"
		},
		//{
		//	module: "weather",
		//	position: "top_left",
		//	config: {
		//		// See 'Configuration options' for more information.
		//		type: 'current',
		//		weatherProvider: 'weathergov',
		//		units: 'imperial',
		//		apiBase: 'https://api.weather.gov/points/',
		//		weatherEndpoint: '/forecast',
		//		lat: '39.96199',
		//		lon: '-83.00275'
		//	},
		//},
		{
			module: "ourlogo",
			position: "top_right"
		},
		{
			module: "weatherforecast",
			position: "bottom_bar",
			header: "Weather Forecast: Columbus, Ohio",
			config: {
				location: "Columbus",
				locationID: "4256038",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "a890ade6a9d1fe744c9fbf26e8d26f33"
			}
		},
		{
			module: "newsfeed",
			position: "top_right",
			config: {
				feeds: [
					{
						title: "Google News",
						url: "https://news.google.com/news/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "newsfeed",
			position: "top_right",
			config: {
				feeds: [
					{
						title: "Fox Sports",
						url: "https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=nhl"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
  			module: "MMM-MyScoreboard",
  			position: "bottom_right",
  			classes: "default everyone",
  			header: "My Scoreboard",
  			config: {
    				showLeagueSeparators: true,
    				colored: true,
					viewStyle: "smallLogos",
    				sports: [
      				{
        			league: "NHL",
					teams: ["CLB"],
        			groups: ["Metropolitain"],
      				},
      				{
        			league: "MLB",
        			teams: ["CLE", "CIN"],
      				},
      				{
        			league: "NFL",
        			teams: ["CLE"],
      				},
      				{
        			league: "NCAAF",
        			teams: ["OSU"],
					groups: ["Big Ten"],
      				},
      				{
        			league: "NCAAM_MM",
        			label: "March Madness",
					groups: ["Big Ten"],
      				},
   				]
  			}
		},
		{
    			module: 'MMM-voice',
    			position: 'bottom_bar',
    		config: {
        			microphone: 1,
        			keyword: 'OKAY BRUTUS',
				timeout: 15
    			}			
		},
		//{
		//	module: "MMM-GoogleAssistant",
		//	position: "bottom_bar",
		//	config: {
		//		maxWidth: "100%",
		//		header: "",
		//		publishKey: 'pub-c-62983ff3-9092-4f48-b39e-4b910762c205',
		//		subscribeKey: 'sub-c-6688cbb0-5b70-11ea-b226-5aef0d0da10f',
		//		updateDelay: 500
		//	}
		//},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
