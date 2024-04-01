class ItemBiblioteca{
     #titulo
     #dataLancamento
     constructor(titulo, dataLancamento){
        if (this.constructor === ItemBiblioteca){
            throw new Error("Classe Pai")
        }
        this.#titulo = titulo
        this.#dataLancamento = dataLancamento
     }

    obterInformacoes(){
      return `Titulo: ${this.#titulo}; Data de lancamento: ${this.#dataLancamento};`  
    }
}


class DVD extends ItemBiblioteca{
    constructor(titulo, dataLancamento, editora, autor){
        super(titulo, dataLancamento)
        this.editora = editora  
        this.autor = autor
    }
    obterInformacoes(){
     return super.obterInformacoes()+ ` Editora: ${this.editora}; Autor: ${this.autor}`
    }
}

class Livro extends ItemBiblioteca{
    constructor(titulo, dataLancamento, produtora, duracao){
        super(titulo, dataLancamento)
        this.produtora = produtora  
        this.duracao = duracao
    }
    obterInformacoes(){
     return super.obterInformacoes()+ ` Produtora: ${this.produtora}; Duração: ${this.duracao}`
    }
}


const dvd = new DVD("a", "12/10/2004", "bka", "BAKAAA")

console.log(dvd.obterInformacoes())

const livro = new Livro("a", "12/10/2004", "bka", "128 min")

console.log(livro.obterInformacoes())