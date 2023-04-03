import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Layout } from './Layout /Layout.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage =
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  const onClickBtn = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <Layout>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickBtn}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Layout>
  );
};
