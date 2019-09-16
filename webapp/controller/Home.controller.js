sap.ui.define([
    "sap/ui/core/mvc/Controller"

 ], function (Controller) {
    "use strict";
    return Controller.extend("cromos.it.walkthrough.controller.Home", {

        onShowHello : function () {
            // mostrar alerta usando Javascript nativo 
            alert("Hello World");
         }

    });
 });