var config = {
    apiKey: "AIzaSyAqlUskzmjinKAQ7kpA1eJFLNJ1fEXgYkM",
    authDomain: "browsersmart-5f450.firebaseapp.com",
    databaseURL: "https://browsersmart-5f450-default-rtdb.firebaseio.com",
    projectId: "browsersmart-5f450",
    storageBucket: "browsersmart-5f450.appspot.com",
    messagingSenderId: "600801488042",
    appId: "1:600801488042:web:72df635247b5c1ee77f4d3"};
firebase.initializeApp(config);

  
  
  firebase.auth().onAuthStateChanged(user => {
    
  if (user) {
    
    

            var Fuid = user.uid;
            Duid = "User/"+(Fuid);
     localStorage.setItem("userid", Fuid);
    var ST = firebase.database().ref(Duid).child('point');
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
			var point = "Coin: "+Y;
			
			document.getElementById("point").innerHTML = point;
			
			});
    
    var ST1 = firebase.database().ref(Duid).child('Name');
            ST1.on('value', function(snapshot) {
            var Y1 = (snapshot.val());
			 localStorage.setItem("username", Y1);
			
			
			
			});
       
        document.getElementById("mains").style.display = "block";
    
    ///

   }
            
        else {
    // No user is signed in.
    window.location.href = 'login.html'; 

  }    

   
	
	var ST = firebase.database().ref(Duid).child('notifyshow');
            ST.on('value', function(snapshot) {
            var Yn = (snapshot.val());
			if (Yn==10)
			{
		
              
             document.getElementById("notify").style.display = "block";
			 document.getElementById("notifys").style.display = "block";
			}
			
			else 
			{
			
             document.getElementById("notify").style.display = "none";
			 document.getElementById("notifys").style.display = "none";
              
              
			}
			
			
			});	

			
			
  
      });


/////////Accept Camagin/////////
function acceptcampaign(){
	var userid = localStorage.getItem("userid");
	var Duid = "User/"+(userid);
	
	var xg = location.href;
var resf = xg.replace("&m=1", "");
var res = resf.replace("https://ytgrowup.blogspot.com/p/yt-video.html?" , "");
var postid = res;
var Temployer = document.getElementById("empid").innerHTML;
	
	localStorage.setItem("targetcamp", postid);
	localStorage.setItem("targetemp", Temployer);
	
     var Tcount =  document.getElementById("Ttime").innerHTML;
     var Tpoint = document.getElementById("Tpoint").innerHTML;
     var Turl = document.getElementById("Turl").innerHTML;
    
    
    firebase.database().ref(Duid).update({ 
      
      Temployer : Temployer,
      Tcount : Tcount,
      Tpoint : Tpoint,
      Turl : Turl,
      
    
	}); 
	
var AD1 = firebase.database().ref("Admin").child('img');
            AD1.on('value', function(snapshot) {
            var A = (snapshot.val());
               
			document.getElementById("checkimg").src = A;
			
			
			});	
document.getElementById("acceptcambutton").disabled = true;
	
}

function startcamp(){
	window.open("campaignprocess.html", '_blank', 'toolbar=0,location=0,menubar=0');
    var keyword = document.getElementById("Tkeyword").innerHTML;
	
    window.location.href = "https://www.youtube.com/results?search_query="+(keyword);
	
}

////////Capmaign section end////
////////Comment section Start////

function lodcomment(){


document.getElementById("commentsection").style.display = "block";


}

  

   function postcomment(){

var xg = location.href;
var resf = xg.replace("&m=1", "");
var res = resf.replace("https://ytgrowup.blogspot.com/p/yt-video.html?" , "");
           
     var postid = res;
     var commentnow = +document.getElementById("comment").innerHTML;     
     var commentcount = +commentnow+1;
     var Fpostid = "Post/"+(postid);
     var commentid = "Post/"+(postid)+"/Commentpost/"+(commentcount);
     
     var commenttext = document.getElementById("comments").value;
     
     var name = localStorage.getItem("username");
     var Cuserid = localStorage.getItem("userid");
     var empid = document.getElementById("empid").innerHTML;
     
      firebase.database().ref(commentid).update({
        
        img : "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
        Name : name,
        position : "Statar",
        Comment : commenttext,
        replyid : commentcount,
        replyhtml : 0,
        replycount : 0,
        Cuserid : Cuserid,
        
     });
    firebase.database().ref(Fpostid).update({ 
     Comment : commentcount,
      
     });
     
  /////////Notify////////
     
   if(empid==Cuserid){  
      
      
      }
	
	else {
     
   var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate(); 

var Y5 = (m)+" "+(n)+" "+(e);	  
     
  var ds = new Date();
  var n = ds.getTime();
   var empnotify = "User/"+(empid)+"/Notify/"+(n);
   var link = location.href;
     var emppath = "User/"+(empid); 
     var notifydata = (name)+" Comment Your Campaign"

   firebase.database().ref(empnotify).update({
                     notify: n,
					 link: link,
					 date: Y5,
                     notifydata: notifydata,
        
        });                        
                           
          firebase.database().ref(emppath).update({
                     notifyshow: 10,       
        
        });	                 
     
    }   
   document.getElementById("comments").style.display = "none"; 
   
   }
  
  function reply_click(clicked_id)
  {
	
    var Uuid = "box"+(clicked_id);
   
  document.getElementById(Uuid).style.display = "block"; 
  }
  

    
