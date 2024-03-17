import forceImg from '../../assets/icons/power.png';
import dexterityImg from '../../assets/icons/dexterity.png';
import intelligenceImg from '../../assets/icons/intelligence.png';
import UniversalImg from '../../assets/icons/Universal_attribute_symbol.webp';

export const getAttributeImg = (type) => {
    if (type === 'force') {
        return forceImg;
    }
    if (type === 'dexterity') {
        return dexterityImg;
    }
    if (type === 'intelligence') {
        return intelligenceImg;
    }
    if (type === 'versatility') {
        return UniversalImg;
    }
    if (type === '') {
        return UniversalImg;
    }
};
