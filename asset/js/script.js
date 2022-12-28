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
        if (a > 34 && b > 3 && c > 34 && d > 34 && e > 34) {
            document.getElementById('remark').innerHTML = 'Pass';
        }else{
            document.getElementById('remark').innerHTML = ' Fail';
        }
        // grade statment 
        if (perc >= 89 ) {
            document.getElementById('grade').textContent = 'A';
        }
        else if (perc >= 79 ) {
            document.getElementById('grade').textContent = 'B+';
        }
        else if (perc >= 74 ) {
            document.getElementById('grade').textContent = 'B';
        }
        else if (perc >= 69 ) {
            document.getElementById('grade').textContent = 'C+';
        }
        else if (perc >= 64 ) {
            document.getElementById('grade').textContent = 'C';
        }
        else if (perc >= 59 ) {
            document.getElementById('grade').textContent = 'D+';
        }
        else if (perc >= 54 ) {
            document.getElementById('grade').textContent = 'D';
        }
        else if (perc >= 49 ) {
            document.getElementById('grade').textContent = 'E';
        }
        else {
            document.getElementById('grade').textContent = 'F';
        }
    }
}
function logout(){
    window.open('/index.html','_self')
}

