# Node.js Simple Message Service!

In order to use the service, please ensure you have Curl and Node.js installed on your system. Then run server.js using the command: node server.js.

Then open another terminal and run the required curl command to either store or retrieve messages.

When submitting a message to store, please use the following syntax: curl http://<insert url here>:<insert port here>/messages/ -d "store me!" for example: curl http://127.0.0.1:1337/messages/ -d "store me!"

You will recieve in id number which you will later use to retrieve that message, for example: {"id":1}.

When requesting a message to retrieve, please use the following syntax: curl http://<insert url here>:<insert port here>/messages/<insert id number here> for example: curl http://127.0.0.1:1337/messages/1

The retreived message will be displayed, for example: store me!

If the server runs on an ip or port allready in use, please change it in the server.js file, close the server and restart the server.

To exit the server, use CTRL + C in the terminal you used to start the server.js file with Node.js.
