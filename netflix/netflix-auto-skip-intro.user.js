// ==UserScript==
// @name         Netflix Auto Skip Intro
// @namespace    https://torrottum.no
// @author       Tor Røttum
// @description  Automatically skips Netflix intro
// @include      https://www.netflix.com/*
// @version      1.1.0
// @homepage     https://github.com/torrottum/userscripts
// @updateURL    https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-skip-intro.user.js
// @downloadURL  https://raw.githubusercontent.com/torrottum/userscripts/master/netflix/netflix-auto-skip-intro.user.js
// @run-at document-end
// ==/UserScript==
(() => {
    'use strict';

    let target = document.querySelector('body')

    let cb = (mutations) => {
        mutations.forEach(m => {
            if (!m.addedNodes || m.addedNodes.length === 0) {
                return
            }

            let node = m.addedNodes[0]

            if (node.className !== 'skip-credits') {
                return
            }

            if (node.children.length > 0) {
                node.children[0].click()
            }
        })
    }

    let observer = new MutationObserver(cb)

    observer.observe(target, {
        childList: true,
        subtree: true,
    })
})()
