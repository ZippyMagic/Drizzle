/* Copyright Drizzle LTE

Created by @ZippyMagic
Version {{version}}
*/
function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}


(function () {


    
    // Begin Style loader
    var STYLE = document.createElement("LINK");
        STYLE.rel = 'stylesheet';
        STYLE.type = 'text/css';
        STYLE.href = 'drizzle/drizzle-style.min.css'
    document.getElementById("body").appendChild(STYLE);
    
    
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
    
    // Begin Website
    var TOP_TEXT = document.getElementById("drizzle-input-top").innerHTML;
    if(TOP_TEXT === "") {
        var error = console.log("Error 400: 'drizzle-input-top' is not defined");
        return error;
    }
    var TOP = document.createElement("DIV");
        TOP.id = 'drizzle-web-top';
        TOP.style = 'display:block; position: absolute; top: 0px; left: 0px; min-width: 100%; border: 2px solid purple; color: purple; background-color: lightPurple; text-align: center;';
        document.body.appendChild(TOP);
    var TOP_HTML = document.createElement("H1");
    var TOP_HTML_TEXT = document.createTextNode(TOP_TEXT);    
        TOP_HTML.id = 'drizzle-web-top-text';
        TOP_HTML.appendChild(TOP_HTML_TEXT);
        document.getElementById("drizzle-web-top").appendChild(TOP_HTML);
        

})();
