"use strict";
(self["webpackChunkrogue4720"] = self["webpackChunkrogue4720"] || []).push([["main"],{

/***/ 5426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body { \r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n#canvas-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n}\r\n\r\ngame-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 25rem 0 0;\r\n}\r\n\r\n.game-pane {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid white;\r\n    padding: .5rem;\r\n    margin: .5rem .5rem;\r\n}\r\n\r\n.game-log-pane {\r\n    margin-top: auto;\r\n}\r\n\r\n.pane-title {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.player-pane-stats {\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\nscene-panel {\r\n    flex: 25rem 0 0;\r\n    max-width: 25rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\nscene-panel-header {\r\n    display: block;\r\n    text-align: center;\r\n    border-bottom: 1px solid white;\r\n    padding: 0.25rem;\r\n}\r\n\r\nscene-panel-list {\r\n    display: block;\r\n    margin: 0.5rem;\r\n    overflow: auto;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nscene-panel-list-node { \r\n    display: block;\r\n}\r\n\r\n.node-wrapper { \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: flex;\r\n}\r\n\r\n.expand-button { \r\n    width: 1rem;\r\n    user-select: none;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.debug-panel {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    padding: 3px;\r\n    color: rgb(0, 255, 0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,oCAAoC;IACpC,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;AACzB","sourcesContent":["html, body { \r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n#canvas-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n}\r\n\r\ngame-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 25rem 0 0;\r\n}\r\n\r\n.game-pane {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid white;\r\n    padding: .5rem;\r\n    margin: .5rem .5rem;\r\n}\r\n\r\n.game-log-pane {\r\n    margin-top: auto;\r\n}\r\n\r\n.pane-title {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.player-pane-stats {\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\nscene-panel {\r\n    flex: 25rem 0 0;\r\n    max-width: 25rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\nscene-panel-header {\r\n    display: block;\r\n    text-align: center;\r\n    border-bottom: 1px solid white;\r\n    padding: 0.25rem;\r\n}\r\n\r\nscene-panel-list {\r\n    display: block;\r\n    margin: 0.5rem;\r\n    overflow: auto;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nscene-panel-list-node { \r\n    display: block;\r\n}\r\n\r\n.node-wrapper { \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: flex;\r\n}\r\n\r\n.expand-button { \r\n    width: 1rem;\r\n    user-select: none;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.debug-panel {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    padding: 3px;\r\n    color: rgb(0, 255, 0);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 5426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 6198:
/*!**************************************!*\
  !*** ./src/game/CameraController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CameraController)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _KeyListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyListener */ 5574);


const KEY_MAP = {
    movement: {
        Numpad8: 'forward',
        Numpad2: 'backward',
        Numpad4: 'left',
        Numpad6: 'right',
        Numpad9: 'up',
        Numpad7: 'down',
        h: 'left',
        j: 'backward',
        k: 'forward',
        l: 'right',
        ']': 'up',
        '[': 'down',
    },
    look: {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
    },
};
class CameraController {
    camera;
    moveSpeed;
    lookSensitivity;
    activeInputs;
    static defaultInputs = {
        movement: {
            up: false,
            down: false,
            left: false,
            right: false,
            forward: false,
            backward: false,
        },
        look: {
            up: false,
            down: false,
            left: false,
            right: false,
        },
    };
    constructor(camera, 
    // Units per second
    moveSpeed = 1.0, 
    // Degrees per second
    lookSensitivity = 1.0, activeInputs = CameraController.defaultInputs) {
        this.camera = camera;
        this.moveSpeed = moveSpeed;
        this.lookSensitivity = lookSensitivity;
        this.activeInputs = activeInputs;
    }
    update(deltaTime) {
        // console.log(`Camera Update: ${this.direction.toString()}`);
        const moveVector = this.getMoveVector();
        const moveDistance = this.moveSpeed * (deltaTime / 1000);
        this.move(twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.mulScalar(moveVector, moveDistance));
        const rotations = this.getRotations();
        this.rotate(rotations);
    }
    bindKeys(keyListener) {
        // Camera movement with numpad
        Object.entries(KEY_MAP).forEach(([inputType, inputs]) => {
            Object.entries(inputs).forEach(([key, value]) => {
                keyListener.addListener(key, () => {
                    this.activeInputs[inputType][value] = true;
                });
                keyListener.addListener(key, () => {
                    this.activeInputs[inputType][value] = false;
                }, _KeyListener__WEBPACK_IMPORTED_MODULE_1__.KeyPressType.UP);
            });
        });
    }
    move(translation) {
        const { position } = this.camera.transform;
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(position, translation, position);
    }
    moveTo(position) {
        this.camera.transform.position = position;
    }
    getMoveVector() {
        const { transform } = this.camera;
        const moveVector = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(0, 0, 0);
        const { movement } = this.activeInputs;
        if (movement.up) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(moveVector, transform.getUpVector(), moveVector);
        }
        if (movement.down) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.subtract(moveVector, transform.getUpVector(), moveVector);
        }
        if (movement.left) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.subtract(moveVector, transform.getRightVector(), moveVector);
        }
        if (movement.right) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(moveVector, transform.getRightVector(), moveVector);
        }
        if (movement.forward) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(moveVector, transform.getForwardVector(), moveVector);
        }
        if (movement.backward) {
            twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.subtract(moveVector, transform.getForwardVector(), moveVector);
        }
        return moveVector;
    }
    rotate(rotations) {
        const { rotation } = this.camera.transform;
        rotation[0] += rotations[0];
        // Clamp X
        if (rotation[0] > 90) {
            rotation[0] = 90;
        }
        else if (rotation[0] < -90) {
            rotation[0] = -90;
        }
        rotation[1] += rotations[1];
    }
    getRotations() {
        let xRotation = 0.0;
        let yRotation = 0.0;
        const { look } = this.activeInputs;
        if (look.up) {
            xRotation += this.lookSensitivity;
        }
        if (look.down) {
            xRotation -= this.lookSensitivity;
        }
        if (look.left) {
            yRotation += this.lookSensitivity;
        }
        if (look.right) {
            yRotation -= this.lookSensitivity;
        }
        return [xRotation, yRotation];
    }
}


/***/ }),

/***/ 5608:
/*!*****************************!*\
  !*** ./src/game/Dungeon.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dungeon)
/* harmony export */ });
const NUM_ITEMS = 9;
const MAP_EMPTY = '.';
const MAP_WALL = '|';
const MAP_PLAYER = '@';
const MAP_WEAPON = 'w';
const MAP_ITEM = 'i';
const MAP_ENEMY = 'e';
class Dungeon {
    static generate(dungeonWidth, dungeonHeight, minRoomSize) {
        const main = new Rect(0, 0, dungeonHeight - 1, dungeonWidth - 1);
        // Split the dungeon into zones
        const zones = Dungeon.split(main, minRoomSize + 2);
        // Create rooms inside each of the zones
        const rooms = zones.map((zone) => Dungeon.createRoom(zone, minRoomSize));
        // Create hallways to connect rooms together
        const { halls, connections } = Dungeon.createHalls(zones, rooms);
        // Randomly select a starting room then calculate the difficulties of every other room
        const startRoom = Dungeon.randInt(0, rooms.length);
        const difficulties = rooms.map((_) => 999);
        difficulties[startRoom] = 1;
        for (let loop = 0; loop < rooms.length; loop++) {
            for (let conn = 0; conn < connections.length; conn++) {
                difficulties[connections[conn].b] = Math.min(difficulties[connections[conn].b], difficulties[connections[conn].a] + 1);
            }
        }
        // Generate the items, weapons, and enemies
        const mapPoints = Dungeon.fillRooms(rooms, difficulties, startRoom);
        return Dungeon.createMap(new Pair(dungeonHeight, dungeonWidth), rooms, halls, mapPoints);
    }
    // Split a zone into two smaller zones, then recurse
    static split(zone, minZoneSize) {
        const smallX = zone.x2 - zone.x1 < 2 * minZoneSize;
        const smallY = zone.y2 - zone.y1 < 2 * minZoneSize;
        // If a zone is too small, don't split it
        if (smallX && smallY)
            return [zone];
        // If a zone is too small in one direction, split it in the other direction
        if (smallX)
            return Dungeon.splitY(zone, minZoneSize);
        if (smallY)
            return Dungeon.splitX(zone, minZoneSize);
        // If a zone is big enough, randomly split it in the X or Y direction
        if (Dungeon.randInt(0, 2) == 0)
            return Dungeon.splitY(zone, minZoneSize);
        return Dungeon.splitX(zone, minZoneSize);
    }
    // Split a zone in the X direction
    static splitX(zone, minZoneSize) {
        // Choose a random split point
        const xSplit = Dungeon.randInt(zone.x1 + minZoneSize, zone.x2 - minZoneSize + 1);
        // Create sub-zones
        const zoneA = new Rect(zone.x1, zone.y1, xSplit, zone.y2);
        const zoneB = new Rect(xSplit, zone.y1, zone.x2, zone.y2);
        // Recurse and combine lists
        return [...Dungeon.split(zoneA, minZoneSize), ...Dungeon.split(zoneB, minZoneSize)];
    }
    // Split a zone in the Y direction
    static splitY(zone, minZoneSize) {
        // Choose a random split point
        const ySplit = Dungeon.randInt(zone.y1 + minZoneSize, zone.y2 - minZoneSize + 1);
        // Create sub-zones
        const zoneA = new Rect(zone.x1, zone.y1, zone.x2, ySplit);
        const zoneB = new Rect(zone.x1, ySplit, zone.x2, zone.y2);
        // Recurse and combine lists
        return [...Dungeon.split(zoneA, minZoneSize), ...Dungeon.split(zoneB, minZoneSize)];
    }
    // Create a room inside of a zone
    static createRoom(zone, minRoomSize) {
        let x1 = 0;
        let x2 = 0;
        let y1 = 0;
        let y2 = 0;
        // Randomly generate two valid points inside of the zone
        // The points must have x1 < x2, y1 < y2, and have a side length of at least minRoomSize
        while (x2 - x1 < minRoomSize || y2 - y1 < minRoomSize) {
            x1 = Dungeon.randInt(zone.x1 + 1, zone.x2);
            x2 = Dungeon.randInt(zone.x1 + 1, zone.x2);
            y1 = Dungeon.randInt(zone.y1 + 1, zone.y2);
            y2 = Dungeon.randInt(zone.y1 + 1, zone.y2);
            if (x1 > x2)
                x2 = x1;
            if (y1 > y2)
                y2 = y1;
        }
        return new Rect(x1, y1, x2, y2);
    }
    static createHalls(zones, rooms) {
        const halls = [];
        const connections = [];
        const hasRight = [...Array(zones.length)].map((q) => false);
        const hasDown = [...Array(zones.length)].map((q) => false);
        // loop through each pair of zones
        for (let from = 0; from < zones.length; from++) {
            for (let to = 0; to < zones.length; to++) {
                // If from room and to room share a vertical wall
                if (zones[from].x2 == zones[to].x1) {
                    // check for invalid sizes
                    if (zones[to].y1 >= rooms[from].y2)
                        continue;
                    if (rooms[to].y1 >= zones[from].y2)
                        continue;
                    // randomly choose access points
                    const y1 = Dungeon.randInt(rooms[from].y1 + 1, rooms[from].y2);
                    const y2 = Dungeon.randInt(rooms[to].y1 + 1, rooms[to].y2);
                    if (y1 == y2) {
                        // draw straight hallway
                        halls.push(new Rect(rooms[from].x2, y1, rooms[to].x1, y1));
                    }
                    else {
                        // draw zig zag hallway
                        halls.push(new Rect(rooms[from].x2, y1, zones[from].x2, y1));
                        halls.push(new Rect(zones[from].x2, Math.min(y1, y2), zones[from].x2, Math.max(y1, y2)));
                        halls.push(new Rect(zones[from].x2, y2, rooms[to].x1, y2));
                    }
                    // mark hallway
                    hasRight[from] = true;
                    connections.push(new Pair(from, to));
                    connections.push(new Pair(to, from));
                }
                // If from room and to room share a horizontal wall
                else if (zones[from].y2 == zones[to].y1) {
                    // check for invalid sizes
                    if (zones[to].x1 >= rooms[from].x2)
                        continue;
                    if (rooms[to].x1 >= zones[from].x2)
                        continue;
                    // randomly choose access points
                    const x1 = Dungeon.randInt(rooms[from].x1 + 1, rooms[from].x2);
                    const x2 = Dungeon.randInt(rooms[to].x1 + 1, rooms[to].x2);
                    if (x1 == x2) {
                        // draw straight hallway
                        halls.push(new Rect(x1, rooms[from].y2, x1, rooms[to].y1));
                    }
                    else {
                        // draw zig zag hallway
                        halls.push(new Rect(x1, rooms[from].y2, x1, zones[from].y2));
                        halls.push(new Rect(Math.min(x1, x2), zones[from].y2, Math.max(x1, x2), zones[from].y2));
                        halls.push(new Rect(x2, zones[to].y1, x2, rooms[to].y1));
                    }
                    // mark hallway
                    hasDown[from] = true;
                    connections.push(new Pair(from, to));
                    connections.push(new Pair(to, from));
                }
            }
        }
        return { halls, connections };
    }
    // Fill rooms with weapons, items, and enemies
    static fillRooms(rooms, difficulties, startRoom) {
        let maxDifficulty = 0;
        for (let q = 0; q < difficulties.length; q++) {
            if (difficulties[q] > maxDifficulty)
                maxDifficulty = difficulties[q];
        }
        const coords = [];
        let itemsLeft = NUM_ITEMS - 1;
        const weapons = [];
        const items = [];
        // Check if a coordinate is free to use
        function check(x, y) {
            for (let q = 0; q < coords.length; q++) {
                if (coords[q].x == x && coords[q].y == y) {
                    return false;
                }
            }
            return true;
        }
        // Generate a random coordinate in a room
        function randomCoord(room) {
            while (true) {
                const x = Dungeon.randInt(room.x1 + 1, room.x2);
                const y = Dungeon.randInt(room.y1 + 1, room.y2);
                if (check(x, y))
                    return new Point(x, y);
            }
        }
        // Generate spawn room
        const spawn = randomCoord(rooms[startRoom]);
        coords.push(spawn);
        // Add weapon to spawn room
        const c = randomCoord(rooms[startRoom]);
        coords.push(c);
        weapons.push(c);
        // Generate enemies
        const enemies = [];
        for (let room = 0; room < rooms.length; room++) {
            for (let enemy = 0; enemy < difficulties[room]; enemy++) {
                const c = randomCoord(rooms[room]);
                coords.push(c);
                enemies.push(c);
            }
        }
        // Generate items
        loop: while (itemsLeft > 0) {
            for (let difficulty = 2; difficulty <= maxDifficulty; difficulty++) {
                for (let room = 0; room < rooms.length; room++) {
                    if (difficulties[room] != difficulty)
                        continue;
                    if (itemsLeft <= 0)
                        break loop;
                    // Generate weapon or item
                    if (Dungeon.randInt(0, difficulty) == 0) {
                        itemsLeft--;
                        const c = randomCoord(rooms[room]);
                        coords.push(c);
                        (Dungeon.randInt(0, 2) ? weapons : items).push(c);
                    }
                }
            }
        }
        return {
            weapons, items, enemies, spawn,
        };
    }
    static createMap(dungeonSize, rooms, halls, mapPoints) {
        const map = [...Array(dungeonSize.a + 1)].map((q) => [...Array(dungeonSize.b + 1)].map((w) => MAP_WALL));
        // Fill rooms with empty space
        for (let room = 0; room < rooms.length; room++) {
            for (let x = rooms[room].x1 + 1; x < rooms[room].x2; x++) {
                for (let y = rooms[room].y1 + 1; y < rooms[room].y2; y++) {
                    map[x][y] = MAP_EMPTY;
                }
            }
        }
        // Fill halls with empty space
        for (let hall = 0; hall < halls.length; hall++) {
            if (halls[hall].x1 == halls[hall].x2) {
                for (let y = halls[hall].y1; y <= halls[hall].y2; y++) {
                    map[halls[hall].x1][y] = MAP_EMPTY;
                }
            }
            else {
                for (let x = halls[hall].x1; x <= halls[hall].x2; x++) {
                    map[x][halls[hall].y1] = MAP_EMPTY;
                }
            }
        }
        // Draw player position
        map[mapPoints.spawn.x][mapPoints.spawn.y] = MAP_PLAYER;
        // Draw weapons
        for (let weapon = 0; weapon < mapPoints.weapons.length; weapon++) {
            map[mapPoints.weapons[weapon].x][mapPoints.weapons[weapon].y] = MAP_WEAPON;
        }
        // Draw items
        for (let item = 0; item < mapPoints.items.length; item++) {
            map[mapPoints.items[item].x][mapPoints.items[item].y] = MAP_ITEM;
        }
        // Draw enemies
        for (let emeny = 0; emeny < mapPoints.enemies.length; emeny++) {
            map[mapPoints.enemies[emeny].x][mapPoints.enemies[emeny].y] = MAP_ENEMY;
        }
        // Stitch map together
        return map.map((row) => row.join('')).join('\n');
    }
    static randInt(min, max) {
        if (min == max)
            return min;
        if (min > max)
            return this.randInt(max, min);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
class Rect {
    x1;
    y1;
    x2;
    y2;
    area;
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.area = (this.x2 - this.x1) * (this.y2 - this.y1);
    }
}
class Pair {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ 1611:
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameState": () => (/* binding */ GameState),
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _KeyListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyListener */ 5574);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ 1227);
/* harmony import */ var _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/Enemy */ 5296);
/* harmony import */ var _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/Weapon */ 2354);
/* harmony import */ var _entities_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/Item */ 3282);
/* harmony import */ var _renderer_Renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/Renderer */ 9870);
/* harmony import */ var _renderer_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/PerspectiveCamera */ 3305);
/* harmony import */ var _CameraController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CameraController */ 6198);
/* harmony import */ var _ui_game_GamePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/game/GamePanel */ 5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_entities_Item__WEBPACK_IMPORTED_MODULE_5__, _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__, _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__, _ui_game_GamePanel__WEBPACK_IMPORTED_MODULE_9__, _Grid__WEBPACK_IMPORTED_MODULE_2__]);
([_entities_Item__WEBPACK_IMPORTED_MODULE_5__, _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__, _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__, _ui_game_GamePanel__WEBPACK_IMPORTED_MODULE_9__, _Grid__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









// eslint-disable-next-line import/no-cycle

var GameState;
(function (GameState) {
    GameState[GameState["WALKING"] = 0] = "WALKING";
    GameState[GameState["INVENTORY"] = 1] = "INVENTORY";
})(GameState || (GameState = {}));
var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Forward"] = 0] = "Forward";
    MoveDirection[MoveDirection["Backward"] = 1] = "Backward";
    MoveDirection[MoveDirection["Left"] = 2] = "Left";
    MoveDirection[MoveDirection["Right"] = 3] = "Right";
})(MoveDirection || (MoveDirection = {}));
class Game {
    grid;
    renderer;
    message;
    gamePanel;
    player;
    state;
    camera;
    cameraController;
    keyListener;
    doResetCamera;
    constructor(gl) {
        this.camera = new _renderer_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.cameraController = new _CameraController__WEBPACK_IMPORTED_MODULE_8__["default"](this.camera, 3);
        this.renderer = new _renderer_Renderer__WEBPACK_IMPORTED_MODULE_6__["default"](gl, undefined, this.camera);
        this.doResetCamera = true;
        // Attach the camera controller update to the renderer
        this.renderer.addUpdateCallback((deltaTime) => this.cameraController.update(deltaTime));
        // Update camera aspect ratio
        this.renderer.addUpdateCallback(() => {
            this.camera.aspect = this.renderer.gl.canvas.width / this.renderer.gl.canvas.height;
        });
        this.grid = new _Grid__WEBPACK_IMPORTED_MODULE_2__["default"](this.renderer.scene);
        this.player = this.grid.getPlayer();
        this.cameraController.moveTo(this.player.cameraTarget.getWorldPosition());
        this.camera.transform.rotation = [-45, 180, 0];
        this.state = GameState.WALKING;
        this.keyListener = new _KeyListener__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.keyListener.addListeners([
            // Move player with 'w', 'a', 's', 'd'
            ['w', () => this.movePlayer(MoveDirection.Forward)],
            ['a', () => this.movePlayer(MoveDirection.Left)],
            ['s', () => this.movePlayer(MoveDirection.Backward)],
            ['d', () => this.movePlayer(MoveDirection.Right)],
            // Open/close inventory with 'i'
            ['i', () => this.toggleInventory()],
            // Attack Enemy
            ['q', () => this.attack()],
            // Select inventory weapon/item with '1'-'9'
            [
                ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
                    'Digit6', 'Digit7', 'Digit8', 'Digit9'],
                ({ key }) => this.selectFromInventory(Number(key) - 1),
            ],
            ['\\', () => this.grid.generateMap()],
            [',', () => { this.doResetCamera = !this.doResetCamera; }],
        ]);
        this.cameraController.bindKeys(this.keyListener);
        this.keyListener.startListening();
        this.gamePanel = new _ui_game_GamePanel__WEBPACK_IMPORTED_MODULE_9__["default"](this);
        this.message = '';
        this.addMessage('Game Start');
        this.printGame();
        // Begin rendering
        requestAnimationFrame((time) => {
            this.renderer.render(time);
        });
    }
    stopGame() {
        this.keyListener.stopListening();
        this.renderer.stopRendering();
    }
    // update(handler?: Function): void {
    //   if (handler) handler();
    // }
    //
    movePlayer(dir) {
        if (this.state !== GameState.WALKING)
            return;
        let deltaX = 0;
        let deltaY = 0;
        switch (dir) {
            case MoveDirection.Forward:
                this.player.modelNode.localTransform.rotation = [0, 0, 0];
                deltaY = 1;
                break;
            case MoveDirection.Backward:
                this.player.modelNode.localTransform.rotation = [0, 180, 0];
                deltaY = -1;
                break;
            case MoveDirection.Left:
                this.player.modelNode.localTransform.rotation = [0, 90, 0];
                deltaX = 1;
                break;
            case MoveDirection.Right:
                this.player.modelNode.localTransform.rotation = [0, -90, 0];
                deltaX = -1;
                break;
            default:
                break;
        }
        const { x: currentX, y: currentY } = this.grid.getPositionOf(this.player);
        const newPosition = {
            x: currentX + deltaX,
            y: currentY + deltaY,
        };
        const { entity, collision } = this.grid.query(newPosition);
        // Check for entities
        if (entity) {
            switch (entity.constructor) {
                case _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"]: {
                    const enemy = entity;
                    this.addMessage(`You bump into ${Game.nounPhrase(enemy)} ${enemy.stringRepresentation()}`);
                    break;
                }
                case _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"]: {
                    const weapon = entity;
                    this.player.pickUpWeapon(weapon);
                    this.grid.removeEntity(weapon);
                    this.addMessage(`You pick up ${Game.nounPhrase(weapon)}`);
                    break;
                }
                case _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"]: {
                    // Pick up item
                    const item = entity;
                    this.player.pickUpItem(item);
                    this.grid.removeEntity(item);
                    this.addMessage(`You pick up ${Game.nounPhrase(item)}`);
                    break;
                }
                default:
                    break;
            }
        }
        // Check for collision
        if (!collision) {
            this.grid.moveEntity(this.player, newPosition);
        }
        if (this.doResetCamera) {
            const newCameraPosition = this.player.cameraTarget.getWorldPosition();
            this.cameraController.moveTo(newCameraPosition);
            this.camera.transform.rotation = [-45, 180, 0];
        }
        this.postTurn();
        this.printGame();
    }
    moveCamera(translation) {
        const { position } = this.renderer.camera.transform;
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(position, translation, position);
        return position;
    }
    attack() {
        if (this.state !== GameState.WALKING)
            return;
        // Search for an enemy withing the nearest four tiles
        const range = [0, -1, -1, 0, 0, 1, 1, 0];
        let enemy;
        const { x: playerX, y: playerY } = this.grid.getPositionOf(this.player);
        for (let i = 0; i < range.length; i += 2) {
            const checkPosition = {
                x: playerX + range[i],
                y: playerY + range[i + 1],
            };
            const entity = this.grid.getEntityAt(checkPosition);
            if (entity && entity instanceof _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                enemy = entity;
                break;
            }
        }
        if (!enemy) {
            this.addMessage('No Enemies in Range');
            this.printGame();
            return;
        }
        if (!this.player.equippedWeapon) {
            this.addMessage('No Weapon Equipped');
            this.printGame();
            return;
        }
        enemy.combatTimer = 7;
        // Player attack
        let rand = 1 + Math.floor((Math.random() * 5));
        const SP = this.player.skill + rand + this.player.equippedWeapon.skillBonus;
        if (SP > enemy.skill) {
            // Attack hit
            enemy.health -= this.player.equippedWeapon.damage;
            this.addMessage(`${enemy.name} took ${this.player.equippedWeapon.damage} damage. ${enemy.name} has ${Math.max(enemy.health, 0)} health remaining`);
            if (enemy.health <= 0) {
                // Enemy defeated
                this.player.skill += 1;
                this.grid.removeEntity(enemy);
                this.addMessage(`${enemy.name} has been defeated`);
                if (this.grid.getEntities().enemies.size === 0) {
                    this.addMessage('All Enemies Defeated');
                    this.addMessage('You Win');
                    this.stopGame();
                }
                this.printGame();
                return;
            }
        }
        else {
            // Attack miss
            this.addMessage('Attack Missed. No damage dealt');
        }
        // Enemy attack
        rand = 1 + Math.floor((Math.random() * 5));
        const enemySP = enemy.skill + rand;
        if (enemySP > SP) {
            // Attack hit
            this.player.health -= enemy.damage;
            this.addMessage(`${enemy.name} deals ${enemy.damage} damage`);
            if (this.player.health <= 0) {
                this.addMessage('You Died.\nGame Over.');
                this.printGame();
                this.stopGame();
                return;
            }
        }
        else {
            // Arrack miss
            this.addMessage(`${enemy.name} misses. No damage dealt`);
        }
        this.postTurn();
        this.printGame();
    }
    toggleInventory() {
        if (this.state === GameState.INVENTORY) {
            // Close inventory
            this.state = GameState.WALKING;
        }
        else {
            // Open inventory
            this.addMessage('You look at your inventory');
            this.state = GameState.INVENTORY;
        }
        this.printGame();
    }
    selectFromInventory(index) {
        if (this.state !== GameState.INVENTORY)
            return;
        // if (index >= this.player.inventory.weapons.length) return;
        if (index >= this.player.inventory.inventory.length)
            return;
        // const weapon = this.player.inventory.weapons[index];
        const inventoryObj = this.player.inventory.inventory[index];
        if (inventoryObj instanceof _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            const weapon = inventoryObj;
            if (this.player.equippedWeapon === weapon) {
                this.message += `"You already have this ${weapon.name} equipped"\n`;
                this.printGame();
                return;
            }
            this.player.equippedWeapon = weapon;
            this.addMessage(`You equip ${Game.nounPhrase(weapon)}`);
        }
        else if (inventoryObj instanceof _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            const item = inventoryObj;
            this.player.health += item.effectHP;
            this.player.skill += item.effectSP;
            this.player.useUpItem(item);
            this.message += `Use Item: ${item.name} : ${item.description}`;
        }
        this.postTurn();
        this.printGame();
    }
    addMessage(message) {
        this.message += `"${message}"\n`;
    }
    postTurn() {
        this.grid.getEntities().enemies.forEach((enemy) => {
            enemy.combatTimer -= 1;
            if (enemy.combatTimer > 0)
                return;
            const { x: currentX, y: currentY } = this.grid.getPositionOf(enemy);
            const range = [0, -1, -1, 0, 0, 1, 1, 0];
            const randPos = Math.floor(Math.random() * 4) * 2;
            const newPosition = {
                x: currentX + range[randPos],
                y: currentY + range[randPos + 1],
            };
            const { entity, collision } = this.grid.query(newPosition);
            if (entity || collision)
                return;
            this.grid.moveEntity(enemy, newPosition);
        });
    }
    printGame() {
        // Update the UI
        this.gamePanel.update();
        /* eslint-disable no-console */
        // Grid
        // console.log(this.grid.stringRepresentation());
        // Player stats
        console.log(this.player.stringRepresentation());
        if (this.player.equippedWeapon) {
            // Equpped weapon
            console.log('Equipped weapon:', this.player.equippedWeapon.stringRepresentation());
        }
        if (this.message) {
            // Message
            console.log(this.message);
            this.message = '';
        }
        if (this.state === GameState.INVENTORY) {
            // Inventory
            console.log(this.player.inventory.stringRepresentation());
        }
        /* eslint-enable no-console */
    }
    static nounPhrase(object) {
        if (Game.isVowel(object.name.charAt(0))) {
            return `an ${object.name}`;
        }
        return `a ${object.name}`;
    }
    static isVowel(character) {
        return 'aeiou'.split('').includes(character.charAt(0).toLowerCase());
    }
}

});

/***/ }),

/***/ 1227:
/*!**************************!*\
  !*** ./src/game/Grid.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiles/FloorTile */ 7790);
/* harmony import */ var _tiles_WallTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiles/WallTile */ 9457);
/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/Player */ 8501);
/* harmony import */ var _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/Enemy */ 5296);
/* harmony import */ var _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/Weapon */ 2354);
/* harmony import */ var _entities_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/Item */ 3282);
/* harmony import */ var _renderer_SceneNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/SceneNode */ 9011);
/* harmony import */ var _renderer_Transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/Transform */ 6444);
/* harmony import */ var _Dungeon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dungeon */ 5608);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_entities_Item__WEBPACK_IMPORTED_MODULE_5__, _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__, _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__, _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__, _entities_Player__WEBPACK_IMPORTED_MODULE_2__, _tiles_WallTile__WEBPACK_IMPORTED_MODULE_1__]);
([_entities_Item__WEBPACK_IMPORTED_MODULE_5__, _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__, _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__, _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__, _entities_Player__WEBPACK_IMPORTED_MODULE_2__, _tiles_WallTile__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









class Grid {
    tiles;
    player;
    entities;
    entityLookup;
    positionLookup;
    sceneNode;
    scene;
    constructor(scene) {
        this.scene = scene;
        this.entities = {
            enemies: new Set(),
            weapons: new Set(),
            items: new Set(),
        };
        this.entityLookup = [];
        this.positionLookup = new Map();
        this.generateMap();
    }
    // Should only be called once after the map has been set
    buildDungeon() {
        // TODO: use model extents, normalize models to be the same size, and use
        // that for the tileSize
        const tileSize = 1.0;
        // TODO: remove after having movable camera
        const zFactor = 1;
        this.tiles.forEach((row, y) => {
            row.forEach((tile, x) => {
                this.sceneNode.addChild(tile.modelNode);
                tile.setTransform(new _renderer_Transform__WEBPACK_IMPORTED_MODULE_7__["default"]([x * tileSize, 0, y * tileSize * zFactor]));
            });
        });
    }
    getTiles() { return this.tiles; }
    getPlayer() { return this.player; }
    getEntities() { return this.entities; }
    getTileAt({ x, y }) { return this.tiles[y][x]; }
    getEntityAt({ x, y }) { return this.entityLookup[y][x]; }
    getPositionOf(entity) { return this.positionLookup.get(entity); }
    generateMap() {
        if (this.sceneNode) {
            this.entities = {
                enemies: new Set(),
                weapons: new Set(),
                items: new Set(),
            };
            this.entityLookup = [];
            this.positionLookup = new Map();
            this.sceneNode.removeSelf();
        }
        this.sceneNode = new _renderer_SceneNode__WEBPACK_IMPORTED_MODULE_6__["default"]('Grid');
        this.scene.addNode(this.sceneNode);
        this.loadGridFromString(_Dungeon__WEBPACK_IMPORTED_MODULE_8__["default"].generate(35, 35, 7));
        this.buildDungeon();
    }
    query(position) {
        const tile = this.getTileAt(position);
        const entity = this.getEntityAt(position);
        const collision = (!tile || tile.isCollidable) || (entity && entity.isCollidable);
        return { tile, entity, collision };
    }
    // If tiles is null, then the entities aren't added a children to their
    // ModelNodes. It's up to the caller to remedy that.
    addEntity(entity, { x, y }) {
        if (entity instanceof _entities_Player__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            this.player = entity;
        }
        // Add entity to corresponding entity set
        this.forSubtypeOfEntity(entity, (entitySubtype, set) => {
            set.add(entitySubtype);
        });
        // Record entity's position on grid
        this.entityLookup[y][x] = entity;
        this.positionLookup.set(entity, { x, y });
        if (this.tiles)
            this.tiles[y][x].modelNode.addChild(entity.modelNode);
    }
    removeEntity(entity) {
        // Remove entity from corresponding entity set
        this.forSubtypeOfEntity(entity, (entitySubtype, set) => {
            set.delete(entitySubtype);
        });
        // Remove entity's position on grid
        const { x, y } = this.positionLookup.get(entity);
        this.entityLookup[y][x] = undefined;
        this.positionLookup.delete(entity);
        entity.modelNode.removeSelf();
        return entity;
    }
    moveEntity(entity, { x: newX, y: newY }) {
        // Change entity's position on grid
        const { x: oldX, y: oldY } = this.positionLookup.get(entity);
        this.entityLookup[oldY][oldX] = undefined;
        this.entityLookup[newY][newX] = entity;
        this.positionLookup.set(entity, { x: newX, y: newY });
        this.tiles[newY][newX].modelNode.addChild(entity.modelNode);
    }
    stringRepresentation() {
        // Floors and walls
        const textArray = this.tiles.map((tileRow) => tileRow.map((tile) => tile.character));
        // Non-player entities
        Object.values(this.entities).forEach((set) => {
            set.forEach((entity) => {
                const { x, y } = this.getPositionOf(entity);
                textArray[y][x] = entity.character;
            });
        });
        // Player
        const { x, y } = this.getPositionOf(this.player);
        textArray[y][x] = _entities_Player__WEBPACK_IMPORTED_MODULE_2__["default"].character;
        let text = '';
        textArray.forEach((row) => {
            row.forEach((character) => {
                text += character;
            });
            text += '\n';
        });
        return text;
    }
    loadGridFromString(string) {
        this.tiles = string.split('\n').map((stringRow, y) => stringRow.split('').map((character, x) => {
            this.entityLookup.push([]);
            switch (character) {
                case _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"].character:
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
                case _tiles_WallTile__WEBPACK_IMPORTED_MODULE_1__["default"].character:
                    return new _tiles_WallTile__WEBPACK_IMPORTED_MODULE_1__["default"]();
                case _entities_Player__WEBPACK_IMPORTED_MODULE_2__["default"].character:
                    this.addEntity(new _entities_Player__WEBPACK_IMPORTED_MODULE_2__["default"](), { x, y });
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
                case _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"].character:
                    this.addEntity(new _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"](), { x, y });
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
                case _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"].character:
                    this.addEntity(new _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"](), { x, y });
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
                case _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"].character:
                    this.addEntity(new _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"](), { x, y });
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
                default:
                    return new _tiles_FloorTile__WEBPACK_IMPORTED_MODULE_0__["default"]();
            }
        }));
        this.positionLookup.forEach(({ x, y }, entity) => {
            this.tiles[y][x].modelNode.addChild(entity.modelNode);
        });
    }
    forSubtypeOfEntity(entity, callback) {
        switch (entity.constructor) {
            case _entities_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"]:
                callback(entity, this.entities.enemies);
                break;
            case _entities_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"]:
                callback(entity, this.entities.weapons);
                break;
            case _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"]:
                callback(entity, this.entities.items);
                break;
            default:
                break;
        }
    }
}

});

/***/ }),

/***/ 327:
/*!*******************************!*\
  !*** ./src/game/Inventory.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inventory)
/* harmony export */ });
class Inventory {
    weapons;
    inventory;
    constructor() {
        this.weapons = [];
        this.inventory = [];
    }
    stringRepresentation() {
        // if (this.weapons.length > 0) {
        //   return `weapons: ${
        //     this.weapons
        //       .map((weapon, index) => `\n  ${index + 1}. ${weapon.stringRepresentation()}`)
        //       .join()
        //   }`;
        // }
        if (this.inventory.length > 0) {
            return `Inventory: ${this.inventory
                .map((item, index) => `\n  ${index + 1}. ${item.stringRepresentation()}`)
                .join()}`;
        }
        return 'weapons: (no weapons)';
    }
}


