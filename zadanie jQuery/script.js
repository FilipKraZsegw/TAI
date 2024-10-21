$(document).ready(function(){
  //zmiana nazwy html
  $("h1").text("Zadanie z jQuery");
  //pokaż usuń zdjęcie
  $(toggleImageBtn).click(function(){
    $(image).toggle();
  });
  //zawijaj tekst
  $(slideTextBtn).click(function(){
    $(textSection).slideToggle();
  });
  //dodaj paragraf
  $(addParaBtn).click(function(){
    $(content).append('<p class="highlight">Oto nowy paragraf <p>');
  });
  //usuń paragraf
  $(removeParaBtn).click(function(){
    $('#content p:last').remove();
  });
  //kliknij mnie
  $('#colorBtn').click(function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $('body').css('background-color',randomColor);
  });
  //pokaż date
  $('#showDateBtn').click(function(){
    const now = new Date();
    const formattedDate = now.toLocaleString('pl-PL');
    $('#date').text('Oto aktualna data i godzina: ' + formattedDate);
  });
});