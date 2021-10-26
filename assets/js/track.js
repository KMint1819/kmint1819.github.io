(function($) {
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
    // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
    const firebaseConfig = {
        apiKey: "AIzaSyDacMl56XwbkC66Sghjy7ZfLY8SjdxXYns",
        authDomain: "kmint-portfolio.firebaseapp.com",
        projectId: "kmint-portfolio",
        storageBucket: "kmint-portfolio.appspot.com",
        messagingSenderId: "1096023091040",
        appId: "1:1096023091040:web:8a27bf53c5ba68a7a22005",
        measurementId: "G-DL6KSJZ6FB",
        databaseURL: "https://kmint-portfolio-default-rtdb.firebaseio.com/"
    };
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    $.getJSON('https://json.geoiplookup.io/?callback=?', (data) => {
        data['time'] = moment().format('YYYY/MM/DD HH:mm:ss');
        console.log(JSON.stringify(data, null, 2));
        database.ref('/tracks').push(data);
    });
})(jQuery);