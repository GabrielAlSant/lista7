class Calculadora{
    #num1
    #num2
    constructor(num1, num2){
        this.#num1= num1
        this.#num2= num2   
    }
    somar(){
        return this.#num1 + this.#num2  
    } 

    subtrair(){
        return this.#num1 - this.#num2  
    }

    raizQuadrada(){
        return Math.sqrt(this.#num1)
    }
    dividir(){
        return this.#num1/this.#num2
    }
    multiplicar(){
        return this.#num1 * this.#num2
    }
}


const calculadora = new Calculadora(7, 4);
console.log(calculadora.somar());
console.log(calculadora.subtrair());