let btn = document.querySelectorAll("button");

let string = "";
let stringview = "";

let arr = Array.from(btn);
toogle =false;

for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try{
                document.querySelector("input").value = eval(string);
            }
            catch{
                document.querySelector("input").value = 'Math Error';
            }
            string = "";
            stringview = "";
        }

        
        else if (e.target.innerHTML == "AC") {
            string = "";
            stringview = "";
            document.querySelector("input").value = stringview;
        }
        
        else if(e.target.innerHTML == "()"){
            if(toogle == false){
                document.querySelector('input').value = stringview + "(";
                string += "(";
                stringview += "(";
                toogle=true;
            }
            else{
                document.querySelector('input').value = stringview + ")";
                string += ")";
                stringview += ")";
                toogle =false;
            }
        }
        else if (e.target.innerHTML == "⌫") {
            string = string.slice(0, -1);
            stringview = stringview.slice(0, -1);
            document.querySelector('input').value = stringview;
        }

        else if (e.target.innerHTML == "÷") {
            document.querySelector('input').value = stringview + "÷";
            string += '/';
            stringview+='÷'
        }

        else if (e.target.innerHTML == "x") {
            document.querySelector('input').value = stringview + "x";
            string += '*';
            stringview+='x';
        }

        else if (e.target.innerHTML == "%") {
            document.querySelector('input').value = stringview + "%";
            string= eval((eval(string))/100)+"*";
            stringview+='%';
        }

        else {
            string += e.target.innerHTML;
            stringview += e.target.innerHTML;
            document.querySelector("input").value = stringview;
        }
    })
}


//Genrating random colors
let r1, r2, r3;
function random123() {
    r1 = Math.floor(Math.random() * 266);
    r2 = Math.floor(Math.random() * 266);
    r3 = Math.floor(Math.random() * 266);
    return r1, r2, r3;
}

random123()
document.getElementsByClassName("bgblack")[0].style.backgroundColor = `rgba(${r1},${r2},${r3})`;

let random20 = document.getElementsByClassName("random");

let arr2 = Array.from(random20);

arr2.forEach(element => {
    random123()
    element.style.backgroundColor = `rgba(${r1},${r2},${r3})`
});
