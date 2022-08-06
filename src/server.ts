import {app} from './app'

const PORT = process.env.PORT || 3000

//Boa prática é jogar o app.listen pra dentro de uma variable, para que conseguimos fazer o
//O.S fechar o processo com o SIGINT.
app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}.`)
})

/*process.on('SIGINT', ()=>{
    server.close()
    console.log('App foi finalizado.')

})*/