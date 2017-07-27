var array=["quelle est la couleur du maillot rouge de pablo?","combien de pattes ont les chiens?"]
function questions()
{
	var aleatoire=Math.floor(Math.random()*array.length)
document.getElementById('question').innerHTML=array[aleatoire]
if (aleatoire===0) 
{
document.getElementById('reponsespossible').innerHTML=reponsespossible

}
else
{
	document.getElementById('reponsespossible').innerHTML=reponsespossible

}


}
function repondre()
{
	prompt(array[aleatoire])
}
reponsespossible=["Rouge",'Bleue',"Jaune","Gris"]

a=2
b=4
c=3
D=6