(function() {
    "use strict"; 

    var url_base = "http://webapialumnowsa.azurewebsites.net/api/";

    function getAll() {

        var opc = {
            type: "GET",
            url: url_base + "Alumnos"

        };

        return WinJS.xhr(opc);

    }


    function getByCurso(curso) {
       
        var opc = {
            type: "GET",
            url: url_base + "Alumnos?curso="+curso

        };

        return WinJS.xhr(opc);

    }

    function add(alumno) {
        var opc = {
            type: "POST",
            url: url_base + "Alumnos",
            data: JSON.stringify(alumno),
            headers: {"Content-Type":"application/json"}

        };

        return WinJS.xhr(opc);


    }

    WinJS.Namespace.define("Servicios", {
        Get: getAll,
        GetPorCurso: getByCurso,
        Add: add
        }
    );

})();