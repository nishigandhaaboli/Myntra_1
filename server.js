//***********************FOR REGISTRATION PAGE********************
function register() {
    var nameFromHtml = document.getElementById("name");
    if (nameFromHtml) {
        var name = nameFromHtml.value;
        console.log(name);
    }
    var emailFromHtml = document.getElementById("email");
    if (emailFromHtml) {
        var email = emailFromHtml.value;
        console.log(email);
    } var passwordFromHtml = document.getElementById("password");
    if (passwordFromHtml) {
        var password = passwordFromHtml.value;
        console.log(password);
    }

    if (name && email && password) {
        alert("All filled.");
        localStorage.setItem("userData", JSON.stringify({ nameOfUser: name, emailOfUser: email, passwordOfUser: password }))
        localStorage.setItem("isUserLoggedIn","false");
        window.location.href = "./Login.html";
    } else {
        alert("Fill All The Informatin");
    }
}
//*****************FOR LOGIN PAGE***************/
function login() {
    var emailFromHtml = document.getElementById("email");
    if (emailFromHtml) {
        var emailFromLogin = emailFromHtml.value;
        console.log(emailFromLogin);
    } var passwordFromHtml = document.getElementById("password");
    if (passwordFromHtml) {
        var passwordFromLogin = passwordFromHtml.value;
        console.log(passwordFromLogin);
    }
    if (emailFromLogin && passwordFromLogin) {
        var dataFromLocal = localStorage.getItem("userData");
        //console.log(dataFromLocal);
        var parseData = JSON.parse(dataFromLocal);
        console.log(parseData.emailOfUser, "parseData.emailOfUser");
        if (emailFromLogin == parseData.emailOfUser && passwordFromLogin == parseData.passwordOfUser) {
            localStorage.setItem("isUserLoggedIn", "true");
            alert("login Successfull");
            window.location.href = "./Home.html";
        } else {
            alert("Please fill in the correct creadentials.....");
        }
    }
    else {
        alert("Fill All The Informatin");
    }
}
//*****************FOR ADD TO CART PAGE***************/

function addToCart(prodId)
{
    alert("adding to cart");
    console.log(prodId,"prodId");
    var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
    console.log(existingProducts);
    if(existingProducts == null){existingProducts = []};

    console.log(existingProducts,"existingProducts 1");
    var prodPs = prodId.querySelectorAll("p");
    var prodName = prodPs[0].innerText;
    //console.log()
    var prodImg = prodId.querySelector("img").src;
    var prodPrice = prodPs[2].innerText;
    //console.log()
    var prodObject = {pN:prodName, pP:prodPrice, pI:prodImg};
    //console.log(prodObject)
    existingProducts.push(prodObject);
    console.log(existingProducts,"existingProducts 2");
    localStorage.setItem("allProducts", JSON.stringify(existingProducts));
    alert("Product added....");


}
