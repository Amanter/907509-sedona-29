const btn=document.querySelector(".btn-hotel"),searchHostels=document.querySelector("form");btn.addEventListener("click",function(e){e.preventDefault(),searchHostels.classList.toggle("modal-close")}),window.addEventListener("keydown",function(e){27===e.keyCode&&searchHostels.classList.contains("search-hostels")&&(e.preventDefault(),searchHostels.classList.add("modal-close"))});