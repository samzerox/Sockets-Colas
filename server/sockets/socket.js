const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguiente()
        console.log(siguiente);

        client.emit('siguienteTicket', siguiente);

        callback(siguiente);

    });

    //emitir un evento llamado estadoActual

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket()
    });



});