function writeCards( name, item ) {
    let thankYouCards = []
    for ( let i = 0; i < name.length; i++ ) {
      thankYouCards.push( `Thank you, ${name[i]}, for the wonderful ${item} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startNum ) {
    while ( startNum > 0 ) {
      console.log( startNum );
      startNum -= 1;
    }
    console.log( startNum );
  }

  console.log(writeCards(me,you))