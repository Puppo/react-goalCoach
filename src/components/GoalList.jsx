import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalsRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalsRef.on('value', snap => {
      const goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      });
      this.props.setGoals(goals);
    });
  }

  render() {
    return (
      <div>
        {
          this.props.goals.map((goal, index) => {
            return (
              <GoalItem key={index} goal={goal} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  };
}

export default connect(mapStateToProps, { setGoals })(GoalList);