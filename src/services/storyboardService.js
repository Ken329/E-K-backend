import db from '../database/firebaseConnectionHandler';

const storage = db.storage();

export const getStoryboard = async () => {
  try {
    const snapshot = await db
      .firestore()
      .collection('storyboard')
      .orderBy('date', 'desc')
      .get();
    let storybaords = snapshot.docs.map((doc) => {
      const { title, description, date } = doc.data();

      return {
        id: doc.id,
        title,
        description,
        date,
      };
    });

    for (let i = 0; i < storybaords.length; i++) {
      const storybaord = storybaords[i];
      const imageUrl = await storage
        .ref(`/storyboard/${storybaord.title}`)
        .getDownloadURL();
      storybaords[i].image = imageUrl;
    }

    return storybaords;
  } catch (error) {
    throw new Error(error);
  }
};

export const createStoryboard = async (payload) => {
  try {
    const { title, description, date, picture } = payload;

    await storage
      .ref()
      .child(`storyboard/${title}`)
      .putString(picture[0], 'data_url', {
        contentType: 'image/jpeg',
      });

    await db.firestore().collection('storyboard').add({
      title,
      description,
      date,
    });

    const list = await getStoryboard();

    return { message: 'Successfully inserted storyboard data', list };
  } catch (error) {
    throw new Error(error);
  }
};
