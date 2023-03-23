//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
    print(yAtor);
}
  
function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;  
      }      
    }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i= 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZeo()){
        meusPontos -= 1;
      }      
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,0);
  text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if(yAtor < 15 ){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();    
  }
}

function pontosMaiorQueZeo(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}
