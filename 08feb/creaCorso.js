$(()=> {
    let utente = localStorage.getItem('utente');
    $('#benvenuto').html('<h2>Benvenuto' + utente + '</h2>');

    $('#logout').on('click', function(){
        localStorage.clear();
        location.href = 'login.html';
    });
});


$('#creaBtn').on('click', function(){
    let course = $('#course').val();
    let durata = $('#durata').val();
    let materia1=$('#materia1').val();
    let materia2=$('#materia2').val();
    let materia3=$('#materia3').val();


    if(course == ''){
        $('#error1').html('Scegli corso').css("font-weight","bold");
    }else if(durata == ''){
        $('#error2').html('inserisci durata corso scelto').css("font-weight","bold");
    }else if(materia1 == ''){
        // alert('Inserisci materia');
        $('#error3').html('inserisci materia');
    }else if(materia2 == ''){
        $('#error3').html('inserisci materia');
    }else if(materia3 == ''){
        $('#error3').html('inserisci materia');
    }else{
        $('#choosenCourse').html(`Hai scelto un corso di ${course} di ${materia1},${materia2}, e ${materia3} `).css('font-weight','bold');
    }
});
$('#logout').on('click', function () {
    localStorage.clear();
    location.href = 'login1.html';
});

