import{makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
        this._type = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Смартфоны'}
        ]
        this._brands= [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'}
        ]
        this._devices = [
            {id:1, name:'Iphone 12 pro', price: '109000', rating:5, img:``},
            {id:2, name:'Iphone 11 pro', price: '56000', rating:5, img:``},
            {id:3, name:'Iphone 11 pro', price: '56000', rating:5, img:``},
            {id:4, name:'Iphone 11 pro', price: '56000', rating:5, img:``},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._type = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._type
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}