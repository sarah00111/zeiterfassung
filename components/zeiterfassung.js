"use strict";

app.component("zeiterfassung", {
    templateUrl: "components/zeiterfassung.html",
    controller: "ZeiterfassungController",
    bindings: {}
});


app.controller("ZeiterfassungController", function ($log) {

    $log.debug("ZeiterfassungController()");

});
