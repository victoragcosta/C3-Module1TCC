function funcaoMatematica(x,y){
	//Aqui vai sua função matemática:
	z = x*y/sqrt(x*x+y*y)/2;
	//Divida sua função por um número tipo 100
	//se estiver muito difícil de visualizar
	return z;
}

//Aqui se ajusta quão baixo fica a origem do gráfico
var ajuste = 100;

//Número de quadriláteros de dois triângulos retângulos
//em cada sentido
var alturaTot = 30;
var larguraTot = 30;

//Tamanho do lado de cada quadrado
var altura = 10;
var largura = 10;





//Programa em sentido
var squarey = new Array(6);

function setup(){
	createCanvas(800,600, WEBGL);
	translate(0,0,0);

	squarey[0] = createVector(altura,0);
	squarey[1] = createVector(0,0);
	squarey[2] = createVector(0,largura);
	squarey[3] = createVector(altura,0);
	squarey[4] = createVector(altura,largura);
	squarey[5] = createVector(0,largura);
}
function draw(){
	translate(0,0+ajuste,0);
	background(100);

	noFill();
	rotateX(constrain(map(mouseY, height, 0, -PI, PI), -PI, PI));
	rotateZ(constrain(map(mouseX, 0, width, -PI, PI), -PI, PI));

	beginShape();
	for (var altur = 0; altur < alturaTot; altur++) {
		for (var largur = 0; largur < larguraTot; largur++) {
			for (var i = 0; i < squarey.length; i++) {
				var p = squarey[i];
				var x = p.x + largur*largura-larguraTot*largura/2;
				var y = p.y + altur * altura-alturaTot*altura/2;
				vertex(x,y,funcaoMatematica(x, y));
			}
			vertex(squarey[4]);
		}
	}
	endShape();
}