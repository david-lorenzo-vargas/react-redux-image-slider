import React from 'react';
import classnames from 'classnames/bind';
import styles from './dot.scss';

const cx = classnames.bind(styles);

const Dot = (props) => {
  const { active } = props;

  return (
    <div className={cx('dot', {
      'dot--active': active,
    })}
    />
  );
};

export default Dot;
