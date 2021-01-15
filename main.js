class RangeValidator {
  constructor(from, to) {
    if (from > to) {
      throw new RangeError("From can`t be bigger than to");
    }
    this._from = from;
    this._to = to;
  }

  set from(value) {
    let buffer = Number(value);
    if (buffer > this._to) {
      throw new RangeError("From can`t be bigger than to");
    }
    this._from = buffer;
    return;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    let buffer = Number(value);
    if (buffer < this._from) {
      throw new RangeError("To can`t be smaller than from");
    }
    this._from = buffer;
    return;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(number) {
    let buffer = Number(number);
    if (buffer > this._to || buffer < this._from) {
      throw new RangeError('Your number not in range!')
    }
    return buffer;
  }
}