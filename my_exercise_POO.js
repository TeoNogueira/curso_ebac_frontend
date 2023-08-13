// Exercise POO Construct Functions etc..

function Func(name, office, salary) {

    function Empregado(name) {
     this.name = name;
     this.description = function() {

     console.log(
     `${this.name} é funcionário na empresa DevBrazil como ${this.office} seu salário é de: R$ ${this.getGold()},00`);
        
    }
    }
    
    this.office = office;
    
    let _salary = salary;

    this.getGold = function() {
        return _salary;
    }

    this.setGold = function(valor) {
        if (typeof valor === 'number') {
            _salary = valor;
        }
    }

    this.moreGold = function() {
        const newGold = _salary * 1.77;
        _salary = newGold;
    }

    this.inOffice = function() {
        console.log(this.office);
    }

    Empregado.call(this, name);
}


function Devjr(name, func) {

    Func.call(this, name, func, 4600);

    this.moreGold = function() {
        const newGold = this.getGold() * 0.00;
        this.setGold(newGold);
    }
}

function Supervisor(name, func) {
    Func.call(this, name, func, 12000);

    this.moreGold = function() {
        const newGold = this.getGold() * 1.5;
        this.setGold(newGold);
    }
}


function Admin(name, func) {

    Func.call(this, name, func, 25000);

    this.moreGold = function() {
        const newGold = this.getGold() * 2.15;
        this.setGold(newGold);
    }
}

const admin = new Admin("Jerohn", 'Gerente Geral');
const superV = new Supervisor("Karina", "Scrum Master");
const devJr = new Devjr("Kiko", "Desenvolvedor Jr");

const invoke = () => {

    admin.description();
    admin.moreGold();
    superV.description();
    superV.moreGold();
    devJr.description();
    devJr.moreGold();

}

invoke()