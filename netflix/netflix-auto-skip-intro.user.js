// ==UserScript==
// @name         Netflix Auto Skip Intro
// @namespace    https://torrottum.no
// @author       Tor Røttum
// @description  Automatically skips Netflix intro
// @include      https://www.netflix.com/*
// @version      1.0.0
// @updateURL    https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-skip-intro.user.js
// @downloadURL  https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-skip-intro.user.js
// @run-at document-end
// ==/UserScript==
(() => {
    'use strict';

    let check = () => {
        let skipContainer = document.querySelector('div.skip-credits');

        if (!skipContainer) {
            return setTimeout(check, 800)
        }

        if (!skipContainer.classList.contains('skip-credits-hidden')) {
            document.querySelector('a.nf-icon-button.nf-flat-button.no-icon').click()

            // wait a little longer, because the button fades slowly in Safari
            return setTimeout(check, 15000)
        }
    }

    check()
})()
