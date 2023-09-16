function sendEmail() {
   


     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var message = document.getElementById("message").value;

     if(name==""){
        console.log("name is empty..")
      
       let i = document.getElementById("name");
       i.style.borderColor="red";
       alert("your name can not be null..");
       
     }
     else if(email==""){
      console.log("email is empty..")
      
      let i = document.getElementById("email");
      i.style.borderColor="red";
      alert("your email can not be null..");
     }

     else if(message==""){
      console.log("Message is empty..")
      
      let i = document.getElementById("message");
      i.style.borderColor="red";
      alert("your message can not be null..");
     }

    else{
      console.log("name is fully.."+ name);
      

      var params ={
        "name" : document.getElementById("name").value,
        "email" : document.getElementById("email").value,
        "message" : document.getElementById("message").value,
   };

   const serviceId = "service_639gopj";
   const templateId = "template_rz2z8aq";

   emailjs.send(serviceId, templateId, params)
   .then((res) =>{
     document.getElementById("name").value="";
     document.getElementById("email").value="";
     document.getElementById("message").value="";
     console.log(res);
     alert("Message sent successfully..");
   })
   .catch((err)=> console.log(err));
    }


//     console.log("working..");
//     console.log(serviceId);
//     console.log(templateId);
//     console.log(params);
}