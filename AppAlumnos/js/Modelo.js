(function() {

    var alumno = function(nombre, curso, nota, foto) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
        this.foto = foto || "http://blog.xamarin.com/wp-content/uploads/2014/04/monkey.png";

    };

    WinJS.Namespace.define("Modelo", {
        Alumno: alumno

    });

})();