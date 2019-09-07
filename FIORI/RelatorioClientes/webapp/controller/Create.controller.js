sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function (Controller, JSONModel, formatter, History, MessageToast, UIComponent) {
	"use strict";
	return Controller.extend("cromos.it.RelatorioClientes.controller.Create", {
		formatter: formatter, 
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("create").attachPatternMatched(this._onCreateMatched, this);
			
			var oViewModel = new JSONModel({
				copies: 0
			});
			this.getView().setModel(oViewModel, "view");
		},
		_onCreateMatched: function (oEvent) {
			this.getView().getModel("view").setProperty("/copies", 0);
			var m = this.getView().getModel();
			m.metadataLoaded().then(function(){
				var oContext = m.createEntry('/ClienteSet',
					{
						properties: {
							Telefone: '1234',
							Email: 'oi@email.com'
						}
					});
					
				this.getView().bindElement({
					path: oContext.getPath()
					//model: "",
				});
			}.bind(this))
		},
		onNavBack: function () {
			var m = this.getView().getModel();
			m.resetChanges();

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("worklist", {}, true);
			}

		},

		onGravar: function (oEvent) {
			var m = this.getView().getModel();

			this.getView().setBusy(true);
			
			var iCopies = this.getView().getModel("view").getProperty("/copies");
			var oNewCliente = this.getView().getBindingContext().getObject();
			
			for (var i=0;i<iCopies; i++){
				m.createEntry('/ClienteSet', {
					properties: {
						Nome: oNewCliente.Nome + " (Copia "+(i+1)+")",
						UF: oNewCliente.UF,
						Email: oNewCliente.Email,
						Telefone: oNewCliente.Telefone,
					}
				});
			}

			m.submitChanges({
				success: function (oData) {

					this.getView().setBusy(false);

					MessageToast.show("Cliente criado com sucesso.");

					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					
					oRouter.navTo("object", {
						objectId: this.getView().getBindingContext().getObject().ID
					}, true);

				}.bind(this),
				error: function (oData) {

					MessageToast.show("Aconteceu um erro.");

					console.error(oData);

					this.getView().setBusy(false);
				},
			});

		},

		onCancelar: function (oEvent) {

			this.onNavBack();

		}
	});
}); 