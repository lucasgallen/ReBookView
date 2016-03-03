define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'library': 'libmessage',
            'review': 'revmessage',
            '*page': 'default'
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;

        appRouter.on('libmessage', function() {
            console.log('The library route is working! . . . ?');
        });

        appRouter.on('revmessage', function() {
            console.log('The review route is working! . . . ?');
        });

        appRouter.on('default', function(page) {
            console.log('The ' + page + 'route is working! . . . ?');
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
