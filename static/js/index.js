window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/seg_video";
var NUM_INTERP_FRAMES = 180;
var MaskDINO_images = [];
function preloadMaskDINOImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/sem_group/' +'mod_colored_010000_'+ padi + '.png';
    MaskDINO_images[i] = new Image();
    MaskDINO_images[i].src = path;
  }
}
function setMaskDINOImage(i) {
  var image_MaskDINO = MaskDINO_images[i];
  image_MaskDINO.ondragstart = function() { return false; };
  image_MaskDINO.oncontextmenu = function() { return false; };
  $('#MaskDINO-image-wrapper').empty().append(image_MaskDINO);
}
var TensoRFLP_images = [];
function preloadTensoRLPImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/pano_group/' +'mod_colored_010000_'+ padi + '.png';
    TensoRFLP_images[i] = new Image();
    TensoRFLP_images[i].src = path;
  }
}
function setTensoRFLPImage(i) {
  var image_TensoRFLP = TensoRFLP_images[i];
  image_TensoRFLP.ondragstart = function() { return false; };
  image_TensoRFLP.oncontextmenu = function() { return false; };
  $('#TensoRF_LP-image-wrapper').empty().append(image_TensoRFLP);
}

var DM_NeRF_images = [];
function preloadDM_NeRFImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/sem_ours/' +'mod_colored_010000_'+ padi + '.png';
    DM_NeRF_images[i] = new Image();
    DM_NeRF_images[i].src = path;
  }
}
function setDM_NeRFImage(i) {
  var image_DM = DM_NeRF_images[i];
  image_DM.ondragstart = function() { return false; };
  image_DM.oncontextmenu = function() { return false; };
  $('#DM-image-wrapper').empty().append(image_DM);
}
var Panoptic_images = [];
function preloadPanopticImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/pano_ours/' + 'mod_colored_010000_'+ padi + '.png';
    Panoptic_images[i] = new Image();
    Panoptic_images[i].src = path;
  }
}
function setPanopticImage(i) {
  var image_Panoptic = Panoptic_images[i];
  image_Panoptic.ondragstart = function() { return false; };
  image_Panoptic.oncontextmenu = function() { return false; };
  $('#Panoptic-image-wrapper').empty().append(image_Panoptic);
}



var Editing_Base = "./static/editing"
var NUM_Editing_FRAMES = 4;
var Editing_images1 = [];
function preloadEditingImages1() {
  for (var i = 0; i < NUM_Editing_FRAMES; i++) {
    var path = Editing_Base + '/'  +String(i)+'editing' + '.png';
    Editing_images1[i] = new Image();
    Editing_images1[i].src = path;
  }
}

function setEditingImage1(i) {
  var image_Editing = Editing_images1[i];
  image_Editing.ondragstart = function() { return false; };
  image_Editing.oncontextmenu = function() { return false; };
  $('#Editing-image1-wrapper').empty().append(image_Editing);
}

var NUM_Editing_FRAMES2 = 6;
var Editing_images2 = [];
function preloadEditingImages2() {
  for (var i = 0; i < NUM_Editing_FRAMES2; i++) {
    var path = Editing_Base + '/'  +String(i)+'editing_room0' + '.png';
    Editing_images2[i] = new Image();
    Editing_images2[i].src = path;
  }
}

function setEditingImage2(i) {
  var image_Editing2 = Editing_images2[i];
  image_Editing2.ondragstart = function() { return false; };
  image_Editing2.oncontextmenu = function() { return false; };
  $('#Editing-image2-wrapper').empty().append(image_Editing2);
}

var RGB_Base = "./static/seg_video/gt"
var RGB_images = [];
function preloadRGBImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = RGB_Base + '/' + 'gt_030000_'+ padi +'.png';
    RGB_images[i] = new Image();
    RGB_images[i].src = path;
  }
}

function setRGBImage(i) {
  var image_RGB = RGB_images[i];
  image_RGB.ondragstart = function() { return false; };
  image_RGB.oncontextmenu = function() { return false; };
  $('#RGB-image-wrapper').empty().append(image_RGB);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadMaskDINOImages();
    preloadTensoRLPImages();
    preloadDM_NeRFImages();
    preloadPanopticImages();
 
    preloadRGBImages();
    $('#interpolation-slider').on('input', function(event) {
      setMaskDINOImage(this.value);
      setTensoRFLPImage(this.value);
      setDM_NeRFImage(this.value);
      setPanopticImage(this.value);
      setRGBImage(this.value);
    });
    setMaskDINOImage(0);
    setTensoRFLPImage(0);
    setDM_NeRFImage(0);
    setPanopticImage(0);
    setRGBImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
    
    bulmaSlider.attach();

    preloadEditingImages1();
    // preloadEditingImages2();
    $('#Editing-slider').on('input', function(event) {
      var count = this.value;
      // console.log(this.value);
      // console.log(count);
      setEditingImage1(count);
      // setEditingImage2(count)
    });
    setEditingImage1(0);
    // setEditingImage2(0);
    $('#Editing-slider').prop('max', NUM_Editing_FRAMES - 1);
    bulmaSlider.attach();

    preloadEditingImages2();
    // preloadEditingImages2();
    $('#Editing-slider1').on('input', function(event) {
      var count = this.value ;
      // console.log(this.value);
      // console.log(count);
      setEditingImage2(count);
      // setEditingImage2(count)
    });
    setEditingImage2(0);
    // setEditingImage2(0);
    $('#Editing-slider1').prop('max', NUM_Editing_FRAMES2 - 1);
    bulmaSlider.attach();

    

    const changeImageBtn1 = document.querySelector("#change-image-btn1");
    const changeImageBtn2 = document.querySelector("#change-image-btn2");
    // 为按钮元素添加点击事件监听器
    changeImageBtn1.addEventListener("click", function() {
      // 更换输出的图片
      const outputImg1a1 = document.querySelector("#output-img1a1");
      outputImg1a1.src = "./static/editing/GS_office.png";
      const outputImg1a2 = document.querySelector("#output-img1a2");
      outputImg1a2.src = "./static/editing/GS_office_detail.png";
      const outputImg1b1 = document.querySelector("#output-img1b1");
      outputImg1b1.src = "./static/editing/Ours_office.png";
      const outputImg1b2 = document.querySelector("#output-img1b2");
      outputImg1b2.src = "./static/editing/Ours_office_detail.png";
    });

    changeImageBtn2.addEventListener("click", function() {
      // 更换输出的图片
      const outputImg2a1 = document.querySelector("#output-img2a1");
      outputImg2a1.src = "./static/editing/GS_room.png";
      const outputImg2a2 = document.querySelector("#output-img2a2");
      outputImg2a2.src = "./static/editing/GS_room_detail.png";
      const outputImg2b1 = document.querySelector("#output-img2b1");
      outputImg2b1.src = "./static/editing/Ours_room.png";
      const outputImg2b2 = document.querySelector("#output-img2b2");
      outputImg2b2.src = "./static/editing/Ours_room_detail.png";
    });
    // const changeImageBtn = document.querySelector("#change-image-btn");

    // //  为按钮元素添加点击事件监听器
    // changeImageBtn.addEventListener("click", function() {
    // // 更换输出的图片
    // const outputImg = document.querySelector("#Editing-image-wrapper");
    
    // outputImg.src = "./static/images/interpolate_end.jpg";
    // console.log(outputImg);
    // }
});

