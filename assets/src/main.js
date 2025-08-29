document.addEventListener('scroll', (e)=>{
    // console.log(e.target);
     document.querySelector("#nav").style.cssText = "background-color: #fff; box-shadow: inset 0px 0px 5px gainsboro, 3px 3px 4px grey; border-radius:3rem; width:93%; margin:auto;top:7px;";
})

let cardInner = 
`
 <div class="card-body" >
     <h4 class="card-title text-info">Online Results </h4>
     <div class="card-text">
       <a class="btn btn-warning" id='x' href="#">Get Started</a>

     </div>
 </div>
`;


document.querySelectorAll('.SVC .card').forEach(e=>{
    e.innerHTML += cardInner;
    

    e.querySelector('#x').addEventListener('click', ()=>{
        window.location.href = location.href;
    })

     e.children[0].addEventListener('click',()=>{
     window.location.href = location.href;
 })

})

