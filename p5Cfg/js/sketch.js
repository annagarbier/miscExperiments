const stillLifeGrm = {
    "S": ["#setup#"],
    "setup": ["function setup() { #canvas# #background# #fill# #stroke# #weight# #shape# noLoop(); }"],
    "canvas": ["createCanvas(200, 200);"],
    "background": ["background(#color#, #color#, #color#);"],
    "fill": ["fill(#color#, #color#, #color#);"],
    "stroke": ["stroke(#color#, #color#, #color#);"],
    "weight": ["strokeWeight(2);"],
    "color": ["0", "50", "100", "150", "200", "250"],
    "shape": ["ellipse(#shape_params#);", "rect(#shape_params#);"],
    "shape_params": ["#shape_param#, #shape_param#, #shape_param#, #shape_param#"],
    "shape_param": ["50", "100", "150"]
}

function expandGrm(grammar, parentDiv) {
    const grm = tracery.createGrammar(grammar);
    const grmOut = grm.flatten("#S#");
    const grmDiv = document.createElement('div');
    document.getElementById(parentDiv).appendChild(grmDiv);
    grmDiv.textContent = grmOut;
}

function main() {
    expandGrm(stillLifeGrm, "output");
}

setTimeout(main, 10);