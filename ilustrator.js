var selectedAccessoryLayer;
var selectedBeardLayer;
var selectedHatLayer;
var selectedSkullLayer;
var selectedBGLayer;

var ID = "";
var allIds = [];
var allExportStats = [];
var noOfExports = 20;



Generate();

function Generate() {

    var doc = app.activeDocument;

    for (var i = 0; i < doc.layers.length; i++) {

        if (doc.layers[i].name == "Layers") {

            doc.layers[i].visible = true;
            var categoriesLayer = doc.layers[i];
            var noOfCategories = categoriesLayer.layers.length;

            for (var j = 0; j < noOfCategories; j++) {
                categoriesLayer.layers[j].visible = true;

                var itemLayer = categoriesLayer.layers[j];
                var noOfItems = itemLayer.layers.length;

                //alert("Item : " + itemLayer.name + ", items : " + noOfItems);

                for (var k = 0; k < noOfItems; k++) {
                    itemLayer.layers[k].visible = false;
                }
            }
        }
        else {
            doc.layers[i].visible = false;
        }
    }


    var counter = 0;
    for (var i = 0; i < doc.layers.length; i++) {

        if (doc.layers[i].name == "Layers") {

            doc.layers[i].visible = true;
            var categoriesLayer = doc.layers[i];
            var noOfCategories = categoriesLayer.layers.length;

            for (var j = 0; j < noOfCategories; j++) {
                categoriesLayer.layers[j].visible = true;

                var itemLayer = categoriesLayer.layers[j];
                var noOfItems = itemLayer.layers.length;

                //alert("Item : " + itemLayer.name + ", items : " + noOfItems);

                for (var k = 0; k < noOfItems; k++) {
                    itemLayer.layers[k].visible = true;

                    ExportAvatar(categoriesLayer.layers[j].name, itemLayer.layers[k].name);
                    counter++;

                    itemLayer.layers[k].visible = false;
                }
            }
        }
        else {
            doc.layers[i].visible = false;
        }
    }
 }



function ExportAvatar(category, item) {

    var doc = app.activeDocument;
    var fileName = (item);//.slice(-4)//id;
    var filePath = "~/Desktop/";

    var f = new Folder(filePath);
    if (!f.exists) {
	    f.create()
    }

    var options = new ExportOptionsPNG24();
    options.artBoardClipping = true;
    options.matte = false;
    options.horizontalScale = 50;
    options.verticalScale = 50;
    options.transparency = true;

    var destFile = new File(filePath + fileName + ".png");
    doc.exportFile(destFile, ExportType.PNG24, options);
