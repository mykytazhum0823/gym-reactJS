// Users CRUD
import { jsonEval } from '@firebase/util';
import firebase, {db} from '../main.js'

const collection_user = "users";

export const signUpWithEmailAndPassword = (email, password, type, mobile, membership) => {
    let token = 0, userId;
    let error = '';
    let data;
    data = firebase 
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idtoken)=>{
            token = idtoken;
            saveUser(userId, email, password, type, mobile, membership);
            return {token:token, error:''};
        })
        .catch((err)=>{
            if(err.code === 'auth/email-already-in-use'){
                error = 'email already in use';
            }
            else{
                error = 'Something went wrong, please try again';
            }
            return {token:token, error:err};
        });
    return data;
}




const getUsers = () => {
    return db.collection(collection_user).get();
}

const getUser = (id) => {
    return db.collection(collection_user).doc(id).get();
}

const saveUser = (uid, username, password, type, mobile, membership, activated = true) => {
    db.collection(collection_user).doc(uid).set({
        username,
        password,
        type,
        mobile,
        membership,
        activated
    });
}

const updateUser = (id, updatedUser) => {
    db.collection(collection_user).doc(id).update(updatedUser);
}

const deleteUser = (id) => {
    db.collection(collection_user).doc(id).delete();
}

const isActivatedUser = async (id) => {
    const usr = await getUser(id);
    const usr_data = usr.data(); 
    return usr.activated;
}

const deActivatedUser = async (id) => {
    const usr = await getUser(id);
    const usr_data = usr.data(); 
    usr_data.activated = !usr_data.activated;
    updateUser(id, usr_data);
}

const signInWithEmailAndPassword = async (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var user_profile = getUser(user.uid);
        return user_profile.data();
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}