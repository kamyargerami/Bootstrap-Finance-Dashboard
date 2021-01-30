//////////////////////////////////////////////////
/////       For Loading chart.js    //////////////
//////////////////////////////////////////////////

var ctx = document.getElementById('chart-canvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Stock A",
                lineTension: 0.1,
                fill: 0,
                borderColor: "rgba(255,151,7,0.95)",
                backgroundColor: "rgba(255,151,7,0.95)",
                data: [80, 78, 70, 81, 92, 94, 95, 91, 83, 82, 75, 73],
            },
            {
                label: "Stock B",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(188,193,243,0.75)",
                data: [22, 24, 25, 20, 27, 23, 29, 19, 20, 22, 23, 26],
            },
            {
                label: "Stock C",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgb(0,26,255)",
                data: [10, 11, 15, 10, 12, 18, 13, 14, 18, 14, 9, 12],
            }

        ]
    }
});


//////////////////////////////////////////////////
/////       For Loading select 2    //////////////
//////////////////////////////////////////////////

$('.select2-input').select2({
    width: '100%',
    placeholder: 'Select or Add',
    tags: true,
    insertTag: function (data, tag) {
        tag.text = '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
            '<span>No Results Found</span>' +
            '<button class="btn btn-sm btn-primary float-end mb-2">Add?</a>';
        data.push(tag);
    },
    matcher: function (params, data) {
        let result = $.fn.select2.defaults.defaults.matcher(params, data);

        if (result != null && params.term != null) {
            if (result.text.toLowerCase() == params.term.toLowerCase()) {
                if ($('.select2-found-text').length == 0) {
                    $('.select2-results').append('<div class="bg-white p-1 mb-1 select2-found-text"><hr class="mt-0">' +
                        '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
                        '<div class="float-end">' +
                        '<p class="font-12 mb-0">message 1: this is a nice person</p>' +
                        '<p class="font-12 mb-0">message 2: this is a nice person</p>' +
                        '</div></div>');
                }
            } else {
                $('.select2-found-text').remove();
            }
        }


        return result;
    },
    escapeMarkup: function (markup) {
        return markup;
    },
});

//////////////////////////////////////////////////
/////       For Loading Datatables    ////////////
//////////////////////////////////////////////////

$('.dataTable-table').DataTable();
