





function uploadImage(){
    var inputElement = document.getElementById("input")
    
    
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
      contentType: 'image/jpeg'
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
            var words = document.getElementById('uploadinfo')
            words.innerHTML = "Your upload was successful! Please provide some info on your item:"
            document.getElementById('create-user')
            .setAttribute('style', 'display: inline-block; visibility: visible')
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
      document.getElementById('pic')
      .setAttribute('src', url)
    });
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


function downloadShirtImages(){
    
    document.getElementById('shirtdiv')
    .setAttribute('style', 'display: inline-block; visibility: visible')
    document.getElementById('pantsdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
    // Create a reference to the file we want to download
    var database = firebase.database();
    
    var storageRef = firebase.storage().ref();
    var picRef = storageRef.child('images/$_1.jpg');
    
    // Get the download URL
    picRef.getDownloadURL().then(function(url) {
        document.getElementById('test')
        .setAttribute('src', url)
      // Insert url into an <img> tag to "download"
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

function downloadPantsImages(){
    document.getElementById('shirtdiv')
    .setAttribute('style', 'display: none; visibility: hidden')
    
    document.getElementById('pantsdiv')
    .setAttribute('style', 'display: inline-block; visibility: visible')
    // Create a reference to the file we want to download
    var database = firebase.database();
    
    var storageRef = firebase.storage().ref();
    var picRef = storageRef.child('images/$_1.jpg');
    
    // Get the download URL
    picRef.getDownloadURL().then(function(url) {
        document.getElementById('test')
        .setAttribute('src', url)
      // Insert url into an <img> tag to "download"
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