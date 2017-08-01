var imageInfo = {}
console.log(imageInfo)


function showExistantImages(){
  var database = firebase.database()
  var itemsRef = database.ref('/Items/Kdfioguidsofpgu')
  
  itemsRef.once("value", function(snapshot) {
            // Gets everything under "Kd..", iterates each item there
            snapshot.forEach(function(childSnapshot) {
                // "bobpost1", "bobpost2", etc
                //var key = childSnapshot.key();
                // Data underneath bobpost#
                var childData = childSnapshot.val();
                var url = childData.URL
                var category = childData.Category
                var nameOfItem = childData.Name
                imageInfo[nameOfItem] = {}
                console.log(imageInfo[nameOfItem])
                imageInfo[nameOfItem].url = url
                imageInfo[nameOfItem].category = category
                console.log(imageInfo)
                var imageInfoSize =  Object.size(imageInfo)
                console.log(imageInfoSize)
                
                for(i=0; i<imageInfoSize; i++){
                  var source = imageInfo[nameOfItem].url
                  var element = document.createElement("img")
                  element.setAttribute("src", source)
                  element.setAttribute("height", "100")
                  element.setAttribute("width", "100")
                  document.getElementById('shirtdiv').appendChild(element)
                }
                
                
        
                // Iterates through tags
                // for(i in childData.tags) {
                //      Do/check something
                //      If post contains all specified tags, then store key somewhere
                // }
            });
      console.log(imageInfo)
      
      

    })
    .catch(function(error){
        console.log(error)
        
    })
}

window.onload = showExistantImages


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
    console.log(category)
    
    var name = document.getElementById('nameid').value
    console.log(name)
    
    
    // inputElement.addEventListener("change", handleFiles, false);
    // function handleFiles() {
    //   var fileList = this.files; /* now you can work with the file list */
    // }
    var storageRef = firebase.storage().ref();
    var filelist = inputElement.files
    console.log(filelist)
    var file = filelist[0]
    console.log(file)
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg',
      category: category,
      name: name
      
    };
    
    console.log(metadata)
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
    
   
    

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
        var element = document.createElement("img")
        element.setAttribute("src", downloadURL)
        element.setAttribute("height", "100")
        element.setAttribute("width", "100")
        document.getElementById('shirtdiv').appendChild(element)
    })
    .catch(function(error){
        console.log(error)
        
    })
}

