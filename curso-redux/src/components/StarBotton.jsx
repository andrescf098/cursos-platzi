import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import PropType from 'prop-types';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;
  return <Button icon={Icon} onClick={onClick}></Button>;
};

StarButton.propTypes = {
  isFavorite: PropType.bool,
  onClick: PropType.func,
};

export default StarButton;
