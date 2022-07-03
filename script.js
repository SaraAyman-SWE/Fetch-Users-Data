"use strict";

//////////////////////////////////////////////////////////////////////
// Display users data (image, email) in html page,
//    you should fetch the data from this
//    url https://reqres.in/api/users?page=2
//    the data should be fetched on page load
//////////////////////////////////////////////////////////////////////
const btn = document.querySelector(".btn-country");
const usersContainer = document.querySelector(".countries");

const renderUserData = function (data, className = "") {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.avatar}" />
  <div class="country__data">
    <h3 class="country__name">${data.first_name} ${data.last_name}</h3>
    <h4 class="country__region">${data.email}</h4>
  </div>
</article>`;
  usersContainer.insertAdjacentHTML("beforeend", html);
  // Fade in the container
  usersContainer.style.opacity = 1;
};

const getUserData = function () {
  const request = new XMLHttpRequest();
  request.open("GET", `https://reqres.in/api/users?page=2`);
  request.send();
  //    the data should be fetched on page load
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    // Display users data (image, email) in html page
    renderUserData(data.data[0]);
    renderUserData(data.data[1], "neighbour");
    renderUserData(data.data[2], "second-neighbour");
  });
};
btn.addEventListener("click", function () {
  getUserData();
});