function generateOutfit(){
  var imageInfoSize =  Object.size(imageInfo)
  console.log(imageInfoSize)
  var randNum = Math.floor((Math.random() * imageInfoSize))
  console.log(randNum)
  var itemAtRandNum = imageInfo[Object.keys(imageInfo)[randNum]];
  console.log(itemAtRandNum)
  var itemCategory = itemAtRandNum.category
  console.log(itemCategory)

  if (itemCategory == 'Dresses'){
      var shoeArray = []
      var topsArray = []
      var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
    for(i=0; i<imageInfoSize; i++){
      if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
        shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else{
        console.log('Not a shoe, skipping.')
      }
    }
    console.log(shoeArray)
    var shoeArraySize = shoeArray.length
    randNum = Math.floor((Math.random() * shoeArraySize))
    console.log(randNum)
    var selectedShoeURL = shoeArray[randNum]
    console.log(selectedShoeURL)
    var el = document.createElement("img")
    el.setAttribute("src", selectedShoeURL)
    el.setAttribute("height", "100")
    el.setAttribute("width", "100")
    document.getElementById('canvasdiv').appendChild(el)
    
    
    
  } else if (itemCategory == "Shorts") {
    var shoeArray = []
      var topsArray = []
     var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      for(i=0; i<imageInfoSize; i++){
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
          shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
        } else{
          console.log('Not a shoe, skipping.')
        }
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
          topsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
        }else{
          console.log('Not a top, skipping.')
        }
      }
      console.log(shoeArray)
      console.log(topsArray)
      var shoeArraySize = shoeArray.length
      randNum = Math.floor((Math.random() * shoeArraySize))
      console.log(randNum)
      var selectedShoeURL = shoeArray[randNum]
      console.log(selectedShoeURL)
      var el = document.createElement("img")
      el.setAttribute("src", selectedShoeURL)
      el.setAttribute("height", "100")
      el.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(el)
      
      var topsArraySize = topsArray.length
      randNum = Math.floor((Math.random() * topsArraySize))
      console.log(randNum)
      var selectedTopURL = topsArray[randNum]
      console.log(selectedTopURL)
      var elem = document.createElement("img")
      elem.setAttribute("src", selectedTopURL)
      elem.setAttribute("height", "100")
      elem.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(elem)
      
  } else if (itemCategory == "Pants") {
    var shoeArray = []
    var topsArray = []
     var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      for(i=0; i<imageInfoSize; i++){
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
          shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
        } else{
          console.log('Not a shoe, skipping.')
        }
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
          topsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
        }else{
          console.log('Not a top, skipping.')
        }
      }
      console.log(shoeArray)
      console.log(topsArray)
      var shoeArraySize = shoeArray.length
      randNum = Math.floor((Math.random() * shoeArraySize))
      console.log(randNum)
      var selectedShoeURL = shoeArray[randNum]
      console.log(selectedShoeURL)
      var el = document.createElement("img")
      el.setAttribute("src", selectedShoeURL)
      el.setAttribute("height", "100")
      el.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(el)
      
      var topsArraySize = topsArray.length
      randNum = Math.floor((Math.random() * topsArraySize))
      console.log(randNum)
      var selectedTopURL = topsArray[randNum]
      console.log(selectedTopURL)
      var elem = document.createElement("img")
      elem.setAttribute("src", selectedTopURL)
      elem.setAttribute("height", "100")
      elem.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(elem)
      
  } else if (itemCategory == "Tops (Shirts, Blouses, Tanks)") {
    var shoeArray = []
    var shortsArray = []
    var pantsArray = []
     var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      for(i=0; i<imageInfoSize; i++){
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
          shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
        } else{
          console.log('Not a shoe, skipping.')
        }
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Shorts"){
          shortsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
        }else{
          console.log('Not shorts, skipping.')
        }
      }
      console.log(shoeArray)
      console.log(shortsArray)
      var shoeArraySize = shoeArray.length
      randNum = Math.floor((Math.random() * shoeArraySize))
      console.log(randNum)
      var selectedShoeURL = shoeArray[randNum]
      console.log(selectedShoeURL)
      var el = document.createElement("img")
      el.setAttribute("src", selectedShoeURL)
      el.setAttribute("height", "100")
      el.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(el)
      
      var shortsArraySize = shortsArray.length
      randNum = Math.floor((Math.random() * shortsArraySize))
      console.log(randNum)
      var selectedShortsURL = shortsArray[randNum]
      console.log(selectedShortsURL)
      var elem = document.createElement("img")
      elem.setAttribute("src", selectedShortsURL)
      elem.setAttribute("height", "100")
      elem.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(elem)
      
  } else if (itemCategory == "Skirts") {
    var shoeArray = []
      var topsArray = []
     var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      for(i=0; i<imageInfoSize; i++){
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Shoes"){
          shoeArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
        } else{
          console.log('Not a shoe, skipping.')
        }
        if (imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
          topsArray.push(imageInfo[Object.keys(imageInfo)[i]].url)
          
        }else{
          console.log('Not a top, skipping.')
        }
      }
      console.log(shoeArray)
      console.log(topsArray)
      var shoeArraySize = shoeArray.length
      randNum = Math.floor((Math.random() * shoeArraySize))
      console.log(randNum)
      var selectedShoeURL = shoeArray[randNum]
      console.log(selectedShoeURL)
      var el = document.createElement("img")
      el.setAttribute("src", selectedShoeURL)
      el.setAttribute("height", "100")
      el.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(el)
      
      var topsArraySize = topsArray.length
      randNum = Math.floor((Math.random() * topsArraySize))
      console.log(randNum)
      var selectedTopURL = topsArray[randNum]
      console.log(selectedTopURL)
      var elem = document.createElement("img")
      elem.setAttribute("src", selectedTopURL)
      elem.setAttribute("height", "100")
      elem.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(elem)
      
  } else {
    //meaning that the category is shoes
      var source = itemAtRandNum.url
      console.log(source)
      var element = document.createElement("img")
      element.setAttribute("src", source)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
    var Obj = {
      tops: [],
      shorts: [],
      pants: [],
      skirts: [],
      dresses: []
    }

    for (i= 0; i<imageInfoSize; i++){
      if(imageInfo[Object.keys(imageInfo)[i]].category == "Tops (Shirts, Blouses, Tanks)"){
        Obj.tops.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Shorts"){
        Obj.shorts.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Pants"){
        Obj.pants.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Skirts"){
        Obj.skirts.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else if (imageInfo[Object.keys(imageInfo)[i]].category == "Dresses"){
        Obj.dresses.push(imageInfo[Object.keys(imageInfo)[i]].url)
      } else {
        console.log('This is a shoe, skipping.')
      }
    }
    var objectSize = Object.size(Object)
    randNum = Math.floor((Math.random() * objectSize))
    var selectedCategory = Obj[Object.keys(Obj)[randNum]].category
    var selectedCategoryUrl = Obj[Object.keys(Obj)[randNum]].url
    
    if (selectedCategory == 'Tops (Shirts, Blouses, Tanks)'){
      element = document.createElement("img")
      element.setAttribute("src", selectedCategoryUrl)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      var bottomWear = []
      bottomWear.splice.apply(bottomWear, [2, 0].concat(Obj.shorts))
      bottomWear.splice.apply(bottomWear, [2, 0].concat(Obj.skirts))
      console.log(bottomWear)
      randNum = Math.floor((Math.random() * bottomWear.length))
      var selectedBottomUrl = bottomWear[randNum]
      var element2 = document.createElement("img")
      element2.setAttribute("src", selectedBottomUrl)
      element2.setAttribute("height", "100")
      element2.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element2)
      

      
      
    } else if (selectedCategory == "Shorts" || selectedCategory == "Pants" || selectedCategory == "Skirts"){
      element = document.createElement("img")
      element.setAttribute("src", selectedCategoryUrl)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      randNum = Math.floor((Math.random() * Obj.tops.length))
      var selectedTop = Obj.tops[randNum].url
      var element1 = document.createElement("img")
      element1.setAttribute("src", selectedTop)
      element1.setAttribute("height", "100")
      element1.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element1)
      
    } else if (selectedCategory == "Dresses"){
      element = document.createElement("img")
      element.setAttribute("src", selectedCategoryUrl)
      element.setAttribute("height", "100")
      element.setAttribute("width", "100")
      document.getElementById('canvasdiv').appendChild(element)
      
    } else {
      console.log('Whaaat category is this, bruh?')
    }
    
  }

}