/***/ }),

/***/ 5574:
/*!*********************************!*\
  !*** ./src/game/KeyListener.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyPressType": () => (/* binding */ KeyPressType),
/* harmony export */   "default": () => (/* binding */ KeyListener)
/* harmony export */ });
var KeyPressType;
(function (KeyPressType) {
    KeyPressType[KeyPressType["DOWN"] = 0] = "DOWN";
    KeyPressType[KeyPressType["UP"] = 1] = "UP";
})(KeyPressType || (KeyPressType = {}));
class KeyListener {
    keyDownCallbacks = new Map();
    keyUpCallbacks = new Map();
    keyDownHandler;
    keyUpHandler;
    constructor() {
        this.keyDownHandler = (keyEvent) => {
            // If callback exists for the given key or code
            [keyEvent.key, keyEvent.code].find((key) => {
                if (this.keyDownCallbacks.has(key)) {
                    // Invoke callback
                    (this.keyDownCallbacks.get(key))(keyEvent);
                    return true;
                }
                return false;
            });
        };
        this.keyUpHandler = (keyEvent) => {
            // If callback exists for the given key or code
            [keyEvent.key, keyEvent.code].find((key) => {
                if (this.keyUpCallbacks.has(key)) {
                    // Invoke callback
                    (this.keyUpCallbacks.get(key))(keyEvent);
                    return true;
                }
                return false;
            });
        };
    }
    addListener(keys, callback, pressType = KeyPressType.DOWN) {
        const callbacks = pressType === KeyPressType.DOWN
            ? this.keyDownCallbacks : this.keyUpCallbacks;
        // Add callback to the given key(s)
        [keys].flat().forEach((key) => {
            callbacks.set(key, callback);
        });
    }
    addListeners(listeners) {
        // Add callback for each given key-callback pair
        listeners.forEach(([keys, callback, pressType]) => {
            this.addListener(keys, callback, pressType);
        });
    }
    startListening() {
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
    }
    stopListening() {
        window.removeEventListener('keydown', this.keyDownHandler);
        window.removeEventListener('keyup', this.keyUpHandler);
    }
}


/***/ }),

/***/ 5296:
/*!************************************!*\
  !*** ./src/game/entities/Enemy.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Enemy)
/* harmony export */ });
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ 4038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_0__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const models = {
    maggot: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/Maggot/model.json'),
    slimeMold: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/SlimeMold/model.json'),
    goblin: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/Goblin/model.json'),
    ork: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/Ork/model.json'),
    vampire: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/Vampire/model.json'),
};
/* eslint quote-props: ["error", "consistent"] */
const enemies = new Map([
    ['Maggot', {
            health: 4, skill: 0, damage: 4, model: models.maggot,
        }],
    ['Slime Mold', {
            health: 7, skill: 1, damage: 3, model: models.slimeMold,
        }],
    ['Goblin', {
            health: 9, skill: 4, damage: 5, model: models.goblin,
        }],
    ['Ork', {
            health: 11, skill: 2, damage: 7, model: models.ork,
        }],
    ['Vampire', {
            health: 20, skill: 9, damage: 10, model: models.vampire,
        }],
]);
class Enemy extends _Entity__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static character = 'e';
    static isCollidable = true;
    // name: string;
    health;
    skill;
    damage;
    combatTimer;
    constructor(name = Enemy.randomEnemyName()) {
        super(enemies.get(name).model, Enemy.character, Enemy.isCollidable);
        this.name = name;
        this.health = enemies.get(name)?.health ?? 1;
        this.skill = enemies.get(name)?.skill ?? 0;
        this.damage = enemies.get(name)?.damage ?? 0;
        this.combatTimer = 0;
    }
    stringRepresentation() {
        return `(HP: ${this.health}, SP: ${this.skill}, damage: ${this.damage})`;
    }
    static randomEnemyName() {
        const names = Array.from(enemies.keys());
        return names[Math.floor(Math.random() * names.length)];
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 4038:
/*!*************************************!*\
  !*** ./src/game/entities/Entity.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Entity)
/* harmony export */ });
class Entity {
    character;
    name;
    isCollidable;
    modelNode;
    stringRepresentation() {
        return this.character;
    }
    constructor(model, character, isCollidable) {
        this.character = character.charAt(0);
        this.isCollidable = isCollidable;
        this.modelNode = model.createModelNode();
    }
}


/***/ }),

/***/ 3282:
/*!***********************************!*\
  !*** ./src/game/entities/Item.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ 4038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_0__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// const rationModel = await Model.load('/assets/Ration/model.json');
const models = {
    ration: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/ration/model.json'),
    gourmetMeal: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/gourmet_meal/model.json'),
    silverRing: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/silver_ring/model.json'),
    foolsCap: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/fools_cap/model.json'),
};
/* eslint quote-props: ["error", "consistent"] */
const items = new Map([
    ['Rations', {
            effectHP: 5, effectSP: 0, description: 'Give 5 HP', model: models.ration,
        }],
    ['Gourmet Meal', {
            effectHP: 10, effectSP: 0, description: 'Give 10 HP', model: models.gourmetMeal,
        }],
    ['Silver Ring', {
            effectHP: 0, effectSP: 5, description: 'Give 5 SP', model: models.silverRing,
        }],
    ['Fool\'s Cap', {
            effectHP: 10, effectSP: -10, description: 'Give 10 HP, Remove 10 SP', model: models.foolsCap,
        }],
]);
class Item extends _Entity__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static character = 'i';
    static isCollidable = false;
    // name: string;
    effectHP;
    effectSP;
    description;
    constructor(name = Item.randomitemName()) {
        super(items.get(name).model, Item.character, Item.isCollidable);
        this.name = name;
        this.effectHP = items.get(name)?.effectHP ?? 0;
        this.effectSP = items.get(name)?.effectSP ?? 0;
        this.description = items.get(name)?.description ?? '';
    }
    stringRepresentation() {
        return `${this.name} (Effect: ${this.description})`;
    }
    static randomitemName() {
        const names = Array.from(items.keys());
        return names[Math.floor(Math.random() * names.length)];
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 8501:
/*!*************************************!*\
  !*** ./src/game/entities/Player.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ 4038);
/* harmony import */ var _Inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inventory */ 327);
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _renderer_SceneNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderer/SceneNode */ 9011);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Math */ 2835);
/* harmony import */ var _renderer_Transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderer/Transform */ 6444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_2__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const model = await _renderer_Model__WEBPACK_IMPORTED_MODULE_2__["default"].load('/assets/Player/model.json');
class Player extends _Entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static character = '@';
    static isCollidable = true;
    health;
    skill;
    inventory;
    equippedWeapon;
    cameraTarget;
    constructor() {
        const initCamDistance = 4;
        const initCamAngle = 45;
        const { xLen, yLen, zLen } = model.extents;
        super(model, Player.character, Player.isCollidable);
        this.health = 20;
        this.skill = 0;
        this.inventory = new _Inventory__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.equippedWeapon = null;
        let maxLen = xLen;
        if (maxLen < yLen)
            maxLen = yLen;
        if (maxLen < zLen)
            maxLen = zLen;
        this.modelNode.localTransform.scale = [1 / maxLen, 1 / maxLen, 1 / maxLen];
        this.cameraTarget = new _renderer_SceneNode__WEBPACK_IMPORTED_MODULE_3__["default"]('Player Camera Target', new _renderer_Transform__WEBPACK_IMPORTED_MODULE_5__["default"]([
            0,
            initCamDistance * Math.sin((0,_util_Math__WEBPACK_IMPORTED_MODULE_4__["default"])(initCamAngle)),
            -initCamDistance * Math.cos((0,_util_Math__WEBPACK_IMPORTED_MODULE_4__["default"])(initCamAngle)),
        ]));
        // Assuming Raymon is initially facing in the +z direction. Pray this never
        // changes.
        this.modelNode.addChild(this.cameraTarget);
    }
    pickUpWeapon(weapon) {
        // this.inventory.weapons.push(weapon);
        this.inventory.inventory.push(weapon);
        if (!this.equippedWeapon) {
            this.equippedWeapon = weapon;
        }
    }
    stringRepresentation() {
        let string = `HP: ${this.health}, SP: ${this.skill}`;
        if (this.equippedWeapon) {
            string += `(${this.equippedWeapon.skillBonus >= 0 ? '+' : ''}${this.equippedWeapon.skillBonus})`;
        }
        return string;
    }
    pickUpItem(item) {
        this.inventory.inventory.push(item);
    }
    useUpItem(item) {
        const index = this.inventory.inventory.indexOf(item);
        this.inventory.inventory.splice(index, 1);
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 2354:
/*!*************************************!*\
  !*** ./src/game/entities/Weapon.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ 4038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_0__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const models = {
    dagger: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/dagger/model.json'),
    castIronPan: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/cast_iron_pan/model.json'),
    warHammer: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/war_hammer/model.json'),
    hatchet: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/hatchet/model.json'),
    battleaxe: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/battleaxe/model.json'),
    sword: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/sword/model.json'),
    baton: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/baton/model.json'),
    battleStaff: await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load('/assets/battle_staff/model.json'),
};
/* eslint quote-props: ["error", "consistent"] */
const weapons = new Map([
    ['Dagger', { damage: 3, skillBonus: 0, model: models.dagger }],
    ['Cast Iron Pan', { damage: 7, skillBonus: 1, model: models.castIronPan }],
    ['War Hammer', { damage: 12, skillBonus: -1, model: models.warHammer }],
    ['Hatchet', { damage: 3, skillBonus: 4, model: models.hatchet }],
    ['Battleaxe', { damage: 10, skillBonus: 2, model: models.battleaxe }],
    ['Sword', { damage: 7, skillBonus: 3, model: models.sword }],
    ['Baton', { damage: 2, skillBonus: 7, model: models.baton }],
    ['Battle Staff', { damage: 6, skillBonus: 3, model: models.battleStaff }],
]);
class Weapon extends _Entity__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static character = 'w';
    static isCollidable = false;
    // name: string;
    damage;
    skillBonus;
    constructor(name = Weapon.randomWeaponName()) {
        super(weapons.get(name).model, Weapon.character, Weapon.isCollidable);
        this.name = name;
        this.damage = weapons.get(name)?.damage ?? 0;
        this.skillBonus = weapons.get(name)?.skillBonus ?? 0;
    }
    stringRepresentation() {
        return `${this.name} (damage: ${this.damage}, skill bonus: ${this.skillBonus})`;
    }
    static randomWeaponName() {
        const names = Array.from(weapons.keys());
        return names[Math.floor(Math.random() * names.length)];
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 7790:
/*!*************************************!*\
  !*** ./src/game/tiles/FloorTile.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloorTile)
/* harmony export */ });
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _renderer_Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer/Transform */ 6444);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ 5075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_0__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const modelUrl = '/assets/Floor/model.json';
const floorModel = await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load(modelUrl);
class FloorTile extends _Tile__WEBPACK_IMPORTED_MODULE_2__.Tile {
    static type = 'FloorTile';
    static character = '.';
    static isCollidable = false;
    constructor(transform = new _renderer_Transform__WEBPACK_IMPORTED_MODULE_1__["default"]()) {
        super(floorModel, FloorTile.character, FloorTile.isCollidable, transform);
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 5075:
/*!********************************!*\
  !*** ./src/game/tiles/Tile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _renderer_Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Transform */ 6444);

class Tile {
    static type = 'Tile';
    character;
    isCollidable;
    modelNode;
    constructor(model, character, isCollidable, transform = new _renderer_Transform__WEBPACK_IMPORTED_MODULE_0__["default"]()) {
        this.character = character.charAt(0);
        this.isCollidable = isCollidable;
        this.modelNode = model.createModelNode(transform);
    }
    setTransform(transform) {
        this.modelNode.localTransform = transform;
    }
}


/***/ }),

/***/ 9457:
/*!************************************!*\
  !*** ./src/game/tiles/WallTile.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WallTile)
/* harmony export */ });
/* harmony import */ var _renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer/Model */ 5911);
/* harmony import */ var _renderer_Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer/Transform */ 6444);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ 5075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_renderer_Model__WEBPACK_IMPORTED_MODULE_0__]);
_renderer_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const modelUrl = '/assets/Wall/model.json';
const wallModel = await _renderer_Model__WEBPACK_IMPORTED_MODULE_0__["default"].load(modelUrl);
class WallTile extends _Tile__WEBPACK_IMPORTED_MODULE_2__.Tile {
    static type = 'WallTile';
    static character = '|';
    static isCollidable = true;
    constructor(transform = new _renderer_Transform__WEBPACK_IMPORTED_MODULE_1__["default"]()) {
        super(wallModel, WallTile.character, WallTile.isCollidable, transform);
    }
}

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 1177:
/*!********************************!*\
  !*** ./src/renderer/Camera.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
class Camera {
    transform;
}


/***/ }),

/***/ 6110:
/*!*******************************!*\
  !*** ./src/renderer/Color.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);

class Color {
    r;
    g;
    b;
    /**
     * Creates an RGB color from color components represented by decimal numbers
     * between 0.0 and 1.0
     *
     * @param red Red color component between 0.0 and 1.0
     * @param green Green color component between 0.0 and 1.0
     * @param blue Blue color component between 0.0 and 1.0
     */
    constructor(red, green, blue) {
        if (red < 0.0 || red > 1.0
            || green < 0.0 || green > 1.0
            || blue < 0.0 || blue > 1.0) {
            throw new Error('Invalid Color component range (outside 0.0-1.0)');
        }
        this.r = red;
        this.g = green;
        this.b = blue;
    }
    /**
     * Converts a hex string to a color. Can be provided in either six or three-digit
     * formats. Ex. '#0099CC' or '#09C'
     *
     * Capitalization is ignored
     *
     * @param hex Hex string representing a color
     */
    static fromHex(hex) {
        if (hex.length !== 7 && hex.length !== 4) {
            throw new Error('Invalid hex string argument in Color creation');
        }
        let redString;
        let greenString;
        let blueString;
        if (hex.length === 7) {
            redString = hex.substring(1, 3);
            greenString = hex.substring(3, 5);
            blueString = hex.substring(5, 7);
        }
        else {
            redString = hex[1] + hex[1];
            greenString = hex[2] + hex[2];
            blueString = hex[3] + hex[3];
        }
        const red = parseInt(redString, 16) / 255.0;
        const green = parseInt(greenString, 16) / 255.0;
        const blue = parseInt(blueString, 16) / 255.0;
        return new Color(red, green, blue);
    }
    toVec3() {
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(this.r, this.g, this.b);
    }
}


/***/ }),

/***/ 4281:
/*!*********************************!*\
  !*** ./src/renderer/DebugUI.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugUI)
/* harmony export */ });
/* harmony import */ var _ui_FrameTimePanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/FrameTimePanel */ 5944);
/* harmony import */ var _ui_scene_panel_ScenePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/scene-panel/ScenePanel */ 1985);


class DebugUI {
    renderer;
    container;
    frameTimePanel;
    scenePanel;
    isVisible;
    constructor(renderer, container, isVisible = false) {
        this.renderer = renderer;
        this.container = container;
        this.isVisible = isVisible;
        if (this.isVisible) {
            this.show();
        }
        const toggleInputCallback = (ev) => {
            if (ev.key === '.') {
                this.toggleVisibility();
            }
        };
        window.addEventListener('keydown', toggleInputCallback);
        if (false) {}
    }
    show() {
        this.bindFrameTimePanel();
        this.bindScenePanel();
        this.isVisible = true;
    }
    hide() {
        this.unbindFrameTimePanel();
        this.unbindScenePanel();
        this.isVisible = false;
    }
    toggleVisibility() {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    bindFrameTimePanel() {
        this.frameTimePanel = new _ui_FrameTimePanel__WEBPACK_IMPORTED_MODULE_0__["default"](this.renderer);
        document.body.appendChild(this.frameTimePanel.element);
    }
    unbindFrameTimePanel() {
        if (this.frameTimePanel) {
            document.body.removeChild(this.frameTimePanel.element);
            this.frameTimePanel.cleanUp();
            this.frameTimePanel = null;
        }
    }
    bindScenePanel() {
        this.scenePanel = new _ui_scene_panel_ScenePanel__WEBPACK_IMPORTED_MODULE_1__["default"](this.renderer);
        this.container.appendChild(this.scenePanel);
    }
    unbindScenePanel() {
        if (this.scenePanel) {
            this.container.removeChild(this.scenePanel);
            this.scenePanel = null;
        }
    }
}


/***/ }),

/***/ 3467:
/*!******************************!*\
  !*** ./src/renderer/Mesh.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);

/**
 * A less-generalized Mesh representation. For simplicity we are sticking with
 * having 3 attributes (position, normal, and uv) alongside the indices.
 *
 * These attributes are meant to be passed into a shader with standard names
 * as shown.
 *
 * You may leave out normal, uv, or indices.
 *
 * The number of components for these members should always be:
 * /--------------\
 * | position | 3 |
 * | normal   | 3 |
 * | uv       | 2 |
 * | indices  | 3 |
 * \--------------/
 *
 * This is a class to generalize later on, as its invariants are stiff.
 */
class Mesh {
    static NUM_COMPONENTS_POSITION = 3;
    static NUM_COMPONENTS_NORMAL = 3;
    static NUM_COMPONENTS_UV = 2;
    static NUM_COMPONENTS_INDICES = 3;
    position;
    normal;
    uv;
    indices;
    bufferInfo;
    name;
    constructor(position, normal, uv, indices, name) {
        this.position = position;
        this.normal = normal;
        this.uv = uv;
        this.indices = indices;
        this.name = name;
    }
    createArrays() {
        return {
            position: {
                numComponents: Mesh.NUM_COMPONENTS_POSITION,
                data: this.position,
            },
            ...(this.normal && {
                normal: {
                    numComponents: Mesh.NUM_COMPONENTS_NORMAL,
                    data: this.normal,
                },
            }),
            ...(this.uv && {
                uv: {
                    numComponents: Mesh.NUM_COMPONENTS_UV,
                    data: this.uv,
                },
            }),
            ...(this.indices && {
                indices: {
                    numComponents: Mesh.NUM_COMPONENTS_INDICES,
                    data: this.indices,
                },
            }),
        };
    }
    getBufferInfo(gl) {
        if (!this.bufferInfo) {
            this.bufferInfo = (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.createBufferInfoFromArrays)(gl, this.createArrays());
        }
        return this.bufferInfo;
    }
}


/***/ }),

/***/ 4001:
/*!**********************************!*\
  !*** ./src/renderer/MeshNode.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeshNode)
/* harmony export */ });
/* harmony import */ var _SceneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneNode */ 9011);
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ 6444);


class MeshNode extends _SceneNode__WEBPACK_IMPORTED_MODULE_0__["default"] {
    mesh;
    material;
    static numMeshNodes = 0;
    constructor(transform = new _Transform__WEBPACK_IMPORTED_MODULE_1__["default"](), mesh, material, name) {
        const defaultName = `meshNode#${MeshNode.numMeshNodes}`;
        let computedName;
        if (name) {
            computedName = name;
        }
        else if (mesh.name) {
            computedName = `${mesh.name}-${defaultName}`;
        }
        else {
            computedName = defaultName;
        }
        super(computedName, transform);
        this.mesh = mesh;
        this.material = material;
        MeshNode.numMeshNodes += 1;
    }
}


/***/ }),

/***/ 5911:
/*!*******************************!*\
  !*** ./src/renderer/Model.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ 2212);
/* harmony import */ var three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader */ 7011);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ 6470);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mesh */ 3467);
/* harmony import */ var _MeshNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeshNode */ 4001);
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transform */ 6444);
/* harmony import */ var _materials_MaterialInternal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materials/_MaterialInternal */ 4143);
/* harmony import */ var _ModelNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModelNode */ 6288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_materials_MaterialInternal__WEBPACK_IMPORTED_MODULE_5__]);
_materials_MaterialInternal__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








/**
 * Class that holds model data.
 *
 * A Model instance is a structure containing the meshes and material
 * that should be applied to each mesh.
 *
 * There should only be one Model instance for each 3D model you
 * want to load in the game. You can use the `createModelNode`
 * method to generate a ModelNode with MeshNode children ready
 * for placement in a scene.
 *
 * NOTE: Currently only supports OBJ models.
 *
 * TODO: Support more than just OBJ models (probably GLTF / GLB first)
 */
class Model {
    static cache = new Map();
    static numModels = 0;
    meshes;
    material;
    extents;
    name;
    constructor(meshes, material, name) {
        this.meshes = meshes;
        this.material = material;
        this.extents = this.calcModelExtents();
        this.name = name ?? `model#${Model.numModels}`;
        Model.numModels += 1;
    }
    createModelNode(transform = new _Transform__WEBPACK_IMPORTED_MODULE_4__["default"]()) {
        const modelNode = new _ModelNode__WEBPACK_IMPORTED_MODULE_6__["default"](this, transform, this.name);
        this.meshes.forEach((mesh) => {
            const meshNode = new _MeshNode__WEBPACK_IMPORTED_MODULE_3__["default"](new _Transform__WEBPACK_IMPORTED_MODULE_4__["default"](), mesh, this.material);
            modelNode.addChild(meshNode);
        });
        return modelNode;
    }
    calcModelExtents() {
        if (this.meshes.length < 1) {
            return {
                minX: 0,
                maxX: 0,
                minY: 0,
                maxY: 0,
                minZ: 0,
                maxZ: 0,
                xLen: 0,
                yLen: 0,
                zLen: 0,
            };
        }
        let minX = this.meshes[0].position[0];
        let maxX = this.meshes[0].position[0];
        let minY = this.meshes[0].position[1];
        let maxY = this.meshes[0].position[1];
        let minZ = this.meshes[0].position[2];
        let maxZ = this.meshes[0].position[2];
        this.meshes.forEach((mesh) => {
            mesh.position.forEach((v, j) => {
                switch (j % 3) {
                    case 0:
                        if (v < minX)
                            minX = v;
                        else if (v > maxX)
                            maxX = v;
                        break;
                    case 1:
                        if (v < minY)
                            minY = v;
                        else if (v > maxY)
                            maxY = v;
                        break;
                    case 2:
                        if (v < minZ)
                            minZ = v;
                        else if (v > maxZ)
                            maxZ = v;
                        break;
                    default:
                        throw new Error('This shouldnt happen because...math');
                }
            });
        });
        return {
            minX,
            maxX,
            minY,
            maxY,
            minZ,
            maxZ,
            xLen: maxX - minX,
            yLen: maxY - minY,
            zLen: maxZ - minZ,
        };
    }
    static createMeshArray(model) {
        const { children } = model;
        // Create meshes for the first level mesh children
        // TODO: (Low Priority) Support multi-level hierarchy of meshes? We might not need this
        const meshes = children.filter((child) => child instanceof three__WEBPACK_IMPORTED_MODULE_7__.Mesh)
            .map((child) => {
            const { geometry } = child;
            return new _Mesh__WEBPACK_IMPORTED_MODULE_2__["default"](new Float32Array(geometry.getAttribute('position').array), new Float32Array(geometry.getAttribute('normal').array), new Float32Array(geometry.getAttribute('uv').array), null, child.name);
        });
        return meshes;
    }
    static async fromURL(model_url, material, name) {
        const loader = new three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_0__.OBJLoader();
        const loadedModel = await loader.loadAsync(model_url);
        const meshNodes = Model.createMeshArray(loadedModel);
        return new Model(meshNodes, material, name);
    }
    static async load(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        const configRequest = await fetch(url);
        const modelConfig = (await configRequest.json());
        const dir = path__WEBPACK_IMPORTED_MODULE_1__.dirname(url);
        // Load the model file
        const modelUrl = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, modelConfig.model);
        const loader = new three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_0__.OBJLoader();
        const loadedModel = await loader.loadAsync(modelUrl);
        const meshes = Model.createMeshArray(loadedModel);
        // Load the material
        const materialUrl = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, modelConfig.material);
        const material = await _materials_MaterialInternal__WEBPACK_IMPORTED_MODULE_5__.Material.load(materialUrl);
        const model = new Model(meshes, material, modelConfig.name);
        this.cache.set(url, model);
        return model;
    }
}

});

/***/ }),

/***/ 6288:
/*!***********************************!*\
  !*** ./src/renderer/ModelNode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModelNode)
/* harmony export */ });
/* harmony import */ var _SceneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneNode */ 9011);

/**
 * A simple node type that represents a scene instance of a Model.
 *
 * This node will contain MeshNode children that were loaded from
 * the meshes of the Model.
 */
class ModelNode extends _SceneNode__WEBPACK_IMPORTED_MODULE_0__["default"] {
    model;
    static numModelNodes = 0;
    constructor(model, transform, name = `modelNode#${ModelNode.numModelNodes}`) {
        super(name, transform);
        this.model = model;
        ModelNode.numModelNodes += 1;
    }
}


/***/ }),

/***/ 3305:
/*!*******************************************!*\
  !*** ./src/renderer/PerspectiveCamera.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PerspectiveCamera)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Math */ 2835);
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera */ 1177);
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transform */ 6444);




class PerspectiveCamera extends _Camera__WEBPACK_IMPORTED_MODULE_2__["default"] {
    fov;
    aspect;
    zNear;
    zFar;
    constructor(transform = new _Transform__WEBPACK_IMPORTED_MODULE_3__["default"](), fov = 60, aspect = 1, zNear = 0.1, zFar = 1000) {
        super();
        this.transform = transform;
        this.fov = fov;
        this.aspect = aspect;
        this.zNear = zNear;
        this.zFar = zFar;
    }
    getViewProjectionMatrix() {
        const projectionMatrix = this.getProjectionMatrix();
        const viewMatrix = this.getViewMatrix();
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(projectionMatrix, viewMatrix);
    }
    getProjectionMatrix() {
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.perspective((0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.fov), this.aspect, this.zNear, this.zFar);
    }
    getViewMatrix() {
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.inverse(this.transform.getMatrix());
    }
}


/***/ }),

/***/ 9870:
/*!**********************************!*\
  !*** ./src/renderer/Renderer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _MeshNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshNode */ 4001);
/* harmony import */ var _PerspectiveCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PerspectiveCamera */ 3305);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scene */ 8899);




class Renderer {
    gl;
    scene;
    camera;
    rendererUniforms;
    animationRequestId;
    previousTime;
    updateCallbacks = new Set();
    // Time in ms the last frame took to render
    frameTime = 0;
    constructor(gl, scene = new _Scene__WEBPACK_IMPORTED_MODULE_3__["default"](), camera = new _PerspectiveCamera__WEBPACK_IMPORTED_MODULE_2__["default"]()) {
        this.gl = gl;
        this.scene = scene;
        this.camera = camera;
        // Content initialization
        gl.clearColor(0.2, 0.075, 0.0, 1.0);
        // eslint-disable-next-line no-bitwise
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
    }
    drawScene(time) {
        this.rendererUniforms = {
            u_time: time * 0.001,
            u_resolution: [this.gl.canvas.width, this.gl.canvas.height],
        };
        this.drawNode(this.scene.root, twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.identity());
    }
    drawNode(node, parentMatrix) {
        // Compute this node's matrix
        let matrix = node.localTransform.getMatrix();
        matrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(parentMatrix, matrix);
        // Draw self
        if (node instanceof _MeshNode__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            // Get the mesh's buffer info
            const bufferInfo = node.mesh.getBufferInfo(this.gl);
            const programInfo = node.material.shader.getProgramInfo(this.gl);
            this.gl.useProgram(programInfo.program);
            (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setBuffersAndAttributes)(this.gl, programInfo, bufferInfo);
            // Set uniforms
            (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setUniforms)(programInfo, node.material.uniforms);
            (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setUniforms)(programInfo, this.rendererUniforms);
            // Compute matrix
            const cameraMatrix = this.camera.getViewProjectionMatrix();
            const projectedMatrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(this.camera.getViewProjectionMatrix(), matrix);
            const eyePosition = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.inverse(this.camera.getViewMatrix()).slice(12, 15);
            (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setUniforms)(programInfo, {
                u_matrix: projectedMatrix,
                u_modelMatrix: matrix,
                u_eyePosition: eyePosition,
                u_cameraMatrix: cameraMatrix,
            });
            // Render
            (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.drawBufferInfo)(this.gl, bufferInfo);
        }
        // Draw all children
        node.getChildren().forEach((child) => this.drawNode(child, matrix));
    }
    addUpdateCallback(callback) {
        this.updateCallbacks.add(callback);
    }
    removeUpdateCallback(callback) {
        if (!this.updateCallbacks.has(callback)) {
            return false;
        }
        this.updateCallbacks.delete(callback);
        return true;
    }
    preRender(deltaTime) {
        this.updateCallbacks.forEach((callback) => callback(deltaTime));
    }
    render(time) {
        const deltaTime = this.previousTime ? time - this.previousTime : 0;
        const startTime = performance.now();
        this.preRender(deltaTime);
        (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.resizeCanvasToDisplaySize)(this.gl.canvas);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.drawScene(time);
        const endTime = performance.now();
        this.frameTime = endTime - startTime;
        this.previousTime = time;
        this.animationRequestId = requestAnimationFrame((newTime) => this.render(newTime));
    }
    stopRendering() {
        cancelAnimationFrame(this.animationRequestId);
    }
}


/***/ }),

/***/ 8899:
/*!*******************************!*\
  !*** ./src/renderer/Scene.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _SceneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneNode */ 9011);

class Scene {
    root;
    constructor(root = new _SceneNode__WEBPACK_IMPORTED_MODULE_0__["default"]()) {
        this.root = root;
    }
    /**
       * Adds a node to the root node of this Scene.
       *
       * Lazy way of doing `scene.root.addChild()`.
       */
    addNode(node) {
        this.root.addChild(node);
    }
}


/***/ }),

/***/ 9011:
/*!***********************************!*\
  !*** ./src/renderer/SceneNode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneNode)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ 6444);


/**
 * Base class for nodes that inhabit a {@link Scene}
 *
 * SceneNodes can have children of the same type, which forms the basis of a Scene Graph
 */
class SceneNode {
    // This node's transform is relative to its parent
    localTransform;
    name;
    // These are private because they shouldn't be modified by users.
    // Parent is set when adding children to nodes.
    parent;
    children;
    // Counter for the number of scene nodes created this session
    static sceneNodes = 0;
    constructor(name, localTransform = new _Transform__WEBPACK_IMPORTED_MODULE_1__["default"]()) {
        this.localTransform = localTransform;
        this.name = name ?? `sceneNode#${SceneNode.sceneNodes}`;
        this.children = new Set();
        SceneNode.sceneNodes += 1;
    }
    getParent() {
        return this.parent;
    }
    getChildren() {
        return this.children;
    }
    addChild(node) {
        if (node.parent) {
            node.parent.removeChild(node);
        }
        node.parent = this;
        this.children.add(node);
    }
    removeChild(node) {
        if (!this.children.has(node)) {
            return;
        }
        node.parent = null;
        this.children.delete(node);
    }
    removeSelf() {
        this.getParent().removeChild(this);
    }
    // Traverses to root if ancestor is null
    getAncestorPosition(ancestor) {
        const nodeStack = [];
        let node = this;
        // The root will always be found
        let ancestorFound = ancestor === null;
        while (node != null) {
            nodeStack.push(node);
            if (node === ancestor) {
                ancestorFound = true;
                break;
            }
            node = node.getParent();
        }
        if (!ancestorFound)
            return null;
        // The stack will always at least have 1
        let position = nodeStack.pop().localTransform.position;
        while (nodeStack.length > 0) {
            node = nodeStack.pop();
            position = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.add(position, node.localTransform.position);
        }
        return position;
    }
    // getAncestorPosition(ancestor: SceneNode): v3.Vec3 {
    //   const ancestorMatrix = this.getAncestorMatrix(ancestor);
    //   return ancestorMatrix.filter((v: number, i: number) => i !== 0 && (i + 1) % 4 === 0);
    // }
    // getWorldMatrix(): m4.Mat4 {
    //   return this.getAncestorMatrix(null);
    // }
    //
    getWorldPosition() {
        return this.getAncestorPosition(null);
    }
}


/***/ }),

