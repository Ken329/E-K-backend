import { randomBytes } from 'crypto';

export const generateRandomBytes = () => randomBytes(64).toString('hex');
