document.getElementById("roll")
document.getElementById("Newgame")
document.getElementById("hold")
var total2=document.getElementById("total2")
 var curr2=document.getElementById("curr2") 
var curr1 = document.getElementById('curr1')
var total = document.getElementById('total1')
var player1=prompt(" Player 1 insert your name");
var player2=prompt("Player 2 insert your name");
document.getElementById('name1').innerHTML=player1
document.getElementById('name2').innerHTML=player2
var currN=0
var totalN1=0
var player=1
var totalN2=0
function roll()
{	

		if (player===1)
		{
		var rolling=Math.floor(Math.random()*6+1)
		currN+=rolling;
		curr1.innerHTML=currN;
			if (rolling===1)
			{
			currN=0
			curr1.innerHTML=currN
			curr2.innerHTML=currN
			}
		}
		else if (player===2)
		{
			if (rolling===1)
			{
			currN=0
			curr1.innerHTML=currN
			curr2.innerHTML=currN
			}
		var rolling=Math.floor(Math.random()*6+1)
		currN+=rolling;
		curr2.innerHTML=currN;
	
		}
	}

function hold()
{
	if (player===1)
	{
	totalN1+=currN
	total1.innerHTML=totalN1
	currN=0;
	curr1.innerHTML=currN
	player++
	}
	else if (player===2)
	{
	totalN2+=currN
	total2.innerHTML=totalN2
	currN=0;
	curr2.innerHTML=currN
	*player--
	}
	winner()
}

	
	function winner()
	{
		if(totalN1>99)
			{alert(player1+" Winner")}
		else if (totalN2>99)
			{	alert(player2+" winner")}
	}