/***/ 938:
/*!********************************!*\
  !*** ./src/renderer/Shader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shader)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ 6470);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


class Shader {
    static cache = new Map();
    vertexShader;
    fragmentShader;
    programInfo;
    constructor(vertexShader, fragmentShader) {
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
    }
    static async fromURLs(vertexShaderURL, fragmentShaderURL) {
        let request = await fetch(vertexShaderURL);
        if (!request.ok) {
            throw Error(`Couldn't fetch vertex shader from URL: ${vertexShaderURL}, Status: ${request.statusText}`);
        }
        const vertexShader = await request.text();
        request = await fetch(fragmentShaderURL);
        if (!request.ok) {
            throw Error(`Couldn't fetch fragment shader from URL: ${fragmentShaderURL}, Status: ${request.statusText}`);
        }
        const fragmentShader = await request.text();
        return new Shader(vertexShader, fragmentShader);
    }
    /**
     * Gets the ProgramInfo object created from the compilation of this Shader.
     * If the ProgramInfo hasn't been created yet, this will create and cache it.
     *
     * @param gl WebGL context
     * @returns Compiled shader linked to a program
     */
    getProgramInfo(gl) {
        if (!this.programInfo) {
            this.programInfo = (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.createProgramInfo)(gl, [this.vertexShader, this.fragmentShader]);
        }
        return this.programInfo;
    }
    static async load(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        const configRequest = await fetch(url);
        const config = (await configRequest.json());
        const dir = path__WEBPACK_IMPORTED_MODULE_1__.dirname(url);
        const vertexShaderPath = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, config.vertexShader);
        const fragmentShaderPath = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, config.fragmentShader);
        const shader = await Shader.fromURLs(vertexShaderPath, fragmentShaderPath);
        this.cache.set(url, shader);
        return shader;
    }
}


/***/ }),

/***/ 9838:
/*!*********************************!*\
  !*** ./src/renderer/Texture.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Texture)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);

/**
 * A class for constructing a texuture and include it's data,
 * it uses the TextureLoader class from Three.js.
 */
class Texture {
    static cache = new Map();
    m_texture;
    constructor(context, url) {
        this.m_texture = twgl_js__WEBPACK_IMPORTED_MODULE_0__.createTexture(context, {
            src: url,
            flipY: 1,
            wrap: context.REPEAT,
            min: context.NEAREST_MIPMAP_LINEAR,
            mag: context.LINEAR,
        });
    }
    static async load(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        // Hacky way of getting the context so we don't
        // have to pass it in to the load function
        const context = document.getElementsByTagName('canvas')[0].getContext('webgl2');
        const texture = new Texture(context, url);
        this.cache.set(url, texture);
        return texture;
    }
}


/***/ }),

/***/ 6444:
/*!***********************************!*\
  !*** ./src/renderer/Transform.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Math */ 2835);


class Transform {
    position;
    rotation;
    scale;
    constructor(position = new Float32Array([0.0, 0.0, 0.0]), rotation = new Float32Array([0.0, 0.0, 0.0]), scale = new Float32Array([1.0, 1.0, 1.0])) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
    /**
       * Uses TWGL m4 to multiply scale, rotation, and translation matrices
       * together to get the matrix representing this model's transform.
       *
       * The order of operations is important. We want the following formula:
       * Matrix = Translation * Rotation * Scale * Identity
       */
    getMatrix() {
        const matrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.identity();
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.scale(matrix, this.scale, matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.translate(matrix, this.position, matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateZ(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[2]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateY(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[1]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateX(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[0]), matrix);
        return matrix;
    }
    getForwardVector() {
        const forward = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(0, 0, -1);
        const matrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.identity();
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateZ(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[2]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateY(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[1]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateX(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[0]), matrix);
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.transformDirection(matrix, forward);
    }
    getRightVector() {
        const right = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(1, 0, 0);
        const matrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.identity();
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateZ(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[2]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateY(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[1]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateX(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[0]), matrix);
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.transformDirection(matrix, right);
    }
    getUpVector() {
        const up = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(0, 1, 0);
        const matrix = twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.identity();
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateZ(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[2]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateY(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[1]), matrix);
        twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.rotateX(matrix, (0,_util_Math__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rotation[0]), matrix);
        return twgl_js__WEBPACK_IMPORTED_MODULE_0__.m4.transformDirection(matrix, up);
    }
}


/***/ }),

/***/ 1653:
/*!**************************************************!*\
  !*** ./src/renderer/materials/AlbedoMaterial.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbedoMaterial": () => (/* binding */ AlbedoMaterial)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ 6470);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_MaterialInternal */ 4143);
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shader */ 938);
/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Texture */ 9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__]);
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// eslint-disable-next-line import/no-cycle



const shaderUrl = '/assets/shaders/albedo/shader.json';
const albedoShader = await _Shader__WEBPACK_IMPORTED_MODULE_2__["default"].load(shaderUrl);
// eslint-disable-next-line import/prefer-default-export
class AlbedoMaterial extends _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.Material {
    static type = 'AlbedoMaterial';
    texture;
    constructor(texture) {
        super(albedoShader, { u_texture: texture });
        this.setTexture(texture);
    }
    setTexture(texture) {
        this.texture = texture;
        this.uniforms.u_texture = texture.m_texture;
    }
    static async loadFromConfig(url, config) {
        const dir = path__WEBPACK_IMPORTED_MODULE_0__.dirname(url);
        const textureUrl = path__WEBPACK_IMPORTED_MODULE_0__.resolve(dir, config.texture);
        const texture = await _Texture__WEBPACK_IMPORTED_MODULE_3__["default"].load(textureUrl);
        return new AlbedoMaterial(texture);
    }
}
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.materialLoaderMap.set('AlbedoMaterial', AlbedoMaterial.loadFromConfig);

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 1265:
/*!*****************************************************!*\
  !*** ./src/renderer/materials/BaseColorMaterial.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseColorMaterial": () => (/* binding */ BaseColorMaterial)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ 3141);
/* harmony import */ var _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_MaterialInternal */ 4143);
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shader */ 938);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Color */ 6110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__]);
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// eslint-disable-next-line import/no-cycle



const shaderUrl = '/assets/shaders/baseColor/shader.json';
const baseColorShader = await _Shader__WEBPACK_IMPORTED_MODULE_2__["default"].load(shaderUrl);
const DEFAULT_U_COLOR = twgl_js__WEBPACK_IMPORTED_MODULE_0__.v3.create(0.0, 0.0, 0.0);
// eslint-disable-next-line import/prefer-default-export
class BaseColorMaterial extends _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.Material {
    color;
    constructor(color) {
        super(baseColorShader, { u_color: DEFAULT_U_COLOR });
        this.setColor(color);
    }
    setColor(color) {
        this.color = color;
        this.uniforms.u_color = color.toVec3();
    }
    getColor() {
        return this.color;
    }
    static async loadFromConfig(url, config) {
        const color = _Color__WEBPACK_IMPORTED_MODULE_3__["default"].fromHex(config.color);
        return new BaseColorMaterial(color);
    }
}
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.materialLoaderMap.set('BaseColorMaterial', BaseColorMaterial.loadFromConfig);

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 6319:
/*!********************************************!*\
  !*** ./src/renderer/materials/Material.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "materialLoaderMap": () => (/* binding */ materialLoaderMap),
/* harmony export */   "Material": () => (/* binding */ Material)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ 6470);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shader */ 938);


const materialLoaderMap = new Map();
/**
 * Base class for a custom Material. Meant to be subclassed to create
 * tailored materials that are customized via a few exposed uniforms.
 */
class Material {
    static cache = new Map();
    static type = 'Material';
    shader;
    uniforms;
    constructor(shader, uniforms) {
        this.shader = shader;
        this.uniforms = uniforms;
    }
    static async load(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        const configRequest = await fetch(url);
        const materialConfig = (await configRequest.json());
        if (!materialLoaderMap.has(materialConfig.type)) {
            throw new Error('No material loader found for given material type.');
        }
        const loaderFunction = materialLoaderMap.get(materialConfig.type);
        const material = await loaderFunction(url, materialConfig);
        this.cache.set(url, material);
        return material;
    }
    // Can't use ResourceSchema as config type here because it prevents
    // subclasses from using their own ResourceSchema type. >:(
    static async loadFromConfig(url, config) {
        const materialConfig = config;
        const dir = path__WEBPACK_IMPORTED_MODULE_0__.dirname(url);
        const shaderUrl = path__WEBPACK_IMPORTED_MODULE_0__.resolve(dir, materialConfig.shader);
        const shader = await _Shader__WEBPACK_IMPORTED_MODULE_1__["default"].load(shaderUrl);
        const { uniforms } = materialConfig;
        return new Material(shader, uniforms);
    }
}
materialLoaderMap.set('Material', Material.loadFromConfig);


/***/ }),

/***/ 3142:
/*!***********************************************!*\
  !*** ./src/renderer/materials/PBRMaterial.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PBRMaterial)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ 6470);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_MaterialInternal */ 4143);
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shader */ 938);
/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Texture */ 9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__]);
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// eslint-disable-next-line import/no-cycle



const PBRShader = await _Shader__WEBPACK_IMPORTED_MODULE_2__["default"].load('/assets/shaders/pbr/shader.json');
class PBRMaterial extends _MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.Material {
    static type = 'PBRMaterial';
    albedo;
    normal;
    mrao;
    lightPositions;
    ligthColors;
    constructor(albedo, normal, mrao, pLightPos, pLightCols, dLightDir, dLightCol) {
        super(PBRShader, {
            u_albedo: albedo,
            u_normal: normal,
            u_mrao: mrao,
            u_dLightDirection: dLightDir,
            u_dLightColor: dLightCol,
            u_pLightPositions: pLightPos,
            u_pLightColors: pLightCols,
        });
        this.setAlbedo(albedo);
        this.setNormal(normal);
        this.setMrao(mrao);
        this.setLights(pLightPos, pLightCols);
    }
    setAlbedo(albedo) {
        this.albedo = albedo;
        this.uniforms.u_albedo = albedo.m_texture;
    }
    setNormal(normal) {
        this.normal = normal;
        this.uniforms.u_normal = normal.m_texture;
    }
    setMrao(mrao) {
        this.mrao = mrao;
        this.uniforms.u_mrao = mrao.m_texture;
    }
    setLights(lightPos, lightCols) {
        this.lightPositions = lightPos;
        this.uniforms.u_pLightPositions = lightPos;
        this.ligthColors = lightCols;
        this.uniforms.u_pLightColors = lightCols;
    }
    static async loadFromConfig(url, config) {
        const dir = path__WEBPACK_IMPORTED_MODULE_0__.dirname(url);
        const albedoUrl = path__WEBPACK_IMPORTED_MODULE_0__.resolve(dir, config.albedo);
        const albedo = await _Texture__WEBPACK_IMPORTED_MODULE_3__["default"].load(albedoUrl);
        const normalUrl = path__WEBPACK_IMPORTED_MODULE_0__.resolve(dir, config.normal);
        const normal = await _Texture__WEBPACK_IMPORTED_MODULE_3__["default"].load(normalUrl);
        const mraoUrl = path__WEBPACK_IMPORTED_MODULE_0__.resolve(dir, config.mrao);
        const mrao = await _Texture__WEBPACK_IMPORTED_MODULE_3__["default"].load(mraoUrl);
        const sceneLightingPath = '/assets/lighting.json';
        const configRequest = await fetch(sceneLightingPath);
        const sceneLightingConfig = (await configRequest.json());
        const { pLightPositions, pLightColors, dLightDirection, dLightColor, } = sceneLightingConfig;
        return new PBRMaterial(albedo, normal, mrao, pLightPositions, pLightColors, dLightDirection, dLightColor);
    }
}
_MaterialInternal__WEBPACK_IMPORTED_MODULE_1__.materialLoaderMap.set('PBRMaterial', PBRMaterial.loadFromConfig);

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 4143:
/*!*****************************************************!*\
  !*** ./src/renderer/materials/_MaterialInternal.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Material": () => (/* reexport safe */ _Material__WEBPACK_IMPORTED_MODULE_0__.Material),
/* harmony export */   "materialLoaderMap": () => (/* reexport safe */ _Material__WEBPACK_IMPORTED_MODULE_0__.materialLoaderMap),
/* harmony export */   "AlbedoMaterial": () => (/* reexport safe */ _AlbedoMaterial__WEBPACK_IMPORTED_MODULE_1__.AlbedoMaterial),
/* harmony export */   "BaseColorMaterial": () => (/* reexport safe */ _BaseColorMaterial__WEBPACK_IMPORTED_MODULE_2__.BaseColorMaterial)
/* harmony export */ });
/* harmony import */ var _Material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Material */ 6319);
/* harmony import */ var _AlbedoMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbedoMaterial */ 1653);
/* harmony import */ var _BaseColorMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseColorMaterial */ 1265);
/* harmony import */ var _PBRMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PBRMaterial */ 3142);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PBRMaterial__WEBPACK_IMPORTED_MODULE_3__, _BaseColorMaterial__WEBPACK_IMPORTED_MODULE_2__, _AlbedoMaterial__WEBPACK_IMPORTED_MODULE_1__]);
([_PBRMaterial__WEBPACK_IMPORTED_MODULE_3__, _BaseColorMaterial__WEBPACK_IMPORTED_MODULE_2__, _AlbedoMaterial__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* eslint-disable import/no-cycle */
// See https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
// for more information on this pattern





});

/***/ }),

/***/ 2550:
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ 1611);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ 7654);
/* harmony import */ var _renderer_DebugUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/DebugUI */ 4281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_game_Game__WEBPACK_IMPORTED_MODULE_0__]);
_game_Game__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(async () => {
    const appWrapper = document.getElementById('app');
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    // Create the game logic handler
    const game = new _game_Game__WEBPACK_IMPORTED_MODULE_0__["default"](gl);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const debugUI = new _renderer_DebugUI__WEBPACK_IMPORTED_MODULE_2__["default"](game.renderer, appWrapper);
    if (false) {}
})();

});

/***/ }),

/***/ 5944:
/*!**********************************!*\
  !*** ./src/ui/FrameTimePanel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FrameTimePanel)
/* harmony export */ });
class FrameTimePanel {
    static className = 'debug-panel';
    renderer;
    element;
    frameTimeUpdateIntervalId;
    constructor(renderer) {
        this.renderer = renderer;
        this.element = document.createElement('div');
        this.element.className = FrameTimePanel.className;
        // Update the frame time 30 times per second
        this.frameTimeUpdateIntervalId = setInterval(() => {
            this.element.innerText = `Frame time: ${this.renderer.frameTime} ms`;
        }, 30 / 1000);
        if (false) {}
    }
    cleanUp() {
        clearInterval(this.frameTimeUpdateIntervalId);
    }
}


/***/ }),

/***/ 7605:
/*!*************************************!*\
  !*** ./src/ui/game/ControlsPane.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlsPane)
/* harmony export */ });
const controls = [
    { label: 'W', action: 'Move forward' },
    { label: 'A', action: 'Move left' },
    { label: 'S', action: 'Move backward' },
    { label: 'D', action: 'Move right' },
    { label: 'Q', action: 'Attack adjacent tiles' },
    { label: 'I', action: 'Toggle inventory' },
    { label: '1-9', action: 'Use inventory slot item' },
    { label: '.', action: 'Toggle debug mode' },
    { label: ',', action: 'Toggle free camera' },
    { label: 'h', action: 'Free camera move left' },
    { label: 'j', action: 'Free camera move backward' },
    { label: 'k', action: 'Free camera move forward' },
    { label: 'l', action: 'Free camera move right' },
    { label: '[', action: 'Free camera move down' },
    { label: ']', action: 'Free camera move up' },
    { label: '\\', action: 'Re-generate map (not recommended)' },
];
class ControlsPane extends HTMLElement {
    game;
    titleElement;
    statsElement;
    equippedWeaponElement;
    constructor(game) {
        super();
        this.game = game;
        this.className = 'game-pane';
        this.titleElement = ControlsPane.createTitleElement();
        this.appendChild(this.titleElement);
        const controlsElements = controls.map(({ label, action }) => {
            const element = document.createElement('div');
            element.innerHTML = `<strong>${label}:</strong> ${action}`;
            return element;
        });
        this.append(...controlsElements);
    }
    static createTitleElement() {
        const element = document.createElement('div');
        element.className = 'pane-title';
        element.innerText = 'Controls';
        return element;
    }
}
customElements.define('controls-pane', ControlsPane);


/***/ }),

/***/ 1291:
/*!************************************!*\
  !*** ./src/ui/game/GameLogPane.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameLogPane)
/* harmony export */ });
class GameLogPane extends HTMLElement {
    game;
    titleElement;
    messageElement;
    constructor(game) {
        super();
        this.game = game;
        this.classList.add('game-pane', 'game-log-pane');
        this.titleElement = GameLogPane.createTitleElement();
        this.appendChild(this.titleElement);
        this.messageElement = document.createElement('div');
        this.appendChild(this.messageElement);
    }
    static createTitleElement() {
        const element = document.createElement('div');
        element.className = 'pane-title';
        element.innerText = 'Game Log';
        return element;
    }
    update() {
        this.messageElement.innerText = this.game.message;
    }
}
customElements.define('game-log-pane', GameLogPane);


/***/ }),

/***/ 5439:
/*!**********************************!*\
  !*** ./src/ui/game/GamePanel.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GamePanel)
/* harmony export */ });
/* harmony import */ var _ControlsPane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlsPane */ 7605);
/* harmony import */ var _GameLogPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameLogPane */ 1291);
/* harmony import */ var _InventoryPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InventoryPane */ 3094);
/* harmony import */ var _PlayerPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerPane */ 8150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InventoryPane__WEBPACK_IMPORTED_MODULE_2__]);
_InventoryPane__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




class GamePanel extends HTMLElement {
    game;
    playerPane;
    controlsPane;
    inventoryPane;
    gameLogPane;
    constructor(game) {
        super();
        this.game = game;
        this.playerPane = new _PlayerPane__WEBPACK_IMPORTED_MODULE_3__["default"](game);
        this.appendChild(this.playerPane);
        this.controlsPane = new _ControlsPane__WEBPACK_IMPORTED_MODULE_0__["default"](game);
        this.appendChild(this.controlsPane);
        this.inventoryPane = new _InventoryPane__WEBPACK_IMPORTED_MODULE_2__["default"](game);
        this.appendChild(this.inventoryPane);
        this.gameLogPane = new _GameLogPane__WEBPACK_IMPORTED_MODULE_1__["default"](game);
        this.appendChild(this.gameLogPane);
        // Mount self
        document.getElementById('app').appendChild(this);
        this.update();
        // if (module.hot) {
        //   module.hot.dispose(() => this.dispose());
        // }
    }
    update() {
        this.playerPane.update();
        this.inventoryPane.update();
        this.gameLogPane.update();
    }
}
customElements.define('game-panel', GamePanel);

});

/***/ }),

/***/ 3094:
/*!**************************************!*\
  !*** ./src/ui/game/InventoryPane.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InventoryPane)
/* harmony export */ });
/* harmony import */ var _game_entities_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/entities/Item */ 3282);
/* harmony import */ var _game_entities_Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/entities/Weapon */ 2354);
/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/Game */ 1611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_game_Game__WEBPACK_IMPORTED_MODULE_2__, _game_entities_Item__WEBPACK_IMPORTED_MODULE_0__, _game_entities_Weapon__WEBPACK_IMPORTED_MODULE_1__]);
([_game_Game__WEBPACK_IMPORTED_MODULE_2__, _game_entities_Item__WEBPACK_IMPORTED_MODULE_0__, _game_entities_Weapon__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* eslint-disable import/no-cycle */



class InventoryPane extends HTMLElement {
    game;
    titleElement;
    itemsWrapper;
    constructor(game) {
        super();
        this.game = game;
        this.className = 'game-pane';
        this.titleElement = InventoryPane.createTitleElement();
        this.appendChild(this.titleElement);
        this.itemsWrapper = document.createElement('div');
        this.appendChild(this.itemsWrapper);
        this.update();
    }
    static createTitleElement() {
        const element = document.createElement('div');
        element.className = 'pane-title';
        element.innerText = 'Inventory';
        return element;
    }
    createInventoryElements() {
        const inventoryElements = this.game.player.inventory.inventory.map((entity, index) => {
            const wrapperElement = document.createElement('div');
            wrapperElement.className = 'inventory-entity-wrapper';
            const labelElement = document.createElement('div');
            wrapperElement.appendChild(labelElement);
            const bodyElement = document.createElement('div');
            wrapperElement.appendChild(bodyElement);
            if (entity instanceof _game_entities_Weapon__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                const weapon = entity;
                labelElement.innerHTML = `<strong>${index + 1}. (Weapon) ${weapon.name}</strong>`;
                bodyElement.innerText = `Damage: ${weapon.damage}, Skill Bonus: ${weapon.skillBonus}`;
            }
            else if (entity instanceof _game_entities_Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                const item = entity;
                labelElement.innerHTML = `<strong>${index + 1}. (Item) ${item.name}`;
                bodyElement.innerText = `${item.description}`;
            }
            return wrapperElement;
        });
        return inventoryElements;
    }
    setVisibility(isVisible) {
        this.style.display = isVisible ? '' : 'none';
    }
    update() {
        this.setVisibility(this.game.state === _game_Game__WEBPACK_IMPORTED_MODULE_2__.GameState.INVENTORY);
        this.itemsWrapper.replaceChildren(...this.createInventoryElements());
    }
}
customElements.define('inventory-pane', InventoryPane);

});

/***/ }),

/***/ 8150:
/*!***********************************!*\
  !*** ./src/ui/game/PlayerPane.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerPane)
/* harmony export */ });
class PlayerPane extends HTMLElement {
    game;
    titleElement;
    statsElement;
    equippedWeaponElement;
    constructor(game) {
        super();
        this.game = game;
        this.className = 'game-pane';
        this.titleElement = PlayerPane.createTitleElement();
        this.appendChild(this.titleElement);
        const statsLabel = document.createElement('div');
        statsLabel.innerHTML = '<strong>Stats:</strong>';
        this.appendChild(statsLabel);
        this.statsElement = PlayerPane.createStatsElement();
        this.appendChild(this.statsElement);
        const equippedWeaponLabel = document.createElement('div');
        equippedWeaponLabel.className = 'player-pane-equip-label';
        equippedWeaponLabel.innerHTML = '<strong>Equipped Weapon:</strong>';
        this.appendChild(equippedWeaponLabel);
        this.equippedWeaponElement = PlayerPane.createEquippedWeaponElement();
        this.appendChild(this.equippedWeaponElement);
    }
    static createTitleElement() {
        const element = document.createElement('div');
        element.className = 'pane-title';
        element.innerText = 'Player';
        return element;
    }
    static createStatsElement() {
        const element = document.createElement('div');
        element.className = 'player-pane-stats';
        return element;
    }
    static createEquippedWeaponElement() {
        const element = document.createElement('div');
        element.className = 'player-pane-equipped-weapon';
        return element;
    }
    update() {
        this.statsElement.innerText = `${this.game.player.stringRepresentation()}`;
        if (this.game.player.equippedWeapon) {
            this.equippedWeaponElement.innerText = this.game.player.equippedWeapon.stringRepresentation();
        }
        else {
            this.equippedWeaponElement.innerText = 'None';
        }
    }
}
customElements.define('player-pane', PlayerPane);


/***/ }),

/***/ 1985:
/*!******************************************!*\
  !*** ./src/ui/scene-panel/ScenePanel.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenePanel)
/* harmony export */ });
/* harmony import */ var _ScenePanelHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenePanelHeader */ 3019);
/* harmony import */ var _ScenePanelList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenePanelList */ 3672);


class ScenePanel extends HTMLElement {
    renderer;
    header;
    list;
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.header = new _ScenePanelHeader__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.appendChild(this.header);
        this.list = new _ScenePanelList__WEBPACK_IMPORTED_MODULE_1__["default"](this.renderer.scene);
        this.appendChild(this.list);
    }
}
customElements.define('scene-panel', ScenePanel);


/***/ }),

/***/ 3019:
/*!************************************************!*\
  !*** ./src/ui/scene-panel/ScenePanelHeader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenePanelHeader)
/* harmony export */ });
class ScenePanelHeader extends HTMLElement {
    constructor() {
        super();
        this.innerText = 'Scene Hierarchy';
    }
}
customElements.define('scene-panel-header', ScenePanelHeader);


/***/ }),

/***/ 3672:
/*!**********************************************!*\
  !*** ./src/ui/scene-panel/ScenePanelList.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenePanelList)
/* harmony export */ });
/* harmony import */ var _ScenePanelListNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenePanelListNode */ 4627);

class ScenePanelList extends HTMLElement {
    scene;
    constructor(scene) {
        super();
        this.scene = scene;
        this.updateList();
    }
    updateList() {
        const nodes = Array.from(this.scene.root.getChildren());
        nodes.forEach((node) => {
            this.appendChild(new _ScenePanelListNode__WEBPACK_IMPORTED_MODULE_0__["default"](node));
        });
    }
}
customElements.define('scene-panel-list', ScenePanelList);


/***/ }),

/***/ 4627:
/*!**************************************************!*\
  !*** ./src/ui/scene-panel/ScenePanelListNode.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenePanelListNode)
/* harmony export */ });
class ScenePanelListNode extends HTMLElement {
    level;
    sceneNode;
    wrapper;
    expandButton;
    childrenNodes;
    isOpen = false;
    constructor(sceneNode, level = 0) {
        super();
        this.sceneNode = sceneNode;
        this.level = level;
        this.style.paddingLeft = `${this.level * 0.5}rem`;
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'node-wrapper';
        this.appendChild(this.wrapper);
        // Create collapsible button
        this.expandButton = document.createElement('div');
        this.expandButton.className = 'expand-button';
        if (sceneNode.getChildren().size > 0) {
            this.expandButton.innerText = '+';
            this.expandButton.addEventListener('click', () => {
                this.isOpen = !this.isOpen;
                this.update();
            });
        }
        else {
            this.expandButton.innerText = ' ';
        }
        this.wrapper.append(this.expandButton);
        // Create label
        const label = document.createElement('div');
        label.innerText = `${this.sceneNode.name} : ${this.sceneNode.constructor.name}`;
        this.wrapper.append(label);
        if (false) {}
    }
    update() {
        this.expandButton.innerText = this.isOpen ? '-' : '+';
        // Create children wrapper
        if (this.isOpen) {
            const nodes = Array.from(this.sceneNode.getChildren());
            this.childrenNodes = nodes.map((node) => new ScenePanelListNode(node, this.level + 1));
            this.append(...this.childrenNodes);
        }
        else {
            this.replaceChildren(this.wrapper);
        }
    }
}
customElements.define('scene-panel-list-node', ScenePanelListNode);


/***/ }),

