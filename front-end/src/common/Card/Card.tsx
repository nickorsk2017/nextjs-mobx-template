import {Horizontal, Vertical} from "./_components";

export enum CARD_TYPES {
  HORIZONTAL,
  VERTICAL,
};

export type Props = {
  type: CARD_TYPES;
  isEmpty?: boolean;
  item: Entity.TodoItem;
  onDelete?: () => void;
};

const Card: React.FC<Props> = ({type, onDelete, ...props}) => {

  switch (type) {
    case CARD_TYPES.HORIZONTAL:
      return <Horizontal onDelete={onDelete} {...props} />;
    case CARD_TYPES.VERTICAL:
    default:
      return <Vertical {...props} />;
  }
} 

export default Card;
