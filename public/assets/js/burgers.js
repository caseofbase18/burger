// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-type").on("click", function(event) {
      var id = $(this).data("id");
      var newType = $(this).data("newtype");
  
      var newTypeBurger = {
        devoured: newType
      };
  console.log(newTypeBurger);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newTypeBurger
      }).then(
        function() {
          console.log("changed type to", newType);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit-button").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("i'm the js")
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=type]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });