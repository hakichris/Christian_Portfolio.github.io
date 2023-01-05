const cancel = document.querySelector('#cancel');
const hamburger = document.querySelector('#hamburger');
const option1 = document.querySelector('.port');
const option2 = document.querySelector('.Ab');
const option3 = document.querySelector('.cont');

function openDiv() {
  const popup = document.querySelector('#popup');
  popup.style.display = 'block';
}

function closeDiv() {
  const get = document.querySelector('#popup');
  get.style.display = 'none';
}

cancel.addEventListener('click', () => {
  closeDiv();
});

hamburger.addEventListener('click', () => {
  openDiv();
});

option1.addEventListener('click', () => {
  closeDiv();
});

option2.addEventListener('click', () => {
  closeDiv();
});

option3.addEventListener('click', () => {
  closeDiv();
});


// Detail popup window start here. 

var arr = [
 {
  id: '1',
  Project_name: 'TONIC',
  Featured_image: 'images/Snapshoot_Portfolio .png',
  Feature_image_desk: 'images/Snapshoot_Portfolio_(4).png',
  Featured: ['CANOPY','Back End Dev','2015'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css'],

  //popup_details
  Project_descr_pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'2',
  Project_name: 'Multi-Post Stories',
  Featured_image: 'images/Snapshoot_Portfolio_(1).png',
  Feature_image_desk: 'images/Snapshoot_Portfolio_(5).png',
  Featured: ['CANOPY','Back End Dev','2015','FACEBOOK','Full Stack Dev',],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css', 'Ruby on rails'],

  //popup_details
  Project_descr_pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'3',
  Project_name: 'Facebook 360',
  Featured_image: 'images/Snapshoot_Portfolio_(2).png',
  Feature_image_desk: 'images/Snapshoot_Portfolio_(6).png',
  Featured: ['CANOPY','Back End Dev','2015','FACEBOOK','Full Stack Dev',],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css','Ruby on rails'],
  image: 'images/Counter.png',
  
  //popup_details
  Project_descr_pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'4',
  Project_name: 'Uber Navigation',
  Featured_image: 'images/Snapshoot_Portfolio_(3).png',
  Feature_image_desk: 'images/Snapshoot_Portfolio_(4).png',
  Featured: ['CANOPY','Back End Dev','2015','Uber','Lead Developer','2018'],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.',' A daily selection of privately personalized reads; no accounts orsign-ups required.'],
  technologies:['html','javascript','css','Ruby on rails'],
  image: 'images/Counter.png',
  
  //popup_details
  Project_descr_pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
}
]

const works = document.querySelectorAll('.work')
const works_desk = document.querySelectorAll('.works')
const Model_show = document.querySelector('.model')

for(let i = 0; i<arr.length; i++){
  const image = document.createElement('img')
  const images = document.createElement('img')
  image.setAttribute('src', arr[i].Featured_image)
  images.setAttribute('src', arr[i].Feature_image_desk)
  works[i].appendChild(image)
  works_desk[i].appendChild(images)
  works[i].querySelector('.project_name').innerHTML = arr[i].Project_name
  works[i].querySelector('#h3').innerHTML = arr[i].Featured[0]
  works[i].querySelector('.langue').innerHTML = arr[i].Featured[1]
  works[i].querySelector('.year').innerHTML = arr[i].Featured[2]
  works[i].querySelector('.project_description').innerHTML = arr[i].Project_descr[0]
  works[i].querySelector('.html').innerHTML = arr[i].technologies[0]
  works[i].querySelector('.css').innerHTML = arr[i].technologies[1]
  works[i].querySelector('.javascript').innerHTML = arr[i].technologies[2]

  //desktop
  works_desk[i].querySelector('.project_name').innerHTML = arr[i].Project_name
  works_desk[i].querySelector('#h3').innerHTML = arr[i].Featured[0]
  works_desk[i].querySelector('.langue').innerHTML = arr[i].Featured[1]
  works_desk[i].querySelector('.year').innerHTML = arr[i].Featured[2]
  works_desk[i].querySelector('.project_description').innerHTML = arr[i].Project_descr[0]
  works_desk[i].querySelector('.html').innerHTML = arr[i].technologies[0]
  works_desk[i].querySelector('.css').innerHTML = arr[i].technologies[1]
  works_desk[i].querySelector('.javascript').innerHTML = arr[i].technologies[2]

}


const popup_show = document.querySelectorAll('.link_to_project')

for (const box of popup_show) {
  box.addEventListener('click', function onClick() {
      openPop()
    });
  }


function openPop() {
  
  const model = document.querySelector('.model')
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  

  popup_show.forEach(pop => {
    const projectId = pop.id
    for(let i =0 ; i < arr.length; i++){
      if(projectId == arr[i].id){
        console.log(projectId, arr[i].id)
        overlay.innerHTML = `<div class="Project info">
                                <h3 class="project_name name">${arr[i].Project_name}</h3>
                                <img  src="images/Enabled.png" alt="..." class="close">
                                 <ul class="client">
                                         <li id="h3">${arr[i].Featured[0]} </li>
                                         <li class="Counter">
                                         <img src="images/Counter.png" alt="" />
                                        </li>
                                         <li class="langue"> ${arr[i].Featured[1]}</li>
                                         <li class="Counter">
                                          <img src="images/Counter.png" alt=""/>
                                        </li>
                                        <li class="year"> ${arr[i].Featured[2]}</li>
                                  </ul>
                                 <img src=${arr[i].Featured_image} alt="Image_descr" class="model_image">
                          <div class="works_details model_flex">
                                     <p class="project_description">
                                    ${arr[i].Project_descr_pop}
                                     </p>
                                <ul class="code_language">
                                    <li ><a class="ht html" href="#"> ${arr[i]. technologies[0]}</a></li>
                                     <li ><a class="ht css" href="#"> ${arr[i]. technologies[1]}</a></li>
                                         <li ><a class="ht javascript" href="#"> ${arr[i]. technologies[2]}</a></li>
                                   </ul>

                              <div class="btn">
                                 <button class="link_to_project">
                                <a class="check_Project" href=${arr[i].link_to_live_version}> See live</a>
                                  <img src="images/Icon - Export.svg" alt="">
                                   </button>
                                 <button class="link_to_project">
                                      <a class="check_Project" href=${arr[i].link_to_live_version}>See Souce</a>
                                  <img src="images/Vector 2.png" alt="">
                                 </button>
                              </div>
                               </div>
                           </div>
                        <img id="shape" src="images/Shape.png" alt="">
                      `
     
      model.appendChild(overlay)
      const popup_open = document.querySelector('.model');
      model.style.display = 'block';
      }
    }
  })
  
}

const close_popup = document.querySelector('.close')
console.log('got here on close_pop')

function closePop() {
  const popup_close = document.querySelector('.model');
  popup_close.style.display = 'none';
}

close_popup.addEventListener('click', function onClick() {
  closePop();
});







