//  --- Intro NavBar ---
const previewNavbar = document.querySelector("#preview-navbar");
if (previewNavbar) {
  previewNavbar.innerHTML = `
  <div class="flex text-center jc-ai-center">
  <!-- Left Navigation -->
    <div class="site-title flex align-items-left">
        <a class="logo" href="#">
          <img src="static/images/logo2-removebg-preview.png" alt="Logo">
        </a>
        <div class="fisatc">
            <a href="/index.html"><h1><span style= "color:#b16c23; font-size:40px; font-family:audrey;"><b>ZEST</b></span> <span  style="color:lightsteelblue ;font-family: timesnewroman;">The flavour of mind</span></h1></a>
        </div>
        <!-- Toggle Bars -->
        <div class="toggle-bars mybar">
            <div class="bars bar-1"></div>
            <div class="bars bar-2"></div>
            <div class="bars bar-3"></div>
        </div>
    </div>
    <!-- Right Navigation -->
    <nav class="site-nav flex right-nav align-items-right">
        
            <li><a href="/index.html"><i class="fas fa-home"></i> Home</a></li>
            <!-- <li><a href="/our-vision.html"><i class="far fa-eye"></i> Our Vision</a></li> -->
        

          <div>
            <button  class="btn" onclick="window.location.href = 'welcome'; id="sign-modal">Log In</button>
            <button  class="btn" id="signup-modal">Sign Up</button>
          </div>
        
    </nav>
</div>

    `;
}

//  --- Intro Mobile NavBar ---
const mobPreviewNavbar = document.querySelector("#mob-preview-navbar");
if (mobPreviewNavbar) {
  mobPreviewNavbar.innerHTML = `
        <nav class="nav container">
            <ul class="mob-ul">
                <li><a href="/index.html">Home</a></li> 
                <!-- <li><a href="/our-vision.html">Our Vision</a></li> -->
                <button class="btn" id="sign-modal">Log In</button>
                <button class="btn" id="signup-modal">Sign Up</button>
            </ul>
        </nav>
    `;
}

// Toggle Bars Switch
const toggleBars = document.querySelector(".toggle-bars");
const mobUI = document.querySelector(".mob-ul");

// Toggle Close/Open Function
if (toggleBars) {
  toggleBars.addEventListener("click", () => {
    toggleBars.classList.toggle("change");
    mobUI.classList.toggle("mob-nav-active");
  });
}

// Best Dishes Section
var bestDishes = [
 {
    title: "Alfam Chicken",
    rating: 4,
    imgURL: "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/2/14/alfaham.jpg.transform/onm-articleimagemob/image.jpg",
    description:
      "Sumptuous delicious food baked in our cafe with curated ingredients",
    price: 100,
  },
  {
    title: "Noodles",
    rating: 5,
    imgURL: "http://yesofcorsa.com/wp-content/uploads/2015/08/2627_noodles.jpg",
    description:
      "Sumptuous delicious food baked in our cafe with curated ingredients",
    price: 75,
  },
  {
    title: "Fried Rice",
    rating: 5,
    imgURL: "https://i2.wp.com/www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-2.jpg?resize=680%2C1020",
    description:
      "Sumptuous delicious food baked in our cafe with curated ingredients",
    price: 100,
  },

];
const bestDishesCont = document.querySelector("#best-dishes-container");
function bestDishesHero() {
  bestDishes.forEach((index) => {
    var div = document.createElement("div");
    div.innerHTML = `
            <a href="#" class="card text-center m-2">
                <h2>${index.title}</h2>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <img src="${index.imgURL}" loading="lazy" alt="Canteen Dishes">
                <p>${index.description}</p>
                <h3 class="md">&#8377; ${index.price}</h3>
            </a>
        `;
    if (bestDishesCont) {
      bestDishesCont.appendChild(div);
    }
  });
}
bestDishesHero();

// --- Sign In Modal ---
const signInModalbtn = document.querySelectorAll("#sign-modal");
const signModal = document.querySelector(".sign-modal");

