import * as firebase from 'firebase';
import {
    firebaseConfig
} from '../configs/firebase';

let instance = null;

class FirebaseService {
    constructor() {
        if (!instance) {
            if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
            this.app = firebase;
            instance = this;
        }
        return instance;
    }
}

const FirebaseService = new FirebaseService().app;
export default FirebaseService;