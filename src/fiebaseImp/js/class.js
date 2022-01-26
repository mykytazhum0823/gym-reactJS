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

const collection_classes= "classes";

export const getClasses = () => {
    return getDocs(collection(db, collection_classes));
}

export const saveClass = async (id, duration, begins, ends, capacity)=>{
    return addDoc(collection(db, collection_classes),{
        id,
        duration,
        begins,
        ends,
        capacity
    })
    .then((data)=>{
        return {success:data.id, error: ''};
    })
    .catch((error)=>{
        return {success:'', error: error.message};
    })
}

export const updateClass = (docId, id, duration, begins, ends, capacity) =>{
    return updateDoc(doc(db, collection_classes, docId),{
            id,
            duration,
            begins,
            ends,
            capacity
        })
        .then(()=>{
            return {success:'success', error:''};
        })
        .catch((error)=>{
            return {success:'', error:error.message};
        })
}