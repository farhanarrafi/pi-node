var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCkBTch7JluECyhYUcw_lQzPwBzgRz1XdM",
    authDomain: "raspberry-sf.firebaseapp.com",
    databaseURL: "https://raspberry-sf.firebaseio.com",
    projectId: "raspberry-sf",
    storageBucket: "raspberry-sf.appspot.com",
    messagingSenderId: "201035736094"
};
firebase.initializeApp(config);

var db= {
    components: function () {
        return firebase.database().ref('components');
    },
    getComponent: function (id) {
        return firebase.database().ref('components/' + id)
    },
    getComponentStatus: function (id) {
        return firebase.database().ref('components/' + id + '/status')
    },
    get : function (table, row) {
        return firebase.database().ref(table + '/' + row);
    },
    getKey : function () {
        return firebase.database().ref('components').push().key;
    }
};

module.exports = db;