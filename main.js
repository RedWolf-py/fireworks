
window.onload = function () {

  var X = function (z) {
    return document.querySelector(z);
  }
  var canvas = X(".canvas");
  var ctx = canvas.getContext("2d");

  const audio = new Audio;
  audio.src = "/sound/fogosbarulho.mp3"

  canvas.height = 700;
  canvas.width = 1400;

  let circles = [];
  let circlestwo = [];
  let circlesthree = [];

  let gravity = 0;
  let gravitytwo = 0;
  let gravitythree = 0;

  let cor = ["rgba(255,0,0,", "rgba(255,255,255,", "rgba(0,255,0,", "rgba(255,215,0,", "rgba(255,255,255,", "rgba(255,184,0,",
    "rgba(102,204,255,", "rgba(255,0,255,", "rgba(222,184,135,",
    "rgba(0,105,07,", "rgba(4,243,60,", "rgba(255,255,255,", "rgba(238, 130, 238,", "rgba(255, 117, 24,", "rgba(0,255,0,", "rgba(127, 255, 212,", "rgba(102, 205, 170", "rgba(227, 38, 54", "rgba(255,255,255,", "rgba(255, 255, 0,", "rgba(255,0,255,", "rgba(255,0,0,", "rgba(255,255,255,"]

  // base fireworks

  class Fire {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.size = Math.random() * 1 + 1;
      this.speed = Math.random() * 1 + 0.9;
      this.angle = Math.random() * Math.PI * 2 + 2;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = -Math.sin(this.angle) * this.speed;

    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color + this.alfa + ")";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();


    }
    update() {
      this.x += this.vy;
      this.y += this.vx;
      this.vx += 0.02;

    }
  }

  // horizontal fireworks

  class fireworks {
    constructor(x, y) {

      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.alfa = 1;
      this.cores = cor[Math.floor(Math.random() * cor.length)];
      this.height = Math.random() * 200 + 400;
      this.multiply = [];
      this.explode = null;

    }

    MultiplyFunction() {
      let rockets = 60
      for (let x = 0; x < rockets; x++) {
        this.multiply.push(
          new Fire(this.x, this.y, this.size, 0, Math.PI * 2));
      }
      this.explode = new Date();

    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.cores + this.alfa + ")";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();


    }

    update() {

      if (this.y + this.height < canvas.height) {
        if (this.explode) {
          for (let i = 0; i < this.multiply.length; i++) {

            this.multiply[i].draw();
            this.multiply[i].update();
          }
        } else {
          this.MultiplyFunction();
          gravity++;
          if (gravity == 8) {
            Excluir();
            gravity = 0;
          }
        }
      } else {
        this.y = this.y - 5
      }
    }
  }

  // fireworks to the right

  class fireworks2 {
    constructor(x, y) {

      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.alfa = 1;
      this.cores = cor[Math.floor(Math.random() * cor.length)];
      this.height2 = Math.random() * 200 + 400;
      this.speed = Math.random() * 1 + 0.9;
      this.explodetwo = null;
      this.dx = Math.random() * 1 + 2;
      this.dy = Math.random() * 1 - 4;
      this.multiplytwo = [];

    }

    MultiplyFunctionTwo() {
      let rocketstwo = 60
      for (let x = 0; x < rocketstwo; x++) {
        this.multiplytwo.push(
          new Fire(this.x, this.y, this.size, 0, Math.PI * 2));
      }

      this.explodetwo = new Date();

    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.cores + this.alfa + ")";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();


    }

    update() {

      if (this.y + this.height2 < canvas.height) {

        if (this.explodetwo) {
          for (let i = 0; i < this.multiplytwo.length; i++) {
            this.multiplytwo[i].draw();
            this.multiplytwo[i].update();
          }
        } else {
          this.MultiplyFunctionTwo();
          gravitytwo++;
          if (gravitytwo == 11) {
            Excluir();
            gravitytwo = 0;

          }

        }
      } else {
        this.x += this.dx
        this.y += this.dy

      }
    }
  }


  // fireworks to the left

  class fireworks3 {
    constructor(x, y) {

      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.alfa = 1;
      this.cores = cor[Math.floor(Math.random() * cor.length)];
      this.height3 = Math.random() * 200 + 400;
      this.speed = Math.random() * 1 + 0.9;
      this.explodethree = null;
      this.dx = Math.random() * 1 + 2;
      this.dy = Math.random() * 1 - 4;
      this.multiplythree = [];

    }

    MultiplyFunctionThree() {
      let rocketsthree = 60
      for (let x = 0; x < rocketsthree; x++) {
        this.multiplythree.push(
          new Fire(this.x, this.y, this.size, 0, Math.PI * 2));
      }

      this.explodethree = new Date();

    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.cores + this.alfa + ")";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();


    }

    update() {

      if (this.y + this.height3 < canvas.height) {

        if (this.explodethree) {
          for (let i = 0; i < this.multiplythree.length; i++) {
            this.multiplythree[i].draw();
            this.multiplythree[i].update();
          }
        } else {
          this.MultiplyFunctionThree();
          gravitythree++;
          if (gravitythree == 11) {
            Excluir();
            gravitythree = 0;

          }

        }
      } else {
        this.x -= this.dx
        this.y += this.dy

      }
    }
  }
  setInterval(() => {
    let cont = 20
    let conttwo = 20
    let contthree = 20
    for (let i = 0; i < cont; i++) {
      const fire = new fireworks(Math.random() * canvas.width, 600);
      circles.push(fire)
    }
    for (let i = 0; i < conttwo; i++) {
      const firetwo = new fireworks2(Math.random() * canvas.width, 700);
      circlestwo.push(firetwo)
    }
    for (let i = 0; i < contthree; i++) {
      const firethree = new fireworks3(Math.random() * canvas.width, 700);
      circlesthree.push(firethree)
    }

  }, 2000);


  function Excluir() {
    circles.forEach(() => {
      circles.splice(0, 1)
    })
    circlestwo.forEach(() => {
      circlestwo.splice(0, 1)
    })

    circlesthree.forEach(() => {
      circlesthree.splice(0, 1)
    })
  }

  function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    circles.forEach(fire => {
      fire.draw()
      fire.update()

    })

    circlestwo.forEach(fire2 => {
      fire2.draw()
      fire2.update()

    })
    circlesthree.forEach(fire3 => {
      fire3.draw()
      fire3.update()

    })
    audio.play();
    requestAnimationFrame(loop)
  }

  loop(0);
}

//d-_-b