function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
  let album: Record<string, any> = {
    artist: artist,
    title: title
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
} 

// Calling the function to create album objects
let album1 = make_album('Artist 1', 'Album 1');
let album2 = make_album('Artist 2', 'Album 2', 12);
let album3 = make_album('Artist 3', 'Album 3', 8);

// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);
