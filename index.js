class Coffee {
    constructor (obj = {}){
        this.bean = obj.bean,
        this.method = obj.method,
        this.category = obj.category
    }
}

//class extend
class Cafe extends Coffee {
    constructor (obj = {}){
        super(obj)
        this.name= obj.name 
    }
}
const detailCAfe = new Cafe ({
    bean : ['Gayo red honey', {robusta : "kapal api"}],
    method : 'Manual Brewing',
    category : 'Sidikalang',
    name : 'Sevendays'
})
class Location extends Cafe{
    constructor(obj ={}){
        super(obj)
        this.long=obj.long,
        this.lat = obj.lat
    }

}
const NowLocation = new Location({
    bean : ['Gayo red honey', {robusta : "kapal api"}],
    method : 'Manual Brewing',
    category : 'Sidikalang',
    name : 'Sevendays',
    long : '23248374',
    lat : '93488237764'
})
console.log(NowLocation);
