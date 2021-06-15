// Display output
function display(res) {
  document.getElementById('number').value = res;
}

// calculation input
function calculate(operator) {

    const obj = {
        number: parseInt(document.getElementById('number').value),
        get increment() {
          display(this.number+1);
        },
        get decrement() {
          display(this.number-1);
        },
        get add() {
          display(this.number+this.number);
        },
        get sub() {
          display(this.number-this.number);
        },
        get mul() {
          display(this.number*this.number);
        },
        get div() {
          display(this.number/this.number);
        },
        get reset() {
          display(0);
        }
    };

    //Matching case
    switch(operator) {
      case '++':
        obj.increment;
        break;
      case '--':
        obj.decrement;
        break;
      case '+':
        obj.add;
        break;
      case '-':
        obj.sub;
        break;
      case '*':
        obj.mul;
        break;
      case '/':
        obj.div;
        break;
      default:
        obj.reset;
    }

   /* Object.defineProperty(obj, "reset", {
      get : function () {document.getElementById('number').value = 0;}
    });
    
    Object.defineProperty(obj, "increment", {
      get : function () { document.getElementById('number').value = this.number+1;}
    });
    
    Object.defineProperty(obj, "decrement", {
      get : function () {document.getElementById('number').value =this.number-1;}
    });

    Object.defineProperty(obj, "add", {
      get : function () {document.getElementById('number').value =this.number+this.number;}
    });

    Object.defineProperty(obj, "sub", {
      get : function () { document.getElementById('number').value = this.number-this.number;}
    });
    
    Object.defineProperty(obj, "mul", {
      get : function () {document.getElementById('number').value =this.number*this.number;}
    });
    
    Object.defineProperty(obj, "div", {
      get : function () {document.getElementById('number').value = this.number/this.number;}
    });


    if(operator == '++')
        obj.increment;
    else if(operator == '--')
        obj.decrement;
    else if(operator == '+')
        obj.add;
    else if(operator == '-')
        obj.sub;
    else if(operator == '*')
        obj.mul;
    else if(operator == '/')
        obj.div;
    else
        obj.reset;*/
}
