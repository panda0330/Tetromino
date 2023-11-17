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

}
