d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

d3.select('.remove')
		.on('click', function() {
			d3.selectAll('.note').remove();
		})

d3.select('.lucky')
		.on('click', function() {
			d3.selectAll('.note').each(function(d) {
				let hue = Math.floor(Math.random()*360);
				d3.select(this).style('border-color', `hsl(${hue},76%,89%)`)	
				d3.select(this).style('color', `hsl(${hue},77%,51%)`)
			})
		})