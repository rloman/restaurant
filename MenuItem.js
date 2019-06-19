class MenuItem {

    constructor(id, name, allergy){
        this.id = id;
        this.name = name;
        this.allergy = allergy;
    }



}

let aardappels = new MenuItem(3, "Aard", "");

console.log(aardappels.name);