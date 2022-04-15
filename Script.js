function validate()
{
    let username= document.getElementById("username").value;
    let password = document.getElementById("username").value;
    if(!(username !== "admin" || password !== "user"))
   {
       alert("success")
       return false
   }
   else
   {
       alert("login failed")
   }
};