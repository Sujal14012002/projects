let button=document.querySelectorAll('.button');
console.log(button);

const body=document.querySelector("body");



button.forEach((button) => {
    console.log(button);
    button.addEventListener('click',function(evt){
        console.log(evt)
        console.log(evt.target)

        if(evt.target.id==="grey"){
            body.style.backgroundColor="grey"

        }
       if(evt.target.id==="yellow"){
        body.style.backgroundColor="yellow"
     }

    
    if(evt.target.id==="blue"){
     body.style.backgroundColor="blue"

       }
       if(evt.target.id==="white"){
        body.style.backgroundColor="white"
       }

    })
    
});