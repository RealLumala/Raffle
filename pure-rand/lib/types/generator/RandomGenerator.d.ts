export interface RandomGenerator {
    min(): number;
    max(): number;
    clone(): RandomGenerator;
    next(): [number, RandomGenerator];
    jump?(): RandomGenerator;
    unsafeNext(): number;
    unsafeJump?(): void;
}
export declare function unsafeGenerateN(rng: RandomGenerator, num: number): number[];
export declare function generateN(rng: RandomGenerator, num: number): [number[], RandomGenerator];
export declare function unsafeSkipN(rng: RandomGenerator, num: number): void;
export declare function skipN(rng: RandomGenerator, num: number): RandomGenerator;
