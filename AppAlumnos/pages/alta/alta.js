// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function() {
    "use strict";
    var alumno;

    function unsnap() {
        var estado = Windows.UI.ViewManagement.ApplicationView.value;
        if (estado === Windows.UI.ViewManagement.ApplicationViewState.snapped)
            Windows.UI.ViewManagement.ApplicationView.tryUnsnap();

    }

    function picker() {
        unsnap();
       var selector = new Windows.Storage.Pickers.FileOpenPicker();
       selector.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
       selector.suggestedStartLocation =
                Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
       selector.fileTypeFilter.replaceAll([".png", ".jpg", ".gif"]);
        return selector.pickSingleFileAsync();
    }

    function subirImagen(img) {

        var subida = new RuntimeAzureStorage.AlmacenAzure();

        return subida.subirFicheroAsync(alumno.foto, alumno.foto.name);
    }

    function guardarAlumno(alu) {

        Servicios.Add(alu).done(function(res) {
            new Windows.UI.Popups.MessageDialog("Subida completada")
                .showAsync();
            alumno = undefined;
        });


    }

    WinJS.UI.Pages.define("/pages/alta/alta.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            document.getElementById("btnSelImg").addEventListener("click",
                function() {

                    picker().done(function(file) {

                        alumno = new Modelo.Alumno("", "", 0, file);
                        document.getElementById("imgAlu").src =
                            URL.createObjectURL(file);

                    });
                 });
            document.getElementById("btnAddAlumno").addEventListener("click",
                function() {
                    if (alumno==undefined) {

                        alumno = new Modelo.Alumno(
                            document.getElementById("txtNom").value,
                            document.getElementById("txtCur").value,
                            document.getElementById("txtNota").value);

                        guardarAlumno(alumno);
                    } else {
                        subirImagen(alumno.foto).done(function(res) {
                            alumno.nombre = document.getElementById("txtNom").value;
                            alumno.curso = document.getElementById("txtCur").value;
                            alumno.nota = document.getElementById("txtNota").value;
                            alumno.foto =res;
                            guardarAlumno(alumno);

                        });


                    }



                });

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
