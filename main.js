// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here

function buildProfile(customerData){
  for (var i = 0; i < customerData.results.length; i++) {
    var customerInstance = customerData.results[i];
    var allCustomers = document.querySelector('.customers');
    var instanceDiv = document.createElement('div');
    instanceDiv.className = "instance";
    allCustomers.appendChild(instanceDiv);
    var userPhoto = document.createElement('div');
    userPhoto.className = 'photo';
    instanceDiv.appendChild(userPhoto);
    var picture = document.createElement('img');
    picture.setAttribute('src', customerInstance.picture.large);
    userPhoto.appendChild(picture);
    var info = document.createElement('div');
    info.className = 'info';
    instanceDiv.appendChild(info);
    var name = document.createElement('h2');
    name.textContent = customerInstance.name.first + ' ' + customerInstance.name.last;
    info.appendChild(name);
    var email = document.createElement('h3');
    email.textContent = customerInstance.email;
    info.appendChild(email);
    var addressOne = document.createElement('p');
    addressOne.textContent = customerInstance.location.street;
    info.appendChild(addressOne);
    var addressTwo = document.createElement('p');
    addressTwo.textContent = customerInstance.location.city + ' ' + customerInstance.location.state + ' ' + customerInstance.location.postcode;
    info.appendChild(addressTwo);
    var phone = document.createElement('p');
    phone.textContent = customerInstance.cell;
    info.appendChild(phone);
  }
}

  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    buildProfile(data);
  }
});

})();
