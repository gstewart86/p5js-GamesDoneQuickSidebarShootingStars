
const pink = (255, 0, 255);

class starstorm {

  constructor(numberOfStars = 50, starColor = (255, 0, 255, alpha)){
    this.stars = [];
    this.numberOfStars = numberOfStars;
    this.starColor = starColor;
    }

  animate() {
      //////////
      // Stars //
      //////////
      // Create stars to fill the array if necessary
      for (var i = this.stars.length; i<this.numberOfStars; i++){
        this.stars.push(new star());
      }

      // update star positions
      this.stars.forEach(function(star) {
          star.render();
      })

      // check and delete star if necessary
      for (var i = this.stars.length-1; i>=0; i--){
        if (this.stars[i].y <= -200) {
          this.stars.splice(i,1);
        }
      }
    }
}

class star {

  constructor(){
    this.xStart = random(0, width);
    this.yStart = random(height, height+300);
    this.x = this.xStart;
    this.y = this.yStart;

    this.segments = random(10,20);
    this.width = random(.1,.3);
    this.height = random(0,2);
    this.velocity = random(1,3); // random(.1,2); looks like snow
    //color
    this.alpha  = 50;
    this.c = color(255, 0, 255, this.alpha);

  }

  update() {
    this.y -= this.velocity;
    }

  render(xoffset, yoffset) {


      // the star
      noStroke();
      fill(255, 255,255);
      ellipse(this.x, this.y, .5);

      // The tail
      fill(this.c);
      stroke(this.c);
      strokeWeight(this.width);
      for (var i = 0; i <= this.segments; i++) {
        stroke(this.c, this.alpha);
        line(this.x, this.y, this.x,this.y+this.height+(i*10));
      }

      this.update();
    }

}
