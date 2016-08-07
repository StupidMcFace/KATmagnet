// ==UserScript==
// @name        KATmagnet
// @namespace   KATmagnet
// @description JScript that reverts fake URL links in kickasstorrentsan.com back into clickable magnet links.
// @version     1.0
// @author      Stupid_McFace
// @icon        https://raw.githubusercontent.com/StupidMcFace/KATmagnet/master/icon.png
// @updateURL   https://raw.githubusercontent.com/StupidMcFace/KATmagnet/master/KATmagnet.js
// @downloadURL https://raw.githubusercontent.com/StupidMcFace/KATmagnet/master/KATmagnet.js
// @installURL  https://raw.githubusercontent.com/StupidMcFace/KATmagnet/master/KATmagnet.js
// @include     http://kickasstorrentsan.com/*
// @include     https://kickasstorrentsan.com/*
// @grant       none
// ==/UserScript==
/*
**  Thanks to Favna and throwaway420573 for their contributions
*/
var magnet = $("[data-sc-params]").attr("data-sc-params");
magnet = magnet.replace("{ 'magnet': '","");
magnet = magnet.split("'")[0];
$(".kaGiantButton").attr("href", magnet);
