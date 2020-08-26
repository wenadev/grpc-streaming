//Global controller
import '../sass/styles.scss';
import * as carouselView from './views/carouselView';
import {elements} from './views/base'
import * as Video from './modules/Video';
import {getVideos} from './modules/Result';

      //prepare UI for results
     Video.renderLoader(elements.previews);

      //get results
     var data = getVideos();

     //after getting result,clear loader
    Video.clearLoader();

      //render videos
      Video.renderVideos(data);   

      //handling user interaction
     carouselView.carouselElements();