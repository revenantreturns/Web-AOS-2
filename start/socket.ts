import Ws from 'App/Services/Ws'
Ws.boot()

Ws.io.on('connection', (socket) => {
    socket.on('send_login', () => {
      socket.send('send_login', {client: '', type: 1});
    })
  })

