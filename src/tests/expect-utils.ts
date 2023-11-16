/**
 * Creates an expect message that supports inverted NOT
 */
import {
    GameBuffer,
    gameBufferEmpty,
    gameBufferRowSolid
} from '../engine/game-buffer';
import {GameScreen} from '../engine/game-screen';
import {TetrominosType} from '../engine/game-tetrominos';

export function expectMessage(
    {isNot}: jest.MatcherContext,
    message: string,
    pass: boolean
): jest.CustomMatcherResult {
    message = isNot
        ? message.replace('{not}', 'not')
        : message.replace('{not}', '');
    return {
        message: () => message.replace(/\s+/g, ' '),
        pass
    };
}

/**
 * Creates a buffer from strings.
 */
export function bufferPattern(rows: Array<string>): GameBuffer {
    expect(rows.length).toBeGreaterThan(0);

    const height = rows.length;
    const width = rows[0].length;
    const buffer = gameBufferEmpty(width, height);


