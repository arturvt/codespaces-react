import React from 'react';
import TextField from '@mui/material/TextField';
import InputClock from './InputClock';
import { countWeekDays } from './util';

const dailyWorkHours = 8;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      businessDays: countWeekDays(),
      counter: 1,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      date: new Date(),
      counter: state.counter + 1,
    }));
  }

  showWorkedHours(hours) {
    const value = this.state.businessDays * hours;
    const percentage =
      (value * 100) / (this.state.businessDays * dailyWorkHours);
    return `Total expected hours: ${value} (${hours}hrs ${percentage}%).`;
  }

  today() {
    return this.state.today.toDateString();
  }

  showBusinessDays() {
    return `So far ${this.state.businessDays} business days this month.`;
  }

  render() {
    let className = this.state.counter % 2 === 0 ? 'clock-active' : 'clock';

    return (
      <div>
        <h2>
          Today is: {this.today()}{' '}
          <span className={className}>
            {this.state.today.toLocaleTimeString()}
          </span>{' '}
        </h2>
        <p>{this.showWorkedHours(8)}</p>
        <p>{this.showWorkedHours(7)}</p>
        <p>{this.showWorkedHours(6)}</p>
        <InputClock></InputClock>
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
      </div>
    );
  }
}
