class Format {
  dateNumber(num) {
    return ("0" + num).slice(-2);
  }

  capitalize(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }
}

export default new Format();
