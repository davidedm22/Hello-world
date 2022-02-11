class Corsi {
    nome;
    materia;
    durata;
    constructor(_nome,_materia,_durata){
        this.nome = _nome;
        this.materia = _materia;
        this.durata = _durata;
    }
    corsoCompleto() {
        return `corso ${this.nome} di ${this.materia} della durata di ${this.durata}`;
}
}

$(() => {

    let corso1 = new Corsi('FE07', 'front-end development', '4 mesi');
    let corso2 = new Corsi('BE07', 'back-end development', '3 mesi');
    let corso3 = new Corsi('FS07', 'full-stack development', '4 mesi');

    $('#corso1').html(corso1.corsoCompleto());
    $('#corso2').html(corso2.corsoCompleto());
    $('#corso3').html(corso3.corsoCompleto());

});









































































































































// class Corsi{
//     nome;
//     argomento;
//     durata;
//     materia;
//     constructor(_nome, _argomento,_durata,_materia){
//         this.nome = _nome;
//         this.argomento = _argomento;
//         this.durata= _durata;
//         this.materia = _materia;
//     }
//     corsoCompleto(){
//         return `Corso ${this.nome} su ${this.argomento} della durata di ${this.durata}`;
//     }
// }

// let mail = localStorage.getItem('utente');
// $('#benvenuto').html('<h2 class = "text-center fw-bold mt-5  text-white "> Bevenuto ' + mail +'!' + '</h2>');

// // logout
// $('#logout').on('click',function(){
//     localStorage.clear();
//     location.href = 'login1.html';
// });

// let materie = ['Front-end', 'Back-end', 'Full-stack'];

// for(i = 0; i < materie.length; i++){
//     $('#combo1').append(`<option value = "${i}">${materie[i]}</option>`);
//     $('#combo2').append(`<option value = "${i}">${materie[i]}</option>`);
//     $('#combo3').append(`<option value = "${i}">${materie[i]}</option>`);
// }

// // $('#avanti').on('#click', function(){
// //     $('#mostraCorso').val('');
// //     let titoloCorso = $('#titoloCorso').val('');
// //     let durataCorso = $('#durataCorso').val('');
