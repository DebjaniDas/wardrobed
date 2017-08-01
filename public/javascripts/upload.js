$('.upload-btn').on('click', function (){
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});

$('#upload-input').on('change', function(){

  var files = $(this).get(0).files;

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
    }

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%');
            $('.progress-bar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done');

            }
            
            
        
          }

        }, false);

        return xhr;
      }
    });

  }
});

function addImage(){
    var database = firebase.database()
    var clothingRef = database.ref('/clothing')
    
    var restaurantInput = document.getElementById('addRestaurant')
    
    var restaurantName = restaurantInput.value
    restaurantInput.value = ''
    
    var currentUser = firebase.auth().currentUser
    var uid = currentUser.uid
    
    if (uid !== 'MjfuAY4ezcdcu4VWxD7KzFn4xqY2'){
        alert("You tis not authorized for performing this action. Ha. Ha. Ha.")
        
    }
    
    restaurantRef.push({
        name: restaurantName,
        votes: 0
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
        
    })
}


