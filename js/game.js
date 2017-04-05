// JavaScript will go here
    var correctNumber = 0;
$( init );
 
function init() {
 
  // Hide the success message
  $('#successMessage').hide();
  
    
  // Reset the game
  correctNumber = 0;
  $('#drop').html( '' );
      $('.numberP').html( '' );
    

    
  var numbers = [ ];
 
  for ( var i=0; i<5; i++ ) {
     numbers.push(Math.round(Math.random()*100))
 
    $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'fish'+numbers[i] ).appendTo( '.numberP' ).draggable( {
      containment: '#content',
      stack: '.numberP div',
      cursor: 'move',
      revert: true
    } );
  }
    var maxNumber= Math.max.apply(Math,numbers);
    var correctAudio = document.createElement('audio');
    correctAudio.controls = true;
    correctAudio.src = 'sound/g.wav';
    var wrongAudio = document.createElement('audio');
    wrongAudio.controls = true;
    wrongAudio.src = 'sound/m.wav';


    function handlefishDrop( event, ui ) {
        var dropNumber = $(this).data( 'number' );
        var fishNumber = ui.draggable.data( 'number' );

          if ( fishNumber == maxNumber ) {
             correctNumber++;
         } 

         if (correctNumber == 1) {
              $('#successMessage').show();
              $('.numberP div').hide(); 
              $('#drop sprite').css("background-position", "69% 0");
              $('#successMessage').animate( {
                left: '20%',
                top: '30%',
                width: '10%',
                height: '10%',
                opacity: .9
              } );
              correctAudio.play();

        }else{
          wrongAudio.play();
        }
    }

    var x=['drop here'];
  for ( var i=1; i<=1; i++ ) {    
    $('<div>' + x[i-1] + '</div>').data( 'number', i ).appendTo( '#drop' ).droppable( {
      accept: '.numberP div',
      hoverClass: 'hovered',
      drop: handlefishDrop,
        
    } );
  }
    $('<sprite>'  + '</sprite>').data( 'number', i ).appendTo( '#drop' )
 
}
