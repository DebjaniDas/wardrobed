var imageInfo = {}

function showExistantImages(){
  var database = firebase.database()
  var itemsRef = database.ref('/Items/Kdfioguidsofpgu')
  
  itemsRef.once("value", function(snapshot) {
            // Gets everything under "Kd..", iterates each item there
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                var url = childData.URL
                var category = childData.Category
                var nameOfItem = childData.Name
                imageInfo[nameOfItem] = {}
                console.log(imageInfo[nameOfItem])
                imageInfo[nameOfItem].url = url
                imageInfo[nameOfItem].category = category
                var source = imageInfo[nameOfItem].url
                if (nameOfItem == 'Tan Clarks' || nameOfItem == 'Maroon Keds' || nameOfItem == 'Boat Shoes' || nameOfItem == 'Black Heels' || nameOfItem == 'Uggs'){
                  showShoes(url, nameOfItem)
                } else if (nameOfItem == 'Mauve Dress'){
                  showDresses(url, nameOfItem)
                } else if (nameOfItem == 'Plaid Shirt' || nameOfItem == 'White T-Shirt' || nameOfItem == 'Sunflower Shirt' || nameOfItem == 'Mens Blue Collared Shirt'){
                  showTops(url, nameOfItem)
                } else if (nameOfItem == 'Blue Mens Jeans' || nameOfItem == 'Mens Coral Pants' || nameOfItem == 'Mom Jeans'){
                  showPants(url, nameOfItem)
                } else if (nameOfItem == 'Maroon Cardigan' || nameOfItem == 'Sunflower Sweater'){
                  showSweaters(url, nameOfItem)
                } else if (nameOfItem == 'Jean Shorts'){
                  showShorts(url, nameOfItem)
                } else if (nameOfItem == 'Sunflower Earrings'){
                  showJewelry(url, nameOfItem)
                } else if (nameOfItem == 'Tan Beanie'){
                  showHats(url, nameOfItem)
                } else if (nameOfItem == 'Golden Sunglasses'){
                  showGlasses(url, nameOfItem)
                } else if (nameOfItem == 'Black Purse'){
                  showPurses(url, nameOfItem)
                } else{
                  console.log('Houston, we have a problem.')
                  console.log(url)
                }
            });

      console.log(imageInfo)
      generateOutfit()
    })
    .catch(function(error){
        console.log(error)
        
    })
}

window.onload = showExistantImages

 $('#snap').click(function () {
  html2canvas(document.getElementById("outfit"), {
    onrendered: function(canvas) {
        var context=canvas.getContext("2d")
        var img= new Image()
        img.src= ''
        img.onload = function() {
            context.drawImage(img, 0, 50);// draws the image at the specified x and y location
                }
            // Convert and download as image 
            theCanvas = canvas;
            document.body.appendChild(canvas);
            

    }
  });
});


function showShoes(url, name){
  
  if (name == 'Maroon Keds'){
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'maroonkeds')
    element.setAttribute('ondragstart', 'dragStart(event)')
    document.getElementById('sneaksdiv').appendChild(element)
  } else if (name == 'Boat Shoes'){
      var element = document.createElement("img")
      element.setAttribute("src", url)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      element.setAttribute('draggable', 'true')
      element.setAttribute('id', 'boatshoes')
      // element.setAttribute('class', 'mover')
      element.setAttribute('ondragstart', ' dragStart(event)')
      document.getElementById('loaferdiv').appendChild(element)
  } else if (name == 'Tan Clarks'){
      var element = document.createElement("img")
      element.setAttribute("src", url)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      element.setAttribute('draggable', 'true')
      element.setAttribute('id', 'clarks')
      // element.setAttribute('class', 'mover')
      element.setAttribute('ondragstart', ' dragStart(event)')
      document.getElementById('bootsdiv').appendChild(element)
  } else if (name == 'Black Heels'){
    //black heels
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'heels')
    // element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('shoesdiv').appendChild(element)
  } else{
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "50")
    element.setAttribute("width", "50")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'uggs')
    // element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('bootsdiv').appendChild(element)
  }

}

function showDresses(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'dress')
  // element.setAttribute('class', 'mover')
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('dressdiv').appendChild(element)
}

