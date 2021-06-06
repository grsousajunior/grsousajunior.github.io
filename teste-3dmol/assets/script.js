var initShapes = function(viewer){
  $.get('../assets/eldens.cube', function(surface){
    $.get('../assets/mep.cube', function(gradient){
        let surfvol = new $3Dmol.VolumeData(surface, 'cube');
        let gradvol = new $3Dmol.VolumeData(gradient, 'cube');
        viewer.addIsosurface(surfvol, {isoval: 0.002, opacity: 0.85, smoothness: 2, voldata: gradvol, volscheme: {gradient:'roygb', min:-0.006, max:0.08}});
        viewer.zoomTo();
        viewer.render();
    });
  }); 
};