// --- Sign Up Modal ---
const signUpModalbtn = document.querySelectorAll("#signup-modal");
const signUpModal = document.querySelector(".signup-modal");

// --- Cart Modal ---
const cartOverlay = document.querySelector(".cart-overlay");
const cartInnerlay = document.querySelector(".cart-innerlay");
const cartBtn = document.querySelectorAll("#cart-btn");

// LogIn Modal
signInModalbtn.forEach((element) => {
  element.addEventListener("click", () => {
    signModal.classList.toggle("show");
    return signIn_UI;
  });
});
// Registration Modal
signUpModalbtn.forEach((element) => {
  element.addEventListener("click", () => {
    signUpModal.classList.toggle("show");
    return signUp_UI;
  });
});

// Cart Button
cartBtn.forEach((element) => {
  element.addEventListener("click", () => {
    cartOverlay.classList.add("show");
    cartInnerlay.classList.add("showCart");
  });
});

// When the user clicks anywhere outside of the modal, closes it
window.onclick = function (event) {
  if (event.target == signModal || event.target == signUpModal) {
    signModal.classList.remove("show");
    signUpModal.classList.remove("show");
  }
  if (event.target == cartOverlay) {
    cartOverlay.classList.remove("show");
    cartInnerlay.classList.remove("showCart");
  }
};

// Sign Up Modal
var signUp_UI, signIn_UI;
if (signUpModal) {
  signUp_UI = signUpModal.innerHTML = `
    <div class="modal-container">
        <!-- Written Stuff -->
        <div class="modal-content">
            <div class="md">Welcome to <br><span style= "color:#b16c23; font-size:30px; md">ZEST</span><br> <span style="color:lightsteelblue ; font-size:20px; md">The flavour of mind</span></div>
            <div><i onclick="signUpModal.classList.remove('show');" class="fas fa-times"></i></div>
        </div>
        <!-- Other way of LogIn's -->
        <!--ul class="modal-icons flex">
                <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
                <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
                <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
        </ul-->
        <!-- Sign Up Input's -->
        <form class="modal-form grid py-1 text-center" id="main-form" required method="post">
            <input type="text" placeholder="Full Name" name="fullname" required>
            <input type="email" placeholder="email id" name="email" required>
            <input type="password" placeholder="Password" name="password1" required>
            <input type="password" placeholder="Re - Enter Password" name="password2" required>
            <input type="tel" placeholder="Mobile Number" name="sign-up-number" required>

            <button type="submit" class="btn">Register</button>
        </form>
        <!-- Remember Me CheckBox -->
        <label class="text-center">
            <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <!-- Written Stuff -->
        <div class="modal-content m-content-2 py-1">
            Click “Register” to agree to Terms of Service and acknowledge 
            that Privacy Policy applies to you. Have account? 
            <a id="sign-modal" 
            onclick="signUpModal.classList.remove('show');
                    signModal.classList.add('show');" 
            style="cursor: pointer;">
                <span class="clr-green">Log In</span>
            </a>
        </div>
    </div>
`;
}

// Log In Modal
if (signModal) {
  signIn_UI = signModal.innerHTML = `
    <!-- Main Card -->
    <div class="modal-container" style="margin-top:-50;">
        <!-- Written Stuff -->
        <div class="modal-content">
            <div class="md">Welcome back!</div>
            <div><i onclick="signModal.classList.remove('show');" class="fas fa-times"></i></div>
        </div>
        <!-- Other way of LogIn's -->
        <!-- ul class="modal-icons flex">
             <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
             <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
             <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
        </ul-->
        <!-- Sign In Input's -->
        <form action="/" class="modal-form grid py-1 text-center"  method="POST">
            <input type="email" placeholder="Email Id" name="email" required>
            <input type="password" placeholder="Password" id="sign-in-password"  name="password" required>

            <button type="submit" class="btn">Login</button>
        </form>
        <!-- Remember Me CheckBox -->
        <label class="text-center">
            <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <!-- Written Stuff -->
        <div class="modal-content m-content-2 py-1">
            Click “Sign In” to agree to Terms of Service and acknowledge 
            that Privacy Policy applies to you. No account? 
            <a id="signup-modal" 
                onclick="signModal.classList.remove('show');
                         signUpModal.classList.add('show');" 
                style="cursor: pointer;">
                <span class="clr-green">Create one</span>
            </a>
        </div>
    </div>
` ;
}