function showTops(url, name){
  if (name == "Plaid Shirt"){
      var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'plaidshirt')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualtopdiv').appendChild(element)
    
  }else if (name == "Sunflower Shirt"){
      var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'sunflowershirt')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualtopdiv').appendChild(element)    
  }else if (name == 'Mens Blue Collared Shirt'){
      var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'bluecollaredshirt')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualtopdiv').appendChild(element)    
  } else{
      var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'whiteshirt')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualtopdiv').appendChild(element)    
  }

}

function showPants(url, name){
  if (name == 'Blue Mens Jeans'){
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'jeanspants')
    // element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualpantsdiv').appendChild(element)
  } else  if (name == 'Mens Coral Pants') {
    //mens coral pants
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'coralpants')
    //element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('casualpantsdiv').appendChild(element)
  } else {
      var element = document.createElement("img")
      element.setAttribute("src", url)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      element.setAttribute('draggable', 'true')
      element.setAttribute('id', 'momjeans')
      //element.setAttribute('class', 'mover')
      element.setAttribute('ondragstart', ' dragStart(event)')
      document.getElementById('casualpantsdiv').appendChild(element)
  }
}


function showShorts(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'jeansshorts')
  // element.setAttribute('class', 'mover')
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('shortsdiv').appendChild(element)
}

function showJewelry(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'earrings')
  // element.setAttribute('class', 'mover')
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('jewelrydiv').appendChild(element)
}

function showHats(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'beanie')
  // element.setAttribute('class', 'mover')
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('hatsdiv').appendChild(element)
}

function showGlasses(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'glasses')
  // element.setAttribute('class', 'mover')
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('eyeweardiv').appendChild(element)
}

function showSweaters(url, name){
  if (name == 'Maroon Cardigan'){
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'cardigan')
    // element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('cardigandiv').appendChild(element)
  } else {
    console.log(name)
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.setAttribute("height", "100")
    element.setAttribute("width", "100")
    element.setAttribute('draggable', 'true')
    element.setAttribute('id', 'sunflowersweater')
    // element.setAttribute('class', 'mover')
    element.setAttribute('ondragstart', ' dragStart(event)')
    document.getElementById('sweatershirtdiv').appendChild(element)
  }
}

function showPurses(url, name){
  var element = document.createElement("img")
  element.setAttribute("src", url)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('draggable', 'true')
  element.setAttribute('id', 'purse')
  // element.setAttribute('class', 'mover')
  // console.log(element)
  element.setAttribute('ondragstart', ' dragStart(event)')
  document.getElementById('pursediv').appendChild(element)
}
var id

// function allowDrop(ev){
//   ev.preventDefault()
// }

// function dragStart(ev){
//   //all of the images fire this function, so on starting to drag one image, this gets the image id and so far alerts it
//   id = ev.target.id
//   console.log(id)
// }

// function drop(ev){
//   ev.target.append(document.getElementById(id))
// }

function allowDrop(ev) {
    ev.preventDefault()
}

function dragStart(ev) {
    id = ev.target.id
    console.log(id)
    console.log(ev.dataTransfer.setData("image/jpeg", id))

}

function drop(ev) {
    ev.preventDefault()
    var data = ev.dataTransfer.getData("image/jpeg");
    var el = ev.target;
    if (!el.classList.contains('dropzone')) {
      el = ev.target.parentNode;
      ev.target.remove();
    }
    el.appendChild(document.getElementById(data).cloneNode(true));
}


// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("image", 'maroonkedsdrag');
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("shoediv");
//     console.log(data)
//     var el = ev.target;
//     console.log(el)
//     if (!el.classList.contains('dropzone')) {
//       el = ev.target.parentNode;
//       ev.target.remove();
//     }
//     el.appendChild(document.getElementById(data).cloneNode(true));
// }

// // function  drag(dragEvent){
// //   //start drag
// //   dragEvent.dataTransfer.setData("text/html", dragEvent.target.textContent+"|"+dragEvent.target.parentNode.id);
// // }


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1){
        return null;
    } else{
        return elt.options[elt.selectedIndex].text;
    }
}



