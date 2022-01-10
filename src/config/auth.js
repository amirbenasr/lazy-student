import firebase from "../config/firebase_init";
const handleAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      return error;
    });
};

export default handleAuth;
