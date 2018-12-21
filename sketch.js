function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

/*
	var xPos = (windowWidth - width) / 2;
	var yPos = (windowHeight - height) / 2;
	canvas.position(xPos, yPos);
*/

	fill(255,255,255);
	angleMode(DEGREES);

}


/* Gerade_6 */

function draw() {
	background(0,0,0);
	scale(0.5);

	var sec = second();
	var min = minute();
	var hr  = hour();

	/* Var_Eins */

	var lineeins = map(sec,0,59,100,470);

	/* Var_Sechs */

	var angleSec = map(sec, 0,59,1,360);
	var halfangleSec = map(sec, 0,59,181,360);
	var lineleft = map(sec,0,59,200,370);

	/* Var_Zwei */

	var arczwei = map(sec, 0,59,181,405);

	/* Var_Drei */

	var arcdrei = map(sec, 0,59,181,450);

	/* Var_Vier */

	var linevier = map(sec,0,59,100,470);

	/* Var_Fünf */

	var linefuenf = map(sec, 0,59,100,280);

	/* Var_Sieben */

	var linesieben = map(sec, 0,59,2210,2400);

	/* Var_Acht */

	var arcacht = map(sec, 0,59,0,360);

	/* Var_Neun */

	var arcneun = map(sec, 0,59,0,360);

	/* Var_o */

	var arco = map(sec, 0,59,181,360);

	var h = 500;
	var m = 1000;



	scale(0.5);

	if ((hr == 1) || (hr == 13)){

	let einsstunde = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(200, 470, 200, 100),
	stroke(color(0,222,252,220)),
	line(100, 200, 200, 100)
	);

} else if ((hr == 2) || (hr == 14)){

	let zweistunde = (

	strokeWeight(20),
	noFill(),
	arc(500, 200, 200, 200, 180, 405),
	stroke(color(0,222,252,220)),
	line(416, 470, 570, 272),
	stroke(color(0,252,232,220)),
	line(416, 470, 600, 470)
	);

} else if ((hr == 3) || (hr == 15)){

	let dreistunde = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,222,252,220)),
	arc(900, 180, 180, 180, 180, 450),
	stroke(color(0,252,232,220)),
	arc(900, 370, 200, 200, 270, 180)

	);

} else if ((hr == 4) || (hr == 16)){

	let vierstunde = (

	stroke(color(0,252,232,220)),
	line(1300, 470, 1300, 100),
	stroke(color(0,222,252,220)),
	line(1136, 330, 1300, 100),
	stroke(color(0,180,252,220)),
	line(1136, 330, 1360, 330)

	);

} else if ((hr == 5) || (hr == 17)){

	let fuenfstunde = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,252,232,220)),
	arc(1600, 360, 240, 240, 224, 160),
	stroke(color(0,180,252,220)),
	line(1512, 280, 1512, 100),
	stroke(color(0,252,232,220)),
	line(1512, 100, 1690, 100)

	);

} else if ((hr == 6) || (hr == 18)){

	let sechsstunde = (

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),

	arc(2000, 370, 200, 200, 0, 360),

	stroke(color(0,252,232,220)),
	strokeWeight(20),
	noFill(),

	arc(2000, 200, 200, 200, 180, 360),

	strokeWeight(20),
	stroke(color(0,180,252,220)),
	noFill(),

	line(1900, 200, 1900, 370)

	);

} else if ((hr == 7) || (hr == 19)){

	let siebenstunde = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,180,252,220)),
	line(2300, 470, 2400, 100),
	stroke(color(0,252,232,220)),
	line(2210, 100, 2400, 100),
	stroke(color(0,180,252,220)),
	line(2210, 170, 2210, 100)

	);

} else if ((hr == 8) || (hr == 22)){

	let achtstunde = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,222,252,220)),
	arc(2650, 180, 180, 180, 0, 360),
	stroke(color(0,252,232,220)),
	arc(2650, 370, 200, 200, 0, 360)

	);

} else if ((hr == 9) || (hr == 21)){


	let neunstunde = (

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),
	arc(3000, 200, 200, 200, 0, 360),
	stroke(color(0,252,232,220)),
	arc(3000, 370, 200, 200, 0, 155),
	stroke(color(0,180,252,220)),
	line(3100, 200, 3100, 370)

	);

} else if ((hr == 10) || (hr == 22)){

	let zehnstunde = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(3400, 470, 3400, 100),
	stroke(color(0,222,252,220)),
	line(3300, 200, 3400, 100),

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),
	arc(3600, 200, 200, 200, 180, 360),
	stroke(color(0,252,232,220)),
	arc(3600, 370, 200, 200, 0, 180),
	stroke(color(0,180,252,220)),
	line(3500, 200, 3500, 370),
	stroke(color(0,180,252,220)),
	line(3700, 200, 3700, 370)
	);

} else if ((hr == 11) || (hr == 23)){

	let elfstunde = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(4000, 470, 4000, 100),
	stroke(color(0,222,252,220)),
	line(3900, 200, 4000, 100),

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(4200, 470, 4200, 100),
	stroke(color(0,222,252,220)),
	line(4100, 200, 4200, 100)

	);

} else if ((hr == 12) || (hr == 24)){

	let zwölfstunde = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(4500, 470, 4500, 100),
	stroke(color(0,222,252,220)),
	line(4400, 200, 4500, 100),

	strokeWeight(20),
	noFill(),
	arc(4700, 200, 200, 200, 180, 405),
	stroke(color(0,222,252,220)),
	line(4616, 470, 4770, 272),
	stroke(color(0,252,232,220)),
	line(4616, 470, 4800, 470)

	);

	}

	/* Zehner */

	if ((min > 10) && (min < 20)){

	let einszehner = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(200, 470+h, 200, 100+h),
	stroke(color(0,222,252,220)),
	line(100, 200+h, 200, 100+h)
	);

} else if ((min > 20) && (min < 30)){

	let zweizehner = (

	strokeWeight(20),
	noFill(),
	arc(500, 200+h, 200, 200, 180, 405),
	stroke(color(0,222,252,220)),
	line(416, 470+h, 570, 272+h),
	stroke(color(0,252,232,220)),
	line(416, 470+h, 600, 470+h)
	);

} else if ((min > 30) && (min < 40)){

	let dreizehner = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,222,252,220)),
	arc(900, 180+h, 180, 180, 180, 450),
	stroke(color(0,252,232,220)),
	arc(900, 370+h, 200, 200, 270, 180)

	);

} else if ((min > 40) && (min < 50)){

	let vierzehner = (

	stroke(color(0,252,232,220)),
	line(1300, 470+h, 1300, 100+h),
	stroke(color(0,222,252,220)),
	line(1136, 330+h, 1300, 100+h),
	stroke(color(0,180,252,220)),
	line(1136, 330+h, 1360, 330+h)

	);

} else if ((min > 50) && (min < 60)){

	let fuenfzehner = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,252,232,220)),
	arc(1600, 360+h, 240, 240, 224, 160),
	stroke(color(0,180,252,220)),
	line(1512, 280+h, 1512, 100+h),
	stroke(color(0,252,232,220)),
	line(1512, 100+h, 1690, 100+h)

	);

}	else if ((min > 0) && (min < 1)){

	/* O */

	let o = (

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),
	arc(3400, 200+h, 200, 200, 180, arco),
	stroke(color(0,252,232,220)),
	arc(3400, 370+h, 200, 200, 0, 180),
	stroke(color(0,180,252,220)),
	line(3300, 200+h, 3300, 370+h),
	stroke(color(0,180,252,220)),
	line(3500, 200+h, 3500, 370+h)

	);


	}

	/* Minuten_Einer */

	/* Eins */

	/* if ((min == 1) || (min == 11) || (min == 21)|| (min == 31) || (min == 41) || (min == 51)){ */

	let eins = (

	strokeWeight(20),
	stroke(color(0,252,232,220)),
	line(200, lineeins+m, 200, 100+m),
	stroke(color(0,222,252,220)),
	line(100, 200+m, 200, 100+m)
	);

	/* } else if ((min == 2) || (min == 12) || (min == 22)|| (min == 32) || (min == 42) || (min == 52)){ */

	/* Zwei */

	let zwei = (

	strokeWeight(20),
	noFill(),
	arc(500, 200+m, 200, 200, 180, arczwei),
	stroke(color(0,222,252,220)),
	line(416, 470+m, 570, 272+m),
	stroke(color(0,252,232,220)),
	line(416, 470+m, 600, 470+m)
	);