function uploadImage(){
    var inputElement = document.getElementById("input")
    
    
    var category = getSelectedText('categoryid')
    if (category == null){
      document.getElementById('caterror')
      .setAttribute('style', 'display:inline-block; visibility:visible')
    } else{
       document.getElementById('caterror')
      .setAttribute('style', 'display:none; visibility:hidden')
    }
    console.log(category)
    
    var name = document.getElementById('nameid').value
    if (name == ''){
      document.getElementById('nameerror')
      .setAttribute('style', 'display:inline-block; visibility:visible')
    } else{
      document.getElementById('nameerror')
      .setAttribute('style', 'display:none; visibility:hidden')
    }
    console.log(name)
    
    
    // inputElement.addEventListener("change", handleFiles, false);
    // function handleFiles() {
    //   var fileList = this.files; /* now you can work with the file list */
    // }
    var storageRef = firebase.storage().ref();
    var filelist = inputElement.files
    console.log(filelist)
    var file = filelist[0]
    if (file == undefined){
      document.getElementById('choosefileerror')
      .setAttribute('style', 'display:inline-block; visibility:visible')
    } else{
      document.getElementById('choosefileerror')
      .setAttribute('style', 'display:none; visibility:hidden')
    }
    console.log(file)
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg',
      category: category,
      name: name
      
    };
    
    console.log(metadata)
    
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/userId/' + file.name).put(file, metadata);
    
   
    

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: 
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: 
            console.log('Upload is running');
            //var words = document.getElementById('uploadinfo')
            //words.innerHTML = "Your upload was successful! Please provide some info on your item:"
            //document.getElementById('create-user')
            //.setAttribute('style', 'display: inline-block; visibility: visible')
            break;
        }
      }, function(error) {
    
      switch (error.code) {
        case 'storage/unauthorized':
         
          break;
    
        case 'storage/canceled':
          
          break;
 
        case 'storage/unknown':
          break;
      }
    }, function() {
      
        var element = document.getElementById('successphrase')
        element.setAttribute('style', 'display:inline-block; visibility: visible')
        
        element = document.getElementById('uploadanother')
        element.setAttribute('style', 'display:inline-block; visibility: visible')
        
        element = document.getElementById('noandclose')
        element.setAttribute('style', 'display:inline-block; visibility: visible')
        
        
        
          
        var downloadURL = uploadTask.snapshot.downloadURL;
        
        console.log(downloadURL)
        addImageToDatabase(downloadURL, metadata)
      });
}


function addImageToDatabase(downloadURL, metadata){
    var database = firebase.database()
    var itemsRef = database.ref('/Items/Kdfioguidsofpgu')
    
    itemsRef.push({
        URL: downloadURL,
        Category: metadata.category,
        Name: metadata.name
    })
    .then(function(){
       var nameOfItem = metadata.name
       imageInfo[nameOfItem] = {}
       imageInfo[nameOfItem].url = downloadURL
       imageInfo[nameOfItem].category = metadata.category
       console.log(imageInfo)
       if (nameOfItem == 'Athletic Top'){
         var element = document.createElement("img")
         element.setAttribute("src", downloadURL)
         element.setAttribute("height", "100")
         element.setAttribute("width", "100")
         document.getElementById('athletictops').appendChild(element)
         document.getElementById('nothinginheretop').setAttribute('style', 'display:none; visibility:hidden')
       } else if (nameOfItem == 'Athletic Shorts'){
         var element = document.createElement("img")
         element.setAttribute("src", downloadURL)
         element.setAttribute("height", "100")
         element.setAttribute("width", "100")
         document.getElementById('athleticpants').appendChild(element)
         document.getElementById('nothinginherepants').setAttribute('style', 'display:none; visibility:hidden')
       }
    })
    .catch(function(error){
        console.log(error)
        
    })
}

var cnt = 0

function incrementCounter(){
  cnt++
  return cnt
}

// function CountFun(){
//   // cnt = parseInt(cnt) + parseInt(1);
//   var cnt = 0
//   cnt++
//   // var divData=document.getElementById("generateoutfitbutton");
//   return cnt//this part has been edited
// }

function createHat(source, height, width){
  var element = document.createElement("img")
  element.setAttribute("src", source)
  element.setAttribute("height", height)
  element.setAttribute("width", width)
  element.setAttribute('id', 'hat')
  document.getElementById('hatdiv').appendChild(element)   
}

function createAccessory(source){
  var element = document.createElement("img")
  element.setAttribute("src", source)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('id', 'semitop')  
  document.getElementById('semitopdiv').appendChild(element)
}

