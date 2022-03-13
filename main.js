let currentPage = 1;


let choices={
    page1: false
}

document.getElementById('right').addEventListener('click',()=>{
  document.querySelector(`.page${currentPage}`).classList.toggle('left-side')
  document.querySelector(`.page${currentPage+1}`).classList.toggle('left-side')
  currentPage+=2
  console.log(currentPage);
})
document.getElementById('left').addEventListener('click',()=>{
  if(currentPage>=2){
    document.querySelector(`.page${currentPage-1}`).classList.toggle('left-side')
    document.querySelector(`.page${currentPage-2}`).classList.toggle('left-side')
    currentPage-=2
    console.log(currentPage);
  }
})
document.querySelectorAll('.choice').forEach(x=>{

  x.addEventListener('mouseover',(e)=>{
      let num= e.target.classList[2].slice(-1)
      document.querySelector(`.opt${num}`).classList.add('target')
  })
  x.addEventListener('mouseleave',(e)=>{
    let num= e.target.classList[2].slice(-1)
      document.querySelector(`.opt${num}`).classList.remove('target')
  })
})

document.querySelector('.choice1').addEventListener('click',()=>{
  goRight(5)
})
document.querySelector('.choice2').addEventListener('click',()=>{
  goRight(7)
})
document.querySelector('.choice3').addEventListener('click',()=>{
  goRight(13)
})
document.querySelector('.choice4').addEventListener('click',()=>{
  goRight(15)
})
document.querySelector('.choice5').addEventListener('click',()=>{
  goRight(9)
})
document.querySelector('.choice6').addEventListener('click',()=>{
  goRight(11)
})
document.querySelector('.choice7').addEventListener('click',()=>{
  goRight(17)
})
document.querySelector('.choice8').addEventListener('click',()=>{
  goRight(19)
})
document.querySelector('.choice9').addEventListener('click',()=>{
  goRight(21)
})
document.querySelector('.choice10').addEventListener('click',()=>{
  goRight(23)
})
document.querySelector('.choice11').addEventListener('click',()=>{
  goRight(25)
})
document.querySelector('.choice12').addEventListener('click',()=>{
  goRight(27)
})


function goRight(until){
  for(let i=currentPage; i<until;i++){
    document.querySelector(`.page${i}`).classList.toggle('left-side')
    currentPage++
  }
}









//api call
// fetch('https://api.quotable.io/random')
// .then(res=> res.json())
// .then(data =>{
//   console.log(data);
//   document.querySelector('.page2 .quote').innerHTML= data.content
//   document.querySelector('.page2 .author').innerHTML= data.author
// })