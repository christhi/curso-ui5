sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("cromos.it.walkthrough.controller.Home", {

        onShowHello : function () {
            MessageToast.show("Hello World!");
         }

    });
 });