class Carro{
 constructor(marca, modelo, ano){
 this.marca = marca
 this.modelo = modelo
 this.ano = ano
 }

 obterInfo(){
    return  console.log(`A carro da ${this.marca} tem o modelo ${this.modelo}, fabricado em ${this.ano}.`)
 }

 anosDeUso(){
    const ano = new Date()

    return ano.getFullYear() - this.ano
    
 }
}

const carro = new Carro('a', 'b', 2022)
console.log(carro.obterInfo())
console.log(carro.anosDeUso())