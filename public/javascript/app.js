$(document).ready(function(){
console.log("Working");

var view = 0;
var secondView = 0;
var $main;
var mobile = $( window ).width();


/*Openning Panels*/


/*Accounts Menu*/


$('.type').on('click', function(){


	$main = $(this);
	

	while(view === 0 ){

// Tablets Size Screens
		if(mobile <= 768){

			$main.css('background', '#C0C0C0');
			$('.accounts-list').animate({right: "0%"}, 1000);
			view = 1;
		}
		else{

			$main.css('background', '#C0C0C0');
			$('.accounts-list').animate({right: "5%"}, 1000);
			view = 1;

			}
		}

	})


/*Transactions Menu*/
$('.account').on('click', function(){
  	
		//Makes trasanctions menu visible if condition met 
		if(secondView===0){

			//Mobile device condition
			if(mobile <= 768){


				$(this).css('background', '#C0C0C0');
				$('.transactions-list').animate({right: '0%'}, 1000);
				secondView=1;

				}
				else{

				$(this).css('background', '#C0C0C0');
				$('.transactions-list').animate({right: '-10%'}, 1000);
				secondView=1;

				}
			}
			
  })


/*CLOSING PANELS*/

/*Accounts Menu*/


// Will close only if back arrow button is clicked.
$('.accounts-list').on('click','.back', function(){

			//Clears Main Panel 
		   
		   // all class main childrens with divs of class type get cleared once window closes
		    // $('.main').children('.type').css('background', '');
		    // or
		    // $('.main > .type').css('background','');

		    $('label').parents('.type').css('background','');
			//Clears Account Panel
		    $('.account').css('background','');
			$('.accounts-list').animate({right: "-1250px"}, 1500);
			view = 0;

			// If transactions menu is still opened, it will call fs transaction to close it. 
			if(secondView===1){
					transation();
			}
			
	})




/*Transactions Menu*/

$('.transactions-list').find('.back-one').on('click', function(){


			// all class account-list childrens with divs of class account get cleared once window closes
			$('.accounts-list').children('.account').css('background', '');
			$('.transactions-list').animate({right:"-1250px"}, 1500);
			secondView=0;

})
	

//Call if account menu is closed
function transation(){

			$(this).css('background','');
			$('.transactions-list').animate({right:"-1250px"}, 1250);
			secondView=0;
			
	}

//On page load fuction
});

























