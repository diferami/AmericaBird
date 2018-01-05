
var fondojuego;
var flappy;
var tubos;
var saltar;
var timer;
var puntos=-1;
var txtPuntos;


var Jugar = {

	preload : function (){
		juego.load.image('fondo', 'img/fondo3.jpg');
		juego.load.spritesheet('pajaro', 'img/diablos40x200.png',50,40);
		juego.load.image('tubo', 'img/tubo.png');

		juego.forceSingleUpdate = true;
	},

	create : function (){
		fondojuego = juego.add.tileSprite(0,0,370,550,'fondo');

		juego.physics.startSystem(Phaser.Physics.ARCADE);

		tubos = juego.add.group();
		tubos.enableBody=true;
		tubos.createMultiple(20, 'tubo');

		flappy = juego.add.sprite(100,245,'pajaro');
		flappy.animations.add('vuelo',[0, 1, 2], 10, true);
		flappy.anchor.setTo(0, 0.5)
		
		saltar = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		saltar.onDown.add(this.saltar, this);
		
		

		juego.physics.arcade.enable(flappy);
		flappy.body.collideWorldBounds = true;
		//flappy.body.bounce.y = 0.3;
		flappy.body.gravity.y = 1200;

		time = juego.time.events.loop(1500, this.crearColumna, this);

		txtPuntos = juego.add.text(20,20,"Puntos : 0", {font : "bold 30px sans-serif", fill:"black"});
		
	},

	update : function (){
	
		if(juego.input.activePointer.isDown){
    		//	if(game.input.x > 500){ // Se comprueban las coordenadas del click
           	this.saltar();
		}
		

		if (flappy.inworld==false){
			//game over
			juego.state.start('Terminar');
		}else{
			if(flappy.position.y > 460){
				// game over
				flappy.alive = false;
				tubos.forEachAlive(function(t){
					t.body.velocity.x = 0;
				}, this);
				
				juego.state.start('Terminar');
			}else{
				fondojuego.tilePosition.x -=1;
			}
		}

		juego.physics.arcade.overlap(flappy, tubos, this.getColision, null, this); 

		flappy.animations.play('vuelo');

		if(flappy.angle < 20){
			flappy.angle +=1;
		}


		
		
	},

	saltar : function (){
		flappy.body.velocity.y = -350;
		juego.add.tween(flappy).to({angle:-20}, 100).start();
	},
	
	crearColumna : function (){
		// se necesitan 8 tubos para cubri la pantalla, y dejar un hueco aleatorio de dos tubos
		// la pantalla mide en y hasta el piso de la foto 460 , cada tubo mide 60  , 60*8 = 480
		var hueco = Math.floor(Math.random()*5)+1;
		for (var i = 0; i < 8; i++) {
			if (i != hueco && i != hueco+1){
				this.crearUnTubo(370, i*60);
			}
		};

		puntos += 1;
		txtPuntos.text = 'Puntos : '+puntos;
	},

	crearUnTubo : function (x, y){
		var tubo = tubos.getFirstDead();

		tubo.reset(x, y);
		tubo.body.velocity.x 	= -180;
		tubo.checkWorldBounds 	= true;
		tubo.outOfBoundsKill 	= true;

	},

	getColision : function (){
		if (flappy.alive==false){
			return;
		}

		flappy.alive = false;
		juego.time.events.remove(timer);
		tubos.forEachAlive(function(t){
			t.body.velocity.x = 0;
		}, this);
		
		sonidofondo.stop();
		sonidoboom.play();
		juego.state.start('Terminar');
		
	}




};

