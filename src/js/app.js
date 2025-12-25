'use strict';

$(document).ready(function() {
    var rows = document.querySelectorAll('tr');
     console.log('rows');

    document.getElementById('skd-web').addEventListener('click', function(event) {

        if( rows.classList === 'active' ) {
            hiddenRows.forEach(function(row) {
                row.classList.toggle('hidden');
            });
        }

        if (event.target.id === 'toggleButton') {
            hiddenRows.forEach(function(row) {
                row.classList.toggle('hidden');
            });
        }
    });
});
