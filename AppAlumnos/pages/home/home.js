(function () {
    "use strict";

    var lista = new WinJS.Binding.List([]);
    WinJS.Namespace.define("Datos", { Alumnos: lista });

    function update(data) {
        Datos.Alumnos.length = 0;

        for (var i = 0; i < data.length; i++) {
            Datos.Alumnos.push(data[i]);

        }

    }


    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("btnBus").
                addEventListener("click", function () {
                var txt = document.getElementById("txtBusqueda").value;

                Servicios.GetPorCurso(txt).done(function (res) {
                    update(JSON.parse(res.response));
                });


                });
            document.getElementById("btnLim").
                addEventListener("click", function () {
                document.getElementById("txtBusqueda").value = "";
              Servicios.Get().done(function (res) {
                   update(JSON.parse(res.response));
               });


                });

            Servicios.Get().done(function (res) {
                update(JSON.parse(res.response));
            });
        }
    });
})();
