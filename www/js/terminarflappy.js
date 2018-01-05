var Terminar = {

	preload : function (){
		if(puntos==-1) puntos = 0;
		juego.stage.backgroundColor = '#fff';
		juego.load.image('boton', 'img/FlapPyBird/sprites/btn.png');

		if (puntos>10){
			juego.load.image('jugadorlogo', 'img/jugadores/11.jpg');	
		}else{
			juego.load.image('jugadorlogo', 'img/jugadores/'+puntos.toString()+'.jpg');
		}

		//juego.load.image('jugadorlogo', 'img/jugadores/1.jpg');
	},

	create : function (){
		
		var boton = this.add.button(juego.width/2,280,'boton', this.inciar_juego, this);
		boton.anchor.setTo(0.5);
		if (puntos>10){
			var textotecla = juego.add.text(juego.width/2, 10, '#GraciasTecla', {font : "bold 16px sans-serif", fill:"black", align:"ceter"});
			textotecla.anchor.setTo(0.5);
		}
		var jugadorlogo = juego.add.sprite(juego.width/2 - 50, 15, 'jugadorlogo');
		//jugadorlogo.anchor.setTo(0.5,1);

		//var textoTitulo = juego.add.text(juego.width/2, juego.height/2 - 130, 'Flappy Bird', {font : "bold 30px sans-serif", fill:"black", align:"ceter"});
		//textoTitulo.anchor.setTo(0.5);

		
		var textopuntos = juego.add.text(juego.width/2, 180, 'Total Puntos : '+ puntos.toString(), {font : "bold 20px sans-serif", fill:"black", align:"ceter"});
		textopuntos.anchor.setTo(0.5);

		var textoiniciar = juego.add.text(juego.width/2, 210, 'Juego Terminado', {font : "bold 22px sans-serif", fill:"black", align:"ceter"});
		textoiniciar.anchor.setTo(0.5);


	},

	inciar_juego : function (){
		puntos = -1;
		juego.state.start('Jugar');
	}

	


};
