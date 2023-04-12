import { ReturnMask } from "./types";

export function makeMask(mask: string, maskChar: string = '#'): ReturnMask {
    return (value: string) => {
        value = value.replace(/[\.\-\/\s]+/g, '');
        return mask
            .split(maskChar)
            .map((v, index) => {
                if (!value[index]) { return '' }
                if (v !== '') { return `${v}${value[index] ?? ''}` }
                return value[index] ?? '';
            })
            .join('')
            .substring(0, mask.length);
    };
}

