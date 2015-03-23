(function() {

    function eventos() {

        document.getElementById("cmdAdd").addEventListener("click", function() {
            WinJS.Navigation.navigate("/pages/alta/alta.html",
                WinJS.Navigation.state);


        });

        document.getElementById("cmdBus").addEventListener("click", function() {

            var fly = document.getElementById("flyBuscar").winControl;
            fly.show(document.getElementById("appbar"), "top", "right");
        });

        

    }

    WinJS.Namespace.define("Eventos", { Registrar: eventos });
})();