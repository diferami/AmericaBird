var sonidofondo, sonidoboom, sonidoexplosion;

var Menu = {

	preload : function (){
		juego.stage.backgroundColor = '#fff';
		juego.load.image('logo', 'img/logo1.png');
		juego.load.image('boton', 'img/btn.png');

		juego.load.audio('sonido-fondo','audio/1.mp3');
		juego.load.audio('sonido-boom','audio/die.wav');
		juego.load.audio('sonido-explosion','audio/die.wav');
	},

	create : function (){

		var boton = this.add.button(juego.width/2,280,'boton', this.inciar_juego, this);
		boton.anchor.setTo(0.5);
		
		var logo = juego.add.sprite(juego.width/2, 100, 'logo');
		logo.anchor.setTo(0.5);
		
		//logo.anchor.setTo(0.5);
		//var textoTitulo = juego.add.text(juego.width/2, juego.height/2 - 150, 'Flappy Bird', {font : "bold 30px sans-serif", fill:"black", align:"ceter"});
		//textoTitulo.anchor.setTo(0.5);

		var textoiniciar = juego.add.text(juego.width/2, 215, 'Iniciar Juego', {font : "bold 24px sans-serif", fill:"black", align:"ceter"});
		textoiniciar.anchor.setTo(0.5);

		var txtby = juego.add.text(juego.width/2, 350, 'by diferami@gmail.com, 2018', {font : "12px sans-serif", fill:"black", align:"ceter"});
		txtby.anchor.setTo(0.5);

		sonidofondo     = juego.add.audio('sonido-fondo');
		sonidoboom      = juego.add.audio('sonido-boom');
		sonidoexplosion = juego.add.audio('sonido-explosion');

		//sonidofondo.play('',0,0.5,true);

	},

	inciar_juego : function (){
		sonidofondo.play();
		juego.state.start('Jugar');
		
	}

	


};
