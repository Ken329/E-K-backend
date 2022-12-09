import firebase from 'firebase/compat/app';
import db from '../database/firebaseConnectionHandler'

export const getReminder = async () => {
    try {
        const snapshot = await db.firestore().collection('reminder').get()
        return snapshot.docs.map(doc => {
            const { title, date, message, type } = doc.data()
            return {
                id: doc.id,
                title,
                date,
                message,
                type
            }
        });
    } catch (error) {
        throw new Error(error)
    }
}

export const createReminder = async (payload) => {
    try {
        await db.firestore().collection('reminder').add(payload);

        const list = await getReminder()

        return { message: 'Successfully inserted reminder data', list }
    } catch (error) {
        throw new Error(error)
    }
}

export const removeReminder = async (payload) => {
    try {
        const { id } = payload

        await db.firestore().collection('reminder').doc(id).delete();

        const list = await getReminder()

        return { message: 'Successfully deleted reminder data', list }
    } catch (error) {
        throw new Error(error)
    }
}