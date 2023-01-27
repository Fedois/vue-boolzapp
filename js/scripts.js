
const { createApp } = Vue

createApp({
data() {
    return {
        currentContact: 0,
        writingMex: '',
        searchContact: '',
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
        ]
    }
},

methods: {
    addMex(){

        const hour = new Date()

        this.contacts[this.currentContact].messages.push({
            dateNow: hour.getHours() + ':' + hour.getMinutes(),
            message: this.writingMex, 
            viewMex: false,
            status: 'sent'
        }),
        
        this.writingMex = ''
        
        setTimeout(() => {
            
            let reply = 'ok!'
            this.contacts[this.currentContact].messages.push({
                dateNow: hour.getHours() + ':' + hour.getMinutes(),
                message: reply, 
                viewMex: false,
                status: 'received'
            })
            
        }, 1000);
    },

    deletedMessages(index){
        this.contacts[this.currentContact].messages.splice(index, 1)
    },
    
    splitDate(message){
        if(message.date != null){
            let splitDate = message.date
            const splitted = splitDate.split(' ')
            splitDate = splitted[1];

            let splitHour = splitDate.split(':')
            const removeSec = splitHour[0] + ':' + splitHour[1]

            return removeSec
        } 
    },
},

computed: {
    inputSearchContacts(){
        if(this.searchContact.trim().length > 0){
            return this.contacts.filter((contact) => 
                contact.name.toLowerCase().includes(this.searchContact.trim().toLowerCase())
            )
        }
        
        return this.contacts
    }
}
}).mount('#app')
