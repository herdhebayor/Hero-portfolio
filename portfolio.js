/** @format */
const sliderEl = document.querySelectorAll('.range').forEach((el) => {
	el.style.background = `linear-gradient(to right, #beed7b ${
		el.value
	}%, #ccc  ${100 - el.value}%)`
})
const toggleBtn = document.querySelector('.toggle')
toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('show')
    if(toggleBtn.className.includes('show')){
        document.querySelector('.collapse').classList.add('show')
    }else{
        document.querySelector('.collapse').classList.remove('show')
    }
})
