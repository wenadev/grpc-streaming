//handling user interaction

import {elements} from './base';
import {fade} from '../modules/Video';

//change nav background-color on scroll
  $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 40) {
                $("#blur").css('background-image', 'url("../assets/background.jpg")');
                $("#navi").css('border-bottom', '1px solid rgb(80, 227, 194,0.8)');
                $("#navi").css('background', '-webkit-linear-gradient(-45deg, rgb(31, 38, 103, 0.75),rgb(18, 18, 18, 0.9),rgb(31, 38, 103,0.75))');
            } else if (scroll_pos < 40){
                 $("#blur").css('background-image', 'url("none")');
                $("#navi").css('border-bottom', 'none');
                $("#navi").css('background', 'none');

            }
        });
    });

// Instantiate the slick carousel
/*
    Carousel
*/     
  $(document).ready(function(){
    $('.carousel').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 400,
    dots:true,
    autoplay:true,
    autoplaySpeed: 6000,
    prevArrow:"<img style='height:30px;width:30px' class='a-left control-c prev slick-prev' src='./assets/left-arrow.png'>",
    nextArrow:"<img style='height:30px;width:30px' class='a-right control-c next slick-next' src='./assets/right-arrow.png'>",

    /*responsive*/
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
  });

  function playBack(){
    //scroll to main video element 
      window.scrollTo(0,0);

    elements.mainVideo.style.objectFit = "cover";
    elements.mainVideo.load();
                      
    //fade in videos as they are selected
    setTimeout(function(){
      fade(elements.mainVideo); 
      elements.mainVideo.play();
    }, 1500);
  }

  function formatSrc(source){
    //find occurence of "#" that indicates time interval of playback
     var search = source.indexOf("#");

     if(search > -1){
      let srcReplaced = source.substr(0,search);
      return srcReplaced;
    }
     else{
      alert("Error: No playback time interval found");
      return source;
     }
  }

export const carouselElements = () =>{
/*Storing the videos and sources from the carousel into an array*/

  var thumbNail= Array.from(document.getElementsByClassName("thumbNail"));
  var thumbnailSource= Array.from(document.getElementsByClassName("thumbNailSource"));

/* loading the main video element with video selected from the carousel */
  thumbNail.forEach(select =>
  {
    select.addEventListener("click", function()
    {
      for(var i = 0; i < thumbNail.length; i++){
        if ((thumbnailSource[i].dataset.num === String(`${i+1}`)) && (select.dataset.num === String(`${i+1}`))){
       
        let src = select.firstChild.nextElementSibling.attributes.src.value;
        const poster = select.getAttribute('poster');
        
        elements.mainVideo.setAttribute('poster',poster);
        elements.mainVideoSource.setAttribute('src',formatSrc(src));

        playBack();  
        }
      }
    });
  });

/*preview of video content on hover*/
thumbNail.forEach( function(hover){
        hover.addEventListener("mouseenter", function(){
            hover.play();
     });

        hover.addEventListener("mouseleave", function(){
          hover.pause();
          hover.load();
     });

   });

}