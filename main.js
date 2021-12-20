function preload(){
}
    function setup(){
        canvas=createCanvas(300,300)
        canvas.center()
    }

    function takeSnapshot(){
        save("myFilteredImage.png")
    }