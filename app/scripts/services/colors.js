"use strict";

app.factory('Colors', function($http) {

    var colors = ['main',
        'maindk',
        'green',
        'yellow',
        'yellowdk',
        'orange',
        'red',
        'blue',
        'bluedk',
        'black',
        'blacker',
        'blackest',
        'white',
        'shade',
        'shade-lt'
    ];

    var Colors = {
      all : colors,
    };

    return Colors;
})
