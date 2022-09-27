(function(window){

	const canvasEl = document.getElementById('mycanvas');
	const context = canvasEl.getContext('2d')

	const spriteCheck = document.querySelector(".gameIntro")

	CANVAS_WIDTH = canvasEl.width = 500;
	CANVAS_HEIGHT = canvasEl.height = 500;
	let spriteWidth = 200;

	let frameX = 0;

	let gameframe = 0;

	let staggerFrame = 6;
	

	// bring in new images
	const characterImg = new Image();
	const idleSprite = new Image();
	const attackSprite = new Image();
	const hitSprite = new Image();
	const runSprite = new Image();

	const attBtn = document.querySelector('[data-id="attack"]')
	const runBtn = document.querySelector('[data-id="run"]')
	const hitBtn = document.querySelector('[data-id="hit"]')
	const idleBtn = document.querySelector('[data-id="idle"]')
	const allBtn = document.querySelector('[data-id="all"]')

	attBtn.addEventListener('click',function(e){
		e.preventDefault();
		attackAnimation()
	})

	runBtn.addEventListener('click',function(e){
		e.preventDefault();
		runAnimation()
	})

	hitBtn.addEventListener('click',function(e){
		e.preventDefault();
		hitAnimation()
	})

	idleBtn.addEventListener('click',function(e){
		e.preventDefault();
		idleAnimation()
	})

	allBtn.addEventListener('click',function(e){
		e.preventDefault();
		animate()
	})

	runSprite.src = 'img/Sprites/Run.png'
	idleSprite.src = 'img/Sprites/Idle.png'
	attackSprite.src = 'img/Sprites/Attack1.png'
	hitSprite.src = 'img/Sprites/Take Hit.png'
	characterImg.src = 'img/spritesheet.png'


	console.log(typeof(idleSprite))


// add event listeners




	function animate(){
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
		// console.log(typeof(image))
		
		let position = Math.floor(gameframe/staggerFrame) % 6;
		frameX = spriteWidth * position 
		context.drawImage(characterImg,frameX,0, 200, 200, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		gameframe ++
		requestAnimationFrame(animate)
	}

		function runAnimation(){
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
		// console.log(typeof(image))
		
		let position = Math.floor(gameframe/staggerFrame) % 6;
		frameX = spriteWidth * position 
		context.drawImage(runSprite,frameX,0, 200, 200, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		gameframe ++
		requestAnimationFrame(runAnimation)
	}

	function idleAnimation(){
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
		// console.log(typeof(image))
		
		let position = Math.floor(gameframe/staggerFrame) % 6;
		frameX = spriteWidth * position 
		context.drawImage(idleSprite,frameX,0, 200, 200, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		gameframe ++
		requestAnimationFrame(idleAnimation)
	}
		function hitAnimation(){
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
		// console.log(typeof(image))
		
		let position = Math.floor(gameframe/staggerFrame) % 6;
		frameX = spriteWidth * position 
		context.drawImage(hitSprite,frameX,0, 200, 200, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		gameframe ++
		requestAnimationFrame(hitAnimation)
	}

	function attackAnimation(){
		console.log("attack")
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
		// console.log(typeof(image))
		
		let position = Math.floor(gameframe/staggerFrame) % 6;
		frameX = spriteWidth * position 
		context.drawImage(attackSprite,frameX,0, 200, 200, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		gameframe ++
		requestAnimationFrame(attackAnimation)
	}



	
})(window)