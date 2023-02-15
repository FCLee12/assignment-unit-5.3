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

function showCollection( array ) {
    console.log( 'There are ' + array.length + ' albums in this collection');
    for( let item of array ) {
        console.log( item.title + ' by ' + item.artist + ', published in ' + item.yearPublished );
    }
}

//*****Testing Zone*****

// *****addToCollection Testing*****
console.log( '*****addToCollection Testing*****' );

console.log( addToCollection( 'Album', 'Musician', '2000' ) );
console.log( addToCollection( 'Album1', 'Musician1', '2001' ) );
console.log( addToCollection( 'Album2', 'Musician2', '2002' ) );
console.log( addToCollection( 'Album3', 'Musician3', '2003' ) );
console.log( addToCollection( 'Album4', 'Musician4', '2004' ) );
console.log( addToCollection( 'Album5', 'Musician5', '2005' ) );

console.log( collection );

// *****showCollection Testing*****
console.log( '*****showCollection Testing*****' );

showCollection( collection );