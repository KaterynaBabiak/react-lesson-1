import { QuizCard } from '../QuizCard/QuizCard';
import {List, ListItem} from './QuizList.styled';

export const QuizList = ({ items }) => {
   // console.log(props.items);
    return (
    <List>
        {items.map(item => (
    <ListItem key={item.id} level={item.level}>
        <QuizCard item={item} />

    </ListItem>
    ))}
    </List>
    );
};