// Home/Vision Footer
var customerFooter = document.querySelectorAll(".customer-footer");
function customerFooterUI() {
  if (customerFooter) {
    customerFooter.forEach((element) => {
      element.innerHTML = `
            <section class="container-min">
            <!-- Upper Footer -->
                <main class="grid grid-3">
                    <!-- About College -->
                    <article class="about">
                        <h1 class="sm">about</h1>
                        <p>The Federal Institute of Science and Technology (FISAT) is a self-financing private engineering college established and promoted by the Federal Bank Officers’ Association Educational Society (FBOAES). 
                        Established in 2002, the institution is accredited by the National Assessment and Accreditation Council (NAAC) with an ‘A+’ grade in the 2nd cycle. The National Board of Accreditation (NBA) has accredited five B.Tech programmes.  FISAT is located in Mookannoor, near Angamaly in Ernakulam District, Kerala, the birthplace of The Federal Bank Ltd. founder, Late K P Hormis, and the campus is named “Hormis Nagar” in his honour.</p>
                        <ul class="py-1">
                          <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/fisats/" target="_blank"> Facebook</a></li>
                          <li><i class="fab fa-instagram"></i><a href="https://instagram.com/fisat.official?igshid=MzRlODBiNWFlZA==" target="_blank">Instagram</a></li>
                          </ul>
                    </article>
                    <!-- Navigation Links -->
                    <article class="quick-links">
                        <ul>
                            <h1 class="sm">Quick Links</h1>
                            <li><a href="index.html">Canteen Home</a></li>
                            <li><a href="https://fisat.ac.in/" target="_blank">FISAT Angamaly Ernakulam</a></li>
                        </ul>
                    </article>
                    <!-- Contact Details -->
                    <article class="contact">
                        <ul>
                            <h1 class="sm">Contact Information</h1>
                            <li> <i class="fas fa-phone-alt"></i> <p> 0484 2725272, 8547704139, 9495737577</p></li>
                            <li> <i class="fas fa-envelope"></i> <p>mail@fisat.ac.in</p></li>
                            <li> <i class="fas fa-map-marker-alt"></i> <p> Hormis Nagar, Mookkannoor P O, Angamaly, Ernakulam Dt. Kerala, India – 683 577 </p></li>
                            <li> <i class="fas fa-globe-asia"></i> <p>For Professional Courses, Visit: www.fisat.ac.in</p></li>
                        </ul>
                    </article>
                </main>
            </section>
        `;
    });
  }
}
customerFooterUI();

