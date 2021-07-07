import{makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(bool){
        this.user = bool
    }
}