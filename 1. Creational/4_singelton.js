class Database{
    constructor(data){
        console.log('Database.exists',Database.exists);
        if (Database.exists){
            //když instance existuje, konstruktor vrátí odkaz na existující instanci
            return Database.instance
        }
        //když to ještě neexistuzje - proinicializuju instanci
        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData(){
        return this.data
    }
}

mongo = new Database('MongoDB')
console.log(mongo.getData())
mySQL = new Database('MySQL')
console.log(mySQL .getData())