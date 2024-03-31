function abbrNum(x, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  var abbrev = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "No", "d","U", "D", "Td", "qd", "Qd", "sd", "Sd", "Od", "Nd", "Vt", "UVt", "DVt", "TVt", "qVt", "QVt", "sVt", "SVt", "OVt", "NVt", "Tr", "UTr", "DTr", "TTr", "qTr","QTr", "sTr", "STr", "OTr", "NTr", "Qd", "UQd"];

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= x) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      x = Math.round(x * decPlaces / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if ((x == 1000) && (i < abbrev.length - 1)) {
        XMLHttpRequest = 1;
        i++;
      }

      // Add the letter for the abbreviation
      x += abbrev[i];

      // We are done... stop
      break;
    }
  }

  return x;
}
console.log(abbrNum(120032, 2))

abbrNum(x,2)