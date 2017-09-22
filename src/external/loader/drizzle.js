/* Copyright Drizzle LTE

Created by @ZippyMagic
Version {{version}}
*/


(function () {


    
    
    // Begin 'Powered by' Creation
    var HEADER = document.createElement("DIV");
        HEADER.id = 'drizzle-header';
        HEADER.style = "display: block; position: absolute; float: right; top: 0px; right: 0px; border: 2px solid purple;";
        document.body.appendChild(HEADER);
    var CREDIT_ELEMENT = document.createElement("P");
    var CREDIT = document.createTextNode("Powered by ");
        CREDIT_ELEMENT.id= 'drizzle-element';
        CREDIT_ELEMENT.style = "padding: 4px 2px 4px 2px; text-color: lightGray; font-color: lightGray; color: lightGray;";
        CREDIT_ELEMENT.appendChild(CREDIT);
        document.getElementById("drizzle-header").appendChild(CREDIT_ELEMENT);
    var CREDIT_ELEMENT_LOGO = document.createElement("CODE");
    var CREDIT2 = document.createTextNode("DRIZZLE");
        CREDIT_ELEMENT_LOGO.style = "text-color: purple; color: purple; font-color: purple;";
        CREDIT_ELEMENT_LOGO.appendChild(CREDIT2);
        document.getElementById("drizzle-element").appendChild(CREDIT_ELEMENT_LOGO);
    
        

})();
