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
___CSS_LOADER_EXPORT___.push([module.id, "html, body { \r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    /* grid-template-columns: auto 25rem; */\r\n    height: 100%;\r\n}\r\n\r\ncanvas {\r\n    /* grid-row: 1;\r\n    grid-column: 1; */\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ngame-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 25rem 0 0;\r\n}\r\n\r\n.game-pane {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid white;\r\n    padding: .5rem;\r\n    margin: .5rem .5rem;\r\n}\r\n\r\n.game-log-pane {\r\n    margin-top: auto;\r\n}\r\n\r\n.pane-title {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.player-pane-stats {\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\nscene-panel {\r\n    /* grid-row: 1;\r\n    grid-column: 2; */\r\n    flex: 25rem 0 0;\r\n    max-width: 25rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\nscene-panel-header {\r\n    display: block;\r\n    text-align: center;\r\n    border-bottom: 1px solid white;\r\n    padding: 0.25rem;\r\n}\r\n\r\nscene-panel-list {\r\n    display: block;\r\n    margin: 0.5rem;\r\n    overflow: auto;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nscene-panel-list-node { \r\n    display: block;\r\n}\r\n\r\n.node-wrapper { \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: flex;\r\n}\r\n\r\n.expand-button { \r\n    width: 1rem;\r\n    user-select: none;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.debug-panel {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    padding: 3px;\r\n    color: rgb(0, 255, 0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI;qBACiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;qBACiB;IACjB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,oCAAoC;IACpC,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;AACzB","sourcesContent":["html, body { \r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: black;\r\n    color: white;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    /* grid-template-columns: auto 25rem; */\r\n    height: 100%;\r\n}\r\n\r\ncanvas {\r\n    /* grid-row: 1;\r\n    grid-column: 1; */\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ngame-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 25rem 0 0;\r\n}\r\n\r\n.game-pane {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid white;\r\n    padding: .5rem;\r\n    margin: .5rem .5rem;\r\n}\r\n\r\n.game-log-pane {\r\n    margin-top: auto;\r\n}\r\n\r\n.pane-title {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.player-pane-stats {\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\nscene-panel {\r\n    /* grid-row: 1;\r\n    grid-column: 2; */\r\n    flex: 25rem 0 0;\r\n    max-width: 25rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\nscene-panel-header {\r\n    display: block;\r\n    text-align: center;\r\n    border-bottom: 1px solid white;\r\n    padding: 0.25rem;\r\n}\r\n\r\nscene-panel-list {\r\n    display: block;\r\n    margin: 0.5rem;\r\n    overflow: auto;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nscene-panel-list-node { \r\n    display: block;\r\n}\r\n\r\n.node-wrapper { \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: flex;\r\n}\r\n\r\n.expand-button { \r\n    width: 1rem;\r\n    user-select: none;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.debug-panel {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    padding: 3px;\r\n    color: rgb(0, 255, 0);\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRrRDtBQUNKO0FBQy9CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFnQjtBQUMxQztBQUNBLHdCQUF3Qix1REFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDdkM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQWtCO0FBQ25ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCLElBQUksZ0NBQWdDO0FBQ3RGO0FBQ0EsWUFBWSxLQUFVLEVBQUUsRUFFZjtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbERlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL0NhbWVyYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvRHVuZ2Vvbi50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS9HYW1lLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL0dyaWQudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvSW52ZW50b3J5LnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL0tleUxpc3RlbmVyLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL2VudGl0aWVzL0VuZW15LnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL2VudGl0aWVzL0VudGl0eS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS9lbnRpdGllcy9JdGVtLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL2VudGl0aWVzL1BsYXllci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvZ2FtZS9lbnRpdGllcy9XZWFwb24udHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvdGlsZXMvRmxvb3JUaWxlLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9nYW1lL3RpbGVzL1RpbGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL2dhbWUvdGlsZXMvV2FsbFRpbGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL0NhbWVyYS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL0RlYnVnVUkudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL01lc2gudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL01lc2hOb2RlLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9Nb2RlbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvTW9kZWxOb2RlLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9QZXJzcGVjdGl2ZUNhbWVyYS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL1NjZW5lLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9TY2VuZU5vZGUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL1NoYWRlci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvVHJhbnNmb3JtLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9tYXRlcmlhbHMvQWxiZWRvTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL21hdGVyaWFscy9CYXNlQ29sb3JNYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvcmVuZGVyZXIvbWF0ZXJpYWxzL01hdGVyaWFsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy9yZW5kZXJlci9tYXRlcmlhbHMvUEJSTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3JlbmRlcmVyL21hdGVyaWFscy9fTWF0ZXJpYWxJbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvc2NyaXB0LnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9GcmFtZVRpbWVQYW5lbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvZ2FtZS9Db250cm9sc1BhbmUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL2dhbWUvR2FtZUxvZ1BhbmUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL2dhbWUvR2FtZVBhbmVsLnRzIiwid2VicGFjazovL3JvZ3VlNDcyMC8uL3NyYy91aS9nYW1lL0ludmVudG9yeVBhbmUudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL2dhbWUvUGxheWVyUGFuZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvc2NlbmUtcGFuZWwvU2NlbmVQYW5lbC50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvc2NlbmUtcGFuZWwvU2NlbmVQYW5lbEhlYWRlci50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdWkvc2NlbmUtcGFuZWwvU2NlbmVQYW5lbExpc3QudHMiLCJ3ZWJwYWNrOi8vcm9ndWU0NzIwLy4vc3JjL3VpL3NjZW5lLXBhbmVsL1NjZW5lUGFuZWxMaXN0Tm9kZS50cyIsIndlYnBhY2s6Ly9yb2d1ZTQ3MjAvLi9zcmMvdXRpbC9NYXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7IFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI1cmVtOyAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIC8qIGdyaWQtcm93OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbjogMTsgKi9cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZ2FtZS1wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDI1cmVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtcGFuZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbSAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbG9nLXBhbmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItcGFuZS1zdGF0cyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsIHtcXHJcXG4gICAgLyogZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyOyAqL1xcclxcbiAgICBmbGV4OiAyNXJlbSAwIDA7XFxyXFxuICAgIG1heC13aWR0aDogMjVyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuc2NlbmUtcGFuZWwtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zY2VuZS1wYW5lbC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsLWxpc3Qtbm9kZSB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vZGUtd3JhcHBlciB7IFxcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1idXR0b24geyBcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnVnLXBhbmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDVweDtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtxQkFDaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO3FCQUNpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7IFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI1cmVtOyAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIC8qIGdyaWQtcm93OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbjogMTsgKi9cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZ2FtZS1wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDI1cmVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtcGFuZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbSAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtbG9nLXBhbmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItcGFuZS1zdGF0cyB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsIHtcXHJcXG4gICAgLyogZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyOyAqL1xcclxcbiAgICBmbGV4OiAyNXJlbSAwIDA7XFxyXFxuICAgIG1heC13aWR0aDogMjVyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuc2NlbmUtcGFuZWwtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zY2VuZS1wYW5lbC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbnNjZW5lLXBhbmVsLWxpc3Qtbm9kZSB7IFxcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vZGUtd3JhcHBlciB7IFxcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1idXR0b24geyBcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnVnLXBhbmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDVweDtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB2MyB9IGZyb20gJ3R3Z2wuanMnO1xuaW1wb3J0IHsgS2V5UHJlc3NUeXBlIH0gZnJvbSAnLi9LZXlMaXN0ZW5lcic7XG5jb25zdCBLRVlfTUFQID0ge1xuICAgIG1vdmVtZW50OiB7XG4gICAgICAgIE51bXBhZDg6ICdmb3J3YXJkJyxcbiAgICAgICAgTnVtcGFkMjogJ2JhY2t3YXJkJyxcbiAgICAgICAgTnVtcGFkNDogJ2xlZnQnLFxuICAgICAgICBOdW1wYWQ2OiAncmlnaHQnLFxuICAgICAgICBOdW1wYWQ5OiAndXAnLFxuICAgICAgICBOdW1wYWQ3OiAnZG93bicsXG4gICAgICAgIGg6ICdsZWZ0JyxcbiAgICAgICAgajogJ2JhY2t3YXJkJyxcbiAgICAgICAgazogJ2ZvcndhcmQnLFxuICAgICAgICBsOiAncmlnaHQnLFxuICAgICAgICAnXSc6ICd1cCcsXG4gICAgICAgICdbJzogJ2Rvd24nLFxuICAgIH0sXG4gICAgbG9vazoge1xuICAgICAgICBBcnJvd1VwOiAndXAnLFxuICAgICAgICBBcnJvd0Rvd246ICdkb3duJyxcbiAgICAgICAgQXJyb3dMZWZ0OiAnbGVmdCcsXG4gICAgICAgIEFycm93UmlnaHQ6ICdyaWdodCcsXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFDb250cm9sbGVyIHtcbiAgICBjYW1lcmE7XG4gICAgbW92ZVNwZWVkO1xuICAgIGxvb2tTZW5zaXRpdml0eTtcbiAgICBhY3RpdmVJbnB1dHM7XG4gICAgc3RhdGljIGRlZmF1bHRJbnB1dHMgPSB7XG4gICAgICAgIG1vdmVtZW50OiB7XG4gICAgICAgICAgICB1cDogZmFsc2UsXG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9yd2FyZDogZmFsc2UsXG4gICAgICAgICAgICBiYWNrd2FyZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxvb2s6IHtcbiAgICAgICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihjYW1lcmEsIFxuICAgIC8vIFVuaXRzIHBlciBzZWNvbmRcbiAgICBtb3ZlU3BlZWQgPSAxLjAsIFxuICAgIC8vIERlZ3JlZXMgcGVyIHNlY29uZFxuICAgIGxvb2tTZW5zaXRpdml0eSA9IDEuMCwgYWN0aXZlSW5wdXRzID0gQ2FtZXJhQ29udHJvbGxlci5kZWZhdWx0SW5wdXRzKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5sb29rU2Vuc2l0aXZpdHkgPSBsb29rU2Vuc2l0aXZpdHk7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5wdXRzID0gYWN0aXZlSW5wdXRzO1xuICAgIH1cbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBDYW1lcmEgVXBkYXRlOiAke3RoaXMuZGlyZWN0aW9uLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIGNvbnN0IG1vdmVWZWN0b3IgPSB0aGlzLmdldE1vdmVWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gdGhpcy5tb3ZlU3BlZWQgKiAoZGVsdGFUaW1lIC8gMTAwMCk7XG4gICAgICAgIHRoaXMubW92ZSh2My5tdWxTY2FsYXIobW92ZVZlY3RvciwgbW92ZURpc3RhbmNlKSk7XG4gICAgICAgIGNvbnN0IHJvdGF0aW9ucyA9IHRoaXMuZ2V0Um90YXRpb25zKCk7XG4gICAgICAgIHRoaXMucm90YXRlKHJvdGF0aW9ucyk7XG4gICAgfVxuICAgIGJpbmRLZXlzKGtleUxpc3RlbmVyKSB7XG4gICAgICAgIC8vIENhbWVyYSBtb3ZlbWVudCB3aXRoIG51bXBhZFxuICAgICAgICBPYmplY3QuZW50cmllcyhLRVlfTUFQKS5mb3JFYWNoKChbaW5wdXRUeXBlLCBpbnB1dHNdKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGtleUxpc3RlbmVyLmFkZExpc3RlbmVyKGtleSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlucHV0c1tpbnB1dFR5cGVdW3ZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAga2V5TGlzdGVuZXIuYWRkTGlzdGVuZXIoa2V5LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5wdXRzW2lucHV0VHlwZV1bdmFsdWVdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgS2V5UHJlc3NUeXBlLlVQKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbW92ZSh0cmFuc2xhdGlvbikge1xuICAgICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSB0aGlzLmNhbWVyYS50cmFuc2Zvcm07XG4gICAgICAgIHYzLmFkZChwb3NpdGlvbiwgdHJhbnNsYXRpb24sIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgbW92ZVRvKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhLnRyYW5zZm9ybS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgICBnZXRNb3ZlVmVjdG9yKCkge1xuICAgICAgICBjb25zdCB7IHRyYW5zZm9ybSB9ID0gdGhpcy5jYW1lcmE7XG4gICAgICAgIGNvbnN0IG1vdmVWZWN0b3IgPSB2My5jcmVhdGUoMCwgMCwgMCk7XG4gICAgICAgIGNvbnN0IHsgbW92ZW1lbnQgfSA9IHRoaXMuYWN0aXZlSW5wdXRzO1xuICAgICAgICBpZiAobW92ZW1lbnQudXApIHtcbiAgICAgICAgICAgIHYzLmFkZChtb3ZlVmVjdG9yLCB0cmFuc2Zvcm0uZ2V0VXBWZWN0b3IoKSwgbW92ZVZlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vdmVtZW50LmRvd24pIHtcbiAgICAgICAgICAgIHYzLnN1YnRyYWN0KG1vdmVWZWN0b3IsIHRyYW5zZm9ybS5nZXRVcFZlY3RvcigpLCBtb3ZlVmVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW92ZW1lbnQubGVmdCkge1xuICAgICAgICAgICAgdjMuc3VidHJhY3QobW92ZVZlY3RvciwgdHJhbnNmb3JtLmdldFJpZ2h0VmVjdG9yKCksIG1vdmVWZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3ZlbWVudC5yaWdodCkge1xuICAgICAgICAgICAgdjMuYWRkKG1vdmVWZWN0b3IsIHRyYW5zZm9ybS5nZXRSaWdodFZlY3RvcigpLCBtb3ZlVmVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW92ZW1lbnQuZm9yd2FyZCkge1xuICAgICAgICAgICAgdjMuYWRkKG1vdmVWZWN0b3IsIHRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCksIG1vdmVWZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb3ZlbWVudC5iYWNrd2FyZCkge1xuICAgICAgICAgICAgdjMuc3VidHJhY3QobW92ZVZlY3RvciwgdHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgbW92ZVZlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmVWZWN0b3I7XG4gICAgfVxuICAgIHJvdGF0ZShyb3RhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdGhpcy5jYW1lcmEudHJhbnNmb3JtO1xuICAgICAgICByb3RhdGlvblswXSArPSByb3RhdGlvbnNbMF07XG4gICAgICAgIC8vIENsYW1wIFhcbiAgICAgICAgaWYgKHJvdGF0aW9uWzBdID4gOTApIHtcbiAgICAgICAgICAgIHJvdGF0aW9uWzBdID0gOTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm90YXRpb25bMF0gPCAtOTApIHtcbiAgICAgICAgICAgIHJvdGF0aW9uWzBdID0gLTkwO1xuICAgICAgICB9XG4gICAgICAgIHJvdGF0aW9uWzFdICs9IHJvdGF0aW9uc1sxXTtcbiAgICB9XG4gICAgZ2V0Um90YXRpb25zKCkge1xuICAgICAgICBsZXQgeFJvdGF0aW9uID0gMC4wO1xuICAgICAgICBsZXQgeVJvdGF0aW9uID0gMC4wO1xuICAgICAgICBjb25zdCB7IGxvb2sgfSA9IHRoaXMuYWN0aXZlSW5wdXRzO1xuICAgICAgICBpZiAobG9vay51cCkge1xuICAgICAgICAgICAgeFJvdGF0aW9uICs9IHRoaXMubG9va1NlbnNpdGl2aXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb29rLmRvd24pIHtcbiAgICAgICAgICAgIHhSb3RhdGlvbiAtPSB0aGlzLmxvb2tTZW5zaXRpdml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9vay5sZWZ0KSB7XG4gICAgICAgICAgICB5Um90YXRpb24gKz0gdGhpcy5sb29rU2Vuc2l0aXZpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvb2sucmlnaHQpIHtcbiAgICAgICAgICAgIHlSb3RhdGlvbiAtPSB0aGlzLmxvb2tTZW5zaXRpdml0eTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3hSb3RhdGlvbiwgeVJvdGF0aW9uXTtcbiAgICB9XG59XG4iLCJjb25zdCBOVU1fSVRFTVMgPSA5O1xuY29uc3QgTUFQX0VNUFRZID0gJy4nO1xuY29uc3QgTUFQX1dBTEwgPSAnfCc7XG5jb25zdCBNQVBfUExBWUVSID0gJ0AnO1xuY29uc3QgTUFQX1dFQVBPTiA9ICd3JztcbmNvbnN0IE1BUF9JVEVNID0gJ2knO1xuY29uc3QgTUFQX0VORU1ZID0gJ2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVuZ2VvbiB7XG4gICAgc3RhdGljIGdlbmVyYXRlKGR1bmdlb25XaWR0aCwgZHVuZ2VvbkhlaWdodCwgbWluUm9vbVNpemUpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBSZWN0KDAsIDAsIGR1bmdlb25IZWlnaHQgLSAxLCBkdW5nZW9uV2lkdGggLSAxKTtcbiAgICAgICAgLy8gU3BsaXQgdGhlIGR1bmdlb24gaW50byB6b25lc1xuICAgICAgICBjb25zdCB6b25lcyA9IER1bmdlb24uc3BsaXQobWFpbiwgbWluUm9vbVNpemUgKyAyKTtcbiAgICAgICAgLy8gQ3JlYXRlIHJvb21zIGluc2lkZSBlYWNoIG9mIHRoZSB6b25lc1xuICAgICAgICBjb25zdCByb29tcyA9IHpvbmVzLm1hcCgoem9uZSkgPT4gRHVuZ2Vvbi5jcmVhdGVSb29tKHpvbmUsIG1pblJvb21TaXplKSk7XG4gICAgICAgIC8vIENyZWF0ZSBoYWxsd2F5cyB0byBjb25uZWN0IHJvb21zIHRvZ2V0aGVyXG4gICAgICAgIGNvbnN0IHsgaGFsbHMsIGNvbm5lY3Rpb25zIH0gPSBEdW5nZW9uLmNyZWF0ZUhhbGxzKHpvbmVzLCByb29tcyk7XG4gICAgICAgIC8vIFJhbmRvbWx5IHNlbGVjdCBhIHN0YXJ0aW5nIHJvb20gdGhlbiBjYWxjdWxhdGUgdGhlIGRpZmZpY3VsdGllcyBvZiBldmVyeSBvdGhlciByb29tXG4gICAgICAgIGNvbnN0IHN0YXJ0Um9vbSA9IER1bmdlb24ucmFuZEludCgwLCByb29tcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkaWZmaWN1bHRpZXMgPSByb29tcy5tYXAoKF8pID0+IDk5OSk7XG4gICAgICAgIGRpZmZpY3VsdGllc1tzdGFydFJvb21dID0gMTtcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCByb29tcy5sZW5ndGg7IGxvb3ArKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29ubiA9IDA7IGNvbm4gPCBjb25uZWN0aW9ucy5sZW5ndGg7IGNvbm4rKykge1xuICAgICAgICAgICAgICAgIGRpZmZpY3VsdGllc1tjb25uZWN0aW9uc1tjb25uXS5iXSA9IE1hdGgubWluKGRpZmZpY3VsdGllc1tjb25uZWN0aW9uc1tjb25uXS5iXSwgZGlmZmljdWx0aWVzW2Nvbm5lY3Rpb25zW2Nvbm5dLmFdICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGl0ZW1zLCB3ZWFwb25zLCBhbmQgZW5lbWllc1xuICAgICAgICBjb25zdCBtYXBQb2ludHMgPSBEdW5nZW9uLmZpbGxSb29tcyhyb29tcywgZGlmZmljdWx0aWVzLCBzdGFydFJvb20pO1xuICAgICAgICByZXR1cm4gRHVuZ2Vvbi5jcmVhdGVNYXAobmV3IFBhaXIoZHVuZ2VvbkhlaWdodCwgZHVuZ2VvbldpZHRoKSwgcm9vbXMsIGhhbGxzLCBtYXBQb2ludHMpO1xuICAgIH1cbiAgICAvLyBTcGxpdCBhIHpvbmUgaW50byB0d28gc21hbGxlciB6b25lcywgdGhlbiByZWN1cnNlXG4gICAgc3RhdGljIHNwbGl0KHpvbmUsIG1pblpvbmVTaXplKSB7XG4gICAgICAgIGNvbnN0IHNtYWxsWCA9IHpvbmUueDIgLSB6b25lLngxIDwgMiAqIG1pblpvbmVTaXplO1xuICAgICAgICBjb25zdCBzbWFsbFkgPSB6b25lLnkyIC0gem9uZS55MSA8IDIgKiBtaW5ab25lU2l6ZTtcbiAgICAgICAgLy8gSWYgYSB6b25lIGlzIHRvbyBzbWFsbCwgZG9uJ3Qgc3BsaXQgaXRcbiAgICAgICAgaWYgKHNtYWxsWCAmJiBzbWFsbFkpXG4gICAgICAgICAgICByZXR1cm4gW3pvbmVdO1xuICAgICAgICAvLyBJZiBhIHpvbmUgaXMgdG9vIHNtYWxsIGluIG9uZSBkaXJlY3Rpb24sIHNwbGl0IGl0IGluIHRoZSBvdGhlciBkaXJlY3Rpb25cbiAgICAgICAgaWYgKHNtYWxsWClcbiAgICAgICAgICAgIHJldHVybiBEdW5nZW9uLnNwbGl0WSh6b25lLCBtaW5ab25lU2l6ZSk7XG4gICAgICAgIGlmIChzbWFsbFkpXG4gICAgICAgICAgICByZXR1cm4gRHVuZ2Vvbi5zcGxpdFgoem9uZSwgbWluWm9uZVNpemUpO1xuICAgICAgICAvLyBJZiBhIHpvbmUgaXMgYmlnIGVub3VnaCwgcmFuZG9tbHkgc3BsaXQgaXQgaW4gdGhlIFggb3IgWSBkaXJlY3Rpb25cbiAgICAgICAgaWYgKER1bmdlb24ucmFuZEludCgwLCAyKSA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIER1bmdlb24uc3BsaXRZKHpvbmUsIG1pblpvbmVTaXplKTtcbiAgICAgICAgcmV0dXJuIER1bmdlb24uc3BsaXRYKHpvbmUsIG1pblpvbmVTaXplKTtcbiAgICB9XG4gICAgLy8gU3BsaXQgYSB6b25lIGluIHRoZSBYIGRpcmVjdGlvblxuICAgIHN0YXRpYyBzcGxpdFgoem9uZSwgbWluWm9uZVNpemUpIHtcbiAgICAgICAgLy8gQ2hvb3NlIGEgcmFuZG9tIHNwbGl0IHBvaW50XG4gICAgICAgIGNvbnN0IHhTcGxpdCA9IER1bmdlb24ucmFuZEludCh6b25lLngxICsgbWluWm9uZVNpemUsIHpvbmUueDIgLSBtaW5ab25lU2l6ZSArIDEpO1xuICAgICAgICAvLyBDcmVhdGUgc3ViLXpvbmVzXG4gICAgICAgIGNvbnN0IHpvbmVBID0gbmV3IFJlY3Qoem9uZS54MSwgem9uZS55MSwgeFNwbGl0LCB6b25lLnkyKTtcbiAgICAgICAgY29uc3Qgem9uZUIgPSBuZXcgUmVjdCh4U3BsaXQsIHpvbmUueTEsIHpvbmUueDIsIHpvbmUueTIpO1xuICAgICAgICAvLyBSZWN1cnNlIGFuZCBjb21iaW5lIGxpc3RzXG4gICAgICAgIHJldHVybiBbLi4uRHVuZ2Vvbi5zcGxpdCh6b25lQSwgbWluWm9uZVNpemUpLCAuLi5EdW5nZW9uLnNwbGl0KHpvbmVCLCBtaW5ab25lU2l6ZSldO1xuICAgIH1cbiAgICAvLyBTcGxpdCBhIHpvbmUgaW4gdGhlIFkgZGlyZWN0aW9uXG4gICAgc3RhdGljIHNwbGl0WSh6b25lLCBtaW5ab25lU2l6ZSkge1xuICAgICAgICAvLyBDaG9vc2UgYSByYW5kb20gc3BsaXQgcG9pbnRcbiAgICAgICAgY29uc3QgeVNwbGl0ID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueTEgKyBtaW5ab25lU2l6ZSwgem9uZS55MiAtIG1pblpvbmVTaXplICsgMSk7XG4gICAgICAgIC8vIENyZWF0ZSBzdWItem9uZXNcbiAgICAgICAgY29uc3Qgem9uZUEgPSBuZXcgUmVjdCh6b25lLngxLCB6b25lLnkxLCB6b25lLngyLCB5U3BsaXQpO1xuICAgICAgICBjb25zdCB6b25lQiA9IG5ldyBSZWN0KHpvbmUueDEsIHlTcGxpdCwgem9uZS54Miwgem9uZS55Mik7XG4gICAgICAgIC8vIFJlY3Vyc2UgYW5kIGNvbWJpbmUgbGlzdHNcbiAgICAgICAgcmV0dXJuIFsuLi5EdW5nZW9uLnNwbGl0KHpvbmVBLCBtaW5ab25lU2l6ZSksIC4uLkR1bmdlb24uc3BsaXQoem9uZUIsIG1pblpvbmVTaXplKV07XG4gICAgfVxuICAgIC8vIENyZWF0ZSBhIHJvb20gaW5zaWRlIG9mIGEgem9uZVxuICAgIHN0YXRpYyBjcmVhdGVSb29tKHpvbmUsIG1pblJvb21TaXplKSB7XG4gICAgICAgIGxldCB4MSA9IDA7XG4gICAgICAgIGxldCB4MiA9IDA7XG4gICAgICAgIGxldCB5MSA9IDA7XG4gICAgICAgIGxldCB5MiA9IDA7XG4gICAgICAgIC8vIFJhbmRvbWx5IGdlbmVyYXRlIHR3byB2YWxpZCBwb2ludHMgaW5zaWRlIG9mIHRoZSB6b25lXG4gICAgICAgIC8vIFRoZSBwb2ludHMgbXVzdCBoYXZlIHgxIDwgeDIsIHkxIDwgeTIsIGFuZCBoYXZlIGEgc2lkZSBsZW5ndGggb2YgYXQgbGVhc3QgbWluUm9vbVNpemVcbiAgICAgICAgd2hpbGUgKHgyIC0geDEgPCBtaW5Sb29tU2l6ZSB8fCB5MiAtIHkxIDwgbWluUm9vbVNpemUpIHtcbiAgICAgICAgICAgIHgxID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueDEgKyAxLCB6b25lLngyKTtcbiAgICAgICAgICAgIHgyID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueDEgKyAxLCB6b25lLngyKTtcbiAgICAgICAgICAgIHkxID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueTEgKyAxLCB6b25lLnkyKTtcbiAgICAgICAgICAgIHkyID0gRHVuZ2Vvbi5yYW5kSW50KHpvbmUueTEgKyAxLCB6b25lLnkyKTtcbiAgICAgICAgICAgIGlmICh4MSA+IHgyKVxuICAgICAgICAgICAgICAgIHgyID0geDE7XG4gICAgICAgICAgICBpZiAoeTEgPiB5MilcbiAgICAgICAgICAgICAgICB5MiA9IHkxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh4MSwgeTEsIHgyLCB5Mik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVIYWxscyh6b25lcywgcm9vbXMpIHtcbiAgICAgICAgY29uc3QgaGFsbHMgPSBbXTtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgaGFzUmlnaHQgPSBbLi4uQXJyYXkoem9uZXMubGVuZ3RoKV0ubWFwKChxKSA9PiBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGhhc0Rvd24gPSBbLi4uQXJyYXkoem9uZXMubGVuZ3RoKV0ubWFwKChxKSA9PiBmYWxzZSk7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHBhaXIgb2Ygem9uZXNcbiAgICAgICAgZm9yIChsZXQgZnJvbSA9IDA7IGZyb20gPCB6b25lcy5sZW5ndGg7IGZyb20rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgdG8gPSAwOyB0byA8IHpvbmVzLmxlbmd0aDsgdG8rKykge1xuICAgICAgICAgICAgICAgIC8vIElmIGZyb20gcm9vbSBhbmQgdG8gcm9vbSBzaGFyZSBhIHZlcnRpY2FsIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAoem9uZXNbZnJvbV0ueDIgPT0gem9uZXNbdG9dLngxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBpbnZhbGlkIHNpemVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh6b25lc1t0b10ueTEgPj0gcm9vbXNbZnJvbV0ueTIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb21zW3RvXS55MSA+PSB6b25lc1tmcm9tXS55MilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyByYW5kb21seSBjaG9vc2UgYWNjZXNzIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5MSA9IER1bmdlb24ucmFuZEludChyb29tc1tmcm9tXS55MSArIDEsIHJvb21zW2Zyb21dLnkyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeTIgPSBEdW5nZW9uLnJhbmRJbnQocm9vbXNbdG9dLnkxICsgMSwgcm9vbXNbdG9dLnkyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkxID09IHkyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHN0cmFpZ2h0IGhhbGx3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3Qocm9vbXNbZnJvbV0ueDIsIHkxLCByb29tc1t0b10ueDEsIHkxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHppZyB6YWcgaGFsbHdheVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdChyb29tc1tmcm9tXS54MiwgeTEsIHpvbmVzW2Zyb21dLngyLCB5MSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsbHMucHVzaChuZXcgUmVjdCh6b25lc1tmcm9tXS54MiwgTWF0aC5taW4oeTEsIHkyKSwgem9uZXNbZnJvbV0ueDIsIE1hdGgubWF4KHkxLCB5MikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3Qoem9uZXNbZnJvbV0ueDIsIHkyLCByb29tc1t0b10ueDEsIHkyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyayBoYWxsd2F5XG4gICAgICAgICAgICAgICAgICAgIGhhc1JpZ2h0W2Zyb21dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChuZXcgUGFpcihmcm9tLCB0bykpO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKG5ldyBQYWlyKHRvLCBmcm9tKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGZyb20gcm9vbSBhbmQgdG8gcm9vbSBzaGFyZSBhIGhvcml6b250YWwgd2FsbFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHpvbmVzW2Zyb21dLnkyID09IHpvbmVzW3RvXS55MSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgaW52YWxpZCBzaXplc1xuICAgICAgICAgICAgICAgICAgICBpZiAoem9uZXNbdG9dLngxID49IHJvb21zW2Zyb21dLngyKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb29tc1t0b10ueDEgPj0gem9uZXNbZnJvbV0ueDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmFuZG9tbHkgY2hvb3NlIGFjY2VzcyBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeDEgPSBEdW5nZW9uLnJhbmRJbnQocm9vbXNbZnJvbV0ueDEgKyAxLCByb29tc1tmcm9tXS54Mik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHgyID0gRHVuZ2Vvbi5yYW5kSW50KHJvb21zW3RvXS54MSArIDEsIHJvb21zW3RvXS54Mik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4MSA9PSB4Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHJhdyBzdHJhaWdodCBoYWxsd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxscy5wdXNoKG5ldyBSZWN0KHgxLCByb29tc1tmcm9tXS55MiwgeDEsIHJvb21zW3RvXS55MSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHJhdyB6aWcgemFnIGhhbGx3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3QoeDEsIHJvb21zW2Zyb21dLnkyLCB4MSwgem9uZXNbZnJvbV0ueTIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGxzLnB1c2gobmV3IFJlY3QoTWF0aC5taW4oeDEsIHgyKSwgem9uZXNbZnJvbV0ueTIsIE1hdGgubWF4KHgxLCB4MiksIHpvbmVzW2Zyb21dLnkyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxscy5wdXNoKG5ldyBSZWN0KHgyLCB6b25lc1t0b10ueTEsIHgyLCByb29tc1t0b10ueTEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIGhhbGx3YXlcbiAgICAgICAgICAgICAgICAgICAgaGFzRG93bltmcm9tXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2gobmV3IFBhaXIoZnJvbSwgdG8pKTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChuZXcgUGFpcih0bywgZnJvbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBoYWxscywgY29ubmVjdGlvbnMgfTtcbiAgICB9XG4gICAgLy8gRmlsbCByb29tcyB3aXRoIHdlYXBvbnMsIGl0ZW1zLCBhbmQgZW5lbWllc1xuICAgIHN0YXRpYyBmaWxsUm9vbXMocm9vbXMsIGRpZmZpY3VsdGllcywgc3RhcnRSb29tKSB7XG4gICAgICAgIGxldCBtYXhEaWZmaWN1bHR5ID0gMDtcbiAgICAgICAgZm9yIChsZXQgcSA9IDA7IHEgPCBkaWZmaWN1bHRpZXMubGVuZ3RoOyBxKyspIHtcbiAgICAgICAgICAgIGlmIChkaWZmaWN1bHRpZXNbcV0gPiBtYXhEaWZmaWN1bHR5KVxuICAgICAgICAgICAgICAgIG1heERpZmZpY3VsdHkgPSBkaWZmaWN1bHRpZXNbcV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29vcmRzID0gW107XG4gICAgICAgIGxldCBpdGVtc0xlZnQgPSBOVU1fSVRFTVMgLSAxO1xuICAgICAgICBjb25zdCB3ZWFwb25zID0gW107XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIC8vIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBpcyBmcmVlIHRvIHVzZVxuICAgICAgICBmdW5jdGlvbiBjaGVjayh4LCB5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBxID0gMDsgcSA8IGNvb3Jkcy5sZW5ndGg7IHErKykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHNbcV0ueCA9PSB4ICYmIGNvb3Jkc1txXS55ID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIGNvb3JkaW5hdGUgaW4gYSByb29tXG4gICAgICAgIGZ1bmN0aW9uIHJhbmRvbUNvb3JkKHJvb20pIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IER1bmdlb24ucmFuZEludChyb29tLngxICsgMSwgcm9vbS54Mik7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IER1bmdlb24ucmFuZEludChyb29tLnkxICsgMSwgcm9vbS55Mik7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrKHgsIHkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdlbmVyYXRlIHNwYXduIHJvb21cbiAgICAgICAgY29uc3Qgc3Bhd24gPSByYW5kb21Db29yZChyb29tc1tzdGFydFJvb21dKTtcbiAgICAgICAgY29vcmRzLnB1c2goc3Bhd24pO1xuICAgICAgICAvLyBBZGQgd2VhcG9uIHRvIHNwYXduIHJvb21cbiAgICAgICAgY29uc3QgYyA9IHJhbmRvbUNvb3JkKHJvb21zW3N0YXJ0Um9vbV0pO1xuICAgICAgICBjb29yZHMucHVzaChjKTtcbiAgICAgICAgd2VhcG9ucy5wdXNoKGMpO1xuICAgICAgICAvLyBHZW5lcmF0ZSBlbmVtaWVzXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm9vbSA9IDA7IHJvb20gPCByb29tcy5sZW5ndGg7IHJvb20rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgPSAwOyBlbmVteSA8IGRpZmZpY3VsdGllc1tyb29tXTsgZW5lbXkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSByYW5kb21Db29yZChyb29tc1tyb29tXSk7XG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgZW5lbWllcy5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdlbmVyYXRlIGl0ZW1zXG4gICAgICAgIGxvb3A6IHdoaWxlIChpdGVtc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkaWZmaWN1bHR5ID0gMjsgZGlmZmljdWx0eSA8PSBtYXhEaWZmaWN1bHR5OyBkaWZmaWN1bHR5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb29tID0gMDsgcm9vbSA8IHJvb21zLmxlbmd0aDsgcm9vbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmaWN1bHRpZXNbcm9vbV0gIT0gZGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXNMZWZ0IDw9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSB3ZWFwb24gb3IgaXRlbVxuICAgICAgICAgICAgICAgICAgICBpZiAoRHVuZ2Vvbi5yYW5kSW50KDAsIGRpZmZpY3VsdHkpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zTGVmdC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHJhbmRvbUNvb3JkKHJvb21zW3Jvb21dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKER1bmdlb24ucmFuZEludCgwLCAyKSA/IHdlYXBvbnMgOiBpdGVtcykucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2VhcG9ucywgaXRlbXMsIGVuZW1pZXMsIHNwYXduLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlTWFwKGR1bmdlb25TaXplLCByb29tcywgaGFsbHMsIG1hcFBvaW50cykge1xuICAgICAgICBjb25zdCBtYXAgPSBbLi4uQXJyYXkoZHVuZ2VvblNpemUuYSArIDEpXS5tYXAoKHEpID0+IFsuLi5BcnJheShkdW5nZW9uU2l6ZS5iICsgMSldLm1hcCgodykgPT4gTUFQX1dBTEwpKTtcbiAgICAgICAgLy8gRmlsbCByb29tcyB3aXRoIGVtcHR5IHNwYWNlXG4gICAgICAgIGZvciAobGV0IHJvb20gPSAwOyByb29tIDwgcm9vbXMubGVuZ3RoOyByb29tKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSByb29tc1tyb29tXS54MSArIDE7IHggPCByb29tc1tyb29tXS54MjsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHJvb21zW3Jvb21dLnkxICsgMTsgeSA8IHJvb21zW3Jvb21dLnkyOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwW3hdW3ldID0gTUFQX0VNUFRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaWxsIGhhbGxzIHdpdGggZW1wdHkgc3BhY2VcbiAgICAgICAgZm9yIChsZXQgaGFsbCA9IDA7IGhhbGwgPCBoYWxscy5sZW5ndGg7IGhhbGwrKykge1xuICAgICAgICAgICAgaWYgKGhhbGxzW2hhbGxdLngxID09IGhhbGxzW2hhbGxdLngyKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IGhhbGxzW2hhbGxdLnkxOyB5IDw9IGhhbGxzW2hhbGxdLnkyOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwW2hhbGxzW2hhbGxdLngxXVt5XSA9IE1BUF9FTVBUWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gaGFsbHNbaGFsbF0ueDE7IHggPD0gaGFsbHNbaGFsbF0ueDI7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXBbeF1baGFsbHNbaGFsbF0ueTFdID0gTUFQX0VNUFRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IHBsYXllciBwb3NpdGlvblxuICAgICAgICBtYXBbbWFwUG9pbnRzLnNwYXduLnhdW21hcFBvaW50cy5zcGF3bi55XSA9IE1BUF9QTEFZRVI7XG4gICAgICAgIC8vIERyYXcgd2VhcG9uc1xuICAgICAgICBmb3IgKGxldCB3ZWFwb24gPSAwOyB3ZWFwb24gPCBtYXBQb2ludHMud2VhcG9ucy5sZW5ndGg7IHdlYXBvbisrKSB7XG4gICAgICAgICAgICBtYXBbbWFwUG9pbnRzLndlYXBvbnNbd2VhcG9uXS54XVttYXBQb2ludHMud2VhcG9uc1t3ZWFwb25dLnldID0gTUFQX1dFQVBPTjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IGl0ZW1zXG4gICAgICAgIGZvciAobGV0IGl0ZW0gPSAwOyBpdGVtIDwgbWFwUG9pbnRzLml0ZW1zLmxlbmd0aDsgaXRlbSsrKSB7XG4gICAgICAgICAgICBtYXBbbWFwUG9pbnRzLml0ZW1zW2l0ZW1dLnhdW21hcFBvaW50cy5pdGVtc1tpdGVtXS55XSA9IE1BUF9JVEVNO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgZW5lbWllc1xuICAgICAgICBmb3IgKGxldCBlbWVueSA9IDA7IGVtZW55IDwgbWFwUG9pbnRzLmVuZW1pZXMubGVuZ3RoOyBlbWVueSsrKSB7XG4gICAgICAgICAgICBtYXBbbWFwUG9pbnRzLmVuZW1pZXNbZW1lbnldLnhdW21hcFBvaW50cy5lbmVtaWVzW2VtZW55XS55XSA9IE1BUF9FTkVNWTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGl0Y2ggbWFwIHRvZ2V0aGVyXG4gICAgICAgIHJldHVybiBtYXAubWFwKChyb3cpID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJyk7XG4gICAgfVxuICAgIHN0YXRpYyByYW5kSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIGlmIChtaW4gPT0gbWF4KVxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgaWYgKG1pbiA+IG1heClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRJbnQobWF4LCBtaW4pO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn1cbmNsYXNzIFJlY3Qge1xuICAgIHgxO1xuICAgIHkxO1xuICAgIHgyO1xuICAgIHkyO1xuICAgIGFyZWE7XG4gICAgY29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgdGhpcy54MSA9IHgxO1xuICAgICAgICB0aGlzLnkxID0geTE7XG4gICAgICAgIHRoaXMueDIgPSB4MjtcbiAgICAgICAgdGhpcy55MiA9IHkyO1xuICAgICAgICB0aGlzLmFyZWEgPSAodGhpcy54MiAtIHRoaXMueDEpICogKHRoaXMueTIgLSB0aGlzLnkxKTtcbiAgICB9XG59XG5jbGFzcyBQYWlyIHtcbiAgICBhO1xuICAgIGI7XG4gICAgY29uc3RydWN0b3IoYSwgYikge1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgIH1cbn1cbmNsYXNzIFBvaW50IHtcbiAgICB4O1xuICAgIHk7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHYzIH0gZnJvbSAndHdnbC5qcyc7XG5pbXBvcnQgS2V5TGlzdGVuZXIgZnJvbSAnLi9LZXlMaXN0ZW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vZW50aXRpZXMvRW5lbXknO1xuaW1wb3J0IFdlYXBvbiBmcm9tICcuL2VudGl0aWVzL1dlYXBvbic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2VudGl0aWVzL0l0ZW0nO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL3JlbmRlcmVyL1JlbmRlcmVyJztcbmltcG9ydCBQZXJzcGVjdGl2ZUNhbWVyYSBmcm9tICcuLi9yZW5kZXJlci9QZXJzcGVjdGl2ZUNhbWVyYSc7XG5pbXBvcnQgQ2FtZXJhQ29udHJvbGxlciBmcm9tICcuL0NhbWVyYUNvbnRyb2xsZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi91aS9nYW1lL0dhbWVQYW5lbCc7XG5leHBvcnQgdmFyIEdhbWVTdGF0ZTtcbihmdW5jdGlvbiAoR2FtZVN0YXRlKSB7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIldBTEtJTkdcIl0gPSAwXSA9IFwiV0FMS0lOR1wiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJJTlZFTlRPUllcIl0gPSAxXSA9IFwiSU5WRU5UT1JZXCI7XG59KShHYW1lU3RhdGUgfHwgKEdhbWVTdGF0ZSA9IHt9KSk7XG52YXIgTW92ZURpcmVjdGlvbjtcbihmdW5jdGlvbiAoTW92ZURpcmVjdGlvbikge1xuICAgIE1vdmVEaXJlY3Rpb25bTW92ZURpcmVjdGlvbltcIkZvcndhcmRcIl0gPSAwXSA9IFwiRm9yd2FyZFwiO1xuICAgIE1vdmVEaXJlY3Rpb25bTW92ZURpcmVjdGlvbltcIkJhY2t3YXJkXCJdID0gMV0gPSBcIkJhY2t3YXJkXCI7XG4gICAgTW92ZURpcmVjdGlvbltNb3ZlRGlyZWN0aW9uW1wiTGVmdFwiXSA9IDJdID0gXCJMZWZ0XCI7XG4gICAgTW92ZURpcmVjdGlvbltNb3ZlRGlyZWN0aW9uW1wiUmlnaHRcIl0gPSAzXSA9IFwiUmlnaHRcIjtcbn0pKE1vdmVEaXJlY3Rpb24gfHwgKE1vdmVEaXJlY3Rpb24gPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgZ3JpZDtcbiAgICByZW5kZXJlcjtcbiAgICBtZXNzYWdlO1xuICAgIGdhbWVQYW5lbDtcbiAgICBwbGF5ZXI7XG4gICAgc3RhdGU7XG4gICAgY2FtZXJhO1xuICAgIGNhbWVyYUNvbnRyb2xsZXI7XG4gICAga2V5TGlzdGVuZXI7XG4gICAgZG9SZXNldENhbWVyYTtcbiAgICBjb25zdHJ1Y3RvcihnbCkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSgpO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIgPSBuZXcgQ2FtZXJhQ29udHJvbGxlcih0aGlzLmNhbWVyYSwgMyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZ2wsIHVuZGVmaW5lZCwgdGhpcy5jYW1lcmEpO1xuICAgICAgICB0aGlzLmRvUmVzZXRDYW1lcmEgPSB0cnVlO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGNhbWVyYSBjb250cm9sbGVyIHVwZGF0ZSB0byB0aGUgcmVuZGVyZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRVcGRhdGVDYWxsYmFjaygoZGVsdGFUaW1lKSA9PiB0aGlzLmNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKGRlbHRhVGltZSkpO1xuICAgICAgICAvLyBVcGRhdGUgY2FtZXJhIGFzcGVjdCByYXRpb1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZFVwZGF0ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMucmVuZGVyZXIuZ2wuY2FudmFzLndpZHRoIC8gdGhpcy5yZW5kZXJlci5nbC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcy5yZW5kZXJlci5zY2VuZSk7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5ncmlkLmdldFBsYXllcigpO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIubW92ZVRvKHRoaXMucGxheWVyLmNhbWVyYVRhcmdldC5nZXRXb3JsZFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLmNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24gPSBbLTQ1LCAxODAsIDBdO1xuICAgICAgICB0aGlzLnN0YXRlID0gR2FtZVN0YXRlLldBTEtJTkc7XG4gICAgICAgIHRoaXMua2V5TGlzdGVuZXIgPSBuZXcgS2V5TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5rZXlMaXN0ZW5lci5hZGRMaXN0ZW5lcnMoW1xuICAgICAgICAgICAgLy8gTW92ZSBwbGF5ZXIgd2l0aCAndycsICdhJywgJ3MnLCAnZCdcbiAgICAgICAgICAgIFsndycsICgpID0+IHRoaXMubW92ZVBsYXllcihNb3ZlRGlyZWN0aW9uLkZvcndhcmQpXSxcbiAgICAgICAgICAgIFsnYScsICgpID0+IHRoaXMubW92ZVBsYXllcihNb3ZlRGlyZWN0aW9uLkxlZnQpXSxcbiAgICAgICAgICAgIFsncycsICgpID0+IHRoaXMubW92ZVBsYXllcihNb3ZlRGlyZWN0aW9uLkJhY2t3YXJkKV0sXG4gICAgICAgICAgICBbJ2QnLCAoKSA9PiB0aGlzLm1vdmVQbGF5ZXIoTW92ZURpcmVjdGlvbi5SaWdodCldLFxuICAgICAgICAgICAgLy8gT3Blbi9jbG9zZSBpbnZlbnRvcnkgd2l0aCAnaSdcbiAgICAgICAgICAgIFsnaScsICgpID0+IHRoaXMudG9nZ2xlSW52ZW50b3J5KCldLFxuICAgICAgICAgICAgLy8gQXR0YWNrIEVuZW15XG4gICAgICAgICAgICBbJ3EnLCAoKSA9PiB0aGlzLmF0dGFjaygpXSxcbiAgICAgICAgICAgIC8vIFNlbGVjdCBpbnZlbnRvcnkgd2VhcG9uL2l0ZW0gd2l0aCAnMSctJzknXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgWydEaWdpdDEnLCAnRGlnaXQyJywgJ0RpZ2l0MycsICdEaWdpdDQnLCAnRGlnaXQ1JyxcbiAgICAgICAgICAgICAgICAgICAgJ0RpZ2l0NicsICdEaWdpdDcnLCAnRGlnaXQ4JywgJ0RpZ2l0OSddLFxuICAgICAgICAgICAgICAgICh7IGtleSB9KSA9PiB0aGlzLnNlbGVjdEZyb21JbnZlbnRvcnkoTnVtYmVyKGtleSkgLSAxKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJ1xcXFwnLCAoKSA9PiB0aGlzLmdyaWQuZ2VuZXJhdGVNYXAoKV0sXG4gICAgICAgICAgICBbJywnLCAoKSA9PiB7IHRoaXMuZG9SZXNldENhbWVyYSA9ICF0aGlzLmRvUmVzZXRDYW1lcmE7IH1dLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbGVyLmJpbmRLZXlzKHRoaXMua2V5TGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmtleUxpc3RlbmVyLnN0YXJ0TGlzdGVuaW5nKCk7XG4gICAgICAgIHRoaXMuZ2FtZVBhbmVsID0gbmV3IEdhbWVQYW5lbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnR2FtZSBTdGFydCcpO1xuICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgICAgICAvLyBCZWdpbiByZW5kZXJpbmdcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICB0aGlzLmtleUxpc3RlbmVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zdG9wUmVuZGVyaW5nKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZShoYW5kbGVyPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAvLyAgIGlmIChoYW5kbGVyKSBoYW5kbGVyKCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgbW92ZVBsYXllcihkaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IEdhbWVTdGF0ZS5XQUxLSU5HKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgZGVsdGFYID0gMDtcbiAgICAgICAgbGV0IGRlbHRhWSA9IDA7XG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICBjYXNlIE1vdmVEaXJlY3Rpb24uRm9yd2FyZDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb2RlbE5vZGUubG9jYWxUcmFuc2Zvcm0ucm90YXRpb24gPSBbMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5CYWNrd2FyZDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb2RlbE5vZGUubG9jYWxUcmFuc2Zvcm0ucm90YXRpb24gPSBbMCwgMTgwLCAwXTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5MZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vZGVsTm9kZS5sb2NhbFRyYW5zZm9ybS5yb3RhdGlvbiA9IFswLCA5MCwgMF07XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5SaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb2RlbE5vZGUubG9jYWxUcmFuc2Zvcm0ucm90YXRpb24gPSBbMCwgLTkwLCAwXTtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB4OiBjdXJyZW50WCwgeTogY3VycmVudFkgfSA9IHRoaXMuZ3JpZC5nZXRQb3NpdGlvbk9mKHRoaXMucGxheWVyKTtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBjdXJyZW50WCArIGRlbHRhWCxcbiAgICAgICAgICAgIHk6IGN1cnJlbnRZICsgZGVsdGFZLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGVudGl0eSwgY29sbGlzaW9uIH0gPSB0aGlzLmdyaWQucXVlcnkobmV3UG9zaXRpb24pO1xuICAgICAgICAvLyBDaGVjayBmb3IgZW50aXRpZXNcbiAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgc3dpdGNoIChlbnRpdHkuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEVuZW15OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYFlvdSBidW1wIGludG8gJHtHYW1lLm5vdW5QaHJhc2UoZW5lbXkpfSAke2VuZW15LnN0cmluZ1JlcHJlc2VudGF0aW9uKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFdlYXBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWFwb24gPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBpY2tVcFdlYXBvbih3ZWFwb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQucmVtb3ZlRW50aXR5KHdlYXBvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShgWW91IHBpY2sgdXAgJHtHYW1lLm5vdW5QaHJhc2Uod2VhcG9uKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbToge1xuICAgICAgICAgICAgICAgICAgICAvLyBQaWNrIHVwIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGlja1VwSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUVudGl0eShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGBZb3UgcGljayB1cCAke0dhbWUubm91blBocmFzZShpdGVtKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciBjb2xsaXNpb25cbiAgICAgICAgaWYgKCFjb2xsaXNpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tb3ZlRW50aXR5KHRoaXMucGxheWVyLCBuZXdQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZG9SZXNldENhbWVyYSkge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2FtZXJhUG9zaXRpb24gPSB0aGlzLnBsYXllci5jYW1lcmFUYXJnZXQuZ2V0V29ybGRQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbGVyLm1vdmVUbyhuZXdDYW1lcmFQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24gPSBbLTQ1LCAxODAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zdFR1cm4oKTtcbiAgICAgICAgdGhpcy5wcmludEdhbWUoKTtcbiAgICB9XG4gICAgbW92ZUNhbWVyYSh0cmFuc2xhdGlvbikge1xuICAgICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSB0aGlzLnJlbmRlcmVyLmNhbWVyYS50cmFuc2Zvcm07XG4gICAgICAgIHYzLmFkZChwb3NpdGlvbiwgdHJhbnNsYXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cbiAgICBhdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBHYW1lU3RhdGUuV0FMS0lORylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gU2VhcmNoIGZvciBhbiBlbmVteSB3aXRoaW5nIHRoZSBuZWFyZXN0IGZvdXIgdGlsZXNcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbMCwgLTEsIC0xLCAwLCAwLCAxLCAxLCAwXTtcbiAgICAgICAgbGV0IGVuZW15O1xuICAgICAgICBjb25zdCB7IHg6IHBsYXllclgsIHk6IHBsYXllclkgfSA9IHRoaXMuZ3JpZC5nZXRQb3NpdGlvbk9mKHRoaXMucGxheWVyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBwbGF5ZXJYICsgcmFuZ2VbaV0sXG4gICAgICAgICAgICAgICAgeTogcGxheWVyWSArIHJhbmdlW2kgKyAxXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmdyaWQuZ2V0RW50aXR5QXQoY2hlY2tQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoZW50aXR5ICYmIGVudGl0eSBpbnN0YW5jZW9mIEVuZW15KSB7XG4gICAgICAgICAgICAgICAgZW5lbXkgPSBlbnRpdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKCdObyBFbmVtaWVzIGluIFJhbmdlJyk7XG4gICAgICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnTm8gV2VhcG9uIEVxdWlwcGVkJyk7XG4gICAgICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZW15LmNvbWJhdFRpbWVyID0gNztcbiAgICAgICAgLy8gUGxheWVyIGF0dGFja1xuICAgICAgICBsZXQgcmFuZCA9IDEgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNSkpO1xuICAgICAgICBjb25zdCBTUCA9IHRoaXMucGxheWVyLnNraWxsICsgcmFuZCArIHRoaXMucGxheWVyLmVxdWlwcGVkV2VhcG9uLnNraWxsQm9udXM7XG4gICAgICAgIGlmIChTUCA+IGVuZW15LnNraWxsKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2sgaGl0XG4gICAgICAgICAgICBlbmVteS5oZWFsdGggLT0gdGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24uZGFtYWdlO1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGAke2VuZW15Lm5hbWV9IHRvb2sgJHt0aGlzLnBsYXllci5lcXVpcHBlZFdlYXBvbi5kYW1hZ2V9IGRhbWFnZS4gJHtlbmVteS5uYW1lfSBoYXMgJHtNYXRoLm1heChlbmVteS5oZWFsdGgsIDApfSBoZWFsdGggcmVtYWluaW5nYCk7XG4gICAgICAgICAgICBpZiAoZW5lbXkuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyBFbmVteSBkZWZlYXRlZFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNraWxsICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZUVudGl0eShlbmVteSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGAke2VuZW15Lm5hbWV9IGhhcyBiZWVuIGRlZmVhdGVkYCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZC5nZXRFbnRpdGllcygpLmVuZW1pZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoJ0FsbCBFbmVtaWVzIERlZmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnWW91IFdpbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQXR0YWNrIG1pc3NcbiAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSgnQXR0YWNrIE1pc3NlZC4gTm8gZGFtYWdlIGRlYWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5lbXkgYXR0YWNrXG4gICAgICAgIHJhbmQgPSAxICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDUpKTtcbiAgICAgICAgY29uc3QgZW5lbXlTUCA9IGVuZW15LnNraWxsICsgcmFuZDtcbiAgICAgICAgaWYgKGVuZW15U1AgPiBTUCkge1xuICAgICAgICAgICAgLy8gQXR0YWNrIGhpdFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGVhbHRoIC09IGVuZW15LmRhbWFnZTtcbiAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShgJHtlbmVteS5uYW1lfSBkZWFscyAke2VuZW15LmRhbWFnZX0gZGFtYWdlYCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoJ1lvdSBEaWVkLlxcbkdhbWUgT3Zlci4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBcnJhY2sgbWlzc1xuICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKGAke2VuZW15Lm5hbWV9IG1pc3Nlcy4gTm8gZGFtYWdlIGRlYWx0YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3N0VHVybigpO1xuICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgIH1cbiAgICB0b2dnbGVJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBHYW1lU3RhdGUuSU5WRU5UT1JZKSB7XG4gICAgICAgICAgICAvLyBDbG9zZSBpbnZlbnRvcnlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuV0FMS0lORztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9wZW4gaW52ZW50b3J5XG4gICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoJ1lvdSBsb29rIGF0IHlvdXIgaW52ZW50b3J5Jyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gR2FtZVN0YXRlLklOVkVOVE9SWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW50R2FtZSgpO1xuICAgIH1cbiAgICBzZWxlY3RGcm9tSW52ZW50b3J5KGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBHYW1lU3RhdGUuSU5WRU5UT1JZKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBpZiAoaW5kZXggPj0gdGhpcy5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnBsYXllci5pbnZlbnRvcnkuaW52ZW50b3J5Lmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gY29uc3Qgd2VhcG9uID0gdGhpcy5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBpbnZlbnRvcnlPYmogPSB0aGlzLnBsYXllci5pbnZlbnRvcnkuaW52ZW50b3J5W2luZGV4XTtcbiAgICAgICAgaWYgKGludmVudG9yeU9iaiBpbnN0YW5jZW9mIFdlYXBvbikge1xuICAgICAgICAgICAgY29uc3Qgd2VhcG9uID0gaW52ZW50b3J5T2JqO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmVxdWlwcGVkV2VhcG9uID09PSB3ZWFwb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgKz0gYFwiWW91IGFscmVhZHkgaGF2ZSB0aGlzICR7d2VhcG9uLm5hbWV9IGVxdWlwcGVkXCJcXG5gO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZXF1aXBwZWRXZWFwb24gPSB3ZWFwb247XG4gICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoYFlvdSBlcXVpcCAke0dhbWUubm91blBocmFzZSh3ZWFwb24pfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGludmVudG9yeU9iaiBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnRvcnlPYmo7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oZWFsdGggKz0gaXRlbS5lZmZlY3RIUDtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNraWxsICs9IGl0ZW0uZWZmZWN0U1A7XG4gICAgICAgICAgICB0aGlzLnBsYXllci51c2VVcEl0ZW0oaXRlbSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgKz0gYFVzZSBJdGVtOiAke2l0ZW0ubmFtZX0gOiAke2l0ZW0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc3RUdXJuKCk7XG4gICAgICAgIHRoaXMucHJpbnRHYW1lKCk7XG4gICAgfVxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgKz0gYFwiJHttZXNzYWdlfVwiXFxuYDtcbiAgICB9XG4gICAgcG9zdFR1cm4oKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5nZXRFbnRpdGllcygpLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgIGVuZW15LmNvbWJhdFRpbWVyIC09IDE7XG4gICAgICAgICAgICBpZiAoZW5lbXkuY29tYmF0VGltZXIgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHsgeDogY3VycmVudFgsIHk6IGN1cnJlbnRZIH0gPSB0aGlzLmdyaWQuZ2V0UG9zaXRpb25PZihlbmVteSk7XG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IFswLCAtMSwgLTEsIDAsIDAsIDEsIDEsIDBdO1xuICAgICAgICAgICAgY29uc3QgcmFuZFBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICogMjtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnRYICsgcmFuZ2VbcmFuZFBvc10sXG4gICAgICAgICAgICAgICAgeTogY3VycmVudFkgKyByYW5nZVtyYW5kUG9zICsgMV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgeyBlbnRpdHksIGNvbGxpc2lvbiB9ID0gdGhpcy5ncmlkLnF1ZXJ5KG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkgfHwgY29sbGlzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tb3ZlRW50aXR5KGVuZW15LCBuZXdQb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcmludEdhbWUoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgVUlcbiAgICAgICAgdGhpcy5nYW1lUGFuZWwudXBkYXRlKCk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgLy8gR3JpZFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyaWQuc3RyaW5nUmVwcmVzZW50YXRpb24oKSk7XG4gICAgICAgIC8vIFBsYXllciBzdGF0c1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5zdHJpbmdSZXByZXNlbnRhdGlvbigpKTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmVxdWlwcGVkV2VhcG9uKSB7XG4gICAgICAgICAgICAvLyBFcXVwcGVkIHdlYXBvblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VxdWlwcGVkIHdlYXBvbjonLCB0aGlzLnBsYXllci5lcXVpcHBlZFdlYXBvbi5zdHJpbmdSZXByZXNlbnRhdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBNZXNzYWdlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEdhbWVTdGF0ZS5JTlZFTlRPUlkpIHtcbiAgICAgICAgICAgIC8vIEludmVudG9yeVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIuaW52ZW50b3J5LnN0cmluZ1JlcHJlc2VudGF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIH1cbiAgICBzdGF0aWMgbm91blBocmFzZShvYmplY3QpIHtcbiAgICAgICAgaWYgKEdhbWUuaXNWb3dlbChvYmplY3QubmFtZS5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFuICR7b2JqZWN0Lm5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYGEgJHtvYmplY3QubmFtZX1gO1xuICAgIH1cbiAgICBzdGF0aWMgaXNWb3dlbChjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuICdhZWlvdScuc3BsaXQoJycpLmluY2x1ZGVzKGNoYXJhY3Rlci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZsb29yVGlsZSBmcm9tICcuL3RpbGVzL0Zsb29yVGlsZSc7XG5pbXBvcnQgV2FsbFRpbGUgZnJvbSAnLi90aWxlcy9XYWxsVGlsZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZW50aXRpZXMvUGxheWVyJztcbmltcG9ydCBFbmVteSBmcm9tICcuL2VudGl0aWVzL0VuZW15JztcbmltcG9ydCBXZWFwb24gZnJvbSAnLi9lbnRpdGllcy9XZWFwb24nO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9lbnRpdGllcy9JdGVtJztcbmltcG9ydCBTY2VuZU5vZGUgZnJvbSAnLi4vcmVuZGVyZXIvU2NlbmVOb2RlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vcmVuZGVyZXIvVHJhbnNmb3JtJztcbmltcG9ydCBEdW5nZW9uIGZyb20gJy4vRHVuZ2Vvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICB0aWxlcztcbiAgICBwbGF5ZXI7XG4gICAgZW50aXRpZXM7XG4gICAgZW50aXR5TG9va3VwO1xuICAgIHBvc2l0aW9uTG9va3VwO1xuICAgIHNjZW5lTm9kZTtcbiAgICBzY2VuZTtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSB7XG4gICAgICAgICAgICBlbmVtaWVzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB3ZWFwb25zOiBuZXcgU2V0KCksXG4gICAgICAgICAgICBpdGVtczogbmV3IFNldCgpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVudGl0eUxvb2t1cCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTWFwKCk7XG4gICAgfVxuICAgIC8vIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlIGFmdGVyIHRoZSBtYXAgaGFzIGJlZW4gc2V0XG4gICAgYnVpbGREdW5nZW9uKCkge1xuICAgICAgICAvLyBUT0RPOiB1c2UgbW9kZWwgZXh0ZW50cywgbm9ybWFsaXplIG1vZGVscyB0byBiZSB0aGUgc2FtZSBzaXplLCBhbmQgdXNlXG4gICAgICAgIC8vIHRoYXQgZm9yIHRoZSB0aWxlU2l6ZVxuICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IDEuMDtcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGFmdGVyIGhhdmluZyBtb3ZhYmxlIGNhbWVyYVxuICAgICAgICBjb25zdCB6RmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy50aWxlcy5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh0aWxlLCB4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU5vZGUuYWRkQ2hpbGQodGlsZS5tb2RlbE5vZGUpO1xuICAgICAgICAgICAgICAgIHRpbGUuc2V0VHJhbnNmb3JtKG5ldyBUcmFuc2Zvcm0oW3ggKiB0aWxlU2l6ZSwgMCwgeSAqIHRpbGVTaXplICogekZhY3Rvcl0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VGlsZXMoKSB7IHJldHVybiB0aGlzLnRpbGVzOyB9XG4gICAgZ2V0UGxheWVyKCkgeyByZXR1cm4gdGhpcy5wbGF5ZXI7IH1cbiAgICBnZXRFbnRpdGllcygpIHsgcmV0dXJuIHRoaXMuZW50aXRpZXM7IH1cbiAgICBnZXRUaWxlQXQoeyB4LCB5IH0pIHsgcmV0dXJuIHRoaXMudGlsZXNbeV1beF07IH1cbiAgICBnZXRFbnRpdHlBdCh7IHgsIHkgfSkgeyByZXR1cm4gdGhpcy5lbnRpdHlMb29rdXBbeV1beF07IH1cbiAgICBnZXRQb3NpdGlvbk9mKGVudGl0eSkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbkxvb2t1cC5nZXQoZW50aXR5KTsgfVxuICAgIGdlbmVyYXRlTWFwKCkge1xuICAgICAgICBpZiAodGhpcy5zY2VuZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXRpZXMgPSB7XG4gICAgICAgICAgICAgICAgZW5lbWllczogbmV3IFNldCgpLFxuICAgICAgICAgICAgICAgIHdlYXBvbnM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICBpdGVtczogbmV3IFNldCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5TG9va3VwID0gW107XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZU5vZGUucmVtb3ZlU2VsZigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NlbmVOb2RlID0gbmV3IFNjZW5lTm9kZSgnR3JpZCcpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZE5vZGUodGhpcy5zY2VuZU5vZGUpO1xuICAgICAgICB0aGlzLmxvYWRHcmlkRnJvbVN0cmluZyhEdW5nZW9uLmdlbmVyYXRlKDM1LCAzNSwgNykpO1xuICAgICAgICB0aGlzLmJ1aWxkRHVuZ2VvbigpO1xuICAgIH1cbiAgICBxdWVyeShwb3NpdGlvbikge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5nZXRUaWxlQXQocG9zaXRpb24pO1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmdldEVudGl0eUF0KHBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uID0gKCF0aWxlIHx8IHRpbGUuaXNDb2xsaWRhYmxlKSB8fCAoZW50aXR5ICYmIGVudGl0eS5pc0NvbGxpZGFibGUpO1xuICAgICAgICByZXR1cm4geyB0aWxlLCBlbnRpdHksIGNvbGxpc2lvbiB9O1xuICAgIH1cbiAgICAvLyBJZiB0aWxlcyBpcyBudWxsLCB0aGVuIHRoZSBlbnRpdGllcyBhcmVuJ3QgYWRkZWQgYSBjaGlsZHJlbiB0byB0aGVpclxuICAgIC8vIE1vZGVsTm9kZXMuIEl0J3MgdXAgdG8gdGhlIGNhbGxlciB0byByZW1lZHkgdGhhdC5cbiAgICBhZGRFbnRpdHkoZW50aXR5LCB7IHgsIHkgfSkge1xuICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IGVudGl0eTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZW50aXR5IHRvIGNvcnJlc3BvbmRpbmcgZW50aXR5IHNldFxuICAgICAgICB0aGlzLmZvclN1YnR5cGVPZkVudGl0eShlbnRpdHksIChlbnRpdHlTdWJ0eXBlLCBzZXQpID0+IHtcbiAgICAgICAgICAgIHNldC5hZGQoZW50aXR5U3VidHlwZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZWNvcmQgZW50aXR5J3MgcG9zaXRpb24gb24gZ3JpZFxuICAgICAgICB0aGlzLmVudGl0eUxvb2t1cFt5XVt4XSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkxvb2t1cC5zZXQoZW50aXR5LCB7IHgsIHkgfSk7XG4gICAgICAgIGlmICh0aGlzLnRpbGVzKVxuICAgICAgICAgICAgdGhpcy50aWxlc1t5XVt4XS5tb2RlbE5vZGUuYWRkQ2hpbGQoZW50aXR5Lm1vZGVsTm9kZSk7XG4gICAgfVxuICAgIHJlbW92ZUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGVudGl0eSBmcm9tIGNvcnJlc3BvbmRpbmcgZW50aXR5IHNldFxuICAgICAgICB0aGlzLmZvclN1YnR5cGVPZkVudGl0eShlbnRpdHksIChlbnRpdHlTdWJ0eXBlLCBzZXQpID0+IHtcbiAgICAgICAgICAgIHNldC5kZWxldGUoZW50aXR5U3VidHlwZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZW1vdmUgZW50aXR5J3MgcG9zaXRpb24gb24gZ3JpZFxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zaXRpb25Mb29rdXAuZ2V0KGVudGl0eSk7XG4gICAgICAgIHRoaXMuZW50aXR5TG9va3VwW3ldW3hdID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICBlbnRpdHkubW9kZWxOb2RlLnJlbW92ZVNlbGYoKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgbW92ZUVudGl0eShlbnRpdHksIHsgeDogbmV3WCwgeTogbmV3WSB9KSB7XG4gICAgICAgIC8vIENoYW5nZSBlbnRpdHkncyBwb3NpdGlvbiBvbiBncmlkXG4gICAgICAgIGNvbnN0IHsgeDogb2xkWCwgeTogb2xkWSB9ID0gdGhpcy5wb3NpdGlvbkxvb2t1cC5nZXQoZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlMb29rdXBbb2xkWV1bb2xkWF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW50aXR5TG9va3VwW25ld1ldW25ld1hdID0gZW50aXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uTG9va3VwLnNldChlbnRpdHksIHsgeDogbmV3WCwgeTogbmV3WSB9KTtcbiAgICAgICAgdGhpcy50aWxlc1tuZXdZXVtuZXdYXS5tb2RlbE5vZGUuYWRkQ2hpbGQoZW50aXR5Lm1vZGVsTm9kZSk7XG4gICAgfVxuICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uKCkge1xuICAgICAgICAvLyBGbG9vcnMgYW5kIHdhbGxzXG4gICAgICAgIGNvbnN0IHRleHRBcnJheSA9IHRoaXMudGlsZXMubWFwKCh0aWxlUm93KSA9PiB0aWxlUm93Lm1hcCgodGlsZSkgPT4gdGlsZS5jaGFyYWN0ZXIpKTtcbiAgICAgICAgLy8gTm9uLXBsYXllciBlbnRpdGllc1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZW50aXRpZXMpLmZvckVhY2goKHNldCkgPT4ge1xuICAgICAgICAgICAgc2V0LmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRQb3NpdGlvbk9mKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgdGV4dEFycmF5W3ldW3hdID0gZW50aXR5LmNoYXJhY3RlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUGxheWVyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRQb3NpdGlvbk9mKHRoaXMucGxheWVyKTtcbiAgICAgICAgdGV4dEFycmF5W3ldW3hdID0gUGxheWVyLmNoYXJhY3RlcjtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgdGV4dEFycmF5LmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZXh0ICs9ICdcXG4nO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGxvYWRHcmlkRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aWxlcyA9IHN0cmluZy5zcGxpdCgnXFxuJykubWFwKChzdHJpbmdSb3csIHkpID0+IHN0cmluZ1Jvdy5zcGxpdCgnJykubWFwKChjaGFyYWN0ZXIsIHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5TG9va3VwLnB1c2goW10pO1xuICAgICAgICAgICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVGlsZS5jaGFyYWN0ZXI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBXYWxsVGlsZS5jaGFyYWN0ZXI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2FsbFRpbGUoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllci5jaGFyYWN0ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRW50aXR5KG5ldyBQbGF5ZXIoKSwgeyB4LCB5IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb29yVGlsZSgpO1xuICAgICAgICAgICAgICAgIGNhc2UgRW5lbXkuY2hhcmFjdGVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVudGl0eShuZXcgRW5lbXkoKSwgeyB4LCB5IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb29yVGlsZSgpO1xuICAgICAgICAgICAgICAgIGNhc2UgV2VhcG9uLmNoYXJhY3RlcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFbnRpdHkobmV3IFdlYXBvbigpLCB7IHgsIHkgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtLmNoYXJhY3RlcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFbnRpdHkobmV3IEl0ZW0oKSwgeyB4LCB5IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb29yVGlsZSgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvb3JUaWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkxvb2t1cC5mb3JFYWNoKCh7IHgsIHkgfSwgZW50aXR5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbGVzW3ldW3hdLm1vZGVsTm9kZS5hZGRDaGlsZChlbnRpdHkubW9kZWxOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvclN1YnR5cGVPZkVudGl0eShlbnRpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHN3aXRjaCAoZW50aXR5LmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjYXNlIEVuZW15OlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVudGl0eSwgdGhpcy5lbnRpdGllcy5lbmVtaWVzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV2VhcG9uOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVudGl0eSwgdGhpcy5lbnRpdGllcy53ZWFwb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSXRlbTpcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlbnRpdHksIHRoaXMuZW50aXRpZXMuaXRlbXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeSB7XG4gICAgd2VhcG9ucztcbiAgICBpbnZlbnRvcnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2VhcG9ucyA9IFtdO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIH1cbiAgICBzdHJpbmdSZXByZXNlbnRhdGlvbigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMud2VhcG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGB3ZWFwb25zOiAke1xuICAgICAgICAvLyAgICAgdGhpcy53ZWFwb25zXG4gICAgICAgIC8vICAgICAgIC5tYXAoKHdlYXBvbiwgaW5kZXgpID0+IGBcXG4gICR7aW5kZXggKyAxfS4gJHt3ZWFwb24uc3RyaW5nUmVwcmVzZW50YXRpb24oKX1gKVxuICAgICAgICAvLyAgICAgICAuam9pbigpXG4gICAgICAgIC8vICAgfWA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgSW52ZW50b3J5OiAke3RoaXMuaW52ZW50b3J5XG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IGBcXG4gICR7aW5kZXggKyAxfS4gJHtpdGVtLnN0cmluZ1JlcHJlc2VudGF0aW9uKCl9YClcbiAgICAgICAgICAgICAgICAuam9pbigpfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3ZWFwb25zOiAobm8gd2VhcG9ucyknO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgS2V5UHJlc3NUeXBlO1xuKGZ1bmN0aW9uIChLZXlQcmVzc1R5cGUpIHtcbiAgICBLZXlQcmVzc1R5cGVbS2V5UHJlc3NUeXBlW1wiRE9XTlwiXSA9IDBdID0gXCJET1dOXCI7XG4gICAgS2V5UHJlc3NUeXBlW0tleVByZXNzVHlwZVtcIlVQXCJdID0gMV0gPSBcIlVQXCI7XG59KShLZXlQcmVzc1R5cGUgfHwgKEtleVByZXNzVHlwZSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlMaXN0ZW5lciB7XG4gICAga2V5RG93bkNhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbiAgICBrZXlVcENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbiAgICBrZXlEb3duSGFuZGxlcjtcbiAgICBrZXlVcEhhbmRsZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoa2V5RXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIElmIGNhbGxiYWNrIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGtleSBvciBjb2RlXG4gICAgICAgICAgICBba2V5RXZlbnQua2V5LCBrZXlFdmVudC5jb2RlXS5maW5kKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlEb3duQ2FsbGJhY2tzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludm9rZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5rZXlEb3duQ2FsbGJhY2tzLmdldChrZXkpKShrZXlFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5rZXlVcEhhbmRsZXIgPSAoa2V5RXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIElmIGNhbGxiYWNrIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGtleSBvciBjb2RlXG4gICAgICAgICAgICBba2V5RXZlbnQua2V5LCBrZXlFdmVudC5jb2RlXS5maW5kKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlVcENhbGxiYWNrcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnZva2UgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMua2V5VXBDYWxsYmFja3MuZ2V0KGtleSkpKGtleUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcihrZXlzLCBjYWxsYmFjaywgcHJlc3NUeXBlID0gS2V5UHJlc3NUeXBlLkRPV04pIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gcHJlc3NUeXBlID09PSBLZXlQcmVzc1R5cGUuRE9XTlxuICAgICAgICAgICAgPyB0aGlzLmtleURvd25DYWxsYmFja3MgOiB0aGlzLmtleVVwQ2FsbGJhY2tzO1xuICAgICAgICAvLyBBZGQgY2FsbGJhY2sgdG8gdGhlIGdpdmVuIGtleShzKVxuICAgICAgICBba2V5c10uZmxhdCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNldChrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZExpc3RlbmVycyhsaXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gQWRkIGNhbGxiYWNrIGZvciBlYWNoIGdpdmVuIGtleS1jYWxsYmFjayBwYWlyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChba2V5cywgY2FsbGJhY2ssIHByZXNzVHlwZV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoa2V5cywgY2FsbGJhY2ssIHByZXNzVHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydExpc3RlbmluZygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcEhhbmRsZXIpO1xuICAgIH1cbiAgICBzdG9wTGlzdGVuaW5nKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwSGFuZGxlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3JlbmRlcmVyL01vZGVsJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuY29uc3QgbW9kZWxzID0ge1xuICAgIG1hZ2dvdDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9NYWdnb3QvbW9kZWwuanNvbicpLFxuICAgIHNsaW1lTW9sZDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9TbGltZU1vbGQvbW9kZWwuanNvbicpLFxuICAgIGdvYmxpbjogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9Hb2JsaW4vbW9kZWwuanNvbicpLFxuICAgIG9yazogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9PcmsvbW9kZWwuanNvbicpLFxuICAgIHZhbXBpcmU6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvVmFtcGlyZS9tb2RlbC5qc29uJyksXG59O1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImNvbnNpc3RlbnRcIl0gKi9cbmNvbnN0IGVuZW1pZXMgPSBuZXcgTWFwKFtcbiAgICBbJ01hZ2dvdCcsIHtcbiAgICAgICAgICAgIGhlYWx0aDogNCwgc2tpbGw6IDAsIGRhbWFnZTogNCwgbW9kZWw6IG1vZGVscy5tYWdnb3QsXG4gICAgICAgIH1dLFxuICAgIFsnU2xpbWUgTW9sZCcsIHtcbiAgICAgICAgICAgIGhlYWx0aDogNywgc2tpbGw6IDEsIGRhbWFnZTogMywgbW9kZWw6IG1vZGVscy5zbGltZU1vbGQsXG4gICAgICAgIH1dLFxuICAgIFsnR29ibGluJywge1xuICAgICAgICAgICAgaGVhbHRoOiA5LCBza2lsbDogNCwgZGFtYWdlOiA1LCBtb2RlbDogbW9kZWxzLmdvYmxpbixcbiAgICAgICAgfV0sXG4gICAgWydPcmsnLCB7XG4gICAgICAgICAgICBoZWFsdGg6IDExLCBza2lsbDogMiwgZGFtYWdlOiA3LCBtb2RlbDogbW9kZWxzLm9yayxcbiAgICAgICAgfV0sXG4gICAgWydWYW1waXJlJywge1xuICAgICAgICAgICAgaGVhbHRoOiAyMCwgc2tpbGw6IDksIGRhbWFnZTogMTAsIG1vZGVsOiBtb2RlbHMudmFtcGlyZSxcbiAgICAgICAgfV0sXG5dKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgRW50aXR5IHtcbiAgICBzdGF0aWMgY2hhcmFjdGVyID0gJ2UnO1xuICAgIHN0YXRpYyBpc0NvbGxpZGFibGUgPSB0cnVlO1xuICAgIC8vIG5hbWU6IHN0cmluZztcbiAgICBoZWFsdGg7XG4gICAgc2tpbGw7XG4gICAgZGFtYWdlO1xuICAgIGNvbWJhdFRpbWVyO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBFbmVteS5yYW5kb21FbmVteU5hbWUoKSkge1xuICAgICAgICBzdXBlcihlbmVtaWVzLmdldChuYW1lKS5tb2RlbCwgRW5lbXkuY2hhcmFjdGVyLCBFbmVteS5pc0NvbGxpZGFibGUpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGVuZW1pZXMuZ2V0KG5hbWUpPy5oZWFsdGggPz8gMTtcbiAgICAgICAgdGhpcy5za2lsbCA9IGVuZW1pZXMuZ2V0KG5hbWUpPy5za2lsbCA/PyAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGVuZW1pZXMuZ2V0KG5hbWUpPy5kYW1hZ2UgPz8gMDtcbiAgICAgICAgdGhpcy5jb21iYXRUaW1lciA9IDA7XG4gICAgfVxuICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gYChIUDogJHt0aGlzLmhlYWx0aH0sIFNQOiAke3RoaXMuc2tpbGx9LCBkYW1hZ2U6ICR7dGhpcy5kYW1hZ2V9KWA7XG4gICAgfVxuICAgIHN0YXRpYyByYW5kb21FbmVteU5hbWUoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbShlbmVtaWVzLmtleXMoKSk7XG4gICAgICAgIHJldHVybiBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYW1lcy5sZW5ndGgpXTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIGNoYXJhY3RlcjtcbiAgICBuYW1lO1xuICAgIGlzQ29sbGlkYWJsZTtcbiAgICBtb2RlbE5vZGU7XG4gICAgc3RyaW5nUmVwcmVzZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IobW9kZWwsIGNoYXJhY3RlciwgaXNDb2xsaWRhYmxlKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyLmNoYXJBdCgwKTtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGFibGUgPSBpc0NvbGxpZGFibGU7XG4gICAgICAgIHRoaXMubW9kZWxOb2RlID0gbW9kZWwuY3JlYXRlTW9kZWxOb2RlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3JlbmRlcmVyL01vZGVsJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuLy8gY29uc3QgcmF0aW9uTW9kZWwgPSBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL1JhdGlvbi9tb2RlbC5qc29uJyk7XG5jb25zdCBtb2RlbHMgPSB7XG4gICAgcmF0aW9uOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL3JhdGlvbi9tb2RlbC5qc29uJyksXG4gICAgZ291cm1ldE1lYWw6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvZ291cm1ldF9tZWFsL21vZGVsLmpzb24nKSxcbiAgICBzaWx2ZXJSaW5nOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL3NpbHZlcl9yaW5nL21vZGVsLmpzb24nKSxcbiAgICBmb29sc0NhcDogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9mb29sc19jYXAvbW9kZWwuanNvbicpLFxufTtcbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJjb25zaXN0ZW50XCJdICovXG5jb25zdCBpdGVtcyA9IG5ldyBNYXAoW1xuICAgIFsnUmF0aW9ucycsIHtcbiAgICAgICAgICAgIGVmZmVjdEhQOiA1LCBlZmZlY3RTUDogMCwgZGVzY3JpcHRpb246ICdHaXZlIDUgSFAnLCBtb2RlbDogbW9kZWxzLnJhdGlvbixcbiAgICAgICAgfV0sXG4gICAgWydHb3VybWV0IE1lYWwnLCB7XG4gICAgICAgICAgICBlZmZlY3RIUDogMTAsIGVmZmVjdFNQOiAwLCBkZXNjcmlwdGlvbjogJ0dpdmUgMTAgSFAnLCBtb2RlbDogbW9kZWxzLmdvdXJtZXRNZWFsLFxuICAgICAgICB9XSxcbiAgICBbJ1NpbHZlciBSaW5nJywge1xuICAgICAgICAgICAgZWZmZWN0SFA6IDAsIGVmZmVjdFNQOiA1LCBkZXNjcmlwdGlvbjogJ0dpdmUgNSBTUCcsIG1vZGVsOiBtb2RlbHMuc2lsdmVyUmluZyxcbiAgICAgICAgfV0sXG4gICAgWydGb29sXFwncyBDYXAnLCB7XG4gICAgICAgICAgICBlZmZlY3RIUDogMTAsIGVmZmVjdFNQOiAtMTAsIGRlc2NyaXB0aW9uOiAnR2l2ZSAxMCBIUCwgUmVtb3ZlIDEwIFNQJywgbW9kZWw6IG1vZGVscy5mb29sc0NhcCxcbiAgICAgICAgfV0sXG5dKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBFbnRpdHkge1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIgPSAnaSc7XG4gICAgc3RhdGljIGlzQ29sbGlkYWJsZSA9IGZhbHNlO1xuICAgIC8vIG5hbWU6IHN0cmluZztcbiAgICBlZmZlY3RIUDtcbiAgICBlZmZlY3RTUDtcbiAgICBkZXNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gSXRlbS5yYW5kb21pdGVtTmFtZSgpKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zLmdldChuYW1lKS5tb2RlbCwgSXRlbS5jaGFyYWN0ZXIsIEl0ZW0uaXNDb2xsaWRhYmxlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lZmZlY3RIUCA9IGl0ZW1zLmdldChuYW1lKT8uZWZmZWN0SFAgPz8gMDtcbiAgICAgICAgdGhpcy5lZmZlY3RTUCA9IGl0ZW1zLmdldChuYW1lKT8uZWZmZWN0U1AgPz8gMDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW1zLmdldChuYW1lKT8uZGVzY3JpcHRpb24gPz8gJyc7XG4gICAgfVxuICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSAoRWZmZWN0OiAke3RoaXMuZGVzY3JpcHRpb259KWA7XG4gICAgfVxuICAgIHN0YXRpYyByYW5kb21pdGVtTmFtZSgpIHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBBcnJheS5mcm9tKGl0ZW1zLmtleXMoKSk7XG4gICAgICAgIHJldHVybiBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYW1lcy5sZW5ndGgpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi4vSW52ZW50b3J5JztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9yZW5kZXJlci9Nb2RlbCc7XG5pbXBvcnQgU2NlbmVOb2RlIGZyb20gJy4uLy4uL3JlbmRlcmVyL1NjZW5lTm9kZSc7XG5pbXBvcnQgdG9SYWRpYW5zIGZyb20gJy4uLy4uL3V0aWwvTWF0aCc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uLy4uL3JlbmRlcmVyL1RyYW5zZm9ybSc7XG5jb25zdCBtb2RlbCA9IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvUGxheWVyL21vZGVsLmpzb24nKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIEVudGl0eSB7XG4gICAgc3RhdGljIGNoYXJhY3RlciA9ICdAJztcbiAgICBzdGF0aWMgaXNDb2xsaWRhYmxlID0gdHJ1ZTtcbiAgICBoZWFsdGg7XG4gICAgc2tpbGw7XG4gICAgaW52ZW50b3J5O1xuICAgIGVxdWlwcGVkV2VhcG9uO1xuICAgIGNhbWVyYVRhcmdldDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgaW5pdENhbURpc3RhbmNlID0gNDtcbiAgICAgICAgY29uc3QgaW5pdENhbUFuZ2xlID0gNDU7XG4gICAgICAgIGNvbnN0IHsgeExlbiwgeUxlbiwgekxlbiB9ID0gbW9kZWwuZXh0ZW50cztcbiAgICAgICAgc3VwZXIobW9kZWwsIFBsYXllci5jaGFyYWN0ZXIsIFBsYXllci5pc0NvbGxpZGFibGUpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDIwO1xuICAgICAgICB0aGlzLnNraWxsID0gMDtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XG4gICAgICAgIHRoaXMuZXF1aXBwZWRXZWFwb24gPSBudWxsO1xuICAgICAgICBsZXQgbWF4TGVuID0geExlbjtcbiAgICAgICAgaWYgKG1heExlbiA8IHlMZW4pXG4gICAgICAgICAgICBtYXhMZW4gPSB5TGVuO1xuICAgICAgICBpZiAobWF4TGVuIDwgekxlbilcbiAgICAgICAgICAgIG1heExlbiA9IHpMZW47XG4gICAgICAgIHRoaXMubW9kZWxOb2RlLmxvY2FsVHJhbnNmb3JtLnNjYWxlID0gWzEgLyBtYXhMZW4sIDEgLyBtYXhMZW4sIDEgLyBtYXhMZW5dO1xuICAgICAgICB0aGlzLmNhbWVyYVRhcmdldCA9IG5ldyBTY2VuZU5vZGUoJ1BsYXllciBDYW1lcmEgVGFyZ2V0JywgbmV3IFRyYW5zZm9ybShbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgaW5pdENhbURpc3RhbmNlICogTWF0aC5zaW4odG9SYWRpYW5zKGluaXRDYW1BbmdsZSkpLFxuICAgICAgICAgICAgLWluaXRDYW1EaXN0YW5jZSAqIE1hdGguY29zKHRvUmFkaWFucyhpbml0Q2FtQW5nbGUpKSxcbiAgICAgICAgXSkpO1xuICAgICAgICAvLyBBc3N1bWluZyBSYXltb24gaXMgaW5pdGlhbGx5IGZhY2luZyBpbiB0aGUgK3ogZGlyZWN0aW9uLiBQcmF5IHRoaXMgbmV2ZXJcbiAgICAgICAgLy8gY2hhbmdlcy5cbiAgICAgICAgdGhpcy5tb2RlbE5vZGUuYWRkQ2hpbGQodGhpcy5jYW1lcmFUYXJnZXQpO1xuICAgIH1cbiAgICBwaWNrVXBXZWFwb24od2VhcG9uKSB7XG4gICAgICAgIC8vIHRoaXMuaW52ZW50b3J5LndlYXBvbnMucHVzaCh3ZWFwb24pO1xuICAgICAgICB0aGlzLmludmVudG9yeS5pbnZlbnRvcnkucHVzaCh3ZWFwb24pO1xuICAgICAgICBpZiAoIXRoaXMuZXF1aXBwZWRXZWFwb24pIHtcbiAgICAgICAgICAgIHRoaXMuZXF1aXBwZWRXZWFwb24gPSB3ZWFwb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyaW5nUmVwcmVzZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBgSFA6ICR7dGhpcy5oZWFsdGh9LCBTUDogJHt0aGlzLnNraWxsfWA7XG4gICAgICAgIGlmICh0aGlzLmVxdWlwcGVkV2VhcG9uKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gYCgke3RoaXMuZXF1aXBwZWRXZWFwb24uc2tpbGxCb251cyA+PSAwID8gJysnIDogJyd9JHt0aGlzLmVxdWlwcGVkV2VhcG9uLnNraWxsQm9udXN9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgcGlja1VwSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5LmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB1c2VVcEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW52ZW50b3J5LmludmVudG9yeS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmludmVudG9yeS5pbnZlbnRvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vcmVuZGVyZXIvTW9kZWwnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5jb25zdCBtb2RlbHMgPSB7XG4gICAgZGFnZ2VyOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL2RhZ2dlci9tb2RlbC5qc29uJyksXG4gICAgY2FzdElyb25QYW46IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvY2FzdF9pcm9uX3Bhbi9tb2RlbC5qc29uJyksXG4gICAgd2FySGFtbWVyOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL3dhcl9oYW1tZXIvbW9kZWwuanNvbicpLFxuICAgIGhhdGNoZXQ6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvaGF0Y2hldC9tb2RlbC5qc29uJyksXG4gICAgYmF0dGxlYXhlOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL2JhdHRsZWF4ZS9tb2RlbC5qc29uJyksXG4gICAgc3dvcmQ6IGF3YWl0IE1vZGVsLmxvYWQoJy9hc3NldHMvc3dvcmQvbW9kZWwuanNvbicpLFxuICAgIGJhdG9uOiBhd2FpdCBNb2RlbC5sb2FkKCcvYXNzZXRzL2JhdG9uL21vZGVsLmpzb24nKSxcbiAgICBiYXR0bGVTdGFmZjogYXdhaXQgTW9kZWwubG9hZCgnL2Fzc2V0cy9iYXR0bGVfc3RhZmYvbW9kZWwuanNvbicpLFxufTtcbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJjb25zaXN0ZW50XCJdICovXG5jb25zdCB3ZWFwb25zID0gbmV3IE1hcChbXG4gICAgWydEYWdnZXInLCB7IGRhbWFnZTogMywgc2tpbGxCb251czogMCwgbW9kZWw6IG1vZGVscy5kYWdnZXIgfV0sXG4gICAgWydDYXN0IElyb24gUGFuJywgeyBkYW1hZ2U6IDcsIHNraWxsQm9udXM6IDEsIG1vZGVsOiBtb2RlbHMuY2FzdElyb25QYW4gfV0sXG4gICAgWydXYXIgSGFtbWVyJywgeyBkYW1hZ2U6IDEyLCBza2lsbEJvbnVzOiAtMSwgbW9kZWw6IG1vZGVscy53YXJIYW1tZXIgfV0sXG4gICAgWydIYXRjaGV0JywgeyBkYW1hZ2U6IDMsIHNraWxsQm9udXM6IDQsIG1vZGVsOiBtb2RlbHMuaGF0Y2hldCB9XSxcbiAgICBbJ0JhdHRsZWF4ZScsIHsgZGFtYWdlOiAxMCwgc2tpbGxCb251czogMiwgbW9kZWw6IG1vZGVscy5iYXR0bGVheGUgfV0sXG4gICAgWydTd29yZCcsIHsgZGFtYWdlOiA3LCBza2lsbEJvbnVzOiAzLCBtb2RlbDogbW9kZWxzLnN3b3JkIH1dLFxuICAgIFsnQmF0b24nLCB7IGRhbWFnZTogMiwgc2tpbGxCb251czogNywgbW9kZWw6IG1vZGVscy5iYXRvbiB9XSxcbiAgICBbJ0JhdHRsZSBTdGFmZicsIHsgZGFtYWdlOiA2LCBza2lsbEJvbnVzOiAzLCBtb2RlbDogbW9kZWxzLmJhdHRsZVN0YWZmIH1dLFxuXSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb24gZXh0ZW5kcyBFbnRpdHkge1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIgPSAndyc7XG4gICAgc3RhdGljIGlzQ29sbGlkYWJsZSA9IGZhbHNlO1xuICAgIC8vIG5hbWU6IHN0cmluZztcbiAgICBkYW1hZ2U7XG4gICAgc2tpbGxCb251cztcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gV2VhcG9uLnJhbmRvbVdlYXBvbk5hbWUoKSkge1xuICAgICAgICBzdXBlcih3ZWFwb25zLmdldChuYW1lKS5tb2RlbCwgV2VhcG9uLmNoYXJhY3RlciwgV2VhcG9uLmlzQ29sbGlkYWJsZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gd2VhcG9ucy5nZXQobmFtZSk/LmRhbWFnZSA/PyAwO1xuICAgICAgICB0aGlzLnNraWxsQm9udXMgPSB3ZWFwb25zLmdldChuYW1lKT8uc2tpbGxCb251cyA/PyAwO1xuICAgIH1cbiAgICBzdHJpbmdSZXByZXNlbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gKGRhbWFnZTogJHt0aGlzLmRhbWFnZX0sIHNraWxsIGJvbnVzOiAke3RoaXMuc2tpbGxCb251c30pYDtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbVdlYXBvbk5hbWUoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gQXJyYXkuZnJvbSh3ZWFwb25zLmtleXMoKSk7XG4gICAgICAgIHJldHVybiBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYW1lcy5sZW5ndGgpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vcmVuZGVyZXIvTW9kZWwnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi8uLi9yZW5kZXJlci9UcmFuc2Zvcm0nO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XG5jb25zdCBtb2RlbFVybCA9ICcvYXNzZXRzL0Zsb29yL21vZGVsLmpzb24nO1xuY29uc3QgZmxvb3JNb2RlbCA9IGF3YWl0IE1vZGVsLmxvYWQobW9kZWxVcmwpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvb3JUaWxlIGV4dGVuZHMgVGlsZSB7XG4gICAgc3RhdGljIHR5cGUgPSAnRmxvb3JUaWxlJztcbiAgICBzdGF0aWMgY2hhcmFjdGVyID0gJy4nO1xuICAgIHN0YXRpYyBpc0NvbGxpZGFibGUgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgc3VwZXIoZmxvb3JNb2RlbCwgRmxvb3JUaWxlLmNoYXJhY3RlciwgRmxvb3JUaWxlLmlzQ29sbGlkYWJsZSwgdHJhbnNmb3JtKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uLy4uL3JlbmRlcmVyL1RyYW5zZm9ybSc7XG5leHBvcnQgY2xhc3MgVGlsZSB7XG4gICAgc3RhdGljIHR5cGUgPSAnVGlsZSc7XG4gICAgY2hhcmFjdGVyO1xuICAgIGlzQ29sbGlkYWJsZTtcbiAgICBtb2RlbE5vZGU7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIGNoYXJhY3RlciwgaXNDb2xsaWRhYmxlLCB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXIuY2hhckF0KDApO1xuICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSA9IGlzQ29sbGlkYWJsZTtcbiAgICAgICAgdGhpcy5tb2RlbE5vZGUgPSBtb2RlbC5jcmVhdGVNb2RlbE5vZGUodHJhbnNmb3JtKTtcbiAgICB9XG4gICAgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICB0aGlzLm1vZGVsTm9kZS5sb2NhbFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vcmVuZGVyZXIvTW9kZWwnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi8uLi9yZW5kZXJlci9UcmFuc2Zvcm0nO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XG5jb25zdCBtb2RlbFVybCA9ICcvYXNzZXRzL1dhbGwvbW9kZWwuanNvbic7XG5jb25zdCB3YWxsTW9kZWwgPSBhd2FpdCBNb2RlbC5sb2FkKG1vZGVsVXJsKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxUaWxlIGV4dGVuZHMgVGlsZSB7XG4gICAgc3RhdGljIHR5cGUgPSAnV2FsbFRpbGUnO1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIgPSAnfCc7XG4gICAgc3RhdGljIGlzQ29sbGlkYWJsZSA9IHRydWU7XG4gICAgY29uc3RydWN0b3IodHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpKSB7XG4gICAgICAgIHN1cGVyKHdhbGxNb2RlbCwgV2FsbFRpbGUuY2hhcmFjdGVyLCBXYWxsVGlsZS5pc0NvbGxpZGFibGUsIHRyYW5zZm9ybSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICB0cmFuc2Zvcm07XG59XG4iLCJpbXBvcnQgeyB2MyB9IGZyb20gJ3R3Z2wuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICAgIHI7XG4gICAgZztcbiAgICBiO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gUkdCIGNvbG9yIGZyb20gY29sb3IgY29tcG9uZW50cyByZXByZXNlbnRlZCBieSBkZWNpbWFsIG51bWJlcnNcbiAgICAgKiBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVkIFJlZCBjb2xvciBjb21wb25lbnQgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqIEBwYXJhbSBncmVlbiBHcmVlbiBjb2xvciBjb21wb25lbnQgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqIEBwYXJhbSBibHVlIEJsdWUgY29sb3IgY29tcG9uZW50IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWQsIGdyZWVuLCBibHVlKSB7XG4gICAgICAgIGlmIChyZWQgPCAwLjAgfHwgcmVkID4gMS4wXG4gICAgICAgICAgICB8fCBncmVlbiA8IDAuMCB8fCBncmVlbiA+IDEuMFxuICAgICAgICAgICAgfHwgYmx1ZSA8IDAuMCB8fCBibHVlID4gMS4wKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ29sb3IgY29tcG9uZW50IHJhbmdlIChvdXRzaWRlIDAuMC0xLjApJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yID0gcmVkO1xuICAgICAgICB0aGlzLmcgPSBncmVlbjtcbiAgICAgICAgdGhpcy5iID0gYmx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgY29sb3IuIENhbiBiZSBwcm92aWRlZCBpbiBlaXRoZXIgc2l4IG9yIHRocmVlLWRpZ2l0XG4gICAgICogZm9ybWF0cy4gRXguICcjMDA5OUNDJyBvciAnIzA5QydcbiAgICAgKlxuICAgICAqIENhcGl0YWxpemF0aW9uIGlzIGlnbm9yZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBoZXggSGV4IHN0cmluZyByZXByZXNlbnRpbmcgYSBjb2xvclxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSGV4KGhleCkge1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCAhPT0gNyAmJiBoZXgubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZyBhcmd1bWVudCBpbiBDb2xvciBjcmVhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWRTdHJpbmc7XG4gICAgICAgIGxldCBncmVlblN0cmluZztcbiAgICAgICAgbGV0IGJsdWVTdHJpbmc7XG4gICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICByZWRTdHJpbmcgPSBoZXguc3Vic3RyaW5nKDEsIDMpO1xuICAgICAgICAgICAgZ3JlZW5TdHJpbmcgPSBoZXguc3Vic3RyaW5nKDMsIDUpO1xuICAgICAgICAgICAgYmx1ZVN0cmluZyA9IGhleC5zdWJzdHJpbmcoNSwgNyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWRTdHJpbmcgPSBoZXhbMV0gKyBoZXhbMV07XG4gICAgICAgICAgICBncmVlblN0cmluZyA9IGhleFsyXSArIGhleFsyXTtcbiAgICAgICAgICAgIGJsdWVTdHJpbmcgPSBoZXhbM10gKyBoZXhbM107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVkID0gcGFyc2VJbnQocmVkU3RyaW5nLCAxNikgLyAyNTUuMDtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlblN0cmluZywgMTYpIC8gMjU1LjA7XG4gICAgICAgIGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlU3RyaW5nLCAxNikgLyAyNTUuMDtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihyZWQsIGdyZWVuLCBibHVlKTtcbiAgICB9XG4gICAgdG9WZWMzKCkge1xuICAgICAgICByZXR1cm4gdjMuY3JlYXRlKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGcmFtZVRpbWVQYW5lbCBmcm9tICcuLi91aS9GcmFtZVRpbWVQYW5lbCc7XG5pbXBvcnQgU2NlbmVQYW5lbCBmcm9tICcuLi91aS9zY2VuZS1wYW5lbC9TY2VuZVBhbmVsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnVUkge1xuICAgIHJlbmRlcmVyO1xuICAgIGNvbnRhaW5lcjtcbiAgICBmcmFtZVRpbWVQYW5lbDtcbiAgICBzY2VuZVBhbmVsO1xuICAgIGlzVmlzaWJsZTtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgY29udGFpbmVyLCBpc1Zpc2libGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVJbnB1dENhbGxiYWNrID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0b2dnbGVJbnB1dENhbGxiYWNrKTtcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0b2dnbGVJbnB1dENhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYmluZEZyYW1lVGltZVBhbmVsKCk7XG4gICAgICAgIHRoaXMuYmluZFNjZW5lUGFuZWwoKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnVuYmluZEZyYW1lVGltZVBhbmVsKCk7XG4gICAgICAgIHRoaXMudW5iaW5kU2NlbmVQYW5lbCgpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmluZEZyYW1lVGltZVBhbmVsKCkge1xuICAgICAgICB0aGlzLmZyYW1lVGltZVBhbmVsID0gbmV3IEZyYW1lVGltZVBhbmVsKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZnJhbWVUaW1lUGFuZWwuZWxlbWVudCk7XG4gICAgfVxuICAgIHVuYmluZEZyYW1lVGltZVBhbmVsKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZVRpbWVQYW5lbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmZyYW1lVGltZVBhbmVsLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVQYW5lbC5jbGVhblVwKCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZVBhbmVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiaW5kU2NlbmVQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5zY2VuZVBhbmVsID0gbmV3IFNjZW5lUGFuZWwodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2NlbmVQYW5lbCk7XG4gICAgfVxuICAgIHVuYmluZFNjZW5lUGFuZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuc2NlbmVQYW5lbCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lUGFuZWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgfSBmcm9tICd0d2dsLmpzJztcbi8qKlxuICogQSBsZXNzLWdlbmVyYWxpemVkIE1lc2ggcmVwcmVzZW50YXRpb24uIEZvciBzaW1wbGljaXR5IHdlIGFyZSBzdGlja2luZyB3aXRoXG4gKiBoYXZpbmcgMyBhdHRyaWJ1dGVzIChwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdXYpIGFsb25nc2lkZSB0aGUgaW5kaWNlcy5cbiAqXG4gKiBUaGVzZSBhdHRyaWJ1dGVzIGFyZSBtZWFudCB0byBiZSBwYXNzZWQgaW50byBhIHNoYWRlciB3aXRoIHN0YW5kYXJkIG5hbWVzXG4gKiBhcyBzaG93bi5cbiAqXG4gKiBZb3UgbWF5IGxlYXZlIG91dCBub3JtYWwsIHV2LCBvciBpbmRpY2VzLlxuICpcbiAqIFRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBmb3IgdGhlc2UgbWVtYmVycyBzaG91bGQgYWx3YXlzIGJlOlxuICogLy0tLS0tLS0tLS0tLS0tXFxcbiAqIHwgcG9zaXRpb24gfCAzIHxcbiAqIHwgbm9ybWFsICAgfCAzIHxcbiAqIHwgdXYgICAgICAgfCAyIHxcbiAqIHwgaW5kaWNlcyAgfCAzIHxcbiAqIFxcLS0tLS0tLS0tLS0tLS0vXG4gKlxuICogVGhpcyBpcyBhIGNsYXNzIHRvIGdlbmVyYWxpemUgbGF0ZXIgb24sIGFzIGl0cyBpbnZhcmlhbnRzIGFyZSBzdGlmZi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzaCB7XG4gICAgc3RhdGljIE5VTV9DT01QT05FTlRTX1BPU0lUSU9OID0gMztcbiAgICBzdGF0aWMgTlVNX0NPTVBPTkVOVFNfTk9STUFMID0gMztcbiAgICBzdGF0aWMgTlVNX0NPTVBPTkVOVFNfVVYgPSAyO1xuICAgIHN0YXRpYyBOVU1fQ09NUE9ORU5UU19JTkRJQ0VTID0gMztcbiAgICBwb3NpdGlvbjtcbiAgICBub3JtYWw7XG4gICAgdXY7XG4gICAgaW5kaWNlcztcbiAgICBidWZmZXJJbmZvO1xuICAgIG5hbWU7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIG5vcm1hbCwgdXYsIGluZGljZXMsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICAgICAgdGhpcy51diA9IHV2O1xuICAgICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBjcmVhdGVBcnJheXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHM6IE1lc2guTlVNX0NPTVBPTkVOVFNfUE9TSVRJT04sXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4odGhpcy5ub3JtYWwgJiYge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBudW1Db21wb25lbnRzOiBNZXNoLk5VTV9DT01QT05FTlRTX05PUk1BTCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5ub3JtYWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLi4uKHRoaXMudXYgJiYge1xuICAgICAgICAgICAgICAgIHV2OiB7XG4gICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHM6IE1lc2guTlVNX0NPTVBPTkVOVFNfVVYsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMudXYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLi4uKHRoaXMuaW5kaWNlcyAmJiB7XG4gICAgICAgICAgICAgICAgaW5kaWNlczoge1xuICAgICAgICAgICAgICAgICAgICBudW1Db21wb25lbnRzOiBNZXNoLk5VTV9DT01QT05FTlRTX0lORElDRVMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuaW5kaWNlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEJ1ZmZlckluZm8oZ2wpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlckluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCB0aGlzLmNyZWF0ZUFycmF5cygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXJJbmZvO1xuICAgIH1cbn1cbiIsImltcG9ydCBTY2VuZU5vZGUgZnJvbSAnLi9TY2VuZU5vZGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL1RyYW5zZm9ybSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoTm9kZSBleHRlbmRzIFNjZW5lTm9kZSB7XG4gICAgbWVzaDtcbiAgICBtYXRlcmlhbDtcbiAgICBzdGF0aWMgbnVtTWVzaE5vZGVzID0gMDtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCksIG1lc2gsIG1hdGVyaWFsLCBuYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHROYW1lID0gYG1lc2hOb2RlIyR7TWVzaE5vZGUubnVtTWVzaE5vZGVzfWA7XG4gICAgICAgIGxldCBjb21wdXRlZE5hbWU7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBjb21wdXRlZE5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc2gubmFtZSkge1xuICAgICAgICAgICAgY29tcHV0ZWROYW1lID0gYCR7bWVzaC5uYW1lfS0ke2RlZmF1bHROYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wdXRlZE5hbWUgPSBkZWZhdWx0TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihjb21wdXRlZE5hbWUsIHRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgTWVzaE5vZGUubnVtTWVzaE5vZGVzICs9IDE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWVzaCBhcyBUSFJFRU1lc2ggfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXInO1xuaW1wb3J0ICogYXMgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBNZXNoIGZyb20gJy4vTWVzaCc7XG5pbXBvcnQgTWVzaE5vZGUgZnJvbSAnLi9NZXNoTm9kZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbHMvX01hdGVyaWFsSW50ZXJuYWwnO1xuaW1wb3J0IE1vZGVsTm9kZSBmcm9tICcuL01vZGVsTm9kZSc7XG4vKipcbiAqIENsYXNzIHRoYXQgaG9sZHMgbW9kZWwgZGF0YS5cbiAqXG4gKiBBIE1vZGVsIGluc3RhbmNlIGlzIGEgc3RydWN0dXJlIGNvbnRhaW5pbmcgdGhlIG1lc2hlcyBhbmQgbWF0ZXJpYWxcbiAqIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWFjaCBtZXNoLlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSBNb2RlbCBpbnN0YW5jZSBmb3IgZWFjaCAzRCBtb2RlbCB5b3VcbiAqIHdhbnQgdG8gbG9hZCBpbiB0aGUgZ2FtZS4gWW91IGNhbiB1c2UgdGhlIGBjcmVhdGVNb2RlbE5vZGVgXG4gKiBtZXRob2QgdG8gZ2VuZXJhdGUgYSBNb2RlbE5vZGUgd2l0aCBNZXNoTm9kZSBjaGlsZHJlbiByZWFkeVxuICogZm9yIHBsYWNlbWVudCBpbiBhIHNjZW5lLlxuICpcbiAqIE5PVEU6IEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIE9CSiBtb2RlbHMuXG4gKlxuICogVE9ETzogU3VwcG9ydCBtb3JlIHRoYW4ganVzdCBPQkogbW9kZWxzIChwcm9iYWJseSBHTFRGIC8gR0xCIGZpcnN0KVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICAgc3RhdGljIGNhY2hlID0gbmV3IE1hcCgpO1xuICAgIHN0YXRpYyBudW1Nb2RlbHMgPSAwO1xuICAgIG1lc2hlcztcbiAgICBtYXRlcmlhbDtcbiAgICBleHRlbnRzO1xuICAgIG5hbWU7XG4gICAgY29uc3RydWN0b3IobWVzaGVzLCBtYXRlcmlhbCwgbmFtZSkge1xuICAgICAgICB0aGlzLm1lc2hlcyA9IG1lc2hlcztcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICB0aGlzLmV4dGVudHMgPSB0aGlzLmNhbGNNb2RlbEV4dGVudHMoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/PyBgbW9kZWwjJHtNb2RlbC5udW1Nb2RlbHN9YDtcbiAgICAgICAgTW9kZWwubnVtTW9kZWxzICs9IDE7XG4gICAgfVxuICAgIGNyZWF0ZU1vZGVsTm9kZSh0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOb2RlID0gbmV3IE1vZGVsTm9kZSh0aGlzLCB0cmFuc2Zvcm0sIHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMubWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc2hOb2RlID0gbmV3IE1lc2hOb2RlKG5ldyBUcmFuc2Zvcm0oKSwgbWVzaCwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgICAgICBtb2RlbE5vZGUuYWRkQ2hpbGQobWVzaE5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGVsTm9kZTtcbiAgICB9XG4gICAgY2FsY01vZGVsRXh0ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMubWVzaGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWluWDogMCxcbiAgICAgICAgICAgICAgICBtYXhYOiAwLFxuICAgICAgICAgICAgICAgIG1pblk6IDAsXG4gICAgICAgICAgICAgICAgbWF4WTogMCxcbiAgICAgICAgICAgICAgICBtaW5aOiAwLFxuICAgICAgICAgICAgICAgIG1heFo6IDAsXG4gICAgICAgICAgICAgICAgeExlbjogMCxcbiAgICAgICAgICAgICAgICB5TGVuOiAwLFxuICAgICAgICAgICAgICAgIHpMZW46IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBtaW5YID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMF07XG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMF07XG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMV07XG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMV07XG4gICAgICAgIGxldCBtaW5aID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMl07XG4gICAgICAgIGxldCBtYXhaID0gdGhpcy5tZXNoZXNbMF0ucG9zaXRpb25bMl07XG4gICAgICAgIHRoaXMubWVzaGVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIG1lc2gucG9zaXRpb24uZm9yRWFjaCgodiwgaikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaiAlIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBtaW5YKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblggPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IG1heFgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4WCA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBtaW5ZKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblkgPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IG1heFkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBtaW5aKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblogPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IG1heFopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4WiA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBzaG91bGRudCBoYXBwZW4gYmVjYXVzZS4uLm1hdGgnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YLFxuICAgICAgICAgICAgbWF4WCxcbiAgICAgICAgICAgIG1pblksXG4gICAgICAgICAgICBtYXhZLFxuICAgICAgICAgICAgbWluWixcbiAgICAgICAgICAgIG1heFosXG4gICAgICAgICAgICB4TGVuOiBtYXhYIC0gbWluWCxcbiAgICAgICAgICAgIHlMZW46IG1heFkgLSBtaW5ZLFxuICAgICAgICAgICAgekxlbjogbWF4WiAtIG1pblosXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVNZXNoQXJyYXkobW9kZWwpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gbW9kZWw7XG4gICAgICAgIC8vIENyZWF0ZSBtZXNoZXMgZm9yIHRoZSBmaXJzdCBsZXZlbCBtZXNoIGNoaWxkcmVuXG4gICAgICAgIC8vIFRPRE86IChMb3cgUHJpb3JpdHkpIFN1cHBvcnQgbXVsdGktbGV2ZWwgaGllcmFyY2h5IG9mIG1lc2hlcz8gV2UgbWlnaHQgbm90IG5lZWQgdGhpc1xuICAgICAgICBjb25zdCBtZXNoZXMgPSBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZCBpbnN0YW5jZW9mIFRIUkVFTWVzaClcbiAgICAgICAgICAgIC5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGdlb21ldHJ5IH0gPSBjaGlsZDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVzaChuZXcgRmxvYXQzMkFycmF5KGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5hcnJheSksIG5ldyBGbG9hdDMyQXJyYXkoZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdub3JtYWwnKS5hcnJheSksIG5ldyBGbG9hdDMyQXJyYXkoZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCd1dicpLmFycmF5KSwgbnVsbCwgY2hpbGQubmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVzaGVzO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZnJvbVVSTChtb2RlbF91cmwsIG1hdGVyaWFsLCBuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICAgICAgY29uc3QgbG9hZGVkTW9kZWwgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKG1vZGVsX3VybCk7XG4gICAgICAgIGNvbnN0IG1lc2hOb2RlcyA9IE1vZGVsLmNyZWF0ZU1lc2hBcnJheShsb2FkZWRNb2RlbCk7XG4gICAgICAgIHJldHVybiBuZXcgTW9kZWwobWVzaE5vZGVzLCBtYXRlcmlhbCwgbmFtZSk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBsb2FkKHVybCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZS5oYXModXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IG1vZGVsQ29uZmlnID0gKGF3YWl0IGNvbmZpZ1JlcXVlc3QuanNvbigpKTtcbiAgICAgICAgY29uc3QgZGlyID0gUGF0aC5kaXJuYW1lKHVybCk7XG4gICAgICAgIC8vIExvYWQgdGhlIG1vZGVsIGZpbGVcbiAgICAgICAgY29uc3QgbW9kZWxVcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBtb2RlbENvbmZpZy5tb2RlbCk7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICAgICAgY29uc3QgbG9hZGVkTW9kZWwgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKG1vZGVsVXJsKTtcbiAgICAgICAgY29uc3QgbWVzaGVzID0gTW9kZWwuY3JlYXRlTWVzaEFycmF5KGxvYWRlZE1vZGVsKTtcbiAgICAgICAgLy8gTG9hZCB0aGUgbWF0ZXJpYWxcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxVcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBtb2RlbENvbmZpZy5tYXRlcmlhbCk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gYXdhaXQgTWF0ZXJpYWwubG9hZChtYXRlcmlhbFVybCk7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKG1lc2hlcywgbWF0ZXJpYWwsIG1vZGVsQ29uZmlnLm5hbWUpO1xuICAgICAgICB0aGlzLmNhY2hlLnNldCh1cmwsIG1vZGVsKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbn1cbiIsImltcG9ydCBTY2VuZU5vZGUgZnJvbSAnLi9TY2VuZU5vZGUnO1xuLyoqXG4gKiBBIHNpbXBsZSBub2RlIHR5cGUgdGhhdCByZXByZXNlbnRzIGEgc2NlbmUgaW5zdGFuY2Ugb2YgYSBNb2RlbC5cbiAqXG4gKiBUaGlzIG5vZGUgd2lsbCBjb250YWluIE1lc2hOb2RlIGNoaWxkcmVuIHRoYXQgd2VyZSBsb2FkZWQgZnJvbVxuICogdGhlIG1lc2hlcyBvZiB0aGUgTW9kZWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsTm9kZSBleHRlbmRzIFNjZW5lTm9kZSB7XG4gICAgbW9kZWw7XG4gICAgc3RhdGljIG51bU1vZGVsTm9kZXMgPSAwO1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCB0cmFuc2Zvcm0sIG5hbWUgPSBgbW9kZWxOb2RlIyR7TW9kZWxOb2RlLm51bU1vZGVsTm9kZXN9YCkge1xuICAgICAgICBzdXBlcihuYW1lLCB0cmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIE1vZGVsTm9kZS5udW1Nb2RlbE5vZGVzICs9IDE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbTQgfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCB0b1JhZGlhbnMgZnJvbSAnLi4vdXRpbC9NYXRoJztcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL1RyYW5zZm9ybSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzcGVjdGl2ZUNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gICAgZm92O1xuICAgIGFzcGVjdDtcbiAgICB6TmVhcjtcbiAgICB6RmFyO1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKSwgZm92ID0gNjAsIGFzcGVjdCA9IDEsIHpOZWFyID0gMC4xLCB6RmFyID0gMTAwMCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5mb3YgPSBmb3Y7XG4gICAgICAgIHRoaXMuYXNwZWN0ID0gYXNwZWN0O1xuICAgICAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgfVxuICAgIGdldFZpZXdQcm9qZWN0aW9uTWF0cml4KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0aW9uTWF0cml4ID0gdGhpcy5nZXRQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIGNvbnN0IHZpZXdNYXRyaXggPSB0aGlzLmdldFZpZXdNYXRyaXgoKTtcbiAgICAgICAgcmV0dXJuIG00Lm11bHRpcGx5KHByb2plY3Rpb25NYXRyaXgsIHZpZXdNYXRyaXgpO1xuICAgIH1cbiAgICBnZXRQcm9qZWN0aW9uTWF0cml4KCkge1xuICAgICAgICByZXR1cm4gbTQucGVyc3BlY3RpdmUodG9SYWRpYW5zKHRoaXMuZm92KSwgdGhpcy5hc3BlY3QsIHRoaXMuek5lYXIsIHRoaXMuekZhcik7XG4gICAgfVxuICAgIGdldFZpZXdNYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBtNC5pbnZlcnNlKHRoaXMudHJhbnNmb3JtLmdldE1hdHJpeCgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkcmF3QnVmZmVySW5mbywgbTQsIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUsIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzLCBzZXRVbmlmb3JtcywgfSBmcm9tICd0d2dsLmpzJztcbmltcG9ydCBNZXNoTm9kZSBmcm9tICcuL01lc2hOb2RlJztcbmltcG9ydCBQZXJzcGVjdGl2ZUNhbWVyYSBmcm9tICcuL1BlcnNwZWN0aXZlQ2FtZXJhJztcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnbDtcbiAgICBzY2VuZTtcbiAgICBjYW1lcmE7XG4gICAgcmVuZGVyZXJVbmlmb3JtcztcbiAgICBhbmltYXRpb25SZXF1ZXN0SWQ7XG4gICAgcHJldmlvdXNUaW1lO1xuICAgIHVwZGF0ZUNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICAvLyBUaW1lIGluIG1zIHRoZSBsYXN0IGZyYW1lIHRvb2sgdG8gcmVuZGVyXG4gICAgZnJhbWVUaW1lID0gMDtcbiAgICBjb25zdHJ1Y3RvcihnbCwgc2NlbmUgPSBuZXcgU2NlbmUoKSwgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCkpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICAvLyBDb250ZW50IGluaXRpYWxpemF0aW9uXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMC4yLCAwLjA3NSwgMC4wLCAxLjApO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgfVxuICAgIGRyYXdTY2VuZSh0aW1lKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXJVbmlmb3JtcyA9IHtcbiAgICAgICAgICAgIHVfdGltZTogdGltZSAqIDAuMDAxLFxuICAgICAgICAgICAgdV9yZXNvbHV0aW9uOiBbdGhpcy5nbC5jYW52YXMud2lkdGgsIHRoaXMuZ2wuY2FudmFzLmhlaWdodF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHJhd05vZGUodGhpcy5zY2VuZS5yb290LCBtNC5pZGVudGl0eSgpKTtcbiAgICB9XG4gICAgZHJhd05vZGUobm9kZSwgcGFyZW50TWF0cml4KSB7XG4gICAgICAgIC8vIENvbXB1dGUgdGhpcyBub2RlJ3MgbWF0cml4XG4gICAgICAgIGxldCBtYXRyaXggPSBub2RlLmxvY2FsVHJhbnNmb3JtLmdldE1hdHJpeCgpO1xuICAgICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRNYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgIC8vIERyYXcgc2VsZlxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE1lc2hOb2RlKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIG1lc2gncyBidWZmZXIgaW5mb1xuICAgICAgICAgICAgY29uc3QgYnVmZmVySW5mbyA9IG5vZGUubWVzaC5nZXRCdWZmZXJJbmZvKHRoaXMuZ2wpO1xuICAgICAgICAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBub2RlLm1hdGVyaWFsLnNoYWRlci5nZXRQcm9ncmFtSW5mbyh0aGlzLmdsKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAgICAgICAgICAgIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKHRoaXMuZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgICAgICAgICAgIC8vIFNldCB1bmlmb3Jtc1xuICAgICAgICAgICAgc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIG5vZGUubWF0ZXJpYWwudW5pZm9ybXMpO1xuICAgICAgICAgICAgc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHRoaXMucmVuZGVyZXJVbmlmb3Jtcyk7XG4gICAgICAgICAgICAvLyBDb21wdXRlIG1hdHJpeFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhTWF0cml4ID0gdGhpcy5jYW1lcmEuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZE1hdHJpeCA9IG00Lm11bHRpcGx5KHRoaXMuY2FtZXJhLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KCksIG1hdHJpeCk7XG4gICAgICAgICAgICBjb25zdCBleWVQb3NpdGlvbiA9IG00LmludmVyc2UodGhpcy5jYW1lcmEuZ2V0Vmlld01hdHJpeCgpKS5zbGljZSgxMiwgMTUpO1xuICAgICAgICAgICAgc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHtcbiAgICAgICAgICAgICAgICB1X21hdHJpeDogcHJvamVjdGVkTWF0cml4LFxuICAgICAgICAgICAgICAgIHVfbW9kZWxNYXRyaXg6IG1hdHJpeCxcbiAgICAgICAgICAgICAgICB1X2V5ZVBvc2l0aW9uOiBleWVQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB1X2NhbWVyYU1hdHJpeDogY2FtZXJhTWF0cml4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIGRyYXdCdWZmZXJJbmZvKHRoaXMuZ2wsIGJ1ZmZlckluZm8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgYWxsIGNoaWxkcmVuXG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy5kcmF3Tm9kZShjaGlsZCwgbWF0cml4KSk7XG4gICAgfVxuICAgIGFkZFVwZGF0ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlbW92ZVVwZGF0ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy51cGRhdGVDYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcmVSZW5kZXIoZGVsdGFUaW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkZWx0YVRpbWUpKTtcbiAgICB9XG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy5wcmV2aW91c1RpbWUgPyB0aW1lIC0gdGhpcy5wcmV2aW91c1RpbWUgOiAwO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5wcmVSZW5kZXIoZGVsdGFUaW1lKTtcbiAgICAgICAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSh0aGlzLmdsLmNhbnZhcyk7XG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5nbC5jYW52YXMud2lkdGgsIHRoaXMuZ2wuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUodGltZSk7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChuZXdUaW1lKSA9PiB0aGlzLnJlbmRlcihuZXdUaW1lKSk7XG4gICAgfVxuICAgIHN0b3BSZW5kZXJpbmcoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2NlbmVOb2RlIGZyb20gJy4vU2NlbmVOb2RlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgICByb290O1xuICAgIGNvbnN0cnVjdG9yKHJvb3QgPSBuZXcgU2NlbmVOb2RlKCkpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgKiBBZGRzIGEgbm9kZSB0byB0aGUgcm9vdCBub2RlIG9mIHRoaXMgU2NlbmUuXG4gICAgICAgKlxuICAgICAgICogTGF6eSB3YXkgb2YgZG9pbmcgYHNjZW5lLnJvb3QuYWRkQ2hpbGQoKWAuXG4gICAgICAgKi9cbiAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHYzIH0gZnJvbSAndHdnbC5qcyc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcbi8qKlxuICogQmFzZSBjbGFzcyBmb3Igbm9kZXMgdGhhdCBpbmhhYml0IGEge0BsaW5rIFNjZW5lfVxuICpcbiAqIFNjZW5lTm9kZXMgY2FuIGhhdmUgY2hpbGRyZW4gb2YgdGhlIHNhbWUgdHlwZSwgd2hpY2ggZm9ybXMgdGhlIGJhc2lzIG9mIGEgU2NlbmUgR3JhcGhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVOb2RlIHtcbiAgICAvLyBUaGlzIG5vZGUncyB0cmFuc2Zvcm0gaXMgcmVsYXRpdmUgdG8gaXRzIHBhcmVudFxuICAgIGxvY2FsVHJhbnNmb3JtO1xuICAgIG5hbWU7XG4gICAgLy8gVGhlc2UgYXJlIHByaXZhdGUgYmVjYXVzZSB0aGV5IHNob3VsZG4ndCBiZSBtb2RpZmllZCBieSB1c2Vycy5cbiAgICAvLyBQYXJlbnQgaXMgc2V0IHdoZW4gYWRkaW5nIGNoaWxkcmVuIHRvIG5vZGVzLlxuICAgIHBhcmVudDtcbiAgICBjaGlsZHJlbjtcbiAgICAvLyBDb3VudGVyIGZvciB0aGUgbnVtYmVyIG9mIHNjZW5lIG5vZGVzIGNyZWF0ZWQgdGhpcyBzZXNzaW9uXG4gICAgc3RhdGljIHNjZW5lTm9kZXMgPSAwO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxvY2FsVHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpKSB7XG4gICAgICAgIHRoaXMubG9jYWxUcmFuc2Zvcm0gPSBsb2NhbFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/PyBgc2NlbmVOb2RlIyR7U2NlbmVOb2RlLnNjZW5lTm9kZXN9YDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgU2NlbmVOb2RlLnNjZW5lTm9kZXMgKz0gMTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICB9XG4gICAgYWRkQ2hpbGQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5hZGQobm9kZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKG5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUobm9kZSk7XG4gICAgfVxuICAgIHJlbW92ZVNlbGYoKSB7XG4gICAgICAgIHRoaXMuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIC8vIFRyYXZlcnNlcyB0byByb290IGlmIGFuY2VzdG9yIGlzIG51bGxcbiAgICBnZXRBbmNlc3RvclBvc2l0aW9uKGFuY2VzdG9yKSB7XG4gICAgICAgIGNvbnN0IG5vZGVTdGFjayA9IFtdO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXM7XG4gICAgICAgIC8vIFRoZSByb290IHdpbGwgYWx3YXlzIGJlIGZvdW5kXG4gICAgICAgIGxldCBhbmNlc3RvckZvdW5kID0gYW5jZXN0b3IgPT09IG51bGw7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGVTdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IGFuY2VzdG9yKSB7XG4gICAgICAgICAgICAgICAgYW5jZXN0b3JGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5nZXRQYXJlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFuY2VzdG9yRm91bmQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgLy8gVGhlIHN0YWNrIHdpbGwgYWx3YXlzIGF0IGxlYXN0IGhhdmUgMVxuICAgICAgICBsZXQgcG9zaXRpb24gPSBub2RlU3RhY2sucG9wKCkubG9jYWxUcmFuc2Zvcm0ucG9zaXRpb247XG4gICAgICAgIHdoaWxlIChub2RlU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGVTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdjMuYWRkKHBvc2l0aW9uLCBub2RlLmxvY2FsVHJhbnNmb3JtLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICAgIC8vIGdldEFuY2VzdG9yUG9zaXRpb24oYW5jZXN0b3I6IFNjZW5lTm9kZSk6IHYzLlZlYzMge1xuICAgIC8vICAgY29uc3QgYW5jZXN0b3JNYXRyaXggPSB0aGlzLmdldEFuY2VzdG9yTWF0cml4KGFuY2VzdG9yKTtcbiAgICAvLyAgIHJldHVybiBhbmNlc3Rvck1hdHJpeC5maWx0ZXIoKHY6IG51bWJlciwgaTogbnVtYmVyKSA9PiBpICE9PSAwICYmIChpICsgMSkgJSA0ID09PSAwKTtcbiAgICAvLyB9XG4gICAgLy8gZ2V0V29ybGRNYXRyaXgoKTogbTQuTWF0NCB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5nZXRBbmNlc3Rvck1hdHJpeChudWxsKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICBnZXRXb3JsZFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbmNlc3RvclBvc2l0aW9uKG51bGwpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVByb2dyYW1JbmZvIH0gZnJvbSAndHdnbC5qcyc7XG5pbXBvcnQgKiBhcyBQYXRoIGZyb20gJ3BhdGgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyIHtcbiAgICBzdGF0aWMgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgdmVydGV4U2hhZGVyO1xuICAgIGZyYWdtZW50U2hhZGVyO1xuICAgIHByb2dyYW1JbmZvO1xuICAgIGNvbnN0cnVjdG9yKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXhTaGFkZXI7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudFNoYWRlcjtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGZyb21VUkxzKHZlcnRleFNoYWRlclVSTCwgZnJhZ21lbnRTaGFkZXJVUkwpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh2ZXJ0ZXhTaGFkZXJVUkwpO1xuICAgICAgICBpZiAoIXJlcXVlc3Qub2spIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb3VsZG4ndCBmZXRjaCB2ZXJ0ZXggc2hhZGVyIGZyb20gVVJMOiAke3ZlcnRleFNoYWRlclVSTH0sIFN0YXR1czogJHtyZXF1ZXN0LnN0YXR1c1RleHR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBhd2FpdCBmZXRjaChmcmFnbWVudFNoYWRlclVSTCk7XG4gICAgICAgIGlmICghcmVxdWVzdC5vaykge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkbid0IGZldGNoIGZyYWdtZW50IHNoYWRlciBmcm9tIFVSTDogJHtmcmFnbWVudFNoYWRlclVSTH0sIFN0YXR1czogJHtyZXF1ZXN0LnN0YXR1c1RleHR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTaGFkZXIodmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIFByb2dyYW1JbmZvIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGNvbXBpbGF0aW9uIG9mIHRoaXMgU2hhZGVyLlxuICAgICAqIElmIHRoZSBQcm9ncmFtSW5mbyBoYXNuJ3QgYmVlbiBjcmVhdGVkIHlldCwgdGhpcyB3aWxsIGNyZWF0ZSBhbmQgY2FjaGUgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2wgV2ViR0wgY29udGV4dFxuICAgICAqIEByZXR1cm5zIENvbXBpbGVkIHNoYWRlciBsaW5rZWQgdG8gYSBwcm9ncmFtXG4gICAgICovXG4gICAgZ2V0UHJvZ3JhbUluZm8oZ2wpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW1JbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1JbmZvID0gY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIFt0aGlzLnZlcnRleFNoYWRlciwgdGhpcy5mcmFnbWVudFNoYWRlcl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyYW1JbmZvO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbG9hZCh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGUuaGFzKHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbmZpZ1JlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCBjb25maWcgPSAoYXdhaXQgY29uZmlnUmVxdWVzdC5qc29uKCkpO1xuICAgICAgICBjb25zdCBkaXIgPSBQYXRoLmRpcm5hbWUodXJsKTtcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyUGF0aCA9IFBhdGgucmVzb2x2ZShkaXIsIGNvbmZpZy52ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlclBhdGggPSBQYXRoLnJlc29sdmUoZGlyLCBjb25maWcuZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBjb25zdCBzaGFkZXIgPSBhd2FpdCBTaGFkZXIuZnJvbVVSTHModmVydGV4U2hhZGVyUGF0aCwgZnJhZ21lbnRTaGFkZXJQYXRoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5zZXQodXJsLCBzaGFkZXIpO1xuICAgICAgICByZXR1cm4gc2hhZGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHR3Z2wgZnJvbSAndHdnbC5qcyc7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGNvbnN0cnVjdGluZyBhIHRleHV0dXJlIGFuZCBpbmNsdWRlIGl0J3MgZGF0YSxcbiAqIGl0IHVzZXMgdGhlIFRleHR1cmVMb2FkZXIgY2xhc3MgZnJvbSBUaHJlZS5qcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZSB7XG4gICAgc3RhdGljIGNhY2hlID0gbmV3IE1hcCgpO1xuICAgIG1fdGV4dHVyZTtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB1cmwpIHtcbiAgICAgICAgdGhpcy5tX3RleHR1cmUgPSB0d2dsLmNyZWF0ZVRleHR1cmUoY29udGV4dCwge1xuICAgICAgICAgICAgc3JjOiB1cmwsXG4gICAgICAgICAgICBmbGlwWTogMSxcbiAgICAgICAgICAgIHdyYXA6IGNvbnRleHQuUkVQRUFULFxuICAgICAgICAgICAgbWluOiBjb250ZXh0Lk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICAgICAgICAgIG1hZzogY29udGV4dC5MSU5FQVIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbG9hZCh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGUuaGFzKHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhY2t5IHdheSBvZiBnZXR0aW5nIHRoZSBjb250ZXh0IHNvIHdlIGRvbid0XG4gICAgICAgIC8vIGhhdmUgdG8gcGFzcyBpdCBpbiB0byB0aGUgbG9hZCBmdW5jdGlvblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdLmdldENvbnRleHQoJ3dlYmdsMicpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUoY29udGV4dCwgdXJsKTtcbiAgICAgICAgdGhpcy5jYWNoZS5zZXQodXJsLCB0ZXh0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbTQsIHYzIH0gZnJvbSAndHdnbC5qcyc7XG5pbXBvcnQgdG9SYWRpYW5zIGZyb20gJy4uL3V0aWwvTWF0aCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm0ge1xuICAgIHBvc2l0aW9uO1xuICAgIHJvdGF0aW9uO1xuICAgIHNjYWxlO1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDAuMF0pLCByb3RhdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wLCAwLjBdKSwgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KFsxLjAsIDEuMCwgMS4wXSkpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgKiBVc2VzIFRXR0wgbTQgdG8gbXVsdGlwbHkgc2NhbGUsIHJvdGF0aW9uLCBhbmQgdHJhbnNsYXRpb24gbWF0cmljZXNcbiAgICAgICAqIHRvZ2V0aGVyIHRvIGdldCB0aGUgbWF0cml4IHJlcHJlc2VudGluZyB0aGlzIG1vZGVsJ3MgdHJhbnNmb3JtLlxuICAgICAgICpcbiAgICAgICAqIFRoZSBvcmRlciBvZiBvcGVyYXRpb25zIGlzIGltcG9ydGFudC4gV2Ugd2FudCB0aGUgZm9sbG93aW5nIGZvcm11bGE6XG4gICAgICAgKiBNYXRyaXggPSBUcmFuc2xhdGlvbiAqIFJvdGF0aW9uICogU2NhbGUgKiBJZGVudGl0eVxuICAgICAgICovXG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgICAgICBtNC5zY2FsZShtYXRyaXgsIHRoaXMuc2NhbGUsIG1hdHJpeCk7XG4gICAgICAgIG00LnRyYW5zbGF0ZShtYXRyaXgsIHRoaXMucG9zaXRpb24sIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVoobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsyXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVkobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblsxXSksIG1hdHJpeCk7XG4gICAgICAgIG00LnJvdGF0ZVgobWF0cml4LCB0b1JhZGlhbnModGhpcy5yb3RhdGlvblswXSksIG1hdHJpeCk7XG4gICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxuICAgIGdldEZvcndhcmRWZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGZvcndhcmQgPSB2My5jcmVhdGUoMCwgMCwgLTEpO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgICAgICBtNC5yb3RhdGVaKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMl0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVZKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMV0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVYKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMF0pLCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4gbTQudHJhbnNmb3JtRGlyZWN0aW9uKG1hdHJpeCwgZm9yd2FyZCk7XG4gICAgfVxuICAgIGdldFJpZ2h0VmVjdG9yKCkge1xuICAgICAgICBjb25zdCByaWdodCA9IHYzLmNyZWF0ZSgxLCAwLCAwKTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbTQuaWRlbnRpdHkoKTtcbiAgICAgICAgbTQucm90YXRlWihtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzJdKSwgbWF0cml4KTtcbiAgICAgICAgbTQucm90YXRlWShtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzFdKSwgbWF0cml4KTtcbiAgICAgICAgbTQucm90YXRlWChtYXRyaXgsIHRvUmFkaWFucyh0aGlzLnJvdGF0aW9uWzBdKSwgbWF0cml4KTtcbiAgICAgICAgcmV0dXJuIG00LnRyYW5zZm9ybURpcmVjdGlvbihtYXRyaXgsIHJpZ2h0KTtcbiAgICB9XG4gICAgZ2V0VXBWZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHVwID0gdjMuY3JlYXRlKDAsIDEsIDApO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgICAgICBtNC5yb3RhdGVaKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMl0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVZKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMV0pLCBtYXRyaXgpO1xuICAgICAgICBtNC5yb3RhdGVYKG1hdHJpeCwgdG9SYWRpYW5zKHRoaXMucm90YXRpb25bMF0pLCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4gbTQudHJhbnNmb3JtRGlyZWN0aW9uKG1hdHJpeCwgdXApO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFBhdGggZnJvbSAncGF0aCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBNYXRlcmlhbCwgbWF0ZXJpYWxMb2FkZXJNYXAsIH0gZnJvbSAnLi9fTWF0ZXJpYWxJbnRlcm5hbCc7XG5pbXBvcnQgU2hhZGVyIGZyb20gJy4uL1NoYWRlcic7XG5pbXBvcnQgVGV4dHVyZSBmcm9tICcuLi9UZXh0dXJlJztcbmNvbnN0IHNoYWRlclVybCA9ICcvYXNzZXRzL3NoYWRlcnMvYWxiZWRvL3NoYWRlci5qc29uJztcbmNvbnN0IGFsYmVkb1NoYWRlciA9IGF3YWl0IFNoYWRlci5sb2FkKHNoYWRlclVybCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNsYXNzIEFsYmVkb01hdGVyaWFsIGV4dGVuZHMgTWF0ZXJpYWwge1xuICAgIHN0YXRpYyB0eXBlID0gJ0FsYmVkb01hdGVyaWFsJztcbiAgICB0ZXh0dXJlO1xuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUpIHtcbiAgICAgICAgc3VwZXIoYWxiZWRvU2hhZGVyLCB7IHVfdGV4dHVyZTogdGV4dHVyZSB9KTtcbiAgICAgICAgdGhpcy5zZXRUZXh0dXJlKHRleHR1cmUpO1xuICAgIH1cbiAgICBzZXRUZXh0dXJlKHRleHR1cmUpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X3RleHR1cmUgPSB0ZXh0dXJlLm1fdGV4dHVyZTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGxvYWRGcm9tQ29uZmlnKHVybCwgY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IFBhdGguZGlybmFtZSh1cmwpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlVXJsID0gUGF0aC5yZXNvbHZlKGRpciwgY29uZmlnLnRleHR1cmUpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gYXdhaXQgVGV4dHVyZS5sb2FkKHRleHR1cmVVcmwpO1xuICAgICAgICByZXR1cm4gbmV3IEFsYmVkb01hdGVyaWFsKHRleHR1cmUpO1xuICAgIH1cbn1cbm1hdGVyaWFsTG9hZGVyTWFwLnNldCgnQWxiZWRvTWF0ZXJpYWwnLCBBbGJlZG9NYXRlcmlhbC5sb2FkRnJvbUNvbmZpZyk7XG4iLCJpbXBvcnQgeyB2MyB9IGZyb20gJ3R3Z2wuanMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgTWF0ZXJpYWwsIG1hdGVyaWFsTG9hZGVyTWFwIH0gZnJvbSAnLi9fTWF0ZXJpYWxJbnRlcm5hbCc7XG5pbXBvcnQgU2hhZGVyIGZyb20gJy4uL1NoYWRlcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3InO1xuY29uc3Qgc2hhZGVyVXJsID0gJy9hc3NldHMvc2hhZGVycy9iYXNlQ29sb3Ivc2hhZGVyLmpzb24nO1xuY29uc3QgYmFzZUNvbG9yU2hhZGVyID0gYXdhaXQgU2hhZGVyLmxvYWQoc2hhZGVyVXJsKTtcbmNvbnN0IERFRkFVTFRfVV9DT0xPUiA9IHYzLmNyZWF0ZSgwLjAsIDAuMCwgMC4wKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgQmFzZUNvbG9yTWF0ZXJpYWwgZXh0ZW5kcyBNYXRlcmlhbCB7XG4gICAgY29sb3I7XG4gICAgY29uc3RydWN0b3IoY29sb3IpIHtcbiAgICAgICAgc3VwZXIoYmFzZUNvbG9yU2hhZGVyLCB7IHVfY29sb3I6IERFRkFVTFRfVV9DT0xPUiB9KTtcbiAgICAgICAgdGhpcy5zZXRDb2xvcihjb2xvcik7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X2NvbG9yID0gY29sb3IudG9WZWMzKCk7XG4gICAgfVxuICAgIGdldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcjtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGxvYWRGcm9tQ29uZmlnKHVybCwgY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ29sb3IuZnJvbUhleChjb25maWcuY29sb3IpO1xuICAgICAgICByZXR1cm4gbmV3IEJhc2VDb2xvck1hdGVyaWFsKGNvbG9yKTtcbiAgICB9XG59XG5tYXRlcmlhbExvYWRlck1hcC5zZXQoJ0Jhc2VDb2xvck1hdGVyaWFsJywgQmFzZUNvbG9yTWF0ZXJpYWwubG9hZEZyb21Db25maWcpO1xuIiwiaW1wb3J0ICogYXMgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBTaGFkZXIgZnJvbSAnLi4vU2hhZGVyJztcbmV4cG9ydCBjb25zdCBtYXRlcmlhbExvYWRlck1hcCA9IG5ldyBNYXAoKTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgYSBjdXN0b20gTWF0ZXJpYWwuIE1lYW50IHRvIGJlIHN1YmNsYXNzZWQgdG8gY3JlYXRlXG4gKiB0YWlsb3JlZCBtYXRlcmlhbHMgdGhhdCBhcmUgY3VzdG9taXplZCB2aWEgYSBmZXcgZXhwb3NlZCB1bmlmb3Jtcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hdGVyaWFsIHtcbiAgICBzdGF0aWMgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgc3RhdGljIHR5cGUgPSAnTWF0ZXJpYWwnO1xuICAgIHNoYWRlcjtcbiAgICB1bmlmb3JtcztcbiAgICBjb25zdHJ1Y3RvcihzaGFkZXIsIHVuaWZvcm1zKSB7XG4gICAgICAgIHRoaXMuc2hhZGVyID0gc2hhZGVyO1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBsb2FkKHVybCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZS5oYXModXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnUmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsQ29uZmlnID0gKGF3YWl0IGNvbmZpZ1JlcXVlc3QuanNvbigpKTtcbiAgICAgICAgaWYgKCFtYXRlcmlhbExvYWRlck1hcC5oYXMobWF0ZXJpYWxDb25maWcudHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWF0ZXJpYWwgbG9hZGVyIGZvdW5kIGZvciBnaXZlbiBtYXRlcmlhbCB0eXBlLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvYWRlckZ1bmN0aW9uID0gbWF0ZXJpYWxMb2FkZXJNYXAuZ2V0KG1hdGVyaWFsQ29uZmlnLnR5cGUpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IGF3YWl0IGxvYWRlckZ1bmN0aW9uKHVybCwgbWF0ZXJpYWxDb25maWcpO1xuICAgICAgICB0aGlzLmNhY2hlLnNldCh1cmwsIG1hdGVyaWFsKTtcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFsO1xuICAgIH1cbiAgICAvLyBDYW4ndCB1c2UgUmVzb3VyY2VTY2hlbWEgYXMgY29uZmlnIHR5cGUgaGVyZSBiZWNhdXNlIGl0IHByZXZlbnRzXG4gICAgLy8gc3ViY2xhc3NlcyBmcm9tIHVzaW5nIHRoZWlyIG93biBSZXNvdXJjZVNjaGVtYSB0eXBlLiA+OihcbiAgICBzdGF0aWMgYXN5bmMgbG9hZEZyb21Db25maWcodXJsLCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxDb25maWcgPSBjb25maWc7XG4gICAgICAgIGNvbnN0IGRpciA9IFBhdGguZGlybmFtZSh1cmwpO1xuICAgICAgICBjb25zdCBzaGFkZXJVcmwgPSBQYXRoLnJlc29sdmUoZGlyLCBtYXRlcmlhbENvbmZpZy5zaGFkZXIpO1xuICAgICAgICBjb25zdCBzaGFkZXIgPSBhd2FpdCBTaGFkZXIubG9hZChzaGFkZXJVcmwpO1xuICAgICAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSBtYXRlcmlhbENvbmZpZztcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbChzaGFkZXIsIHVuaWZvcm1zKTtcbiAgICB9XG59XG5tYXRlcmlhbExvYWRlck1hcC5zZXQoJ01hdGVyaWFsJywgTWF0ZXJpYWwubG9hZEZyb21Db25maWcpO1xuIiwiaW1wb3J0ICogYXMgUGF0aCBmcm9tICdwYXRoJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IE1hdGVyaWFsLCBtYXRlcmlhbExvYWRlck1hcCwgfSBmcm9tICcuL19NYXRlcmlhbEludGVybmFsJztcbmltcG9ydCBTaGFkZXIgZnJvbSAnLi4vU2hhZGVyJztcbmltcG9ydCBUZXh0dXJlIGZyb20gJy4uL1RleHR1cmUnO1xuY29uc3QgUEJSU2hhZGVyID0gYXdhaXQgU2hhZGVyLmxvYWQoJy9hc3NldHMvc2hhZGVycy9wYnIvc2hhZGVyLmpzb24nKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBCUk1hdGVyaWFsIGV4dGVuZHMgTWF0ZXJpYWwge1xuICAgIHN0YXRpYyB0eXBlID0gJ1BCUk1hdGVyaWFsJztcbiAgICBhbGJlZG87XG4gICAgbm9ybWFsO1xuICAgIG1yYW87XG4gICAgbGlnaHRQb3NpdGlvbnM7XG4gICAgbGlndGhDb2xvcnM7XG4gICAgY29uc3RydWN0b3IoYWxiZWRvLCBub3JtYWwsIG1yYW8sIHBMaWdodFBvcywgcExpZ2h0Q29scywgZExpZ2h0RGlyLCBkTGlnaHRDb2wpIHtcbiAgICAgICAgc3VwZXIoUEJSU2hhZGVyLCB7XG4gICAgICAgICAgICB1X2FsYmVkbzogYWxiZWRvLFxuICAgICAgICAgICAgdV9ub3JtYWw6IG5vcm1hbCxcbiAgICAgICAgICAgIHVfbXJhbzogbXJhbyxcbiAgICAgICAgICAgIHVfZExpZ2h0RGlyZWN0aW9uOiBkTGlnaHREaXIsXG4gICAgICAgICAgICB1X2RMaWdodENvbG9yOiBkTGlnaHRDb2wsXG4gICAgICAgICAgICB1X3BMaWdodFBvc2l0aW9uczogcExpZ2h0UG9zLFxuICAgICAgICAgICAgdV9wTGlnaHRDb2xvcnM6IHBMaWdodENvbHMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEFsYmVkbyhhbGJlZG8pO1xuICAgICAgICB0aGlzLnNldE5vcm1hbChub3JtYWwpO1xuICAgICAgICB0aGlzLnNldE1yYW8obXJhbyk7XG4gICAgICAgIHRoaXMuc2V0TGlnaHRzKHBMaWdodFBvcywgcExpZ2h0Q29scyk7XG4gICAgfVxuICAgIHNldEFsYmVkbyhhbGJlZG8pIHtcbiAgICAgICAgdGhpcy5hbGJlZG8gPSBhbGJlZG87XG4gICAgICAgIHRoaXMudW5pZm9ybXMudV9hbGJlZG8gPSBhbGJlZG8ubV90ZXh0dXJlO1xuICAgIH1cbiAgICBzZXROb3JtYWwobm9ybWFsKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfbm9ybWFsID0gbm9ybWFsLm1fdGV4dHVyZTtcbiAgICB9XG4gICAgc2V0TXJhbyhtcmFvKSB7XG4gICAgICAgIHRoaXMubXJhbyA9IG1yYW87XG4gICAgICAgIHRoaXMudW5pZm9ybXMudV9tcmFvID0gbXJhby5tX3RleHR1cmU7XG4gICAgfVxuICAgIHNldExpZ2h0cyhsaWdodFBvcywgbGlnaHRDb2xzKSB7XG4gICAgICAgIHRoaXMubGlnaHRQb3NpdGlvbnMgPSBsaWdodFBvcztcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X3BMaWdodFBvc2l0aW9ucyA9IGxpZ2h0UG9zO1xuICAgICAgICB0aGlzLmxpZ3RoQ29sb3JzID0gbGlnaHRDb2xzO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfcExpZ2h0Q29sb3JzID0gbGlnaHRDb2xzO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgbG9hZEZyb21Db25maWcodXJsLCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgZGlyID0gUGF0aC5kaXJuYW1lKHVybCk7XG4gICAgICAgIGNvbnN0IGFsYmVkb1VybCA9IFBhdGgucmVzb2x2ZShkaXIsIGNvbmZpZy5hbGJlZG8pO1xuICAgICAgICBjb25zdCBhbGJlZG8gPSBhd2FpdCBUZXh0dXJlLmxvYWQoYWxiZWRvVXJsKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsVXJsID0gUGF0aC5yZXNvbHZlKGRpciwgY29uZmlnLm5vcm1hbCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IGF3YWl0IFRleHR1cmUubG9hZChub3JtYWxVcmwpO1xuICAgICAgICBjb25zdCBtcmFvVXJsID0gUGF0aC5yZXNvbHZlKGRpciwgY29uZmlnLm1yYW8pO1xuICAgICAgICBjb25zdCBtcmFvID0gYXdhaXQgVGV4dHVyZS5sb2FkKG1yYW9VcmwpO1xuICAgICAgICBjb25zdCBzY2VuZUxpZ2h0aW5nUGF0aCA9ICcvYXNzZXRzL2xpZ2h0aW5nLmpzb24nO1xuICAgICAgICBjb25zdCBjb25maWdSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goc2NlbmVMaWdodGluZ1BhdGgpO1xuICAgICAgICBjb25zdCBzY2VuZUxpZ2h0aW5nQ29uZmlnID0gKGF3YWl0IGNvbmZpZ1JlcXVlc3QuanNvbigpKTtcbiAgICAgICAgY29uc3QgeyBwTGlnaHRQb3NpdGlvbnMsIHBMaWdodENvbG9ycywgZExpZ2h0RGlyZWN0aW9uLCBkTGlnaHRDb2xvciwgfSA9IHNjZW5lTGlnaHRpbmdDb25maWc7XG4gICAgICAgIHJldHVybiBuZXcgUEJSTWF0ZXJpYWwoYWxiZWRvLCBub3JtYWwsIG1yYW8sIHBMaWdodFBvc2l0aW9ucywgcExpZ2h0Q29sb3JzLCBkTGlnaHREaXJlY3Rpb24sIGRMaWdodENvbG9yKTtcbiAgICB9XG59XG5tYXRlcmlhbExvYWRlck1hcC5zZXQoJ1BCUk1hdGVyaWFsJywgUEJSTWF0ZXJpYWwubG9hZEZyb21Db25maWcpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vLyBTZWUgaHR0cHM6Ly9tZWRpdW0uY29tL3Zpc3VhbC1kZXZlbG9wbWVudC9ob3ctdG8tZml4LW5hc3R5LWNpcmN1bGFyLWRlcGVuZGVuY3ktaXNzdWVzLW9uY2UtYW5kLWZvci1hbGwtaW4tamF2YXNjcmlwdC10eXBlc2NyaXB0LWEwNGM5ODdjZjBkZVxuLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhpcyBwYXR0ZXJuXG5leHBvcnQgKiBmcm9tICcuL01hdGVyaWFsJztcbmV4cG9ydCAqIGZyb20gJy4vQWxiZWRvTWF0ZXJpYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9CYXNlQ29sb3JNYXRlcmlhbCc7XG5leHBvcnQgKiBmcm9tICcuL1BCUk1hdGVyaWFsJztcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS9HYW1lJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERlYnVnVUkgZnJvbSAnLi9yZW5kZXJlci9EZWJ1Z1VJJztcbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG4gICAgLy8gQ3JlYXRlIHRoZSBnYW1lIGxvZ2ljIGhhbmRsZXJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZ2wpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBkZWJ1Z1VJID0gbmV3IERlYnVnVUkoZ2FtZS5yZW5kZXJlciwgYXBwV3JhcHBlcik7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuc3RvcEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgfVxufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lVGltZVBhbmVsIHtcbiAgICBzdGF0aWMgY2xhc3NOYW1lID0gJ2RlYnVnLXBhbmVsJztcbiAgICByZW5kZXJlcjtcbiAgICBlbGVtZW50O1xuICAgIGZyYW1lVGltZVVwZGF0ZUludGVydmFsSWQ7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IEZyYW1lVGltZVBhbmVsLmNsYXNzTmFtZTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBmcmFtZSB0aW1lIDMwIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgdGhpcy5mcmFtZVRpbWVVcGRhdGVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IGBGcmFtZSB0aW1lOiAke3RoaXMucmVuZGVyZXIuZnJhbWVUaW1lfSBtc2A7XG4gICAgICAgIH0sIDMwIC8gMTAwMCk7XG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mcmFtZVRpbWVVcGRhdGVJbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZyYW1lVGltZVVwZGF0ZUludGVydmFsSWQpO1xuICAgIH1cbn1cbiIsImNvbnN0IGNvbnRyb2xzID0gW1xuICAgIHsgbGFiZWw6ICdXJywgYWN0aW9uOiAnTW92ZSBmb3J3YXJkJyB9LFxuICAgIHsgbGFiZWw6ICdBJywgYWN0aW9uOiAnTW92ZSBsZWZ0JyB9LFxuICAgIHsgbGFiZWw6ICdTJywgYWN0aW9uOiAnTW92ZSBiYWNrd2FyZCcgfSxcbiAgICB7IGxhYmVsOiAnRCcsIGFjdGlvbjogJ01vdmUgcmlnaHQnIH0sXG4gICAgeyBsYWJlbDogJ1EnLCBhY3Rpb246ICdBdHRhY2sgYWRqYWNlbnQgdGlsZXMnIH0sXG4gICAgeyBsYWJlbDogJ0knLCBhY3Rpb246ICdUb2dnbGUgaW52ZW50b3J5JyB9LFxuICAgIHsgbGFiZWw6ICcxLTknLCBhY3Rpb246ICdVc2UgaW52ZW50b3J5IHNsb3QgaXRlbScgfSxcbiAgICB7IGxhYmVsOiAnLicsIGFjdGlvbjogJ1RvZ2dsZSBkZWJ1ZyBtb2RlJyB9LFxuICAgIHsgbGFiZWw6ICcsJywgYWN0aW9uOiAnVG9nZ2xlIGZyZWUgY2FtZXJhJyB9LFxuICAgIHsgbGFiZWw6ICdoJywgYWN0aW9uOiAnRnJlZSBjYW1lcmEgbW92ZSBsZWZ0JyB9LFxuICAgIHsgbGFiZWw6ICdqJywgYWN0aW9uOiAnRnJlZSBjYW1lcmEgbW92ZSBiYWNrd2FyZCcgfSxcbiAgICB7IGxhYmVsOiAnaycsIGFjdGlvbjogJ0ZyZWUgY2FtZXJhIG1vdmUgZm9yd2FyZCcgfSxcbiAgICB7IGxhYmVsOiAnbCcsIGFjdGlvbjogJ0ZyZWUgY2FtZXJhIG1vdmUgcmlnaHQnIH0sXG4gICAgeyBsYWJlbDogJ1snLCBhY3Rpb246ICdGcmVlIGNhbWVyYSBtb3ZlIGRvd24nIH0sXG4gICAgeyBsYWJlbDogJ10nLCBhY3Rpb246ICdGcmVlIGNhbWVyYSBtb3ZlIHVwJyB9LFxuICAgIHsgbGFiZWw6ICdcXFxcJywgYWN0aW9uOiAnUmUtZ2VuZXJhdGUgbWFwIChub3QgcmVjb21tZW5kZWQpJyB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzUGFuZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBnYW1lO1xuICAgIHRpdGxlRWxlbWVudDtcbiAgICBzdGF0c0VsZW1lbnQ7XG4gICAgZXF1aXBwZWRXZWFwb25FbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZ2FtZS1wYW5lJztcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBDb250cm9sc1BhbmUuY3JlYXRlVGl0bGVFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBjb250cm9sc0VsZW1lbnRzID0gY29udHJvbHMubWFwKCh7IGxhYmVsLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2xhYmVsfTo8L3N0cm9uZz4gJHthY3Rpb259YDtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hcHBlbmQoLi4uY29udHJvbHNFbGVtZW50cyk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVUaXRsZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAncGFuZS10aXRsZSc7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0NvbnRyb2xzJztcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb250cm9scy1wYW5lJywgQ29udHJvbHNQYW5lKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMb2dQYW5lIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGdhbWU7XG4gICAgdGl0bGVFbGVtZW50O1xuICAgIG1lc3NhZ2VFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdnYW1lLXBhbmUnLCAnZ2FtZS1sb2ctcGFuZScpO1xuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IEdhbWVMb2dQYW5lLmNyZWF0ZVRpdGxlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMudGl0bGVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZUVsZW1lbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVGl0bGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3BhbmUtdGl0bGUnO1xuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9ICdHYW1lIExvZyc7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5nYW1lLm1lc3NhZ2U7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdnYW1lLWxvZy1wYW5lJywgR2FtZUxvZ1BhbmUpO1xuIiwiaW1wb3J0IENvbnRyb2xzUGFuZSBmcm9tICcuL0NvbnRyb2xzUGFuZSc7XG5pbXBvcnQgR2FtZUxvZ1BhbmUgZnJvbSAnLi9HYW1lTG9nUGFuZSc7XG5pbXBvcnQgSW52ZW50b3J5UGFuZSBmcm9tICcuL0ludmVudG9yeVBhbmUnO1xuaW1wb3J0IFBsYXllclBhbmUgZnJvbSAnLi9QbGF5ZXJQYW5lJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQYW5lbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBnYW1lO1xuICAgIHBsYXllclBhbmU7XG4gICAgY29udHJvbHNQYW5lO1xuICAgIGludmVudG9yeVBhbmU7XG4gICAgZ2FtZUxvZ1BhbmU7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnBsYXllclBhbmUgPSBuZXcgUGxheWVyUGFuZShnYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnBsYXllclBhbmUpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzUGFuZSA9IG5ldyBDb250cm9sc1BhbmUoZ2FtZSk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sc1BhbmUpO1xuICAgICAgICB0aGlzLmludmVudG9yeVBhbmUgPSBuZXcgSW52ZW50b3J5UGFuZShnYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmludmVudG9yeVBhbmUpO1xuICAgICAgICB0aGlzLmdhbWVMb2dQYW5lID0gbmV3IEdhbWVMb2dQYW5lKGdhbWUpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZ2FtZUxvZ1BhbmUpO1xuICAgICAgICAvLyBNb3VudCBzZWxmXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgLy8gaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgLy8gICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4gdGhpcy5kaXNwb3NlKCkpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJQYW5lLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmludmVudG9yeVBhbmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZUxvZ1BhbmUudXBkYXRlKCk7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdnYW1lLXBhbmVsJywgR2FtZVBhbmVsKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vLi4vZ2FtZS9lbnRpdGllcy9JdGVtJztcbmltcG9ydCBXZWFwb24gZnJvbSAnLi4vLi4vZ2FtZS9lbnRpdGllcy9XZWFwb24nO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi4vLi4vZ2FtZS9HYW1lJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeVBhbmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgZ2FtZTtcbiAgICB0aXRsZUVsZW1lbnQ7XG4gICAgaXRlbXNXcmFwcGVyO1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZ2FtZS1wYW5lJztcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBJbnZlbnRvcnlQYW5lLmNyZWF0ZVRpdGxlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMudGl0bGVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLml0ZW1zV3JhcHBlcik7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVUaXRsZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAncGFuZS10aXRsZSc7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0ludmVudG9yeSc7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjcmVhdGVJbnZlbnRvcnlFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgaW52ZW50b3J5RWxlbWVudHMgPSB0aGlzLmdhbWUucGxheWVyLmludmVudG9yeS5pbnZlbnRvcnkubWFwKChlbnRpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuY2xhc3NOYW1lID0gJ2ludmVudG9yeS1lbnRpdHktd3JhcHBlcic7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIFdlYXBvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYXBvbiA9IGVudGl0eTtcbiAgICAgICAgICAgICAgICBsYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdHJvbmc+JHtpbmRleCArIDF9LiAoV2VhcG9uKSAke3dlYXBvbi5uYW1lfTwvc3Ryb25nPmA7XG4gICAgICAgICAgICAgICAgYm9keUVsZW1lbnQuaW5uZXJUZXh0ID0gYERhbWFnZTogJHt3ZWFwb24uZGFtYWdlfSwgU2tpbGwgQm9udXM6ICR7d2VhcG9uLnNraWxsQm9udXN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVudGl0eSBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZW50aXR5O1xuICAgICAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke2luZGV4ICsgMX0uIChJdGVtKSAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgICAgIGJvZHlFbGVtZW50LmlubmVyVGV4dCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyRWxlbWVudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbnZlbnRvcnlFbGVtZW50cztcbiAgICB9XG4gICAgc2V0VmlzaWJpbGl0eShpc1Zpc2libGUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmlsaXR5KHRoaXMuZ2FtZS5zdGF0ZSA9PT0gR2FtZVN0YXRlLklOVkVOVE9SWSk7XG4gICAgICAgIHRoaXMuaXRlbXNXcmFwcGVyLnJlcGxhY2VDaGlsZHJlbiguLi50aGlzLmNyZWF0ZUludmVudG9yeUVsZW1lbnRzKCkpO1xuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaW52ZW50b3J5LXBhbmUnLCBJbnZlbnRvcnlQYW5lKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclBhbmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgZ2FtZTtcbiAgICB0aXRsZUVsZW1lbnQ7XG4gICAgc3RhdHNFbGVtZW50O1xuICAgIGVxdWlwcGVkV2VhcG9uRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2dhbWUtcGFuZSc7XG4gICAgICAgIHRoaXMudGl0bGVFbGVtZW50ID0gUGxheWVyUGFuZS5jcmVhdGVUaXRsZUVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHN0YXRzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHNMYWJlbC5pbm5lckhUTUwgPSAnPHN0cm9uZz5TdGF0czo8L3N0cm9uZz4nO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHN0YXRzTGFiZWwpO1xuICAgICAgICB0aGlzLnN0YXRzRWxlbWVudCA9IFBsYXllclBhbmUuY3JlYXRlU3RhdHNFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5zdGF0c0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBlcXVpcHBlZFdlYXBvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVxdWlwcGVkV2VhcG9uTGFiZWwuY2xhc3NOYW1lID0gJ3BsYXllci1wYW5lLWVxdWlwLWxhYmVsJztcbiAgICAgICAgZXF1aXBwZWRXZWFwb25MYWJlbC5pbm5lckhUTUwgPSAnPHN0cm9uZz5FcXVpcHBlZCBXZWFwb246PC9zdHJvbmc+JztcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChlcXVpcHBlZFdlYXBvbkxhYmVsKTtcbiAgICAgICAgdGhpcy5lcXVpcHBlZFdlYXBvbkVsZW1lbnQgPSBQbGF5ZXJQYW5lLmNyZWF0ZUVxdWlwcGVkV2VhcG9uRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZXF1aXBwZWRXZWFwb25FbGVtZW50KTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRpdGxlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdwYW5lLXRpdGxlJztcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSAnUGxheWVyJztcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVTdGF0c0VsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAncGxheWVyLXBhbmUtc3RhdHMnO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUVxdWlwcGVkV2VhcG9uRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdwbGF5ZXItcGFuZS1lcXVpcHBlZC13ZWFwb24nO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRzRWxlbWVudC5pbm5lclRleHQgPSBgJHt0aGlzLmdhbWUucGxheWVyLnN0cmluZ1JlcHJlc2VudGF0aW9uKCl9YDtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5wbGF5ZXIuZXF1aXBwZWRXZWFwb24pIHtcbiAgICAgICAgICAgIHRoaXMuZXF1aXBwZWRXZWFwb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZ2FtZS5wbGF5ZXIuZXF1aXBwZWRXZWFwb24uc3RyaW5nUmVwcmVzZW50YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXF1aXBwZWRXZWFwb25FbGVtZW50LmlubmVyVGV4dCA9ICdOb25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGxheWVyLXBhbmUnLCBQbGF5ZXJQYW5lKTtcbiIsImltcG9ydCBTY2VuZVBhbmVsSGVhZGVyIGZyb20gJy4vU2NlbmVQYW5lbEhlYWRlcic7XG5pbXBvcnQgU2NlbmVQYW5lbExpc3QgZnJvbSAnLi9TY2VuZVBhbmVsTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVBhbmVsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJlbmRlcmVyO1xuICAgIGhlYWRlcjtcbiAgICBsaXN0O1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgU2NlbmVQYW5lbEhlYWRlcigpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFNjZW5lUGFuZWxMaXN0KHRoaXMucmVuZGVyZXIuc2NlbmUpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMubGlzdCk7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzY2VuZS1wYW5lbCcsIFNjZW5lUGFuZWwpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVQYW5lbEhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSAnU2NlbmUgSGllcmFyY2h5JztcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NjZW5lLXBhbmVsLWhlYWRlcicsIFNjZW5lUGFuZWxIZWFkZXIpO1xuIiwiaW1wb3J0IFNjZW5lUGFuZWxMaXN0Tm9kZSBmcm9tICcuL1NjZW5lUGFuZWxMaXN0Tm9kZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVBhbmVsTGlzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzY2VuZTtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xuICAgIH1cbiAgICB1cGRhdGVMaXN0KCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20odGhpcy5zY2VuZS5yb290LmdldENoaWxkcmVuKCkpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ldyBTY2VuZVBhbmVsTGlzdE5vZGUobm9kZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NjZW5lLXBhbmVsLWxpc3QnLCBTY2VuZVBhbmVsTGlzdCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVBhbmVsTGlzdE5vZGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgbGV2ZWw7XG4gICAgc2NlbmVOb2RlO1xuICAgIHdyYXBwZXI7XG4gICAgZXhwYW5kQnV0dG9uO1xuICAgIGNoaWxkcmVuTm9kZXM7XG4gICAgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3Ioc2NlbmVOb2RlLCBsZXZlbCA9IDApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZU5vZGUgPSBzY2VuZU5vZGU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMubGV2ZWwgKiAwLjV9cmVtYDtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc05hbWUgPSAnbm9kZS13cmFwcGVyJztcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgICAvLyBDcmVhdGUgY29sbGFwc2libGUgYnV0dG9uXG4gICAgICAgIHRoaXMuZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZXhwYW5kQnV0dG9uLmNsYXNzTmFtZSA9ICdleHBhbmQtYnV0dG9uJztcbiAgICAgICAgaWYgKHNjZW5lTm9kZS5nZXRDaGlsZHJlbigpLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSAnKyc7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSAnICc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmV4cGFuZEJ1dHRvbik7XG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBgJHt0aGlzLnNjZW5lTm9kZS5uYW1lfSA6ICR7dGhpcy5zY2VuZU5vZGUuY29uc3RydWN0b3IubmFtZX1gO1xuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKGxhYmVsKTtcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5pc09wZW4gPyAnLScgOiAnKyc7XG4gICAgICAgIC8vIENyZWF0ZSBjaGlsZHJlbiB3cmFwcGVyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMuc2NlbmVOb2RlLmdldENoaWxkcmVuKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbk5vZGVzID0gbm9kZXMubWFwKChub2RlKSA9PiBuZXcgU2NlbmVQYW5lbExpc3ROb2RlKG5vZGUsIHRoaXMubGV2ZWwgKyAxKSk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZCguLi50aGlzLmNoaWxkcmVuTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW4odGhpcy53cmFwcGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NlbmUtcGFuZWwtbGlzdC1ub2RlJywgU2NlbmVQYW5lbExpc3ROb2RlKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MC4wKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==