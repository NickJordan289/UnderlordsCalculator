$("#in1").on('input',function(e){
 update();
});

$("#in2").on('input',function(e){
 update();
});

$("#in3").on('input',function(e){
 update();
});

$("#in4").on('input',function(e){
  update();
});

function update() {
  // total xp OWNED at each level (starting at 1)
  xp_amounted = [0,1,2,4,8,16,32,56,88,128]
  xp_required = [1,1,2,4,8,16,24,32,40]

  cur_level = parseInt($("#in1").val());
  goal_level = parseInt($("#in2").val());
  cur_xp = parseInt($("#in3").val());
	
  cur_xp = cur_xp + xp_amounted[cur_level-1] // xp total at cur level + bonus xp
  xp_req = Math.abs(xp_amounted[goal_level-1] - cur_xp) // xp in target level - current xp
  gold_req = (Math.ceil(xp_req/4))*5 // div 4 for each button press, each press costs 5, round up

  $("#lev").text(cur_level);

  $("#cur_xp").text("Cur XP: " + cur_xp);
  $("#xp_result").text(cur_level + " -> " + goal_level + " = " + xp_req + " XP");
  $("#gold_result").text(cur_level + " -> " + goal_level + " = " + gold_req + " Gold");

  cur_gold = parseInt($("#in4").val());
  xp_from_gold = Math.floor(cur_gold/5)*4;
  $("#xp_from_gold_result").text(xp_from_gold + " xp is able to be bought with " + cur_gold + " Gold");

  console.log(findLevelAtGivenXP(cur_level, xp_from_gold));

  percent = Math.min(100,Math.round((xp_from_gold/xp_amounted[goal_level-1])*100));
  $("#circ").attr('class', 'c100 big p'+percent);
}

function findLevelAtGivenXP(level, xp) {
  /*xp_amounted = [0,1,2,4,8,16,32,56,88,128];
  for (let i = 0; i < xp_amounted.length; i++) {
      v = xp_amounted[i];
      cur_xp = xp_amounted[level-1]+xp;
      if(cur_xp < v) { // not enough xp for this level
          return i+1;
      } else {
        console.log("CUR: " + cur_xp);
        console.log("V: "+v);
      }
  }*/
  return -1;
}

update();