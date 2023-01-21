import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc } from './firebase'

export const productService = {
    postProduct, query, getById, remove,
    saveCartLocaly, getCartLocaly, removeFromCartLocaly, removeCartLocaly, makeId
}
const dbColection = 'product'


async function postProduct(product) {
    try {
        // post
        const docRef = await addDoc(collection(db, dbColection), product);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
// async function putProduct(id) {
//     const washingtonRef = doc(db, dbColection, id);
//     // Set the "capital" field of the city 'DC'
//     await updateDoc(washingtonRef, {
//         capital: true
//     });
// }
// async function query() {
//     const products = []
//     const querySnapshot = await db.collection(dbColection).get();
//     querySnapshot.forEach(async (doc) => {
//         console.log('doc', doc.id)
//         await doc.ref.update({ id: doc.id });
//         products.push(doc.data())
//     });
//     return products;
// }
async function query() {
    const products = []
    const querySnapshot = await getDocs(collection(db, dbColection));
    querySnapshot.forEach(async (doc) => {
        products.push(doc.data())
    });
    return products;
}
// async function update(id, orders) {
//     const user = doc(db, dbColection, id);
//     if (orders) await updateDoc(user, { prevOrders: orders });
//     else await updateDoc(user, { id })
//     const newUser = await getById(id)

// }
async function getById(id) {
    const docRef = doc(db, dbColection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}

async function remove(id) {
    await deleteDoc(doc(db, dbColection, id));
}

function getCartLocaly() {
    return JSON.parse(localStorage.getItem('cart'))
}

function saveCartLocaly(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function removeFromCartLocaly(productId) {
    const cart = getCartLocaly()
    const idx = cart.findIndex(item => item.id === productId)
    cart.splice(idx, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function removeCartLocaly() {
    localStorage.removeItem('cart')
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

async function boo() {
    // try {
    //     // post
    //     const docRef = await addDoc(collection(db, "product"), {
    //         category: "computers",
    //         isBestSeller: true,
    //         isAmazonChoise: false,
    //         imgUrl: "https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673256789/amazon/product/keyboard_ksuxek.jpg",
    //         description: "Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black",
    //         price: 20,
    //         rate: 4,
    //         id: "102"
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }
    // const querySnapshot = await getDocs(collection(db, "product"));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });

    const docRef = doc(db, "product", "NCCd1jdxzsfH1SfHROMK");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    // // put
    // const washingtonRef = doc(db, "cities", "DC");
    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //     capital: true
    // });
    // // delete
    // await deleteDoc(doc(db, "cities", "DC"));
}

// export {
//     postProduct, putProduct, query, getById, remove
// }