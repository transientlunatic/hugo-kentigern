import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

window.addEventListener('load', function () {

    if (document.getElementById('rugby-app')){

	console.log("Rugby plotter loaded")

	fetch('/predictions.json')
	    .then((response) => response.json())
	    .then((json) => {

		console.log(json);

		const data = {"predictions": json[0]['outcomes'],
			      "scores": [...Array(99).keys()]}
	
		const plot = Plot.rectY(data, {y: "predictions", x: "scores"}).plot();
		const div = document.querySelector("#rugby-app");
		div.append(plot);

	    });
    }

});
