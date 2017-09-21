// ==UserScript==
// @name         Netflix Auto Next Epsiode
// @namespace    https://torrottum.no
// @author       Tor Røttum
// @description  Automatically plays next Netflix episode
// @include      https://www.netflix.com/*
// @version      1.0.1
// @homepage     https://github.com/torrottum/userscripts
// @updateURL    https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-next-episode.user.js
// @downloadURL  https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-next-episode.user.js
// @run-at document-end
// ==/UserScript==
(() => {
    'use strict';

    let check = () => {
        let nextBtn = document.querySelector(
            '.postplay-still-container.uitracking-state-visible'
        );

        if (!nextBtn) {
            return setTimeout(check, 800)
        }

        nextBtn.click()

        // wait a little longer, just to be sure the button is gone
        return setTimeout(check, 15000)
    }

    check()
})()
