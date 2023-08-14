function menucall()
{
    // const container = document.getElementById('menu_fetch');
    fetch('/menu_fetch')
    .then((items)=>{
      items.json()
      .then((val)=>{
        // console.log('json --' + val);
        document.getElementById('menu_fetch').innerHTML = '';
        for (let i=0; i<val.length; i++){
          
          let cat = document.querySelector(".category-search").value;
          if(val[i].category.toLowerCase()===cat.toLowerCase())
          {
            console.log(val[i]);
            document.getElementById('menu_fetch').innerHTML += `
            <article class="menu-item" width="220px">
              <img src=${val[i].link || "https://th.bing.com/th/id/OIP.hh1iTLMD25YyLcrrbtmemwEyDM?pid=ImgDet&rs=1"} loading="lazy" alt="Product image">
              <div class="item-info">
              <figure>
                  <h2 class='item-name' id="item">${val[i].food_name}</h2>
                  <div class="item-category">${val[i].category}</div>
                  <div class="flex" style="margin-top: 10px;">
                      
                      <p>${val[i].quantity}</p>
                  </div>
              </figure>
              <hr style="margin: 10px 0;">
              <div class="menu-cart-functionality">
                  <div class="price" id="price">&#8377;${val[i].price}</div>
                  <input class="item-nos" type="number" name="integerInput" value="1" style="width: 50px;">
                  <div class="cart-btn-container">
                      <button onclick='addToCart(this)' class="bag-btn" id="add-to-cart-btn" data-id=1>Add to Cart</i></button>   
                  </div>
                </div>
              </div>
            </article>
            `
          }
   
        }
          
      }).catch((err)=>{
        console.log('err '+err);
      });
      
    
    })

    
    .catch(function (error) {
      // Error occurred while making the request
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });

    
  }
  // menucall();

  function renderData(data) {
    
  
    // Iterate over the data and create HTML elements to display it
    data.forEach((item) => {
      const element = document.createElement('p');
      element.textContent = `Name: ${item.name}, Age: ${item.age}`; // Customize based on your data structure
      container.appendChild(element);
    });
  }
  
  // --- Authentication Part ---
  // Your web app's Firebase configuration
  /*var firebaseConfig = {
    apiKey: "AIzaSyDBn5GMIvsqhTPMVAeylq-I_2R8SSJYzmI",
    authDomain: "js-login-form.firebaseapp.com",
    projectId: "js-login-form",
    storageBucket: "js-login-form.appspot.com",
    messagingSenderId: "1039987076182",
    appId: "1:1039987076182:web:e51f940647b55c0cd7dff7",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  
  
  // SignUp Form ID's -
  const myForm = document.getElementById("main-form");
  const googleSignUp = document.querySelectorAll("#google-signUpIn");
  const githubSignUp = document.querySelectorAll("#github-signUpIn");
  const facebookSignUp = document.querySelectorAll("#facebook-signUpIn");
  
  // SignIn Form ID's -
  const signInForm = document.getElementById('signIn-form');

  // Sign Up Methods -
  class signUpMethods {
    // Basic LogIn System
    builtInSignUp(){
      const userName = myForm["sign-up-full-name"].value;
      const email = myForm["sign-up-email"].value;
      const password = myForm["sign-up-password"].value;
      const repassword = myForm["sign-up-repassword"].value;
      const phoneNumber = myForm["sign-up-number"].value;

      // CheckStuff -
      if (password != repassword || password === ''){
        Swal.fire('Re Entered password is not same as entered password or field empty')
      }
      else if (phoneNumber.length != 10){
        Swal.fire('Phone Number is not valid')
      }
      else {
        // Firebase Auth
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          // Save Data to firebase storage -
          saveDatabase.UserfirebaseDatabase(userName, email, password, phoneNumber);
          Swal.fire({
            icon: 'success',
            title: 'Account Created Successfully. Please LogIn To order Delicious Cuisine',
          })
        })
        .catch((error) => Swal.fire("" + error));
      }
    }
  
    // Google SignUp Method -
    googleSignUpIn(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result.email);
          this.notifyUser();
          this.firebaseAuthRedirect();
        })
        .catch((error) => Swal.fire("" + error));
    }
  
    // FaceBook SignUp Method -
    facebookSignUpIn(){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("email, user_birthday");
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.notifyUser();
          this.firebaseAuthRedirect();
        })
        .catch((error) => Swal.fire("" + error));
    }
  
    // GitHub SignUp Method -
    githubSignUpIn(){
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("email, password");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.notifyUser();
          this.firebaseAuthRedirect();
        })
        .catch((error) => Swal.fire("" + error));
    }

    static authRedirecting() {
      window.setTimeout(() => {
        window.location.replace('./client-side.html');
      }, 500)
    }

    // Notify User
    notifyUser() {
      window.setTimeout(function(){
        Swal.fire({
          icon: 'success',
          title: 'Account Signed In Successfully',
        })
      },1250)
    }

    firebaseAuthRedirect(){
      firebase.auth().onAuthStateChanged(function(user) {
        // If user is registered -
        user ?  window.location.replace('./client-side.html') : console.log('none');
      });
    }
  }

  // Sign In Methods -
  class signInMethods {
    builtInSignIn(){
    const email =  document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    console.log('called');

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      Swal.fire({
        icon: 'success',
        title: 'Logged In',
      })
      signUpMethods.authRedirecting()
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: '' + error,
      })
    });
    }
  }

  // Save Data - To Firebase
  class saveDatabase {
    // Authentication Details -
    static UserfirebaseDatabase(userName, email, password, phoneNumber) {
      const userID = makeUserDataID(email);     
      // Create User data in firebase -
      console.log('database called');
      firebase.database().ref('User_Data/' + userID).set({
        User_Name: userName,
        Email: email,
        Password: password,
        Phone_Number: phoneNumber,
      });
    }

    // Cart Detailes
  }

  // When HTML & Other code is done -
  document.addEventListener("DOMContentLoaded", () => {
    // Sign Up Mehtods -
    const signUp = new signUpMethods();

    // Main Sign Up Form
    if (myForm) {
      myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signUp.builtInSignUp();
      });
    }

    // Google Sign Up Form
    if (googleSignUp) {
      googleSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          signUp.googleSignUpIn();
        });
      });
    }

    // GitHub Sign Up Form
    if (githubSignUp) {
      githubSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
        e.preventDefault();
        signUp.githubSignUpIn();
      })
    });
    }

    // Facebook Sign Up Form
    if (facebookSignUp) {
      facebookSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          signUp.facebookSignUpIn();
        });
      });
    }

    // Sign In Methods -
    const signIn = new signInMethods();
    if (signInForm){
      // Main Sign In Form
      signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signIn.builtInSignIn();
      });
    }

    // LogOut User -
    const logout = document.querySelectorAll('#userlogout');
    if (logout){
      logout.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          Swal.fire({
            icon: 'success',
            title: 'Logged Out Successfully',
          })
          firebase.auth().signOut().then(() => {

            // window.location.replace("https://mit-canteen.netlify.app/index.html")
 
            window.location.replace("./index.html")

          });
        });
      })
    }

  });

// Makes User ID Through EmailID Provided By User
let userDataID = '';
function makeUserDataID(userEmailID){
  // let userDataID = '';
  for (i=0; userEmailID.length; i++){
    if (userEmailID[i] != '@') { userDataID = userDataID + userEmailID[i] }
    else { break }
  }
  return userDataID
}*/

// const { MongoClient } = require('mongodb');

// const mongoURI = 'mongodb+srv://admin: admin@cluster0.epqxvmj.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
// const dbName = 'FISAT Cafeteria'; // Replace with your MongoDB database name

// // Function to save user data to MongoDB
// async function saveUserToMongoDB(userName, email, password, phoneNumber) {
//   try {
//     const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
//     await client.connect();

//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);

//     // Save user data to MongoDB collection
//     const userDataCollection = db.collection('User_Data');
//     await userDataCollection.insertOne({
//       User_Name: userName,
//       Email: email,
//       Password: password,
//       Phone_Number: phoneNumber,
//     });

//     console.log('User data saved to MongoDB');
//     client.close();
//     console.log('Disconnected from MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// // Update the signUpMethods class
// class signUpMethods {
//   // ...

//   // Save Data to MongoDB
//   static async saveUserToMongoDB(userName, email, password, phoneNumber) {
//     try {
//       await saveUserToMongoDB(userName, email, password, phoneNumber);
//       Swal.fire({
//         icon: 'success',
//         title: 'Account Created Successfully. Please Log In To order Delicious Cuisine',
//       });
//     } catch (error) {
//       Swal.fire("" + error);
//     }
//   }

//   // ...
// }
