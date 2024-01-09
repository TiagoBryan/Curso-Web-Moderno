function Pessoa(){
    this.idade = 0
    const self = this
    let teste = () => {self.idade++ 
        console.log(self.idade)}
    setInterval(teste/*.bind(this)*/, 1000)
}

new Pessoa