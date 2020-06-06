// ==UserScript==
// @name         ironfavs
// @version      0.1.0
// @author       abernier
// @namespace    name.abernier
// @description  Emojis favicons for *.ironhack.com to better distinct them
// @homepage     https://github.com/abernier/ironfavs
// @updateURL    https://github.com/abernier/ironfavs/raw/master/ironfavs.user.js
// @downloadURL  https://github.com/abernier/ironfavs/raw/master/ironfavs.user.js
// @supportURL   https://github.com/abernier/ironfavs/issues
// @include      /^https?:\/\/.*ironhack\.com\/.*/
// @grant        none
// ==/UserScript==

function getHref(emoji) {
    // https://css-tricks.com/emojis-as-favicons/
    return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`
}

const emojis = {
    'my.': '📖',
    'campus-tools.': '🏫'
}

const _ = Object.keys(emojis).find(str => location.host.includes(str))
const emoji = emojis[_] // 'my.'

if (emoji) {
    document.querySelector('link[rel*="icon"]').href = getHref(emoji)
}
