function toggle_sidenav() {
    if ($('#sidenav').css('left') == '-250px') {
        $('#sidenav').css('left', '0');
    } else {
        $('#sidenav').css('left', '-250px');
    }
}
