   function logo(){
   	var width=350,height=350;
   	var svg = d3.select('#logo').append('svg')
             .attr('width', width)
             .attr('height', height)
             .style('border','1px solid orange')
    var graph = {
      "nodes": [{ "x": 20, "y": 227 },
                { "x": 210, "y": 7 },
                { "x": 150,  "y":  56},
                { "x": 180,  "y":  80},
                { "x": 200,  "y":  200},
                { "x": 50,  "y":  130},
              /*{ "x": 120, "y": 200 },
              { "x": 214, "y": 214},
              { "x": 282, "y": 250}*/
              ],
 
    "links": [  { "target": 1, "source":  0 },
                { "target":  2, "source":  0 },
                { "target": 3, "source":  0 },
                { "target": 4, "source":  0},
                { "target":  5, "source":  0 },
                { "target":  5, "source":  3 },
                 { "target":  4, "source":  2 },
                /*{ "target":  3, "source":  5 }*/],
     //"linksd":[{50},{5},{10},{20},{10},{60}]
     }
    var nodes = graph.nodes, 
        links = graph.links
        //linksd=graph.linksd
    var force = d3.layout.force()
    .size([width, height])
    .nodes(nodes)
    .links(links)
    .linkDistance(100)
     
    //force.linkDistance(width/2);
    //force.linkDistance([]);
    var link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

   var node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node');

   force.on('tick', function() {
  	 node.attr('r', 15)
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });

    link.attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
   });
   force.start();
   svg.append('text')
       .attr({x:60,y:150})
       .style({fill:'blue','font-size':'45px'})
       .text('Data Visual')
  };