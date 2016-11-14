"use strict";
/// <reference path="../../typings/index.d.ts" />
const express = require('express');
const path = require('path');
class ServerApp {
    constructor(port) {
        this._app = express();
        this._port = port;
        this._app.get('/', this._renderOk);
        this._app.get('/angular', this._renderPage);
        this._app.use('/node_modules', express.static(path.resolve(__dirname, '../../node_modules')));
        this._app.use('/www', express.static(path.resolve(__dirname, '../../client')));
        this._app.use('/app2', express.static(path.resolve(__dirname, '../../client/app/js')));
    }
    _renderOk(req, res) {
        res.json({
            "message": "allOK"
        });
    }
    _renderPage(req, res) {
        console.log("angular route requested...");
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    }
    startServer() {
        this._app.listen(this._port, () => {
            console.log("Server is listening at port " + this._port);
        });
    }
}
exports.ServerApp = ServerApp;

//# sourceMappingURL=server_app.js.map
