import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleteGoals } from '../actions';

import { completGoalsRef } from '../firebase';

class CompletedGoalList extends Component {
  componentDidMount() {
    completGoalsRef.on('value', snap => {
      const completeGoals = [];
      snap.forEach(completedGoal => {
        const { email, title } = completedGoal.val();
        const serverKey = completedGoal.key;
        completeGoals.push({ email, title, serverKey });
      });
      this.props.setCompleteGoals(completeGoals);
    });
  }

  clearCompleteGoals() {
    completGoalsRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-danger"
          onClick={() => this.clearCompleteGoals()}
          >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  };
}

export default connect(mapStateToProps, { setCompleteGoals })(CompletedGoalList);