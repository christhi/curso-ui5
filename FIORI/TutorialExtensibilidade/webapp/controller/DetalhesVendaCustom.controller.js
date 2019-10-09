sap.ui.define([
    "cristiano/cromos/it/walkthrough/controller/DetalhesVenda.controller",
    "sap/m/MessageToast"
], function(CustomController, MessageToast) {
    "use strict";
  
    return CustomController.extend("cristiano.cromos.it.walkthrough.Z_CRISTIANO_WTExtension.controller.DetalhesVendaCustom", {
        onInit: function() { 
            CustomController.prototype.onInit.apply(this, arguments);
            
        },
        
        onDataReceived : function (oData) {
         MessageToast.show("Exibindo Cliente " + oData.Cliente);
      }
    });
  
});