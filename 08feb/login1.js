$(() => {
    $('#user').val('')
    $('#password').val('')
    $('#login').val('')

     localStorage.clear();
    $('#login').on('click', function () {
        let utente = $('#user').val();
        let password = $('#password').val();
        let login = $('#login').val();
        const regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/
        const regexPass = /[0-9]/;
       
       
       //campi di controllo
        if (utente == '' || password == '') {
            alert('inserire nome utente e password');
        } else if(password.length < 6 || !regexPass.test(password)){
            alert('la password deve avere almeno 6 caratteri e contenere un numero');
        }else {
            partenza()
        }
        function partenza(){
            let progressBar = $('#progress');
            let larghezza = 1;
            let intervallo = setInterval(cresci,5);

            function cresci(){
                if(larghezza > 700){
                    clearInterval(intervallo);
                    location.href = 'elencocorsi.html';
                } else{
                    larghezza++;
                    progressBar.css('width', larghezza + 'px');
                    localStorage.setItem('utente', utente);
                    // location.href = 'elencocorsi.html';
                    
                }
                cresci()
            }
        }

        }
    )
})








































    // //localStorage.clear();
    // $('#login').on('click', function () {
    //     let utente = $('#user').val();
    //     let password = $('#password').val();
    //     const emailRegex = /\S+@\S+\.\S+/;
    //     const regexPass = /[0-9]/;

    //     //campi di controllo
    //     if (utente == '' || password == '') {
    //         alert("inserire nome utente e password");
    //     } else if (password.length < 6 || !regexPass.test(password)) {
    //         alert("La password deve essere almeno di 6 caratteri e contenere un numero");
    //     } else if (!emailRegex.test(utente)) {
    //         alert("inserire un nome utente valido");
    //     } else {
    //         partenza()
    //     }
    //     // funzione per la progress bar


    //     function partenza() {
    //         let progressBar = document.getElementById('progress');
    //         let larghezza = 1;
    //         let intervallo = setInterval(cresci, 10);
    //         function cresci() {
    //             if (larghezza > 500) {
    //                 clearInterval(intervallo);
    //             } else {
    //                 larghezza++;
    //                 progressBar.css('width', larghezza + 'px');
    //             }
    //         }
    //     }

