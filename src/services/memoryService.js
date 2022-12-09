import db from '../database/firebaseConnectionHandler'
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = db.storage();

export const getMemory = async () => {
    try {
        const snapshot = await db.firestore().collection('memory').get()
        return snapshot.docs.map(doc => {
            const { name, question, hint } = doc.data()
            return {
                id: doc.id,
                name,
                question,
                hint
            }
        });

    } catch (error) {
        throw new Error(error)
    }
}

export const getMemoryWithId = async (payload) => {
    try {
        const { id, answer } = payload
        let images = []
        let list = {}

        const snapshot = await db.firestore().collection('memory').doc(id).get()
        const data = snapshot.data()
        if (data) {
            const { name, password } = data
            const check = password === answer;
            if (!check) {
                return { message: 'Your answer is wrong, please try again', list }
            }
            const storageRef = storage.ref(`/${name}`)
            const response = await storageRef.listAll();
            const { items } = response
            for (let i = 0; i < items.length; i++) {
                const image = await items[i].getDownloadURL()
                images.push(image)
            }
            list = { ...data, images, id }
            return { message: 'Success answer this question !!!', list }
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const createMemory = async (payload) => {
    try {
        const { name, question, password, hint, pictures } = payload

        for (let i = 0; i < pictures.length; i++) {
            storage.ref().child(`${name}/image-${i}`).putString(pictures[i], "data_url", { contentType: "image/jpeg" });
        }

        await db.firestore().collection('memory').add({
            name,
            question,
            password,
            hint
        });

        const list = await getMemory()

        return { message: 'Successfully inserted memory data', list }
    } catch (error) {
        throw new Error(error)
    }
}

export const modifyMemory = async (payload) => {
    try {
        const { id } = payload
        console.log(payload)
        await db.firestore().collection('memory').doc(id).update(payload);

        const list = await getMemory()

        return { message: 'Successfully updated memory data', list }
    } catch (error) {
        throw new Error(error)
    }
}

export const removeMemory = async (payload) => {
    try {
        const { id, name, length } = payload

        await db.firestore().collection('memory').doc(id).delete();

        for (let i = 0; i < length; i++) {
            var desertRef = storage.ref().child(`/${name}/image-${i}`);
            deleteObject(desertRef)
        }

        const list = await getMemory()

        return { message: 'Successfully deleted memory data', list }
    } catch (error) {
        throw new Error(error)
    }
}