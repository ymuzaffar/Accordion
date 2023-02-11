
// 1-element
let closeBtn = document.querySelectorAll('[data-close]')
let accText = document.querySelector('.acc_text')
let arrow = document.querySelector('#arrow')

// 2-element
let openBtn1 = document.querySelectorAll('[data-open]')
let accText1 = document.querySelector('.acc_text_1')
let arrow1 = document.querySelector('#arrow1')

// 3-element

let openBtn2 = document.querySelectorAll('[data-open2]')
let accText2 = document.querySelector('.acc_text_2')
let arrow2 = document.querySelector('#arrow2')

// 4-element

let openBtn3 = document.querySelectorAll('[data-open3]')
let accText3 = document.querySelector('.acc_text_3')
let arrow3 = document.querySelector('#arrow3')


x = 180
y = 360







// 1-element

closeBtn.forEach(btn => {
    btn.onclick = () =>{
        
       

        arrow.style.transform ='rotate( '+ y + 'deg )'
        accText.style.maxHeight = accText.scrollHeight + 'px'
    if (accText.style.display === "block") {
        arrow.style.transform = 'rotate( '+ x + 'deg )'
        // accText.style.maxHeight = accText.scrollHeight + 'px'
        accText.style.display = "none";

        

      } else {
        accText.style.display = "block";
        arrow.style.transform = 'rotate( '+ y + 'deg )'

        accText.style.maxHeight = accText.scrollHeight + 'px'

      }




    }
})










// 2-element

openBtn1.forEach(btn => {
    btn.onclick = () =>{
       
        
    
if(accText1.style.display === 'none'){
    arrow1.style.transform ='rotate( '+ x + 'deg )'
    accText1.style.display = 'block'
    accText1.style.maxHeight = accText1.scrollHeight + 'px'
}else{
    
    accText1.style.display = 'none'
    accText1.style.maxHeight = 0
    arrow1.style.transform ='rotate( '+ y + 'deg )'
    
}

}

    
})


// 3-element

openBtn2.forEach(btn => {
    btn.onclick = () =>{
       

    arrow2.style.transform ='rotate( '+ y + 'deg )'
        
if(accText2.style.display === 'none'){
    
    arrow2.style.transform ='rotate( '+ x + 'deg )'
    accText2.style.display = 'block'
    accText2.style.maxHeight = accText2.scrollHeight + 'px'
  
}else{
    
    accText2.style.display = 'none'
    
    arrow2.style.transform ='rotate( '+ y + 'deg )'
    accText2.style.maxHeight = 0
} 

    }
})


// 4-element

openBtn3.forEach(btn => {
    btn.onclick = () =>{
       

    arrow3.style.transform ='rotate( '+ y + 'deg )'
        
if(accText3.style.display === 'none'){
    arrow3.style.transform ='rotate( '+ x + 'deg )'
    accText3.style.display = 'block'
    accText3.style.maxHeight = accText3.scrollHeight + 'px'
}else{
    accText3.style.display = 'none'
    arrow3.style.transform ='rotate( '+ y + 'deg )'
    accText3.style.maxHeight = 0
}

    }
})