function createShirt(source){
  var element = document.createElement("img")
  element.setAttribute("src", source)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('id', 'top')
  document.getElementById('topdiv').appendChild(element)  
}

function createPants(source, height, width){
  var element = document.createElement("img")
  element.setAttribute("src", source)
  element.setAttribute("height", height)
  element.setAttribute("width", width)
  element.setAttribute('id', 'legwear')
  document.getElementById('legweardiv').appendChild(element)  
}

function createShoes(source){
  var element = document.createElement("img")
  element.setAttribute("src", source)
  element.setAttribute("height", "100")
  element.setAttribute("width", "100")
  element.setAttribute('id', 'shoe')
 document.getElementById('shoediv').appendChild(element)
}

function updatehat(source){
  document.getElementById('semitop').setAttribute('src', source)
}

function hideHat(){
  document.getElementById('hatdiv').style.display = 'none'
  document.getElementById('hatdiv').style.visibility = 'hidden'
}


function hideShoes(){
  document.getElementById('shoediv').style.display = 'none'
  document.getElementById('shoediv').style.visibility = 'hidden'
}
function displayHat(){
  document.getElementById('hatdiv').style.display = 'block'
  document.getElementById('hatdiv').style.visibility = 'visible'  
}

function hidePants(){
  document.getElementById('legweardiv').style.display = 'none'
  document.getElementById('legweardiv').style.visibility = 'hidden'
}

function displayPants(){
  document.getElementById('legweardiv').style.display = 'block'
  document.getElementById('legweardiv').style.visibility = 'visible' 
}

function displayShoes(){
  document.getElementById('shoediv').style.display = 'block'
  document.getElementById('shoediv').style.visibility = 'visible' 
}

function updateAccessory(source, height, width){
  document.getElementById('semitop').setAttribute('src', source)
  document.getElementById('semitop').setAttribute('height', height)
  document.getElementById('semitop').setAttribute('width', width)
}

function updateHat(source){
  document.getElementById('hat').setAttribute('src', source)
}

function updateShirt(source, height, width){
  document.getElementById('top').setAttribute('src', source)
  document.getElementById('top').setAttribute('height', height)
  document.getElementById('top').setAttribute('width', width)
  
}

function updatePants(source, height, width){
   document.getElementById('legwear').setAttribute('src', source)
     document.getElementById('legwear').setAttribute('height', height)
  document.getElementById('legwear').setAttribute('width', width)
 
}

function updateShoes(source){
  document.getElementById('shoe').setAttribute('src', source)
  
}

function createImagesAndDisplayOutfitOne(){

  var source
  source = 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/4/44/White_square.png/revision/latest?cb=20061003200043'
  var height = "50px"
  var width = "50px"
  createHat(source, height, width) // Create sunglasses accessory

    
 
  createAccessory(source) // Create shirts
 


  createShirt(source) // Create pants
  
    

  height = "80px"
  width = "80px"
  // console.log(source)
  createPants(source, height, width)
  
  hideShoes()
 
}

function displayOutfitOneAgain(){
  hideHat()
  var height = "50px"
  var width = "50px"
  var height2 = "100px"
  var width2 = "100px"
  updateAccessory(imageInfo['Golden Sunglasses'].url, height, width)
  updateShirt(imageInfo['Mens Blue Collared Shirt'].url, height2, width2)
  updatePants(imageInfo['Mens Coral Pants'].url, height2, width2)
  updateShoes(imageInfo['Boat Shoes'].url, height2, width2)
}

function displayOutfitTwoAgain(){
  updateHat(imageInfo['Tan Beanie'].url)
  displayHat()
  var height = "100px"
  var width = "100px"
  updateAccessory(imageInfo['Plaid Shirt'].url, height, width)
  updateShirt(imageInfo['White T-Shirt'].url, height, width)
  updatePants(imageInfo['Blue Mens Jeans'].url, height, width)
  updateShoes(imageInfo['Tan Clarks'].url)
}

function displayOutfitTwo(){

  updateHat(imageInfo['Tan Beanie'].url)
  displayHat()
  var height = "100px"
  var width = "100px"
  updateAccessory(imageInfo['Plaid Shirt'].url, height, width)
  updateShirt(imageInfo['White T-Shirt'].url, height, width)
  updatePants(imageInfo['Blue Mens Jeans'].url, height, width)
  createShoes(imageInfo['Tan Clarks'].url)
  displayShoes()
}

