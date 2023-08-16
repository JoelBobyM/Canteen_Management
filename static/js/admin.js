


var removeButton = document.getElementById('remove-product-menu');
var removeSection = document.getElementById('remove_from_menu');
console.log("REgistered")
removeButton.addEventListener("click", function() {
    console.log("clicked")
    if (removeSection.style.display === 'none') {
        removeSection.style.display = 'block';
    } else {
        removeSection.style.display = 'none';
    }
  });

var addButton = document.getElementById('add-product-menu');
var addSection = document.getElementById('add_to_menu');
console.log("Registered")
addButton.addEventListener("click", function() {
    console.log("Clicked")
    if (addSection.style.display === 'none') {
        addSection.style.display = 'block';
    } else {
        addSection.style.display = 'none';
    }
});

// Function to send an AJAX request to add a product
function addProduct() {
    // product, category, price
    let food_name = document.getElementById('add-product-admin').value;
    let category = document.getElementById('add-category').value;
    let price = document.getElementById('add-price-admin').value;

    fetch("/add_to_menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({food_name, category, price}),
      })
        .then(function (response) {
          // Handle the response from the server
          if (response.ok) {
            // Item added to cart successfully
            alert("Item added to cart!");
          } else {
            // Error occurred while adding item to cart
            alert("Error adding item to cart. Please try again.");
          }
        })
        .catch(function (error) {
          // Error occurred while making the request
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
}


function removeProduct() {
  let food_name = document.getElementById('remove-product-admin').value;
  console.log(food_name);
  fetch("/remove_from_menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({food_name}),
  })
    .then(function (response) {
      if (response.ok) {
        alert("Item removed to cart!");
      } else {
        alert("Error removing item to cart. Please try again.");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}




// var addButton = document.getElementById('add-product-menu');
// var addSection = document.getElementById('add_to_menu');
// console.log("REgistered")
// console.log("Registered")
// addButton.addEventListener("click", function() {
//     console.log("clicked")
//     console.log("Clicked")
//     if (addSection.style.display === 'none') {
//         addSection.style.display = 'block';
//     } else {
//         addSection.style.display = 'none';
//     }
//   });

// var removeButton = document.getElementById('remove-product-menu');
// var removeSection = document.getElementById('remove_from_menu');
// console.log("REgistered")
// removeButton.addEventListener("click", function() {
//     console.log("clicked")
//     if (removeSection.style.display === 'none') {
//         removeSection.style.display = 'block';
//     } else {
//         removeSection.style.display = 'none';
//     }
//   });
// });


