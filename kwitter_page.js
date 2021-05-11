var firebaseConfig = {
    apiKey: "AIzaSyBoqMjVTAb1QfuEaG1reiXpLaim7kEsJRw",
    authDomain: "kwitterproject-6dc31.firebaseapp.com",
    databaseURL: "https://kwitterproject-6dc31-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-6dc31",
    storageBucket: "kwitterproject-6dc31.appspot.com",
    messagingSenderId: "294545264331",
    appId: "1:294545264331:web:5fcf9973a19239086b554e",
    measurementId: "G-VVFGMMYDZH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0,
    });
    document.getElementById("msg").value = "";
  };
