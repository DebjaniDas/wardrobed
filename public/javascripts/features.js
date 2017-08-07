  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }
            
// var cardimages = document.getElementsByClassName('card-img-top')
// var images = Array.prototype.slice.call(cardimages) 

// images.forEach(function (element){
//     element.addEventListener('mouseover', function(){
//         showBookmark(element)
//     })
//     element.addEventListener('mouseout', function(){
//         hideTheBookmark(element)
//     })
// })
            
            
var filledbookmarks = document.getElementsByClassName('filledclip')
var bookmarkoutlines = document.getElementsByClassName('clip')

var clipoutlines = Array.prototype.slice.call( bookmarkoutlines)
var filledclipicons = Array.prototype.slice.call( filledbookmarks )



clipoutlines.forEach(function (element){
    element.addEventListener('click', function(){
      fill(element)  
    })


})

function fill(element){
    var selectedclipoutline = element
    var indexOfSelectedClipOutline = clipoutlines.indexOf(element)
    var matchingFilledIcon = filledclipicons[indexOfSelectedClipOutline]
    selectedclipoutline.setAttribute('style', 'display: none; visibility: hidden')
    matchingFilledIcon.setAttribute('style', 'display: inline-block; visibility: visible')
    
}


filledclipicons.forEach(function (element){
    element.addEventListener('click', function(){
        unfill(element)
    })
   

})

function unfill(element){
    var selectedclipfill = element
    var indexOfSelectedClipFill = filledclipicons.indexOf(element)
    var matchingOutlineIcon = clipoutlines[indexOfSelectedClipFill]
    selectedclipfill.setAttribute('style', 'display: none; visibility: hidden')
    matchingOutlineIcon.setAttribute('style', 'display: block')
    
    matchingOutlineIcon.addEventListener('mouseout', function(){
        hideBookmark(matchingOutlineIcon)
    })
}

function hideBookmark(matchingOutlineIcon){
    matchingOutlineIcon.setAttribute('style', 'display: none; visibility: hidden')
}

function hideTheBookmark(element){
    var selectedImage = element
    var index = images.indexOf(element)
    var correspondingOutlineIcon = clipoutlines[index]
    correspondingOutlineIcon.setAttribute('style', 'display: none; visibility: hidden')
}

function showBookmark(element){
    var selectedImage = element
    var index = images.indexOf(element)
    var correspondingOutlineIcon = clipoutlines[index]
    correspondingOutlineIcon.setAttribute('style', 'display: block; visibility: visible')
}


function search(){
    var input = document.getElementById('searchinput')
    if (input = 'Black Shirt'){
        var newUrl = "/search=Black-Shirt"
        document.location.href = newUrl  
    } else if (input = 'Blue Shoes'){
        var newUrl = "/search=Blue-shoes"
        document.location.href = newUrl 
    } else {
       var newUrl = "/search"
       document.location.href = newUrl   
    }

    
}