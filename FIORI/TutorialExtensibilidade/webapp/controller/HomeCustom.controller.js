sap.ui.define([
    "cristiano/cromos/it/walkthrough/controller/Home.controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(CustomController, MessageToast, JSONModel) {
    "use strict";
  
    return CustomController.extend("cristiano.cromos.it.walkthrough.Z_CRISTIANO_WTExtension.controller.HomeCustom", {
        onInit: function() { 
            CustomController.prototype.onInit.apply(this, arguments);
            /* do something */ 
            var oPessoaModel = new JSONModel({
            nome: "Sadam",
            sobrenome: "Hussein",
            habilitado: true,
            endereco: {
               rua: "Rua da Bomba",
               cidade: "Bagda",
               cep: "12345",
               pais: "Iraque"
            }
            });

         this.getView().setModel(oPessoaModel, "pessoa");    
            
        },
        
        onShowHello : function () {
         MessageToast.show("Aplicativo de extensão!");
      }
    });
  
});