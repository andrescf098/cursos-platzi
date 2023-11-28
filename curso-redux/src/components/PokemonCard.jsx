import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import StarButton from './StarBotton';
import { setFavorite } from '../actions';

const PokemonCard = ({ name, img, description, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = description.map((type) => type.type.name).join(', ');
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      style={{ width: '250px' }}
      title={name}
      cover={<img src={img} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta title={name} description={typesString} />
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropType.string,
  img: PropType.string,
  description: PropType.array,
  id: PropType.number,
  favorite: PropType.bool,
};

export default PokemonCard;