/***/ 2835:
/*!**************************!*\
  !*** ./src/util/Math.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toRadians)
/* harmony export */ });
function toRadians(degrees) {
    return degrees * (Math.PI / 180.0);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(2550)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNjk3Nzk1YjczODJiYTA5MWRjYi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELHFCQUFxQixrQkFBa0IsZ0NBQWdDLHFCQUFxQiwrQkFBK0Isd0JBQXdCLEtBQUssY0FBYyxzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLHFCQUFxQixzQkFBc0Isc0JBQXNCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0Isd0JBQXdCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLHVCQUF1Qiw0QkFBNEIsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUsscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyw0QkFBNEIsK0JBQStCLEtBQUsscUJBQXFCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLEtBQUssNEJBQTRCLHVCQUF1QiwyQkFBMkIsdUNBQXVDLHlCQUF5QixLQUFLLDBCQUEwQix1QkFBdUIsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsS0FBSyxnQ0FBZ0MsdUJBQXVCLEtBQUssd0JBQXdCLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEtBQUssc0JBQXNCLDJCQUEyQixvQkFBb0Isa0JBQWtCLDZDQUE2Qyw2Q0FBNkMscUJBQXFCLDhCQUE4QixLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksdUNBQXVDLHFCQUFxQixrQkFBa0IsZ0NBQWdDLHFCQUFxQiwrQkFBK0Isd0JBQXdCLEtBQUssY0FBYyxzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLHFCQUFxQixzQkFBc0Isc0JBQXNCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0Isd0JBQXdCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLHVCQUF1Qiw0QkFBNEIsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUsscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyw0QkFBNEIsK0JBQStCLEtBQUsscUJBQXFCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLEtBQUssNEJBQTRCLHVCQUF1QiwyQkFBMkIsdUNBQXVDLHlCQUF5QixLQUFLLDBCQUEwQix1QkFBdUIsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsS0FBSyxnQ0FBZ0MsdUJBQXVCLEtBQUssd0JBQXdCLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEtBQUssc0JBQXNCLDJCQUEyQixvQkFBb0Isa0JBQWtCLDZDQUE2Qyw2Q0FBNkMscUJBQXFCLDhCQUE4QixLQUFLLHVCQUF1QjtBQUNub0k7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJoRDtBQUNnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwQkFBMEI7QUFDbkU7QUFDQTtBQUNBLGtCQUFrQixpREFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQixFQUFFLHlEQUFlO0FBQ2xDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCLFFBQVEsMkNBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsMkJBQTJCLDhDQUFTO0FBQ3BDLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0EsWUFBWSwyQ0FBTTtBQUNsQjtBQUNBO0FBQ0EsWUFBWSxnREFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSxnREFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSwyQ0FBTTtBQUNsQjtBQUNBO0FBQ0EsWUFBWSwyQ0FBTTtBQUNsQjtBQUNBO0FBQ0EsWUFBWSxnREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hELGdDQUFnQyw0QkFBNEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCO0FBQ2xFLG1DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRCw2Q0FBNkMsb0JBQW9CO0FBQ2pFLGlEQUFpRCxvQkFBb0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHFCQUFxQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BTNkI7QUFDVztBQUNkO0FBQ1c7QUFDRTtBQUNKO0FBQ1M7QUFDa0I7QUFDWjtBQUNsRDtBQUM2QztBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3hCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRUFBaUI7QUFDM0Msb0NBQW9DLHlEQUFnQjtBQUNwRCw0QkFBNEIsMERBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUs7QUFDeEI7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBMkM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1REFBSztBQUMxQjtBQUNBLHFEQUFxRCx3QkFBd0IsRUFBRSw2QkFBNkI7QUFDNUc7QUFDQTtBQUNBLHFCQUFxQix3REFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0IsUUFBUSwyQ0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1REFBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWSxPQUFPLG1DQUFtQyxVQUFVLFlBQVksTUFBTSwyQkFBMkI7QUFDNUk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLFFBQVEsY0FBYztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0RBQU07QUFDMUM7QUFDQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QjtBQUNqRTtBQUNBLHlDQUF5QyxzREFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXLElBQUksaUJBQWlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VTBDO0FBQ0Y7QUFDRDtBQUNGO0FBQ0U7QUFDSjtBQUNXO0FBQ0E7QUFDZDtBQUNqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJEQUFTO0FBQy9DLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixnQkFBZ0IsTUFBTSxJQUFJO0FBQzFCLGtCQUFrQixNQUFNLElBQUk7QUFDNUIsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQVM7QUFDdEM7QUFDQSxnQ0FBZ0MseURBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTTtBQUM5Qiw4QkFBOEIsd0RBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLDBCQUEwQixrRUFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtFQUFtQjtBQUN4QywrQkFBK0Isd0RBQVM7QUFDeEMscUJBQXFCLGlFQUFrQjtBQUN2QywrQkFBK0IsdURBQVE7QUFDdkMscUJBQXFCLGtFQUFnQjtBQUNyQyx1Q0FBdUMsd0RBQU0sTUFBTSxNQUFNO0FBQ3pELCtCQUErQix3REFBUztBQUN4QyxxQkFBcUIsaUVBQWU7QUFDcEMsdUNBQXVDLHVEQUFLLE1BQU0sTUFBTTtBQUN4RCwrQkFBK0Isd0RBQVM7QUFDeEMscUJBQXFCLGtFQUFnQjtBQUNyQyx1Q0FBdUMsd0RBQU0sTUFBTSxNQUFNO0FBQ3pELCtCQUErQix3REFBUztBQUN4QyxxQkFBcUIsZ0VBQWM7QUFDbkMsdUNBQXVDLHNEQUFJLE1BQU0sTUFBTTtBQUN2RCwrQkFBK0Isd0RBQVM7QUFDeEM7QUFDQSwrQkFBK0Isd0RBQVM7QUFDeEM7QUFDQSxTQUFTO0FBQ1QsdUNBQXVDLE1BQU07QUFDN0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFLO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQU07QUFDdkI7QUFDQTtBQUNBLGlCQUFpQixzREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNLZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVUsSUFBSSw4QkFBOEI7QUFDNUY7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2Q0FBNkMsVUFBVSxJQUFJLDRCQUE0QjtBQUN2Rix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUN0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEeUM7QUFDWDtBQUM5QjtBQUNBLGtCQUFrQiw0REFBVTtBQUM1QixxQkFBcUIsNERBQVU7QUFDL0Isa0JBQWtCLDREQUFVO0FBQzVCLGVBQWUsNERBQVU7QUFDekIsbUJBQW1CLDREQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNlLG9CQUFvQiwrQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZLFFBQVEsV0FBVyxZQUFZLFlBQVk7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5QztBQUNYO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsNERBQVU7QUFDNUIsdUJBQXVCLDREQUFVO0FBQ2pDLHNCQUFzQiw0REFBVTtBQUNoQyxvQkFBb0IsNERBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNlLG1CQUFtQiwrQ0FBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVcsV0FBVyxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDOEI7QUFDTztBQUNJO0FBQ1E7QUFDVDtBQUNTO0FBQ2pELG9CQUFvQiw0REFBVTtBQUNmLHFCQUFxQiwrQ0FBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJEQUFTLDZCQUE2QiwyREFBUztBQUMvRTtBQUNBLHVDQUF1QyxzREFBUztBQUNoRCx3Q0FBd0Msc0RBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWSxRQUFRLFdBQVc7QUFDM0Q7QUFDQSwwQkFBMEIsK0NBQStDLEVBQUUsK0JBQStCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHlDO0FBQ1g7QUFDOUI7QUFDQSxrQkFBa0IsNERBQVU7QUFDNUIsdUJBQXVCLDREQUFVO0FBQ2pDLHFCQUFxQiw0REFBVTtBQUMvQixtQkFBbUIsNERBQVU7QUFDN0IscUJBQXFCLDREQUFVO0FBQy9CLGlCQUFpQiw0REFBVTtBQUMzQixpQkFBaUIsNERBQVU7QUFDM0IsdUJBQXVCLDREQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBZ0Q7QUFDakUsd0JBQXdCLHFEQUFxRDtBQUM3RSxxQkFBcUIscURBQXFEO0FBQzFFLGtCQUFrQixpREFBaUQ7QUFDbkUsb0JBQW9CLG9EQUFvRDtBQUN4RSxnQkFBZ0IsK0NBQStDO0FBQy9ELGdCQUFnQiwrQ0FBK0M7QUFDL0QsdUJBQXVCLHFEQUFxRDtBQUM1RTtBQUNlLHFCQUFxQiwrQ0FBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVyxXQUFXLFlBQVksaUJBQWlCLGdCQUFnQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN5QztBQUNRO0FBQ25CO0FBQzlCO0FBQ0EseUJBQXlCLDREQUFVO0FBQ3BCLHdCQUF3Qix1Q0FBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkRBQVM7QUFDekM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaaUQ7QUFDMUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSwyREFBUztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeUM7QUFDUTtBQUNuQjtBQUM5QjtBQUNBLHdCQUF3Qiw0REFBVTtBQUNuQix1QkFBdUIsdUNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJEQUFTO0FBQ3pDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNkI7QUFDZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEa0Q7QUFDSTtBQUN2QztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBVSxFQUFFLEVBS2Y7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtFQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1FQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RW9DO0FBQ0E7QUFDckIsdUJBQXVCLGtEQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrREFBUztBQUN6Qyx3Q0FBd0Msc0JBQXNCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxHQUFHLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCMEM7QUFDdUI7QUFDcEM7QUFDSDtBQUNRO0FBQ0U7QUFDcUI7QUFDckI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBLG9DQUFvQyxrREFBUztBQUM3Qyw4QkFBOEIsa0RBQVM7QUFDdkM7QUFDQSxpQ0FBaUMsaURBQVEsS0FBSyxrREFBUztBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0EsbUVBQW1FLHVDQUFTO0FBQzVFO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0IsdUJBQXVCLDZDQUFJO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkVBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUNBQVk7QUFDaEM7QUFDQSx5QkFBeUIseUNBQVk7QUFDckMsMkJBQTJCLDJFQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBWTtBQUN4QywrQkFBK0Isc0VBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHdCQUF3QixrREFBUztBQUNoRDtBQUNBO0FBQ0Esc0RBQXNELHdCQUF3QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjZCO0FBQ1E7QUFDUDtBQUNNO0FBQ3JCLGdDQUFnQywrQ0FBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQVc7QUFDMUI7QUFDQTtBQUNBLGVBQWUsbURBQWMsQ0FBQyxzREFBUztBQUN2QztBQUNBO0FBQ0EsZUFBZSwrQ0FBVTtBQUN6QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrRztBQUM3RTtBQUNrQjtBQUN4QjtBQUNiO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFLLGlCQUFpQiwwREFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdEQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFXO0FBQzVCO0FBQ0EsNEJBQTRCLGlEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBdUI7QUFDbkM7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCLFlBQVksb0RBQVc7QUFDdkI7QUFDQTtBQUNBLG9DQUFvQyxnREFBVztBQUMvQyxnQ0FBZ0MsK0NBQVU7QUFDMUMsWUFBWSxvREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksdURBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZvQztBQUNyQjtBQUNmO0FBQ0EsMkJBQTJCLGtEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDZCO0FBQ087QUFDcEM7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0RBQVM7QUFDcEQ7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakY0QztBQUNmO0FBQ2Q7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGdCQUFnQixZQUFZLG1CQUFtQjtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxrQkFBa0IsWUFBWSxtQkFBbUI7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBWTtBQUNoQyxpQ0FBaUMseUNBQVk7QUFDN0MsbUNBQW1DLHlDQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRGdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJpQztBQUNJO0FBQ3RCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQVc7QUFDbEMsUUFBUSw2Q0FBUTtBQUNoQixRQUFRLGlEQUFZO0FBQ3BCLFFBQVEsK0NBQVUsU0FBUyxzREFBUztBQUNwQyxRQUFRLCtDQUFVLFNBQVMsc0RBQVM7QUFDcEMsUUFBUSwrQ0FBVSxTQUFTLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBUztBQUNqQyx1QkFBdUIsZ0RBQVc7QUFDbEMsUUFBUSwrQ0FBVSxTQUFTLHNEQUFTO0FBQ3BDLFFBQVEsK0NBQVUsU0FBUyxzREFBUztBQUNwQyxRQUFRLCtDQUFVLFNBQVMsc0RBQVM7QUFDcEMsZUFBZSwwREFBcUI7QUFDcEM7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBUztBQUMvQix1QkFBdUIsZ0RBQVc7QUFDbEMsUUFBUSwrQ0FBVSxTQUFTLHNEQUFTO0FBQ3BDLFFBQVEsK0NBQVUsU0FBUyxzREFBUztBQUNwQyxRQUFRLCtDQUFVLFNBQVMsc0RBQVM7QUFDcEMsZUFBZSwwREFBcUI7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBUztBQUM1Qix1QkFBdUIsZ0RBQVc7QUFDbEMsUUFBUSwrQ0FBVSxTQUFTLHNEQUFTO0FBQ3BDLFFBQVEsK0NBQVUsU0FBUyxzREFBUztBQUNwQyxRQUFRLCtDQUFVLFNBQVMsc0RBQVM7QUFDcEMsZUFBZSwwREFBcUI7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDZCO0FBQzdCO0FBQ21FO0FBQ3BDO0FBQ0U7QUFDakM7QUFDQSwyQkFBMkIsb0RBQVc7QUFDdEM7QUFDTyw2QkFBNkIsdURBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBWTtBQUNoQywyQkFBMkIseUNBQVk7QUFDdkMsOEJBQThCLHFEQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9FQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJRO0FBQzdCO0FBQ2tFO0FBQ25DO0FBQ0Y7QUFDN0I7QUFDQSw4QkFBOEIsb0RBQVc7QUFDekMsd0JBQXdCLDhDQUFTO0FBQ2pDO0FBQ08sZ0NBQWdDLHVEQUFRO0FBQy9DO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG9FQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JRO0FBQ0U7QUFDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBWTtBQUNoQywwQkFBMEIseUNBQVk7QUFDdEMsNkJBQTZCLG9EQUFXO0FBQ3hDLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDNkI7QUFDN0I7QUFDbUU7QUFDcEM7QUFDRTtBQUNqQyx3QkFBd0Isb0RBQVc7QUFDcEIsMEJBQTBCLHVEQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUNBQVk7QUFDaEMsMEJBQTBCLHlDQUFZO0FBQ3RDLDZCQUE2QixxREFBWTtBQUN6QywwQkFBMEIseUNBQVk7QUFDdEMsNkJBQTZCLHFEQUFZO0FBQ3pDLHdCQUF3Qix5Q0FBWTtBQUNwQywyQkFBMkIscURBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUErRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxvRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEckI7QUFDQTtBQUNBO0FBQzJCO0FBQ007QUFDRztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkM7QUFDVjtBQUNvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFJO0FBQ3pCO0FBQ0Esd0JBQXdCLHlEQUFPO0FBQy9CLFFBQVEsS0FBVSxFQUFFLEVBS2Y7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCO0FBQzdFLFNBQVM7QUFDVCxZQUFZLEtBQVUsRUFBRSxFQUtmO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0EsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxpQ0FBaUM7QUFDdkMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxrQ0FBa0M7QUFDeEMsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxpREFBaUQ7QUFDdkQsTUFBTSx5Q0FBeUM7QUFDL0MsTUFBTSwwQ0FBMEM7QUFDaEQsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSxpREFBaUQ7QUFDdkQsTUFBTSxnREFBZ0Q7QUFDdEQsTUFBTSw4Q0FBOEM7QUFDcEQsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSwyQ0FBMkM7QUFDakQsTUFBTSwwREFBMEQ7QUFDaEU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQSwyQ0FBMkMsTUFBTSxhQUFhLE9BQU87QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjBDO0FBQ0Y7QUFDSTtBQUNOO0FBQ3ZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBVTtBQUN4QztBQUNBLGdDQUFnQyxxREFBWTtBQUM1QztBQUNBLGlDQUFpQyxzREFBYTtBQUM5QztBQUNBLCtCQUErQixvREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDNEM7QUFDSTtBQUNKO0FBQzdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZEQUFNO0FBQ3hDO0FBQ0Esb0RBQW9ELFVBQVUsYUFBYSxZQUFZO0FBQ3ZGLG1EQUFtRCxjQUFjLGlCQUFpQixrQkFBa0I7QUFDcEc7QUFDQSx1Q0FBdUMsMkRBQUk7QUFDM0M7QUFDQSxvREFBb0QsVUFBVSxXQUFXLFVBQVU7QUFDbkYsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyREFBbUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0NBQXdDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGtEO0FBQ0o7QUFDL0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseURBQWdCO0FBQzFDO0FBQ0Esd0JBQXdCLHVEQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUN2QztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBa0I7QUFDbkQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUIsSUFBSSxnQ0FBZ0M7QUFDdEY7QUFDQSxZQUFZLEtBQVUsRUFBRSxFQUVmO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRGU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvQ2FtZXJhQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS9EdW5nZW9uLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvR3JpZC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvS2V5TGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvZW50aXRpZXMvRW5lbXkudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvZW50aXRpZXMvRW50aXR5LnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL2VudGl0aWVzL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvZW50aXRpZXMvUGxheWVyLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL2VudGl0aWVzL1dlYXBvbi50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS90aWxlcy9GbG9vclRpbGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvdGlsZXMvVGlsZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS90aWxlcy9XYWxsVGlsZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvQ2FtZXJhLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9Db2xvci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvRGVidWdVSS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvTWVzaC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvTWVzaE5vZGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL01vZGVsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9Nb2RlbE5vZGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL1BlcnNwZWN0aXZlQ2FtZXJhLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL1NjZW5lTm9kZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvU2hhZGVyLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9UZXh0dXJlLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL21hdGVyaWFscy9BbGJlZG9NYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvbWF0ZXJpYWxzL0Jhc2VDb2xvck1hdGVyaWFsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9tYXRlcmlhbHMvTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL21hdGVyaWFscy9QQlJNYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvbWF0ZXJpYWxzL19NYXRlcmlhbEludGVybmFsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL0ZyYW1lVGltZVBhbmVsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9nYW1lL0NvbnRyb2xzUGFuZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvZ2FtZS9HYW1lTG9nUGFuZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvZ2FtZS9HYW1lUGFuZWwudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL2dhbWUvSW52ZW50b3J5UGFuZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvZ2FtZS9QbGF5ZXJQYW5lLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9zY2VuZS1wYW5lbC9TY2VuZVBhbmVsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9zY2VuZS1wYW5lbC9TY2VuZVBhbmVsSGVhZGVyLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9zY2VuZS1wYW5lbC9TY2VuZVBhbmVsTGlzdC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvc2NlbmUtcGFuZWwvU2NlbmVQYW5lbExpc3ROb2RlLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91dGlsL01hdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHsgXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhcHAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjYW52YXMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5nYW1lLXBhbmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleDogMjVyZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1wYW5lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBtYXJnaW46IC41cmVtIC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1sb2ctcGFuZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wYW5lLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1wYW5lLXN0YXRzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2NlbmUtcGFuZWwge1xcclxcbiAgICBmbGV4OiAyNXJlbSAwIDA7XFxyXFxuICAgIG1heC13aWR0aDogMjVyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuc2NlbmUtcGFuZWwtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zY2VuZS1wYW5lbC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsLWxpc3Qtbm9kZSB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vZGUtd3JhcHBlciB7IFxcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1idXR0b24geyBcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnVnLXBhbmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDVweDtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkgeyBcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhcy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmdhbWUtcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4OiAyNXJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXBhbmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIG1hcmdpbjogLjVyZW0gLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWxvZy1wYW5lIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBhbmUtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXBhbmUtc3RhdHMge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zY2VuZS1wYW5lbCB7XFxyXFxuICAgIGZsZXg6IDI1cmVtIDAgMDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5zY2VuZS1wYW5lbC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuc2NlbmUtcGFuZWwtbGlzdC1ub2RlIHsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9kZS13cmFwcGVyIHsgXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWJ1dHRvbiB7IFxcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVidWctcGFuZWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNXB4O1xcclxcbiAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHYzIH0gZnJvbSAndHdnbC5qcyc7XG5pbXBvcnQgeyBLZXlQcmVzc1R5cGUgfSBmcm9tICcuL0tleUxpc3RlbmVyJztcbmNvbnN0IEtFWV9NQVAgPSB7XG4gICAgbW92ZW1lbnQ6IHtcbiAgICAgICAgTnVtcGFkODogJ2ZvcndhcmQnLFxuICAgICAgICBOdW1wYWQyOiAnYmFja3dhcmQnLFxuICAgICAgICBOdW1wYWQ0OiAnbGVmdCcsXG4gICAgICAgIE51bXBhZDY6ICdyaWdodCcsXG4gICAgICAgIE51bXBhZDk6ICd1cCcsXG4gICAgICAgIE51bXBhZDc6ICdkb3duJyxcbiAgICAgICAgaDogJ2xlZnQnLFxuICAgICAgICBqOiAnYmFja3dhcmQnLFxuICAgICAgICBrOiAnZm9yd2FyZCcsXG4gICAgICAgIGw6ICdyaWdodCcsXG4gICAgICAgICddJzogJ3VwJyxcbiAgICAgICAgJ1snOiAnZG93bicsXG4gICAgfSxcbiAgICBsb29rOiB7XG4gICAgICAgIEFycm93VXA6ICd1cCcsXG4gICAgICAgIEFycm93RG93bjogJ2Rvd24nLFxuICAgICAgICBBcnJvd0xlZnQ6ICdsZWZ0JyxcbiAgICAgICAgQXJyb3dSaWdodDogJ3JpZ2h0JyxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUNvbnRyb2xsZXIge1xuICAgIGNhbWVyYTtcbiAgICBtb3ZlU3BlZWQ7XG4gICAgbG9va1NlbnNpdGl2aXR5O1xuICAgIGFjdGl2ZUlucHV0cztcbiAgICBzdGF0aWMgZGVmYXVsdElucHV0cyA9IHtcbiAgICAgICAgbW92ZW1lbnQ6IHtcbiAgICAgICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBmb3J3YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGJhY2t3YXJkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9vazoge1xuICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKGNhbWVyYSwgXG4gICAgLy8gVW5pdHMgcGVyIHNlY29uZFxuICAgIG1vdmVTcGVlZCA9IDEuMCwgXG4gICAgLy8gRGVncmVlcyBwZXIgc2Vjb25kXG4gICAgbG9va1NlbnNpdGl2aXR5ID0gMS4wLCBhY3RpdmVJbnB1dHMgPSBDYW1lcmFDb250cm9sbGVyLmRlZmF1bHRJbnB1dHMpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gbW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmxvb2tTZW5zaXRpdml0eSA9IGxvb2tTZW5zaXRpdml0eTtcbiAgICAgICAgdGhpcy5hY3RpdmVJbnB1dHMgPSBhY3RpdmVJbnB1dHM7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENhbWVyYSBVcGRhdGU6ICR7dGhpcy5kaXJlY3Rpb24udG9TdHJpbmcoKX1gKTtcbiAgICAgICAgY29uc3QgbW92ZVZlY3RvciA9IHRoaXMuZ2V0TW92ZVZlY3RvcigpO1xuICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSB0aGlzLm1vdmVTcGVlZCAqIChkZWx0YVRpbWUgLyAxMDAwKTtcbiAgICAgICAgdGhpcy5tb3ZlKHYzLm11bFNjYWxhcihtb3ZlVmVjdG9yLCBtb3ZlRGlzdGFuY2UpKTtcbiAgICAgICAgY29uc3Qgcm90YXRpb25zID0gdGhpcy5nZXRSb3RhdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yb3RhdGUocm90YXRpb25zKTtcbiAgICB9XG4gICAgYmluZEtleXMoa2V5TGlzdGVuZXIpIHtcbiAgICAgICAgLy8gQ2FtZXJhIG1vdmVtZW50IHdpdGggbnVtcGFkXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKEtFWV9NQVApLmZvckVhY2goKFtpbnB1dFR5cGUsIGlucHV0c10pID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAga2V5TGlzdGVuZXIuYWRkTGlzdGVuZXIoa2V5LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5wdXRzW2lucHV0VHlwZV1bdmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBrZXlMaXN0ZW5lci5hZGRMaXN0ZW5lcihrZXksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbnB1dHNbaW5wdXRUeXBlXVt2YWx1ZV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCBLZXlQcmVzc1R5cGUuVVApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3ZlKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IHRoaXMuY2FtZXJhLnRyYW5zZm9ybTtcbiAgICAgICAgdjMuYWRkKHBvc2l0aW9uLCB0cmFuc2xhdGlvbiwgcG9zaXRpb24pO1xuICAgIH1cbiAgICBtb3ZlVG8ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jYW1lcmEudHJhbnNmb3JtLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICAgIGdldE1vdmVWZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgY29uc3QgbW92ZVZlY3RvciA9IHYzLmNyZWF0ZSgwLCAwLCAwKTtcbiAgICAgICAgY29uc3QgeyBtb3ZlbWVudCB9ID0gdGhpcy5hY3RpdmVJbnB1dHM7XG4gICAgICAgIGlmIChtb3ZlbWVudC51cCkge1xuICAgICAgICAgICAgdjMuYWRkKG1vdmVWZWN0b3IsIHRyYW5zZm9ybS5nZXRVcFZlY3RvcigpLCBtb3ZlVmVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW92ZW1lbnQuZG93bikge1xuICAgICAgICAgICAgdjMuc3VidHJhY3QobW92ZVZlY3RvciwgdHJhbnNmb3JtLmdldFVwVmVjdG9yKCksIG1vdmVWZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3ZlbWVudC5sZWZ0KSB7XG4gICAgICAgICAgICB2My5zdWJ0cmFjdChtb3ZlVmVjdG9yLCB0cmFuc2Zvcm0uZ2V0UmlnaHRWZWN0b3IoKSwgbW92ZVZlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vdmVtZW50LnJpZ2h0KSB7XG4gICAgICAgICAgICB2My5hZGQobW92ZVZlY3RvciwgdHJhbnNmb3JtLmdldFJpZ2h0VmVjdG9yKCksIG1vdmVWZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3ZlbWVudC5mb3J3YXJkKSB7XG4gICAgICAgICAgICB2My5hZGQobW92ZVZlY3RvciwgdHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgbW92ZVZlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vdmVtZW50LmJhY2t3YXJkKSB7XG4gICAgICAgICAgICB2My5zdWJ0cmFjdChtb3ZlVmVjdG9yLCB0cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLCBtb3ZlVmVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZVZlY3RvcjtcbiAgICB9XG4gICAgcm90YXRlKHJvdGF0aW9ucykge1xuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XG4gICAgICAgIHJvdGF0aW9uWzBdICs9IHJvdGF0aW9uc1swXTtcbiAgICAgICAgLy8gQ2xhbXAgWFxuICAgICAgICBpZiAocm90YXRpb25bMF0gPiA5MCkge1xuICAgICAgICAgICAgcm90YXRpb25bMF0gPSA5MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3RhdGlvblswXSA8IC05MCkge1xuICAgICAgICAgICAgcm90YXRpb25bMF0gPSAtOTA7XG4gICAgICAgIH1cbiAgICAgICAgcm90YXRpb25bMV0gKz0gcm90YXRpb25zWzFdO1xuICAgIH1cbiAgICBnZXRSb3RhdGlvbnMoKSB7XG4gICAgICAgIGxldCB4Um90YXRpb24gPSAwLjA7XG4gICAgICAgIGxldCB5Um90YXRpb24gPSAwLjA7XG4gICAgICAgIGNvbnN0IHsgbG9vayB9ID0gdGhpcy5hY3RpdmVJbnB1dHM7XG4gICAgICAgIGlmIChsb29rLnVwKSB7XG4gICAgICAgICAgICB4Um90YXRpb24gKz0gdGhpcy5sb29rU2Vuc2l0aXZpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvb2suZG93bikge1xuICAgICAgICAgICAgeFJvdGF0aW9uIC09IHRoaXMubG9va1NlbnNpdGl2aXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb29rLmxlZnQpIHtcbiAgICAgICAgICAgIHlSb3RhdGlvbiArPSB0aGlzLmxvb2tTZW5zaXRpdml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9vay5yaWdodCkge1xuICAgICAgICAgICAgeVJvdGF0aW9uIC09IHRoaXMubG9va1NlbnNpdGl2aXR5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbeFJvdGF0aW9uLCB5Um90YXRpb25dO1xuICAgIH1cbn1cbiIsImNvbnN0IE5VTV9JVEVNUyA9IDk7XG5jb25zdCBNQVBfRU1QVFkgPSAnLic7XG5jb25zdCBNQVBfV0FMTCA9ICd8JztcbmNvbnN0IE1BUF9QTEFZRVIgPSAnQCc7XG5jb25zdCBNQVBfV0VBUE9OID0gJ3cnO1xuY29uc3QgTUFQX0lURU0gPSAnaSc7XG5jb25zdCBNQVBfRU5FTVkgPSAnZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW5nZW9uIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUoZHVuZ2VvbldpZHRoLCBkdW5nZW9uSGVpZ2h0LCBtaW5Sb29tU2l6ZSkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IFJlY3QoMCwgMCwgZHVuZ2VvbkhlaWdodCAtIDEsIGR1bmdlb25XaWR0aCAtIDEpO1xuICAgICAgICAvLyBTcGxpdCB0aGUgZHVuZ2VvbiBpbnRvIHpvbmVzXG4gICAgICAgIGNvbnN0IHpvbmVzID0gRHVuZ2Vvbi5zcGxpdChtYWluLCBtaW5Sb29tU2l6ZSArIDIpO1xuICAgICAgICAvLyBDcmVhdGUgcm9vbXMgaW5zaWRlIGVhY2ggb2YgdGhlIHpvbmVzXG4gICAgICAgIGNvbnN0IHJvb21zID0gem9uZXMubWFwKCh6b25lKSA9PiBEdW5nZW9uLmNyZWF0ZVJvb20oem9uZSwgbWluUm9vbVNpemUpKTtcbiAgICAgICAgLy8gQ3JlYXRlIGhhbGx3YXlzIHRvIGNvbm5lY3Qgcm9vbXMgdG9nZXRoZXJcbiAgICAgICAgY29uc3QgeyBoYWxscywgY29ubmVjdGlvbnMgfSA9IER1bmdlb24uY3JlYXRlSGFsbHMoem9uZXMsIHJvb21zKTtcbiAgICAgICAgLy8gUmFuZG9tbHkgc2VsZWN0IGEgc3RhcnRpbmcgcm9vbSB0aGVuIGNhbGN1bGF0ZSB0aGUgZGlmZmljdWx0aWVzIG9mIGV2ZXJ5IG90aGVyIHJvb21cbiAgICAgICAgY29uc3Qgc3RhcnRSb29tID0gRHVuZ2Vvbi5yYW5kSW50KDAsIHJvb21zLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdGllcyA9IHJvb21zLm1hcCgoXykgPT4gOTk5KTtcbiAgICAgICAgZGlmZmljdWx0aWVzW3N0YXJ0Um9vbV0gPSAxO1xuICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IHJvb21zLmxlbmd0aDsgbG9vcCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb25uID0gMDsgY29ubiA8IGNvbm5lY3Rpb25zLmxlbmd0aDsgY29ubisrKSB7XG4gICAgICAgICAgICAgICAgZGlmZmljdWx0aWVzW2Nvbm5lY3Rpb25zW2Nvbm5dLmJdID0gTWF0aC5taW4oZGlmZmljdWx0aWVzW2Nvbm5lY3Rpb25zW2Nvbm5dLmJdLCBkaWZmaWN1bHRpZXNbY29ubmVjdGlvbnNbY29ubl0uYV0gKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgaXRlbXMsIHdlYXBvbnMsIGFuZCBlbmVtaWVzXG4gICAgICAgIGNvbnN0IG1hcFBvaW50cyA9IER1bmdlb24uZmlsbFJvb21zKHJvb21zLCBkaWZmaWN1bHRpZXMsIHN0YXJ0Um9vbSk7XG4gICAgICAgIHJldHVybiBEdW5nZW9uLmNyZWF0ZU1hcChuZXcgUGFpcihkdW5nZW9uSGVpZ2h0LCBkdW5nZW9uV2lkdGgpLCByb29tcywgaGFsbHMsIG1hcFBvaW50cyk7XG4gICAgfVxuICAgIC8vIFNwbGl0IGEgem9uZSBpbnRvIHR3byBzbWFsbGVyIHpvbmVzLCB0aGVuIHJlY3Vyc2VcbiAgICBzdGF0aWMgc3BsaXQoem9uZSwgbWluWm9uZVNpemUpIHtcbiAgICAgICAgY29uc3Qgc21hbGxYID0gem9uZS54MiAtIHpvbmUueDEgPCAyICogbWluWm9uZVNpemU7XG4gICAgICAgIGNvbnN0IHNtYWxsWSA9IHpvbmUueTIgLSB6b25lLnkxIDwgMiAqIG1pblpvbmVTaXplO1xuICAgICAgICAvLyBJZiBhIHpvbmUgaXMgdG9vIHNtYWxsLCBkb24ndCBzcGxpdCBpdFxuICAgICAgICBpZiAoc21hbGxYICYmIHNtYWxsWSlcbiAgICAgICAgICAgIHJldHVybiBbem9uZV07XG4gICAgICAgIC8vIElmIGEgem9uZSBpcyB0b28gc21hbGwgaW4gb25lIGRpcmVjdGlvbiwgc3BsaXQgaXQgaW4gdGhlIG90aGVyIGRpcmVjdGlvblxuICAgICAgICBpZiAoc21hbGxYKVxuICAgICAgICAgICAgcmV0dXJuIER1bmdlb24uc3BsaXRZKHpvbmUsIG1pblpvbmVTaXplKTtcbiAgICAgICAgaWYgKHNtYWxsWSlcbiAgICAgICAgICAgIHJldHVybiBEdW5nZW9uLnNwbGl0WCh6b25lLCBtaW5ab25lU2l6ZSk7XG4gICAgICAgIC8vIElmIGEgem9uZSBpcyBiaWcgZW5vdWdoLCByYW5kb21seSBzcGxpdCBpdCBpbiB0aGUgWCBvciBZIGRpcmVjdGlvblxuICAgICAgICBpZiAoRHVuZ2Vvbi5yYW5kSW50KDAsIDIpID09IDApXG4gICAgICAgICAgICByZXR1cm4gRHVuZ2Vvbi5zcGxpdFkoem9uZSwgbWluWm9uZVNpemUpO1xuICAgICAgICByZXR1cm4gRHVuZ2Vvbi5zcGxpdFgoem9uZSwgbWluWm9uZVNpemUpO1xuICAgIH1cbiAgICAvLyBTcGxpdCBhIHpvbmUgaW4gdGhlIFggZGlyZWN0aW9uXG4gICAgc3RhdGljIHNwbGl0WCh6b25lLCBtaW5ab25lU2l6ZSkge1xuICAgICAgICAvLyBDaG9vc2UgYSByYW5kb20gc3BsaXQgcG9pbnRcbiAgICAgICAgY29uc3QgeFNwbGl0ID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueDEgKyBtaW5ab25lU2l6ZSwgem9uZS54MiAtIG1pblpvbmVTaXplICsgMSk7XG4gICAgICAgIC8vIENyZWF0ZSBzdWItem9uZXNcbiAgICAgICAgY29uc3Qgem9uZUEgPSBuZXcgUmVjdCh6b25lLngxLCB6b25lLnkxLCB4U3BsaXQsIHpvbmUueTIpO1xuICAgICAgICBjb25zdCB6b25lQiA9IG5ldyBSZWN0KHhTcGxpdCwgem9uZS55MSwgem9uZS54Miwgem9uZS55Mik7XG4gICAgICAgIC8vIFJlY3Vyc2UgYW5kIGNvbWJpbmUgbGlzdHNcbiAgICAgICAgcmV0dXJuIFsuLi5EdW5nZW9uLnNwbGl0KHpvbmVBLCBtaW5ab25lU2l6ZSksIC4uLkR1bmdlb24uc3BsaXQoem9uZUIsIG1pblpvbmVTaXplKV07XG4gICAgfVxuICAgIC8vIFNwbGl0IGEgem9uZSBpbiB0aGUgWSBkaXJlY3Rpb25cbiAgICBzdGF0aWMgc3BsaXRZKHpvbmUsIG1pblpvbmVTaXplKSB7XG4gICAgICAgIC8vIENob29zZSBhIHJhbmRvbSBzcGxpdCBwb2ludFxuICAgICAgICBjb25zdCB5U3BsaXQgPSBEdW5nZW9uLnJhbmRJbnQoem9uZS55MSArIG1pblpvbmVTaXplLCB6b25lLnkyIC0gbWluWm9uZVNpemUgKyAxKTtcbiAgICAgICAgLy8gQ3JlYXRlIHN1Yi16b25lc1xuICAgICAgICBjb25zdCB6b25lQSA9IG5ldyBSZWN0KHpvbmUueDEsIHpvbmUueTEsIHpvbmUueDIsIHlTcGxpdCk7XG4gICAgICAgIGNvbnN0IHpvbmVCID0gbmV3IFJlY3Qoem9uZS54MSwgeVNwbGl0LCB6b25lLngyLCB6b25lLnkyKTtcbiAgICAgICAgLy8gUmVjdXJzZSBhbmQgY29tYmluZSBsaXN0c1xuICAgICAgICByZXR1cm4gWy4uLkR1bmdlb24uc3BsaXQoem9uZUEsIG1pblpvbmVTaXplKSwgLi4uRHVuZ2Vvbi5zcGxpdCh6b25lQiwgbWluWm9uZVNpemUpXTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgcm9vbSBpbnNpZGUgb2YgYSB6b25lXG4gICAgc3RhdGljIGNyZWF0ZVJvb20oem9uZSwgbWluUm9vbVNpemUpIHtcbiAgICAgICAgbGV0IHgxID0gMDtcbiAgICAgICAgbGV0IHgyID0gMDtcbiAgICAgICAgbGV0IHkxID0gMDtcbiAgICAgICAgbGV0IHkyID0gMDtcbiAgICAgICAgLy8gUmFuZG9tbHkgZ2VuZXJhdGUgdHdvIHZhbGlkIHBvaW50cyBpbnNpZGUgb2YgdGhlIHpvbmVcbiAgICAgICAgLy8gVGhlIHBvaW50cyBtdXN0IGhhdmUgeDEgPCB4MiwgeTEgPCB5MiwgYW5kIGhhdmUgYSBzaWRlIGxlbmd0aCBvZiBhdCBsZWFzdCBtaW5Sb29tU2l6ZVxuICAgICAgICB3aGlsZSAoeDIgLSB4MSA8IG1pblJvb21TaXplIHx8IHkyIC0geTEgPCBtaW5Sb29tU2l6ZSkge1xuICAgICAgICAgICAgeDEgPSBEdW5nZW9uLnJhbmRJbnQoem9uZS54MSArIDEsIHpvbmUueDIpO1xuICAgICAgICAgICAgeDIgPSBEdW5nZW9uLnJhbmRJbnQoem9uZS54MSArIDEsIHpvbmUueDIpO1xuICAgICAgICAgICAgeTEgPSBEdW5nZW9uLnJhbmRJbnQoem9uZS55MSArIDEsIHpvbmUueTIpO1xuICAgICAgICAgICAgeTIgPSBEdW5nZW9uLnJhbmRJbnQoem9uZS55MSArIDEsIHpvbmUueTIpO1xuICAgICAgICAgICAgaWYgKHgxID4geDIpXG4gICAgICAgICAgICAgICAgeDIgPSB4MTtcbiAgICAgICAgICAgIGlmICh5MSA+IHkyKVxuICAgICAgICAgICAgICAgIHkyID0geTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHgxLCB5MSwgeDIsIHkyKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUhhbGxzKHpvbmVzLCByb29tcykge1xuICAgICAgICBjb25zdCBoYWxscyA9IFtdO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBoYXNSaWdodCA9IFsuLi5BcnJheSh6b25lcy5sZW5ndGgpXS5tYXAoKHEpID0+IGZhbHNlKTtcbiAgICAgICAgY29uc3QgaGFzRG93biA9IFsuLi5BcnJheSh6b25lcy5sZW5ndGgpXS5tYXAoKHEpID0+IGZhbHNlKTtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggcGFpciBvZiB6b25lc1xuICAgICAgICBmb3IgKGxldCBmcm9tID0gMDsgZnJvbSA8IHpvbmVzLmxlbmd0aDsgZnJvbSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB0byA9IDA7IHRvIDwgem9uZXMubGVuZ3RoOyB0bysrKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZnJvbSByb29tIGFuZCB0byByb29tIHNoYXJlIGEgdmVydGljYWwgd2FsbFxuICAgICAgICAgICAgICAgIGlmICh6b25lc1tmcm9tXS54MiA9PSB6b25lc1t0b10ueDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGludmFsaWQgc2l6ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpvbmVzW3RvXS55MSA+PSByb29tc1tmcm9tXS55MilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vbXNbdG9dLnkxID49IHpvbmVzW2Zyb21dLnkyKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJhbmRvbWx5IGNob29zZSBhY2Nlc3MgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkxID0gRHVuZ2Vvbi5yYW5kSW50KHJvb21zW2Zyb21dLnkxICsgMSwgcm9vbXNbZnJvbV0ueTIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5MiA9IER1bmdlb24ucmFuZEludChyb29tc1t0b10ueTEgKyAxLCByb29tc1t0b10ueTIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeTEgPT0geTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRyYXcgc3RyYWlnaHQgaGFsbHdheVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdChyb29tc1tmcm9tXS54MiwgeTEsIHJvb21zW3RvXS54MSwgeTEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRyYXcgemlnIHphZyBoYWxsd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxscy5wdXNoKG5ldyBSZWN0KHJvb21zW2Zyb21dLngyLCB5MSwgem9uZXNbZnJvbV0ueDIsIHkxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxscy5wdXNoKG5ldyBSZWN0KHpvbmVzW2Zyb21dLngyLCBNYXRoLm1pbih5MSwgeTIpLCB6b25lc1tmcm9tXS54MiwgTWF0aC5tYXgoeTEsIHkyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdCh6b25lc1tmcm9tXS54MiwgeTIsIHJvb21zW3RvXS54MSwgeTIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIGhhbGx3YXlcbiAgICAgICAgICAgICAgICAgICAgaGFzUmlnaHRbZnJvbV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKG5ldyBQYWlyKGZyb20sIHRvKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2gobmV3IFBhaXIodG8sIGZyb20pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZnJvbSByb29tIGFuZCB0byByb29tIHNoYXJlIGEgaG9yaXpvbnRhbCB3YWxsXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoem9uZXNbZnJvbV0ueTIgPT0gem9uZXNbdG9dLnkxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBpbnZhbGlkIHNpemVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh6b25lc1t0b10ueDEgPj0gcm9vbXNbZnJvbV0ueDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb21zW3RvXS54MSA+PSB6b25lc1tmcm9tXS54MilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyByYW5kb21seSBjaG9vc2UgYWNjZXNzIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4MSA9IER1bmdlb24ucmFuZEludChyb29tc1tmcm9tXS54MSArIDEsIHJvb21zW2Zyb21dLngyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeDIgPSBEdW5nZW9uLnJhbmRJbnQocm9vbXNbdG9dLngxICsgMSwgcm9vbXNbdG9dLngyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgxID09IHgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHN0cmFpZ2h0IGhhbGx3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3QoeDEsIHJvb21zW2Zyb21dLnkyLCB4MSwgcm9vbXNbdG9dLnkxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHppZyB6YWcgaGFsbHdheVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdCh4MSwgcm9vbXNbZnJvbV0ueTIsIHgxLCB6b25lc1tmcm9tXS55MikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdChNYXRoLm1pbih4MSwgeDIpLCB6b25lc1tmcm9tXS55MiwgTWF0aC5tYXgoeDEsIHgyKSwgem9uZXNbZnJvbV0ueTIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3QoeDIsIHpvbmVzW3RvXS55MSwgeDIsIHJvb21zW3RvXS55MSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgaGFsbHdheVxuICAgICAgICAgICAgICAgICAgICBoYXNEb3duW2Zyb21dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChuZXcgUGFpcihmcm9tLCB0bykpO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKG5ldyBQYWlyKHRvLCBmcm9tKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGhhbGxzLCBjb25uZWN0aW9ucyB9O1xuICAgIH1cbiAgICAvLyBGaWxsIHJvb21zIHdpdGggd2VhcG9ucywgaXRlbXMsIGFuZCBlbmVtaWVzXG4gICAgc3RhdGljIGZpbGxSb29tcyhyb29tcywgZGlmZmljdWx0aWVzLCBzdGFydFJvb20pIHtcbiAgICAgICAgbGV0IG1heERpZmZpY3VsdHkgPSAwO1xuICAgICAgICBmb3IgKGxldCBxID0gMDsgcSA8IGRpZmZpY3VsdGllcy5sZW5ndGg7IHErKykge1xuICAgICAgICAgICAgaWYgKGRpZmZpY3VsdGllc1txXSA+IG1heERpZmZpY3VsdHkpXG4gICAgICAgICAgICAgICAgbWF4RGlmZmljdWx0eSA9IGRpZmZpY3VsdGllc1txXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICAgICAgbGV0IGl0ZW1zTGVmdCA9IE5VTV9JVEVNUyAtIDE7XG4gICAgICAgIGNvbnN0IHdlYXBvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBjb29yZGluYXRlIGlzIGZyZWUgdG8gdXNlXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrKHgsIHkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgY29vcmRzLmxlbmd0aDsgcSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3Jkc1txXS54ID09IHggJiYgY29vcmRzW3FdLnkgPT0geSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgYSByYW5kb20gY29vcmRpbmF0ZSBpbiBhIHJvb21cbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmQocm9vbSkge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gRHVuZ2Vvbi5yYW5kSW50KHJvb20ueDEgKyAxLCByb29tLngyKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gRHVuZ2Vvbi5yYW5kSW50KHJvb20ueTEgKyAxLCByb29tLnkyKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2soeCwgeSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgc3Bhd24gcm9vbVxuICAgICAgICBjb25zdCBzcGF3biA9IHJhbmRvbUNvb3JkKHJvb21zW3N0YXJ0Um9vbV0pO1xuICAgICAgICBjb29yZHMucHVzaChzcGF3bik7XG4gICAgICAgIC8vIEFkZCB3ZWFwb24gdG8gc3Bhd24gcm9vbVxuICAgICAgICBjb25zdCBjID0gcmFuZG9tQ29vcmQocm9vbXNbc3RhcnRSb29tXSk7XG4gICAgICAgIGNvb3Jkcy5wdXNoKGMpO1xuICAgICAgICB3ZWFwb25zLnB1c2goYyk7XG4gICAgICAgIC8vIEdlbmVyYXRlIGVuZW1pZXNcbiAgICAgICAgY29uc3QgZW5lbWllcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb29tID0gMDsgcm9vbSA8IHJvb21zLmxlbmd0aDsgcm9vbSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlbmVteSA9IDA7IGVuZW15IDwgZGlmZmljdWx0aWVzW3Jvb21dOyBlbmVteSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHJhbmRvbUNvb3JkKHJvb21zW3Jvb21dKTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICBlbmVtaWVzLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgaXRlbXNcbiAgICAgICAgbG9vcDogd2hpbGUgKGl0ZW1zTGVmdCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGRpZmZpY3VsdHkgPSAyOyBkaWZmaWN1bHR5IDw9IG1heERpZmZpY3VsdHk7IGRpZmZpY3VsdHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvb20gPSAwOyByb29tIDwgcm9vbXMubGVuZ3RoOyByb29tKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmZpY3VsdGllc1tyb29tXSAhPSBkaWZmaWN1bHR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtc0xlZnQgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIHdlYXBvbiBvciBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGlmIChEdW5nZW9uLnJhbmRJbnQoMCwgZGlmZmljdWx0eSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNMZWZ0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gcmFuZG9tQ29vcmQocm9vbXNbcm9vbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoRHVuZ2Vvbi5yYW5kSW50KDAsIDIpID8gd2VhcG9ucyA6IGl0ZW1zKS5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWFwb25zLCBpdGVtcywgZW5lbWllcywgc3Bhd24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVNYXAoZHVuZ2VvblNpemUsIHJvb21zLCBoYWxscywgbWFwUG9pbnRzKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IFsuLi5BcnJheShkdW5nZW9uU2l6ZS5hICsgMSldLm1hcCgocSkgPT4gWy4uLkFycmF5KGR1bmdlb25TaXplLmIgKyAxKV0ubWFwKCh3KSA9PiBNQVBfV0FMTCkpO1xuICAgICAgICAvLyBGaWxsIHJvb21zIHdpdGggZW1wdHkgc3BhY2VcbiAgICAgICAgZm9yIChsZXQgcm9vbSA9IDA7IHJvb20gPCByb29tcy5sZW5ndGg7IHJvb20rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHJvb21zW3Jvb21dLngxICsgMTsgeCA8IHJvb21zW3Jvb21dLngyOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gcm9vbXNbcm9vbV0ueTEgKyAxOyB5IDwgcm9vbXNbcm9vbV0ueTI7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXBbeF1beV0gPSBNQVBfRU1QVFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpbGwgaGFsbHMgd2l0aCBlbXB0eSBzcGFjZVxuICAgICAgICBmb3IgKGxldCBoYWxsID0gMDsgaGFsbCA8IGhhbGxzLmxlbmd0aDsgaGFsbCsrKSB7XG4gICAgICAgICAgICBpZiAoaGFsbHNbaGFsbF0ueDEgPT0gaGFsbHNbaGFsbF0ueDIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gaGFsbHNbaGFsbF0ueTE7IHkgPD0gaGFsbHNbaGFsbF0ueTI7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXBbaGFsbHNbaGFsbF0ueDFdW3ldID0gTUFQX0VNUFRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBoYWxsc1toYWxsXS54MTsgeCA8PSBoYWxsc1toYWxsXS54MjsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFt4XVtoYWxsc1toYWxsXS55MV0gPSBNQVBfRU1QVFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgIG1hcFttYXBQb2ludHMuc3Bhd24ueF1bbWFwUG9pbnRzLnNwYXduLnldID0gTUFQX1BMQVlFUjtcbiAgICAgICAgLy8gRHJhdyB3ZWFwb25zXG4gICAgICAgIGZvciAobGV0IHdlYXBvbiA9IDA7IHdlYXBvbiA8IG1hcFBvaW50cy53ZWFwb25zLmxlbmd0aDsgd2VhcG9uKyspIHtcbiAgICAgICAgICAgIG1hcFttYXBQb2ludHMud2VhcG9uc1t3ZWFwb25dLnhdW21hcFBvaW50cy53ZWFwb25zW3dlYXBvbl0ueV0gPSBNQVBfV0VBUE9OO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgaXRlbXNcbiAgICAgICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCBtYXBQb2ludHMuaXRlbXMubGVuZ3RoOyBpdGVtKyspIHtcbiAgICAgICAgICAgIG1hcFttYXBQb2ludHMuaXRlbXNbaXRlbV0ueF1bbWFwUG9pbnRzLml0ZW1zW2l0ZW1dLnldID0gTUFQX0lURU07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyBlbmVtaWVzXG4gICAgICAgIGZvciAobGV0IGVtZW55ID0gMDsgZW1lbnkgPCBtYXBQb2ludHMuZW5lbWllcy5sZW5ndGg7IGVtZW55KyspIHtcbiAgICAgICAgICAgIG1hcFttYXBQb2ludHMuZW5lbWllc1tlbWVueV0ueF1bbWFwUG9pbnRzLmVuZW1pZXNbZW1lbnldLnldID0gTUFQX0VORU1ZO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0aXRjaCBtYXAgdG9nZXRoZXJcbiAgICAgICAgcmV0dXJuIG1hcC5tYXAoKHJvdykgPT4gcm93LmpvaW4oJycpKS5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRJbnQobWluLCBtYXgpIHtcbiAgICAgICAgaWYgKG1pbiA9PSBtYXgpXG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICBpZiAobWluID4gbWF4KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZEludChtYXgsIG1pbik7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxufVxuY2xhc3MgUmVjdCB7XG4gICAgeDE7XG4gICAgeTE7XG4gICAgeDI7XG4gICAgeTI7XG4gICAgYXJlYTtcbiAgICBjb25zdHJ1Y3Rvcih4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICB0aGlzLngxID0geDE7XG4gICAgICAgIHRoaXMueTEgPSB5MTtcbiAgICAgICAgdGhpcy54MiA9IHgyO1xuICAgICAgICB0aGlzLnkyID0geTI7XG4gICAgICAgIHRoaXMuYXJlYSA9ICh0aGlzLngyIC0gdGhpcy54MSkgKiAodGhpcy55MiAtIHRoaXMueTEpO1xuICAgIH1cbn1cbmNsYXNzIFBhaXIge1xuICAgIGE7XG4gICAgYjtcbiAgICBjb25zdHJ1Y3RvcihhLCBiKSB7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgfVxufVxuY2xhc3MgUG9pbnQge1xuICAgIHg7XG4gICAgeTtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgdjMgfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCBLZXlMaXN0ZW5lciBmcm9tICcuL0tleUxpc3RlbmVyJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbnRpdGllcy9FbmVteSc7XG5pbXBvcnQgV2VhcG9uIGZyb20gJy4vZW50aXRpZXMvV2VhcG9uJztcbmltcG9ydCBJdGVtIGZyb20gJy4vZW50aXRpZXMvSXRlbSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vcmVuZGVyZXIvUmVuZGVyZXInO1xuaW1wb3J0IFBlcnNwZWN0aXZlQ2FtZXJhIGZyb20gJy4uL3JlbmRlcmVyL1BlcnNwZWN0aXZlQ2FtZXJhJztcbmltcG9ydCBDYW1lcmFDb250cm9sbGVyIGZyb20gJy4vQ2FtZXJhQ29udHJvbGxlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgR2FtZVBhbmVsIGZyb20gJy4uL3VpL2dhbWUvR2FtZVBhbmVsJztcbmV4cG9ydCB2YXIgR2FtZVN0YXRlO1xuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiV0FMS0lOR1wiXSA9IDBdID0gXCJXQUxLSU5HXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIklOVkVOVE9SWVwiXSA9IDFdID0gXCJJTlZFTlRPUllcIjtcbn0pKEdhbWVTdGF0ZSB8fCAoR2FtZVN0YXRlID0ge30pKTtcbnZhciBNb3ZlRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChNb3ZlRGlyZWN0aW9uKSB7XG4gICAgTW92ZURpcmVjdGlvbltNb3ZlRGlyZWN0aW9uW1wiRm9yd2FyZFwiXSA9IDBdID0gXCJGb3J3YXJkXCI7XG4gICAgTW92ZURpcmVjdGlvbltNb3ZlRGlyZWN0aW9uW1wiQmFja3dhcmRcIl0gPSAxXSA9IFwiQmFja3dhcmRcIjtcbiAgICBNb3ZlRGlyZWN0aW9uW01vdmVEaXJlY3Rpb25bXCJMZWZ0XCJdID0gMl0gPSBcIkxlZnRcIjtcbiAgICBNb3ZlRGlyZWN0aW9uW01vdmVEaXJlY3Rpb25bXCJSaWdodFwiXSA9IDNdID0gXCJSaWdodFwiO1xufSkoTW92ZURpcmVjdGlvbiB8fCAoTW92ZURpcmVjdGlvbiA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBncmlkO1xuICAgIHJlbmRlcmVyO1xuICAgIG1lc3NhZ2U7XG4gICAgZ2FtZVBhbmVsO1xuICAgIHBsYXllcjtcbiAgICBzdGF0ZTtcbiAgICBjYW1lcmE7XG4gICAgY2FtZXJhQ29udHJvbGxlcjtcbiAgICBrZXlMaXN0ZW5lcjtcbiAgICBkb1Jlc2V0Q2FtZXJhO1xuICAgIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlciA9IG5ldyBDYW1lcmFDb250cm9sbGVyKHRoaXMuY2FtZXJhLCAzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcihnbCwgdW5kZWZpbmVkLCB0aGlzLmNhbWVyYSk7XG4gICAgICAgIHRoaXMuZG9SZXNldENhbWVyYSA9IHRydWU7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgY2FtZXJhIGNvbnRyb2xsZXIgdXBkYXRlIHRvIHRoZSByZW5kZXJlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZFVwZGF0ZUNhbGxiYWNrKChkZWx0YVRpbWUpID0+IHRoaXMuY2FtZXJhQ29udHJvbGxlci51cGRhdGUoZGVsdGFUaW1lKSk7XG4gICAgICAgIC8vIFVwZGF0ZSBjYW1lcmEgYXNwZWN0IHJhdGlvXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkVXBkYXRlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy5yZW5kZXJlci5nbC5jYW52YXMud2lkdGggLyB0aGlzLnJlbmRlcmVyLmdsLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLnJlbmRlcmVyLnNjZW5lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmdyaWQuZ2V0UGxheWVyKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlci5tb3ZlVG8odGhpcy5wbGF5ZXIuY2FtZXJhVGFyZ2V0LmdldFdvcmxkUG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbiA9IFstNDUsIDE4MCwgMF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuV0FMS0lORztcbiAgICAgICAgdGhpcy5rZXlMaXN0ZW5lciA9IG5ldyBLZXlMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmtleUxpc3RlbmVyLmFkZExpc3RlbmVycyhbXG4gICAgICAgICAgICAvLyBNb3ZlIHBsYXllciB3aXRoICd3JywgJ2EnLCAncycsICdkJ1xuICAgICAgICAgICAgWyd3JywgKCkgPT4gdGhpcy5tb3ZlUGxheWVyKE1vdmVEaXJlY3Rpb24uRm9yd2FyZCldLFxuICAgICAgICAgICAgWydhJywgKCkgPT4gdGhpcy5tb3ZlUGxheWVyKE1vdmVEaXJlY3Rpb24uTGVmdCldLFxuICAgICAgICAgICAgWydzJywgKCkgPT4gdGhpcy5tb3ZlUGxheWVyKE1vdmVEaXJlY3Rpb24uQmFja3dhcmQpXSxcbiAgICAgICAgICAgIFsnZCcsICgpID0+IHRoaXMubW92ZVBsYXllcihNb3ZlRGlyZWN0aW9uLlJpZ2h0KV0sXG4gICAgICAgICAgICAvLyBPcGVuL2Nsb3NlIGludmVudG9yeSB3aXRoICdpJ1xuICAgICAgICAgICAgWydpJywgKCkgPT4gdGhpcy50b2dnbGVJbnZlbnRvcnkoKV0sXG4gICAgICAgICAgICAvLyBBdHRhY2sgRW5lbXlcbiAgICAgICAgICAgIFsncScsICgpID0+IHRoaXMuYXR0YWNrKCldLFxuICAgICAgICAgICAgLy8gU2VsZWN0IGludmVudG9yeSB3ZWFwb24vaXRlbSB3aXRoICcxJy0nOSdcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBbJ0RpZ2l0MScsICdEaWdpdDInLCAnRGlnaXQzJywgJ0RpZ2l0NCcsICdEaWdpdDUnLFxuICAgICAgICAgICAgICAgICAgICAnRGlnaXQ2JywgJ0RpZ2l0NycsICdEaWdpdDgnLCAnRGlnaXQ5J10sXG4gICAgICAgICAgICAgICAgKHsga2V5IH0pID0+IHRoaXMuc2VsZWN0RnJvbUludmVudG9yeShOdW1iZXIoa2V5KSAtIDEpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnXFxcXCcsICgpID0+IHRoaXMuZ3JpZC5nZW5lcmF0ZU1hcCgpXSxcbiAgICAgICAgICAgIFsnLCcsICgpID0+IHsgdGhpcy5kb1Jlc2V0Q2FtZXJhID0gIXRoaXMuZG9SZXNldENhbWVyYTsgfV0sXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIuYmluZEtleXModGhpcy5rZXlMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMua2V5TGlzdGVuZXIuc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICAgICAgdGhpcy5nYW1lUGFuZWwgPSBuZXcgR2FtZVBhbmVsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hZGRNZXNzYWdlKCdHYW1lIFN0YXJ0Jyk7XG4gICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgIC8vIEJlZ2luIHJlbmRlcmluZ1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEdhbWUoKSB7XG4gICAgICAgIHRoaXMua2V5TGlzdGVuZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnN0b3BSZW5kZXJpbmcoKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlKGhhbmRsZXI/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIC8vICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIoKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICBtb3ZlUGxheWVyKGRpcikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gR2FtZVN0YXRlLldBTEtJTkcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5Gb3J3YXJkOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vZGVsTm9kZS5sb2NhbFRyYW5zZm9ybS5yb3RhdGlvbiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLkJhY2t3YXJkOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vZGVsTm9kZS5sb2NhbFRyYW5zZm9ybS5yb3RhdGlvbiA9IFswLCAxODAsIDBdO1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLkxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW9kZWxOb2RlLmxvY2FsVHJhbnNmb3JtLnJvdGF0aW9uID0gWzAsIDkwLCAwXTtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlJpZ2h0OlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vZGVsTm9kZS5sb2NhbFRyYW5zZm9ybS5yb3RhdGlvbiA9IFswLCAtOTAsIDBdO1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHg6IGN1cnJlbnRYLCB5OiBjdXJyZW50WSB9ID0gdGhpcy5ncmlkLmdldFBvc2l0aW9uT2YodGhpcy5wbGF5ZXIpO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRYICsgZGVsdGFYLFxuICAgICAgICAgICAgeTogY3VycmVudFkgKyBkZWx0YVksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZW50aXR5LCBjb2xsaXNpb24gfSA9IHRoaXMuZ3JpZC5xdWVyeShuZXdQb3NpdGlvbik7XG4gICAgICAgIC8vIENoZWNrIGZvciBlbnRpdGllc1xuICAgICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVudGl0eS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgRW5lbXk6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5lbXkgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShgWW91IGJ1bXAgaW50byAke0dhbWUubm91blBocmFzZShlbmVteSl9ICR7ZW5lbXkuc3RyaW5nUmVwcmVzZW50YXRpb24oKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgV2VhcG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXBvbiA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGlja1VwV2VhcG9uKHdlYXBvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yZW1vdmVFbnRpdHkod2VhcG9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGBZb3UgcGljayB1cCAke0dhbWUubm91blBocmFzZSh3ZWFwb24pfWApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgdXAgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5waWNrVXBJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRW50aXR5KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYFlvdSBwaWNrIHVwICR7R2FtZS5ub3VuUGhyYXNlKGl0ZW0pfWApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGNvbGxpc2lvblxuICAgICAgICBpZiAoIWNvbGxpc2lvbikge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm1vdmVFbnRpdHkodGhpcy5wbGF5ZXIsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kb1Jlc2V0Q2FtZXJhKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDYW1lcmFQb3NpdGlvbiA9IHRoaXMucGxheWVyLmNhbWVyYVRhcmdldC5nZXRXb3JsZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIubW92ZVRvKG5ld0NhbWVyYVBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbiA9IFstNDUsIDE4MCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3N0VHVybigpO1xuICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgIH1cbiAgICBtb3ZlQ2FtZXJhKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IHRoaXMucmVuZGVyZXIuY2FtZXJhLnRyYW5zZm9ybTtcbiAgICAgICAgdjMuYWRkKHBvc2l0aW9uLCB0cmFuc2xhdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICAgIGF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IEdhbWVTdGF0ZS5XQUxLSU5HKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBTZWFyY2ggZm9yIGFuIGVuZW15IHdpdGhpbmcgdGhlIG5lYXJlc3QgZm91ciB0aWxlc1xuICAgICAgICBjb25zdCByYW5nZSA9IFswLCAtMSwgLTEsIDAsIDAsIDEsIDEsIDBdO1xuICAgICAgICBsZXQgZW5lbXk7XG4gICAgICAgIGNvbnN0IHsgeDogcGxheWVyWCwgeTogcGxheWVyWSB9ID0gdGhpcy5ncmlkLmdldFBvc2l0aW9uT2YodGhpcy5wbGF5ZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja1Bvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IHBsYXllclggKyByYW5nZVtpXSxcbiAgICAgICAgICAgICAgICB5OiBwbGF5ZXJZICsgcmFuZ2VbaSArIDFdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlBdChjaGVja1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkgJiYgZW50aXR5IGluc3RhbmNlb2YgRW5lbXkpIHtcbiAgICAgICAgICAgICAgICBlbmVteSA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoJ05vIEVuZW1pZXMgaW4gUmFuZ2UnKTtcbiAgICAgICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBsYXllci5lcXVpcHBlZFdlYXBvbikge1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKCdObyBXZWFwb24gRXF1aXBwZWQnKTtcbiAgICAgICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkuY29tYmF0VGltZXIgPSA3O1xuICAgICAgICAvLyBQbGF5ZXIgYXR0YWNrXG4gICAgICAgIGxldCByYW5kID0gMSArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA1KSk7XG4gICAgICAgIGNvbnN0IFNQID0gdGhpcy5wbGF5ZXIuc2tpbGwgKyByYW5kICsgdGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24uc2tpbGxCb251cztcbiAgICAgICAgaWYgKFNQID4gZW5lbXkuc2tpbGwpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjayBoaXRcbiAgICAgICAgICAgIGVuZW15LmhlYWx0aCAtPSB0aGlzLnBsYXllci5lcXVpcHBlZFdlYXBvbi5kYW1hZ2U7XG4gICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYCR7ZW5lbXkubmFtZX0gdG9vayAke3RoaXMucGxheWVyLmVxdWlwcGVkV2VhcG9uLmRhbWFnZX0gZGFtYWdlLiAke2VuZW15Lm5hbWV9IGhhcyAke01hdGgubWF4KGVuZW15LmhlYWx0aCwgMCl9IGhlYWx0aCByZW1haW5pbmdgKTtcbiAgICAgICAgICAgIGlmIChlbmVteS5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZW15IGRlZmVhdGVkXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2tpbGwgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRW50aXR5KGVuZW15KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYCR7ZW5lbXkubmFtZX0gaGFzIGJlZW4gZGVmZWF0ZWRgKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLmdldEVudGl0aWVzKCkuZW5lbWllcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnQWxsIEVuZW1pZXMgRGVmZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKCdZb3UgV2luJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludEdhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBdHRhY2sgbWlzc1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKCdBdHRhY2sgTWlzc2VkLiBObyBkYW1hZ2UgZGVhbHQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmVteSBhdHRhY2tcbiAgICAgICAgcmFuZCA9IDEgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNSkpO1xuICAgICAgICBjb25zdCBlbmVteVNQID0gZW5lbXkuc2tpbGwgKyByYW5kO1xuICAgICAgICBpZiAoZW5lbXlTUCA+IFNQKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2sgaGl0XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oZWFsdGggLT0gZW5lbXkuZGFtYWdlO1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGAke2VuZW15Lm5hbWV9IGRlYWxzICR7ZW5lbXkuZGFtYWdlfSBkYW1hZ2VgKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnWW91IERpZWQuXFxuR2FtZSBPdmVyLicpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFycmFjayBtaXNzXG4gICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYCR7ZW5lbXkubmFtZX0gbWlzc2VzLiBObyBkYW1hZ2UgZGVhbHRgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc3RUdXJuKCk7XG4gICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgfVxuICAgIHRvZ2dsZUludmVudG9yeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEdhbWVTdGF0ZS5JTlZFTlRPUlkpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGludmVudG9yeVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5XQUxLSU5HO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gT3BlbiBpbnZlbnRvcnlcbiAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnWW91IGxvb2sgYXQgeW91ciBpbnZlbnRvcnknKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuSU5WRU5UT1JZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgfVxuICAgIHNlbGVjdEZyb21JbnZlbnRvcnkoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IEdhbWVTdGF0ZS5JTlZFTlRPUlkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGlmIChpbmRleCA+PSB0aGlzLnBsYXllci5pbnZlbnRvcnkud2VhcG9ucy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMucGxheWVyLmludmVudG9yeS5pbnZlbnRvcnkubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjb25zdCB3ZWFwb24gPSB0aGlzLnBsYXllci5pbnZlbnRvcnkud2VhcG9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGludmVudG9yeU9iaiA9IHRoaXMucGxheWVyLmludmVudG9yeS5pbnZlbnRvcnlbaW5kZXhdO1xuICAgICAgICBpZiAoaW52ZW50b3J5T2JqIGluc3RhbmNlb2YgV2VhcG9uKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWFwb24gPSBpbnZlbnRvcnlPYmo7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24gPT09IHdlYXBvbikge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSArPSBgXCJZb3UgYWxyZWFkeSBoYXZlIHRoaXMgJHt3ZWFwb24ubmFtZX0gZXF1aXBwZWRcIlxcbmA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludEdhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXllci5lcXVpcHBlZFdlYXBvbiA9IHdlYXBvbjtcbiAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShgWW91IGVxdWlwICR7R2FtZS5ub3VuUGhyYXNlKHdlYXBvbil9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW52ZW50b3J5T2JqIGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGludmVudG9yeU9iajtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhlYWx0aCArPSBpdGVtLmVmZmVjdEhQO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2tpbGwgKz0gaXRlbS5lZmZlY3RTUDtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnVzZVVwSXRlbShpdGVtKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSArPSBgVXNlIEl0ZW06ICR7aXRlbS5uYW1lfSA6ICR7aXRlbS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zdFR1cm4oKTtcbiAgICAgICAgdGhpcy5wcmludEdhbWUoKTtcbiAgICB9XG4gICAgYWRkTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSArPSBgXCIke21lc3NhZ2V9XCJcXG5gO1xuICAgIH1cbiAgICBwb3N0VHVybigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmdldEVudGl0aWVzKCkuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xuICAgICAgICAgICAgZW5lbXkuY29tYmF0VGltZXIgLT0gMTtcbiAgICAgICAgICAgIGlmIChlbmVteS5jb21iYXRUaW1lciA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyB4OiBjdXJyZW50WCwgeTogY3VycmVudFkgfSA9IHRoaXMuZ3JpZC5nZXRQb3NpdGlvbk9mKGVuZW15KTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gWzAsIC0xLCAtMSwgMCwgMCwgMSwgMSwgMF07XG4gICAgICAgICAgICBjb25zdCByYW5kUG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKiAyO1xuICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogY3VycmVudFggKyByYW5nZVtyYW5kUG9zXSxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50WSArIHJhbmdlW3JhbmRQb3MgKyAxXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7IGVudGl0eSwgY29sbGlzaW9uIH0gPSB0aGlzLmdyaWQucXVlcnkobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKGVudGl0eSB8fCBjb2xsaXNpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5ncmlkLm1vdmVFbnRpdHkoZW5lbXksIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaW50R2FtZSgpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBVSVxuICAgICAgICB0aGlzLmdhbWVQYW5lbC51cGRhdGUoKTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAvLyBHcmlkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JpZC5zdHJpbmdSZXByZXNlbnRhdGlvbigpKTtcbiAgICAgICAgLy8gUGxheWVyIHN0YXRzXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLnN0cmluZ1JlcHJlc2VudGF0aW9uKCkpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24pIHtcbiAgICAgICAgICAgIC8vIEVxdXBwZWQgd2VhcG9uXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXF1aXBwZWQgd2VhcG9uOicsIHRoaXMucGxheWVyLmVxdWlwcGVkV2VhcG9uLnN0cmluZ1JlcHJlc2VudGF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIC8vIE1lc3NhZ2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gR2FtZVN0YXRlLklOVkVOVE9SWSkge1xuICAgICAgICAgICAgLy8gSW52ZW50b3J5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5pbnZlbnRvcnkuc3RyaW5nUmVwcmVzZW50YXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgfVxuICAgIHN0YXRpYyBub3VuUGhyYXNlKG9iamVjdCkge1xuICAgICAgICBpZiAoR2FtZS5pc1Zvd2VsKG9iamVjdC5uYW1lLmNoYXJBdCgwKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYW4gJHtvYmplY3QubmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgYSAke29iamVjdC5uYW1lfWA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1Zvd2VsKGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gJ2FlaW91Jy5zcGxpdCgnJykuaW5jbHVkZXMoY2hhcmFjdGVyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRmxvb3JUaWxlIGZyb20gJy4vdGlsZXMvRmxvb3JUaWxlJztcbmltcG9ydCBXYWxsVGlsZSBmcm9tICcuL3RpbGVzL1dhbGxUaWxlJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9lbnRpdGllcy9QbGF5ZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vZW50aXRpZXMvRW5lbXknO1xuaW1wb3J0IFdlYXBvbiBmcm9tICcuL2VudGl0aWVzL1dlYXBvbic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2VudGl0aWVzL0l0ZW0nO1xuaW1wb3J0IFNjZW5lTm9kZSBmcm9tICcuLi9yZW5kZXJlci9TY2VuZU5vZGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi9yZW5kZXJlci9UcmFuc2Zvcm0nO1xuaW1wb3J0IER1bmdlb24gZnJvbSAnLi9EdW5nZW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIHRpbGVzO1xuICAgIHBsYXllcjtcbiAgICBlbnRpdGllcztcbiAgICBlbnRpdHlMb29rdXA7XG4gICAgcG9zaXRpb25Mb29rdXA7XG4gICAgc2NlbmVOb2RlO1xuICAgIHNjZW5lO1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IHtcbiAgICAgICAgICAgIGVuZW1pZXM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgIHdlYXBvbnM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgIGl0ZW1zOiBuZXcgU2V0KCksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW50aXR5TG9va3VwID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb25Mb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVNYXAoKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uY2UgYWZ0ZXIgdGhlIG1hcCBoYXMgYmVlbiBzZXRcbiAgICBidWlsZER1bmdlb24oKSB7XG4gICAgICAgIC8vIFRPRE86IHVzZSBtb2RlbCBleHRlbnRzLCBub3JtYWxpemUgbW9kZWxzIHRvIGJlIHRoZSBzYW1lIHNpemUsIGFuZCB1c2VcbiAgICAgICAgLy8gdGhhdCBmb3IgdGhlIHRpbGVTaXplXG4gICAgICAgIGNvbnN0IHRpbGVTaXplID0gMS4wO1xuICAgICAgICAvLyBUT0RPOiByZW1vdmUgYWZ0ZXIgaGF2aW5nIG1vdmFibGUgY2FtZXJhXG4gICAgICAgIGNvbnN0IHpGYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLnRpbGVzLmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKHRpbGUsIHgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTm9kZS5hZGRDaGlsZCh0aWxlLm1vZGVsTm9kZSk7XG4gICAgICAgICAgICAgICAgdGlsZS5zZXRUcmFuc2Zvcm0obmV3IFRyYW5zZm9ybShbeCAqIHRpbGVTaXplLCAwLCB5ICogdGlsZVNpemUgKiB6RmFjdG9yXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRUaWxlcygpIHsgcmV0dXJuIHRoaXMudGlsZXM7IH1cbiAgICBnZXRQbGF5ZXIoKSB7IHJldHVybiB0aGlzLnBsYXllcjsgfVxuICAgIGdldEVudGl0aWVzKCkgeyByZXR1cm4gdGhpcy5lbnRpdGllczsgfVxuICAgIGdldFRpbGVBdCh7IHgsIHkgfSkgeyByZXR1cm4gdGhpcy50aWxlc1t5XVt4XTsgfVxuICAgIGdldEVudGl0eUF0KHsgeCwgeSB9KSB7IHJldHVybiB0aGlzLmVudGl0eUxvb2t1cFt5XVt4XTsgfVxuICAgIGdldFBvc2l0aW9uT2YoZW50aXR5KSB7IHJldHVybiB0aGlzLnBvc2l0aW9uTG9va3VwLmdldChlbnRpdHkpOyB9XG4gICAgZ2VuZXJhdGVNYXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5lbnRpdGllcyA9IHtcbiAgICAgICAgICAgICAgICBlbmVtaWVzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgd2VhcG9uczogbmV3IFNldCgpLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlMb29rdXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25Mb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lTm9kZS5yZW1vdmVTZWxmKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBuZXcgU2NlbmVOb2RlKCdHcmlkJyk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkTm9kZSh0aGlzLnNjZW5lTm9kZSk7XG4gICAgICAgIHRoaXMubG9hZEdyaWRGcm9tU3RyaW5nKER1bmdlb24uZ2VuZXJhdGUoMzUsIDM1LCA3KSk7XG4gICAgICAgIHRoaXMuYnVpbGREdW5nZW9uKCk7XG4gICAgfVxuICAgIHF1ZXJ5KHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGVBdChwb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0RW50aXR5QXQocG9zaXRpb24pO1xuICAgICAgICBjb25zdCBjb2xsaXNpb24gPSAoIXRpbGUgfHwgdGlsZS5pc0NvbGxpZGFibGUpIHx8IChlbnRpdHkgJiYgZW50aXR5LmlzQ29sbGlkYWJsZSk7XG4gICAgICAgIHJldHVybiB7IHRpbGUsIGVudGl0eSwgY29sbGlzaW9uIH07XG4gICAgfVxuICAgIC8vIElmIHRpbGVzIGlzIG51bGwsIHRoZW4gdGhlIGVudGl0aWVzIGFyZW4ndCBhZGRlZCBhIGNoaWxkcmVuIHRvIHRoZWlyXG4gICAgLy8gTW9kZWxOb2Rlcy4gSXQncyB1cCB0byB0aGUgY2FsbGVyIHRvIHJlbWVkeSB0aGF0LlxuICAgIGFkZEVudGl0eShlbnRpdHksIHsgeCwgeSB9KSB7XG4gICAgICAgIGlmIChlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gZW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBlbnRpdHkgdG8gY29ycmVzcG9uZGluZyBlbnRpdHkgc2V0XG4gICAgICAgIHRoaXMuZm9yU3VidHlwZU9mRW50aXR5KGVudGl0eSwgKGVudGl0eVN1YnR5cGUsIHNldCkgPT4ge1xuICAgICAgICAgICAgc2V0LmFkZChlbnRpdHlTdWJ0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJlY29yZCBlbnRpdHkncyBwb3NpdGlvbiBvbiBncmlkXG4gICAgICAgIHRoaXMuZW50aXR5TG9va3VwW3ldW3hdID0gZW50aXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwLnNldChlbnRpdHksIHsgeCwgeSB9KTtcbiAgICAgICAgaWYgKHRoaXMudGlsZXMpXG4gICAgICAgICAgICB0aGlzLnRpbGVzW3ldW3hdLm1vZGVsTm9kZS5hZGRDaGlsZChlbnRpdHkubW9kZWxOb2RlKTtcbiAgICB9XG4gICAgcmVtb3ZlRW50aXR5KGVudGl0eSkge1xuICAgICAgICAvLyBSZW1vdmUgZW50aXR5IGZyb20gY29ycmVzcG9uZGluZyBlbnRpdHkgc2V0XG4gICAgICAgIHRoaXMuZm9yU3VidHlwZU9mRW50aXR5KGVudGl0eSwgKGVudGl0eVN1YnR5cGUsIHNldCkgPT4ge1xuICAgICAgICAgICAgc2V0LmRlbGV0ZShlbnRpdHlTdWJ0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJlbW92ZSBlbnRpdHkncyBwb3NpdGlvbiBvbiBncmlkXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvbkxvb2t1cC5nZXQoZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlMb29rdXBbeV1beF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucG9zaXRpb25Mb29rdXAuZGVsZXRlKGVudGl0eSk7XG4gICAgICAgIGVudGl0eS5tb2RlbE5vZGUucmVtb3ZlU2VsZigpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbiAgICBtb3ZlRW50aXR5KGVudGl0eSwgeyB4OiBuZXdYLCB5OiBuZXdZIH0pIHtcbiAgICAgICAgLy8gQ2hhbmdlIGVudGl0eSdzIHBvc2l0aW9uIG9uIGdyaWRcbiAgICAgICAgY29uc3QgeyB4OiBvbGRYLCB5OiBvbGRZIH0gPSB0aGlzLnBvc2l0aW9uTG9va3VwLmdldChlbnRpdHkpO1xuICAgICAgICB0aGlzLmVudGl0eUxvb2t1cFtvbGRZXVtvbGRYXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbnRpdHlMb29rdXBbbmV3WV1bbmV3WF0gPSBlbnRpdHk7XG4gICAgICAgIHRoaXMucG9zaXRpb25Mb29rdXAuc2V0KGVudGl0eSwgeyB4OiBuZXdYLCB5OiBuZXdZIH0pO1xuICAgICAgICB0aGlzLnRpbGVzW25ld1ldW25ld1hdLm1vZGVsTm9kZS5hZGRDaGlsZChlbnRpdHkubW9kZWxOb2RlKTtcbiAgICB9XG4gICAgc3RyaW5nUmVwcmVzZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEZsb29ycyBhbmQgd2FsbHNcbiAgICAgICAgY29uc3QgdGV4dEFycmF5ID0gdGhpcy50aWxlcy5tYXAoKHRpbGVSb3cpID0+IHRpbGVSb3cubWFwKCh0aWxlKSA9PiB0aWxlLmNoYXJhY3RlcikpO1xuICAgICAgICAvLyBOb24tcGxheWVyIGVudGl0aWVzXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5lbnRpdGllcykuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICAgICAgICBzZXQuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFBvc2l0aW9uT2YoZW50aXR5KTtcbiAgICAgICAgICAgICAgICB0ZXh0QXJyYXlbeV1beF0gPSBlbnRpdHkuY2hhcmFjdGVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQbGF5ZXJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFBvc2l0aW9uT2YodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0ZXh0QXJyYXlbeV1beF0gPSBQbGF5ZXIuY2hhcmFjdGVyO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICB0ZXh0QXJyYXkuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQgKz0gJ1xcbic7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgbG9hZEdyaWRGcm9tU3RyaW5nKHN0cmluZykge1xuICAgICAgICB0aGlzLnRpbGVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKS5tYXAoKHN0cmluZ1JvdywgeSkgPT4gc3RyaW5nUm93LnNwbGl0KCcnKS5tYXAoKGNoYXJhY3RlciwgeCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlMb29rdXAucHVzaChbXSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUaWxlLmNoYXJhY3RlcjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9vclRpbGUoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFdhbGxUaWxlLmNoYXJhY3RlcjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXYWxsVGlsZSgpO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyLmNoYXJhY3RlcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFbnRpdHkobmV3IFBsYXllcigpLCB7IHgsIHkgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBFbmVteS5jaGFyYWN0ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRW50aXR5KG5ldyBFbmVteSgpLCB7IHgsIHkgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBXZWFwb24uY2hhcmFjdGVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVudGl0eShuZXcgV2VhcG9uKCksIHsgeCwgeSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9vclRpbGUoKTtcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW0uY2hhcmFjdGVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVudGl0eShuZXcgSXRlbSgpLCB7IHgsIHkgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9vclRpbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwLmZvckVhY2goKHsgeCwgeSB9LCBlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbeV1beF0ubW9kZWxOb2RlLmFkZENoaWxkKGVudGl0eS5tb2RlbE5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yU3VidHlwZU9mRW50aXR5KGVudGl0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgc3dpdGNoIChlbnRpdHkuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgRW5lbXk6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZW50aXR5LCB0aGlzLmVudGl0aWVzLmVuZW1pZXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBXZWFwb246XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZW50aXR5LCB0aGlzLmVudGl0aWVzLndlYXBvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJdGVtOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVudGl0eSwgdGhpcy5lbnRpdGllcy5pdGVtcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcbiAgICB3ZWFwb25zO1xuICAgIGludmVudG9yeTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53ZWFwb25zID0gW107XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgfVxuICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uKCkge1xuICAgICAgICAvLyBpZiAodGhpcy53ZWFwb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICByZXR1cm4gYHdlYXBvbnM6ICR7XG4gICAgICAgIC8vICAgICB0aGlzLndlYXBvbnNcbiAgICAgICAgLy8gICAgICAgLm1hcCgod2VhcG9uLCBpbmRleCkgPT4gYFxcbiAgJHtpbmRleCArIDF9LiAke3dlYXBvbi5zdHJpbmdSZXByZXNlbnRhdGlvbigpfWApXG4gICAgICAgIC8vICAgICAgIC5qb2luKClcbiAgICAgICAgLy8gICB9YDtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBJbnZlbnRvcnk6ICR7dGhpcy5pbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gYFxcbiAgJHtpbmRleCArIDF9LiAke2l0ZW0uc3RyaW5nUmVwcmVzZW50YXRpb24oKX1gKVxuICAgICAgICAgICAgICAgIC5qb2luKCl9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3dlYXBvbnM6IChubyB3ZWFwb25zKSc7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBLZXlQcmVzc1R5cGU7XG4oZnVuY3Rpb24gKEtleVByZXNzVHlwZSkge1xuICAgIEtleVByZXNzVHlwZVtLZXlQcmVzc1R5cGVbXCJET1dOXCJdID0gMF0gPSBcIkRPV05cIjtcbiAgICBLZXlQcmVzc1R5cGVbS2V5UHJlc3NUeXBlW1wiVVBcIl0gPSAxXSA9IFwiVVBcIjtcbn0pKEtleVByZXNzVHlwZSB8fCAoS2V5UHJlc3NUeXBlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUxpc3RlbmVyIHtcbiAgICBrZXlEb3duQ2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuICAgIGtleVVwQ2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuICAgIGtleURvd25IYW5kbGVyO1xuICAgIGtleVVwSGFuZGxlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChrZXlFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgY2FsbGJhY2sgZXhpc3RzIGZvciB0aGUgZ2l2ZW4ga2V5IG9yIGNvZGVcbiAgICAgICAgICAgIFtrZXlFdmVudC5rZXksIGtleUV2ZW50LmNvZGVdLmZpbmQoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleURvd25DYWxsYmFja3MuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW52b2tlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmtleURvd25DYWxsYmFja3MuZ2V0KGtleSkpKGtleUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmtleVVwSGFuZGxlciA9IChrZXlFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgY2FsbGJhY2sgZXhpc3RzIGZvciB0aGUgZ2l2ZW4ga2V5IG9yIGNvZGVcbiAgICAgICAgICAgIFtrZXlFdmVudC5rZXksIGtleUV2ZW50LmNvZGVdLmZpbmQoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleVVwQ2FsbGJhY2tzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludm9rZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5rZXlVcENhbGxiYWNrcy5nZXQoa2V5KSkoa2V5RXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFkZExpc3RlbmVyKGtleXMsIGNhbGxiYWNrLCBwcmVzc1R5cGUgPSBLZXlQcmVzc1R5cGUuRE9XTikge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBwcmVzc1R5cGUgPT09IEtleVByZXNzVHlwZS5ET1dOXG4gICAgICAgICAgICA/IHRoaXMua2V5RG93bkNhbGxiYWNrcyA6IHRoaXMua2V5VXBDYWxsYmFja3M7XG4gICAgICAgIC8vIEFkZCBjYWxsYmFjayB0byB0aGUgZ2l2ZW4ga2V5KHMpXG4gICAgICAgIFtrZXlzXS5mbGF0KCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkTGlzdGVuZXJzKGxpc3RlbmVycykge1xuICAgICAgICAvLyBBZGQgY2FsbGJhY2sgZm9yIGVhY2ggZ2l2ZW4ga2V5LWNhbGxiYWNrIHBhaXJcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKFtrZXlzLCBjYWxsYmFjaywgcHJlc3NUeXBlXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcihrZXlzLCBjYWxsYmFjaywgcHJlc3NUeXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwSGFuZGxlcik7XG4gICAgfVxuICAgIHN0b3BMaXN0ZW5pbmcoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBIYW5kbGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vcmVuZGVyZXIvTW9kZWwnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5jb25zdCBtb2RlbHMgPSB7XG4gICAgbWFnZ290OiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL01hZ2dvdC9tb2RlbC5qc29uJyksXG4gICAgc2xpbWVNb2xkOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL1NsaW1lTW9sZC9tb2RlbC5qc29uJyksXG4gICAgZ29ibGluOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL0dvYmxpbi9tb2RlbC5qc29uJyksXG4gICAgb3JrOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL09yay9tb2RlbC5qc29uJyksXG4gICAgdmFtcGlyZTogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9WYW1waXJlL21vZGVsLmpzb24nKSxcbn07XG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiY29uc2lzdGVudFwiXSAqL1xuY29uc3QgZW5lbWllcyA9IG5ldyBNYXAoW1xuICAgIFsnTWFnZ290Jywge1xuICAgICAgICAgICAgaGVhbHRoOiA0LCBza2lsbDogMCwgZGFtYWdlOiA0LCBtb2RlbDogbW9kZWxzLm1hZ2dvdCxcbiAgICAgICAgfV0sXG4gICAgWydTbGltZSBNb2xkJywge1xuICAgICAgICAgICAgaGVhbHRoOiA3LCBza2lsbDogMSwgZGFtYWdlOiAzLCBtb2RlbDogbW9kZWxzLnNsaW1lTW9sZCxcbiAgICAgICAgfV0sXG4gICAgWydHb2JsaW4nLCB7XG4gICAgICAgICAgICBoZWFsdGg6IDksIHNraWxsOiA0LCBkYW1hZ2U6IDUsIG1vZGVsOiBtb2RlbHMuZ29ibGluLFxuICAgICAgICB9XSxcbiAgICBbJ09yaycsIHtcbiAgICAgICAgICAgIGhlYWx0aDogMTEsIHNraWxsOiAyLCBkYW1hZ2U6IDcsIG1vZGVsOiBtb2RlbHMub3JrLFxuICAgICAgICB9XSxcbiAgICBbJ1ZhbXBpcmUnLCB7XG4gICAgICAgICAgICBoZWFsdGg6IDIwLCBza2lsbDogOSwgZGFtYWdlOiAxMCwgbW9kZWw6IG1vZGVscy52YW1waXJlLFxuICAgICAgICB9XSxcbl0pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBFbnRpdHkge1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIgPSAnZSc7XG4gICAgc3RhdGljIGlzQ29sbGlkYWJsZSA9IHRydWU7XG4gICAgLy8gbmFtZTogc3RyaW5nO1xuICAgIGhlYWx0aDtcbiAgICBza2lsbDtcbiAgICBkYW1hZ2U7XG4gICAgY29tYmF0VGltZXI7XG4gICAgY29uc3RydWN0b3IobmFtZSA9IEVuZW15LnJhbmRvbUVuZW15TmFtZSgpKSB7XG4gICAgICAgIHN1cGVyKGVuZW1pZXMuZ2V0KG5hbWUpLm1vZGVsLCBFbmVteS5jaGFyYWN0ZXIsIEVuZW15LmlzQ29sbGlkYWJsZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gZW5lbWllcy5nZXQobmFtZSk/LmhlYWx0aCA/PyAxO1xuICAgICAgICB0aGlzLnNraWxsID0gZW5lbWllcy5nZXQobmFtZSk/LnNraWxsID8/IDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZW5lbWllcy5nZXQobmFtZSk/LmRhbWFnZSA/PyAwO1xuICAgICAgICB0aGlzLmNvbWJhdFRpbWVyID0gMDtcbiAgICB9XG4gICAgc3RyaW5nUmVwcmVzZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiBgKEhQOiAke3RoaXMuaGVhbHRofSwgU1A6ICR7dGhpcy5za2lsbH0sIGRhbWFnZTogJHt0aGlzLmRhbWFnZX0pYDtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbUVuZW15TmFtZSgpIHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKGVuZW1pZXMua2V5cygpKTtcbiAgICAgICAgcmV0dXJuIG5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5hbWVzLmxlbmd0aCldO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XG4gICAgY2hhcmFjdGVyO1xuICAgIG5hbWU7XG4gICAgaXNDb2xsaWRhYmxlO1xuICAgIG1vZGVsTm9kZTtcbiAgICBzdHJpbmdSZXByZXNlbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgY2hhcmFjdGVyLCBpc0NvbGxpZGFibGUpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXIuY2hhckF0KDApO1xuICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSA9IGlzQ29sbGlkYWJsZTtcbiAgICAgICAgdGhpcy5tb2RlbE5vZGUgPSBtb2RlbC5jcmVhdGVNb2RlbE5vZGUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vcmVuZGVyZXIvTW9kZWwnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG4vLyBjb25zdCByYXRpb25Nb2RlbCA9IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvUmF0aW9uL21vZGVsLmpzb24nKTtcbmNvbnN0IG1vZGVscyA9IHtcbiAgICByYXRpb246IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvcmF0aW9uL21vZGVsLmpzb24nKSxcbiAgICBnb3VybWV0TWVhbDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9nb3VybWV0X21lYWwvbW9kZWwuanNvbicpLFxuICAgIHNpbHZlclJpbmc6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvc2lsdmVyX3JpbmcvbW9kZWwuanNvbicpLFxuICAgIGZvb2xzQ2FwOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL2Zvb2xzX2NhcC9tb2RlbC5qc29uJyksXG59O1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImNvbnNpc3RlbnRcIl0gKi9cbmNvbnN0IGl0ZW1zID0gbmV3IE1hcChbXG4gICAgWydSYXRpb25zJywge1xuICAgICAgICAgICAgZWZmZWN0SFA6IDUsIGVmZmVjdFNQOiAwLCBkZXNjcmlwdGlvbjogJ0dpdmUgNSBIUCcsIG1vZGVsOiBtb2RlbHMucmF0aW9uLFxuICAgICAgICB9XSxcbiAgICBbJ0dvdXJtZXQgTWVhbCcsIHtcbiAgICAgICAgICAgIGVmZmVjdEhQOiAxMCwgZWZmZWN0U1A6IDAsIGRlc2NyaXB0aW9uOiAnR2l2ZSAxMCBIUCcsIG1vZGVsOiBtb2RlbHMuZ291cm1ldE1lYWwsXG4gICAgICAgIH1dLFxuICAgIFsnU2lsdmVyIFJpbmcnLCB7XG4gICAgICAgICAgICBlZmZlY3RIUDogMCwgZWZmZWN0U1A6IDUsIGRlc2NyaXB0aW9uOiAnR2l2ZSA1IFNQJywgbW9kZWw6IG1vZGVscy5zaWx2ZXJSaW5nLFxuICAgICAgICB9XSxcbiAgICBbJ0Zvb2xcXCdzIENhcCcsIHtcbiAgICAgICAgICAgIGVmZmVjdEhQOiAxMCwgZWZmZWN0U1A6IC0xMCwgZGVzY3JpcHRpb246ICdHaXZlIDEwIEhQLCBSZW1vdmUgMTAgU1AnLCBtb2RlbDogbW9kZWxzLmZvb2xzQ2FwLFxuICAgICAgICB9XSxcbl0pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIEVudGl0eSB7XG4gICAgc3RhdGljIGNoYXJhY3RlciA9ICdpJztcbiAgICBzdGF0aWMgaXNDb2xsaWRhYmxlID0gZmFsc2U7XG4gICAgLy8gbmFtZTogc3RyaW5nO1xuICAgIGVmZmVjdEhQO1xuICAgIGVmZmVjdFNQO1xuICAgIGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBJdGVtLnJhbmRvbWl0ZW1OYW1lKCkpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMuZ2V0KG5hbWUpLm1vZGVsLCBJdGVtLmNoYXJhY3RlciwgSXRlbS5pc0NvbGxpZGFibGUpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmVmZmVjdEhQID0gaXRlbXMuZ2V0KG5hbWUpPy5lZmZlY3RIUCA/PyAwO1xuICAgICAgICB0aGlzLmVmZmVjdFNQID0gaXRlbXMuZ2V0KG5hbWUpPy5lZmZlY3RTUCA/PyAwO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbXMuZ2V0KG5hbWUpPy5kZXNjcmlwdGlvbiA/PyAnJztcbiAgICB9XG4gICAgc3RyaW5nUmVwcmVzZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IChFZmZlY3Q6ICR7dGhpcy5kZXNjcmlwdGlvbn0pYDtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbWl0ZW1OYW1lKCkge1xuICAgICAgICBjb25zdCBuYW1lcyA9IEFycmF5LmZyb20oaXRlbXMua2V5cygpKTtcbiAgICAgICAgcmV0dXJuIG5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5hbWVzLmxlbmd0aCldO1xuICAgIH1cbn1cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuLi9JbnZlbnRvcnknO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3JlbmRlcmVyL01vZGVsJztcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSAnLi4vLi4vcmVuZGVyZXIvU2NlbmVOb2RlJztcbmltcG9ydCB0b1JhZGlhbnMgZnJvbSAnLi4vLi4vdXRpbC9NYXRoJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vLi4vcmVuZGVyZXIvVHJhbnNmb3JtJztcbmNvbnN0IG1vZGVsID0gYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9QbGF5ZXIvbW9kZWwuanNvbicpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRW50aXR5IHtcbiAgICBzdGF0aWMgY2hhcmFjdGVyID0gJ0AnO1xuICAgIHN0YXRpYyBpc0NvbGxpZGFibGUgPSB0cnVlO1xuICAgIGhlYWx0aDtcbiAgICBza2lsbDtcbiAgICBpbnZlbnRvcnk7XG4gICAgZXF1aXBwZWRXZWFwb247XG4gICAgY2FtZXJhVGFyZ2V0O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBpbml0Q2FtRGlzdGFuY2UgPSA0O1xuICAgICAgICBjb25zdCBpbml0Q2FtQW5nbGUgPSA0NTtcbiAgICAgICAgY29uc3QgeyB4TGVuLCB5TGVuLCB6TGVuIH0gPSBtb2RlbC5leHRlbnRzO1xuICAgICAgICBzdXBlcihtb2RlbCwgUGxheWVyLmNoYXJhY3RlciwgUGxheWVyLmlzQ29sbGlkYWJsZSk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMjA7XG4gICAgICAgIHRoaXMuc2tpbGwgPSAwO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5lcXVpcHBlZFdlYXBvbiA9IG51bGw7XG4gICAgICAgIGxldCBtYXhMZW4gPSB4TGVuO1xuICAgICAgICBpZiAobWF4TGVuIDwgeUxlbilcbiAgICAgICAgICAgIG1heExlbiA9IHlMZW47XG4gICAgICAgIGlmIChtYXhMZW4gPCB6TGVuKVxuICAgICAgICAgICAgbWF4TGVuID0gekxlbjtcbiAgICAgICAgdGhpcy5tb2RlbE5vZGUubG9jYWxUcmFuc2Zvcm0uc2NhbGUgPSBbMSAvIG1heExlbiwgMSAvIG1heExlbiwgMSAvIG1heExlbl07XG4gICAgICAgIHRoaXMuY2FtZXJhVGFyZ2V0ID0gbmV3IFNjZW5lTm9kZSgnUGxheWVyIENhbWVyYSBUYXJnZXQnLCBuZXcgVHJhbnNmb3JtKFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBpbml0Q2FtRGlzdGFuY2UgKiBNYXRoLnNpbih0b1JhZGlhbnMoaW5pdENhbUFuZ2xlKSksXG4gICAgICAgICAgICAtaW5pdENhbURpc3RhbmNlICogTWF0aC5jb3ModG9SYWRpYW5zKGluaXRDYW1BbmdsZSkpLFxuICAgICAgICBdKSk7XG4gICAgICAgIC8vIEFzc3VtaW5nIFJheW1vbiBpcyBpbml0aWFsbHkgZmFjaW5nIGluIHRoZSAreiBkaXJlY3Rpb24uIFByYXkgdGhpcyBuZXZlclxuICAgICAgICAvLyBjaGFuZ2VzLlxuICAgICAgICB0aGlzLm1vZGVsTm9kZS5hZGRDaGlsZCh0aGlzLmNhbWVyYVRhcmdldCk7XG4gICAgfVxuICAgIHBpY2tVcFdlYXBvbih3ZWFwb24pIHtcbiAgICAgICAgLy8gdGhpcy5pbnZlbnRvcnkud2VhcG9ucy5wdXNoKHdlYXBvbik7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5LmludmVudG9yeS5wdXNoKHdlYXBvbik7XG4gICAgICAgIGlmICghdGhpcy5lcXVpcHBlZFdlYXBvbikge1xuICAgICAgICAgICAgdGhpcy5lcXVpcHBlZFdlYXBvbiA9IHdlYXBvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHJpbmdSZXByZXNlbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IGBIUDogJHt0aGlzLmhlYWx0aH0sIFNQOiAke3RoaXMuc2tpbGx9YDtcbiAgICAgICAgaWYgKHRoaXMuZXF1aXBwZWRXZWFwb24pIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBgKCR7dGhpcy5lcXVpcHBlZFdlYXBvbi5za2lsbEJvbnVzID49IDAgPyAnKycgOiAnJ30ke3RoaXMuZXF1aXBwZWRXZWFwb24uc2tpbGxCb251c30pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgICBwaWNrVXBJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkuaW52ZW50b3J5LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHVzZVVwSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbnZlbnRvcnkuaW52ZW50b3J5LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5LmludmVudG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9yZW5kZXJlci9Nb2RlbCc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmNvbnN0IG1vZGVscyA9IHtcbiAgICBkYWdnZXI6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvZGFnZ2VyL21vZGVsLmpzb24nKSxcbiAgICBjYXN0SXJvblBhbjogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9jYXN0X2lyb25fcGFuL21vZGVsLmpzb24nKSxcbiAgICB3YXJIYW1tZXI6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvd2FyX2hhbW1lci9tb2RlbC5qc29uJyksXG4gICAgaGF0Y2hldDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9oYXRjaGV0L21vZGVsLmpzb24nKSxcbiAgICBiYXR0bGVheGU6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvYmF0dGxlYXhlL21vZGVsLmpzb24nKSxcbiAgICBzd29yZDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9zd29yZC9tb2RlbC5qc29uJyksXG4gICAgYmF0b246IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvYmF0b24vbW9kZWwuanNvbicpLFxuICAgIGJhdHRsZVN0YWZmOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL2JhdHRsZV9zdGFmZi9tb2RlbC5qc29uJyksXG59O1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImNvbnNpc3RlbnRcIl0gKi9cbmNvbnN0IHdlYXBvbnMgPSBuZXcgTWFwKFtcbiAgICBbJ0RhZ2dlcicsIHsgZGFtYWdlOiAzLCBza2lsbEJvbnVzOiAwLCBtb2RlbDogbW9kZWxzLmRhZ2dlciB9XSxcbiAgICBbJ0Nhc3QgSXJvbiBQYW4nLCB7IGRhbWFnZTogNywgc2tpbGxCb251czogMSwgbW9kZWw6IG1vZGVscy5jYXN0SXJvblBhbiB9XSxcbiAgICBbJ1dhciBIYW1tZXInLCB7IGRhbWFnZTogMTIsIHNraWxsQm9udXM6IC0xLCBtb2RlbDogbW9kZWxzLndhckhhbW1lciB9XSxcbiAgICBbJ0hhdGNoZXQnLCB7IGRhbWFnZTogMywgc2tpbGxCb251czogNCwgbW9kZWw6IG1vZGVscy5oYXRjaGV0IH1dLFxuICAgIFsnQmF0dGxlYXhlJywgeyBkYW1hZ2U6IDEwLCBza2lsbEJvbnVzOiAyLCBtb2RlbDogbW9kZWxzLmJhdHRsZWF4ZSB9XSxcbiAgICBbJ1N3b3JkJywgeyBkYW1hZ2U6IDcsIHNraWxsQm9udXM6IDMsIG1vZGVsOiBtb2RlbHMuc3dvcmQgfV0sXG4gICAgWydCYXRvbicsIHsgZGFtYWdlOiAyLCBza2lsbEJvbnVzOiA3LCBtb2RlbDogbW9kZWxzLmJhdG9uIH1dLFxuICAgIFsnQmF0dGxlIFN0YWZmJywgeyBkYW1hZ2U6IDYsIHNraWxsQm9udXM6IDMsIG1vZGVsOiBtb2RlbHMuYmF0dGxlU3RhZmYgfV0sXG5dKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiBleHRlbmRzIEVudGl0eSB7XG4gICAgc3RhdGljIGNoYXJhY3RlciA9ICd3JztcbiAgICBzdGF0aWMgaXNDb2xsaWRhYmxlID0gZmFsc2U7XG4gICAgLy8gbmFtZTogc3RyaW5nO1xuICAgIGRhbWFnZTtcbiAgICBza2lsbEJvbnVzO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBXZWFwb24ucmFuZG9tV2VhcG9uTmFtZSgpKSB7XG4gICAgICAgIHN1cGVyKHdlYXBvbnMuZ2V0KG5hbWUpLm1vZGVsLCBXZWFwb24uY2hhcmFjdGVyLCBXZWFwb24uaXNDb2xsaWRhYmxlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSB3ZWFwb25zLmdldChuYW1lKT8uZGFtYWdlID8/IDA7XG4gICAgICAgIHRoaXMuc2tpbGxCb251cyA9IHdlYXBvbnMuZ2V0KG5hbWUpPy5za2lsbEJvbnVzID8/IDA7XG4gICAgfVxuICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSAoZGFtYWdlOiAke3RoaXMuZGFtYWdlfSwgc2tpbGwgYm9udXM6ICR7dGhpcy5za2lsbEJvbnVzfSlgO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZG9tV2VhcG9uTmFtZSgpIHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKHdlYXBvbnMua2V5cygpKTtcbiAgICAgICAgcmV0dXJuIG5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5hbWVzLmxlbmd0aCldO1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9yZW5kZXJlci9Nb2RlbCc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uLy4uL3JlbmRlcmVyL1RyYW5zZm9ybSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcbmNvbnN0IG1vZGVsVXJsID0gJy9hc3NldHMvRmxvb3IvbW9kZWwuanNvbic7XG5jb25zdCBmbG9vck1vZGVsID0gYXdhaXQgTW9kZWwubG9hZChtb2RlbFVybCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9vclRpbGUgZXh0ZW5kcyBUaWxlIHtcbiAgICBzdGF0aWMgdHlwZSA9ICdGbG9vclRpbGUnO1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIgPSAnLic7XG4gICAgc3RhdGljIGlzQ29sbGlkYWJsZSA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKSkge1xuICAgICAgICBzdXBlcihmbG9vck1vZGVsLCBGbG9vclRpbGUuY2hhcmFjdGVyLCBGbG9vclRpbGUuaXNDb2xsaWRhYmxlLCB0cmFuc2Zvcm0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vLi4vcmVuZGVyZXIvVHJhbnNmb3JtJztcbmV4cG9ydCBjbGFzcyBUaWxlIHtcbiAgICBzdGF0aWMgdHlwZSA9ICdUaWxlJztcbiAgICBjaGFyYWN0ZXI7XG4gICAgaXNDb2xsaWRhYmxlO1xuICAgIG1vZGVsTm9kZTtcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgY2hhcmFjdGVyLCBpc0NvbGxpZGFibGUsIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKSkge1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3Rlci5jaGFyQXQoMCk7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRhYmxlID0gaXNDb2xsaWRhYmxlO1xuICAgICAgICB0aGlzLm1vZGVsTm9kZSA9IG1vZGVsLmNyZWF0ZU1vZGVsTm9kZSh0cmFuc2Zvcm0pO1xuICAgIH1cbiAgICBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMubW9kZWxOb2RlLmxvY2FsVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9yZW5kZXJlci9Nb2RlbCc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uLy4uL3JlbmRlcmVyL1RyYW5zZm9ybSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcbmNvbnN0IG1vZGVsVXJsID0gJy9hc3NldHMvV2FsbC9tb2RlbC5qc29uJztcbmNvbnN0IHdhbGxNb2RlbCA9IGF3YWl0IE1vZGVsLmxvYWQobW9kZWxVcmwpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbFRpbGUgZXh0ZW5kcyBUaWxlIHtcbiAgICBzdGF0aWMgdHlwZSA9ICdXYWxsVGlsZSc7XG4gICAgc3RhdGljIGNoYXJhY3RlciA9ICd8JztcbiAgICBzdGF0aWMgaXNDb2xsaWRhYmxlID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgc3VwZXIod2FsbE1vZGVsLCBXYWxsVGlsZS5jaGFyYWN0ZXIsIFdhbGxUaWxlLmlzQ29sbGlkYWJsZSwgdHJhbnNmb3JtKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xuICAgIHRyYW5zZm9ybTtcbn1cbiIsImltcG9ydCB7IHYzIH0gZnJvbSAndHdnbC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvciB7XG4gICAgcjtcbiAgICBnO1xuICAgIGI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBSR0IgY29sb3IgZnJvbSBjb2xvciBjb21wb25lbnRzIHJlcHJlc2VudGVkIGJ5IGRlY2ltYWwgbnVtYmVyc1xuICAgICAqIGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWQgUmVkIGNvbG9yIGNvbXBvbmVudCBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAgICogQHBhcmFtIGdyZWVuIEdyZWVuIGNvbG9yIGNvbXBvbmVudCBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAgICogQHBhcmFtIGJsdWUgQmx1ZSBjb2xvciBjb21wb25lbnQgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgICAgICAgaWYgKHJlZCA8IDAuMCB8fCByZWQgPiAxLjBcbiAgICAgICAgICAgIHx8IGdyZWVuIDwgMC4wIHx8IGdyZWVuID4gMS4wXG4gICAgICAgICAgICB8fCBibHVlIDwgMC4wIHx8IGJsdWUgPiAxLjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDb2xvciBjb21wb25lbnQgcmFuZ2UgKG91dHNpZGUgMC4wLTEuMCknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnIgPSByZWQ7XG4gICAgICAgIHRoaXMuZyA9IGdyZWVuO1xuICAgICAgICB0aGlzLmIgPSBibHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSBjb2xvci4gQ2FuIGJlIHByb3ZpZGVkIGluIGVpdGhlciBzaXggb3IgdGhyZWUtZGlnaXRcbiAgICAgKiBmb3JtYXRzLiBFeC4gJyMwMDk5Q0MnIG9yICcjMDlDJ1xuICAgICAqXG4gICAgICogQ2FwaXRhbGl6YXRpb24gaXMgaWdub3JlZFxuICAgICAqXG4gICAgICogQHBhcmFtIGhleCBIZXggc3RyaW5nIHJlcHJlc2VudGluZyBhIGNvbG9yXG4gICAgICovXG4gICAgc3RhdGljIGZyb21IZXgoaGV4KSB7XG4gICAgICAgIGlmIChoZXgubGVuZ3RoICE9PSA3ICYmIGhleC5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nIGFyZ3VtZW50IGluIENvbG9yIGNyZWF0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZFN0cmluZztcbiAgICAgICAgbGV0IGdyZWVuU3RyaW5nO1xuICAgICAgICBsZXQgYmx1ZVN0cmluZztcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgIHJlZFN0cmluZyA9IGhleC5zdWJzdHJpbmcoMSwgMyk7XG4gICAgICAgICAgICBncmVlblN0cmluZyA9IGhleC5zdWJzdHJpbmcoMywgNSk7XG4gICAgICAgICAgICBibHVlU3RyaW5nID0gaGV4LnN1YnN0cmluZyg1LCA3KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlZFN0cmluZyA9IGhleFsxXSArIGhleFsxXTtcbiAgICAgICAgICAgIGdyZWVuU3RyaW5nID0gaGV4WzJdICsgaGV4WzJdO1xuICAgICAgICAgICAgYmx1ZVN0cmluZyA9IGhleFszXSArIGhleFszXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWQgPSBwYXJzZUludChyZWRTdHJpbmcsIDE2KSAvIDI1NS4wO1xuICAgICAgICBjb25zdCBncmVlbiA9IHBhcnNlSW50KGdyZWVuU3RyaW5nLCAxNikgLyAyNTUuMDtcbiAgICAgICAgY29uc3QgYmx1ZSA9IHBhcnNlSW50KGJsdWVTdHJpbmcsIDE2KSAvIDI1NS4wO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgIH1cbiAgICB0b1ZlYzMoKSB7XG4gICAgICAgIHJldHVybiB2My5jcmVhdGUodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZyYW1lVGltZVBhbmVsIGZyb20gJy4uL3VpL0ZyYW1lVGltZVBhbmVsJztcbmltcG9ydCBTY2VuZVBhbmVsIGZyb20gJy4uL3VpL3NjZW5lLXBhbmVsL1NjZW5lUGFuZWwnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdVSSB7XG4gICAgcmVuZGVyZXI7XG4gICAgY29udGFpbmVyO1xuICAgIGZyYW1lVGltZVBhbmVsO1xuICAgIHNjZW5lUGFuZWw7XG4gICAgaXNWaXNpYmxlO1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBjb250YWluZXIsIGlzVmlzaWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUlucHV0Q2FsbGJhY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmIChldi5rZXkgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRvZ2dsZUlucHV0Q2FsbGJhY2spO1xuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRvZ2dsZUlucHV0Q2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5iaW5kRnJhbWVUaW1lUGFuZWwoKTtcbiAgICAgICAgdGhpcy5iaW5kU2NlbmVQYW5lbCgpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRnJhbWVUaW1lUGFuZWwoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTY2VuZVBhbmVsKCk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiaW5kRnJhbWVUaW1lUGFuZWwoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVUaW1lUGFuZWwgPSBuZXcgRnJhbWVUaW1lUGFuZWwodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mcmFtZVRpbWVQYW5lbC5lbGVtZW50KTtcbiAgICB9XG4gICAgdW5iaW5kRnJhbWVUaW1lUGFuZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZVBhbmVsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZnJhbWVUaW1lUGFuZWwuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZVBhbmVsLmNsZWFuVXAoKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVUaW1lUGFuZWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJpbmRTY2VuZVBhbmVsKCkge1xuICAgICAgICB0aGlzLnNjZW5lUGFuZWwgPSBuZXcgU2NlbmVQYW5lbCh0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zY2VuZVBhbmVsKTtcbiAgICB9XG4gICAgdW5iaW5kU2NlbmVQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NlbmVQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5zY2VuZVBhbmVsKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVQYW5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyB9IGZyb20gJ3R3Z2wuanMnO1xuLyoqXG4gKiBBIGxlc3MtZ2VuZXJhbGl6ZWQgTWVzaCByZXByZXNlbnRhdGlvbi4gRm9yIHNpbXBsaWNpdHkgd2UgYXJlIHN0aWNraW5nIHdpdGhcbiAqIGhhdmluZyAzIGF0dHJpYnV0ZXMgKHBvc2l0aW9uLCBub3JtYWwsIGFuZCB1dikgYWxvbmdzaWRlIHRoZSBpbmRpY2VzLlxuICpcbiAqIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIG1lYW50IHRvIGJlIHBhc3NlZCBpbnRvIGEgc2hhZGVyIHdpdGggc3RhbmRhcmQgbmFtZXNcbiAqIGFzIHNob3duLlxuICpcbiAqIFlvdSBtYXkgbGVhdmUgb3V0IG5vcm1hbCwgdXYsIG9yIGluZGljZXMuXG4gKlxuICogVGhlIG51bWJlciBvZiBjb21wb25lbnRzIGZvciB0aGVzZSBtZW1iZXJzIHNob3VsZCBhbHdheXMgYmU6XG4gKiAvLS0tLS0tLS0tLS0tLS1cXFxuICogfCBwb3NpdGlvbiB8IDMgfFxuICogfCBub3JtYWwgICB8IDMgfFxuICogfCB1diAgICAgICB8IDIgfFxuICogfCBpbmRpY2VzICB8IDMgfFxuICogXFwtLS0tLS0tLS0tLS0tLS9cbiAqXG4gKiBUaGlzIGlzIGEgY2xhc3MgdG8gZ2VuZXJhbGl6ZSBsYXRlciBvbiwgYXMgaXRzIGludmFyaWFudHMgYXJlIHN0aWZmLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoIHtcbiAgICBzdGF0aWMgTlVNX0NPTVBPTkVOVFNfUE9TSVRJT04gPSAzO1xuICAgIHN0YXRpYyBOVU1fQ09NUE9ORU5UU19OT1JNQUwgPSAzO1xuICAgIHN0YXRpYyBOVU1fQ09NUE9ORU5UU19VViA9IDI7XG4gICAgc3RhdGljIE5VTV9DT01QT05FTlRTX0lORElDRVMgPSAzO1xuICAgIHBvc2l0aW9uO1xuICAgIG5vcm1hbDtcbiAgICB1djtcbiAgICBpbmRpY2VzO1xuICAgIGJ1ZmZlckluZm87XG4gICAgbmFtZTtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgbm9ybWFsLCB1diwgaW5kaWNlcywgbmFtZSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLnV2ID0gdXY7XG4gICAgICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGNyZWF0ZUFycmF5cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbnVtQ29tcG9uZW50czogTWVzaC5OVU1fQ09NUE9ORU5UU19QT1NJVElPTixcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLih0aGlzLm5vcm1hbCAmJiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHM6IE1lc2guTlVNX0NPTVBPTkVOVFNfTk9STUFMLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLm5vcm1hbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi4odGhpcy51diAmJiB7XG4gICAgICAgICAgICAgICAgdXY6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtQ29tcG9uZW50czogTWVzaC5OVU1fQ09NUE9ORU5UU19VVixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy51dixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi4odGhpcy5pbmRpY2VzICYmIHtcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHM6IE1lc2guTlVNX0NPTVBPTkVOVFNfSU5ESUNFUyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5pbmRpY2VzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0QnVmZmVySW5mbyhnbCkge1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVySW5mbykge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIHRoaXMuY3JlYXRlQXJyYXlzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlckluZm87XG4gICAgfVxufVxuIiwiaW1wb3J0IFNjZW5lTm9kZSBmcm9tICcuL1NjZW5lTm9kZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc2hOb2RlIGV4dGVuZHMgU2NlbmVOb2RlIHtcbiAgICBtZXNoO1xuICAgIG1hdGVyaWFsO1xuICAgIHN0YXRpYyBudW1NZXNoTm9kZXMgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKSwgbWVzaCwgbWF0ZXJpYWwsIG5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE5hbWUgPSBgbWVzaE5vZGUjJHtNZXNoTm9kZS5udW1NZXNoTm9kZXN9YDtcbiAgICAgICAgbGV0IGNvbXB1dGVkTmFtZTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkTmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzaC5uYW1lKSB7XG4gICAgICAgICAgICBjb21wdXRlZE5hbWUgPSBgJHttZXNoLm5hbWV9LSR7ZGVmYXVsdE5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVkTmFtZSA9IGRlZmF1bHROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGNvbXB1dGVkTmFtZSwgdHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICBNZXNoTm9kZS5udW1NZXNoTm9kZXMgKz0gMTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNZXNoIGFzIFRIUkVFTWVzaCB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlcic7XG5pbXBvcnQgKiBhcyBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IE1lc2ggZnJvbSAnLi9NZXNoJztcbmltcG9ydCBNZXNoTm9kZSBmcm9tICcuL01lc2hOb2RlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFscy9fTWF0ZXJpYWxJbnRlcm5hbCc7XG5pbXBvcnQgTW9kZWxOb2RlIGZyb20gJy4vTW9kZWxOb2RlJztcbi8qKlxuICogQ2xhc3MgdGhhdCBob2xkcyBtb2RlbCBkYXRhLlxuICpcbiAqIEEgTW9kZWwgaW5zdGFuY2UgaXMgYSBzdHJ1Y3R1cmUgY29udGFpbmluZyB0aGUgbWVzaGVzIGFuZCBtYXRlcmlhbFxuICogdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byBlYWNoIG1lc2guXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIE1vZGVsIGluc3RhbmNlIGZvciBlYWNoIDNEIG1vZGVsIHlvdVxuICogd2FudCB0byBsb2FkIGluIHRoZSBnYW1lLiBZb3UgY2FuIHVzZSB0aGUgYGNyZWF0ZU1vZGVsTm9kZWBcbiAqIG1ldGhvZCB0byBnZW5lcmF0ZSBhIE1vZGVsTm9kZSB3aXRoIE1lc2hOb2RlIGNoaWxkcmVuIHJlYWR5XG4gKiBmb3IgcGxhY2VtZW50IGluIGEgc2NlbmUuXG4gKlxuICogTk9URTogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgT0JKIG1vZGVscy5cbiAqXG4gKiBUT0RPOiBTdXBwb3J0IG1vcmUgdGhhbiBqdXN0IE9CSiBtb2RlbHMgKHByb2JhYmx5IEdMVEYgLyBHTEIgZmlyc3QpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgICBzdGF0aWMgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgc3RhdGljIG51bU1vZGVscyA9IDA7XG4gICAgbWVzaGVzO1xuICAgIG1hdGVyaWFsO1xuICAgIGV4dGVudHM7XG4gICAgbmFtZTtcbiAgICBjb25zdHJ1Y3RvcihtZXNoZXMsIG1hdGVyaWFsLCBuYW1lKSB7XG4gICAgICAgIHRoaXMubWVzaGVzID0gbWVzaGVzO1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IHRoaXMuY2FsY01vZGVsRXh0ZW50cygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lID8/IGBtb2RlbCMke01vZGVsLm51bU1vZGVsc31gO1xuICAgICAgICBNb2RlbC5udW1Nb2RlbHMgKz0gMTtcbiAgICB9XG4gICAgY3JlYXRlTW9kZWxOb2RlKHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKSkge1xuICAgICAgICBjb25zdCBtb2RlbE5vZGUgPSBuZXcgTW9kZWxOb2RlKHRoaXMsIHRyYW5zZm9ybSwgdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5tZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzaE5vZGUgPSBuZXcgTWVzaE5vZGUobmV3IFRyYW5zZm9ybSgpLCBtZXNoLCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgICAgIG1vZGVsTm9kZS5hZGRDaGlsZChtZXNoTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kZWxOb2RlO1xuICAgIH1cbiAgICBjYWxjTW9kZWxFeHRlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5tZXNoZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtaW5YOiAwLFxuICAgICAgICAgICAgICAgIG1heFg6IDAsXG4gICAgICAgICAgICAgICAgbWluWTogMCxcbiAgICAgICAgICAgICAgICBtYXhZOiAwLFxuICAgICAgICAgICAgICAgIG1pblo6IDAsXG4gICAgICAgICAgICAgICAgbWF4WjogMCxcbiAgICAgICAgICAgICAgICB4TGVuOiAwLFxuICAgICAgICAgICAgICAgIHlMZW46IDAsXG4gICAgICAgICAgICAgICAgekxlbjogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pblggPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblswXTtcbiAgICAgICAgbGV0IG1heFggPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblswXTtcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblsxXTtcbiAgICAgICAgbGV0IG1heFkgPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblsxXTtcbiAgICAgICAgbGV0IG1pblogPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblsyXTtcbiAgICAgICAgbGV0IG1heFogPSB0aGlzLm1lc2hlc1swXS5wb3NpdGlvblsyXTtcbiAgICAgICAgdGhpcy5tZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi5mb3JFYWNoKCh2LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChqICUgMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IG1pblgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWCA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gbWF4WClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhYID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IG1pblkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gbWF4WSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhZID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IG1pblopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWiA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gbWF4WilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhaID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHNob3VsZG50IGhhcHBlbiBiZWNhdXNlLi4ubWF0aCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblgsXG4gICAgICAgICAgICBtYXhYLFxuICAgICAgICAgICAgbWluWSxcbiAgICAgICAgICAgIG1heFksXG4gICAgICAgICAgICBtaW5aLFxuICAgICAgICAgICAgbWF4WixcbiAgICAgICAgICAgIHhMZW46IG1heFggLSBtaW5YLFxuICAgICAgICAgICAgeUxlbjogbWF4WSAtIG1pblksXG4gICAgICAgICAgICB6TGVuOiBtYXhaIC0gbWluWixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZU1lc2hBcnJheShtb2RlbCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBtb2RlbDtcbiAgICAgICAgLy8gQ3JlYXRlIG1lc2hlcyBmb3IgdGhlIGZpcnN0IGxldmVsIG1lc2ggY2hpbGRyZW5cbiAgICAgICAgLy8gVE9ETzogKExvdyBQcmlvcml0eSkgU3VwcG9ydCBtdWx0aS1sZXZlbCBoaWVyYXJjaHkgb2YgbWVzaGVzPyBXZSBtaWdodCBub3QgbmVlZCB0aGlzXG4gICAgICAgIGNvbnN0IG1lc2hlcyA9IGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkIGluc3RhbmNlb2YgVEhSRUVNZXNoKVxuICAgICAgICAgICAgLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VvbWV0cnkgfSA9IGNoaWxkO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXNoKG5ldyBGbG9hdDMyQXJyYXkoZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmFycmF5KSwgbmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLmFycmF5KSwgbmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ3V2JykuYXJyYXkpLCBudWxsLCBjaGlsZC5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXNoZXM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBmcm9tVVJMKG1vZGVsX3VybCwgbWF0ZXJpYWwsIG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgICAgICBjb25zdCBsb2FkZWRNb2RlbCA9IGF3YWl0IGxvYWRlci5sb2FkQXN5bmMobW9kZWxfdXJsKTtcbiAgICAgICAgY29uc3QgbWVzaE5vZGVzID0gTW9kZWwuY3JlYXRlTWVzaEFycmF5KGxvYWRlZE1vZGVsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2RlbChtZXNoTm9kZXMsIG1hdGVyaWFsLCBuYW1lKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGxvYWQodXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWdSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgbW9kZWxDb25maWcgPSAoYXdhaXQgY29uZmlnUmVxdWVzdC5qc29uKCkpO1xuICAgICAgICBjb25zdCBkaXIgPSBQYXRoLmRpcm5hbWUodXJsKTtcbiAgICAgICAgLy8gTG9hZCB0aGUgbW9kZWwgZmlsZVxuICAgICAgICBjb25zdCBtb2RlbFVybCA9IFBhdGgucmVzb2x2ZShkaXIsIG1vZGVsQ29uZmlnLm1vZGVsKTtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgICAgICBjb25zdCBsb2FkZWRNb2RlbCA9IGF3YWl0IGxvYWRlci5sb2FkQXN5bmMobW9kZWxVcmwpO1xuICAgICAgICBjb25zdCBtZXNoZXMgPSBNb2RlbC5jcmVhdGVNZXNoQXJyYXkobG9hZGVkTW9kZWwpO1xuICAgICAgICAvLyBMb2FkIHRoZSBtYXRlcmlhbFxuICAgICAgICBjb25zdCBtYXRlcmlhbFVybCA9IFBhdGgucmVzb2x2ZShkaXIsIG1vZGVsQ29uZmlnLm1hdGVyaWFsKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBhd2FpdCBNYXRlcmlhbC5sb2FkKG1hdGVyaWFsVXJsKTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwobWVzaGVzLCBtYXRlcmlhbCwgbW9kZWxDb25maWcubmFtZSk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KHVybCwgbW9kZWwpO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNjZW5lTm9kZSBmcm9tICcuL1NjZW5lTm9kZSc7XG4vKipcbiAqIEEgc2ltcGxlIG5vZGUgdHlwZSB0aGF0IHJlcHJlc2VudHMgYSBzY2VuZSBpbnN0YW5jZSBvZiBhIE1vZGVsLlxuICpcbiAqIFRoaXMgbm9kZSB3aWxsIGNvbnRhaW4gTWVzaE5vZGUgY2hpbGRyZW4gdGhhdCB3ZXJlIGxvYWRlZCBmcm9tXG4gKiB0aGUgbWVzaGVzIG9mIHRoZSBNb2RlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWxOb2RlIGV4dGVuZHMgU2NlbmVOb2RlIHtcbiAgICBtb2RlbDtcbiAgICBzdGF0aWMgbnVtTW9kZWxOb2RlcyA9IDA7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHRyYW5zZm9ybSwgbmFtZSA9IGBtb2RlbE5vZGUjJHtNb2RlbE5vZGUubnVtTW9kZWxOb2Rlc31gKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgTW9kZWxOb2RlLm51bU1vZGVsTm9kZXMgKz0gMTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtNCB9IGZyb20gJ3R3Z2wuanMnO1xuaW1wb3J0IHRvUmFkaWFucyBmcm9tICcuLi91dGlsL01hdGgnO1xuaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNwZWN0aXZlQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgICBmb3Y7XG4gICAgYXNwZWN0O1xuICAgIHpOZWFyO1xuICAgIHpGYXI7XG4gICAgY29uc3RydWN0b3IodHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpLCBmb3YgPSA2MCwgYXNwZWN0ID0gMSwgek5lYXIgPSAwLjEsIHpGYXIgPSAxMDAwKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB0aGlzLmZvdiA9IGZvdjtcbiAgICAgICAgdGhpcy5hc3BlY3QgPSBhc3BlY3Q7XG4gICAgICAgIHRoaXMuek5lYXIgPSB6TmVhcjtcbiAgICAgICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB9XG4gICAgZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgY29uc3Qgdmlld01hdHJpeCA9IHRoaXMuZ2V0Vmlld01hdHJpeCgpO1xuICAgICAgICByZXR1cm4gbTQubXVsdGlwbHkocHJvamVjdGlvbk1hdHJpeCwgdmlld01hdHJpeCk7XG4gICAgfVxuICAgIGdldFByb2plY3Rpb25NYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBtNC5wZXJzcGVjdGl2ZSh0b1JhZGlhbnModGhpcy5mb3YpLCB0aGlzLmFzcGVjdCwgdGhpcy56TmVhciwgdGhpcy56RmFyKTtcbiAgICB9XG4gICAgZ2V0Vmlld01hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIG00LmludmVyc2UodGhpcy50cmFuc2Zvcm0uZ2V0TWF0cml4KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRyYXdCdWZmZXJJbmZvLCBtNCwgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSwgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMsIHNldFVuaWZvcm1zLCB9IGZyb20gJ3R3Z2wuanMnO1xuaW1wb3J0IE1lc2hOb2RlIGZyb20gJy4vTWVzaE5vZGUnO1xuaW1wb3J0IFBlcnNwZWN0aXZlQ2FtZXJhIGZyb20gJy4vUGVyc3BlY3RpdmVDYW1lcmEnO1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdsO1xuICAgIHNjZW5lO1xuICAgIGNhbWVyYTtcbiAgICByZW5kZXJlclVuaWZvcm1zO1xuICAgIGFuaW1hdGlvblJlcXVlc3RJZDtcbiAgICBwcmV2aW91c1RpbWU7XG4gICAgdXBkYXRlQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgIC8vIFRpbWUgaW4gbXMgdGhlIGxhc3QgZnJhbWUgdG9vayB0byByZW5kZXJcbiAgICBmcmFtZVRpbWUgPSAwO1xuICAgIGNvbnN0cnVjdG9yKGdsLCBzY2VuZSA9IG5ldyBTY2VuZSgpLCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoKSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIC8vIENvbnRlbnQgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjIsIDAuMDc1LCAwLjAsIDEuMCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcbiAgICB9XG4gICAgZHJhd1NjZW5lKHRpbWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlclVuaWZvcm1zID0ge1xuICAgICAgICAgICAgdV90aW1lOiB0aW1lICogMC4wMDEsXG4gICAgICAgICAgICB1X3Jlc29sdXRpb246IFt0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0XSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kcmF3Tm9kZSh0aGlzLnNjZW5lLnJvb3QsIG00LmlkZW50aXR5KCkpO1xuICAgIH1cbiAgICBkcmF3Tm9kZShub2RlLCBwYXJlbnRNYXRyaXgpIHtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGlzIG5vZGUncyBtYXRyaXhcbiAgICAgICAgbGV0IG1hdHJpeCA9IG5vZGUubG9jYWxUcmFuc2Zvcm0uZ2V0TWF0cml4KCk7XG4gICAgICAgIG1hdHJpeCA9IG00Lm11bHRpcGx5KHBhcmVudE1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgLy8gRHJhdyBzZWxmXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTWVzaE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgbWVzaCdzIGJ1ZmZlciBpbmZvXG4gICAgICAgICAgICBjb25zdCBidWZmZXJJbmZvID0gbm9kZS5tZXNoLmdldEJ1ZmZlckluZm8odGhpcy5nbCk7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmFtSW5mbyA9IG5vZGUubWF0ZXJpYWwuc2hhZGVyLmdldFByb2dyYW1JbmZvKHRoaXMuZ2wpO1xuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgICAgICAgICAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXModGhpcy5nbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICAgICAgICAgICAgLy8gU2V0IHVuaWZvcm1zXG4gICAgICAgICAgICBzZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgbm9kZS5tYXRlcmlhbC51bmlmb3Jtcyk7XG4gICAgICAgICAgICBzZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgdGhpcy5yZW5kZXJlclVuaWZvcm1zKTtcbiAgICAgICAgICAgIC8vIENvbXB1dGUgbWF0cml4XG4gICAgICAgICAgICBjb25zdCBjYW1lcmFNYXRyaXggPSB0aGlzLmNhbWVyYS5nZXRWaWV3UHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkTWF0cml4ID0gbTQubXVsdGlwbHkodGhpcy5jYW1lcmEuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoKSwgbWF0cml4KTtcbiAgICAgICAgICAgIGNvbnN0IGV5ZVBvc2l0aW9uID0gbTQuaW52ZXJzZSh0aGlzLmNhbWVyYS5nZXRWaWV3TWF0cml4KCkpLnNsaWNlKDEyLCAxNSk7XG4gICAgICAgICAgICBzZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywge1xuICAgICAgICAgICAgICAgIHVfbWF0cml4OiBwcm9qZWN0ZWRNYXRyaXgsXG4gICAgICAgICAgICAgICAgdV9tb2RlbE1hdHJpeDogbWF0cml4LFxuICAgICAgICAgICAgICAgIHVfZXllUG9zaXRpb246IGV5ZVBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHVfY2FtZXJhTWF0cml4OiBjYW1lcmFNYXRyaXgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFJlbmRlclxuICAgICAgICAgICAgZHJhd0J1ZmZlckluZm8odGhpcy5nbCwgYnVmZmVySW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyBhbGwgY2hpbGRyZW5cbiAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLmRyYXdOb2RlKGNoaWxkLCBtYXRyaXgpKTtcbiAgICB9XG4gICAgYWRkVXBkYXRlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVXBkYXRlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLnVwZGF0ZUNhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByZVJlbmRlcihkZWx0YVRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRlbHRhVGltZSkpO1xuICAgIH1cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aGlzLnByZXZpb3VzVGltZSA/IHRpbWUgLSB0aGlzLnByZXZpb3VzVGltZSA6IDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnByZVJlbmRlcihkZWx0YVRpbWUpO1xuICAgICAgICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKHRoaXMuZ2wuY2FudmFzKTtcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICB0aGlzLmRyYXdTY2VuZSh0aW1lKTtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmZyYW1lVGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25SZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKG5ld1RpbWUpID0+IHRoaXMucmVuZGVyKG5ld1RpbWUpKTtcbiAgICB9XG4gICAgc3RvcFJlbmRlcmluZygpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXF1ZXN0SWQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTY2VuZU5vZGUgZnJvbSAnLi9TY2VuZU5vZGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICAgIHJvb3Q7XG4gICAgY29uc3RydWN0b3Iocm9vdCA9IG5ldyBTY2VuZU5vZGUoKSkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgICAqIEFkZHMgYSBub2RlIHRvIHRoZSByb290IG5vZGUgb2YgdGhpcyBTY2VuZS5cbiAgICAgICAqXG4gICAgICAgKiBMYXp5IHdheSBvZiBkb2luZyBgc2NlbmUucm9vdC5hZGRDaGlsZCgpYC5cbiAgICAgICAqL1xuICAgIGFkZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgdjMgfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBub2RlcyB0aGF0IGluaGFiaXQgYSB7QGxpbmsgU2NlbmV9XG4gKlxuICogU2NlbmVOb2RlcyBjYW4gaGF2ZSBjaGlsZHJlbiBvZiB0aGUgc2FtZSB0eXBlLCB3aGljaCBmb3JtcyB0aGUgYmFzaXMgb2YgYSBTY2VuZSBHcmFwaFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU5vZGUge1xuICAgIC8vIFRoaXMgbm9kZSdzIHRyYW5zZm9ybSBpcyByZWxhdGl2ZSB0byBpdHMgcGFyZW50XG4gICAgbG9jYWxUcmFuc2Zvcm07XG4gICAgbmFtZTtcbiAgICAvLyBUaGVzZSBhcmUgcHJpdmF0ZSBiZWNhdXNlIHRoZXkgc2hvdWxkbid0IGJlIG1vZGlmaWVkIGJ5IHVzZXJzLlxuICAgIC8vIFBhcmVudCBpcyBzZXQgd2hlbiBhZGRpbmcgY2hpbGRyZW4gdG8gbm9kZXMuXG4gICAgcGFyZW50O1xuICAgIGNoaWxkcmVuO1xuICAgIC8vIENvdW50ZXIgZm9yIHRoZSBudW1iZXIgb2Ygc2NlbmUgbm9kZXMgY3JlYXRlZCB0aGlzIHNlc3Npb25cbiAgICBzdGF0aWMgc2NlbmVOb2RlcyA9IDA7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYWxUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgdGhpcy5sb2NhbFRyYW5zZm9ybSA9IGxvY2FsVHJhbnNmb3JtO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lID8/IGBzY2VuZU5vZGUjJHtTY2VuZU5vZGUuc2NlbmVOb2Rlc31gO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuICAgICAgICBTY2VuZU5vZGUuc2NlbmVOb2RlcyArPSAxO1xuICAgIH1cbiAgICBnZXRQYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICAgIH1cbiAgICBhZGRDaGlsZChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmFkZChub2RlKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW4uaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShub2RlKTtcbiAgICB9XG4gICAgcmVtb3ZlU2VsZigpIHtcbiAgICAgICAgdGhpcy5nZXRQYXJlbnQoKS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgLy8gVHJhdmVyc2VzIHRvIHJvb3QgaWYgYW5jZXN0b3IgaXMgbnVsbFxuICAgIGdldEFuY2VzdG9yUG9zaXRpb24oYW5jZXN0b3IpIHtcbiAgICAgICAgY29uc3Qgbm9kZVN0YWNrID0gW107XG4gICAgICAgIGxldCBub2RlID0gdGhpcztcbiAgICAgICAgLy8gVGhlIHJvb3Qgd2lsbCBhbHdheXMgYmUgZm91bmRcbiAgICAgICAgbGV0IGFuY2VzdG9yRm91bmQgPSBhbmNlc3RvciA9PT0gbnVsbDtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZVN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgICAgICBhbmNlc3RvckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmdldFBhcmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYW5jZXN0b3JGb3VuZClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyBUaGUgc3RhY2sgd2lsbCBhbHdheXMgYXQgbGVhc3QgaGF2ZSAxXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG5vZGVTdGFjay5wb3AoKS5sb2NhbFRyYW5zZm9ybS5wb3NpdGlvbjtcbiAgICAgICAgd2hpbGUgKG5vZGVTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZVN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB2My5hZGQocG9zaXRpb24sIG5vZGUubG9jYWxUcmFuc2Zvcm0ucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG4gICAgLy8gZ2V0QW5jZXN0b3JQb3NpdGlvbihhbmNlc3RvcjogU2NlbmVOb2RlKTogdjMuVmVjMyB7XG4gICAgLy8gICBjb25zdCBhbmNlc3Rvck1hdHJpeCA9IHRoaXMuZ2V0QW5jZXN0b3JNYXRyaXgoYW5jZXN0b3IpO1xuICAgIC8vICAgcmV0dXJuIGFuY2VzdG9yTWF0cml4LmZpbHRlcigodjogbnVtYmVyLCBpOiBudW1iZXIpID0+IGkgIT09IDAgJiYgKGkgKyAxKSAlIDQgPT09IDApO1xuICAgIC8vIH1cbiAgICAvLyBnZXRXb3JsZE1hdHJpeCgpOiBtNC5NYXQ0IHtcbiAgICAvLyAgIHJldHVybiB0aGlzLmdldEFuY2VzdG9yTWF0cml4KG51bGwpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIGdldFdvcmxkUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFuY2VzdG9yUG9zaXRpb24obnVsbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbUluZm8gfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCAqIGFzIFBhdGggZnJvbSAncGF0aCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXIge1xuICAgIHN0YXRpYyBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgICB2ZXJ0ZXhTaGFkZXI7XG4gICAgZnJhZ21lbnRTaGFkZXI7XG4gICAgcHJvZ3JhbUluZm87XG4gICAgY29uc3RydWN0b3IodmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IHZlcnRleFNoYWRlcjtcbiAgICAgICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGZyYWdtZW50U2hhZGVyO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZnJvbVVSTHModmVydGV4U2hhZGVyVVJMLCBmcmFnbWVudFNoYWRlclVSTCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHZlcnRleFNoYWRlclVSTCk7XG4gICAgICAgIGlmICghcmVxdWVzdC5vaykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkbid0IGZldGNoIHZlcnRleCBzaGFkZXIgZnJvbSBVUkw6ICR7dmVydGV4U2hhZGVyVVJMfSwgU3RhdHVzOiAke3JlcXVlc3Quc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcbiAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGZyYWdtZW50U2hhZGVyVVJMKTtcbiAgICAgICAgaWYgKCFyZXF1ZXN0Lm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGRuJ3QgZmV0Y2ggZnJhZ21lbnQgc2hhZGVyIGZyb20gVVJMOiAke2ZyYWdtZW50U2hhZGVyVVJMfSwgU3RhdHVzOiAke3JlcXVlc3Quc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuICAgICAgICByZXR1cm4gbmV3IFNoYWRlcih2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgUHJvZ3JhbUluZm8gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgY29tcGlsYXRpb24gb2YgdGhpcyBTaGFkZXIuXG4gICAgICogSWYgdGhlIFByb2dyYW1JbmZvIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0LCB0aGlzIHdpbGwgY3JlYXRlIGFuZCBjYWNoZSBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBnbCBXZWJHTCBjb250ZXh0XG4gICAgICogQHJldHVybnMgQ29tcGlsZWQgc2hhZGVyIGxpbmtlZCB0byBhIHByb2dyYW1cbiAgICAgKi9cbiAgICBnZXRQcm9ncmFtSW5mbyhnbCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbUluZm8pIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhnbCwgW3RoaXMudmVydGV4U2hhZGVyLCB0aGlzLmZyYWdtZW50U2hhZGVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3JhbUluZm87XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBsb2FkKHVybCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZS5oYXModXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IChhd2FpdCBjb25maWdSZXF1ZXN0Lmpzb24oKSk7XG4gICAgICAgIGNvbnN0IGRpciA9IFBhdGguZGlybmFtZSh1cmwpO1xuICAgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXJQYXRoID0gUGF0aC5yZXNvbHZlKGRpciwgY29uZmlnLnZlcnRleFNoYWRlcik7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyUGF0aCA9IFBhdGgucmVzb2x2ZShkaXIsIGNvbmZpZy5mcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGNvbnN0IHNoYWRlciA9IGF3YWl0IFNoYWRlci5mcm9tVVJMcyh2ZXJ0ZXhTaGFkZXJQYXRoLCBmcmFnbWVudFNoYWRlclBhdGgpO1xuICAgICAgICB0aGlzLmNhY2hlLnNldCh1cmwsIHNoYWRlcik7XG4gICAgICAgIHJldHVybiBzaGFkZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgdHdnbCBmcm9tICd0d2dsLmpzJztcbi8qKlxuICogQSBjbGFzcyBmb3IgY29uc3RydWN0aW5nIGEgdGV4dXR1cmUgYW5kIGluY2x1ZGUgaXQncyBkYXRhLFxuICogaXQgdXNlcyB0aGUgVGV4dHVyZUxvYWRlciBjbGFzcyBmcm9tIFRocmVlLmpzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlIHtcbiAgICBzdGF0aWMgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgbV90ZXh0dXJlO1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybCkge1xuICAgICAgICB0aGlzLm1fdGV4dHVyZSA9IHR3Z2wuY3JlYXRlVGV4dHVyZShjb250ZXh0LCB7XG4gICAgICAgICAgICBzcmM6IHVybCxcbiAgICAgICAgICAgIGZsaXBZOiAxLFxuICAgICAgICAgICAgd3JhcDogY29udGV4dC5SRVBFQVQsXG4gICAgICAgICAgICBtaW46IGNvbnRleHQuTkVBUkVTVF9NSVBNQVBfTElORUFSLFxuICAgICAgICAgICAgbWFnOiBjb250ZXh0LkxJTkVBUixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBsb2FkKHVybCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZS5oYXModXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFja3kgd2F5IG9mIGdldHRpbmcgdGhlIGNvbnRleHQgc28gd2UgZG9uJ3RcbiAgICAgICAgLy8gaGF2ZSB0byBwYXNzIGl0IGluIHRvIHRoZSBsb2FkIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF0uZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZShjb250ZXh0LCB1cmwpO1xuICAgICAgICB0aGlzLmNhY2hlLnNldCh1cmwsIHRleHR1cmUpO1xuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtNCwgdjMgfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCB0b1JhZGlhbnMgZnJvbSAnLi4vdXRpbC9NYXRoJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybSB7XG4gICAgcG9zaXRpb247XG4gICAgcm90YXRpb247XG4gICAgc2NhbGU7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMCwgMC4wXSksIHJvdGF0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDAuMF0pLCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEuMCwgMS4wLCAxLjBdKSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgICAqIFVzZXMgVFdHTCBtNCB0byBtdWx0aXBseSBzY2FsZSwgcm90YXRpb24sIGFuZCB0cmFuc2xhdGlvbiBtYXRyaWNlc1xuICAgICAgICogdG9nZXRoZXIgdG8gZ2V0IHRoZSBtYXRyaXggcmVwcmVzZW50aW5nIHRoaXMgbW9kZWwncyB0cmFuc2Zvcm0uXG4gICAgICAgKlxuICAgICAgICogVGhlIG9yZGVyIG9mIG9wZXJhdGlvbnMgaXMgaW1wb3J0YW50LiBXZSB3YW50IHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgICAqIE1hdHJpeCA9IFRyYW5zbGF0aW9uICogUm90YXRpb24gKiBTY2FsZSAqIElkZW50aXR5XG4gICAgICAgKi9cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgICAgIG00LnNjYWxlKG1hdHJpeCwgdGhpcy5zY2FsZSwgbWF0cml4KTtcbiAgICAgICAgbTQudHJhbnNsYXRlKG1hdHJpeCwgdGhpcy5wb3NpdGlvbiwgbWF0cml4KTtcbiAgICAgICAgbTQucm90YXRlWihtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzJdKSwgbWF0cml4KTtcbiAgICAgICAgbTQucm90YXRlWShtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzFdKSwgbWF0cml4KTtcbiAgICAgICAgbTQucm90YXRlWChtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzBdKSwgbWF0cml4KTtcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG4gICAgZ2V0Rm9yd2FyZFZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgZm9yd2FyZCA9IHYzLmNyZWF0ZSgwLCAwLCAtMSk7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgICAgIG00LnJvdGF0ZVoobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsyXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVkobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsxXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVgobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblswXSksIG1hdHJpeCk7XG4gICAgICAgIHJldHVybiBtNC50cmFuc2Zvcm1EaXJlY3Rpb24obWF0cml4LCBmb3J3YXJkKTtcbiAgICB9XG4gICAgZ2V0UmlnaHRWZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdjMuY3JlYXRlKDEsIDAsIDApO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgICAgICBtNC5yb3RhdGVaKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMl0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVZKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMV0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVYKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMF0pLCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4gbTQudHJhbnNmb3JtRGlyZWN0aW9uKG1hdHJpeCwgcmlnaHQpO1xuICAgIH1cbiAgICBnZXRVcFZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgdXAgPSB2My5jcmVhdGUoMCwgMSwgMCk7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgICAgIG00LnJvdGF0ZVoobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsyXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVkobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsxXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVgobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblswXSksIG1hdHJpeCk7XG4gICAgICAgIHJldHVybiBtNC50cmFuc2Zvcm1EaXJlY3Rpb24obWF0cml4LCB1cCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGF0aCBmcm9tICdwYXRoJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IE1hdGVyaWFsLCBtYXRlcmlhbExvYWRlck1hcCwgfSBmcm9tICcuL19NYXRlcmlhbEludGVybmFsJztcbmltcG9ydCBTaGFkZXIgZnJvbSAnLi4vU2hhZGVyJztcbmltcG9ydCBUZXh0dXJlIGZyb20gJy4uL1RleHR1cmUnO1xuY29uc3Qgc2hhZGVyVXJsID0gJy9hc3NldHMvc2hhZGVycy9hbGJlZG8vc2hhZGVyLmpzb24nO1xuY29uc3QgYWxiZWRvU2hhZGVyID0gYXdhaXQgU2hhZGVyLmxvYWQoc2hhZGVyVXJsKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgQWxiZWRvTWF0ZXJpYWwgZXh0ZW5kcyBNYXRlcmlhbCB7XG4gICAgc3RhdGljIHR5cGUgPSAnQWxiZWRvTWF0ZXJpYWwnO1xuICAgIHRleHR1cmU7XG4gICAgY29uc3RydWN0b3IodGV4dHVyZSkge1xuICAgICAgICBzdXBlcihhbGJlZG9TaGFkZXIsIHsgdV90ZXh0dXJlOiB0ZXh0dXJlIH0pO1xuICAgICAgICB0aGlzLnNldFRleHR1cmUodGV4dHVyZSk7XG4gICAgfVxuICAgIHNldFRleHR1cmUodGV4dHVyZSkge1xuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfdGV4dHVyZSA9IHRleHR1cmUubV90ZXh0dXJlO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbG9hZEZyb21Db25maWcodXJsLCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgZGlyID0gUGF0aC5kaXJuYW1lKHVybCk7XG4gICAgICAgIGNvbnN0IHRleHR1cmVVcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBjb25maWcudGV4dHVyZSk7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBhd2FpdCBUZXh0dXJlLmxvYWQodGV4dHVyZVVybCk7XG4gICAgICAgIHJldHVybiBuZXcgQWxiZWRvTWF0ZXJpYWwodGV4dHVyZSk7XG4gICAgfVxufVxubWF0ZXJpYWxMb2FkZXJNYXAuc2V0KCdBbGJlZG9NYXRlcmlhbCcsIEFsYmVkb01hdGVyaWFsLmxvYWRGcm9tQ29uZmlnKTtcbiIsImltcG9ydCB7IHYzIH0gZnJvbSAndHdnbC5qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBNYXRlcmlhbCwgbWF0ZXJpYWxMb2FkZXJNYXAgfSBmcm9tICcuL19NYXRlcmlhbEludGVybmFsJztcbmltcG9ydCBTaGFkZXIgZnJvbSAnLi4vU2hhZGVyJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvcic7XG5jb25zdCBzaGFkZXJVcmwgPSAnL2Fzc2V0cy9zaGFkZXJzL2Jhc2VDb2xvci9zaGFkZXIuanNvbic7XG5jb25zdCBiYXNlQ29sb3JTaGFkZXIgPSBhd2FpdCBTaGFkZXIubG9hZChzaGFkZXJVcmwpO1xuY29uc3QgREVGQVVMVF9VX0NPTE9SID0gdjMuY3JlYXRlKDAuMCwgMC4wLCAwLjApO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjbGFzcyBCYXNlQ29sb3JNYXRlcmlhbCBleHRlbmRzIE1hdGVyaWFsIHtcbiAgICBjb2xvcjtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvcikge1xuICAgICAgICBzdXBlcihiYXNlQ29sb3JTaGFkZXIsIHsgdV9jb2xvcjogREVGQVVMVF9VX0NPTE9SIH0pO1xuICAgICAgICB0aGlzLnNldENvbG9yKGNvbG9yKTtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfY29sb3IgPSBjb2xvci50b1ZlYzMoKTtcbiAgICB9XG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbG9hZEZyb21Db25maWcodXJsLCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBDb2xvci5mcm9tSGV4KGNvbmZpZy5jb2xvcik7XG4gICAgICAgIHJldHVybiBuZXcgQmFzZUNvbG9yTWF0ZXJpYWwoY29sb3IpO1xuICAgIH1cbn1cbm1hdGVyaWFsTG9hZGVyTWFwLnNldCgnQmFzZUNvbG9yTWF0ZXJpYWwnLCBCYXNlQ29sb3JNYXRlcmlhbC5sb2FkRnJvbUNvbmZpZyk7XG4iLCJpbXBvcnQgKiBhcyBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFNoYWRlciBmcm9tICcuLi9TaGFkZXInO1xuZXhwb3J0IGNvbnN0IG1hdGVyaWFsTG9hZGVyTWFwID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBhIGN1c3RvbSBNYXRlcmlhbC4gTWVhbnQgdG8gYmUgc3ViY2xhc3NlZCB0byBjcmVhdGVcbiAqIHRhaWxvcmVkIG1hdGVyaWFscyB0aGF0IGFyZSBjdXN0b21pemVkIHZpYSBhIGZldyBleHBvc2VkIHVuaWZvcm1zLlxuICovXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xuICAgIHN0YXRpYyBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBzdGF0aWMgdHlwZSA9ICdNYXRlcmlhbCc7XG4gICAgc2hhZGVyO1xuICAgIHVuaWZvcm1zO1xuICAgIGNvbnN0cnVjdG9yKHNoYWRlciwgdW5pZm9ybXMpIHtcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBzaGFkZXI7XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB1bmlmb3JtcztcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGxvYWQodXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWdSZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb25maWcgPSAoYXdhaXQgY29uZmlnUmVxdWVzdC5qc29uKCkpO1xuICAgICAgICBpZiAoIW1hdGVyaWFsTG9hZGVyTWFwLmhhcyhtYXRlcmlhbENvbmZpZy50eXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtYXRlcmlhbCBsb2FkZXIgZm91bmQgZm9yIGdpdmVuIG1hdGVyaWFsIHR5cGUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGVyRnVuY3Rpb24gPSBtYXRlcmlhbExvYWRlck1hcC5nZXQobWF0ZXJpYWxDb25maWcudHlwZSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gYXdhaXQgbG9hZGVyRnVuY3Rpb24odXJsLCBtYXRlcmlhbENvbmZpZyk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KHVybCwgbWF0ZXJpYWwpO1xuICAgICAgICByZXR1cm4gbWF0ZXJpYWw7XG4gICAgfVxuICAgIC8vIENhbid0IHVzZSBSZXNvdXJjZVNjaGVtYSBhcyBjb25maWcgdHlwZSBoZXJlIGJlY2F1c2UgaXQgcHJldmVudHNcbiAgICAvLyBzdWJjbGFzc2VzIGZyb20gdXNpbmcgdGhlaXIgb3duIFJlc291cmNlU2NoZW1hIHR5cGUuID46KFxuICAgIHN0YXRpYyBhc3luYyBsb2FkRnJvbUNvbmZpZyh1cmwsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBtYXRlcmlhbENvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uc3QgZGlyID0gUGF0aC5kaXJuYW1lKHVybCk7XG4gICAgICAgIGNvbnN0IHNoYWRlclVybCA9IFBhdGgucmVzb2x2ZShkaXIsIG1hdGVyaWFsQ29uZmlnLnNoYWRlcik7XG4gICAgICAgIGNvbnN0IHNoYWRlciA9IGF3YWl0IFNoYWRlci5sb2FkKHNoYWRlclVybCk7XG4gICAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IG1hdGVyaWFsQ29uZmlnO1xuICAgICAgICByZXR1cm4gbmV3IE1hdGVyaWFsKHNoYWRlciwgdW5pZm9ybXMpO1xuICAgIH1cbn1cbm1hdGVyaWFsTG9hZGVyTWFwLnNldCgnTWF0ZXJpYWwnLCBNYXRlcmlhbC5sb2FkRnJvbUNvbmZpZyk7XG4iLCJpbXBvcnQgKiBhcyBQYXRoIGZyb20gJ3BhdGgnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgTWF0ZXJpYWwsIG1hdGVyaWFsTG9hZGVyTWFwLCB9IGZyb20gJy4vX01hdGVyaWFsSW50ZXJuYWwnO1xuaW1wb3J0IFNoYWRlciBmcm9tICcuLi9TaGFkZXInO1xuaW1wb3J0IFRleHR1cmUgZnJvbSAnLi4vVGV4dHVyZSc7XG5jb25zdCBQQlJTaGFkZXIgPSBhd2FpdCBTaGFkZXIubG9hZCgnL2Fzc2V0cy9zaGFkZXJzL3Bici9zaGFkZXIuanNvbicpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUEJSTWF0ZXJpYWwgZXh0ZW5kcyBNYXRlcmlhbCB7XG4gICAgc3RhdGljIHR5cGUgPSAnUEJSTWF0ZXJpYWwnO1xuICAgIGFsYmVkbztcbiAgICBub3JtYWw7XG4gICAgbXJhbztcbiAgICBsaWdodFBvc2l0aW9ucztcbiAgICBsaWd0aENvbG9ycztcbiAgICBjb25zdHJ1Y3RvcihhbGJlZG8sIG5vcm1hbCwgbXJhbywgcExpZ2h0UG9zLCBwTGlnaHRDb2xzLCBkTGlnaHREaXIsIGRMaWdodENvbCkge1xuICAgICAgICBzdXBlcihQQlJTaGFkZXIsIHtcbiAgICAgICAgICAgIHVfYWxiZWRvOiBhbGJlZG8sXG4gICAgICAgICAgICB1X25vcm1hbDogbm9ybWFsLFxuICAgICAgICAgICAgdV9tcmFvOiBtcmFvLFxuICAgICAgICAgICAgdV9kTGlnaHREaXJlY3Rpb246IGRMaWdodERpcixcbiAgICAgICAgICAgIHVfZExpZ2h0Q29sb3I6IGRMaWdodENvbCxcbiAgICAgICAgICAgIHVfcExpZ2h0UG9zaXRpb25zOiBwTGlnaHRQb3MsXG4gICAgICAgICAgICB1X3BMaWdodENvbG9yczogcExpZ2h0Q29scyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0QWxiZWRvKGFsYmVkbyk7XG4gICAgICAgIHRoaXMuc2V0Tm9ybWFsKG5vcm1hbCk7XG4gICAgICAgIHRoaXMuc2V0TXJhbyhtcmFvKTtcbiAgICAgICAgdGhpcy5zZXRMaWdodHMocExpZ2h0UG9zLCBwTGlnaHRDb2xzKTtcbiAgICB9XG4gICAgc2V0QWxiZWRvKGFsYmVkbykge1xuICAgICAgICB0aGlzLmFsYmVkbyA9IGFsYmVkbztcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X2FsYmVkbyA9IGFsYmVkby5tX3RleHR1cmU7XG4gICAgfVxuICAgIHNldE5vcm1hbChub3JtYWwpIHtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgICAgIHRoaXMudW5pZm9ybXMudV9ub3JtYWwgPSBub3JtYWwubV90ZXh0dXJlO1xuICAgIH1cbiAgICBzZXRNcmFvKG1yYW8pIHtcbiAgICAgICAgdGhpcy5tcmFvID0gbXJhbztcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X21yYW8gPSBtcmFvLm1fdGV4dHVyZTtcbiAgICB9XG4gICAgc2V0TGlnaHRzKGxpZ2h0UG9zLCBsaWdodENvbHMpIHtcbiAgICAgICAgdGhpcy5saWdodFBvc2l0aW9ucyA9IGxpZ2h0UG9zO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfcExpZ2h0UG9zaXRpb25zID0gbGlnaHRQb3M7XG4gICAgICAgIHRoaXMubGlndGhDb2xvcnMgPSBsaWdodENvbHM7XG4gICAgICAgIHRoaXMudW5pZm9ybXMudV9wTGlnaHRDb2xvcnMgPSBsaWdodENvbHM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBsb2FkRnJvbUNvbmZpZyh1cmwsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBkaXIgPSBQYXRoLmRpcm5hbWUodXJsKTtcbiAgICAgICAgY29uc3QgYWxiZWRvVXJsID0gUGF0aC5yZXNvbHZlKGRpciwgY29uZmlnLmFsYmVkbyk7XG4gICAgICAgIGNvbnN0IGFsYmVkbyA9IGF3YWl0IFRleHR1cmUubG9hZChhbGJlZG9VcmwpO1xuICAgICAgICBjb25zdCBub3JtYWxVcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBjb25maWcubm9ybWFsKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gYXdhaXQgVGV4dHVyZS5sb2FkKG5vcm1hbFVybCk7XG4gICAgICAgIGNvbnN0IG1yYW9VcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBjb25maWcubXJhbyk7XG4gICAgICAgIGNvbnN0IG1yYW8gPSBhd2FpdCBUZXh0dXJlLmxvYWQobXJhb1VybCk7XG4gICAgICAgIGNvbnN0IHNjZW5lTGlnaHRpbmdQYXRoID0gJy9hc3NldHMvbGlnaHRpbmcuanNvbic7XG4gICAgICAgIGNvbnN0IGNvbmZpZ1JlcXVlc3QgPSBhd2FpdCBmZXRjaChzY2VuZUxpZ2h0aW5nUGF0aCk7XG4gICAgICAgIGNvbnN0IHNjZW5lTGlnaHRpbmdDb25maWcgPSAoYXdhaXQgY29uZmlnUmVxdWVzdC5qc29uKCkpO1xuICAgICAgICBjb25zdCB7IHBMaWdodFBvc2l0aW9ucywgcExpZ2h0Q29sb3JzLCBkTGlnaHREaXJlY3Rpb24sIGRMaWdodENvbG9yLCB9ID0gc2NlbmVMaWdodGluZ0NvbmZpZztcbiAgICAgICAgcmV0dXJuIG5ldyBQQlJNYXRlcmlhbChhbGJlZG8sIG5vcm1hbCwgbXJhbywgcExpZ2h0UG9zaXRpb25zLCBwTGlnaHRDb2xvcnMsIGRMaWdodERpcmVjdGlvbiwgZExpZ2h0Q29sb3IpO1xuICAgIH1cbn1cbm1hdGVyaWFsTG9hZGVyTWFwLnNldCgnUEJSTWF0ZXJpYWwnLCBQQlJNYXRlcmlhbC5sb2FkRnJvbUNvbmZpZyk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8vIFNlZSBodHRwczovL21lZGl1bS5jb20vdmlzdWFsLWRldmVsb3BtZW50L2hvdy10by1maXgtbmFzdHktY2lyY3VsYXItZGVwZW5kZW5jeS1pc3N1ZXMtb25jZS1hbmQtZm9yLWFsbC1pbi1qYXZhc2NyaXB0LXR5cGVzY3JpcHQtYTA0Yzk4N2NmMGRlXG4vLyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIHBhdHRlcm5cbmV4cG9ydCAqIGZyb20gJy4vTWF0ZXJpYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9BbGJlZG9NYXRlcmlhbCc7XG5leHBvcnQgKiBmcm9tICcuL0Jhc2VDb2xvck1hdGVyaWFsJztcbmV4cG9ydCAqIGZyb20gJy4vUEJSTWF0ZXJpYWwnO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL0dhbWUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgRGVidWdVSSBmcm9tICcuL3JlbmRlcmVyL0RlYnVnVUknO1xuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcbiAgICAvLyBDcmVhdGUgdGhlIGdhbWUgbG9naWMgaGFuZGxlclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShnbCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IGRlYnVnVUkgPSBuZXcgRGVidWdVSShnYW1lLnJlbmRlcmVyLCBhcHBXcmFwcGVyKTtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5zdG9wR2FtZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVUaW1lUGFuZWwge1xuICAgIHN0YXRpYyBjbGFzc05hbWUgPSAnZGVidWctcGFuZWwnO1xuICAgIHJlbmRlcmVyO1xuICAgIGVsZW1lbnQ7XG4gICAgZnJhbWVUaW1lVXBkYXRlSW50ZXJ2YWxJZDtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gRnJhbWVUaW1lUGFuZWwuY2xhc3NOYW1lO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGZyYW1lIHRpbWUgMzAgdGltZXMgcGVyIHNlY29uZFxuICAgICAgICB0aGlzLmZyYW1lVGltZVVwZGF0ZUludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gYEZyYW1lIHRpbWU6ICR7dGhpcy5yZW5kZXJlci5mcmFtZVRpbWV9IG1zYDtcbiAgICAgICAgfSwgMzAgLyAxMDAwKTtcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZyYW1lVGltZVVwZGF0ZUludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZnJhbWVUaW1lVXBkYXRlSW50ZXJ2YWxJZCk7XG4gICAgfVxufVxuIiwiY29uc3QgY29udHJvbHMgPSBbXG4gICAgeyBsYWJlbDogJ1cnLCBhY3Rpb246ICdNb3ZlIGZvcndhcmQnIH0sXG4gICAgeyBsYWJlbDogJ0EnLCBhY3Rpb246ICdNb3ZlIGxlZnQnIH0sXG4gICAgeyBsYWJlbDogJ1MnLCBhY3Rpb246ICdNb3ZlIGJhY2t3YXJkJyB9LFxuICAgIHsgbGFiZWw6ICdEJywgYWN0aW9uOiAnTW92ZSByaWdodCcgfSxcbiAgICB7IGxhYmVsOiAnUScsIGFjdGlvbjogJ0F0dGFjayBhZGphY2VudCB0aWxlcycgfSxcbiAgICB7IGxhYmVsOiAnSScsIGFjdGlvbjogJ1RvZ2dsZSBpbnZlbnRvcnknIH0sXG4gICAgeyBsYWJlbDogJzEtOScsIGFjdGlvbjogJ1VzZSBpbnZlbnRvcnkgc2xvdCBpdGVtJyB9LFxuICAgIHsgbGFiZWw6ICcuJywgYWN0aW9uOiAnVG9nZ2xlIGRlYnVnIG1vZGUnIH0sXG4gICAgeyBsYWJlbDogJywnLCBhY3Rpb246ICdUb2dnbGUgZnJlZSBjYW1lcmEnIH0sXG4gICAgeyBsYWJlbDogJ2gnLCBhY3Rpb246ICdGcmVlIGNhbWVyYSBtb3ZlIGxlZnQnIH0sXG4gICAgeyBsYWJlbDogJ2onLCBhY3Rpb246ICdGcmVlIGNhbWVyYSBtb3ZlIGJhY2t3YXJkJyB9LFxuICAgIHsgbGFiZWw6ICdrJywgYWN0aW9uOiAnRnJlZSBjYW1lcmEgbW92ZSBmb3J3YXJkJyB9LFxuICAgIHsgbGFiZWw6ICdsJywgYWN0aW9uOiAnRnJlZSBjYW1lcmEgbW92ZSByaWdodCcgfSxcbiAgICB7IGxhYmVsOiAnWycsIGFjdGlvbjogJ0ZyZWUgY2FtZXJhIG1vdmUgZG93bicgfSxcbiAgICB7IGxhYmVsOiAnXScsIGFjdGlvbjogJ0ZyZWUgY2FtZXJhIG1vdmUgdXAnIH0sXG4gICAgeyBsYWJlbDogJ1xcXFwnLCBhY3Rpb246ICdSZS1nZW5lcmF0ZSBtYXAgKG5vdCByZWNvbW1lbmRlZCknIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbHNQYW5lIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGdhbWU7XG4gICAgdGl0bGVFbGVtZW50O1xuICAgIHN0YXRzRWxlbWVudDtcbiAgICBlcXVpcHBlZFdlYXBvbkVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICdnYW1lLXBhbmUnO1xuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IENvbnRyb2xzUGFuZS5jcmVhdGVUaXRsZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRWxlbWVudHMgPSBjb250cm9scy5tYXAoKHsgbGFiZWwsIGFjdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8c3Ryb25nPiR7bGFiZWx9Ojwvc3Ryb25nPiAke2FjdGlvbn1gO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFwcGVuZCguLi5jb250cm9sc0VsZW1lbnRzKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRpdGxlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdwYW5lLXRpdGxlJztcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSAnQ29udHJvbHMnO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbnRyb2xzLXBhbmUnLCBDb250cm9sc1BhbmUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ1BhbmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgZ2FtZTtcbiAgICB0aXRsZUVsZW1lbnQ7XG4gICAgbWVzc2FnZUVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2dhbWUtcGFuZScsICdnYW1lLWxvZy1wYW5lJyk7XG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50ID0gR2FtZUxvZ1BhbmUuY3JlYXRlVGl0bGVFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlRWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVUaXRsZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAncGFuZS10aXRsZSc7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0dhbWUgTG9nJztcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmdhbWUubWVzc2FnZTtcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2dhbWUtbG9nLXBhbmUnLCBHYW1lTG9nUGFuZSk7XG4iLCJpbXBvcnQgQ29udHJvbHNQYW5lIGZyb20gJy4vQ29udHJvbHNQYW5lJztcbmltcG9ydCBHYW1lTG9nUGFuZSBmcm9tICcuL0dhbWVMb2dQYW5lJztcbmltcG9ydCBJbnZlbnRvcnlQYW5lIGZyb20gJy4vSW52ZW50b3J5UGFuZSc7XG5pbXBvcnQgUGxheWVyUGFuZSBmcm9tICcuL1BsYXllclBhbmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGdhbWU7XG4gICAgcGxheWVyUGFuZTtcbiAgICBjb250cm9sc1BhbmU7XG4gICAgaW52ZW50b3J5UGFuZTtcbiAgICBnYW1lTG9nUGFuZTtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyUGFuZSA9IG5ldyBQbGF5ZXJQYW5lKGdhbWUpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMucGxheWVyUGFuZSk7XG4gICAgICAgIHRoaXMuY29udHJvbHNQYW5lID0gbmV3IENvbnRyb2xzUGFuZShnYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xzUGFuZSk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5UGFuZSA9IG5ldyBJbnZlbnRvcnlQYW5lKGdhbWUpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaW52ZW50b3J5UGFuZSk7XG4gICAgICAgIHRoaXMuZ2FtZUxvZ1BhbmUgPSBuZXcgR2FtZUxvZ1BhbmUoZ2FtZSk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5nYW1lTG9nUGFuZSk7XG4gICAgICAgIC8vIE1vdW50IHNlbGZcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmFwcGVuZENoaWxkKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAvLyBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAvLyAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB0aGlzLmRpc3Bvc2UoKSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBsYXllclBhbmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5UGFuZS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lTG9nUGFuZS51cGRhdGUoKTtcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2dhbWUtcGFuZWwnLCBHYW1lUGFuZWwpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi9nYW1lL2VudGl0aWVzL0l0ZW0nO1xuaW1wb3J0IFdlYXBvbiBmcm9tICcuLi8uLi9nYW1lL2VudGl0aWVzL1dlYXBvbic7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuLi8uLi9nYW1lL0dhbWUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5UGFuZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBnYW1lO1xuICAgIHRpdGxlRWxlbWVudDtcbiAgICBpdGVtc1dyYXBwZXI7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICdnYW1lLXBhbmUnO1xuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IEludmVudG9yeVBhbmUuY3JlYXRlVGl0bGVFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLml0ZW1zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaXRlbXNXcmFwcGVyKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRpdGxlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdwYW5lLXRpdGxlJztcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSAnSW52ZW50b3J5JztcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNyZWF0ZUludmVudG9yeUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBpbnZlbnRvcnlFbGVtZW50cyA9IHRoaXMuZ2FtZS5wbGF5ZXIuaW52ZW50b3J5LmludmVudG9yeS5tYXAoKGVudGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudC5jbGFzc05hbWUgPSAnaW52ZW50b3J5LWVudGl0eS13cmFwcGVyJztcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChib2R5RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgV2VhcG9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VhcG9uID0gZW50aXR5O1xuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2luZGV4ICsgMX0uIChXZWFwb24pICR7d2VhcG9uLm5hbWV9PC9zdHJvbmc+YDtcbiAgICAgICAgICAgICAgICBib2R5RWxlbWVudC5pbm5lclRleHQgPSBgRGFtYWdlOiAke3dlYXBvbi5kYW1hZ2V9LCBTa2lsbCBCb251czogJHt3ZWFwb24uc2tpbGxCb251c31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW50aXR5IGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LmlubmVySFRNTCA9IGA8c3Ryb25nPiR7aW5kZXggKyAxfS4gKEl0ZW0pICR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgYm9keUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aXRlbS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJFbGVtZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGludmVudG9yeUVsZW1lbnRzO1xuICAgIH1cbiAgICBzZXRWaXNpYmlsaXR5KGlzVmlzaWJsZSkge1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFZpc2liaWxpdHkodGhpcy5nYW1lLnN0YXRlID09PSBHYW1lU3RhdGUuSU5WRU5UT1JZKTtcbiAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIucmVwbGFjZUNoaWxkcmVuKC4uLnRoaXMuY3JlYXRlSW52ZW50b3J5RWxlbWVudHMoKSk7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbnZlbnRvcnktcGFuZScsIEludmVudG9yeVBhbmUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyUGFuZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBnYW1lO1xuICAgIHRpdGxlRWxlbWVudDtcbiAgICBzdGF0c0VsZW1lbnQ7XG4gICAgZXF1aXBwZWRXZWFwb25FbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZ2FtZS1wYW5lJztcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBQbGF5ZXJQYW5lLmNyZWF0ZVRpdGxlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMudGl0bGVFbGVtZW50KTtcbiAgICAgICAgY29uc3Qgc3RhdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdGF0c0xhYmVsLmlubmVySFRNTCA9ICc8c3Ryb25nPlN0YXRzOjwvc3Ryb25nPic7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc3RhdHNMYWJlbCk7XG4gICAgICAgIHRoaXMuc3RhdHNFbGVtZW50ID0gUGxheWVyUGFuZS5jcmVhdGVTdGF0c0VsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGVxdWlwcGVkV2VhcG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXF1aXBwZWRXZWFwb25MYWJlbC5jbGFzc05hbWUgPSAncGxheWVyLXBhbmUtZXF1aXAtbGFiZWwnO1xuICAgICAgICBlcXVpcHBlZFdlYXBvbkxhYmVsLmlubmVySFRNTCA9ICc8c3Ryb25nPkVxdWlwcGVkIFdlYXBvbjo8L3N0cm9uZz4nO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVxdWlwcGVkV2VhcG9uTGFiZWwpO1xuICAgICAgICB0aGlzLmVxdWlwcGVkV2VhcG9uRWxlbWVudCA9IFBsYXllclBhbmUuY3JlYXRlRXF1aXBwZWRXZWFwb25FbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lcXVpcHBlZFdlYXBvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVGl0bGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3BhbmUtdGl0bGUnO1xuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9ICdQbGF5ZXInO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVN0YXRzRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdwbGF5ZXItcGFuZS1zdGF0cyc7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlRXF1aXBwZWRXZWFwb25FbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3BsYXllci1wYW5lLWVxdWlwcGVkLXdlYXBvbic7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdHNFbGVtZW50LmlubmVyVGV4dCA9IGAke3RoaXMuZ2FtZS5wbGF5ZXIuc3RyaW5nUmVwcmVzZW50YXRpb24oKX1gO1xuICAgICAgICBpZiAodGhpcy5nYW1lLnBsYXllci5lcXVpcHBlZFdlYXBvbikge1xuICAgICAgICAgICAgdGhpcy5lcXVpcHBlZFdlYXBvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5nYW1lLnBsYXllci5lcXVpcHBlZFdlYXBvbi5zdHJpbmdSZXByZXNlbnRhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcXVpcHBlZFdlYXBvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ05vbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwbGF5ZXItcGFuZScsIFBsYXllclBhbmUpO1xuIiwiaW1wb3J0IFNjZW5lUGFuZWxIZWFkZXIgZnJvbSAnLi9TY2VuZVBhbmVsSGVhZGVyJztcbmltcG9ydCBTY2VuZVBhbmVsTGlzdCBmcm9tICcuL1NjZW5lUGFuZWxMaXN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUGFuZWwgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcmVuZGVyZXI7XG4gICAgaGVhZGVyO1xuICAgIGxpc3Q7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBTY2VuZVBhbmVsSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2NlbmVQYW5lbExpc3QodGhpcy5yZW5kZXJlci5zY2VuZSk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5saXN0KTtcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NjZW5lLXBhbmVsJywgU2NlbmVQYW5lbCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVBhbmVsSGVhZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9ICdTY2VuZSBIaWVyYXJjaHknO1xuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NlbmUtcGFuZWwtaGVhZGVyJywgU2NlbmVQYW5lbEhlYWRlcik7XG4iLCJpbXBvcnQgU2NlbmVQYW5lbExpc3ROb2RlIGZyb20gJy4vU2NlbmVQYW5lbExpc3ROb2RlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUGFuZWxMaXN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHNjZW5lO1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZUxpc3QoKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLnNjZW5lLnJvb3QuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQobmV3IFNjZW5lUGFuZWxMaXN0Tm9kZShub2RlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NlbmUtcGFuZWwtbGlzdCcsIFNjZW5lUGFuZWxMaXN0KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUGFuZWxMaXN0Tm9kZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBsZXZlbDtcbiAgICBzY2VuZU5vZGU7XG4gICAgd3JhcHBlcjtcbiAgICBleHBhbmRCdXR0b247XG4gICAgY2hpbGRyZW5Ob2RlcztcbiAgICBpc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZU5vZGUsIGxldmVsID0gMCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lTm9kZSA9IHNjZW5lTm9kZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5sZXZlbCAqIDAuNX1yZW1gO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTmFtZSA9ICdub2RlLXdyYXBwZXInO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgIC8vIENyZWF0ZSBjb2xsYXBzaWJsZSBidXR0b25cbiAgICAgICAgdGhpcy5leHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5leHBhbmRCdXR0b24uY2xhc3NOYW1lID0gJ2V4cGFuZC1idXR0b24nO1xuICAgICAgICBpZiAoc2NlbmVOb2RlLmdldENoaWxkcmVuKCkuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQnV0dG9uLmlubmVyVGV4dCA9ICcrJztcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQnV0dG9uLmlubmVyVGV4dCA9ICcgJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMuZXhwYW5kQnV0dG9uKTtcbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGAke3RoaXMuc2NlbmVOb2RlLm5hbWV9IDogJHt0aGlzLnNjZW5lTm9kZS5jb25zdHJ1Y3Rvci5uYW1lfWA7XG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmQobGFiZWwpO1xuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmlzT3BlbiA/ICctJyA6ICcrJztcbiAgICAgICAgLy8gQ3JlYXRlIGNoaWxkcmVuIHdyYXBwZXJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20odGhpcy5zY2VuZU5vZGUuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuTm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IG5ldyBTY2VuZVBhbmVsTGlzdE5vZGUobm9kZSwgdGhpcy5sZXZlbCArIDEpKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKC4uLnRoaXMuY2hpbGRyZW5Ob2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbih0aGlzLndyYXBwZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzY2VuZS1wYW5lbC1saXN0LW5vZGUnLCBTY2VuZVBhbmVsTGlzdE5vZGUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwLjApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9