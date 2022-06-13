var page = document.body.id;

if(page === "rating-state"){
  document.querySelector(".submit-btn").addEventListener("click", updateRating);
  document.querySelectorAll(".rating").forEach((value) =>{
    value.addEventListener("click", function(){
      localStorage.setItem("rating", this.value);
      let rating = localStorage.getItem("rating");
      console.log(rating);
      this.classList.add("clicked");
      removeClasses(this);
    });
  });
}

if(page === "thankyou-state"){
  let rating = localStorage.getItem("rating");
  console.log(page);
  document.querySelector("span").innerHTML = rating;
  console.log(document.querySelector("span").innerHTML);
  console.log(rating);
}

function updateRating(){
  const rating = localStorage.getItem("rating");
  if(rating != 0){
    window.location.href="../Interactive-rating-component-challenge-hub/ThankYouState.html";
    document.querySelector("span").innerHTML = rating;
  }
}

function removeClasses(target){
  var btns = document.querySelectorAll(".rating");
  btns.forEach((btn) => {
    if(btn != target){
      btn.classList.remove("clicked");
    }
  })
}
