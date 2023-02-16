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

function findByArtist( artist, albumCollection ) {
    let results = [];
    for( let item of albumCollection ) {
        if ( item.artist === artist ) {
            results.push( item );
        } // else {
        //     console.log( 'Sorry, that album does not exist in this collection' );
        // }
    }
    return results;
}


//***** Testing Zone *****

//***** addToCollection Testing *****
console.log( '***** addToCollection Testing *****' );

console.log( addToCollection( 'Album', 'Musician', '2000' ) );
console.log( addToCollection( 'Album1', 'Musician1', '2001' ) );
console.log( addToCollection( 'Album2', 'Musician2', '2002' ) );
console.log( addToCollection( 'Album3', 'Musician3', '2003' ) );
console.log( addToCollection( 'Album4', 'Musician4', '2004' ) );
console.log( addToCollection( 'Album5', 'Musician5', '2005' ) );
//Added for testing for findByArtist function
console.log( addToCollection( 'Album123', 'Musician', '2010' ) );
console.log( addToCollection( 'Album456', 'Musician', '2012' ) );


console.log( collection );

//***** showCollection Testing *****
console.log( '***** showCollection Testing *****' );

showCollection( collection );

//***** findByArtist Testing *****
console.log( '***** findByArtist Testing *****' );

//Test for in collection
console.log( findByArtist( 'Musician', collection ) );

//Test for not in collection
console.log( findByArtist( 'ABCDE', collection ) );
