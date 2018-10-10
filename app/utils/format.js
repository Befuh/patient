class Format {
  dateNumber(num) {
    return ("0" + num).slice(-2);
  }
}

export default new Format();
