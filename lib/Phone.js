function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  return `${this.PhoneNumber} calls ${phoneNumber}`;
};