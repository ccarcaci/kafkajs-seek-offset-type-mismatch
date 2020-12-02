import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [ 'kafka:9092' ]
})

const consumer = kafka.consumer({ groupId: 'test-group' });

(async () => {
  await consumer.connect()
  await consumer.seek({ topic: 'my-topic', partition: 0, offset: 42 })
})()
