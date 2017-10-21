// Add new note feature
d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select('.preview').remove();
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

// Remove all notes feature
d3.select('.remove')
		.on('click', function() {
			d3.selectAll('.note').remove();
		})

// Feeling Lucky Feature
d3.select('.lucky')
		.on('click', function() {
			d3.selectAll('.note').each(function(d) {
				let hue = Math.floor(Math.random()*360);
				d3.select(this).style('border-color', `hsl(${hue},76%,89%)`)	
				d3.select(this).style('color', `hsl(${hue},77%,51%)`)
			})
		})

// Preview Feature
d3.select('input')
	.on('input', function() {
		if(d3.select('.preview').empty()) {
			d3.select("#notes")
        .append('p')
          .classed('note', true)
          .classed('preview', true)
    }	else if(d3.event.target.value.length === 0) {
    	d3.select('.preview').remove();
    } 

		d3.select(".preview")
          .text(d3.event.target.value);
	})

