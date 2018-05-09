let Tryeltech = {
    PageNumber: 0,
    Pages: [['.Page0', "", "abilities"], ['.Page1', "equip", "Spell"], ['.Page2', "abilities", ""]],
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
        document.getElementById("Classes").addEventListener('change', Tryeltech.ClassVomit);
        document.getElementById("Back").addEventListener('click', Tryeltech.Prev);
        document.getElementById("Forward").addEventListener('click', Tryeltech.Next);
    },

    ClassVomit: function (ev) {
        let page1 = document.getElementById("Equip");
        let stage = document.getElementById("AbilitySelect");
        let ClassVal = document.getElementById("Classes").value;
        let TargetClass = Classes[ClassVal];
        let TargetAbilities = ClassAbilities[ClassVal];
        if (ClassVal < 6 || ClassVal > 9) {
            page1.innerHTML =
                `<p> <strong> Class: </strong> ${TargetClass.Name} </p>
<p> <strong> Sash Colour: </strong> ${TargetClass.Sash} </p>
<p> <strong> Armour: </strong> ${TargetClass.Armour}</p>
<p> <strong> Shield: </strong> ${Shields[TargetClass.Shield]}</p>
<p> <strong> Weapons: </strong> ${TargetClass.Weapons}</p>
<object data="img/XPBar.svg" type="image/svg+xml"></object>`;
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
            document.querySelector('object').addEventListener('click', () => {
                let xp = prompt('how many credits do you have?');
                localStorage.setItem('credits', xp)
            });

            document.querySelectorAll("#AbilityItem").forEach((Element) => {
                Element.addEventListener('click', Tryeltech.onscreen);
            });
        } else {
            page1.innerHTML =
                `<p> <strong> Class: </strong> ${TargetClass.Name} </p>
<p> <strong> Sash Colour: </strong> ${TargetClass.Sash} </p>
<p> <strong> Armour: </strong> ${TargetClass.Armour}</p>
<p> <strong> Shield: </strong> ${Shields[TargetClass.Shield]}</p>
<p> <strong> Weapons: </strong> ${TargetClass.Weapons}</p>
<p> <strong> Note: </strong> </p>
<p> Casters DO NOT start with armour, or shield profficiencies, and may only use daggers. Additional equipment may be purchased with spell points. </p>
<object data="img/XPBar.svg" type="image/svg+xml"></object>`;
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
                Element.addEventListener('click', Tryeltech.Choose);



            })

            document.querySelector('object').addEventListener('click', () => {
                let xp = prompt('how many credits do you have?');
                localStorage.setItem('credits', xp)
            });
        }
    },

    meleeClasses: function (Abilitylistings) {
        let EndResults = `<table><tr><th>name</th><th>meta</th><th>uses</th><th>limits</th></tr>`;
        Abilitylistings.forEach((Element) => {
            EndResults += `<tr id="AbilityItem" info='${Element}'> 
<td>${abilities[Element[0]].name}</td><td> ${Element[3]}</td><td> ${Element[1]} ${Element[2]} </td><td> ${Element[4]} </tr>`
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
    },
    Choose: function (ev) { 
        let clearout = function(){ document.getElementById('SpellList').classList.add('hidden');
        
        if (Tryeltech.SpellLists.length > 0){
            let additions = document.getElementById('TestingBed');
            additions.innerHTML = `<p><strong>Spells Chosen:</strong></p>`;
            Tryeltech.SpellLists.forEach(function(spell){
                
        additions.innerHTML += `<p> (${spell.Purchased}): ${abilities[spell.Spell[0]].name}  Cost: ${spell.cost} </p>`;
                
            })
            
        };
        document.getElementById("More").removeEventListener('click', price); document.getElementById("Less").removeEventListener('click', price);
     document.getElementById("Ok").removeEventListener('click', clearout2);
     document.getElementById("Cancel").removeEventListener('click', clearout);
    };
        let clearout2 = function(){
            let price = cost*total
                Tryeltech.SpellPoints[level-1] -= cost*total;
            for(i=0; i<7; i++){
                if(Math.sign(Tryeltech.SpellPoints[i]) == "-1"){ 
                    Tryeltech.SpellPoints[(i+1)] += Tryeltech.SpellPoints[i];
                    Tryeltech.SpellPoints[i] = 0;
            console.log('Running!');
                }
            }
            console.log(Tryeltech.SpellPoints);
        Tryeltech.SpellLists.push({"Spell": info, "Purchased": total, "cost": (total*cost)});
                            
            clearout(ev);
        };
        document.getElementById("SpellList").classList.remove("hidden");
        let info = ev.target.parentElement.getAttribute('info').split([","]);
        let level = ev.target.parentElement.getAttribute('level');
        let name = abilities[info[0]].name;
        let cost = info[4];
        let max = info[3];
        let availablePoints = 0;
        for(i = level; i < 7; i++){ availablePoints += Tryeltech.SpellPoints[(i-1)];};
        let total = 0;
        document.getElementById('selectedSpellCost').textContent = cost;
        document.getElementById('selectedSpellName').textContent = name;
        document.getElementById('selectedSpellMax').textContent = max;
        document.getElementById('selectedSpellUses').textContent = info[1] + "/" + info[2][1];

        if( isNaN(max)){
            max = availablePoints;
        }

        document.getElementById("Amount").textContent = `${total/cost}/${max}`;

        let price = function (ev) {
            let plusorminus = ev.target.id;
            if (plusorminus == 'Less' && total != 0 ) {
                total --;
            }
            if (plusorminus == 'More' && total <  max && availablePoints >= (cost*(total+1))) {
                total ++;
            }
            document.getElementById("Amount").textContent = `${total}/${max}`;

        };
     document.getElementById("More").addEventListener('click', price);
    document.getElementById("Less").addEventListener('click', price);
       document.getElementById("Ok").addEventListener('click', clearout2); document.getElementById('Cancel').addEventListener('click', clearout);
        
      },








    onscreen: function (ev) {
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
