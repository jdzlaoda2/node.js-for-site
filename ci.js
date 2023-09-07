const { createVLESSServer } = require('./index.js');

// 定义端口和 UUID
const port = 3001;
const uuid = '10766aff-af09-46d9-9a82-57a26e24cc92';

// 调用函数启动 VL服务器
createVLESSServer(port, uuid);