function displayOutfitThree(){
  // createHat(imageInfo['Tan Beanie'].url)
  hideHat()
  var height = "90px"
  var width = "90px"
  var height2 = "200px"
  var width2= "150px"
  updateAccessory(imageInfo['Black Purse'].url, height, width)
  updateShirt(imageInfo['Mauve Dress'].url, height2, width2)

  hidePants()
  updateShoes(imageInfo['Black Heels'].url)  
}

function displayOutfitFour(){
  updateHat(imageInfo['Sunflower Earrings'].url)
  displayHat()
  var height = "120px"
  var width = "120px"
  
  updateAccessory(imageInfo['Maroon Cardigan'].url, height, width)
  updateShirt(imageInfo['Sunflower Shirt'].url, height, width)
  updatePants(imageInfo['Jean Shorts'].url, height, width)
  displayPants()
  updateShoes(imageInfo['Maroon Keds'].url)  
}

function generateOutfit(){
  // Count the number of clicks
  var numberOfClicks = incrementCounter()
  console.log(numberOfClicks)
  document.getElementById('outlinehearticon').setAttribute('style', 'display:inline-block; visibility: visible')
  createImagesAndDisplayOutfitOne()
  
}


  
  
  function generateRestOfOutfits(){
    var numberOfClicks = incrementCounter()
    console.log(numberOfClicks)
    
    if (numberOfClicks == 1) {
      createImagesAndDisplayOutfitOne()

    } else if (numberOfClicks == 2) {
      displayOutfitTwo() 
      document.getElementById('leftarrow').addEventListener('click', function(){
        displayPreviousOutfit(numberOfClicks)
      })
    } else if (numberOfClicks == 3) {
      displayOutfitThree() 
      document.getElementById('leftarrow').addEventListener('click', function(){
        displayOutfitTwoAgain()
      })
    } else if (numberOfClicks == 4) {
      displayOutfitFour() 
      document.getElementById('leftarrow').addEventListener('click', function(){
        displayOutfitThree()
      })
      
    } else if (numberOfClicks == 5){
      displayOutfitOneAgain()
      document.getElementById('leftarrow').addEventListener('click', function(){
        displayOutfitFour()
      })
      
    } else if (numberOfClicks == 6){
      displayOutfitTwoAgain()
      document.getElementById('leftarrow').addEventListener('click', function(){
        displayOutfitOneAgain()
      })
      numOfClicks = numberOfClicks
      cnt = 2
      
      
    } else{
      console.log('Houston, we are screwed.')
    }
  }

 


// function get 
function displayPreviousOutfit(numberOfClicks){
  var prevOutfitNum = numberOfClicks - 1
  if (prevOutfitNum == 1){
    displayOutfitOneAgain()
  } if (prevOutfitNum == 2){
    displayOutfitTwoAgain()
  } if (prevOutfitNum == 3){
    displayOutfitThree()
  } if (prevOutfitNum == 4){
    displayOutfitFour()
  } if (prevOutfitNum == 5){
    displayOutfitOneAgain()
    prevOutfitNum = 1
  } else{
    console.log('error')
  }
}


function uploadAnotherImage(){
  var name = document.getElementById('nameid')
  name.value = ''
  var elt = document.getElementById('categoryid')
  elt.selectedIndex = -1
  var fileElement = document.getElementById('input')
  fileElement.value = null
  document.getElementById('successphrase').setAttribute('style', 'display:none; visibility:hidden')
  document.getElementById('uploadanother').setAttribute('style', 'display:none; visibility:hidden')
  document.getElementById('noandclose').setAttribute('style', 'display:none; visibility:hidden')
  
}

//   document.getElementById('likebutton')
//   .setAttribute('style', 'display: inline-block; visibility: visible')

//   if (numberOfClicks == 2){
//     // Hide all the previous elements and only display 
//     document.getElementById("top").style.display ='none'
//     document.getElementById("semitop").style.display ='none'
//     document.getElementById("legwear").style.display ='none'
//     document.getElementById("shoe").style.display ='none'
    
//     updateAccessory(imageInfo['Tan Beanie'].url)
    
//     beanieSource = imageInfo['Tan Beanie'].url
    
