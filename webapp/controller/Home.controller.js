sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "cromos/it/walkthrough/model/formatter"

 ], function (Controller, MessageToast, JSONModel, formatter) {
    "use strict";
    return Controller.extend("cromos.it.walkthrough.controller.Home", {
      formatter: formatter,
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

         var oViewModel = new JSONModel({
            moeda: "BRL",
            moedaEstrangeira: "JPY"
			});
			this.getView().setModel(oViewModel, "view");
         
      },

      onShowHello : function () {
         var oModel = this.getView().getModel("messages");
         var oDados = oModel.getData();


         var nome = this.getView().getModel("pessoa").getProperty("/nome");
         var sobrenome = this.getView().getModel("pessoa").getProperty("/sobrenome");
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sMsg = oBundle.getText("msgInicialPopup",[nome, sobrenome]);
         MessageToast.show(sMsg);
      },

      onVendaSelected: function(oEvent) {
         var oSelectedItem = oEvent.getSource();
         //se não for modelo default, informar nome do modelo. Ex: getBindingContext("pessoa");
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("vendaDetailsPanel");
			oProductDetailPanel.bindElement({ 
            path: sPath,
            //opcional. se não for modelo default, preencher nome do modelo
            // model: "pessoa" 
            expand: 'cliente'
            });

      },
      
      onAtualizarVendasMonit: function (){
         var oModel = this.getView().getModel();                 
         // existem duas formas de atualizar dados:         
         //1 monitorando alterações no modelo       
         
         if ( oModel.hasPendingChanges() ){                        
            oModel.submitChanges(
               {
               success: function(oData, oResponse){
                  MessageToast.show("Dados Atualizados");
               },
               error: function(oError){
                  MessageToast.show("Erro ao gravar Dados");
               }
            }
            );
         }else{
            MessageToast.show("Não há mudanças para gravar");
         }
         

      },

      onAtualizarVendas: function (){
         var oModel = this.getView().getModel();       
         if ( !oModel.hasPendingChanges() ){
            MessageToast.show("Não há mudanças para gravar");
            return;            
         }
         // existem duas formas de atualizar dados:
         //2 obtendo dados e chamando serviço manualmente

      var oVendaDetailsPanel = this.byId("vendaDetailsPanel");
      var bc = oVendaDetailsPanel.getBindingContext()
      var obj = bc.getObject();      
      var path = bc.getPath();

      var oNewData = {
         IDVenda : obj.IDVenda,
         Descricao : obj.Descricao
      };

      oModel.update(
         path, 
         oNewData,
         {
         success: function(oEvent){
            MessageToast.show("Dados Gravados");
         },
         error: function(oError){
            MessageToast.show("Erro ao gravar Dados");
         }
         });

      },

      productListFactory: function(sId, oContext){
         var olistItem;
         if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
            
             olistItem = new sap.m.ObjectListItem({
               title: "Descontinuado",
               icon: "sap-icon://warning",
               number: {path: "produtos>UnitsInStock"} ,
               numberState: "Error"
            });

         } else {

            olistItem = new sap.m.ObjectListItem({
               title: {path: "produtos>ProductName"},
               number: {path: "produtos>UnitsInStock"} ,
               numberState: "Success"
            });

            olistItem.addAttribute(
               new sap.m.ObjectAttribute({
                  text:{path: "produtos>QuantityPerUnit"}
               })
            );
            
         }
         
         return olistItem;
         
      },

      onShowDetails: function(oEvent){
         this.getOwnerComponent().getRouter().navTo("detailPage");

      }

    });
 });
