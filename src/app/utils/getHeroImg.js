import Avatar from '../../assets/main/avatar.webp';
import NoImg from '../../assets/main/no_img.jpg';
import Axe from '../../assets/hero/Axe/Profile.png';
import AxeAbility1 from '../../assets/hero/Axe/ability1.jpg';
import AxeAbility2 from '../../assets/hero/Axe/ability2.jpg';
import AxeAbility3 from '../../assets/hero/Axe/ability3.jpg';
import AxeAbility4 from '../../assets/hero/Axe/ability4.jpg';
import Alchemist from '../../assets/hero/Alchemist/Profile.png';
import AlchemistAbility1 from '../../assets/hero/Alchemist/ability1.jpg';
import AlchemistAbility2 from '../../assets/hero/Alchemist/ability2.jpg';
import AlchemistAbility3 from '../../assets/hero/Alchemist/ability3.jpg';
import AlchemistAbility4 from '../../assets/hero/Alchemist/ability4.jpg';
import AlchemistAbility5 from '../../assets/hero/Alchemist/ability5.jpg';
import AlchemistAbility6 from '../../assets/hero/Alchemist/ability6.jpg';
import AlchemistAbility7 from '../../assets/hero/Alchemist/ability7.jpg';
import Bristleback from '../../assets/hero/Bristleback/Profile.png';
import BristlebackAbility1 from '../../assets/hero/Bristleback/ability1.jpg';
import BristlebackAbility2 from '../../assets/hero/Bristleback/ability2.jpg';
import BristlebackAbility3 from '../../assets/hero/Bristleback/ability3.jpg';
import BristlebackAbility4 from '../../assets/hero/Bristleback/ability4.jpg';
import BristlebackAbility5 from '../../assets/hero/Bristleback/ability5.jpg';

export const getHeroImg = (name) => {
    switch (name) {
        case 'Axe':
            return {
                img: Axe,
                abilities: [AxeAbility1, AxeAbility2, AxeAbility3, AxeAbility4],
            };

        case 'Alchemist':
            return {
                img: Alchemist,
                abilities: [
                    AlchemistAbility1,
                    AlchemistAbility2,
                    AlchemistAbility3,
                    AlchemistAbility4,
                    AlchemistAbility5,
                    AlchemistAbility6,
                    AlchemistAbility7,
                ],
            };
        case 'Bristleback':
            return {
                img: Bristleback,
                abilities: [
                    BristlebackAbility1,
                    BristlebackAbility2,
                    BristlebackAbility3,
                    BristlebackAbility4,
                    BristlebackAbility5,
                ],
            };
        default:
            return {
                img: Avatar,
                abilities: [NoImg, NoImg, NoImg, NoImg],
            };
    }
};