// Authenticated User Footer
var userFooter = document.querySelectorAll("#user-footer");
function userFooterUI() {
  if (userFooter) {
    userFooter.forEach((element) => {
      element.innerHTML = `
            <section class="container-min">
            <!-- Upper Footer -->
                <main class="grid grid-3">
                    <!-- About College -->
                    <article class="about">
                        <h1 class="sm">about</h1>
                        <p>The Federal Institute of Science and Technology (FISAT) is a self-financing private engineering college established and promoted by the Federal Bank Officers’ Association Educational Society (FBOAES). The FBOAES is an initiative of the Federal Bank Officers’ Association (FBOA), the sole representative body of all Federal Bank officers.Established in 2002, the institution is accredited by the National Assessment and Accreditation Council (NAAC) with an ‘A+’ grade in the 2nd cycle. The National Board of Accreditation (NBA) has accredited five B.Tech programmes.  FISAT is located in Mookannoor, near Angamaly in Ernakulam District, Kerala, the birthplace of The Federal Bank Ltd. founder, Late K P Hormis, and the campus is named “Hormis Nagar” in his honour.</p>
                        <ul class="py-1">
                            <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/fisats/" target="_blank"> Facebook</a></li>
                            <li><i class="fab fa-instagram"></i><a href="https://www.instagram.com/fisat.official?igshid=MzRIODBiNWFIZA==" target="_blank">Instagram</a></li>
                        </ul>
                    </article>
                    <!-- Navigation Links -->
                    <article class="quick-links">
                        <ul>
                            <h1 class="sm">Quick Links</h1>
                            <li><a href="client-side.html">Menu</a></li>
                            <li><a href="user-orders.html">Your Orders</a></li>
                            <li><a href="https://fisat.ac.in" target="_blank">FISAT Angamaly</a></li>
                        </ul>
                    </article>
                    <!-- Contact Details -->
                    <article class="contact">
                        <ul>
                            <h1 class="sm">Contact Information</h1>
                            <li> <i class="fas fa-phone-alt"></i> <p>0484  2725272, 8547704139, 9495737577</p></li>
                            <li> <i class="fas fa-envelope"></i> <p>mail@fisat.ac.in</p></li>
                            <li> <i class="fas fa-map-marker-alt"></i> <p> Hormis Nagar, Mookkannoor P O, Angamaly, Ernakulam Dt. Kerala, India – 683 577 </p></li>
                            <li> <i class="fas fa-globe-asia"></i> <p>For Professional Courses, Visit: www.fisat.ac.in</p></li>
                        </ul>
                    </article>
                </main>
            </section>
        `;
    });
  }
}
userFooterUI();

// Client Orders Detals
const showOrderDetails = document.querySelectorAll("#show-order-details");
const descriptiveDetails = document.querySelector(".descriptive-details");
const orderInner = document.querySelector(".order-inner");

if (showOrderDetails) {
  showOrderDetails.forEach((btn) => {
    btn.addEventListener("click", () => {
      descriptiveDetails.classList.toggle("display-none");
    });
  });
}

