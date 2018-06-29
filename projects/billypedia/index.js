/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        $('body').css('background-color', 'BurlyWood');
        $('p').css('color', 'Peru');
        $('h3').css('color', 'Sienna');
        $('#all-contents').css('font-family', 'palatino');
        $('#top').css('font-size','30px');
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
