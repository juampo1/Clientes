class Cliente {

    constructor(nombre, apellido, dni, balance) {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = dni;
        this.Balance = balance;
    }

    nombreCompleto() {
        return this.Nombre + ' ' + this.Apellido;
    }


}

var form = document.getElementById('addForm');
var listado = document.getElementById('clientes');
var clientes = localStorage.getItem('clientes') ? JSON.parse(localStorage.getItem('clientes')) : [];

clientes.forEach(cliente => {
    var li = document.createElement('li');
    nombre = cliente.Nombre + ' ' + cliente.Apellido;
    li.innerHTML = nombre;
    listado.appendChild(li);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    var nombre = document.getElementById('Nombre').value;
    var apellido = document.getElementById('Apellido').value;
    var dni = document.getElementById('DNI').value;
    var balance = document.getElementById('Balance').value;

    var cliente = new Cliente(nombre, apellido, dni, balance);
    var nombreCompleto = cliente.nombreCompleto();

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(nombreCompleto));
    listado.appendChild(li);


    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
})




