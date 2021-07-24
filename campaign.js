    function video(){
      
      var videourl = document.getElementById("video").value;
      var checkurl = videourl.includes("https://www.youtube.com/watch?v=");
      
      if(checkurl==true){
      
      var videoid = videourl.replace("https://www.youtube.com/watch?v=", "");
      var thumbnail = "https://img.youtube.com/vi/"+(videoid)+"/0.jpg";
      
      document.getElementById("thumbnail").src = thumbnail;
     
      
    $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id='+(videoid)+'&key=AIzaSyDG6mKOTke5fVRzf3o59Rdxn-1QooVZthk',
    dataType: 'json',
    success: function( data ) {
	  
	   $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id="+(videoid)+"&key=AIzaSyDG6mKOTke5fVRzf3o59Rdxn-1QooVZthk", function(data) {
        
          console.log(data);
	
	
	 var responseObj = data.items[0];
	
		document.getElementById("title").innerHTML = responseObj.snippet["title"];
		document.getElementById("description").innerHTML = responseObj.snippet["description"];
         document.getElementById("channelTitle").innerHTML = responseObj.snippet["channelTitle"];
	
		
		});
		
	  
	  
	  
	  
    },
    error: function( data ) {
      
      
	  
    }
  });
        
      document.getElementById("video").disabled = true;  
        
      }
      
      
      else{
	 document.getElementById("alertbox").innerHTML = "Submit Only Youtube video Url Like This: https://www.youtube.com/watch?v=C7cPVQY_Ky9";

          modal.style.display = "block";
    
      
      }
      
    }
    
    
 function view()  {
 var campview = document.getElementById("view").value;
 if(campview > 5) {
 document.getElementById("view").disabled = true;
	 
 }
else{
document.getElementById("alertbox").innerHTML = "Expected view minimum required 6";

  modal.style.display = "block";

}	 
 document.getElementById("camview").innerHTML = document.getElementById("view").value;  
 
 } 
