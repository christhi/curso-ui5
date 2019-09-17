sap.ui.define([
    "sap/ui/core/UIComponent"
    
 ], function (UIComponent) {
    "use strict";
    return UIComponent.extend("cromos.it.walkthrough.Component", {
      metadata : {
         manifest: "json"
      },

       init : function () {
          // chama função init da super classe
          UIComponent.prototype.init.apply(this, arguments);
       }
    });
 }); 