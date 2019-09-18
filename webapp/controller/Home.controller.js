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
         
      },

      onShowHello : function () {
         var oModel = this.getView().getModel("messages");
         var oDados = oModel.getData();
         MessageToast.show(oDados.MsgInicial);
      }

    });
 });