function reply_clicks(clicked_id)
  {

  var Uuid = "replybody"+(clicked_id);
    var html = "replyid"+(clicked_id);
    var fihtml = document.getElementById(html).value;
    
    document.getElementById(Uuid).style.display = "block";
    
    document.getElementById(Uuid).innerHTML = (fihtml);
  
} 
  
 function reply_clickd(clicked_id)
  {
    var xg = location.href;
var resf = xg.replace("&m=1", "");
var res = resf.replace("https://ytgrowup.blogspot.com/p/yt-video.html?" , "");
    var postid = res;
    
    var Uuid = "box"+(clicked_id);
   
  document.getElementById(Uuid).style.display = "none"; 
           
    var replybox = "replybox"+(clicked_id);
    var replyadd = "replyadd"+(clicked_id);
    var replytext = "replytext"+(clicked_id);
    var rssid = "Post/"+(postid)+"/Commentpost/"+(clicked_id);
    
    var html = "replyid"+(clicked_id);
    var replycountid = "replycountid"+(clicked_id);
    
    
    var empid = "empid"+(clicked_id);
    var Cuserid = localStorage.getItem("userid");
     var empid = document.getElementById(empid).value;
    
    
    var replycount = document.getElementById(replycountid).value;
    var fireplycount = +replycount+1;
   
    var user =  localStorage.getItem("username");
	var position =  "Stater";
	 var img = "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png";
    
    
    var messege = document.getElementById(replytext).value;
    var fihtml = document.getElementById(html).value;
   
    
    var reply1 = (fihtml)+"<div class='mainreply'><ul class='navs'><li>"+
"<img src='"+(img)+"'  alt='Avatar' class='responsive'>"+
 "</li><li style='padding-top: -10px'>"+(user)+"</li>  <li> ("+(position)+")</li></ul>"+
"<div class='dialogbox'>"+
    "<div class='body'>"+
      "<span class='tip tip-up'></span>"+
      "<div class='message'>"+
        "<span>"+(messege)+"</span>"+
      "</div></div></div></div>";
    
    var reply2 = "<div class='mainreply'><ul class='navs'><li>"+
"<img src='"+(img)+"'  alt='Avatar' class='responsive'>"+
 "</li><li style='padding-top: -10px'>"+(user)+"</li>  <li> ("+(position)+")</li></ul>"+
"<div class='dialogbox'>"+
    "<div class='body'>"+
      "<span class='tip tip-up'></span>"+
      "<div class='message'>"+
        "<span>"+(messege)+"</span>"+
      "</div></div></div></div>";
    
    
    
    if (fihtml==0)
      
      {
        
       firebase.database().ref(rssid).update({
                   replyhtml : reply2,
                   replycount: fireplycount,
        
        });		
	 	
		
      }
	  
	
    
    
    else{
    
    
    firebase.database().ref(rssid).update({
                   replyhtml : reply1,
                   replycount: fireplycount,

			
       });
	   
}
  
  
  
  
  if(empid==Cuserid){  
      
      
      }
	
	else {
     
   var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate(); 

var Y5 = (m)+" "+(n)+" "+(e);	  
     
  var ds = new Date();
  var n = ds.getTime();
   var empnotify = "User/"+(empid)+"/Notify/"+(n);
   var link = location.href;
     var emppath = "User/"+(empid); 
     var notifydata = (user)+" Replay Your Comment"

   firebase.database().ref(empnotify).update({
                     notify: n,
					 link: link,
					 date: Y5,
                     notifydata: notifydata,
        
        });                        
                           
          firebase.database().ref(emppath).update({
                     notifyshow: 10,       
        
        });	                 
     
    }   
  
  
  
  
  
  
  }
  
