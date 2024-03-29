import jwt from 'jsonwebtoken';

export const login = async (payload, bypass = false) => {
  try {
    if (bypass || payload.date === '2022-05-07') {
      const token = jwt.sign(
        {
          sub: 'E+K',
        },
        process.env.JWT_SECRET
      );
      return { loggedIn: true, token };
    }
    return { loggedIn: false, message: 'Wrong date has been choosen' };
  } catch (error) {
    throw new Error(error);
  }
};
