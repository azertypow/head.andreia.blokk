import {initializeApp} from "firebase/app"
import {getDatabase, onValue, ref, set} from "firebase/database"

export class FireBaseConnection {
    app = initializeApp({
        apiKey: "AIzaSyBAlCbGVd8YeRRWwj6RmrRz2qNrWt0G9Lk",
        authDomain: "head-creativecoding-andreia.firebaseapp.com",
        databaseURL: "https://head-creativecoding-andreia-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "head-creativecoding-andreia",
        storageBucket: "head-creativecoding-andreia.appspot.com",
        messagingSenderId: "14072775597",
        appId: "1:14072775597:web:73ae9680cdf3f69fe21724"
    })

    constructor() {
        // todo: https://firebase.google.com/docs/database/web/read-and-write
        writeUserData()
    }

    writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase(this.app);
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    

}