//     element = document.createElement("img")
//     element.setAttribute("src", source)
//     element.setAttribute("height", "60")
//     element.setAttribute("width", "60")
//     element.setAttribute('id', 'sechat')
//     document.getElementById('hatdiv').appendChild(element)
//     source = imageInfo['Plaid Shirt'].url
//     var element = document.createElement("img")
//     element.setAttribute("src", source)
//     element.setAttribute("height", "100")
//     element.setAttribute("width", "100")
//     element.setAttribute('id', 'secsemitop')
//     document.getElementById('semitopdiv').appendChild(element)
//     source = imageInfo['White T-Shirt'].url
//     var element = document.createElement("img")
//     element.setAttribute("src", source)
//     element.setAttribute("height", "100")
//     element.setAttribute("width", "100")
//     element.setAttribute('id', 'sectop')
//     document.getElementById('topdiv').appendChild(element)
//     source = imageInfo['Blue Mens Jeans'].url
//     var element = document.createElement("img")
//     element.setAttribute("src", source)
//     element.setAttribute("height", "100")
//     element.setAttribute("width", "100")
//     element.setAttribute('id', 'seclegwear')
//     document.getElementById('legweardiv').appendChild(element)
//     source = imageInfo['Tan Clarks'].url
//     var element = document.createElement("img")
//     element.setAttribute("src", source)
//     element.setAttribute("height", "100")
//     element.setAttribute("width", "100")
//     element.setAttribute('id', 'secshoe')
//     document.getElementById('shoediv').appendChild(element)

//   } else if (numberOfClicks==1){
//       source = imageInfo['Golden Sunglasses'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "50")
//       element.setAttribute("width", "50")
//       element.setAttribute('id', 'semitop')
//       document.getElementById('semitopdiv').appendChild(element)
      
//       source = imageInfo['Mens Blue Collared Shirt'].url
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'top')
//       document.getElementById('topdiv').appendChild(element)

//     source = imageInfo['Mens Coral Pants'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'legwear')
//       document.getElementById('legweardiv').appendChild(element)
      
//     source = imageInfo['Boat Shoes'].url
//     console.log(source)
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'shoe')
//       document.getElementById('shoediv').appendChild(element)
  
    
//   } else if (numberOfClicks == 3){
//     document.getElementById("sectop").style.display='none'
//     document.getElementById("secsemitop").style.display='none'
//     document.getElementById("seclegwear").style.display='none'
//     document.getElementById("secshoe").style.display='none'
//     document.getElementById("sechat").style.display='none'
     
         
//       source = imageInfo['Mauve Dress'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "180")
//       element.setAttribute("width", "150")
//       element.setAttribute('id', 'thirdsemitop')
//       document.getElementById('semitopdiv').appendChild(element)
      
//     source = imageInfo['Black Heels'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "90")
//       element.setAttribute("width", "90")
//       element.setAttribute('id', 'thirdshoe')
//       document.getElementById('shoediv').appendChild(element)
      
//       source = imageInfo['Black Purse'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "90")
//       element.setAttribute("width", "90")
//       element.setAttribute('id', 'thirdhat')
//       document.getElementById('hatdiv').appendChild(element)
      
      

      
      
      
     
     
    
    
//   } else if (numberOfClicks == 4){
 
//     document.getElementById("thirdsemitop").style.display='none'

//     document.getElementById("thirdshoe").style.display='none'
//     document.getElementById("thirdhat").style.display='none'
     
//       source = imageInfo['Maroon Cardigan'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "80")
//       element.setAttribute('id', 'fourthsemitop')
//       document.getElementById('semitopdiv').appendChild(element)
      
//       source = imageInfo['Sunflower Shirt'].url
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'fourthtop')
//       document.getElementById('topdiv').appendChild(element)
      
//       source = imageInfo['Sunflower Earrings'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "50")
//       element.setAttribute("width", "50")
//       element.setAttribute('id', 'fourthhat')
//       document.getElementById('hatdiv').appendChild(element)
      
//     source = imageInfo['Jean Shorts'].url
//     var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'fourthlegwear')
//       document.getElementById('legweardiv').appendChild(element)
      
