let Tryeltech = {
    ChosenClass: 'd',
    PageNumber: 0,
    Experience: [],
    Pages: [['.Login', "", "Classes" ],['.ClassSelect', 'Log in', 'Equip'],['.Page0', "Classes", "abilities"], ['.Page1', "equip", "Spell"], ['.Page2', "abilities", ""]],
    SpellPoints: [5,5,5,5,5,6],
    
    SpellLists: [],

    Next: function () {
        if (Tryeltech.PageNumber < (Tryeltech.Pages.length - 1)) {
            Tryeltech.PageNumber++;
            Tryeltech.Pages.forEach((page) => {
                document.querySelector(page[0]).classList.add('hidden');
            });
            document.querySelector(Tryeltech.Pages[Tryeltech.PageNumber][0]).classList.remove('hidden');
            document.getElementById("Back").textContent = Tryeltech.Pages[Tryeltech.PageNumber][1];
            document.getElementById("Forward").textContent = Tryeltech.Pages[Tryeltech.PageNumber][2];
            if(Tryeltech.PageNumber == 2){
                LevelRig.XPActivate();
            }
        }
    },

    Prev: function () {
        if (Tryeltech.PageNumber > 0) {
            Tryeltech.PageNumber--;
            Tryeltech.Pages.forEach((page) => {
                document.querySelector(page[0]).classList.add('hidden');
            });
            document.querySelector(Tryeltech.Pages[Tryeltech.PageNumber][0]).classList.remove('hidden');
            document.getElementById("Back").textContent = Tryeltech.Pages[Tryeltech.PageNumber][1];
            document.getElementById("Forward").textContent = Tryeltech.Pages[Tryeltech.PageNumber][2];
        }
    },

    init: function () {
        LevelRig.init();
        let meowmix = document.querySelectorAll("#Classes");
        meowmix.forEach((li)=>{li.addEventListener('click', Tryeltech.ClassVomit)});
        document.getElementById("Back").addEventListener('click', Tryeltech.Prev);
        document.getElementById("Forward").addEventListener('click', Tryeltech.Next);
        
        SpellBook.init()
      
    },

    ClassVomit: function (ev) {
        let page1 = document.getElementById("Equip");
        let stage = document.getElementById("AbilitySelect");
        let ClassVal = ev.target.value;
        Tryeltech.ChosenClass = Classes[ClassVal];
        let TargetAbilities = ClassAbilities[ClassVal];
        if (ClassVal < 6 || ClassVal > 9) {
            page1.innerHTML =
                `<p> <strong> Class: </strong> ${Tryeltech.ChosenClass.Name} </p>
<p> <strong> Sash Colour: </strong> ${Tryeltech.ChosenClass.Sash} </p>
<p> <strong> Armour: </strong> ${Tryeltech.ChosenClass.Armour}</p>
<p> <strong> Shield: </strong> ${Shields[Tryeltech.ChosenClass.Shield]}</p>
<p> <strong> Weapons: </strong> ${Tryeltech.ChosenClass.Weapons}</p>
<object data="img/XPBar.svg" type="image/svg+xml" id="XP"></object>`;
            stage.innerHTML = `<p class="lv0"> Look The Part: 
${Tryeltech.meleeClasses(TargetAbilities.LTP)}</p>
<p class="lv1">Level 1
${Tryeltech.meleeClasses(TargetAbilities.LV1)}</p>
<p class="lv2">Level 2
${Tryeltech.meleeClasses(TargetAbilities.LV2)}</p>
<p class="lv3">Level 3
${Tryeltech.meleeClasses(TargetAbilities.LV3)}</p>
<p class="lv4">Level 4
${Tryeltech.meleeClasses(TargetAbilities.LV4)}</p>
<p class="lv5">Level 5
${Tryeltech.meleeClasses(TargetAbilities.LV5)}</p>
<p class="lv6">Level 6
${Tryeltech.magicClasses(TargetAbilities.LV6)}</p>`;

            document.querySelectorAll("#AbilityItem").forEach((Element) => {
                Element.addEventListener('click', Tryeltech.onscreen);
            });
        } else {
            SpellBook.CurrentClass = Tryeltech.ChosenClass.Name;
            page1.innerHTML =
                `<p> <strong> Class: </strong> ${Tryeltech.ChosenClass.Name} </p>
<p> <strong> Sash Colour: </strong> ${Tryeltech.ChosenClass.Sash} </p>
<p> <strong> Armour: </strong> ${Tryeltech.ChosenClass.Armour}</p>
<p> <strong> Shield: </strong> ${Shields[Tryeltech.ChosenClass.Shield]}</p>
<p> <strong> Weapons: </strong> ${Tryeltech.ChosenClass.Weapons}</p>
<p> <strong> Note: </strong> </p>
<p> Casters DO NOT start with armour, or shield profficiencies, and may only use daggers. Additional equipment may be purchased with spell points. </p>
<object data="img/XPBar.svg" type="image/svg+xml" id="XP"></object><ul>`;
            stage.innerHTML = `<p class="lv0"> Look The Part: 
${Tryeltech.magicClasses(TargetAbilities.LTP, 0)}</p>
<p class="lv1">Level 1
${Tryeltech.magicClasses(TargetAbilities.LV1, 1)}</p>
<p class="lv2">Level 2
${Tryeltech.magicClasses(TargetAbilities.LV2, 2)}</p>
<p class="lv3">Level 3
${Tryeltech.magicClasses(TargetAbilities.LV3, 3)}</p>
<p class="lv4">Level 4
${Tryeltech.magicClasses(TargetAbilities.LV4, 4)}</p>
<p class="lv5">Level 5
${Tryeltech.magicClasses(TargetAbilities.LV5, 5)}</p>
<p class="lv6">Level 6
${Tryeltech.magicClasses(TargetAbilities.LV6, 6)}</p>`;
            document.querySelectorAll("#AbilityItem").forEach((Element) => {
                Element.addEventListener('click', Tryeltech.onscreen);
                Element.addEventListener('click', SpellBook.Activate);



            })
            
SpellBook.SpellLists = localStorage.getItem(Tryeltech.ChosenClass.Name);
let listkeys = localStorage.getItem(Tryeltech.ChosenClass.Name+"Key");
            SpellBook.SpellLists = JSON.parse(SpellBook.SpellLists);
            listkeys = JSON.parse(listkeys);
            
            if(listkeys){
                console.log(listkeys);
                try{
                listkeys.forEach((lists)=>{ 
                    page1.innerHTML += `<li id="${lists}" class="ListType"> ${lists}</li>`;
                })}
                catch(err){
                    page1.innerHTML += `<li id="${listkeys}" class="ListType"> ${listkeys}</li>`;
                }
                
                document.querySelectorAll('.ListType').forEach((listButton)=>{
                    listButton.addEventListener('click', SpellBook.Load);
                })
            }

        };
        Tryeltech.Next(); 
        XPBarCode.update();
    },

    meleeClasses: function (Abilitylistings) {
        let EndResults = `<table><tr><th>name</th><th>meta</th><th>uses</th><th>limits</th></tr>`;
        Abilitylistings.forEach((Element) => {
            EndResults += `<tr id="AbilityItem" info='${Element}'> <td>${abilities[Element[0]].name}</td><td> ${Element[3]}</td><td> ${Element[1]} ${Element[2]} </td><td> ${Element[4]} </tr>`;
        })
        EndResults += `</table>`;
        return EndResults;
    },

    magicClasses: function (Abilitylistings, level) {
        let EndResults = `<table> <tr> <th> Name </th><th>cost</th><th>max</th><th>uses</th></tr>`;
        Abilitylistings.forEach((Element) => {
            EndResults += `<tr id="AbilityItem" info='${Element}' level="${level}"}> 
<td>${abilities[Element[0]].name} </td><td>${Element[4]}</td><td>${Element[3]}</td> <td>${Element[1]} ${Element[2]}</td></tr>`
        })
        EndResults += `</table>`;
        return EndResults;
    },  onscreen: function (ev) {
        try {
            let removal = document.querySelector('.active');
            removal.classList.remove('active');
        } catch (err) {};
        let Element = ev.target.parentElement.getAttribute('info').split([","])[0];
        ev.target.parentElement.classList.add('active');
        let screen = document.getElementById('BigScreen');
        screen.innerHTML = ``;
        if (spellType[abilities[Element].type]) {
            screen.innerHTML += `
<h1 style="text-align: center;">${abilities[Element].name}</h1>
<p><strong>Type: </strong> ${spellType[abilities[Element].type]} </p>`
        }
        if (spellSchool[abilities[Element].school]) {
            screen.innerHTML += `  
<p><strong>School: </strong> ${spellSchool[abilities[Element].school]} </p>`
        }
        if (spellRange[abilities[Element].range]) {
            screen.innerHTML += `
<p><strong>Range: </strong> ${spellRange[abilities[Element].range]} </p>`
        }
        if (abilities[Element].incant[0]) {
            screen.innerHTML += `
<p><strong>Incantation: </strong><br> "${abilities[Element].incant[0]}"`;
            if (abilities[Element].incant[1] > 1) {
                screen.innerHTML += `X  ${abilities[Element].incant[1]}</p>`
            }
        }
        if (abilities[Element].effect) {
            screen.innerHTML += `<p><strong> Effect: </strong><br> ${abilities[Element].effect}</p>`
        }
        if (abilities[Element].limitations) {
            screen.innerHTML += `<p><strong> Limitations: </strong><br> ${abilities[Element].limitations}`
        }
    }

}

document.addEventListener("DOMContentLoaded", Tryeltech.init);
