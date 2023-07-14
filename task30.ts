let username:string[] = ['admin','msaleh','mfizan','musama','mkhan'];
for(let i:number=0;i<username.length;i++)
{
  if(username[i]==='admin'){
    console.log("Hello admin, would you like to see a status report?")
  }
  else{
    console.log("Hello! " ,username[i], "thank you for logging in again")
  }
}

