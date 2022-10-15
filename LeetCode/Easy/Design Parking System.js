/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = [];
    this.medium = [];
    this.small = [];
    this.parkingLot = {
        1: () => {
            if (this.big.length === big) return false;
            this.big.push(1);
            return true;
        },
        2: () => {
            if (this.medium.length === medium) return false;
            this.medium.push(1);
            return true;
        },
        3: () => {
            if (this.small.length === small) return false;
            this.small.push(1);
            return true;
        }
    }

};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return this.parkingLot[carType]();

};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
