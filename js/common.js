// console.log('I am in common.js');
// console.log($);



var submitForm = function (ev) {

    // console.log('in submitForm');
    
    ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action');

    // console.log(form);
    // console.log(data);
    // console.log(url);

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });


    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        }else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
        });

};

$('#order-form').on('submit', submitForm);






// var submitForm = function (ev) {
//     ev.preventDefault();
//     // console.log(ev);

//     var form = $(ev.target);
        
//     var request = ajaxForm(form);

//     request.done(function(msg) {
//         var mes = msg.mes,
//             status = msg.status;
//         if (status === 'OK') {
//             form.append('<p class="success">' + mes + '</p>');
//         } else{
//             form.append('<p class="error">' + mes + '</p>');
//         }
//     });

//     request.fail(function(jqXHR, textStatus) {
//         alert("Request failed: " + textStatus);
//     });
// }

// var ajaxForm = function (form) {

//     var url = form.attr('action'),
//         data = form.serialize();

//     return $.ajax({
//         type: 'POST',
//         url: url,
//         data: data,
//         dataType: 'JSON'
//     });

// }

// $('#order-form').on('submit', submitForm);