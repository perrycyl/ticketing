# ticketing

## Kubernetes Create Secret

imperative command:
kubectl create secret generic jwt-secret --from-literal=YOUR_KEY_NAME=YOUR_PASSWORD

## Kubernetes Port Forwarding

Creates a port forwarding in kubernetes so nats-test can access nats service while port forward command is actively running. Only good for development. If you're looking to do this for a production, should be an ingress.

Command:
the client: kubectl port-forward <pod name> 4222:4222
the monitor: kubectl port-forwad <pod name> 8222:8222

## NATS-Stream testing

To run NATS-Stream testing, open terminals to setup the publisher and listeners. 'npm run publisher' and 'npm run listener' .
In terminal when they are running a quick 'rs' command will restart them and you can see the publisher send default data to the listener. The listener(s) subscribed will get each published the data from NATS queue group "randomly".

http://localhost:8222/streaming to access our streaming monitor.
Way to access more details:
http://localhost:8222/streaming/channelsz?subs=1
