console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    console.log( 'Adding this album to the collection:', album );
    collection.push( album );
    return album
}

// *****addToCollection Testing*****
console.log( '*****addToCollection Testing*****' );

console.log( addToCollection( 'Song', 'Musician', '2000' ) );