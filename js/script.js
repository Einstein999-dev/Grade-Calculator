function calculate(){
    // variables declear
    let a = document.getElementById('One').value;
    let b = document.getElementById('Two').value;
    let c = document.getElementById('Three').value;
    let d = document.getElementById('Four').value;
    let e = document.getElementById('Five').value;

// 1st statment 
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("Please enter vaild number");
    }else{
        // total marks statment
        let obtain =  +a + +b + +c + +d + +e;
        document.getElementById('obtain').innerHTML = obtain;
        // percentage statment
        let perc = obtain / 500 * 100;
        document.getElementById('perc').innerHTML = perc;
        // remark statment 
        if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
            document.getElementById('remark').innerHTML = 'Pass';
        }else{
            document.getElementById('remark').innerHTML = ' Fail';
        }
        // grade statment 
        if (perc >= 80 ) {
            document.getElementById('grade').textContent = 'A';
        }
        else if (perc >= 70 ) {
            document.getElementById('grade').textContent = 'B';
        }
        else if (perc >= 60 ) {
            document.getElementById('grade').textContent = 'C';
        }
        else if (perc >= 50 ) {
            document.getElementById('grade').textContent = 'D';
        }
        else if (perc >= 40 ) {
            document.getElementById('grade').textContent = 'E';
        }
        else{
            document.getElementById('grade').textContent = 'F';
        }
    }
}

