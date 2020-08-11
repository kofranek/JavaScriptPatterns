const car = {
    wheel: 4,
    init(){
        console.log(`mám ${this.wheel} kola, můj vlastník je ${this.owner}`)
    }
}

const carWithOwner = Object.create(car,{
    owner: {
        value: 'Dmitrij'
    }
} )

//když použijeme object.create (jiný_objekt, { položka:vlastnost...})
//můžeme do vytvářeného objektu zahrnout 'jiný_objekt', který bude v položce '__proto__'



carWithOwner.init()

console.log(carWithOwner.__proto__===car);



