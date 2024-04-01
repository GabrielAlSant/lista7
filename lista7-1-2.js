class Membro{
    #nome
    #idade
    #peso
    #altura
    constructor(nome, idade, peso, altura){
       this.#nome = nome
       this.#idade = idade
       this.#peso = peso
       this.#altura = altura
    }

    imc(){
        return (this.#peso/(this.#altura**2)).toFixed(2)
    }

    desconto(){
        if(this.#idade <=17){
            return 'Parabéns, Você ganhou desconto'
        }else{
        return 'Não é necessário desconto'
        }
    }

}


const membro = new Membro("Cleiton",  17, 65, 1.80)

console.log(membro.imc())
console.log(membro.desconto())