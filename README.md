##
--node.js-for-site 是一个基于 Node.js 的 vless 实现包。它在各种 Node.js 环境中都能运行，包括但不限于：Windows、Linux、MacOS、Android、iOS、树莓派等。同时，它也适用于各种 PaaS 平台，如：replit、heroku 等。


## 特性

- 在 PaaS 平台上更难被检测和封锁
- 使用简单，支持自定义端口和 UUID
- 支持通过 Dockerfile 部署
- 可在 fly.io、replit、codesandbox 等平台上部署
- 可以在 plesk 服务器上部署 使用 <https://heliohost.org/>

## 安装

您可以通过 npm 全局安装 @6881558/node.js-for-site：

```bash
npm install -g @6881558/node.js-for-site
```

如果您不想全局安装，也可以在项目目录下执行以下命令进行安装：

```bash
npm install @6881558/node.js-for-site
```

## 使用

在安装完成后，您可以通过以下命令启动代理服务：

```bash
node.js-for-site
```

### 自定义端口和 UUID

@6881558/node.js-for-site 提供 `--port` 和 `--uuid` 选项，用于自定义代理服务的端口和 UUID。默认端口 `7860`，默认 UUID `"d342d11e-d424-4583-b36e-524ab1f0afa4"`。

```bash
node.js-for-site -p 7860 -u d342d11e-d424-4583-b36e-524ab1f0afa4
# 或者您可以使用以下命令
node.js-for-site --port 7860 --uuid d342d11e-d424-4583-b36e-524ab1f0afa4
```

### 查看帮助

您可以通过 `--help` 选项查看 NodeJS-Proxy 的使用帮助：

```bash
node.js-for-site --help
Options:
      --version  Show version number                                   [boolean]
  -p, --port     Specify the port number                         [default: 7860]
  -u, --uuid     Specify the uuid
                               [default: "d342d11e-d424-4583-b36e-524ab1f0afa4"]
      --help     Show help                                             [boolean]
```

### 使用 npx

如果您没有全局安装 @6881558/node.js-for-site，可以使用 npx 来运行 @6881558/node.js-for-site：

```bash
npx nodejs-proxy
```

同样，您也可以使用 `--port` 和 `--uuid` 选项来自定义端口和 UUID：

```bash
npx node.js-for-site -p 7860 -u d342d11e-d424-4583-b36e-524ab1f0afa4
# 或者您可以使用以下命令
npx node.js-for-site --port 7860 --uuid d342d11e-d424-4583-b36e-524ab1f0afa4
```

您也可以使用 `npx @6881558/node.js-for-site` 来替代 `npx node.js-for-site`：

```bash
npx @6881558/node.js-for-site -p 7860 -u d342d11e-d424-4583-b36e-524ab1f0afa4
npx @6881558/node.js-for-site -p 7860
npx @6881558/node.js-for-site -u d342d11e-d424-4583-b36e-524ab1f0afa4
npx @6881558/node.js-for-site
```

查看帮助：

```bash
npx nodejs-proxy --help
Options:
      --version  Show version number                                   [boolean]
  -p, --port     Specify the port number                         [default: 7860]
  -u, --uuid     Specify the uuid
                               [default: "d342d11e-d424-4583-b36e-524ab1f0afa4"]
      --help     Show help                                             [boolean]
```

### Usage in Node.js

index.js

```js
// 引入 createVLESSServer 函数
const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
// 定义端口和 UUID
const port = 3001;
const uuid = "d342d11e-d424-4583-b36e-524ab1f0afa4";

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
```

package.json

```json
{
  "name": "node.js-for-site",
  "version": "1.0.0",
  "description": "An example of @6881558/node.js-for-site",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "6881558",
  "license": "MIT",
  "dependencies": {
    "@6881558/node.js-for-site": "latest"
  }
}
```

```bash
npm install
npm start # 或者您可以使用 node index.js
```

### 环境变量

| 环境变量 | 描述             | 默认值                               |
| -------- | ---------------- | ------------------------------------ |
| PORT     | 代理服务的端口号 | 7860                                 |
| UUID     | 代理服务的 UUID  | d342d11e-d424-4583-b36e-524ab1f0afa4 |

## Dockerfile 使用

```dockerfile
FROM node:latest
ENV PORT=7860
ENV UUID=d342d11e-d424-4583-b36e-524ab1f0afa4
# EXPOSE 7860
RUN npm i -g @6881558/node.js-for-site
CMD ["node.js-for-site"]
```

## 连接方法

例如使用 http：`vless://d342d11e-d424-4583-b36e-524ab1f0afa4@127.0.0.1:8787?encryption=none&security=none&fp=randomized&type=ws&path=%2F#default`
此 `vless` 地址的参数可解析如下：

- `d342d11e-d424-4583-b36e-524ab1f0afa4`：这是一个 UUID（Universally Unique Identifier）,在本场景中，通常作为用户标识使用。
- `127.0.0.1:8787`: 这是一个 IP 地址和端口号，这里指定了 `vless` 连接到的服务器地址（`127.0.0.1` 就是本地的环回地址，也就是说服务器就在本机）和端口号 (8787)。
- `encryption=none`：这意味着不使用任何加密方法。
- `security=none`：这表示不启用任何额外的安全特性。
- `fp=randomized`：这可能是指流量的伪装或混淆方法，`fp` 可能是 fingerprint（指纹）的缩写，`random` 表示采取随机化处理。
- `type=ws`：指定了传输协议类型，这里使用的是 WebSocket 协议 (`ws`)。
- `path=%2F`：URL 的路径，这里的 `%2F` 实际是 URL 编码，对应的字符为 `/`，所以路径为 `/` 。
- `#default`：这是你的 `vless` 配置的别名，用于方便辨识。

例如使用 https：`vless://d342d11e-d424-4583-b36e-524ab1f0afa4@link-to-your-replit-project.repl.co:443?encryption=none&security=tls&fp=random&type=ws&path=%2Fws#link-to-your-replit-project.repl.co`
此 `vless` 地址的参数可解析如下：

- `d342d11e-d424-4583-b36e-524ab1f0afa4`：这是一个 UUID（Universally Unique Identifier）,在本场景中，通常作为用户标识使用。
- `link-to-your-replit-project.repl.co:443`: 这是一个 IP 地址和端口号，这里指定了 `vless` 连接到的服务器地址（`link-to-your-replit-project.repl.co` 就是连接地址域名，也就是说服务器就在那里）和端口号 (443)。
- `encryption=none`：这意味着不使用任何加密方法。
- `security=tls`：这表示启用 tls 安全特性。
- `fp=random`：这可能是指流量的伪装或混淆方法，`fp` 可能是 fingerprint（指纹）的缩写，`random` 表示采取随机化处理。
- `type=ws`：指定了传输协议类型，这里使用的是 WebSocket 协议 (`ws`)。
- `path=%2Fws`：URL 的路径，这里的 `%2F` 实际是 URL 编码，对应的字符为 `/`，所以路径为 `/ws` 。
- `#link-to-your-replit-project.repl.co`：这是你的 `vless` 配置的别名，用于方便辨识。

请参考具体的 `vless` 文档以获取更加详细的信息。部分参数可能依赖于具体的 `vless` 客户端和服务器的实现，可能需要根据实际情况进行调整。
