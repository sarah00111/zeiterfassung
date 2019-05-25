"use strict";

app.component("infoSeite", {
    templateUrl: "components/info-seite.html",
    controller: "InfoSeiteController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "info-seite",
        url: "/info-seite",
        component: "infoSeite"
    });

    // $urlRouterProvider.otherwise("/info-seite");
});


app.controller("InfoSeiteController", function ($log) {

    $log.debug("InfoSeiteController()");

});
