import * as firebase from 'firebase';
import { firebaseConfig } from './firebase-config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalsRef = firebase.database().ref('goals');
export const completGoalsRef = firebase.database().ref('completGoals');