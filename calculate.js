let string = "";
let data = document.querySelectorAll('[data-set="eq"]');
for (let i = 0; i < data.length; i++) {
    data[i].style.backgroundColor = "orange";
}

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            try {
                string = eval(string);
                document.getElementById("display").value = string;
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        } else if (e.target.value == 'C') {
            string = "";
            document.getElementById("display").value = string;
        } else {
            string += e.target.value;
            document.getElementById("display").value = string;
        }
    });
});
