/* Copyright Drizzle LTE

Created by @ZippyMagic
Version {{version}}
*/


window.onload = function() {
    startDrizzle( "accountUN", "ZippyMagician");
};


function startDrizzle( c, u) {


    var HEADER = document.createElement("div");
    var CREDIT_ELEMENT = document.createElement("p");
    var CREDIT_ELEMENT_LOGO = document.createElement("P");
    var CREDIT = document.createTextNode("Powered by ");
    var CREDIT2 = document.createTextNOde("DRIZZLE");
        HEADER.style = "display: block; position: absolute; float: right; top: 0px; right: 0px; border: 2px solid purple;";
        HEADER.value = "drizzle-header";
        HEADER.id = "drizzle-header";
        CREDIT_ELEMENT.appendChild(CREDIT);
        CREDIT_ELEMENT.id = "drizzle-element";
        CREDIT_ELEMENT_LOGO.appendChild(CREDIT2);
        CREDIT_ELEMENT.style = "padding: 4px 2px 4px 2px; text-color: lightGray; font-color: lightGray; color: lightGray;";
        CREDIT_ELEMENT_LOGO.style = "text-color: purple; color: purple; font-color: purple;";
        document.body.appendChild(HEADER);
        document.getElementById("drizzle-header").appendChild(CREDIT_ELEMENT);
        document.getElementById("drizzle-element").appendChild(CREDIT_ELEMENT_LOGO);




    


}