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

d3.select('#remove')
		.on('click', function() {
			console.log(d3.event);
			var notes = d3.selectAll('.note').remove();
		})