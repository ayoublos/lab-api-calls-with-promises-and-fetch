let form=document.querySelector('form')
let main=document.querySelector(`main`)
const baseURL='https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple'
form.addEventListener(`submit`,(e)=>{
    e.preventDefault()
    fetch(baseURL).then(res=>res.json()).then(res=>res.results.map(el=>{
        let section=document.createElement(`section`)
        section.innerHTML=`<article class="card">
        <h2>${el.category}</h2>
        <p>${el.question}</p>
        <button class='show-more'>{Show Answer}</button>
        <p class="hidden">${el.correct_answer}</p>
      </article>`
      let button=section.querySelector('.show-more')
      button.addEventListener(`click`,e=>{
        e.target.parentNode.querySelector(`.hidden`).classList.toggle(`active`)
        console.log(e.target.parentNode.querySelector('.hidden').classList)
      })
      
    //   button.addEventListener(`click`,(e)=>{
    //     console.log(e)
    //   })
      main.append(section)




    }))
    
})