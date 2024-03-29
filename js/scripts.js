
const { createApp } = Vue

createApp({
data() {
    return {
        currentContact: 0,
        writingMex: '',
        searchContact: '',
        writing: false,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    viewMex: false,
                    status: 'received'
                    }
                ],
                },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    viewMex: false,
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    viewMex: false,
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    viewMex: false,
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    viewMex: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    viewMex: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
            {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    viewMex: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    viewMex: false,
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    viewMex: false,
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    viewMex: false,
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    viewMex: false,
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    viewMex: false,
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    viewMex: false,
                    status: 'received'
                    }
            ],
            }
        ],
    }
},

methods: {
    addMex(){
        const date = new Date()

        setTimeout(() => {
            this.writing = true
        }, 1500)
        
        if(this.writingMex != ''){
            this.contacts[this.currentContact].messages.push({
                date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds}` ,
                message: this.writingMex, 
                viewMex: false,
                status: 'sent'
            })
        
            this.writingMex = ''
        
            setTimeout(() => {
                let reply = 'ok!'
                this.contacts[this.currentContact].messages.push({
                    date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`,
                    message: reply, 
                    viewMex: false,
                    status: 'received'
                })
                this.writing = false
            }, 3000);
        }
    },

    deletedMessages(index){
        this.contacts[this.currentContact].messages.splice(index, 1)
    },
    
    splitDate(message){
        console.log(message)
        let splitDate = message.date
        const splitted = splitDate.split(' ')
        splitDate = splitted[1] + ' ' + splitted[0];

        let splitHour = splitDate.split(':')
        const removeSec = splitHour[0] + ':' + splitHour[1]

        return removeSec 
    },

    getAvatarId(avatar){
        id = avatar.split('')
        id.shift()
        return id.join() - 1
    },

    getLastInteraction(messages){
        all_received = []
        messages.forEach(mex => {
            if(mex.status == 'received'){
                all_received.push(mex)
            }
        });

        last_interaction = all_received[all_received.length - 1]
        return last_interaction = this.splitDate(last_interaction)
    }

},

computed: {
    inputSearchContacts() {
        return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
    }
},

}).mount('#app')
