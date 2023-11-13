const  loading = document.querySelector('#loading');
const loaderText=document.querySelector('#loading p');

const loadingScreen=document.querySelector('#loading-screen');

loadingScreen.animate(
  {
    translate:['0 100vh','0 0','0 -100vh']
  },
  {
    duration:2000,
    delay:800,
    easing:'ease',
    fill:'forwards',
  }
)


window.addEventListener('load',()=>{
  loading.animate(
    {
      opacity:[1,0],
      visibility:'hidden'
    },
    {
      duration:2200,
      delay:1000,
      easing:'ease',
      fill:'forwards',
    },
  );
  loadingScreen.animate(
    {
      translate:['0 100vh','0 0','0 -100vh']
    },
    {
      duration:2000,
      delay:800,
      easing:'ease',
      fill:'forwards',
    }
  );
  loaderText.animate(
    [
    {
      opacity:0.7,
      offset:.7
    },
  
    {
      opacity:0,
      offset:1
    },
  ],
  {
    duration:1400,
    easing:'ease',
    fill:'forwards',

  }
  );
});

class Photo {
 constructor(images){
  this.rootElm=document.querySelector('#photo');
  this.images=images;
  this.currentIndex=0;
 }

 init(){
  const next=document.querySelector('.next');
  next.addEventListener('click',()=>{
  this.next();
  })
  const prev = document.querySelector('.prev');
  prev.addEventListener('click',()=>{
    this.prev();
  })
 
  this.changePhoto();

  const FrameElm=document.querySelector('.frame');
  
  const image =this.images[this.currentIndex];
  FrameElm.innerHTML=`
  <div class="currentImage">
  <img src="${image}" />
  </div>;`
  }
  
  changePhoto(){
    const FrameElm=this.rootElm.querySelector('.frame');
    const image = this.images[this.currentIndex];
    FrameElm.innerHTML=`<div>
      <img src="${image}">
    </div>`;
    this.startTime();
  }

  startTime(){
    if(this.timerKey){
      clearTimeout(this.timerKey)
    }
    this.timerKey=setTimeout(()=>{
      this.next();
    },3000);
  }

  next() {
    const lastindex=this.images.length-1;
    if(lastindex === this.currentIndex){
      this.currentIndex=0;

    }else{
      this.currentIndex++;
    }
    
      
    this.changePhoto();
  }
  prev(){
    this.currentIndex--;
    this.changePhoto();
  }
  
 }

const images =[
  'images/tosaduru.jpeg',
  'images/buntan.jpeg',
  'images/imokenpi.jpg',
]

let photo=new Photo(images)
photo.init();

