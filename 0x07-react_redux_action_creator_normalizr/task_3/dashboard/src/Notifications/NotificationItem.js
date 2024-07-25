import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;

    return (
      <li
        onClick={this.handleClick}
        data-notification-type={type}
        className={css(
          styles.notificationItem,
          type === 'urgent' ? styles.urgent : styles.default,
          this.props.id === 3 && styles.thirdItem
        )}
      >
        {html ? (
          <span dangerouslySetInnerHTML={html} />
        ) : (
          <span>{value}</span>
        )}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  notificationItem: {
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  thirdItem: {
    color: 'red',
  },
});

export default NotificationItem;
