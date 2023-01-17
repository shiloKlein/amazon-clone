import {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc
} from './firebase'
const dbColection = 'user'

export const userService = {
    login,
    signup
    , post, update, query, getById, remove
}

async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log('err', err)
        // throw new Error(err.massege)
    }

}
async function signup(email, password) {
    try {
        const authRes = await createUserWithEmailAndPassword(auth, email, password)
        console.log('auth', authRes)
    } catch (err) {
        throw new Error(err.message)
    }
}

async function post() {
    try {
        // post
        const docRef = await addDoc(collection(db, dbColection), {
          
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function update(id) {
    const washingtonRef = doc(db, dbColection, id);
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        capital: true
    });

}
async function query() {
    const querySnapshot = await getDocs(collection(db, dbColection));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
async function getById(id) {
    const docRef = doc(db, dbColection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
async function remove(id) {
    await deleteDoc(doc(db, dbColection, id));
}
// export {
//     postUser, putUser, query, getById, remove
// }