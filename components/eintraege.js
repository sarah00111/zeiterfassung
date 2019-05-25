"use strict";

app.component("eintraege", {
    templateUrl: "components/eintraege.html",
    controller: "EintraegeController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "eintraege",
        url: "/eintraege",
        component: "eintraege"
    });

    $urlRouterProvider.otherwise("/eintraege");
});


app.controller("EintraegeController", function ($log, Eintrag, $timeout, StorageService) {

    $log.debug("EintraegeController()");

    this.allTaetigkeiten = [];
    let laden = StorageService.laden();
    if(laden.size != 0) {
        laden.map(e => this.allTaetigkeiten.push(new Eintrag(e.person, e.taetigkeit, e.startTime, e.gesamt)));
    }

    this.hideAddTaetigkeit = true;

    (function aktualisieren() {
        $timeout(aktualisieren, 1000);
    })();

    this.onInit = () => {
        this.gesamtZeit();
    }

    this.gesamtZeit = () => {
        if(this.allTaetigkeiten) {
            let sum = 0;
            this.allTaetigkeiten.forEach(e => sum += e.dauer());
            return sum;
        }
        return 0;
    }

    this.speichern = () => {
        StorageService.speichern(this.allTaetigkeiten);
    }

    this.delete = (obj) => {
        let index = this.allTaetigkeiten.indexOf(obj);
        this.allTaetigkeiten.splice(index, 1);
        StorageService.speichern(this.allTaetigkeiten);
    }

    this.stopEingabe = () => {
        this.person = "";
        this.taetigkeit = "";
        this.formular.$setUntouched();
        this.formular.$setPristine();

        this.hideAddTaetigkeit = true;

    }

    this.newTaetigkeit = () => {
        this.hideAddTaetigkeit = false;
    }

    this.addTaetigkeit = () => {
        this.hideAddTaetigkeit = true;

        this.allTaetigkeiten.unshift(new Eintrag(this.person, this.taetigkeit));

        this.stopEingabe();
        this.speichern();
    }
});
