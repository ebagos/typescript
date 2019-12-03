const range = (start: number, end: number, step: number = 1): number[] =>
    Array.from({length: (end - start + step) / step}, (v, k) => start + k * step);

export default range;
