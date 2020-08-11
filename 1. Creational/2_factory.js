class SimpleMembrership{
    constructor (name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembrership{
    constructor (name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembrership{
    constructor (name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {  //zapouzdřené vytváření objektů
    static list = {
        simple: SimpleMembrership,
        standard: StandardMembrership,
        premium: PremiumMembrership
    }

    create(name, type='simple'){
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)

        //dodáváme  další rozšíření funkcionálu
        member.type = type
        member.define = function (){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory() //factory řeší uvnitř sebe, jaký objekt vytvoří

const  members = [
    factory.create('Vladilen','simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasilisa', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Petr')
]


console.log(members);

members.forEach(m=>m.define())