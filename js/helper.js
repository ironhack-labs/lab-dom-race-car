Array.prototype.next = function () {
    if (this.length === 0) {
      throw new Error("next() called on empty array");
    }
  
    if (!this.hasOwnProperty("currentIndex")) {
      this.currentIndex = 0;
    }
  
    const nextElement = this[this.currentIndex];
  
    this.currentIndex = (this.currentIndex + 1) % this.length;
  
    return nextElement;
  };