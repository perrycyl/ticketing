import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';
console.clear()

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close',() => {
        console.log('NATS connection closed!');
        process.exit();
    })

    // options are chained on.
    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable()
        .setDurableName('accounting-service');

    const subscription = stan.subscribe(
        'ticket:created',
        'orders-service-queue-group',
        options
        );

    subscription.on('message', (msg: Message) => {
        // console.log('Message received', msg.getSequence(), msg.getData());
        const data = msg.getData();

        if (typeof data == 'string'){
            console.log(`Received event #${msg.getSequence()}, with data: ${data}`)
        }

        msg.ack();
    });
})

process.on('SIGINT', () => stan.close()); // Mac specific
process.on('SIGTERM', () => stan.close()); // Mac specific