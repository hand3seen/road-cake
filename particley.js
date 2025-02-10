function Particle() {
  
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 2.5;
  
  this.prevPos = this.pos.copy();
  
  this.update = function() {
    
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.follow = function(vectors) { 
    var x = floor(this.pos.x/scl);
    var y = floor(this.pos.y/scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  
  }

this.applyForce =function(force) {
  this.acc.add(force);
  
  
  }
  
  this.show = function () {
    //noFill();
    //stroke(10,255,200,1);
    //strokeWeight(random(200));
    //point(this.pos.x, this.pos.y);
    //line(this.pos.x , this.pos.y, this.prevPos.x, this.prevPos.y);
    
    
    
    stroke("#111111");
    strokeWeight(150);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +30, this.prevPos.x + 5, this.prevPos.y +5);
    
     stroke("#ffc600");
    strokeWeight(7);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 7, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#ffc600");
    strokeWeight(7);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 30, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#202020");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 45, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#777777");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 60, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#202020");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 75, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#202020");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x -1, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#202020");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x -15, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#202020");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x -30, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#222222");
    strokeWeight(163);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +30, this.prevPos.x + 5, this.prevPos.y +55);
    
    stroke("#000000");
    strokeWeight(170);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +40, this.prevPos.x + 5, this.prevPos.y +75);
    
    stroke("#333333");
    strokeWeight(150);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +30, this.prevPos.x + 5, this.prevPos.y +85);
    
    stroke("#333333");
    strokeWeight(159);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +30, this.prevPos.x + 5, this.prevPos.y +95);
    
    stroke("#111111");
    strokeWeight(150);
    strokeCap(SQUARE);
    line(this.pos.x +3, this.pos.y +40, this.prevPos.x + 5, this.prevPos.y +105);
    
    this.updatePrev();
    
    stroke("#f5f0eb");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x + 75, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#f5f0eb");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    point(this.pos.x -75, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    stroke("#f5f0eb");
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    line(this.pos.x + 13, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    
    
    stroke(255,255,255,1);
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    
    line(this.pos.x - 80, this.pos.y, this.prevPos.x +60, this.prevPos.y);
    
    stroke(2,2,2,9);
    strokeWeight(0);
    strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    
    line(this.pos.x - 75, this.pos.y +95, this.prevPos.x +75, this.prevPos.y +135);
    
    stroke(255,200,1,255);
    strokeWeight(3);
    //strokeCap(SQUARE);
    //point(this.pos.x, this.pos.y);
    //point(this.pos.x + 4, this.pos.y - 3, this.prevPos.x +5, this.prevPos.y);
    
    //noFill();
    //this.updatePrev();
    
  }
  
  
  
  
  
  this.updatePrev = function() {
    
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    
    }
  this.edges = function() {
    if (this.pos.x > width) { 
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) 
      this.pos.y = 0;
    this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
      

}
  



