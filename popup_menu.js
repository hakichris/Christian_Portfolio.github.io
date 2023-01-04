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
  id: 'A',
  Project_name: 'TONIC',
  Featured_image: 'images/Snapshoot Portfolio .png',
  Feature_image_desk: 'images/Snapshoot Portfolio (4).png',
  Featured: ['CANOPY','Back End Dev','2015'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css'],

  //popup_details
  Project_descr_pop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'B',
  Project_name: 'Multi-Post Stories',
  Featured_image: 'images/Snapshoot Portfolio (1).png',
  Feature_image_desk: 'images/Snapshoot Portfolio (5).png',
  Featured: ['CANOPY','Back End Dev','2015','FACEBOOK','Full Stack Dev',],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css', 'Ruby on rails'],

  //popup_details
  Project_descr_popup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'C',
  Project_name: 'Facebook 360',
  Featured_image: 'images/Snapshoot Portfolio (2).png',
  Feature_image_desk: 'images/Snapshoot Portfolio (6).png',
  Featured: ['CANOPY','Back End Dev','2015','FACEBOOK','Full Stack Dev',],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebook s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
  technologies:['html','javascript','css','Ruby on rails'],
  image: 'images/Counter.png',
  
  //popup_details
  Project_descr_popup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  link_to_live_version: 'https://hakichris.github.io/Christian_Portfolio.github.io/',
  Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
},

{
  id:'D',
  Project_name: 'Uber Navigation',
  Featured_image: 'images/Snapshoot Portfolio (3).png',
  Feature_image_desk: 'images/Snapshoot Portfolio (4).png',
  Featured: ['CANOPY','Back End Dev','2015','Uber','Lead Developer','2018'],
  image: ['<img src="images/Snapshoot Portfolio .png" alt=" Project snapshoot" />','images/Snapshoot Portfolio (4).png','images/Counter,png'],
  Project_descr: [' A daily selection of privately personalized reads; no accounts or sign-ups required.',' A daily selection of privately personalized reads; no accounts orsign-ups required.'],
  technologies:['html','javascript','css','Ruby on rails'],
  image: 'images/Counter.png',
  
  //popup_details
  Project_descr_desk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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

Model_show.querySelector('.project_name').innerHTML = arr[0].Project_name
Model_show.querySelector('#h3').innerHTML = arr[0].Featured[0]
Model_show.querySelector('.langue').innerHTML = arr[0].Featured[1]
Model_show.querySelector('.year').innerHTML = arr[0].Featured[2]
Model_show.querySelector('.project_description').innerHTML = arr[0].Project_descr_pop
Model_show.querySelector('.html').innerHTML = arr[0].technologies[0]
Model_show.querySelector('.css').innerHTML = arr[0].technologies[1]
Model_show.querySelector('.javascript').innerHTML = arr[0].technologies[2]

const Popup_show = document.querySelectorAll('.link_to_project')
const close_popup = document.querySelector('.close')


function openPop() {
  const popup_open = document.querySelector('.model');
  popup_open.style.display = 'block';
}

function closePop() {
  const popup_close = document.querySelector('.model');
  popup_close.style.display = 'none';

}


Popup_show.addEventListener('click', () => {
  console.log('i am here')
  openPop();
});

close_popup.addEventListener('click', () => {
  closePop();
});

