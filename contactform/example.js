jQuery(document).ready(function($) {
    "use strict";
    
     var request = {
            //   name: document.getElementById("name").value,
            //   comment: document.getElementById("message").value,
              websiteId: 2
          }
         
         var str = request;
          var action = 'http://localhost:8081/browsingWAPI/admin/getAllComment';
            // var action = 'https://api.community.guru/browsingWAPI/admin/getAllComment';

          $.ajax({
              headers: new Headers({
                  'Content-Type': 'application/json;charset=utf-8',
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
  
              }),
              type: "POST",
              url: action,
              data: JSON.stringify(str),
              dataType: "json",
              success: function(msg) {
                let txt="";
               
                
                if(msg.isSuccess){
                //  console.log(msg);
                var person= msg.comment;  
                    person.forEach((xyz) => {
                                txt += "<b> Name : </b>" + xyz.name + "<br>";
                                txt +="<b> Comment : </b>" + xyz.comment + "<br>" ;
                                // d.setTime(xyz.createdDate);
                                var timestamp = xyz.createdDate
                                var date = new Date(timestamp);
                                    var Dt=date.toLocaleString('en-US');
                                    // date.getDate()+
                                    //       "/"+(date.getMonth()+1)+
                                    //       "/"+date.getFullYear()+
                                    //       " "+date.getHours()+
                                    //       ":"+date.getMinutes()+
                                        //   ":"+date.getSeconds();   
                                txt +="<b> Date And Time : </b>" + Dt +"<br>" + "<br>";
                    }) 
                    document.getElementById("comment").innerHTML=txt;
                }
                
            //  else{
             
            //  }
            //   // window.scrollTo(0,3300);
            //   document.getElementById('section-contact').scrollIntoView({
            //     behavior: 'smooth'
            //   });
          
              }
  
              // contantType: "application/json",
              // data: "data=" + JSON.stringify(str),
  
  
          });
          return false;
    });
