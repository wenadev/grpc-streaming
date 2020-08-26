import {elements} from  '../views/base';

//func to prepare UI for results and render loader
export const renderLoader = parent => {
  const loader = `
    <div class="loader">
      <img src="../assets/loader.gif" alt="loading gif">
      <p>retrieving videos...</p>
    </div>
  `;
  parent.insertAdjacentHTML('beforeend',loader);
}


/*func to render results*/
let slideIndex = 0;

export const renderResult= video => {
  slideIndex++;
  const markup = `
      <div class="fg">
        <div class="nav-wrap">
            <video data-num="${slideIndex}" class="thumbNail" poster ="${video.thumbnail}" muted preload="none">
              <source data-num="${slideIndex}" class="thumbNailSource" src="${video.src}#t=0,5" type ="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <p>Caption</p>
      </div>
  `;
 elements.carousel.insertAdjacentHTML('beforeend', markup);
}

export const renderVideos = videos =>{
  videos.forEach(renderResult);
};

//func to fade in main video playing 
export const fade = element => {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 10);
}

//func to clear loader
export const clearLoader = () => {
  const loader = document.querySelector(`.loader`);
  if (loader) loader.parentElement.removeChild(loader);
}
