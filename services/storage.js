"use strict";

app.service("StorageService", function ($log) {

    $log.debug("StorageService()");

    const KEY = 'zeiterfassung';

    this.speichern = (allTaetigkeiten) => {
        localStorage.setItem(KEY, JSON.stringify(allTaetigkeiten));
    };

    this.laden = () => {
        return JSON.parse(localStorage.getItem(KEY));

    };

});
