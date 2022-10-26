import {initializeApp} from "firebase/app"
import {get, getDatabase, ref, set} from "firebase/database"

export class FireBaseConnection {
    
    public readonly app = initializeApp({
        apiKey: "AIzaSyBAlCbGVd8YeRRWwj6RmrRz2qNrWt0G9Lk",
        authDomain: "head-creativecoding-andreia.firebaseapp.com",
        databaseURL: "https://head-creativecoding-andreia-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "head-creativecoding-andreia",
        storageBucket: "head-creativecoding-andreia.appspot.com",
        messagingSenderId: "14072775597",
        appId: "1:14072775597:web:73ae9680cdf3f69fe21724"
    })

    public readonly dataBase = getDatabase(this.app)
    public readonly databaseRef = ref(this.dataBase, 'players')

    constructor() {
        set(this.databaseRef, {
            coucou: 'hello'
        })
    }

    

}