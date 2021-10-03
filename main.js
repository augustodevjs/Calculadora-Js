function Calculadora() {
    this.display = document.querySelector('.display')

    this.showValue = function() {
        this.getNumber;
    }

    this.getNumber = document.addEventListener('click', e => {
        const element = e.target;

        if(element.classList.contains('btn')) this.showDisplay(element.innerText);
        if(element.classList.contains('btn-clear')) this.clear();
        if(element.classList.contains('btn-del')) this.delete();
        if(element.classList.contains('btn-eq')) this.resultValue();

        this.display.focus();  
    })

    this.showDisplay = value => this.display.value += value;
    this.clear = () => this.display.value = '';
    this.delete = () =>  this.display.value = this.display.value.slice(0, -1);
    
    this.resultValue = () => {
        try{    
            const conta = eval(this.display.value)

            if(!conta) {
                alert('Conta Inválida');
                this.clear();
                return;
            }
            this.display.value = conta

        }catch(error) {
            alert('Conta Inválida');
            this.clear();
            return;
        }
    }
}

const result = new Calculadora();
result.showValue;