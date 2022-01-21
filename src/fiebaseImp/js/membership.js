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
    limit,
    orderBy
    } from 'firebase/firestore';

const collection_membership = "memberships";

export const getMemberships = () => {
    const membeship_ref = collection(db, collection_membership);
    const q = query(membeship_ref, orderBy('price', 'desc'));
    return getDocs(q);
}

export const deleteMembership = async (id)=>{
    await deleteDoc(doc(db, collection_membership, id));
}

export const saveMembership = async (name,description, price)=>{
    return addDoc(collection(db, collection_membership),{
        name,
        description,
        price
    })
    .then((data)=>{
        return {success:data.id, error: ''};
    })
    .catch((error)=>{
        return {success:'', error: error.message};
    })
}

export const changeMembership = (id, name,description, price)=>{
    return setDoc(doc(db, collection_membership, id),{
            name,
            description,
            price
        })
        .then(()=>{
            return {success:'success', error:''}
        })
        .catch((error)=>{
            return {success:'', error:error.message}
        })
}