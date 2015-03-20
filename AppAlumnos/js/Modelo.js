(function() {

    var alumno = function(nombre, curso, nota, foto) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
        this.foto = foto || "";

    };

    WinJS.Namespace.define("Modelo", {
        Alumno: alumno

    });

})();