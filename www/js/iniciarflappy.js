var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');

juego.state.add('Menu', Menu);
juego.state.add('Jugar', Jugar);
juego.state.add('Terminar', Terminar);

juego.state.start('Menu');