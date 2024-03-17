import carry from '../../assets/icons/Carry.png';
import disabler from '../../assets/icons/Disabler.png';
import durable from '../../assets/icons/Durable.png';
import escape from '../../assets/icons/Escape.png';
import initiator from '../../assets/icons/Initiator.png';
import jungler from '../../assets/icons/Jungler.png';
import nuker from '../../assets/icons/Nuker.png';
import pusher from '../../assets/icons/Pusher.png';
import support from '../../assets/icons/Support.png';
import noImg from '../../assets/icons/Universal_attribute_symbol.webp';
import Riki from '../../assets/icons/Riki.png';
import Mk from '../../assets/icons/MonkeyKing.png';
import Pl from '../../assets/icons/PhantomLancer.png';
import Bb from '../../assets/icons/Bristleback.png';
import Axe from '../../assets/icons/Axe.png';
import Silencer from '../../assets/icons/Silencer.png';
import NP from '../../assets/icons/NaturesProphet.png';
import Drow from '../../assets/icons/DrowRanger.png';
import NS from '../../assets/icons/NightStalker.png';

export const getRoleImg = (type) => {
    switch (type) {
        case 'carry':
            return {
                img: carry,
                icon: Riki,
            };
        case 'disabler':
            return {
                img: disabler,
                icon: Drow,
            };
        case 'durable':
            return {
                img: durable,
                icon: Axe,
            };
        case 'escape':
            return {
                img: escape,
                icon: Mk,
            };
        case 'initiator':
            return {
                img: initiator,
                icon: NS,
            };
        case 'jungler':
            return {
                img: jungler,
                icon: NP,
            };
        case 'nuker':
            return {
                img: nuker,
                icon: Bb,
            };
        case 'pusher':
            return {
                img: pusher,
                icon: Pl,
            };
        case 'support':
            return {
                img: support,
                icon: Silencer,
            };
        default:
            return {
                img: noImg,
                icon: noImg,
            };
    }
};
