const container = document.querySelector('.container');
const rows = document.querySelectorAll('.row');
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelected = document.querySelector("#movie");

let moviePrice = movieSelected.value;
movieSelected.addEventListener('change', e => {
  moviePrice = e.target.value;
  updateSeatCount();
});

container.addEventListener('click', e => {
  if ((e.target.classList.contains("seat")) && (!e.target.classList.contains("occupied"))){
    e.target.classList.toggle("selected");
  }
  updateSeatCount();
});

function updateSeatCount() {
  let c = 0;
  let t = 0;
  rows.forEach(row => {
    const children = row.children;
    for(let i = 0; i < children.length; i++) {
      if (children[i].classList.contains("selected")) {
        c += 1;
      };
    }
  })
  count.innerText = c;
  total.innerText = c * moviePrice;
}


