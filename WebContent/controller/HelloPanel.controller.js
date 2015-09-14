sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
               ], 
               /**
                * @param {sap.ui.core.mvc.Controller} Controller 
                * @param {sap.ui.m.MessageToast} MessageToast
                * @return {sap.ui.core.mvc.Controller} 
                */
               function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.HelloPanel", {
		onShowHello : function () {
			// show a native JavaScript alert
			var recipientName = this.getOwnerComponent().getModel().getProperty("/recipient/name");
			var oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			var message = oResourceBundle.getText("helloMsg",[recipientName]);
			MessageToast.show(message);
		}
	});
});