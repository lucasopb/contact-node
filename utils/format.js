function formatPhoneNumber(number) {
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length !== 11) {
      throw new Error("O número deve conter exatamente 11 dígitos.");
    }  
    const formattedNumber = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    return formattedNumber;
}

module.exports = formatPhoneNumber