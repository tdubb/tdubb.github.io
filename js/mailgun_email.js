$('.new-email-button').click(function() {

var fromEmail = $('.email').val();
console.log('email v13');
console.log(fromEmail);
var message = $('.email-message').val();
console.log(message);
// var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// if (re.test(fromEmail)) {

  // $.ajax({
  //       type: "POST",
  //       dataType:"json",
  //       // Origin: "http://tdubb.github.io/",
  //       // crossDomain: true,
  //       url: "http://apilayer.net/api/check?access_key=f962ee72944190eb360e1aef4f01b618",
  //       http://apilayer.net/api/check
  //
  //
  //       data: {
  //         "key": "key-0af500cf95d8b9bb0a2ea8a43b4c63c5",
  //         "message": {
  //           "from_email": "smtp.mailgun.org",
  //           "to": [
  //               {
  //                 "email": "info@devhouseatx.com",
  //                 "name": "",
  //                 "type": "to"
  //               },
  //               // {
  //               //   "email": "RECIPIENT_NO_2@EMAIL.HERE",
  //               //   "name": "ANOTHER RECIPIENT NAME (OPTIONAL)",
  //               //   "type": "to"
  //               // }
  //             ],
  //           "headers": {
  //             "Reply-To": fromEmail
  //           },
  //           "autotext": "null",
  //           "subject": "Website Inquiry",
  //           "text": message
  //         }
  //       }
  //      }).done(function(response) {
  //        alert("Email Delivery Status! " + response[0].status);
  //        console.log(response); // if you're into that sorta thing
  //        if(response[0].status === "sent") {
  //          $('.email').val('');
  //          $('.email-message').val('');
  //        }
  //      });
  // } else {
  //   alert("Invalid Email Address");
  // }

var access_key = 'f962ee72944190eb360e1aef4f01b618';
var email_address = 'twasden@gmail.com';

// verify email address via AJAX call
$.ajax({
    url: 'http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address,
    dataType: 'jsonp',
    data: {
      "message": {
        "from_email": "devhouseatx@gmail.com",
        "to": [
            {
              "email": "devhouseatx@gmail.com",
              "name": "",
              "type": "to"
            }
          ],
        "headers": {
          "Reply-To": fromEmail
        },
        "autotext": "null",
        "subject": "Website Inquiry",
        "text": message
      }
    },
    success: function(json) {

    // Access and use your preferred validation result objects
    console.log(json.format_valid);
    console.log(json.smtp_check);
    console.log(json.score);
    console.log(json.mx_found);
    console.log(json.email);

    }
  });

});
