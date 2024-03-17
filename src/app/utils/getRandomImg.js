import bg1 from '../../assets/page/bg1.jpg';
import bg2 from '../../assets/page/bg2.png';
import bg3 from '../../assets/page/bg3.jpg';
import bg4 from '../../assets/page/bg4.jpg';
import bg5 from '../../assets/page/bg5.jpg';
import bg6 from '../../assets/page/bg6.png';
import bg7 from '../../assets/page/bg7.jpg';
import bg8 from '../../assets/page/bg8.jpg';
import bg9 from '../../assets/page/bg9.jpg';
import bg10 from '../../assets/page/bg10.jpg';

export function getRandomImage() {
    const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

    const randomIndex = Math.floor(Math.random() * images.length);

    return images[randomIndex];
}
