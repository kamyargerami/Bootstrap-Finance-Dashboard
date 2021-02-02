//////////////////////////////////////////////////
/////       For Loading Datatables    ////////////
//////////////////////////////////////////////////

var table = $('.dataTable-table').DataTable({
    responsive: true,
    keys: true,
}).on('key-focus', function () {
    $('.focus > select').select2('open');
    $('.focus > input').focus();
});


//////////////////////////////////////////////////
/////       For Loading select 2    //////////////
//////////////////////////////////////////////////

$('.select2-input').select2({
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
}).on('select2:open', function () {
    table.keys.disable();
}).on('select2:closing', function () {
    $('.select2-found-text').remove();
    $('.select2-not-found-text').remove();
    table.keys.enable();
});

function close_select2() {
    let newOption = new Option(select2_new_data_tag, select2_new_data_tag, false, true);
    select2_element.append(newOption).trigger('change');
    select2_element.select2('close');
}

//////////////////////////////////////////////////
/////             Date picker         ////////////
//////////////////////////////////////////////////

$('.datepicker').datepicker();
