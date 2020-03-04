const axios = require('axios');
const Totalvoice = require('totalvoice-node');
const client = new Totalvoice('acessToken');
const servers = [
    {
        name:'Servidor 1',
        url:'http://localhost:3001',
        developer:{
            name:'Joao victor',
            telefone:'telefone'
        },
    },
    {
        name:'Servidor 2',
        url:'http://localhost:3002',
        developer:{
            name:'Joao victor',
            telefone:'telefone'
        },
    }
]   
setInterval(async()=> {
    console.log('iniciando monitorando dos servidores')
    for(server of servers){
        await axios({
            url:server.url,
            method:'get'
        }).then((response)=>{
            console.log(`${server.name} está no ar !`)
        }).catch((err)=>{
            const telefone = server.developer.telefone;
            const message = ` ${server.developer.name}, o  servidor ${server.name} está fora do ar, por favor verificar o mais rapido possivel!!`
            const options = {
                velocidade:2,
                tipo_voz:'br-Vitoria'
            }
            client.tts.enviar(telefone, message, options).then(()=>{
                console.log(`O desenvolvedor ${server.developer.name} já foi avisado !`)
            }).catch(err => console.log(err))
        })
    }
    console.log('finalzando monitorando dos servidores !')
},5000)
