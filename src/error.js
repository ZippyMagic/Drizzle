var realAddEventListener = HTMLElement.prototype.addEventListener;

HTMLElement.prototype.addEventListener = function(type,handler,capture,other){
    var newHandler = function(evt) {
        try {
            return handler.apply(this,arguments);
        } catch (e) {
            console.log("error handling "+type+" event:"+e.message +"  linenumber:"+e.lineNumber);
        }
    };

    realAddEventListener.call(this,type,newHandler,capture,other);
};
