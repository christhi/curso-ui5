jQuery.sap.declare("cristiano.cromos.it.walkthrough.Z_CRISTIANO_WTExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cristiano.cromos.it.walkthrough",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/Z_CRISTIANO_WT"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.cristiano.cromos.it.walkthrough.Component.extend("cristiano.cromos.it.walkthrough.Z_CRISTIANO_WTExtension.Component", {
	metadata: {
		manifest: "json"
	}
});