function setup() {
    createCanvas(400, 400);
  btn = select('#my-button'); 
  btn.mouseClicked(onBtnClicked)
  }
  
  function onBtnClicked(){
    fill(random(255));
  }
  function draw() {
    background(220);

    rect(100,100,100);
  }