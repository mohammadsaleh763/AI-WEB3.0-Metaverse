function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Calling the function to create album objects
var album1 = make_album('Artist 1', 'Album 1');
var album2 = make_album('Artist 2', 'Album 2', 12);
var album3 = make_album('Artist 3', 'Album 3', 8);
// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);
