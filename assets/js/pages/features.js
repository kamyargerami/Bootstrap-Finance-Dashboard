//////////////////////////////////////////////////
/////       For Loading Datatables    ////////////
//////////////////////////////////////////////////

// this part loads the datatable and it handles the key-focus event that calls when you go to the line.
// key-focus event is on key-table.min.js file
// when you go on a cell it opens select2 and inputs if you have
// if you have not any input, it changes the simple text to a input

var table = $('.dataTable-table').DataTable({
    responsive: true,
    keys: true,
}).on('key-focus', function () {
    $('.focus > select').select2('open');
    $('.focus > input').focus();

    if ($('.focus > select').length == 0 && $('.focus > input').length == 0) {
        $('.focus').html('<input class="editable" type="text" value="' + $('.focus').text() + '">');
        $('.editable').focus();
    }
});

// this part is a event listener for input that we made in previous function
// it listen on keypress on that input and it set input value on that cell if you press Enter and it moves to right cell
// it also return back data to simple text if you dont press enter and left the input box

$('.dataTable-table').on('keypress', '.editable', function (event) {
    if (event.keyCode == 13) {
        let value = $(this).val();
        $('.focus').html(value);
        table.cell($('.focus')).data(value)
        table.keys.move('right');
    }
}).on('blur', '.editable', function () {
    let cell = $(this).parent('td');
    let value = $(this).val();
    $(cell).html(value);
    table.cell(cell).data(value)
});

//////////////////////////////////////////////////
/////       For Loading select 2    //////////////
//////////////////////////////////////////////////

// this part make select2 work and it has two property

// insertTag function calls when it dont find exactly match
// if it does'nt find any result it shows the not found message
// after that it set two variable for adding the item later in close_select2 function
// close_select2 function calls when you click on add button and you can do something with variables we set previously


// matcher function calls on every search and it shows data when it find any match

// found text creates at matcher function and it removes on insertTag function
// not found text creates at insertTag function and it removes on matcher
// also both of them removes when you close select2

var select_options = {
    width: '100%',
    placeholder: 'Select or Add',
    tags: true,
    insertTag: function (data, tag) {
        if (data.length == 0) {
            $('.select2-found-text').remove();

            if ($('.select2-not-found-text').length == 0) {
                $('.select2-results').append('<div class="bg-white p-1 mb-1 select2-not-found-text"><hr class="mt-0 mb-1">' +
                    '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
                    '<span>No Results Found</span>' +
                    '<button class="btn btn-sm btn-primary float-end mb-2" onclick="close_select2()">Add?</a>' +
                    '</div></div>');
            }
        }

        select2_element = this.$element;
        select2_new_data_tag = tag.text;

        data.push(tag);
    },
    matcher: function (params, data) {
        let result = $.fn.select2.defaults.defaults.matcher(params, data);

        if (params.term != null && result != null && $('.select2-found-text').length == 0) {
            $('.select2-not-found-text').remove();

            $('.select2-results').append('<div class="bg-white p-1 mb-1 select2-found-text"><hr class="mt-0 mb-1">' +
                '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
                '<div class="float-end">' +
                '<p class="font-12 mb-0">message 1: this is a nice person</p>' +
                '<p class="font-12 mb-0">message 2: this is a nice person</p>' +
                '</div></div>');
        }

        return result;
    },
    escapeMarkup: function (markup) {
        return markup;
    },
};

function close_select2() {
    let newOption = new Option(select2_new_data_tag, select2_new_data_tag, false, true);
    select2_element.append(newOption).trigger('change');
    select2_element.select2('close');
}

// when you open up select2 on keytables it prevent you to going throw table using arrow keys
// so we disable the keytable when we open the select2 and we enable it when we close the select2
// actually if our select2 is in datatables it moves to the right after close select2
// select2 keep focusing after we go to the next cell, so we reinitialize that for fix that bug

$('.select2-input').select2(select_options).on('select2:open', function () {
    table.cell($(this).parent('td')).focus();
    table.keys.disable();
}).on('select2:closing', function () {
    $('.select2-found-text').remove();
    $('.select2-not-found-text').remove();

    if ($(this).parent('.focus').length) {
        table.keys.move('right');
    }

    table.keys.enable();
    $(".select2-input").select2("destroy").select2(select_options);
});

//////////////////////////////////////////////////
/////             Date picker         ////////////
//////////////////////////////////////////////////

$('.datepicker').datepicker();
