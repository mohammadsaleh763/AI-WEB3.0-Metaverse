function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
}
// Calling the function with default values
make_shirt();
// Calling the function with a medium shirt and default message
make_shirt('medium');
// Calling the function with a small shirt and a custom message
make_shirt('small', 'Hello, World!');
