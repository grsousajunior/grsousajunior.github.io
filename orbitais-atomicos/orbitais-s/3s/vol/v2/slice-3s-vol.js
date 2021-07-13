var loadOrbitals = function(viewer) {
    $.get('orb000006.cub', function(data){
        var voldata = new $3Dmol.VolumeData(data, "cube");

        var size = 2.5
        var radius = 0.025
        var mid = 0.95
        var radiusRatio = 2.0
        var colorX = 'red'
        var colorY = 'green'
        var colorZ = 'blue'

        viewer.addVolumetricRender(voldata, {
            transferfn: [
                // Azul
                {color: "#00557f", opacity: .075, value: 0.1},
                {color: "#00557f", opacity: .001, value: 0.015},
                //"Invisível"
                {color: "white",   opacity: 0,    value: 0},
                //Amarelo
                {color: "#ffaa00", opacity: .001, value: -0.015},
                {color: "#ffaa00", opacity: .075, value: -0.1}
            ]});


       // Eixo x
       viewer.addArrow({
                    start: {x:-size, y:0.0, z:0.0},
                    end:   {x: size, y:0.0, z:0.0},
                    color: colorX,
                    radius: radius,
                    radiusRatio: radiusRatio,
                    mid: mid
        });
        // Nome eixo
        viewer.addLabel("x", {
            position: {x:size*1.05, y:0.0, z:0.0}, 
            fontSize:32,
            fontColor: colorX,
            fixed: false,
            backgroundColor: 'white', 
            backgroundOpacity: 0.0,
            alignment: 'center'
        });
        
        // Eixo y
        viewer.addArrow({
                    start: {x:0.0, y:-size, z:0.0},
                    end:   {x:0.0, y:size, z:0.0},
                    color: colorY,
                    radius: radius,
                    radiusRatio: radiusRatio,
                    mid: mid
        });
        // Nome eixo
        viewer.addLabel("y", {
            position: {x:0, y:size*1.05, z:0.0}, 
            fontSize:32,
            fontColor: colorY,
            fixed: false,
            backgroundColor: 'white', 
            backgroundOpacity: 0.0,
            alignment: 'center'
        });
        
        // Eixo z
        viewer.addArrow({
                    start: {x:0.0, y:0.0, z:-size},
                    end:   {x:0.0, y:0.0, z:size},
                    color: colorZ,
                    radius: radius,
                    radiusRatio: radiusRatio,
                    mid: mid
        });
        // Nome eixo
        viewer.addLabel("z", {
            position: {x:0, y:0.0, z:size*1.05}, 
            fontSize:32,
            fontColor: colorZ,
            fixed: false,
            backgroundColor: 'white', 
            backgroundOpacity: 0.0,
            alignment: 'center'
        });
        
        viewer.zoomTo();
        //viewer.zoom();
        viewer.render();
    });
};
