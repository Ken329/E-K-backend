import db from '../database/firebaseConnectionHandler';

export const getTodo = async () => {
  try {
    const snapshot = await db
      .firestore()
      .collection('todo')
      .orderBy('checked', 'asc')
      .get();
    return snapshot.docs.map((doc) => {
      const { message, checked } = doc.data();
      return {
        id: doc.id,
        message,
        checked,
      };
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const createTodo = async (payload) => {
  try {
    await db.firestore().collection('todo').add(payload);

    const list = await getTodo();

    return { message: 'Successfully inserted todo data', list };
  } catch (error) {
    throw new Error(error);
  }
};

export const modifyTodo = async (payload) => {
  try {
    const { id, checked } = payload;
    const updatedData = {
      checked,
    };

    await db.firestore().collection('todo').doc(id).update(updatedData);

    const list = await getTodo();

    return { message: 'Successfully updated todo data', list };
  } catch (error) {
    throw new Error(error);
  }
};
