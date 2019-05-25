"use strict";

app.component("eintrag", {
    templateUrl: "components/eintrag.html",
    controller: "EintragController",
    bindings: {
        eintragObj: "<",
        buttonAusg: "&",
        changedState: "&"
    }
});


app.controller("EintragController", function ($log, Eintrag) {

    $log.debug("EintragController()");

    this.delete = () => {
        this.buttonAusg({obj: this.eintragObj});
    }

    this.startTaetigkeit = () => {
        this.disabledDelete = true;

        this.eintragObj.starten();
        this.changedState();

    }

    this.stopTaetigkeit = () => {
        this.disabledDelete = false;

        this.eintragObj.stoppen();
        this.changedState();
    }

});
