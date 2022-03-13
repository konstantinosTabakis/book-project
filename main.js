let currentPage = 1;

function movePage(e, page) {
  if (page == currentPage) {
    currentPage+=2;
    e.classList.toggle('left-side')
    e.nextElementSibling.classList.toggle('left-side')
    
    
  }
  else if (page = currentPage - 1) {
    currentPage-=2;
    e.classList.toggle('left-side')
    e.previousElementSibling.classList.toggle('left-side')
    
  }
  
}

fetch('https://api.quotable.io/random')
.then(res=> res.json())
.then(data =>{
  console.log(data);
  document.querySelector('.page2 .quote').innerHTML= data.content
  document.querySelector('.page2 .author').innerHTML= data.author
})