//       source = imageInfo['Maroon Keds'].url
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('id', 'fourthshoe')
//       document.getElementById('shoediv').appendChild(element)

    
//   } else{
//     //meaning selectedOutfitNum =5
//     console.log('to be determined')
//   }
  
// }

function clearCanvas(){
  document.getElementById('generatedoutfitcanvas').setAttribute('style', 'display:none; visibility: hidden')
  document.getElementById('makeyourowncanvas').setAttribute('style', 'display:inline-block; visibility: visible')
}

function unclearCanvas(){
  document.getElementById('makeyourowncanvas').setAttribute('style', 'display:none; visibility: hidden')
  document.getElementById('generatedoutfitcanvas').setAttribute('style', 'display: block; visibility: visible')
}


// function generateOutfit(){
//   var imageInfoSize =  Object.size(imageInfo)
//   console.log(imageInfoSize)
//   var randNum = Math.floor((Math.random() * imageInfoSize))
//   console.log(randNum)
//   var itemAtRandNum = imageInfo[Object.keys(imageInfo)[randNum]];
//   console.log(itemAtRandNum)
//   var itemCategory = itemAtRandNum.category
//   console.log(itemCategory)

//   if (itemCategory == 'Dresses'){
//       var shoeArray = []
//       var topsArray = []
//       var source = itemAtRandNum.url
//       console.log(source)
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(element)
//     for(i=0; i<imageInfoSize; i++){
//       if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
//         shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else{
//         console.log('Not a shoe, skipping.')
//       }
//     }
//     console.log(shoeArray)
//     var shoeArraySize = shoeArray.length
//     randNum = Math.floor((Math.random() * shoeArraySize))
//     console.log(randNum)
//     var selectedShoeURL = shoeArray[randNum]
//     console.log(selectedShoeURL)
//     var el = document.createElement("img")
//     el.setAttribute("src", selectedShoeURL)
//     el.setAttribute("height", "100")
//     el.setAttribute("width", "100")
//     el.setAttribute('class', 'shoediv')
//     document.getElementById('canvasdiv').appendChild(el)
    
    
    
//   } else if (itemCategory == "Shorts" || itemCategory == "Pants" || itemCategory == "Skirts") {
//     var shoeArray = []
//       var topsArray = []
//     var source = itemAtRandNum.url
//       console.log(source)
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'legweardiv')
//       document.getElementById('canvasdiv').appendChild(element)
//       for(i=0; i<imageInfoSize; i++){
//         if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
//           shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
//         } else{
//           console.log('Not a shoe, skipping.')
//         }
//         if (imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
//           topsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
//         }else{
//           console.log('Not a top, skipping.')
//         }
//       }
//       console.log(shoeArray)
//       console.log(topsArray)
//       var shoeArraySize = shoeArray.length
//       randNum = Math.floor((Math.random() * shoeArraySize))
//       console.log(randNum)
//       var selectedShoeURL = shoeArray[randNum]
//       console.log(selectedShoeURL)
//       var el = document.createElement("img")
//       el.setAttribute("src", selectedShoeURL)
//       el.setAttribute("height", "100")
//       el.setAttribute("width", "100")
//       el.setAttribute('class', 'shoediv')
//       document.getElementById('canvasdiv').appendChild(el)
      
//       var topsArraySize = topsArray.length
//       randNum = Math.floor((Math.random() * topsArraySize))
//       console.log(randNum)
//       var selectedTopURL = topsArray[randNum]
//       console.log(selectedTopURL)
//       var elem = document.createElement("img")
//       elem.setAttribute("src", selectedTopURL)
//       elem.setAttribute("height", "100")
//       elem.setAttribute("width", "100")
//       elem.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(elem)
      
//   } else if (itemCategory == "Tops (Shirts, Blouses, Tanks)") {
//     var shoeArray = []
//     var shortsArray = []
//     var pantsArray = []
//     var source = itemAtRandNum.url
//       console.log(source)
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(element)
//       for(i=0; i<imageInfoSize; i++){
//         if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
//           shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
//         } else{
//           console.log('Not a shoe, skipping.')
//         }
//         if (imageInfo[Object.keys(imageInfo)[i]].category == "Shorts"){
//           shortsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
//         }else{
//           console.log('Not shorts, skipping.')
//         }
//       }
//       console.log(shoeArray)
//       console.log(shortsArray)
//       var shoeArraySize = shoeArray.length
//       randNum = Math.floor((Math.random() * shoeArraySize))
//       console.log(randNum)
//       var selectedShoeURL = shoeArray[randNum]
//       console.log(selectedShoeURL)
//       var el = document.createElement("img")
//       el.setAttribute("src", selectedShoeURL)
//       el.setAttribute("height", "100")
//       el.setAttribute("width", "100")
//       element.setAttribute('class', 'shoediv')
//       document.getElementById('canvasdiv').appendChild(el)
      
