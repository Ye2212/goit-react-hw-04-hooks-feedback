import propTypes from 'prop-types';
import {
    FeedbackOptionsList,
    FeedbackOptionsItem,
    FeedBackOptionsBtn,
} from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <FeedbackOptionsList>
            {' '}
            {options.map(option => (
                <FeedbackOptionsItem key={option}>
                    <FeedBackOptionsBtn type="button" onClick={onLeaveFeedback}>
                        {option}
                    </FeedBackOptionsBtn>
                </FeedbackOptionsItem>
            ))}
        </FeedbackOptionsList>
    );
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
