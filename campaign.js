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
      alert("Submit Only Youtube video Url");
      
      }
      
    }
    
    
 function view()  {
 
 
 document.getElementById("view").disabled = true;
 document.getElementById("camview").innerHTML = document.getElementById("camview").value;  
 
 } 
