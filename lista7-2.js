class Animal {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    getNome() {
        return this.#nome;
    }

    getIdade() {
        return this.#idade;
    }
}

class Mamifero extends Animal {
    constructor(nome, idade, tipoPelo) {
        super(nome, idade);
        this.tipoPelo = tipoPelo;
    }

    info() {
        return `O animal é um mamífero de pelagem ${this.tipoPelo}, com o nome ${this.getNome()} e idade ${this.getIdade()}`;
    }
}

class Ave extends Animal {
    constructor(nome, idade, tipoBico) {
        super(nome, idade);
        this.tipoBico = tipoBico;
    }

    info() {
        return `O animal é uma ave de bico ${this.tipoBico}, com o nome ${this.getNome()} e idade ${this.getIdade()}`;
    }
}

const mamifero = new Mamifero("cão", 1, "fofa");
const ave = new Ave("pombo", 1, "pequeno");

console.log(mamifero.info());
console.log(ave.info());
