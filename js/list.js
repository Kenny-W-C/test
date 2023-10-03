window.onload = function() {
  var form = document.getElementById("shoppingForm");
  form.addEventListener("submit", addItem);

  var loginForm = document.getElementById("login");
  loginForm.addEventListener("submit", user)
  var pwd = document.getElementById("pwd");
};

function addItem(event) {
  event.preventDefault();

  var itemInput = document.getElementsByName("item_name")[0];
  var shoppingList = document.getElementById("shoppingList");

  var item = itemInput.value;

  var listItem = document.createElement("li");
  shoppingList.appendChild(listItem);

  // Make AJAX request to store the item in the database
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "add_item.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText); // Display server response (optional)
    }
  };
  xhttp.send("item_name=" + encodeURIComponent(item));

  itemInput.value = "";
}
