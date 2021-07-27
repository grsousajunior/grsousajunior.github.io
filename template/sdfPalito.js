/* 
  Define as configurações da cena como cor de fundo e 
  esquema de cores para os átomos e ligações
 */
let config = {
  backgroundColor: 'white', 
  defaultcolors: $3Dmol.elementColors.Jmol
};

/* 
  Cria uma instânica 3Dmol dentro da div chamada 'moldiv' 
  com as configurações de 'config' 
 */
let viewer = $3Dmol.createViewer("moldiv", config);

$.get('modelo.sdf', function(modelo){
    /* 
      Adiciona o modelo a partir do parâmetro 'modelo' e 
      indica o tipo do arquivo (a estrutura) como 'sdf' 
     */
    viewer.addModel(modelo, 'sdf');
    
    /*
      Estilo padrão: uma combinação de esferas e palitos
     */
    viewer.setStyle({
      sphere: {
        scale: 0.25
      },
      stick: {
        radius: 0.175
      },
    });

    viewer.zoomTo(); // Ajusta a câmera ao modelo 
    viewer.render(); // Finaliza e exibe a cena na tela
});

/* ESTILOS */
/*
  Configura o estilo molecular como palitos.
  O argumento é o diâmetro(?) do palito em angstrons(?)
 */
var bolas = function(escala){
  viewer.setStyle({
    sphere:{
      scale: escala
    }
  });
  viewer.render(); // Finaliza e exibe a cena na tela
};

/*
  Configura o estilo molecular como palitos.
  O argumento é o diâmetro(?) do palito em angstrons(?)
 */
var palitos = function(raio){
  viewer.setStyle({
    stick: {
      radius: raio //0.175
    }
  });
  viewer.render(); // Finaliza e exibe a cena na tela
};

/* 
  Configura o estilo molecular como uma combinação de 
  esferas (com escala relativa ao raio de Van der Waals) e 
  palitos (com diâmetro em angstrons(?))
 */
var bolasPalitos = function(escala,raio){
  viewer.setStyle({
    sphere: {
      scale: escala //0.25
    },
    stick: {
      radius: raio //0.175
    }
  });
  viewer.render(); // Finaliza e exibe a cena na tela
};

var alphaBolasPalitos = function(opacidade, escala, raio){
  viewer.setStyle({
    sphere:{
      scale: escala,      // Relativa ao raio de Van der Waals
      opacity: opacidade  // Aplica transparência aos átomos
    }, 
    stick:{
      radius: raio //0.175
    }
  });
  viewer.render();// Finaliza e exibe a cena na tela 
};

/* Reposicionar */
var reposicionar = function(){
  viewer.zoomTo(); // Reajusta a câmera ao modelo 
  //viewer.render();// Finaliza e exibe a cena na tela 
};
