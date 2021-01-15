class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  set from(value) {
    const buffer = Number(value); 
    if (typeof(buffer) !== "number") {
      throw new TypeError("Enter validate value!");
    }
    if (buffer > this._to) {
      throw new RangeError("From can`t be bigger than to");
    }
   
    this._from = buffer;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    const buffer = Number(value);
    if (typeof(buffer) !== "number") {
      throw new TypeError("Enter validate value!");
    }
    if (buffer < this._from) {
      throw new RangeError("To can`t be smaller than from");
    }
    this._from = buffer;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(number) {
    const buffer = Number(number);
    if (typeof(buffer) !== "number") {
      throw new TypeError("Enter validate value!");
    }
    if (buffer > this._to || buffer < this._from) {
      throw new RangeError('Your number not in range!')
    }
    return buffer;
  }
}