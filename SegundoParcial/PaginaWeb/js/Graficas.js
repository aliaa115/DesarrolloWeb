var color = function establecerConf(colorInicio, colorAlto, colorFondo) {
        var conf = {
                lines: 12, // The number of lines to draw
                angle: .49, // The length of each line
                lineWidth: 0.09, // The line thickness
                pointer: {
                        length: 10.9, // The radius of the inner circle
                        strokeWidth: 0, // The rotation offset
                        color: '#000000' // Fill color
                },
                limitMax: 'false', // If true, the pointer will not go past the end of the gauge
                colorStart: colorInicio, // Colors
                colorStop: colorAlto, // just experiment with them
                strokeColor: colorFondo, // to see which ones work best for you
                generateGradient: true
        };
        return conf;
}

function establecerGraf(canvas, conf, max, animate, porc, text) {
        var target = document.getElementById(canvas); // your canvas element
        var gauge = new Donut(target).setOptions(conf); // create sexy gauge!
        gauge.maxValue = max; // set max gauge value
        gauge.animationSpeed = animate; // set animation speed (32 is default value)
        gauge.set(porc); // set actual value
        gauge.setTextField(document.getElementById(text));
}


var conf1 = color('#c4f1e4','#c4f1e4','white');
var conf2 = color('#c4e2e4','#c4e2e4','white');
establecerGraf('HTML', conf1, 100, 50, 99, "HTMLtext");
establecerGraf('CSS', conf2, 100, 50, 90, "CSSText");
establecerGraf('JS', conf1, 100, 50, 80, "JStext");
establecerGraf('PHP', conf2, 100, 50, 20, "PHPtext");
establecerGraf('CPP', conf1, 100, 50, 80, "CPPtext");
establecerGraf('CS', conf2, 100, 50, 70, "CSText");
establecerGraf('Java', conf1, 100, 50, 60, "Javatext");
establecerGraf('SQL', conf2, 100, 50, 60, "SQLtext");

/*
var target = document.getElementById('canvas-preview1'); // your canvas element
var gauge = new Donut(target).setOptions(conf1); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(90); // set actual value
gauge.setTextField(document.getElementById("preview-textfield1"));*/