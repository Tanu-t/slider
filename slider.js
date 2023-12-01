const left= document.querySelector('.left');
const right= document.querySelector('.right');
const slider= document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let sliderNumber = 1;

const slidelength=images.length;

for(let i=0; i<slidelength; i++){
  const div =document.createElement('div') //method to create element node
  div.className="button";
  bottom.appendChild(div);
  }
  
  const buttons = document.querySelectorAll(".button");
  buttons[0].style.backgroundColor="white";
  
  const resetBg=()=>{
    buttons.forEach((button)=>{
      button.style.backgroundColor = "transparent";
    });
  }
  
  buttons.forEach((button,i) => {
    button.addEventListener("click",()=>{
      resetBg();
      slider.style.transform=`translateX(-${i*500}px)`;
      sliderNumber=i+1;
      button.style.backgroundColor = "white";
    });
  });

const nextSlide =()=>{
  slider.style.transform =`translateX(-${sliderNumber*500}px)`; 
  sliderNumber++;
}
const prevSlide =()=>{
  slider.style.transform =`translateX(-${(sliderNumber-2)*500}px)`; 
  sliderNumber--;
}

const getFirstSlide=()=>{
  slider.style.transform =`translateX(0px)`;
  sliderNumber= 1;
}
const getLastSlide=()=>{
  slider.style.transform =`translateX(-${(slidelength-1)*500}px)`;
  sliderNumber= slidelength;
}

right.addEventListener("click",()=>{
  if(sliderNumber<slidelength){
  nextSlide();
  }
  else{
    getFirstSlide();
  }

resetBg()
buttons[sliderNumber-1].style.backgroundColor ="white";
})

//left slider

left.addEventListener("click",()=>{
  if(sliderNumber > 1 )
  {
    prevSlide();
  }
  else{
    getLastSlide();
  }
  resetBg()
buttons[sliderNumber-1].style.backgroundColor ="white";
})

