import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    minWidth: 275,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class QuizCard extends Component {
  render() {
    const {classes, quiz} = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {quiz.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={this.handleSendQuizClick}>출제</Button>
          <Button color="primary">삭제</Button>
        </CardActions>
      </Card>
    )
  }

  handleSendQuizClick = () => {
    this.props.sendQuiz(this.props.quiz);
  }
}

QuizCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizCard);
