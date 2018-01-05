var Menu = {

	preload : function (){
		juego.stage.backgroundColor = '#fff';
		juego.load.image('logo', 'img/logo.png');
		juego.load.image('boton', 'img/btn.png');
	},

	create : function (){

		var boton = this.add.button(juego.width/2,juego.height/2,'boton', this.inciar_juego, this);
		boton.anchor.setTo(0.5);
		
		var logo = juego.add.sprite(20, 10, 'logo');
		
		//logo.anchor.setTo(0.5);
		//var textoTitulo = juego.add.text(juego.width/2, juego.height/2 - 150, 'Flappy Bird', {font : "bold 30px sans-serif", fill:"black", align:"ceter"});
		//textoTitulo.anchor.setTo(0.5);

		var textoiniciar = juego.add.text(juego.width/2, juego.height/2 - 85, 'Iniciar Juego', {font : "bold 24px sans-serif", fill:"black", align:"ceter"});
		textoiniciar.anchor.setTo(0.5);
	},

	inciar_juego : function (){
		juego.state.start('Jugar');
		
	}

	


};
