import firebase, {auth, db} from '../main';
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

const collection_gym = "gyms";

export const getGyms = () => {
    return getDocs(collection(db, collection_gym));
}

export const getGym = (id) => {
    return getDoc(doc(db, collection_gym, id));
}

export const createGymId =  ()=>{
    return addDoc(collection(db, collection_gym),{})
            .then((data)=>{
                return {id:data.id};
            })
            .catch((error)=>{
                console.log(error);
            })
}

export const deleteGymById = async(id)=>{
    await deleteDoc(doc(db, collection_gym, id));
}

export const saveGym = (id, name, lng, lat)=>{
    return setDoc(doc(db, collection_gym, id),{
                name:name,
                lat:lat,
                lng:lng,
                activated:true,
            })
            .then(()=>{
                return {success:'success', error:''};
            })
            .catch((error)=>{
                return {error:error.message, success:''};
            })
}

export const updateGym = (id, name, owner, membsership, trainers, classes) =>{
    return updateDoc(doc(db, collection_gym, id),{
            name:name,
            owner:owner,
            membsership:membsership,
            trainers:trainers,
            classes:classes
        })
        .then(()=>{
            return {success:'success', error:''};
        })
        .catch((error)=>{
            return {success:'', error:error.message};
        })
}
