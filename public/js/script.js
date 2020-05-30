// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Ajax post when user completes login form.
$(".create-form").on("submit", function(event) {
  event.preventDefault();

var user = {
  name: $("#name").val().trim(),
  lastName: $("#lastName").val().trim(),
  email: $("#email").val().trim(),
  password: $("#password").val().trim(),
};
console.log(user);

//send post request
  $.ajax("/api/user", {
    type: "POST",
    data: user
  }).then(

    function() {
      console.log("created new user");
      //reload current page with updated user list.
      location.reload();
    }
    )
});


// Ajax post when user deletes cart. 
$(".delete-cart").on("click", function(event) {

  // Send the DELETE request.
  $.ajax("/api/orders/", {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted cart");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

// Ajax post when user deletes item from cart. 
$(".delete-itemCart").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/orders/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted item from cart", id);

      // Reload the page to get the updated list
      location.reload();
    }
  );
});