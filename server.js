const http = require ('http');
let times = 1

http.createServer((req, res) => {
    res.writeHead(200, { 
        'Content-Type': 'text/event-stream; charset=UTF-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });

    setInterval(() => {
        res.write("event: message\n");
        res.write("data: " + `我是${times}，` + "\n\n");
        times++;
    }, 5000);
}).listen(3003, () => {
    console.log('SSE Server is running on http://localhost:3003');
})
