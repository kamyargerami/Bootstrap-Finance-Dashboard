function toggle_sidenav() {
    if ($('#sidenav').css('left') == '-250px') {
        $('#sidenav').css('left', '0');
        $('#content').css('margin-left', '250px');
    } else {
        $('#sidenav').css('left', '-250px');
        $('#content').css('margin-left', '0');
    }
}


$('.dropdown-btn').click(function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});

var ctx = document.getElementById('myChart').getContext('2d');
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