/* } else if ((min == 3) || (min == 13) || (min == 23)|| (min == 33) || (min == 43) || (min == 53)){ */

	/* Drei */

	let drei = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,222,252,220)),
	arc(900, 180+m, 180, 180, 180, arcdrei),
	stroke(color(0,252,232,220)),
	arc(900, 370+m, 200, 200, 270, 180)

	);

/* } else if ((min == 4) || (min == 14) || (min == 24)|| (min == 34) || (min == 44) || (min == 54)){ */

	/* Vier */

	let vier = (

	stroke(color(0,252,232,220)),
	line(1300, linevier+m, 1300, 100+m),
	stroke(color(0,222,252,220)),
	line(1136, 330+m, 1300, 100+m),
	stroke(color(0,180,252,220)),
	line(1136, 330+m, 1360, 330+m)

	);


/* } else if ((min == 5) || (min == 15) || (min == 25)|| (min == 35) || (min == 45) || (min == 55)){ */

	/* Fünf */

	let fuenf = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,252,232,220)),
	arc(1600, 360+m, 240, 240, 224, 160),
	stroke(color(0,180,252,220)),
	line(1512, linefuenf+m, 1512, 100+m),
	stroke(color(0,252,232,220)),
	line(1512, 100+m, 1690, 100+m)

	);