function uploadPause(){
  uploadTask.pause();
}

function uploadResume(){
  uploadTask.resume();
}

function uploadCancel(){
  uploadTask.cancel();
}













function showDiv1(){
    document.getElementById('shirtdiv')
    .setAttribute('style', 'display: inline-block; visibility: visible')
    document.getElementById('shoediv')
    .setAttribute('style', 'display: none; visibility: hidden')
    document.getElementById('pantdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
}



function showDiv2(){
    document.getElementById('shirtdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
    document.getElementById('shoediv')
    .setAttribute('style', 'display: none; visibility: hidden')
    document.getElementById('pantdiv')
    .setAttribute('style', 'display: inline-block; visibility: visible')
 
    //should get all of the images from firebase database and display them in the div
    
      document.getElementById('test')
        .setAttribute('src', url)
  
    var storageRef = firebase.storage().ref();
    var picRef = storageRef.child('images/$_1.jpg');
    
    // Get the download URL
    picRef.getDownloadURL().then(function(url) {
        document.getElementById('test')
        .setAttribute('src', url)
     
    }).catch(function(error) {
    
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;
    
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
    
        case 'storage/canceled':
          // User canceled the upload
          break;
    
        
    
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}

function showDiv3(){
    document.getElementById('shirtdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
        document.getElementById('pantdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
    document.getElementById('shoediv')
    .setAttribute('style', 'display: inline-block; visibility: visible')
}