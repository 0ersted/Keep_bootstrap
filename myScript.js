$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("timetable.jpg",function(){
			$(this).attr("src", "timetable.jpg");
			$(this).css("position","relatives");
		});
		$("#div2").load("myCV.pdf",function(){
			$(this).attr("src", "myCV.pdf");
			$(this).css({"height":"400px", "width":"550px"})
		});
    });
});