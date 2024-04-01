class Livro{
    constructor(titulo, autor, preco){
        this.titulo = titulo
        this.autor = autor
        this.preco = preco
    }

    info(){
        return `O livro ${this.titulo} tem como autor ${this.autor}, um livro magnifico por apenas R$ ${this.preco}`
    }
}

class  LivroFisico extends Livro {
        constructor(titulo, autor, preco, peso){
            super(titulo, autor, preco)
            this.peso = peso
        }

        frete(){
            if (this.peso<=1000){
                return  "O frete é gratuito"
            }else{
                let taxa = Math.floor((this.peso-1000)/50)+2
                return `Aqui o custo do frete será de R$ ${taxa}, pois exedeu a tolerância de 1kg`
            }
        }
}

class  Ebook extends Livro {
    constructor(titulo, autor, preco, tamanhoMb){
        super(titulo, autor, preco)
        this.tamanhoMb = tamanhoMb
    }

    tamanho(){
        return `${this.titulo} tem um tamanho de ${this.tamanhoMb} mbs`
    }
}

const livroFisico = new LivroFisico('A volta', "pablo", 55, 1252)
const ebook = new Ebook('A ida', "rodolfo", 16, 25)

console.log(livroFisico.info())
console.log(livroFisico.frete())
console.log(ebook.info())
console.log(ebook.tamanho())
