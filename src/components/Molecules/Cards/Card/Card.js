import Title from 'components/Atoms/Title';
import { StyleImage, StyleWrapper, ActionWrapper } from './style';
import Button from 'components/Atoms/Button';
import Text from '../../../Atoms/Text';

const CardRestaurant = ({
  image,
  name,
  municipality,
  direction,
  phone,
  opening_hour,
  closing_hour,
  action,
  isActionButtons,
  onDelete,
  onUpdate,
  onViewMenu,
}) => {
  return (
    <StyleWrapper>
      <StyleImage loading="lazy" src={image} />
      <Title size={30}>{name}</Title>
      {direction && (
        <Text size={22}>
          <strong style={{ fontSize: '22px' }}>Precio:</strong> {direction}
        </Text>
      )}
      {phone && (
        <Text size={22}>
          <strong style={{ fontSize: '22px' }}>Categoria:</strong> {phone}
        </Text>
      )}
      {isActionButtons && (
        <ActionWrapper>
          {onUpdate && (
            <Button color={'success'} onClick={() => onUpdate()}>
              Actualizar
            </Button>
          )}
          {onDelete && (
            <Button color={'error'} onClick={() => onDelete()}>
              Eliminar
            </Button>
          )}
          {onViewMenu && (<Button color={'primary'} onClick={() => onViewMenu()}>Ver Menu</Button>)}
        </ActionWrapper>
      )}
    </StyleWrapper>
  );
};

export default CardRestaurant;
