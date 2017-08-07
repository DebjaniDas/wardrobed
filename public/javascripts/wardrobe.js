
function fillHeart(){
    var outlineheart = document.getElementById('outlinehearticon').setAttribute('style', 'display:none; visibility:hidden')
    var filledheart = document.getElementById('filledhearticon')
    filledheart.setAttribute('style', 'display: inline-block; visibility:visible')
    $(function () {
            $('[data-toggle="tooltip"]').tooltip();
    });
//     html2canvas(document.getElementById("outfit"), allowTaint, {
//         onrendered: function(canvas) {
//             var tempcanvas = document.createElement('canvas');
//             tempcanvas.width=465;
//             tempcanvas.height=524;
//             var context=tempcanvas.getContext('2d');
//             context.drawImage(canvas,465,40,465,524,0,0,465,524);
//             var link=document.createElement("a");
//             link.href=canvas.toDataURL('image/jpg');
//             link.download = 'screenshot.jpg';
//             link.click();
//         }
//   })
}

function unfillHeart(){
    document.getElementById('filledhearticon').setAttribute('style', 'display:none; visibility:hidden')
    document.getElementById('outlinehearticon').setAttribute('style', 'display:nonel visibility:visible')
    $(function () {
            $('[data-toggle="tooltip"]').tooltip();
    });
}

 $('#snap').click(function () {
  html2canvas(document.getElementById("outfit"), {
    onrendered: function(canvas) {
        var context=canvas.getContext("2d")
        var img= new Image()
        img.src= 'http://ichef-1.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg'
        img.onload = function() {
            context.drawImage(img, 0, 50);// draws the image at the specified x and y location
                }
            // Convert and download as image 
            theCanvas = canvas;
            document.body.appendChild(canvas);
            

    }
  });
});
            
        // var theCanvas = canvas
        // document.body.appendChild(canvas);
        
        // var tempcanvas = document.createElement('canvas');
        // tempcanvas.width=465;
        // tempcanvas.height=524;
        // var context=tempcanvas.getContext('2d');
        // context.drawImage(canvas,465,40,465,524,0,0,465,524);
        // var link=document.createElement("a");
        // link.href=canvas.toDataURL('image/jpg');
        // link.download = 'screenshot.jpg';
        // link.click();

function fillHeart2(){
    var outlineheart = document.getElementById('outlinehearticon2').setAttribute('style', 'display:none; visibility:hidden')
    var filledheart = document.getElementById('filledhearticon2')
    filledheart.setAttribute('style', 'display: inline-block; visibility:visible')
    $(function () {
            $('[data-toggle="tooltip"]').tooltip();
    });
//     html2canvas(document.getElementById("outfit"), allowTaint, {
//         onrendered: function(canvas) {
//             var tempcanvas = document.createElement('canvas');
//             tempcanvas.width=465;
//             tempcanvas.height=524;
//             var context=tempcanvas.getContext('2d');
//             context.drawImage(canvas,465,40,465,524,0,0,465,524);
//             var link=document.createElement("a");
//             link.href=canvas.toDataURL('image/jpg');
//             link.download = 'screenshot.jpg';
//             link.click();
//         }
//   })
}

function unfillHeart2(){
    document.getElementById('filledhearticon2').setAttribute('style', 'display:none; visibility:hidden')
    document.getElementById('outlinehearticon2').setAttribute('style', 'display:nonel visibility:visible')
    $(function () {
            $('[data-toggle="tooltip"]').tooltip();
    });
}