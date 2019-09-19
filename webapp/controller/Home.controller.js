sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

 ], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("cromos.it.walkthrough.controller.Home", {

      onInit : function(){
         var oMsgModel = new JSONModel({
            MsgInicial: "Seja bem vindo!"
         });
         // Atribui o objeto do modelo à view
         this.getView().setModel(oMsgModel, "messages");    
         
         //exemplo property binding
         var oPessoaModel = new JSONModel({
            nome: "Steven",
            sobrenome: "Job",
            habilitado: true,
            endereco: {
               rua: "Avenida Victor Hugo 156",
               cidade: "Paris",
               cep: "12345",
               pais: "França"
            }
            });

         this.getView().setModel(oPessoaModel, "pessoa");    
         
      },

      onShowHello : function () {
         var oModel = this.getView().getModel("messages");
         var oDados = oModel.getData();
         MessageToast.show(oDados.MsgInicial);
      }

    });
 });