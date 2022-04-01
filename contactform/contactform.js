jQuery(document).ready(function($) {
  "use strict";
  
$("#spinner").hide()

  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false

   
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

   var request = {
            name: document.getElementById("name").value,
            comment: document.getElementById("message").value,
            websiteId: 2
        }
        if (ferror) return false;
        else var str = request;
        $("#spinner").show();
        $("#submit").hide();
        var action = $(this).attr('action');
        if (!action) {
            action = 'http://localhost:8081/browsingWAPI/comment/saveComment';
            // action = 'https://api.community.guru/browsingWAPI/comment/saveComment';

        }

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
              if(msg.isSuccess){
                $('.contactForm').find("input, textarea").val("");
                $('#sendmessage').fadeIn(100).show();
                $('#sendmessage').delay(10000).fadeOut();
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
                             
                              const d = new Date();
                              if(msg.isSuccess){
                              //  console.log(msg);
                              var person= msg.comment;  
                                  person.forEach((xyz) => {
                                              txt += "<b> Name : </b>" + xyz.name + "<br>";
                                              txt +="<b> Comment : </b>" + xyz.comment + "<br>" ;
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
                            }
                        });
                        return false;
                  });
              }
           else{
            $('#errormessage').fadeIn(100).show();
            $('#errormessage').delay(10000).fadeOut();
           }
           $("#submit").show();
           $("#spinner").hide();
            // window.scrollTo(0,3300);
            document.getElementById('section-contact').scrollIntoView({
              behavior: 'smooth'
            });
        
            }

            // contantType: "application/json",
            // data: "data=" + JSON.stringify(str),


        });
        return false;
  });

});


