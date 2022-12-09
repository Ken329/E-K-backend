import firebase from 'firebase/compat/app';
import db from '../database/firebaseConnectionHandler'

export const getMemo = async () => {
    try {
        const snapshot = await db.firestore().collection('memo').get()
        return snapshot.docs.map(doc => {
            const { updatedAt, createdAt, message } = doc.data()
            return {
                id: doc.id,
                updatedAt: updatedAt.toDate().toDateString(),
                createdAt: createdAt.toDate().toDateString(),
                message
            }
        });
    } catch (error) {
        throw new Error(error)
    }
}

export const createMemo = async (payload) => {
    try {
        payload.createdAt = firebase.firestore.FieldValue.serverTimestamp()
        payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp()

        await db.firestore().collection('memo').add(payload);

        const list = await getMemo()

        return { message: 'Successfully inserted memo data', list }
    } catch (error) {
        throw new Error(error)
    }
}

export const modifyMemo = async (payload) => {
    try {
        const { id, message } = payload
        const updatedData = {
            message,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }

        await db.firestore().collection('memo').doc(id).update(updatedData);

        const list = await getMemo()

        return { message: 'Successfully updated memo data', list }
    } catch (error) {
        throw new Error(error)
    }
}

export const removeMemo = async (payload) => {
    try {
        const { id } = payload

        await db.firestore().collection('memo').doc(id).delete();

        const list = await getMemo()

        return { message: 'Successfully deleted memo data', list }
    } catch (error) {
        throw new Error(error)
    }
}