sap.ui.define(
		["sap/ui/core/UIComponent",
         "sap/ui/model/json/JSONModel",
         "sap/ui/model/resource/ResourceModel",
         "sap/ui/model/odata/v2/ODataModel"],
         /**
          * @param {sap.ui.core.UIComponent} UIComponent
          * @param {sap.ui.model.json.JSONModel} JSONModel
          * @param {sap.ui.model.resource.ResourceModel} ResourceModel
          * @param {sap.ui.model.odata.v2.ODataModel} ODataModel
          * @return {sap.ui.core.UIComponent} 
          */
		function(UIComponent, JSONModel, ResourceModel, ODataModel){
			"use strict";
			return UIComponent.extend("sap.ui.demo.wt.Component",{
				metadata:{
					manifest: "json",
				},
				init: function(){
					
					UIComponent.prototype.init.apply(this,arguments);
					
					var oModel = new JSONModel({recipient:{name:"World"}});
					this.setModel(oModel);
					
					var oi18nModel = new sap.ui.model.resource.ResourceModel({
						'bundleName': 'sap.ui.demo.wt.i18n.i18n'
					});
					this.setModel(oi18nModel,"i18n");
					
					this.getModel("invoice").setUseBatch(false);	

					var oViewModel = new JSONModel({currency:"EUR"});
					this.setModel(oViewModel,"view");
				},
			})
		});
