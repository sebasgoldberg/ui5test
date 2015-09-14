sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/ui/model/Filter",
               "sap/ui/model/FilterOperator",
               ], 
               /**
                * @param {sap.ui.core.mvc.Controller} Controller 
                * @param {sap.ui.model.Filter} Filter
                * @param {sap.ui.model.FilterOperator} FilterOperator
                * @return {sap.ui.core.mvc.Controller} 
                */
               function (Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.InvoiceList", {

		onFilterInvoices: function(oEvent){
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery){
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		},

	});
});