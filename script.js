var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var image = new Image()
image.crossOrigin="anonymous";
image.src = 'certificate 1.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '20px monotype corsiva'
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 200, 190)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})