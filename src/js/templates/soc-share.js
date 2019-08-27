window.socSharingWindow = function(url) {
    if (window.showModalDialog) {
        window.showModalDialog(url, '_blank', "dialogWidth:500px;dialogHeight:500px");
    } else {
        window.open(url, '_blank', 'height=500,width=500,toolbar=no,directories=no,status=no,linemenubar = no,scrollbars = no,resizable=no,modal=yes');
    }
};
