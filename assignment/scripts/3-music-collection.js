console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    // console.log( 'Adding this album to the collection:', album );
    collection.push( album );
    return album
}

// *****addToCollection Testing*****
console.log( '*****addToCollection Testing*****' );

console.log( addToCollection( 'Song', 'Musician', '2000' ) );
console.log( addToCollection( 'Song1', 'Musician1', '2001' ) );
console.log( addToCollection( 'Song2', 'Musician2', '2002' ) );
console.log( addToCollection( 'Song3', 'Musician3', '2003' ) );
console.log( addToCollection( 'Song4', 'Musician4', '2004' ) );
console.log( addToCollection( 'Song5', 'Musician5', '2005' ) );

console.log( collection );