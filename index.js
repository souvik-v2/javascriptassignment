


function calculate(operator) {

    const obj = {
        number: parseInt(document.getElementById('number').value)
    };
    
    Object.defineProperty(obj, "reset", {
      get : function () {document.getElementById('number').value = 0;}
    });
    
    Object.defineProperty(obj, "increment", {
      get : function () { document.getElementById('number').value = this.number+this.number;}
    });
    
    Object.defineProperty(obj, "decrement", {
      get : function () {document.getElementById('number').value =this.number-1;}
    });
    
    Object.defineProperty(obj, "mul", {
      get : function () {document.getElementById('number').value =this.number*this.number;}
    });
    
    Object.defineProperty(obj, "div", {
      get : function () {document.getElementById('number').value = this.number/this.number;}
    });


    if(operator == '+')
        obj.increment;
    else if(operator == '-')
        obj.decrement;
    else if(operator == '*')
        obj.mul;
    else if(operator == '/')
        obj.div;
    else
        obj.reset;
}
