// ==UserScript==
// @name            inoagent
// @version         1.1
// @description     Hide foreign agent banners on popular media websites
// @description:ru  Скрыть баннер об иностранном агенте на сайтах популярных СМИ
// @author          Oleg Kalachev
// @license         MIT
// @match           https://www.rosbalt.ru/*
// @match           https://meduza.io/*
// @match           https://tvrain.ru/*
// @match           https://istories.media/*
// @match           https://pasmi.ru/*
// @match           https://zona.media/*
// @match           https://republic.ru/*
// @match           https://twitter.com/*
// @grant           GM_addStyle
// @run-at          document-start
// @updateURL       https://openuserjs.org/meta/chev/inoagent.meta.js
// @downloadURL     https://openuserjs.org/install/chev/inoagent.user.js
// ==/UserScript==

// Registry: https://minjust.gov.ru/ru/documents/7755/

if (location.host == 'meduza.io') {
	GM_addStyle('#div-gpt-ad { display: none !important }');

} else if (location.host == 'tvrain.ru') {
	GM_addStyle('.menu3__foreign-agent-wrapper { display: none !important }');
	GM_addStyle('.document-head__title_foreign_agent { display: none !important }');

} else if (location.host == 'zona.media') {
	GM_addStyle('.mz-agent-banner { display: none !important }');

} else if (location.host == 'www.rosbalt.ru') {
	GM_addStyle('.rkngov { display: none !important }');

} else if (location.host == 'istories.media') {
	GM_addStyle('.ForeignAgentBanner { display: none !important }');

} else if (location.host == 'pasmi.ru') {
	GM_addStyle('.content .excerpt:first-of-type { display: none !important }');

} else if (location.host == 'republic.ru') {
	GM_addStyle('.ino_agent { display: none }');

} else if (location.host == 'twitter.com') {
	GM_addStyle('div[style^=\'background-image: url("https://pbs.twimg.com/media/FMCLxrRXoAA26Yw\'] { display: none !important }');
	// doesn't work due to Content Security Policy
	// https://github.com/Tampermonkey/tampermonkey/issues/296
}
