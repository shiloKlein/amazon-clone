import {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc, setDoc
} from './firebase'

const dbColection = 'user'

export const userService = {
    login,
    signup
    , post, update, query, remove, getById
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
        
    } catch (err) {
        throw new Error(err.message)
    }
}

async function post(user) {
    try {
        // Add a new document in collection "cities" with "LA" as id
        console.log('user.email',user.email)
await setDoc(doc(db, dbColection, user.email),{...user});
        // const docRef = await addDoc(collection(db, dbColection), user);
        // update(docRef.id)
        // console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function update(id, orders) {
    const user = doc(db, dbColection, id);
    if (orders) await updateDoc(user, { prevOrders: orders });
else await updateDoc(user, { id})
    const newUser = await getById(id)

}
async function query() {
    const querySnapshot = await getDocs(collection(db, dbColection));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
async function getById(id) {
    // TODO:change the id variable to mail in all the relevent places
    const docRef = doc(db, dbColection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
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