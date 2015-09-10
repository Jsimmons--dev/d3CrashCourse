console.log("Test Harness Loaded");

var data = [10, 40, 32, 20, -40, 32, 40];

var totalWidth = 500;
var totalHeight = 300;
var margin = {};
margin.top = 50;
margin.right = 50;
margin.bottom = 50;
margin.left = 50;
var width = totalWidth - margin.left - margin.right;
var height = totalHeight - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr({
        "width": width,
        "height": height
    });

var y = d3.scale.linear()
    .domain([d3.min(data), d3.max(data)])
    .range([0, height/2]);

var x = d3.scale.linear()
    .domain([0, data.length])
    .range([0, width])

svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr({
        "x": function (d, i) {
            return x(i);
        },
        "y": function (d, i) {
            if (d > 0) {
                return (height/2) - y(d);
            } else {
				return (height)/2;
			}
        },
        "width": function (d, i) {
            return width / data.length
        },
        "height": function (d, i) {
            return y(Math.abs(d));
        }
    })
    .style({
        fill:function(d,i){
				if(d > 0) {
					return "green";
				} else {
					return "red";
				}
		}
    });
