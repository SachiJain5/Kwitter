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

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  };

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }