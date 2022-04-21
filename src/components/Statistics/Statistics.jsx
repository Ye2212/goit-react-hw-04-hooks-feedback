import propTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticValue,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsText>
            Good: <StatisticValue>{good}</StatisticValue>
          </StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Neutral: <StatisticValue>{neutral}</StatisticValue>
          </StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Bad: <StatisticValue>{bad}</StatisticValue>
          </StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Total: <StatisticValue>{total}</StatisticValue>
          </StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Positive Feedback:{' '}
            <StatisticValue>{positivePersentage}%</StatisticValue>
          </StatisticsText>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePersentage: propTypes.number.isRequired,
};

export default Statistics;
