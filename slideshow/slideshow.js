var nextIndex = function(slide, offset) {
	var numberOfImgs = parseInt(slide.dataset.imgs)
	var activeImgs = parseInt(slide.dataset.active)
	var i = (activeImgs + numberOfImgs + offset) % numberOfImgs
	return i 
}

var showImageAtIndex = function(slide, index) {
    var nextIndex = index
    slide.dataset.active = nextIndex
    var className = "ran-active"
    removeClassAll(className)
    var nextSelector = "#id-ranimage-" + String(nextIndex)
    var img = e(nextSelector)
    img.classList.add(className)
    removeClassAll('ran-white')
    var indiSelector ="#id-indi-" + String(nextIndex)
    var indi = e(indiSelector)
    indi.classList.add('ran-white')   
}


//图片切换
var bindEventSlide = function() {
	var selector = '.ran-slide-button'
	bindAll(selector,'click', function(event) {
		log('click next')
		var button = event.target
		var slide = button.parentElement
		var numberOfImgs = parseInt(slide.dataset.imgs)
		var activeImgs = parseInt(slide.dataset.active)
		var offset = parseInt(button.dataset.offset)
		var nextIndex = (activeImgs + numberOfImgs + offset) % numberOfImgs
		slide.dataset.active = nextIndex
		var nextSelector = '#id-ranimage-' + String(nextIndex)
		var className = 'ran-active'
		removeClassAll(className)
		var img = e(nextSelector)
		img.classList.add(className)
		//切换小圆点
		removeClassAll('ran-white')
		var indiSelector = '#id-indi-' + String(nextIndex)
		var indi = e(indiSelector)
		indi.classList.add('ran-white')
	})
}

//小圆点切换
var bindEventIndicator = function() {
	var selector = '.ran-slide-indi'
	bindAll(selector, 'mouseover', function(event) {
		log('indi 小圆点')
		var self = event.target
		var index = parseInt(self.dataset.index)
		var nextSelector = '#id-ranimage-' + String(index)
		var className = 'ran-active'
		removeClassAll(className)
		var img = e(nextSelector)
		img.classList.add(className)
		removeClassAll('ran-white')
		var indiSelector = '#id-indi-' + String(index)
		var indi = e(indiSelector)
		indi.classList.add('ran-white')		
	})

}

//自动播放
var playNextImage = function() {
    var slide = e('.ran-slide')
    var index = nextIndex(slide, 1)
    showImageAtIndex(slide, index)
}

var autoPlay = function() {
    var interval = 2000
    setInterval(function(){
        playNextImage()
    }, interval)
}

var __main = () => {
    bindEventSlide()
    bindEventIndicator()
    autoPlay()
}

__main()
