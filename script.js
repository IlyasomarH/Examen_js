



let btn=document.querySelectorAll('button')
// alert(btn[1].innerHTML)
let ecran=document.querySelectorAll('#ecran div')
let ecran2=document.querySelector('#Seconde_ecran')

for(let i=0; i<20; i++ )
{
	btn[i].addEventListener('click', function(){
	   if(btn[i].innerHTML=="Supp"){

	   	// alert('supp')

	   	for(let s=0; s<3; s++){
	   		ecran[s].innerHTML=''
	   	}
	   	ecran2.innerHTML=0

	   }else if(btn[i].innerHTML=='='){

	   	   		let nb1=parseInt(ecran[0].innerHTML,10)
	   	   		let nb2=parseInt(ecran[2].innerHTML,10)
	   	   		let op=ecran[1].innerHTML
	   	   		let resultat=document.querySelector('#Seconde_ecran')

	   	      if(op=='+')
	   	      {
	   	      	resultat.innerHTML=nb1+nb2
	   	      }else if (op=='-') {
	   	        resultat.innerHTML=nb1-nb2
	   	      }else if(op=='*'){
	   	        resultat.innerHTML=nb1*nb2

	   	      }else if(op=='/'){
	   	      	if(nb2!=0){
	   	      		alert("un nombre n'est pas divisible par 0")
	   	      	}else{
	   	      		resultat.innerHTML=nb1/nb2
	   	      	}
	   	      }else if(op=='%'){
	   	      		resultat.innerHTML=nb1%nb2
	   	      }else{
	   	      	alert('choisir un bon operateur')
	   	      }

	   	     
	     	

	   }else if(btn[i].innerHTML=='Sombre'){

	   	document.querySelector('body').style.backgroundColor="black"

	   }else if(btn[i].innerHTML=='clair'){
         document.querySelector('body').style.backgroundColor="white"
	   }




	   else{
		   	// let ecran=document.querySelectorAll('#ecran div')
			for(let j=0; j<1; j++){
				if(ecran[j].innerHTML==''){

					// /alert(ecran[j].innerHTML)
					ecran[j].innerHTML=btn[i].innerHTML
				}else if(ecran[j+1].innerHTML==''){
					ecran[j+1].innerHTML=btn[i].innerHTML
				}
				else if(ecran[j+2].innerHTML==''){
					ecran[j+2].innerHTML=btn[i].innerHTML
				}
				else{
					alert('vous avez autorise Trois click')
				}
			}
		
	   }
	
})
}
