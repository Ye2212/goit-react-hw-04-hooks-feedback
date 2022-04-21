// import { Component } from 'react';
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleIncrement = e => {
    const option = e.target.textContent;
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePersentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleIncrement = e => {
//     const option = e.target.textContent;
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     // const { good, neutral, bad } = this.state;
//     // return good + neutral + bad;
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   }

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100)
//   }

//   render() {

//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     // console.log(options);

//     return (
//       <div>
//         <Section title='Please, leave your feedback'>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>

//         <Section title='Statistics'>
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePersentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (<NotificationMessage message="There is no feedback" />)}

//         </Section>
//       </div>
//     );
//   }
// };
