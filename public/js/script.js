// Ajax post when user completes login form.
$(document).ready(function () {
  //USER SIGN UP
  $("#signoutB").on("click", function () {
    $.get("/logout").then(function () {
      console.log("logged out");
      window.location.replace("/");
    });
  });

  $("#signupF").on("submit", function (event) {
    event.preventDefault();

    let user = {
      fname: $("#fnameSU").val().trim(),
      lname: $("#lnameSU").val().trim(),
      email: $("#emailSu").val().trim(),
      password: $("#pswSU").val().trim(),
    };
    console.log(user);

    //send post request
    $.post("/api/signup", {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      password: user.password
    }).then(function () {
      console.log("logged in");
      window.location.replace("/");
    })
      .catch(function (err) {
        console.log(err);
      });
  });

  //User clicks SUBMIT user details will be validated
  $("#loginF").on("submit", function (event) {
    event.preventDefault();

    let user = {
      username: $("#email").val().trim(),
      password: $("#psw").val().trim(),
    };
    console.log(user);

    //send post request
    $.post("/api/users", {
      email: user.username,
      password: user.password
    }).then(function (res) {
      console.log(res);
      // $.get("/", {
      //   user: res
      // });
      window.location.replace("/");
    })
      .catch(function (err) {
        console.log(err);
      });
  });

  // Ajax post when user adds item to cart. 
  $(".addtocart").unbind('click').on("click", function (event) {
    console.log("TEST")
    var id = $(this).parent().data("product");
    console.log(id);

    // Send the POST request.
    $.ajax("/api/saleItems/" + id, {
      type: "POST"
    }).then(
      function () {
        console.log("added item to cart", id);
        // Reload the page to get the updated list
        location.reload();
      });
  });


  // Ajax post when user deletes cart. 
  $(".delete-cart").unbind('click').on("click", function (event) {

    // Send the DELETE request.
    $.ajax("api/saleItems/", {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cart");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // Ajax post when user deletes item from cart. 
  $(".delete-itemCart").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/items/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted item from cart", id);

        // Reload the page to get the updated list
        location.reload();
      });
  });
});
