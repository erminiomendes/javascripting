const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    const track = this.playlists
    for (const x in track){
      console.log( (`${track[x].id}: ${track[x].name} - ${track[x].tracks.length} tracks`));
    };
  },

  printTracks: function () {
    const track = this.tracks
    for (const x in track){
      console.log((`${track[x].id}: ${track[x].name} by ${track[x].artist} (${track[x].album})`));
    };
  }

};



library.printPlaylists();
library.printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

  const playlist = library.playlists[playlistId];
  const tracks = library.tracks;
  const selectedTracks = playlist["tracks"];

  console.log( `${playlist["id"]}: ${playlist["name"]} - ${playlist["tracks"].length} `);

  for (const track of selectedTracks) {
     console.log(`${tracks[track]["id"]}: ${tracks[track]["name"]} by ${tracks[track]["artist"]} (${tracks[track]["album"]}) `);
  }
};
     
//printPlaylist("p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
};

//addTrackToPlaylist('t02', 'p02');


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newIdTrack = generateUid();
  library.tracks[newIdTrack] = {
    id: newIdTrack,
    name: name,
    artist: artist,
    album: album,
  };
return library.tracks;
};


// adds a playlist to the library
const addPlaylist = function(name) {
  const newPlaylist = generateUid();
  library.playlists[newPlaylist] = {
    id: newPlaylist,
    name: name,
    tracks: [trackArray],
  };
  return library.playlists;
};
       

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}