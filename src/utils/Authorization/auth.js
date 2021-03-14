/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import '@firebase/firestore';
import '@firebase/auth';
import { auth, db } from '../FirebaseDB/FirebaseDB';

import { getErrors } from './authErrorEnum';

import store from '../../index'
import { registrationSuccess } from '../../redux/actions'


// listen for auth status changes

export default class Auth {
  AuthStateChanged() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // debugger
        localStorage.setItem('uidTravel', user.uid);
      } else {
        // setupUI();
        localStorage.removeItem('uidTravel');
      }
    });
  }

  goSignUp() {
    this.AuthStateChanged();
    // signup
    // const signupForm = document.querySelector('#form-singup');
    document.querySelector('#registration-btn-regForm').addEventListener('click', () => {
      // get user info
      const mail = document.querySelector('#login-reg-form').value;
      const password = document.querySelector('#password-reg-form').value;
      const firstName = document.querySelector('#user-name').value;
      const secondName = document.querySelector('#user-surname').value;

      // sign up the user & add firestore data
      auth
        .createUserWithEmailAndPassword(mail, password)
        .then(cred =>
          db.collection('Users').doc(cred.user.uid).set({
            firstName,
            secondName,
            mail,
            password,
          }),
        )
        // .then(() =>
        //   fetch('/api/sendMail', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ mail, name: document.querySelector('#user-name').value }),
        //   }),
        // )
        .then(() => {
          localStorage.setItem('isAuth', 'true');
          store.dispatch(registrationSuccess())
        })
        .catch(er => {
          localStorage.setItem('isAuth', 'false');
          document.querySelector('#errServ').innerHTML = getErrors(er.code) || er.message;
        });
    });
  }

  // static goLogout() {
  //   // logout
  //   const logout = document.querySelector('#logout');
  //   logout.addEventListener('click', () => {
  //     auth.signOut();
  //     localStorage.removeItem('uidTravel');
  //   });
  // }

  goLogin() {
    this.AuthStateChanged();
    const checkStatus = status => {
      db.collection('Users').doc(status).get();
      localStorage.setItem('isAuth', 'true');
      store.dispatch(registrationSuccess())
      // .then((doc) => {
      //   if (doc.data().type === 'student') {
      //     document.location.href = './main/student/results';
      //   }
      //   if (doc.data().type === 'admin') {
      //     document.location.href = './main/admin/users';
      //   }
      //   if (doc.data().type === 'teacher') {
      //     document.location.href = './main/teacher/group';
      //   }
      // });
    };
    // login
    // const loginForm = document.querySelector('#form-login');
    document.querySelector('#login-btn').addEventListener('click', () => {

      // debugger

      // get user info
      const mail = document.querySelector('#login').value;
      const password = document.querySelector('#password').value;

      // log the user in
      auth
        .signInWithEmailAndPassword(mail, password)
        .then(cred => {
          checkStatus(cred.user.uid);
          // localStorage.setItem('isAuth', 'true');
        })
        .catch(er => {
          document.querySelector('#errServ').innerHTML = getErrors(er.code) || er.message;
        });
    });
  }
}
