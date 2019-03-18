function doCssChange(){
	var currentCss = document.getElementById('cssLink'); 
	if(currentCss == '/css/tecnologia.css')
		document.getElementById('cssLink').href='/css/cine.css';
	else if(currentCss == '/css/cine.css')
		document.getElementById('cssLink').href='/css/cienciaFiccion.css';
	else if(currentCss == '/css/cienciaFiccion.css')
		document.getElementById('cssLink').href='/css/tecnologia.css';
}