    function clickMe()
    {
        //alert('Ta aqui');

        //console.log("Teste do Console");

        console.log(document.getElementById("title")); //Esse comando serve para pegar elementos html atraves do id.
        console.log(document.getElementById("title").innerText);
        console.log(document.getElementsByClassName('text')); //Esse comando serve para pegar elementos html atraves do class, retornando uma lista (array) começando sempre pelo 0.
        console.log(document.getElementsByClassName('text')[0]); //Esse [0] para acessar o array especifico.
    }