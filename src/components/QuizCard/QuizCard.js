import { Topic, Wrapper, Text } from './QuizCard.styled';

export const QuizCard = ({ item: { topic, level, time, questions} }) => {
    return (
    <Wrapper>
        <Topic>{topic}</Topic>
        <Text>Level: {level}</Text>
        <Text>Time: {time} min</Text>
        <Text>Questions: {questions}</Text>
    </Wrapper>
    );
};