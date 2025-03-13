let particleSystem;

function setup() {
    createCanvas(800, 400);
    particleSystem = new ParticleSystem();
    
  }
  
  function draw() {
    background(180);
    particleSystem.loop();
  }

  function mousePressed(){
    particleSystem.addParticles(mouseX,mouseY,10);
  }