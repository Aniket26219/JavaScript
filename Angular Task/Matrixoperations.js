function additionofmatrices(mat1, mat2) {
    var result = [];
    for (var i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (var j = 0; j < mat2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < mat1[0].length; k++) {
                sum = mat1[i][k] + mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function substratctionofmatrices(mat1, mat2) {
    var result = [];
    for (var i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (var j = 0; j < mat2[0].length; j++) {
            var sub = 0;
            for (var k = 0; k < mat1[0].length; k++) {
                sub = mat1[i][k] - mat2[k][j];
            }
            result[i][j] = sub;
        }
    }
    return result;
}

function multiplicationofmatrices(mat1, mat2) {
    var result = [];
    for (var i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (var j = 0; j < mat2[0].length; j++) {
            var mul = 0;
            for (var k = 0; k < mat1[0].length; k++) {
                mul = mat1[i][k] * mat2[k][j];
            }
            result[i][j] = mul;
        }
    }
    return result;
}

function divisionofmatrices(mat1, mat2){
    var result = [];
    for (var i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (var j = 0; j < mat2[0].length; j++) {
            var div = 0;
            for (var k = 0; k < mat1[0].length; k++) {
                div = mat1[i][k] / mat2[k][j];
            }
            result[i][j] = div;
        }
    }
    return result;
}

var matrix1 = [[4,9],[5,7]]
var matrix2 = [[3,5],[7,3]]

console.log("addition of matrix is");
console.log(additionofmatrices(matrix1, matrix2)) ;

console.log("substraction of matrix is");
console.log(substratctionofmatrices(matrix1, matrix2)) ;

console.log("multipication of matrix is");
console.log(multiplicationofmatrices(matrix1, matrix2)) ;