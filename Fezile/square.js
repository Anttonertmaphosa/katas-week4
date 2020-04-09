var a, i;
var str="";

function square(num){

	for (i=1; i<=num; i++) 
	{
		str +="#";
		for (a=1; a<num; a++) 
		{
			str +="#";
		}
		
		console.log(str);
		str="";
	}
}


square(4);

