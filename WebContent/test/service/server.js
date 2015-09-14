sap.ui
		.define(
				[ "sap/ui/core/util/MockServer" ],
				function(MockServer) {

					return {
						init : function() {
							var oMockServer = new MockServer(
									{
										rootUri : "http://services.odata.org/V2/Northwind/Northwind.svc/"
									});

							MockServer.config({
								autoRespond : true,
								autoRespondAfter : 1000
							});

							var sPath = jQuery.sap
									.getModulePath("sap.ui.demo.wt.test.service");
							oMockServer.simulate(sPath + "/metadata.xml", sPath);
							oMockServer.start();
						},
					}
				});