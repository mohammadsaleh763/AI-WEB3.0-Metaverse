let current_username:string[] = ['admin','msaleh','mfizan','musama','mkhan'];
let new_username:string[] = ['mfizan','mnasir','mharis','Mkhan','mhamza'];

for (let i:number=0;i<new_username.length;i++){
  let usernameExist:boolean=false;

  for(let j:number=0;j<current_username.length;j++){
    if(new_username[i].toLowerCase()===current_username[j].toLowerCase()){
      usernameExist=true;
      break;
    }
  }
  if (usernameExist) {
    console.log(`Sorry, the username '${new_username[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username[i]}' is available.`);
  }
}
