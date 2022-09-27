const win = window;

const lights = document.querySelectorAll(".iconwrapper span")
const container = document.querySelector(".iconwrapper")

container.addEventListener('mousemove', e => {
			let rect = container.getBoundingClientRect();
			lights.forEach(function(light, index){
				light.style.top = e.clientY - rect.top + "px";
				light.style.left = e.clientX - rect.left + "px";

				// console.log(light.style.top)
			})
			
		});