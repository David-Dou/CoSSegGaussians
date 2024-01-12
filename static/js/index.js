window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation";
var NUM_INTERP_FRAMES = 180;
var MaskDINO_images = [];
function preloadMaskDINOImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/maskdino_remap/' + padi + '_ins_mod_panop_remap.png';
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
    var path = INTERP_BASE + '/stensorf_lp/' +'059999_'+ padi + '_panop.png';
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
var Semantic_images = [];
function preloadSemanticImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    p = i*3
    padi = p.toString().padStart(3, '0')
    var path = INTERP_BASE + '/sem_nerf/' +'vis_label_'+ padi + '_panop.png';
    Semantic_images[i] = new Image();
    Semantic_images[i].src = path;
  }
}
function setSemanticImage(i) {
  var image_Semantic = Semantic_images[i];
  image_Semantic.ondragstart = function() { return false; };
  image_Semantic.oncontextmenu = function() { return false; };
  $('#Semantic-image-wrapper').empty().append(image_Semantic);
}
var DM_NeRF_images = [];
function preloadDM_NeRFImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/dm_nerf/' +'instance_'+ padi + '_panop.png';
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
    var path = INTERP_BASE + '/panoptic_lifting/' + 'instance_'+ padi + '_panop.png';
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
var Ours_images = [];
function preloadOursImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    padi = i.toString().padStart(3, '0')
    var path = INTERP_BASE + '/ours/'+'039999_' + padi + '_panop.png';
    Ours_images[i] = new Image();
    Ours_images[i].src = path;
  }
}
function setOursImage(i) {
  var image_Ours = Ours_images[i];
  image_Ours.ondragstart = function() { return false; };
  image_Ours.oncontextmenu = function() { return false; };
  $('#Ours-image-wrapper').empty().append(image_Ours);
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

var GT_Base = "./static/interpolation/GT"
var GT_images = [];
function preloadGTImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = GT_Base + '/' + 'remap_vis_sem_instance_'+ String(i) +'_panop.png';
    GT_images[i] = new Image();
    GT_images[i].src = path;
  }
}

function setGTImage(i) {
  var image_GT = GT_images[i];
  image_GT.ondragstart = function() { return false; };
  image_GT.oncontextmenu = function() { return false; };
  $('#GT-image-wrapper').empty().append(image_GT);
}
var NUM_Mesh_FRAMES = 30;

var Mesh1_Base = "./static/mesh/gt"
var Mesh1_images = [];
function preloadMesh1Images() {
  for (var i = 0; i < NUM_Mesh_FRAMES; i++) {
    var path = Mesh1_Base + '/' + 'snapshot'+ String(i) + '.png';
    Mesh1_images[i] = new Image();
    Mesh1_images[i].src = path;
  }
}

function setMesh1Image(i) {
  var image_Mesh1 = Mesh1_images[i];
  image_Mesh1.ondragstart = function() { return false; };
  image_Mesh1.oncontextmenu = function() { return false; };
  $('#Mesh1-image-wrapper').empty().append(image_Mesh1);
}

var Mesh2_Base = "./static/mesh/sdf"
var Mesh2_images = [];
function preloadMesh2Images() {
  for (var i = 0; i < NUM_Mesh_FRAMES; i++) {
    var path = Mesh2_Base + '/' + 'snapshot'+ String(i) + '.png';
    Mesh2_images[i] = new Image();
    Mesh2_images[i].src = path;
  }
}

function setMesh2Image(i) {
  var image_Mesh2 = Mesh2_images[i];
  image_Mesh2.ondragstart = function() { return false; };
  image_Mesh2.oncontextmenu = function() { return false; };
  $('#Mesh2-image-wrapper').empty().append(image_Mesh2);
}

var Mesh3_Base = "./static/mesh/no-sdf"
var Mesh3_images = [];
function preloadMesh3Images() {
  for (var i = 0; i < NUM_Mesh_FRAMES; i++) {
    var path = Mesh3_Base + '/' + 'snapshot'+ String(i) + '.png';
    Mesh3_images[i] = new Image();
    Mesh3_images[i].src = path;
  }
}

function setMesh3Image(i) {
  var image_Mesh3 = Mesh3_images[i];
  image_Mesh3.ondragstart = function() { return false; };
  image_Mesh3.oncontextmenu = function() { return false; };
  $('#Mesh3-image-wrapper').empty().append(image_Mesh3);
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
    preloadSemanticImages();
    preloadDM_NeRFImages();
    preloadPanopticImages();
    preloadOursImages();
    preloadGTImages();
    $('#interpolation-slider').on('input', function(event) {
      setMaskDINOImage(this.value);
      setTensoRFLPImage(this.value);
      setSemanticImage(this.value);
      setDM_NeRFImage(this.value);
      setPanopticImage(this.value);
      setOursImage(this.value);
      setGTImage(this.value);
    });
    setMaskDINOImage(0);
    setTensoRFLPImage(0);
    setSemanticImage(0);
    setDM_NeRFImage(0);
    setPanopticImage(0);
    setOursImage(0);
    setGTImage(0);
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

    preloadMesh1Images();
    preloadMesh2Images();
    preloadMesh3Images();
    $('#Mesh-slider').on('input', function(event) {
      var count_mesh = this.value
      setMesh1Image(count_mesh);
      setMesh2Image(count_mesh);
      setMesh3Image(count_mesh);
    });
    setMesh1Image(0);
    setMesh2Image(0);
    setMesh3Image(0);
    $('#Mesh-slider').prop('max', NUM_Mesh_FRAMES - 1);
    bulmaSlider.attach();

    const changeImageBtn1 = document.querySelector("#change-image-btn1");
    const changeImageBtn2 = document.querySelector("#change-image-btn2");
    // 为按钮元素添加点击事件监听器
    changeImageBtn1.addEventListener("click", function() {
      // 更换输出的图片
      const outputImg1 = document.querySelector("#output-img1");
      outputImg1.src = "./static/editing/erasing.png";
    });

    changeImageBtn2.addEventListener("click", function() {
      // 更换输出的图片
      const outputImg2 = document.querySelector("#output-img2");
      outputImg2.src = "./static/editing/erasing_room0.png";
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

