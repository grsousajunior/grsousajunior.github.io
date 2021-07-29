/* 
  Define as configurações da cena como cor de fundo e 
  esquema de cores para os átomos e ligações
 */
let config = {
  backgroundColor: "white", 
  defaultcolors: $3Dmol.elementColors.Jmol
};

/* 
  Cria uma instânica 3Dmol dentro da div chamada 'moldiv' 
  com as configurações de 'config' 
 */
let viewer = $3Dmol.createViewer("moldiv", config);
/*
  Usa o arquivo 'modelo.sdf', presente na mesma pasta que
  o que o arquivo 'index.html' na construção da visualização
 */
$.get("modelo.sdf", function(modelo){
  /* 
    Adiciona o modelo a partir do parâmetro 'modelo' e 
    indica o tipo do arquivo (a estrutura) como 'sdf' 
   */
  viewer.addModel(modelo, "sdf");
  
  // Estilo padrão: uma combinação de esferas e palitos
  viewer.setStyle({
    sphere: {
      scale: 0.25
    },
    stick: {
      radius: 0.175
    }
  });
  viewer.zoomTo(); // Ajusta a câmera ao modelo 
  viewer.render(); // Finaliza e exibe a cena na tela
});
