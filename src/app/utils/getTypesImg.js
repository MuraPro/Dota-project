import noImg from '../../assets/icons/Universal_attribute_symbol.webp';
import ranged from '../../assets/icons/Ranged_icon.webp';
import сlose from '../../assets/icons/Melee_icon.webp';

export const getTypesImg = (type) => {
    switch (type) {
        case 'ranged':
            return {
                img: ranged,
            };

        case 'сlose':
            return {
                img: сlose,
            };
        default:
            return {
                img: noImg,
            };
    }
};
