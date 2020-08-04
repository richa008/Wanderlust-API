import * as Admin from 'firebase-admin';

Admin.initializeApp();

export const admin = Admin;
export const Database = Admin.firestore();

