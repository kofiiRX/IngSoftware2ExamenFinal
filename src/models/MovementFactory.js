import { Deposit } from './Deposit';
import { Withdrawal } from './Withdrawal';
import { Transfer } from './Transfer';
import { Payment } from './Payment';
import { Fee } from './Fee';

const movementRegistry = {
  deposit: (data) => new Deposit(data),
  withdrawal: (data) => new Withdrawal(data),
  transfer: (data) => new Transfer(data),
  payment: (data) => new Payment(data),
  fee: (data) => new Fee(data),
};

export function createMovement(data) {
  const creator = movementRegistry[data.type];

  if (!creator) {
    throw new Error(`Unknown movement type: ${data.type}`);
  }

  return creator(data);
}
