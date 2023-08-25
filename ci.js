const { createVLESSServer } = require('./index.js');

// 定义端口和 UUID
const port = 3001;
const uuid = 'ce565ea7-e5f8-45cd-8566-7e6edc105b0e';

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
