$(document).ready(() => {
    $('#text').on('keyup', (event) =>{
      let prev = $(event.currentTarget).val();
      $('.preview').html(prev);
    });
  
    $('#font').on('change', (event) =>{
      $('.preview').css('font-family',$(event.currentTarget).val())
    });
  
    $('#weight').on('change', (event) =>{
      $('.preview').css('font-weight',$(event.currentTarget).val())
    });
     $('#size').on('keyup', (event) =>{
        let fontSize = $(event.currentTarget).val() + 'px';
        $('.preview').css('font-size',fontSize);
      });
  })