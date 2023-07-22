// ==UserScript==
// @name         WhatsApp Web Archived Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the Archived row from WhatsApp Web
// @author       Dequei
// @match        https://web.whatsapp.com/
// @icon         https://web.whatsapp.com/img/favicon/1x/favicon.png
// @grant        none
// ==/UserScript==
(function() {
    'use strict';


    function removeArchivedRow() {

        const archivedRow = document.getElementById('pane-side');

        if (archivedRow) {

            const buttonArchived = document.getElementById('pane-side').children[0];

            if (document.getElementById('pane-side').children[0]?.innerText.toLowerCase().includes('archiv')) {

                document.getElementById('pane-side').children[0]?.remove();
            }


        }
    }

    setTimeout(removeArchivedRow, 10000);
})();
