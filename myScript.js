$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("timetable.jpg",function(){
			$(this).attr("src", "timetable.jpg");
		});
    });
});