// JavaScript Document

<script>
			//variabler//
		let sliderImages = document.querySelectorAll('.slide'), //vælger alle med class slide. Lidt som en aray//
			arrowLeft = document.querySelector('arrow-left'),
			arrowRight = document.querySelector('arrow-right'),
			current = 0; //illustrere det billede man er på//
			
			//funktion - clear all images//
			function reset(){
				for(let i = 0; i < sliderImages.length; i++){
					sliderImages[i].style.display = 'none';
				}
			}
			
			function startSlide(){
				reset();
				sliderImages[0].style.display = 'block'; //viser det første billede//
			}
			
			//show prev//
			function slideLeft(){
				reset(); //want to wipe the slate clean//
				sliderImages[current - 1].style.display = 'block';
				current--;
			}
			
			//show next//
			function slideRight(){
				reset(); //want to wipe the slate clean//
				sliderImages[current + 1].style.display = 'block';
				current++;
			
			//for at teste det, skal der bruges et event//
			//left arrow click//
			arrowLeft.addEventListener('click', function(){
				if(current === 0){ //0 betyder at vi er på billed 1//
				  current = sliderImages.length; //sætter current til max antal billeder, hvilket er 3//
				   }
				slideLeft();
			});
				
			//right arrow click//
			arrowRight.addEventListener('click', function(){
				if(current === sliderImages.length - 1){ ////
				  current = -1; ////
				   }
				slideRight();
			});
			
			startSlide();
		</script>