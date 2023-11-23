import {FC, useMemo} from 'react';
import {FaCog} from 'react-icons/fa';
import {useSelector} from 'react-redux';
import {AppActions} from '../../../store/app/app-actions';
import {AppDialogType} from '../../../store/app/app-model';
import {AppSelectors} from '../../../store/app/app-selectors';
import {GameActions} from '../../../store/game/game-actions';
import {GameSelectors} from '../../../store/game/game-selectors';
import {AppBar, AppBarTool} from '../../atoms/app/AppBar';
import {AppMenu, AppMenuItem} from '../../atoms/app/AppMenu';
import {AppDialog, AppDialogControl} from '../../molecules/app/AppDialog';
import {
    MUSIC_ICON,
    MUSIC_TOOLTIP,
    SOUND_ICON,
    SOUND_TOOLTIP
} from '../../particles/audio.types';

export interface PauseDialogProps {
    selectMusic?: () => boolean;

    selectSound?: () => boolean;

    selectStart?: () => number;
}

export const PauseDialog: FC<PauseDialogProps & Partial<AppDialogControl>> = ({
    selectMusic = AppSelectors.music,
    selectSound = AppSelectors.sound,
    selectStart = AppSelectors.startLevel,
    closeAction = GameActions.resume(),
    selectOpen = GameSelectors.paused
}) => {
    const music = useSelector(selectMusic);
    const sound = useSelector(selectSound);
    const startLevel = useSelector(selectStart);


    );
};