/* } else if ((min == 7) || (min == 17) || (min == 27)|| (min == 37) || (min == 47) || (min == 57)){ */

	/* Sieben */

	let sieben = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,180,252,220)),
	line(2300, 470+m, 2400, 100+m),
	stroke(color(0,252,232,220)),
	line(2210, 100+m, linesieben, 100+m),
	stroke(color(0,180,252,220)),
	line(2210, 170+m, 2210, 100+m)

	);

/* } else if ((min == 8) || (min == 18) || (min == 28)|| (min == 38) || (min == 48) || (min == 58)){ */

	/* Acht */

	let acht = (

	strokeWeight(20),
	noFill(),
	stroke(color(0,222,252,220)),
	arc(2650, 180+m, 180, 180, 0, 360),
	stroke(color(0,252,232,220)),
	arc(2650, 370+m, 200, 200, 360, arcacht)

	);

/* } else if ((min == 9) || (min == 19) || (min == 29)|| (min == 39) || (min == 49) || (min == 59)){ */

	/* Neun */

	let neun = (

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),
	arc(3000, 200+m, 200, 200, 0, arcneun),
	stroke(color(0,252,232,220)),
	arc(3000, 370+m, 200, 200, 0, 155),
	stroke(color(0,180,252,220)),
	line(3100, 200+m, 3100, 370+m)

	);


/* } else if ((min == 6) || (min == 16) || (min == 26)|| (min == 36) || (min == 46) || (min == 56)){ */

	/* Sechs */

	let sechs = (

	stroke(color(0,222,252,220)),
	strokeWeight(20),
	noFill(),

	arc(2000, 370+m, 200, 200, 0, angleSec),

	stroke(color(0,252,232,220)),
	strokeWeight(20),
	noFill(),

	arc(2000, 200+m, 200, 200, 180, halfangleSec),

	strokeWeight(20),
	stroke(color(0,180,252,220)),
	noFill(),

	line(1900, 200+m, 1900, lineleft+m)

	);
/*	} */

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
