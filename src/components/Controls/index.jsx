import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './style.module.css';

const Controls = ({ onDeposit, onWithdraw, balance }) => {
  
  const state = {
      amount: 0,
      balance: balance,
  }

  const showMsg = (msg) => toast(msg, {
    className: 'toast'
  });
  
  const handleDeposit = () => {
    if (state.balance < state.amount) return showMsg("На счету недостаточно средств для проведения операции!");
    if (!state.amount || state.amount < 0) return showMsg('Введите сумму для проведения операции!');
    onDeposit(state.amount);
  };

  const handleWithdraw = () => {
    if (!state.amount || state.amount < 0) return showMsg('Введите сумму для проведения операции!');
    onWithdraw(state.amount);
  };

  const handleSetAmount = (evt) => {
    state[evt.target.name] = evt.target.value;
  };

  return(
    <section className={css.controls}>
      <input type="number" name="amount" onChange={handleSetAmount}/>
      <button type="button" onClick={handleDeposit}>Deposit</button>
      <button type="button" onClick={handleWithdraw}>Withdraw</button>
    </section>
  )  
}

Controls.propTypes = {
  onDeposit: PropTypes.func,
  onWithdrow: PropTypes.func,
  balance: PropTypes.number,
}

Controls.defaultProps = {
  balance: 0,
}

export default Controls;