var xhttp = new XMLHttpRequest ();

xhttp.onreadystatechange = function () {
    
 if (this.readyState === 4 && this.status === 200) {
    var dados = xhttp.responseText;
    document.getElementsById('demo').innerHTML = dados; 
     console.log(dados)
 }    
    
}

var url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
xhttp.open('GET', url, true);
xhttp.send();