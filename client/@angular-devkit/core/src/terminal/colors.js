"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const object_1 = require("../utils/object");
const kColors = {
    modifiers: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
    },
    colors: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
    },
    bgColors: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
    },
};
const kColorFunctions = object_1.mapObject(kColors, (_, v) => {
    return object_1.mapObject(v, (_, vv) => (x) => `\u001b[${vv[0]}m${x}\u001b[${vv[1]}m`);
});
var colors;
(function (colors) {
    colors.reset = kColorFunctions.modifiers.reset;
    colors.bold = kColorFunctions.modifiers.bold;
    colors.dim = kColorFunctions.modifiers.dim;
    colors.italic = kColorFunctions.modifiers.italic;
    colors.underline = kColorFunctions.modifiers.underline;
    colors.inverse = kColorFunctions.modifiers.inverse;
    colors.hidden = kColorFunctions.modifiers.hidden;
    colors.strikethrough = kColorFunctions.modifiers.strikethrough;
    colors.black = kColorFunctions.colors.black;
    colors.red = kColorFunctions.colors.red;
    colors.green = kColorFunctions.colors.green;
    colors.yellow = kColorFunctions.colors.yellow;
    colors.blue = kColorFunctions.colors.blue;
    colors.magenta = kColorFunctions.colors.magenta;
    colors.cyan = kColorFunctions.colors.cyan;
    colors.white = kColorFunctions.colors.white;
    colors.grey = kColorFunctions.colors.gray;
    colors.gray = kColorFunctions.colors.gray;
    colors.bgBlack = kColorFunctions.bgColors.bgBlack;
    colors.bgRed = kColorFunctions.bgColors.bgRed;
    colors.bgGreen = kColorFunctions.bgColors.bgGreen;
    colors.bgYellow = kColorFunctions.bgColors.bgYellow;
    colors.bgBlue = kColorFunctions.bgColors.bgBlue;
    colors.bgMagenta = kColorFunctions.bgColors.bgMagenta;
    colors.bgCyan = kColorFunctions.bgColors.bgCyan;
    colors.bgWhite = kColorFunctions.bgColors.bgWhite;
})(colors = exports.colors || (exports.colors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy90ZXJtaW5hbC9jb2xvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCw0Q0FBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDZCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNiLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2YsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDZixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ3ZCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNqQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxF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QyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3pDLGNBQU8sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUMxRCxDQUFDLEVBN0JnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUE2QnRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgbWFwT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0JztcblxuY29uc3Qga0NvbG9ycyA9IHtcbiAgbW9kaWZpZXJzOiB7XG4gICAgcmVzZXQ6IFswLCAwXSxcbiAgICBib2xkOiBbMSwgMjJdLCAvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG4gICAgZGltOiBbMiwgMjJdLFxuICAgIGl0YWxpYzogWzMsIDIzXSxcbiAgICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gICAgaW52ZXJzZTogWzcsIDI3XSxcbiAgICBoaWRkZW46IFs4LCAyOF0sXG4gICAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgYmxhY2s6IFszMCwgMzldLFxuICAgIHJlZDogWzMxLCAzOV0sXG4gICAgZ3JlZW46IFszMiwgMzldLFxuICAgIHllbGxvdzogWzMzLCAzOV0sXG4gICAgYmx1ZTogWzM0LCAzOV0sXG4gICAgbWFnZW50YTogWzM1LCAzOV0sXG4gICAgY3lhbjogWzM2LCAzOV0sXG4gICAgd2hpdGU6IFszNywgMzldLFxuICAgIGdyYXk6IFs5MCwgMzldLFxuICB9LFxuICBiZ0NvbG9yczoge1xuICAgIGJnQmxhY2s6IFs0MCwgNDldLFxuICAgIGJnUmVkOiBbNDEsIDQ5XSxcbiAgICBiZ0dyZWVuOiBbNDIsIDQ5XSxcbiAgICBiZ1llbGxvdzogWzQzLCA0OV0sXG4gICAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgICBiZ01hZ2VudGE6IFs0NSwgNDldLFxuICAgIGJnQ3lhbjogWzQ2LCA0OV0sXG4gICAgYmdXaGl0ZTogWzQ3LCA0OV0sXG4gIH0sXG59O1xuY29uc3Qga0NvbG9yRnVuY3Rpb25zID0gbWFwT2JqZWN0KGtDb2xvcnMsIChfLCB2KSA9PiB7XG4gIHJldHVybiBtYXBPYmplY3QodiwgKF8sIHZ2KSA9PiAoeDogc3RyaW5nKSA9PiBgXFx1MDAxYlske3Z2WzBdfW0ke3h9XFx1MDAxYlske3Z2WzFdfW1gKTtcbn0pO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNvbG9ycyB7XG4gIGV4cG9ydCBjb25zdCByZXNldCA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMucmVzZXQ7XG4gIGV4cG9ydCBjb25zdCBib2xkID0ga0NvbG9yRnVuY3Rpb25zLm1vZGlmaWVycy5ib2xkO1xuICBleHBvcnQgY29uc3QgZGltID0ga0NvbG9yRnVuY3Rpb25zLm1vZGlmaWVycy5kaW07XG4gIGV4cG9ydCBjb25zdCBpdGFsaWMgPSBrQ29sb3JGdW5jdGlvbnMubW9kaWZpZXJzLml0YWxpYztcbiAgZXhwb3J0IGNvbnN0IHVuZGVybGluZSA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMudW5kZXJsaW5lO1xuICBleHBvcnQgY29uc3QgaW52ZXJzZSA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMuaW52ZXJzZTtcbiAgZXhwb3J0IGNvbnN0IGhpZGRlbiA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMuaGlkZGVuO1xuICBleHBvcnQgY29uc3Qgc3RyaWtldGhyb3VnaCA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMuc3RyaWtldGhyb3VnaDtcblxuICBleHBvcnQgY29uc3QgYmxhY2sgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmJsYWNrO1xuICBleHBvcnQgY29uc3QgcmVkID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5yZWQ7XG4gIGV4cG9ydCBjb25zdCBncmVlbiA9IGtDb2xvckZ1bmN0aW9ucy5jb2xvcnMuZ3JlZW47XG4gIGV4cG9ydCBjb25zdCB5ZWxsb3cgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLnllbGxvdztcbiAgZXhwb3J0IGNvbnN0IGJsdWUgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmJsdWU7XG4gIGV4cG9ydCBjb25zdCBtYWdlbnRhID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5tYWdlbnRhO1xuICBleHBvcnQgY29uc3QgY3lhbiA9IGtDb2xvckZ1bmN0aW9ucy5jb2xvcnMuY3lhbjtcbiAgZXhwb3J0IGNvbnN0IHdoaXRlID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy53aGl0ZTtcbiAgZXhwb3J0IGNvbnN0IGdyZXkgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmdyYXk7XG4gIGV4cG9ydCBjb25zdCBncmF5ID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5ncmF5O1xuXG4gIGV4cG9ydCBjb25zdCBiZ0JsYWNrID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnQmxhY2s7XG4gIGV4cG9ydCBjb25zdCBiZ1JlZCA9IGtDb2xvckZ1bmN0aW9ucy5iZ0NvbG9ycy5iZ1JlZDtcbiAgZXhwb3J0IGNvbnN0IGJnR3JlZW4gPSBrQ29sb3JGdW5jdGlvbnMuYmdDb2xvcnMuYmdHcmVlbjtcbiAgZXhwb3J0IGNvbnN0IGJnWWVsbG93ID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnWWVsbG93O1xuICBleHBvcnQgY29uc3QgYmdCbHVlID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnQmx1ZTtcbiAgZXhwb3J0IGNvbnN0IGJnTWFnZW50YSA9IGtDb2xvckZ1bmN0aW9ucy5iZ0NvbG9ycy5iZ01hZ2VudGE7XG4gIGV4cG9ydCBjb25zdCBiZ0N5YW4gPSBrQ29sb3JGdW5jdGlvbnMuYmdDb2xvcnMuYmdDeWFuO1xuICBleHBvcnQgY29uc3QgYmdXaGl0ZSA9IGtDb2xvckZ1bmN0aW9ucy5iZ0NvbG9ycy5iZ1doaXRlO1xufVxuIl19