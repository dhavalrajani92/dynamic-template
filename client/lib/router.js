import {Router} from "meteor/iron:router";

Router.route('/', function () {
    this.render('defaultTheme', {
        layoutTemplate: null
    });
});
Router.route('/theme1', function () {
    this.render('theme1', {
        layoutTemplate: null
    });
});
Router.route('/theme2', function () {
    this.render('theme2', {
        layoutTemplate: null
    });
});