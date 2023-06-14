 const apiController = (function() {

  // ClientID & clientSecret from Vandera-error y prueba App creada en la cuenta de Stefano
  
  const clientID = '';
  const clientSecret = '';
  
  //Get TOKEN
  
  const getTokenFn = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
  
    const data = await result.json();
    return data.access_token;
  }



  // Get TRACK 

  const getTrackFn = async (token, trackEndPoint) => {

    const result = await fetch(`${trackEndPoint}`,{
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token }
    })

    const data = await result.json();
    return data;
  }


  return {
    getToken(){
      return getTokenFn();
    },
    getTrack(token, trackEndPoint){
      return getTrackFn(token, trackEndPoint);
    }
  }

})()



export default apiController;



// Sample response to fetch Track --> Continuar (error y prueba)

    /* {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7IxhhJ4I8RdyL9CIkdMnA0"
            },
            "href": "https://api.spotify.com/v1/artists/7IxhhJ4I8RdyL9CIkdMnA0",
            "id": "7IxhhJ4I8RdyL9CIkdMnA0",
            "name": "Vandera",
            "type": "artist",
            "uri": "spotify:artist:7IxhhJ4I8RdyL9CIkdMnA0"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/6vbl9W1WohxjkZEjlWXswc"
        },
        "href": "https://api.spotify.com/v1/albums/6vbl9W1WohxjkZEjlWXswc",
        "id": "6vbl9W1WohxjkZEjlWXswc",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b49315932714fcd7d613da53",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b49315932714fcd7d613da53",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b49315932714fcd7d613da53",
            "width": 64
          }
        ],
        "name": "Error y Prueba",
        "release_date": "2020-12-18",
        "release_date_precision": "day",
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:6vbl9W1WohxjkZEjlWXswc"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7IxhhJ4I8RdyL9CIkdMnA0"
          },
          "href": "https://api.spotify.com/v1/artists/7IxhhJ4I8RdyL9CIkdMnA0",
          "id": "7IxhhJ4I8RdyL9CIkdMnA0",
          "name": "Vandera",
          "type": "artist",
          "uri": "spotify:artist:7IxhhJ4I8RdyL9CIkdMnA0"
        }
      ],
      "disc_number": 1,
      "duration_ms": 175613,
      "explicit": false,
      "external_ids": {
        "isrc": "ARDF32000005"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/5NahaNsEA4qopIjLqSrEPb"
      },
      "href": "https://api.spotify.com/v1/tracks/5NahaNsEA4qopIjLqSrEPb",
      "id": "5NahaNsEA4qopIjLqSrEPb",
      "is_local": false,
      "is_playable": true,
      "name": "Continuar",
      "popularity": 3,
      "preview_url": "https://p.scdn.co/mp3-preview/4ebd9d1a4f5add49fdb100deefbcfd22601e69d8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:5NahaNsEA4qopIjLqSrEPb"
    } */

