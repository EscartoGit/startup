function validateForm()
      {
          // Validate Email
          var email = document.bootcampform.email.value;
          if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
            alert("Please provide a valid email");
            return false;
          }
          // Validate date (February <= 28 days)
          var month = document.bootcampform.month.value;
          if (month=="February"){
                var day= document.bootcampform.day.value;
                if (day>=28) {
                    alert("Please select a valid date");
                    return false;
                }
          }
          return true;
        }
