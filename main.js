$("#in1").on('input',function(e){
 update();
});

$("#in2").on('input',function(e){
 update();
});

$("#in3").on('input',function(e){
 update();
});

function update() {
  // total xp OWNED at each level (starting at 1)
  xp_amounted = [0,1,2,4,8,16,32,56,88,128]

  cur_level = parseInt($("#in1").val());
  goal_level = parseInt($("#in2").val());
  cur_xp = parseInt($("#in3").val());

	
  cur_xp = cur_xp + xp_amounted[cur_level-1] // xp total at cur level + bonus xp
  xp_req = Math.abs(xp_amounted[goal_level-1] - cur_xp) // xp in target level - current xp
  gold_req = (Math.ceil(xp_req/4))*5 // div 4 for each button press, each press costs 5, round up
	
  $("#cur_xp").text("Cur XP: " + cur_xp);
  $("#xp_result").text(xp_req + " XP");
  $("#gold_result").text(gold_req + " Gold");
}

update();