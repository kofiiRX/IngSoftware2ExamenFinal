import { Movement } from './Movement';

export class Fee extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#6b7280';
  }

  getIcon() {
    return '💸';
  }

  getTypeName() {
    return 'Comision';
  }
}
