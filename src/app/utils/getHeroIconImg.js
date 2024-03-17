import Avatar from '../../assets/main/avatar.webp';
import Axe from '../../assets/hero/Axe/Axe_minimap_icon.webp';
import Bristleback from '../../assets/hero/Bristleback/Bristleback_minimap_icon.webp';
import Alchemist from '../../assets/hero/Alchemist/Alchemist_minimap_icon.webp';
import ChaosKnight from '../../assets/hero/ChaosKnight/Chaos_Knight_minimap_icon.webp';

export const getHeroIconImg = (name) => {
    switch (name) {
        case 'Axe':
            return {
                img: Axe,
            };
        case 'Bristleback':
            return {
                img: Bristleback,
            };
        case 'Alchemist':
            return {
                img: Alchemist,
            };
        case 'Chaos Knight':
            return {
                img: ChaosKnight,
            };
        default:
            return {
                img: false,
            };
    }
};
