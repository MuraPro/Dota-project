import PropTypes from 'prop-types';
import { getHeroImg } from '../../../utils/getHeroImg';
import AbilityBlock from './ability-block';
import { nanoid } from 'nanoid';
import BackgroundImg from '../../common/background-abstraction';
import {
    getAbilities,
    getAbilitiesLoadingStatus,
} from '../../../store/abilities';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getData } from '../../../utils/transformData';

const Ability = ({ user }) => {
    const { abilities: id, skill, name } = user;
    const isLoading = useSelector(getAbilitiesLoadingStatus());
    const allAbilities = useSelector(getAbilities());

    const { skills } = useMemo(
        () => getData(id, allAbilities),
        [id, allAbilities]
    );
    // const images = getHeroImg(name);
    const images = useMemo(() => getHeroImg(name));

    if (!isLoading) {
        return (
            <div className="card mb-3 ">
                <BackgroundImg>
                    <h5 className="text-white">
                        <span>Способности</span>
                    </h5>

                    <div className="card-body text-white">
                        {skills &&
                            skills.map(({ ability, title }, index) => (
                                <AbilityBlock
                                    key={nanoid()}
                                    title={title}
                                    img={skill || images.abilities[index]}
                                    text={ability}
                                />
                            ))}
                    </div>
                </BackgroundImg>
            </div>
        );
    } else return 'Loading...';
};

Ability.propTypes = {
    user: PropTypes.object,
};

export default Ability;
