'use strict';

app.factory('Config', ['Fonts', function(Fonts) {

    var config = {};
    config.app = {};

    config.app.colorpiano = {};
    config.app.colorpiano.init = {};
    config.app.colorpiano.init.background = {
        color: 'black'
    };
    config.app.colorpiano.init.message = {
        color: 'yellowdk'
    };
    config.app.colorpiano.init.font= {
        font : Fonts[1]
    };

    var Config = {
        all: config,
    }

    return Config;
}]);
