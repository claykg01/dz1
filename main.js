function submitForm() {
  return confirm('Success! ');
}
function validateForm()  {
             var u = document.getElementById("name").value;
             var p = document.getElementById("phone").value;

             if(u== "") {
                 alert("Error!");
                 return false;
             }
             if(p == "") {
                 alert("Error!");
                 return false;
             }

             alert("Success!")

             return true;}