function setOrderDetails(trimedEmailID) {
  // Get Cart Items already stored
  firebase
    .database()
    .ref("Users_Order/" + trimedEmailID + "_Orders")
    .on("value", function (snapshot) {
      if (snapshot.exists()) {
        // Gets Data
        var data = snapshot.val();
        // Get Encrytion Keys
        var userOrder = Object.keys(data);

        // Puts keys & extracts values -
        let i = 0;
        userOrder.forEach((key) => {
          // All Required Stuff
          var total = data[key].User_Cart.Total_Amount;
          var date = data[key].Order_Date;
          var time = data[key].Order_Time;
          var deliveryStatus = data[key].Delivery_Status;
          var UserCart = data[key].User_Cart.Details;
          var orderStatus = data[key].Order_Status;
          var trimedID = "";
          var orderID = "UO" + date;

          // Creates Order ID
          for (let j = 0; j < orderID.length; j++) {
            if (orderID[j] != "/") {
              trimedID += orderID[j];
            }
          }
          if (data[key].Order_Status === true) {
            i += 1;

            // Check Order If accepted or not
            if (orderStatus === true) {
              orderStatus = "Cooking";
            } else {
              orderStatus = "Not Available";
            }

            if (deliveryStatus === true) {
              orderStatus = "Ready";
            }

            // --- Creates Main Container ---
            const div = document.createElement("main");
            div.classList.add("current-details");

            div.innerHTML = `
                        <!-- Current Order Main Titles -->
                        <table class="main-details">
                            <div class="flex" style="justify-content: space-between;">
                                <div><button class="table-btn my-1">Ordered Detail</button></div>
                                <div class="md">${"#" + i}</div>
                            </div>
                            <thead>
                                <tr>
                                    <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> Order ID</th>
                                    <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> Total</th>
                                    <th><i class="fas fa-calendar-alt" style="margin-right: 5px;"></i> Ordered Date</th>
                                    <th><i class="fas fa-clock" style="margin-right: 5px;"></i> Ordered Time</th>
                                    <th><i class="fas fa-calendar-check" style="margin-right: 5px;"></i> Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label= "Order ID">${trimedID}</td>
                                    <td data-label= "Total">&#8377; ${total}</td>
                                    <td data-label= "Date">${date}</td>
                                    <td data-label= "Time">${time}</td>
                                    <td data-label= "Order Status">${orderStatus}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="table-btn" id="show-order-details">More Details</button>
                    `;
            orderInner.appendChild(div);

            // --- Creates table of Current Order ---
            let sID = 0;
            const currentDiv = document.createElement("table");
            currentDiv.classList.add("descriptive-details");
            currentDiv.innerHTML = `
                        <thead>
                            <tr>
                                <th><i class="fas fa-coins" style="margin-right: 5px;"></i> ${"S. No"}</th>
                                <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> ${"Food"}</th>
                                <th><i class="fas fa-money-bill-alt" style="margin-right: 5px;"></i> ${"Price"}</th>
                                <th><i class="fab fa-buffer" style="margin-right: 5px;"></i> ${"Quantity"} </th>
                                <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> ${"Sub Total"}</th>
                            </tr>
                        </thead>
                    `;
            // Create table Data Body
            var tbody = document.createElement("tbody");
            // Puts data in Table
            UserCart.forEach((itemID) => {
              sID += 1;
              let foodID = itemID.FoodID;
              let subTotal = newMenu[foodID - 1].fields.price * itemID.Quantity;
              // Creates Table Fields
              var tr = document.createElement("tr");
              tr.classList.add("my-1");
              tr.innerHTML = `
                            <td data-label= "S. No">${sID}</td>
                            <td data-label= "Item">${
                              newMenu[foodID - 1].fields.title
                            }</td>
                            <td data-label= "Price">&#8377 ${
                              newMenu[foodID - 1].fields.price
                            }</td>
                            <td data-label= "Quantity">${itemID.Quantity}</td>
                            <td data-label= "Sub Total">&#8377 ${subTotal}</td>
                        `;
              tbody.appendChild(tr);
            });

            // Line Seperating Two Orders -
            var lineHR = document.createElement("hr");
            lineHR.style.margin = "2rem auto 0rem auto";
            lineHR.classList.add("hrStyle");
            // Structures Container & other stuff
            currentDiv.appendChild(tbody);
            div.appendChild(currentDiv);
            orderInner.appendChild(div);
            orderInner.appendChild(lineHR);
          }
          // If order isn't accepted by administrator
          else if (data[key].Order_Status === false) {
            i += 1;

            // --- Creates Main Container ---
            const div = document.createElement("main");
            div.classList.add("current-details");

            div.innerHTML = `
                        <!-- Current Order Main Titles -->
                        <table class="main-details">
                            <div class="flex" style="justify-content: space-between;">
                                <div><button class="table-btn my-1">Ordered Detail</button></div>
                                <div class="md">${"#" + i}</div>
                            </div>
                            <thead>
                                <tr>
                                    <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> Order ID</th>
                                    <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> Total</th>
                                    <th><i class="fas fa-calendar-alt" style="margin-right: 5px;"></i> Ordered Date</th>
                                    <th><i class="fas fa-clock" style="margin-right: 5px;"></i> Ordered Time</th>
                                    <th><i class="fas fa-calendar-check" style="margin-right: 5px;"></i> Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label= "Order ID">${trimedID}</td>
                                    <td data-label= "Total">&#8377; ${total}</td>
                                    <td data-label= "Date">${date}</td>
                                    <td data-label= "Time">${time}</td>
                                    <td data-label= "Order Status">${"Not Confirmed Yet"}</td>
                                </tr>
                            </tbody>
                        </table>
                    `;
            orderInner.appendChild(div);
          }
        });
      } else {
        console.log("no orders");
      }
    });
}
