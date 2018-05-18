let SpellBook = {
    ListKey: ['end'],
    CurrentList: ['Spellpoints'],
    CurrentSpell: [''],
    CurrentTotal: 0,
    CurrentLevel: 0,
    CurrentClass: "",
    Archetypes: [],
    TargetList: '',
    SpellPoints: [],

    init: function () {

        document.getElementById("More").addEventListener('click', SpellBook.Price);
        document.getElementById("Less").addEventListener('click', SpellBook.Price);
        document.getElementById("Ok").addEventListener('click', SpellBook.Confirm);
        document.getElementById('Save').addEventListener('click', SpellBook.Save);
        document.getElementById('Cancel').addEventListener('click', SpellBook.Clear);
       SpellBook.SpellPoints = SpellBook.SpellPointMax();

    },
    
    SpellPointMax: function(){
        if(Tryeltech.ChosenClassLevel > 0 && Tryeltech.ChosenClassLevel < 7){
        SpellBook.SpellPoints = [];
        for(x=1; x < 7; x++){
            if ( x < Tryeltech.ChosenClassLevel){
            SpellBook.SpellPoints.push(5);}
            else if(x == Tryeltech.ChosenClassLevel){
                SpellBook.SpellPoints[x-1] = 6;
                console.log(SpellBook.SpellPoints)
            } else if (Tryeltech.ChosenClassLevel < x){
                SpellBook.SpellPoints.push(0);
            }
        }}else{SpellBook.SpellPoints = [5, 5, 5, 5, 5, 6]}
        console.log(SpellBook.SpellPoints);
        return SpellBook.SpellPoints;
    },

    Save: function () {

        let listname = prompt('list name:');
        SpellBook.ListKey += "," + listname;

        SpellBook.CurrentList[0] = SpellBook.SpellPoints;

        localStorage.setItem(SpellBook.CurrentClass + "Key", SpellBook.ListKey);

        localStorage.setItem(listname, JSON.stringify(SpellBook.CurrentList));

        Tryeltech.Prev();
        SpellBook.Clear();
        let page1 = document.getElementById('ListsBed');
        try {
            page1.innerHTML = '';
            let additions = SpellBook.ListKey.split([","]);
            console.log(additions);
            additions.forEach((list) => {
                page1.innerHTML += `<li id="${list}" class="ListType"> ${list}</li>`;
            })
        } catch (err) {}
        document.querySelectorAll('.ListType').forEach((listButton) => {
            listButton.addEventListener('click', SpellBook.Load);
        })

    },
    /////////////////////////// List Populate
    Activate: function (ev) {

        if (!ev.target.parentElement.classList.contains('disabled')) {

            try {
                document.querySelector('.active').classList.remove('active')
            } catch (err) {};
            document.getElementById('SpellList').classList.remove('hidden');
            SpellBook.CurrentSpell = ev.target.parentElement.getAttribute('info').split([","]);
            SpellBook.CurrentLevel = ev.target.parentElement.getAttribute('level');



            let exists = 'no';
            for (i = 1; i < SpellBook.CurrentList.length; i++) {
                if (SpellBook.CurrentList[i].Spell[0] == SpellBook.CurrentSpell[0]) {
                    exists = i;
                }
            }

            if (exists != 'no') {
                SpellBook.CurrentTotal = SpellBook.CurrentList[exists].Purchased;
            }


            let additions = document.getElementById('TestingBed');


            additions.innerHTML = `<tr><th>Purchased</th><th>Name</th><th>Cost</th></tr>`;
            for (i = 1; i < SpellBook.CurrentList.length; i++) {
                additions.innerHTML += `<tr info="${SpellBook.CurrentList[i].Spell}" level="${SpellBook.CurrentList[i].level}" id="SelectedSpells"><td>${SpellBook.CurrentList[i].Purchased}</td><td>${abilities[SpellBook.CurrentList[i].Spell[0]].name}</td><td>${SpellBook.CurrentList[i].cost}</td></tr>`;
            }


            let ButtonAdd = document.querySelectorAll('#SelectedSpells');
            ButtonAdd.forEach((spell) => {
                spell.addEventListener('click', SpellBook.Listmod);
            });


            document.getElementById('selectedSpellCost').textContent = SpellBook.CurrentSpell[4];
            document.getElementById('selectedSpellName').textContent = abilities[SpellBook.CurrentSpell[0]].name;
            document.getElementById('selectedSpellMax').textContent = SpellBook.CurrentSpell[3];
            document.getElementById('selectedSpellUses').textContent = SpellBook.CurrentSpell[1] + "/" + SpellBook.CurrentSpell[2][1];

            document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;


        }

    },
    Load: function (ev) {
        Tryeltech.Next();

        let loadTarget = ev.target.id;
        console.log(loadTarget);

        let list = localStorage.getItem(loadTarget)
        list = JSON.parse(list);

        SpellBook.CurrentList = list;

        SpellBook.SpellPoints = list[0];
        
        
        SpellBook.CheckForArchetypes();
    },
    ///////////////////////// List Buttons
    Confirm: function () {
        let exists = 'no';
        for (i = 1; i < SpellBook.CurrentList.length; i++) {
            if (SpellBook.CurrentList[i].Spell[0] == SpellBook.CurrentSpell[0]) {
                exists = i;
            }
        }

        if (exists != 'no') {
            SpellBook.CurrentList[exists] = {
                "Spell": SpellBook.CurrentSpell,
                "Purchased": SpellBook.CurrentTotal,
                "cost": (SpellBook.CurrentTotal * SpellBook.CurrentSpell[4]),
                "level": SpellBook.CurrentLevel
            };

            if (SpellBook.CurrentTotal < 1) {
                SpellBook.CurrentList.splice(exists, 1)

                if (SpellBook.CurrentSpell[0] == 145 || SpellBook.CurrentSpell[0] == 113 || SpellBook.CurrentSpell[0] == 90|| SpellBook.CurrentSpell[0] == 35 || SpellBook.CurrentSpell[0] == 109|| SpellBook.CurrentSpell[0] == 99|| SpellBook.CurrentSpell[0] == 160|| SpellBook.CurrentSpell[0] == 17|| SpellBook.CurrentSpell[0] == 161|| SpellBook.CurrentSpell[0] == 54) {
                    SpellBook.ArchetypeReset();
                }
            }



        } else {
            if (SpellBook.CurrentTotal > 0) {
                SpellBook.CurrentList.push({
                    "Spell": SpellBook.CurrentSpell,
                    "Purchased": SpellBook.CurrentTotal,
                    "cost": (SpellBook.CurrentTotal * SpellBook.CurrentSpell[4]),
                    "level": SpellBook.CurrentLevel
                });
            }
        }
        SpellBook.Clear();

        SpellBook.CheckForArchetypes();

        console.log("Confirm: " + SpellBook.SpellPoints);
    },
    Clear: function () {
        document.getElementById('SpellList').classList.add('hidden');
      
        
          let MainLevel = parseInt(SpellBook.CurrentSpell[4]);
                let PrevPoints = parseInt(SpellBook.SpellPoints[(SpellBook.CurrentLevel) - 1]);

                console.log(MainLevel + PrevPoints);

                SpellBook.SpellPoints[(SpellBook.CurrentLevel) - 1] = (MainLevel * SpellBook.CurrentTotal) + PrevPoints;

        

        SpellBook.CurrentSpell = "";
        SpellBook.CurrentTotal = 0;



    },

    Price: function (ev) {
        let MoreOrLess = ev.target.id;

        let AvailablePoints = 0;

        console.log(parseInt(SpellBook.SpellPoints));
        for (i = 0; i < 6; i++) {
            if (Math.sign(SpellBook.SpellPoints[i]) == "-1") {
                AvailablePoints += SpellBook.SpellPoints[i];
            } else if (i >= (SpellBook.CurrentLevel - 1)) {
                AvailablePoints += SpellBook.SpellPoints[i];
            } 
        }
        
        console.log("AvailablePoints: " + AvailablePoints);
        let max = SpellBook.CurrentSpell[3];

        if (max == "" || max == '-' || max == " ") {
            max = 31;
        }

        if (MoreOrLess == "More") {
            if (AvailablePoints >= SpellBook.CurrentSpell[4] && SpellBook.CurrentTotal < max) {
                SpellBook.CurrentTotal++;
                SpellBook.SpellPoints[(SpellBook.CurrentLevel) - 1] -= SpellBook.CurrentSpell[4];

                document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;


            } else {

            }
        }
        if (MoreOrLess == "Less") {
            if (SpellBook.CurrentTotal > 0) {
                SpellBook.CurrentTotal--;

                let MainLevel = parseInt(SpellBook.CurrentSpell[4]);
                let PrevPoints = parseInt(SpellBook.SpellPoints[(SpellBook.CurrentLevel) - 1]);

                console.log(MainLevel + PrevPoints);

                SpellBook.SpellPoints[(SpellBook.CurrentLevel) - 1] = MainLevel + PrevPoints;




                document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
            }
        }

        console.log("+/=: " + SpellBook.SpellPoints);
    },

    Listmod: function (ev) {
        try {
            document.querySelector('.active').classList.remove('active')
        } catch (err) {};
        SpellBook.CurrentSpell = ev.target.parentElement.getAttribute('info').split([","]);
        SpellBook.CurrentLevel = ev.target.parentElement.getAttribute('Level');
        ev.target.parentElement.classList.add('active');

        x = 0;
        SpellBook.CurrentList.forEach((spell) => {
            if (x > 0) {
                if (spell.Spell[0] == SpellBook.CurrentSpell[0]) {
                    SpellBook.CurrentTotal = spell.Purchased;
                    return;
                }
            }
            x++
        })


        document.getElementById('selectedSpellCost').textContent = SpellBook.CurrentSpell[4];
        document.getElementById('selectedSpellName').textContent = abilities[SpellBook.CurrentSpell[0]].name;
        document.getElementById('selectedSpellMax').textContent = SpellBook.CurrentSpell[3];
        document.getElementById('selectedSpellUses').textContent = SpellBook.CurrentSpell[1] + "/" + SpellBook.CurrentSpell[2][1];

        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;

    },

    CheckForArchetypes: function () {
        for (x = 1; x < SpellBook.CurrentList.length; x++) {
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Summoner') && !SpellBook.Archetypes.includes('Summoner')) {
                SpellBook.AddSummoner();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Ranger') && !SpellBook.Archetypes.includes('Ranger')) {
                SpellBook.AddRanger()
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Dervish') && !SpellBook.Archetypes.includes('Dervish')) {
                SpellBook.AddDervish()
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Legend') && !SpellBook.Archetypes.includes('Legend')) {
                SpellBook.AddLegend()
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Priest') && !SpellBook.Archetypes.includes('Priest')) {
                SpellBook.AddPriest();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Necromancer') && !SpellBook.Archetypes.includes('Necromancer')) {
                SpellBook.AddNecromancer();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Warder') && !SpellBook.Archetypes.includes('Warder')) {
                SpellBook.AddWarder();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Evoker') && !SpellBook.Archetypes.includes('Evoker')) {
                SpellBook.AddEvoker();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Battle') && !SpellBook.Archetypes.includes('BattleMage')) {
                SpellBook.AddBattleMage();
            }else
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Warlock') && !SpellBook.Archetypes.includes('Warlock')) {
                SpellBook.AddWarlock();
            }



        }


    },


    /////////////////////////////// Summoner
    AddSummoner: function (ev) {
        let CanSummon = true;
        for (x = 1; x < SpellBook.CurrentList.length; x++) {
            let inquestion = abilities[SpellBook.CurrentList[x].Spell[0]]
            if (inquestion.type == 2 && inquestion.range > 2) {
                CanSummon = false;
            }
            if (inquestion.name.includes('Equipment') && SpellBook.CurrentList[x].level > 2) {
                CanSummon = false;
            }
        }

        if (CanSummon) {
            for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].type == 1) {
                    SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1]) * 2;
                }
            }
            document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let AbilityLevel = Spell.getAttribute('level');
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let SpellName = abilities[SpellInQuestion[0]].name;
                let SpellType = abilities[SpellInQuestion[0]].type;
                if (SpellType == 1) {
                    SpellInQuestion[1] = (SpellInQuestion[1] * 2);
                    Spell.setAttribute('info', SpellInQuestion);
                } else if ((SpellName.includes('Equipment') && AbilityLevel > 2)) {
                    Spell.classList.add('disabled');
                } else if ((SpellType == 2 && abilities[SpellInQuestion[0]].range > 2)) {
                    Spell.classList.add('disabled');
                }

                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Summoner');
        } else {
            alert('No can do buckaroo');
        }

    },
    
    ArchetypeReset: function(ev){
        let classes = {'Archer': 0,'Assassin': 1,'Barbarian': 2,'Monk': 3,'Scout': 4,'Warrior': 5,'Bard': 6,'Druid': 7,'Healer': 8,'Wizard': 9,'AntiPaladin': 10, 'Paladin': 11}
        let PaintedTarget = classes[SpellBook.CurrentClass];
       SpellBook.SpellPoints = SpellBook.SpellPointMax();
        Tryeltech.ChosenClass = Classes
        
        console.log(SpellBook.CurrentClass);
        for (x=1; x< SpellBook.CurrentList.length; x++){
            console.log(PaintedTarget);
            let spellinquestion = SpellBook.CurrentList[x];
            ClassAbilities[PaintedTarget][('LV' + spellinquestion.level)].forEach((ability)=>{
                if(ability[0] == spellinquestion.Spell[0]){
                    spellinquestion.Spell = ability;
                    spellinquestion.cost = (ability[4])*spellinquestion.Purchased;
                    SpellBook.SpellPoints[(spellinquestion.level)-1] -= spellinquestion.cost;
                    
                    console.log('Found!');
                }
            })
             
        };
        let TargetAbilities = ClassAbilities[PaintedTarget];
document.getElementById("AbilitySelect").innerHTML = `<p class="lv0"> Look The Part: 
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
        
        SpellBook.Archetypes = [""];
        SpellBook.CheckForArchetypes();
        
    },
    //////////////////////////Ranger
    AddRanger: function (ev) {
        for (x = 1; x < SpellBook.CurrentList.length; x++) {
            if (abilities[SpellBook.CurrentList[x].Spell[0]].type == 1) {

                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] += SpellBook.CurrentList[x].cost;

                SpellBook.CurrentList[x].Spell[4] = (SpellBook.CurrentList[x].Spell[4]) * 2;
                SpellBook.CurrentList[x].cost = (SpellBook.CurrentList[x].cost) * 2;
            }
            if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Equipment')) {
                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] -= SpellBook.CurrentList[x].cost;
                SpellBook.CurrentList[x].Spell[4] = 0;
                SpellBook.CurrentList[x].cost = 0;

            }
        }
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
            let AbilityLevel = Spell.getAttribute('level');
            let SpellInQuestion = Spell.getAttribute('info').split(',');
            let SpellName = abilities[SpellInQuestion[0]].name;
            let SpellType = abilities[SpellInQuestion[0]].type;
            if (SpellType == 1) {
                SpellInQuestion[4] = (SpellInQuestion[4] * 2);
                Spell.setAttribute('info', SpellInQuestion);
            } else if ((SpellName.includes('Equipment'))) {
                SpellInQuestion[4] = 0;
            }
            Spell.setAttribute('info', SpellInQuestion);
            Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
        })
        SpellBook.Archetypes.push('Ranger');
    },
///////////////////////////// Dervish
    AddDervish: function (ev){
         for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].type == 2) {
                    SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1]) * 2;
                } else if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Equipment')){
                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] += SpellBook.CurrentList[x].cost;

                SpellBook.CurrentList[x].Spell[4] = (SpellBook.CurrentList[x].Spell[4]) * 2;
                SpellBook.CurrentList[x].cost = (SpellBook.CurrentList[x].cost) * 2;
                }
            }
            document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let SpellName = abilities[SpellInQuestion[0]].name;
                let SpellType = abilities[SpellInQuestion[0]].type;
                if (SpellType == 2) {
                    SpellInQuestion[1] = (SpellInQuestion[1] * 2);
                    Spell.setAttribute('info', SpellInQuestion);
                } else if ((SpellName.includes('Equipment'))) {
                    SpellInQuestion[4] = (SpellInQuestion[4]) *2
                } 
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Dervish');    
    },
    AddLegend: function(ev){
        for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Extension')) {
                    SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1]) * 2;
                } 
            }
            document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let SpellName = abilities[SpellInQuestion[0]].name;
                let SpellType = abilities[SpellInQuestion[0]].type;
                if(SpellName.includes('Extension')) {
                    SpellInQuestion[1] = (SpellInQuestion[4]) *2
                } if(SpellName.includes('Swift')) {
                    Spell.classList.add('disabled');
                } 
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Legend');    
    },
    AddNecromancer: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].school == 1) {
                    SpellBook.CurrentList[x].Spell[2] = (SpellBook.CurrentList[x].Spell[2]) + " Charge X 3";
                } 
            }
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellSchool = abilities[SpellInQuestion[0]].school;
            if(spellSchool == 1){
                    SpellInQuestion[2] = (SpellInQuestion[2]) + " Charge X 3";
                    }else if(spellSchool == 4){
                Spell.classList.add('disabled')
            }
        
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Necromancer');
          
        
    },
    
    AddWarder: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].school == 4) {
                    SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1])* 2;
                } 
            }
        
        
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellSchool = abilities[SpellInQuestion[0]].school;
            if(spellSchool == 4){
                    SpellInQuestion[1] = (SpellInQuestion[1]) *2;
                    }else if(spellSchool == 1 || spellSchool == 0 || spellSchool == 7){
                Spell.classList.add('disabled')
            }
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Warder');
          
        
    },
    AddPriest: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].type == 5) {
                    SpellBook.CurrentList[x].Spell[2] = "/life Charge X 3";
                } 
            }
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellType = abilities[SpellInQuestion[0]].type;
            if(spellType == 5){
                    SpellInQuestion[2] =  "/life Charge X 3";
                    }
        
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Priest');
          
        
    },
    AddEvoker: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Elemental')) {
                    SpellBook.CurrentList[x].Spell[2] = (SpellBook.CurrentList[x].Spell[2]) + " Charge X 10";
                } 
            }
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellRange = abilities[SpellInQuestion[0]].range;
            if(abilities[SpellInQuestion[0]].name.includes('Elemental')){
               
                    SpellInQuestion[2] = (SpellInQuestion[2]) + " Charge X 10";
               
               }else if(spellRange > 2){
                Spell.classList.add('disabled');
        }
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Evoker');
          
        
    },
    AddWarlock: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].school == (1 || 2) && abilities[SpellBook.CurrentList[x].Spell[0]].type == 2) {
                    SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1]) * 2;
                } 
            }
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellSchool = abilities[SpellInQuestion[0]].school;
                let spellType = abilities[SpellInQuestion[0]].type;
            
            if(spellType == 2){
               if (spellSchool == (1||2)){
                   SpellInQuestion[1] = (SpellInQuestion[1]) * 2;
               } else{
                   Spell.classList.add('disabled')
               }}
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('Warlock');
          
        
    },
    AddBattleMage: function(ev){
              for (x = 1; x < SpellBook.CurrentList.length; x++) {
                if (abilities[SpellBook.CurrentList[x].Spell[0]].name == "Ambulant") {
                    SpellBook.CurrentList[x].Spell[1] = " ";
                    SpellBook.CurrentList[x].Spell[2] = "Unlimited";
                } 
            }
        
        document.querySelectorAll('#AbilityItem').forEach((Spell) => {
                let SpellInQuestion = Spell.getAttribute('info').split(',');
                let spellType = abilities[SpellInQuestion[0]].type;
            if(abilities[SpellInQuestion[0]].name == 'Ambulant'){
            SpellInQuestion[1] = " ";
                SpellInQuestion[2] = "Unlimited";
            }else if(spellType == 0 || spellType == 1){
                Spell.classList.add('disabled');
            }
                Spell.setAttribute('info', SpellInQuestion);
                Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
            })
            SpellBook.Archetypes.push('BattleMage');
          
        
    }
    




}
