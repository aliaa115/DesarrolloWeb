
var opts = {
  lines: 12, // The number of lines to draw
  angle: 0.010, // The length of each line
  lineWidth: 0.1, // The line thickness
  pointer: {
    length: 0.9, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'false', // If true, the pointer will not go past the end of the gauge
  colorStart: 'black', // Colors
  colorStop: 'black', // just experiment with them
  strokeColor: 'lightgray', // to see which ones work best for you
  generateGradient: true
};
var target = document.getElementById('canvas-preview'); // your canvas element
var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(35); // set actual value
gauge.setTextField(document.getElementById("preview-textfield"));

