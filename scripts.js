spierdalaj = () => {
	const colors = ["rgba(255, 0, 0, 1)",
        "rgba(255, 154, 0, 1)",
        "rgba(208, 222, 33, 1)",
        "rgba(79, 220, 74, 1)",
        "rgba(63, 218, 216, 1)",
        "rgba(47, 201, 226, 1)",
        "rgba(28, 127, 238, 1)",
        "rgba(95, 21, 242, 1)",
        "rgba(186, 12, 248, 1)",
        "rgba(251, 7, 217, 1)",
        "rgba(255, 0, 0, 1)"]
	
	const body = document.querySelector("body");
	body.innerHTML = "<h1>spierdalaj</h1>";
	body.style = "display: flex; min-height: 100vh; justify-content: center; align-items: center; color: white; font-size: 7rem";
	let i = 100;
	let dir = 1;
	setInterval(() => {
			body.style.minHeight = `${i}vh`;
			
			if(i>=180) dir=0;
			if(i<=20) dir=1;
			if(dir==1) i++;
			if(dir==0) i--;
			
			body.style.color = colors[Math.floor(Math.random() * 11)];
	},5)
}
