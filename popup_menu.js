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

const arr = [
  {
    id: '1',
    Project_name: 'TONIC',
    Featured_image: 'images/Snapshoot_Portfolio .png',
    Feature_image_desk: 'images/Snapshoot_Portfolio_(4).png',
    Featured0: 'CANOPY',
    Featured1: 'Back End Dev',
    Featured2: '2015',
    Project_descr:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies0: 'html',
    technologies1: 'javascript',
    technologies2: 'css',
    Project_descr_pop:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    link_to_live_version:
      'https://hakichris.github.io/Christian_Portfolio.github.io/',
    Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
  },

  {
    id: '2',
    Project_name: 'Multi-Post Stories',
    Featured_image: 'images/Snapshoot_Portfolio_(1).png',
    Feature_image_desk: 'images/Snapshoot_Portfolio_(5).png',
    Featured0: 'CANOPY',
    Featured1: 'Back End Dev',
    Featured2: '2015',
    Featured3: 'FACEBOOK',
    Featured4: 'Full Stack Dev',
    Project_descr:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies0: 'html',
    technologies1: 'javascript',
    technologies2: 'css',
    technologies3: 'Ruby on rails',
    Project_descr_pop:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    link_to_live_version:
      'https://hakichris.github.io/Christian_Portfolio.github.io/',
    Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
  },

  {
    id: '3',
    Project_name: 'Facebook 360',
    Featured_image: 'images/Snapshoot_Portfolio_(2).png',
    Feature_image_desk: 'images/Snapshoot_Portfolio_(6).png',
    Featured0: 'CANOPY',
    Featured1: 'Back End Dev',
    Featured2: '2015',
    Featured3: 'FACEBOOK',
    Featured4: 'Full Stack Dev',
    Project_descr:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies0: 'html',
    technologies1: 'javascript',
    technologies2: 'css',
    technologies3: 'Ruby on rails',
    Project_descr_pop:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    link_to_live_version:
      'https://hakichris.github.io/Christian_Portfolio.github.io/',
    Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
  },

  {
    id: '4',
    Project_name: 'Uber Navigation',
    Featured_image: 'images/Snapshoot_Portfolio_(3).png',
    Feature_image_desk: 'images/Snapshoot_Portfolio_(4).png',
    Featured0: 'CANOPY',
    Featured1: 'Back End Dev',
    Featured2: '2015',
    Featured3: 'FACEBOOK',
    Featured4: 'Full Stack Dev',
    Project_descr:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies0: 'html',
    technologies1: 'javascript',
    technologies2: 'css',
    technologies3: 'Ruby on rails',
    Project_descr_pop:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    link_to_live_version:
      'https://hakichris.github.io/Christian_Portfolio.github.io/',
    Source: 'https://github.com/hakichris/Christian_Portfolio.github.io.git',
  },
];

const works = document.querySelectorAll('.work');
const worksdesk = document.querySelectorAll('.works');

for (let i = 0; i < arr.length; i += 1) {
  const image = document.createElement('img');
  const images = document.createElement('img');
  image.setAttribute('src', arr[i].Featured_image);
  images.setAttribute('src', arr[i].Feature_image_desk);
  works[i].appendChild(image);
  worksdesk[i].appendChild(images);
  works[i].querySelector('.project_name').innerHTML = arr[i].Project_name;
  works[i].querySelector('#h3').innerHTML = arr[i].Featured0;
  works[i].querySelector('.langue').innerHTML = arr[i].Featured1;
  works[i].querySelector('.year').innerHTML = arr[i].Featured2;
  works[i].querySelector('.project_description').innerHTML = arr[i].Project_descr;
  works[i].querySelector('.html').innerHTML = arr[i].technologies0;
  works[i].querySelector('.css').innerHTML = arr[i].technologies1;
  works[i].querySelector('.javascript').innerHTML = arr[i].technologies2;
  worksdesk[i].querySelector('.project_name').innerHTML = arr[i].Project_name;
  worksdesk[i].querySelector('#h3').innerHTML = arr[i].Featured0;
  worksdesk[i].querySelector('.langue').innerHTML = arr[i].Featured1;
  worksdesk[i].querySelector('.year').innerHTML = arr[i].Featured2;
  worksdesk[i].querySelector('.project_description').innerHTML = arr[i].Project_descr;
  worksdesk[i].querySelector('.html').innerHTML = arr[i].technologies0;
  worksdesk[i].querySelector('.css').innerHTML = arr[i].technologies1;
  worksdesk[i].querySelector('.javascript').innerHTML = arr[i].technologies2;
}

const popupshow = document.querySelectorAll('.mob_link');
const image = document.createElement('img');
image.setAttribute('src', 'images/Enabled.png');
image.setAttribute('class', 'close');

function openPop() {
  const model = document.querySelector('.model');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  popupshow.forEach((pop) => {
    pop.addEventListener('click', function handleClick(e){
      for (let i = 0; i <= arr.length; i++) {
        if (pop.id === arr[i]?.id) {
          console.log(arr[i].Project_name)
          overlay.innerHTML = `<div class="Project info">
                                  <h3 class="project_name name">${arr[i].Project_name}</h3>
                                  <div class="overlayImage"></div>
                                   <ul class="client">
                                           <li id="h3">${arr[i].Featured0} </li>
                                           <li class="Counter">
                                           <img src="images/Counter.png" alt="" />
                                          </li>
                                           <li class="langue"> ${arr[i].Featured1}</li>
                                           <li class="Counter">
                                            <img src="images/Counter.png" alt=""/>
                                          </li>
                                          <li class="year"> ${arr[i].Featured2}</li>
                                    </ul>
                                   <div><img src=${arr[i].Featured_image} alt="Image_descr" class="model_image"></div>
                                   <div class="works_details model_flex">
                                       <p class="project_description">
                                      ${arr[i].Project_descr_pop}
                                       </p>
                                      <ul class="code_language">
                                          <li ><a class="ht html" href="#"> ${arr[i].technologies0}</a></li>
                                          <li ><a class="ht css" href="#"> ${arr[i].technologies1}</a></li>
                                              <li ><a class="ht javascript" href="#"> ${arr[i].technologies2}</a></li>
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
                        `;
          model.appendChild(overlay);
          model.style.display = 'block';
          const modalImage = document.querySelector('.overlayImage');
          modalImage.appendChild(image);

          const closepopup = document.querySelector('.close');
          closepopup.addEventListener('click', () => {
            closePop();
          });
        }
      }
    })
  });

  function closePop() {
    const popupclose = document.querySelector('.model');
    popupclose.style.display = 'none';
  }
}

popupshow.forEach((key) => {
  key.addEventListener('click', () => {
    openPop();
  });
});

openPop()
