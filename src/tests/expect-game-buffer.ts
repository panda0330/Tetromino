import {GameBuffer} from '../engine/game-buffer';
import {GameRow} from '../engine/game-row';
import {expectMessage} from './expect-utils';

export function bufferEmpty(this: jest.MatcherContext, buffer: GameBuffer) {
    const pass = buffer.rows.every((row) =>
        row.cells.every((cell) => cell.type === undefined)
    );
    return expectMessage(this, 'expected buffer to {not} be empty', pass);
}

export function bufferSize(
    this: jest.MatcherContext,
    buffer: GameBuffer,
    width: number,
    height: number
) {

}
