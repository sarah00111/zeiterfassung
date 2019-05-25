"use strict";

app.factory("Eintrag", function (StorageService) {

    function Eintrag(person, taetigkeit, startTime, gesamt) {
        this.person = person;
        this.taetigkeit = taetigkeit;
        this.startTime = startTime || 0;
        this.gesamt = gesamt || 0;

        this.starten = () => {
            this.startTime = Date.now();
        }

        this.stoppen = () => {
            this.gesamt += Date.now() - this.startTime;
            this.startTime = 0;
        }

        this.dauer = () => {
            if(this.startTime != 0) {
                return this.gesamt + Date.now() - this.startTime;
            }else {
                return this.gesamt;
            }
        }
    }

    return Eintrag;
});
