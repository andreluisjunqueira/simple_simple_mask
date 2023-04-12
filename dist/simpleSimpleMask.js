"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMask = void 0;
function makeMask(mask, maskChar = '#') {
    return (value) => {
        value = value.replace(/[\.\-\/\s]+/g, '');
        return mask
            .split(maskChar)
            .map((v, index) => {
            var _a, _b;
            if (!value[index]) {
                return '';
            }
            if (v !== '') {
                return `${v}${(_a = value[index]) !== null && _a !== void 0 ? _a : ''}`;
            }
            return (_b = value[index]) !== null && _b !== void 0 ? _b : '';
        })
            .join('')
            .substring(0, mask.length);
    };
}
exports.makeMask = makeMask;
