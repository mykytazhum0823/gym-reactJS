import firebase, {auth, db} from '../main';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    FacebookAuthProvider,
    OAuthProvider,
    signInWithPopup,
    signOut,
    RecaptchaVerifier,
    signInWithPhoneNumber
    } from 'firebase/auth';
import { 
    collection,
    doc, 
    addDoc,
    updateDoc, 
    setDoc, 
    getDocs, 
    getDoc, 
    deleteDoc,
    query,
    where,
    limit
    } from 'firebase/firestore';

const userType = ['','trainer', '', 'gym', 'admin', 'customer'];
/**
 * User Type 
 * trainer 1
 * gym owner 3
 * admin 4
 * customer 5
 */
const collection_user = "users";

const getUser = (id) => {
    return getDoc(doc(db, collection_user, id));
}

const saveUser = async (uid, username,type, mobile, membership, activated = true) => {
    await setDoc(doc(db, collection_user, uid),{
        username,
        type,
        mobile,
        membership,
        activated
    });
}

const addUser = async (username) =>{
    await addDoc(collection(db, collection_user),{
        username: username,
        type: 5,
        activated:true
    });
}

const updateUser = async (id, updatedUser) => {
    await updateDoc(doc(db, collection_user, id), updatedUser);
}

const deleteUser = async (id) => {
    await deleteDoc(doc(db, collection_user, id));
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


export const getUsers = () => {
    return getDocs(collection(db, collection_user));
}

export const saveNewUser = async (username,type, mobile, membership)=>{
    return addDoc(collection(db, collection_user),{
        username,
        type,
        mobile,
        membership,
        activated:true
    })
    .then((data)=>{
        return {success:data.id, error: ''};
    })
    .catch((error)=>{
        return {success:'', error: error.message};
    })
}

export const changeUser = (uid, username,type, mobile, membership)=>{
    return setDoc(doc(db, collection_user, uid),{
        username,
        type,
        mobile,
        membership,
        activated:true})
        .then(()=>{
            return {success:'success', error:''}
        })
        .catch((error)=>{
            return {success:'', error:error.message}
        })
}


export const signUpWithEmailAndPassword = (email, password, mobile) => {
    let token = 0, userId;
    let error = '';

    return createUserWithEmailAndPassword(auth, email, password)
        .then((data)=>{
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idtoken)=>{
            token = idtoken;
            saveUser(userId,email,5, mobile, '');
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
}

export const logInWithEmailAndPassword =  (email, password) => {
    let token = '';
    let userId = 0;

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            userId = userCredential.user.uid;
            return userCredential.user.getIdToken();
        })
        .then((idtoken)=>{
            token = idtoken;
            return getUser(userId);
        })
        .then((userData)=>{
            return userData.data();
        })
        .then((data)=>{
            data = {...data, type:userType[data.type]};
            return {profile:data, error:'', token: token};
        })
        .catch((error) => {
            return {profile:'', error: error.message, token:''};
        });
}

export const logOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        console.log(error)
    });
}


 ///------Login with Social Account -------------

 // Login with google accont

 const provider = new GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const loginwithGoogleAccount = ()=>{
    let email = '';
    let token = 0;
    return signInWithPopup(auth, provider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accesstoken = credential.accessToken;
        const user = result.user;

        token = credential.idToken;
        email = user.email;
        const q = query(collection(db, collection_user), where("username", "==", user.email), limit(1));
        return getDocs(q);
    })
    .then((docs)=>{
        if(docs.size != 0)
        {
            let profile
            docs.forEach((doc)=>{
                profile = {...doc.data(), type:userType[doc.data().type]};
            })
            return {profile:profile, error:'', token: token};
        }
        else{
            addUser(email);
            return {profile:{username:email, type:userType[5]}, error:'', token: token};
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        return {profile:'', error: error.message, token:''};
      });
}

// Login with facebook
// const fb_provider = new FacebookAuthProvider();

// export const loginWithFacebook = ()=>{
//     let email = '';
//     let token = '';
//     signInWithPopup(auth, fb_provider)
//     .then((result) => {
//         const user = result.user;
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accesstoken = credential.accessToken;
//         console.log(user.toJSON())

//         email = user.email;
//         token = credential.idToken;
//         const q = query(collection(db, collection_user), where("email", "==", user.email), limit(1));
//         return getDocs(q);
//     })
//     .then((docs)=>{
//         if(docs.size != 0)
//         {
//             docs.forEach((doc)=>{
//                 return {profile:doc.data(), error:'', token: token};
//             })
//         }
//         else{
//             addUser(email);
//             return {profile:{username:email, type:5}, error:'', token: token};
//         }
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = FacebookAuthProvider.credentialFromError(error);
//         console.log(error);
//         return {profile:'', error: error.message, token:''};
//     });
// }

// Login with Apple

// const appleProvider = new OAuthProvider('apple.com');
// appleProvider.addScope('email');
// appleProvider.addScope('name');

// export const loginWithApple = () => {
//     let token = '';
//     let email = '';

//     signInWithPopup(auth, appleProvider)
//         .then((result) => {
//             const user = result.user;

//             // Apple credential
//             const credential = OAuthProvider.credentialFromResult(result);
//             const accessToken = credential.accessToken;
//             console.log(user.toJSON())

//             token = credential.idToken;
//             email = user.email;
//             const q = query(collection(db, collection_user), where("email", "==", user.email), limit(1));
//             return getDocs(q);
//         })
//         .then((docs)=>{
//             if(docs.size != 0)
//             {
//                 docs.forEach((doc)=>{
//                     return {profile:doc.data(), error:'', token: token};
//                 })
//             }
//             else{
//                 addUser(email);
//                 return {profile:{username:email, type:5}, error:'', token: token};
//             }
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.email;
//             // The credential that was used.
//             const credential = OAuthProvider.credentialFromError(error);
//             console.log(error);

//             return {profile:'', error: error.message, token:''};
//         });

// }

// Login with Phone

// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//     //   onSignInSubmit();
//     }
//   }, auth);
// // const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// export const loginWithPhone = (phoneNumber)=>{
//     let token = '';
//     let email = '';
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });

// }
