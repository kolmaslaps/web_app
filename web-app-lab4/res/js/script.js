let counter = 0;

$(function () {

    let counterTag = $('#counter');

    $('.button').click(function () {

        let value = $(this).attr('data-value');

        counter += Number.parseInt(value);

        counterTag.text(counter);

    });

    $('#reset').click(function () {

        counter = 0;

        counterTag.text(counter);

    });

});
