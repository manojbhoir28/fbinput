/*
 * jQuery fbInput 1.0.0
 *
 * Author: Pascal Nunes
 * Licensed under the MIT LICENSE
 *
 */
(function($) { 
jQuery.fn.fbInput = function (options) {
	myoptions = jQuery.extend ({
	data: "",
	width: -1,
	height: -1
	}, options);
	$(this).each(function(){
	    var inputBox = $(this);
	    inputBox.autocomplete(myoptions.data, myoptions);
	    inputBox.wrap("<div class=\"fbInput\"></div>")
	            .wrap("<ul></ul>")
	            .wrap("<li></li>");
	    inputBox.keyup  (function(e) {
	                    switch(e.keyCode)
	                    {
	                        case 8:
	                        case 46:
	                        case 110:
	                            var input = inputBox.val();
	                            if(input=="")
	                            {
	                                del(inputBox);
	                            }
	                            break;
	                        case 13:
	                            add(inputBox);
	                            break;
	                        case 37:
	                            left(inputBox);
	                            break;
	                        case 39:
	                            right(inputBox);   
	                            break;
	                        default:
	                            $(".currentSelected").removeClass("currentSelected").addClass("selected");
	                    }
	            })
	    inputBox.focus();
	});
	$(".fbInput").click(function(){
		$(this).find("input").focus();
	});
	function del(inputBox)
	{
		var selectedInput = inputBox.parent().parent();
		if(selectedInput.find(".currentSelected").length==0)
		{
			selectedInput.find(".selected:last").remove();
		}
		else
		{
			e = selectedInput.find(".currentSelected");
			e.next(".selected").removeClass("selected").addClass("currentSelected")
			e.remove();
		}
	}	
	function add(inputBox)
	{
		var input = inputBox.val();
		if(input!="")
		{
			inputBox.parent().before(
				$(document.createElement("li"))
				.html(
					$(document.createElement("span"))
					.append($(document.createElement("span")).text(inputBox.val()).addClass("data"))
					.append($(document.createElement("span")).text("x ").addClass("delButton ui-icon ui-icon-close"))
				)
				
				.addClass("selected")
				.click(function(e){
					$(this).parent(".currentSelected").removeClass("currentSelected").addClass("selected");
					$(this).removeClass("selected").addClass("currentSelected")
				})
			);
			inputBox.val("");
			$(".delButton").click(function(e){
				$(this).parent().remove();
			});
		 }
	}
	function left(inputBox)
	{
		var selectedInput = inputBox.parent().parent();
		if(selectedInput.find(".currentSelected").length==0)
		{
			selectedInput.find(".selected:last").removeClass("selected").addClass("currentSelected");
		}
		else
		{
			selectedInput.find(".currentSelected").removeClass("currentSelected").addClass("selected").prev(".selected").removeClass("selected").addClass("currentSelected");
		}
	}
	function right(inputBox)
	{
		var selectedInput = inputBox.parent().parent();
		if(selectedInput.find(".currentSelected").length==0)
		{
			selectedInput.find(".selected:first").removeClass("selected").addClass("currentSelected");
		}
		else
		{
			selectedInput.find(".currentSelected").removeClass("currentSelected").addClass("selected").next(".selected").removeClass("selected").addClass("currentSelected");
		}
	}
}

jQuery.fn.list = function (options) {
    var inputBox = $(this);
    var reply = "";
    inputBox.parent().parent().find(".selected .data").each(function(){
        reply += $(this).text() + ", ";
    });
    return reply;
}
})(jQuery);