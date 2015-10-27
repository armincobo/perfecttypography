'use strict';			
var o = {
	w : function(fs){
		return fs * 30;
	},
	fs : function(w){
		return Math.round(w/30);
	},
	lh : function(w, fs){					
		var ow = this.w(fs);
		
		var val = 1.5 + 0.2 * (w/ow - 1);
			val = Math.round(val * 1000)/1000;

		return val;
	}
};
$(document).ready(function(){
	$('#width, #fontSize').on('input', function(){
		var w = 480;
		var fs = 16;
						
		var input = {
			w : $('#width').val(),
			fs : $('#fontSize').val() 
		};
		
		if (input.w){ w = parseInt(input.w, 10); }
		if (input.fs){ fs = parseInt(input.fs, 10); }
		
		var lh = o.lh(w, fs);
		
		var result = [
			'width : ',w,'px;\n',
			'font-size : ',fs,'px;\n',
			'line-height : ',lh,'em'
		].join('');

		$('#noResult').hide();
		$('#result').text(result).show();
		
		
		if (!input.w && !input.fs){
			$('#result').hide();
			$('#noResult').show();
		}
	})				
})


/*
# Logic
width is optimal --> defaults
width is smaller --> reduce font size and/or reduce line-height
width is greater --> increase font size and/or increase line-height

font size is optimal --> defaults
font size is smaller --> reduce width and/or increse line-height
font size is greater --> increase width and/or reduce line-height
*/
