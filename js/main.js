let li = document.querySelectorAll("li")
let sub = document.querySelector("button")
let cardRating = document.querySelector(".card-Rating")
let cardThankYou = document.querySelector(".card-ThankYou")
let heading =  document.querySelector(".card-ThankYou h6")


li.forEach(function(e) {
  e.addEventListener("click", function() {
    li.forEach(function(item) {
      item.classList.remove("active")
      item.style.backgroundColor = "hsl(210, 19%, 18%)"
      item.style.color = "hsl(217, 12%, 63%)"
    })
    this.classList.add("active")
    if(this.className === "active") {
      this.style.backgroundColor = "hsl(217, 12%, 63%)";
      this.style.color = "white";
      let h = this.textContent
      sub.addEventListener("click",function() { 
        cardRating.style.display = "none"
        cardThankYou.style.display = "block"
        heading.textContent = `
          you selected ${h} out of 5
        `
        console.log(h)
      })
    }
  })
})





