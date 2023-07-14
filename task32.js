var current_username = ['admin', 'msaleh', 'mfizan', 'musama', 'mkhan'];
var new_username = ['mfizan', 'mnasir', 'mharis', 'Mkhan', 'mhamza'];
for (var i = 0; i < new_username.length; i++) {
    var usernameExist = false;
    for (var j = 0; j < current_username.length; j++) {
        if (new_username[i].toLowerCase() === current_username[j].toLowerCase()) {
            usernameExist = true;
            break;
        }
    }
    if (usernameExist) {
        console.log("Sorry, the username '".concat(new_username[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username[i], "' is available."));
    }
}