//       var shortsArraySize = shortsArray.length
//       randNum = Math.floor((Math.random() * shortsArraySize))
//       console.log(randNum)
//       var selectedShortsURL = shortsArray[randNum]
//       console.log(selectedShortsURL)
//       var elem = document.createElement("img")
//       elem.setAttribute("src", selectedShortsURL)
//       elem.setAttribute("height", "100")
//       elem.setAttribute("width", "100")
//       element.setAttribute('class', 'legweardiv')
//       document.getElementById('canvasdiv').appendChild(elem)
      
//   } else {
//     //meaning that the category is shoes
//       var source = itemAtRandNum.url
//       console.log(source)
//       var element = document.createElement("img")
//       element.setAttribute("src", source)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'shoediv')
//       document.getElementById('canvasdiv').appendChild(element)
//     var Obj = {
//       tops: [],
//       shorts: [],
//       pants: [],
//       skirts: [],
//       dresses: []
//     }

//     for (i= 0; i<imageInfoSize; i++){
//       if(imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
//         Obj.tops.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Shorts"){
//         Obj.shorts.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Pants"){
//         Obj.pants.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Skirts"){
//         Obj.skirts.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Dresses"){
//         Obj.dresses.push(imageInfo[Object.keys(imageInfo)[i]].url)
//       } else {
//         console.log('This is a shoe, skipping.')
//       }
//     }
//     var objectSize = Object.size(Object)
//     randNum = Math.floor((Math.random() * objectSize))
//     var selectedCategory = Obj[Object.keys(Obj)[randNum]].category
//     var selectedCategoryUrl = Obj[Object.keys(Obj)[randNum]].url
    
//     if (selectedCategory == 'Tops (Shirts, Blouses, Tanks)'){
//       element = document.createElement("img")
//       element.setAttribute("src", selectedCategoryUrl)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(element)
//       var bottomWear = []
//       bottomWear.splice.apply(bottomWear, [2, 0].concat(Obj.shorts))
//       bottomWear.splice.apply(bottomWear, [2, 0].concat(Obj.skirts))
//       console.log(bottomWear)
//       randNum = Math.floor((Math.random() * bottomWear.length))
//       var selectedBottomUrl = bottomWear[randNum]
//       var element2 = document.createElement("img")
//       element2.setAttribute("src", selectedBottomUrl)
//       element2.setAttribute("height", "100")
//       element2.setAttribute("width", "100")
//       element2.setAttribute('class', 'legweardiv')
//       document.getElementById('canvasdiv').appendChild(element2)
      

      
      
//     } else if (selectedCategory == "Shorts" || selectedCategory == "Pants" || selectedCategory == "Skirts"){
//       element = document.createElement("img")
//       element.setAttribute("src", selectedCategoryUrl)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'legweardiv')
//       document.getElementById('canvasdiv').appendChild(element)
//       randNum = Math.floor((Math.random() * Obj.tops.length))
//       var selectedTop = Obj.tops[randNum].url
//       var element1 = document.createElement("img")
//       element1.setAttribute("src", selectedTop)
//       element1.setAttribute("height", "100")
//       element1.setAttribute("width", "100")
//       element1.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(element1)
      
//     } else if (selectedCategory == "Dresses"){
//       element = document.createElement("img")
//       element.setAttribute("src", selectedCategoryUrl)
//       element.setAttribute("height", "100")
//       element.setAttribute("width", "100")
//       element.setAttribute('class', 'topdiv')
//       document.getElementById('canvasdiv').appendChild(element)
      
//     } else {
//       console.log('Whaaat category is this, bruh?')
//     }
    
//   }

// }



// function uploadPause(){
//   uploadTask.pause();
// }

// function uploadResume(){
//   uploadTask.resume();
// }

// function uploadCancel(){
//   uploadTask.cancel();
// }