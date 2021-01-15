var sortNumber = function (number) {
		number.sort(function (a, b) {
				// 厳密等価演算子に修正
				if (a === b) {
						return 0;
				}
				return a < b ? -1 : 1;
		});
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);
