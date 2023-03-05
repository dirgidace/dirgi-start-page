const defaultConfig = {
	username: "dirgi",
	terminal: {
		fixedHeight: false,
		backgroundColor: "#101010",
		windowColor: "#191919",
		glowColor: ""
	},
	prompt: {
		ctrlC: true,
		placeholder: "",
		userColor: "blue",
		atColor: "gray",
		hostColor: "red",
		promptColor: "red",
		promptSymbol: ">",
		caretColor: "green",
		selectionBg: "#e8b195",
		selectionFg: "#16161e"
	},
	colors: {
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#1a1818",
		red: "#ff474a",
		green: "#c3e88d",
		yellow: "#ffcb6b",
		blue: "#6d7bca",
		cyan: "#89ddff",
		magenta: "#e069aa",
		purple: "#c792ea",
		orange: "#ff8800"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow"
	},
	urlLaunch: {
		target: "_self"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			},
			{
				alias: "y",
				name: "Youtube Search",
				url: "https://www.youtube.com/results?search_query={}"
			}
		]
	},
	sections: [
		{
			title: "social",
			color: "purple",
			links: [
				{
					name: "whatsapp",
					url: "https://web.whatsapp.com/",
					icon: "mdi:whatsapp"
				},
				{
					name: "tweetdeck",
					url: "https://tweetdeck.twitter.com/",
					icon: "mdi:twitter"
				},
				{
					name: "tumblr",
					url: "https://www.tumblr.com/",
					icon: "simple-icons:tumblr"
				},
				{
					name: "facebook",
					url: "https://www.facebook.com/",
					icon: "simple-icons:facebook"
				},
				{
					name: "instagram",
					url: "https://www.instagram.com/",
					icon: "simple-icons:instagram"
				},
				{
					name: "discord",
					url: "https://discord.com/",
					icon: "simple-icons:discord"
				}
			]
		},
		{
			title: "browsing",
			color: "yellow",
			links: [
				{
					name: "reddit",
					url: "https://www.reddit.com/",
					icon: "mdi:reddit"
				},
				{
					name: "pinterest",
					url: "https://www.pinterest.com/",
					icon: "mdi:pinterest"
				},
				{
					name: "youtube",
					url: "https://www.youtube.com/",
					icon: "simple-icons:youtube"
				},
				{
					name: "tiktok",
					url: "https://www.tiktok.com/",
					icon: "simple-icons:tiktok"
				},
				{
					name: "twitch",
					url: "https://www.twitch.tv/",
					icon: "simple-icons:twitch"
				}
			]
		},
		{
			title: "art",
			color: "red",
			links: [
				{
					name: "pixiv",
					url: "https://www.pixiv.net/en/",
					icon: "simple-icons:pixiv"
				},
				{
					name: "deviantart",
					url: "https://www.deviantart.com/",
					icon: "mdi:deviantart"
				},
				{
					name: "furaffinity",
					url: "https://www.furaffinity.net/",
					icon: "simple-icons:furaffinity"
				},
				{
					name: "safebooru",
					url: "https://safebooru.org/",
					icon: "mdi:view-gallery-outline"
				}
			]
		},
		{
			title: "downloads",
			color: "green",
			links: [
				{
					name: "r/Piracy",
					url: "https://www.reddit.com/r/Piracy/",
					icon: "mdi:reddit"
				},
				{
					name: "fitgirl",
					url: "https://fitgirl-repacks.site/",
					icon: "mdi:gamepad-variant"
				},
				{
					name: "1337x",
					url: "https://1337x.to/",
					icon: "mdi:download"
				},
				{
					name: "piracy.moe",
					url: "https://theindex.moe/",
					icon: "mdi:television-classic"
				},
				{
					name: "getcomics.info",
					url: "https://getcomics.info/",
					icon: "mdi:thought-bubble"
				}
			]
		},
		{
			title: "utility",
			color: "blue",
			links: [
				{
					name: "tinywow",
					url: "https://tinywow.com/",
					icon: "mdi:file-pdf-box"
				},
				{
					name: "latex2png",
					url: "https://latex2png.com/",
					icon: "simple-icons:latex"
				},
				{
					name: "docs.google",
					url: "https://docs.google.com/",
					icon: "mdi:file-document"
				}
			]
		},
		{
			title: "college",
			color: "orange",
			links: [
				{
					name: "evirtual",
					url: "https://grado.ucuenca.edu.ec/my/",
					icon: "mdi:school"
				},
				{
					name: "sga",
					url: "https://estudiante.ucuenca.edu.ec/",
					icon: "mdi:school"
				},
				{
					name: "gmail",
					url: "https://mail.google.com/",
					icon: "simple-icons:gmail"
				}
			]
		},
		{
			title: "acc",
			color: "purple",
			links: [
				{
					name: "gmail",
					url: "https://mail.google.com/",
					icon: "simple-icons:gmail"
				},
				{
					name: "drive",
					url: "https://drive.google.com/",
					icon: "simple-icons:googledrive"
				},
				{
					name: "banco de loja",
					url: "https://www2.bancodeloja.fin.ec/webbancapersonal/ingreso.htm",
					icon: "mdi:bank"
				},
				{
					name: "banco pichincha",
					url: "https://bancaweb.pichincha.com/",
					icon: "mdi:bank"
				},
				{
					name: "paypal",
					url: "https://www.paypal.com/ec/home",
					icon: "simple-icons:paypal"
				}
			]
		}
	]
}

export default defaultConfig
