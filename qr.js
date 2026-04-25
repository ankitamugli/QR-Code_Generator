let first = document.getElementById("inp");
let submit = document.getElementById("btn");
let img = document.getElementById("img");

img.style.display = "none";

submit.addEventListener("click", () => {
  console.log(first.value);

  let con = confirm("Do you want submit:");

  if (con === true) {

    if (first.value === "") {
      alert("Enter proper input");
    } 
    else {
     
      img.style.display = "block";

      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${first.value}`;

      setTimeout(() => {
        img.style.display = "none";
      }, 5000);
    }

  } else {
    alert("cancel");
  }
});