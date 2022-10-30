// ==UserScript==
// @name        Video Extensions
// @namespace   Scripts
// @match       https://www.youtube.com/*
// @match       https://www.netflix.com/*
// @match       https://www.twitch.com/*
// @match       https://www.facebook.com/*
// @match       https://www.reddit.com/*
// @grant       none
// @version     <%- currDate %>
// @author      -
// @description A userscript to add more utilities to websites that embed video elements/content.
// ==/UserScript==

<%- jsBundle %>

const styleOverride = document.createElement('style');
styleOverride.innerText = `<%- cssBundle %>`;
document.head.appendChild(styleOverride);