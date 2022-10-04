/*Desarrollo realizador por: Jonathan Cardona Calderon ID 1037613608 Grupo1 Part Time*/

function alertShoppingCart() {
    alert("This page says\n\nYour Cart is empty!" );
};

function hoverImage()  {
    var succulentImg2 = document.getElementById("succulent-plant");
    succulentImg2.src = "./assets/imgs/succulents-2.jpg";
}

function hoverImageOut() {
    var succulentImg1 = document.getElementById("succulent-plant");
    succulentImg1.src = "./assets/imgs/succulents-1.jpg";
}

function acceptAction() {
    var cookie = document.querySelector(".cookie"); //Seleccionando la etiqueta con clase cookie    
    cookie.remove();
};