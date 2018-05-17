let SpellBook = {
        ListKey: ['end'],
        CurrentList: ['Spellpoints'],
        CurrentSpell: [''],
        CurrentTotal: 0,
        CurrentLevel: 0,
        CurrentClass: "",
        Archetypes: [],
    TargetList: '',
        SpellPoints: [5, 5, 5, 5, 5, 6],

        init: function () {
            
            document.getElementById("More").addEventListener('click', SpellBook.Price);
            document.getElementById("Less").addEventListener('click', SpellBook.Price);
            document.getElementById("Ok").addEventListener('click', SpellBook.Confirm);
            document.getElementById('Save').addEventListener('click', SpellBook.Save);
            document.getElementById('Cancel').addEventListener('click', SpellBook.Clear);

        },
    
        Save: function(){
            
            let listname = prompt('list name:');
            SpellBook.ListKey += "," +listname;
            
            SpellBook.CurrentList[0] = SpellBook.SpellPoints;
            
            localStorage.setItem(SpellBook.CurrentClass+"Key", SpellBook.ListKey);
            
            localStorage.setItem(listname, JSON.stringify(SpellBook.CurrentList));
            
            Tryeltech.Prev();
            SpellBook.Clear();
            let page1 = document.getElementById('ListsBed');
             try{
                 page1.innerHTML = '';
                let additions = SpellBook.ListKey.split([","]);
            console.log(additions);
                 additions.forEach((list)=>{ 
                    page1.innerHTML += `<li id="${list}" class="ListType"> ${list}</li>`;
                })}
                catch(err){
                }document.querySelectorAll('.ListType').forEach((listButton)=>{
                    listButton.addEventListener('click', SpellBook.Load);
                })
            
        },
    /////////////////////////// List Populate
        Activate: function (ev) {
            
            if(!ev.target.parentElement.classList.contains('disabled')){
            
        try{
            document.querySelector('.active').classList.remove('active')
        } catch(err){};
            document.getElementById('SpellList').classList.remove('hidden');
            SpellBook.CurrentSpell = ev.target.parentElement.getAttribute('info').split([","]);
            SpellBook.CurrentLevel = ev.target.parentElement.getAttribute('level');
            
            
            
        let exists = 'no';
        for(i = 1; i < SpellBook.CurrentList.length; i++){
            if(SpellBook.CurrentList[i].Spell[0] == SpellBook.CurrentSpell[0]){ exists = i; }}
        
        if(exists != 'no'){
            SpellBook.CurrentTotal = SpellBook.CurrentList[exists].Purchased;
        }
    
    
        let additions = document.getElementById('TestingBed'); 
            
        
        additions.innerHTML = `<tr><th>Purchased</th><th>Name</th><th>Cost</th></tr>`;
            for (i=1; i< SpellBook.CurrentList.length; i++){
        additions.innerHTML += `<tr info="${SpellBook.CurrentList[i].Spell}" level="${SpellBook.CurrentList[i].level}" id="SelectedSpells"><td>${SpellBook.CurrentList[i].Purchased}</td><td>${abilities[SpellBook.CurrentList[i].Spell[0]].name}</td><td>${SpellBook.CurrentList[i].cost}</td></tr>` ;
    }
            
            
    let ButtonAdd = document.querySelectorAll('#SelectedSpells');
    ButtonAdd.forEach((spell)=>{
        spell.addEventListener('click', SpellBook.Listmod);
    });

            
        document.getElementById('selectedSpellCost').textContent = SpellBook.CurrentSpell[4];
        document.getElementById('selectedSpellName').textContent = abilities[SpellBook.CurrentSpell[0]].name;
        document.getElementById('selectedSpellMax').textContent = SpellBook.CurrentSpell[3];
        document.getElementById('selectedSpellUses').textContent = SpellBook.CurrentSpell[1] + "/" + SpellBook.CurrentSpell[2][1];
        
        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
            
            
        }
            
},
    Load: function(ev){
        Tryeltech.Next();
        
        let loadTarget = ev.target.id;
        console.log(loadTarget);
        
        let list = localStorage.getItem(loadTarget)
        list = JSON.parse(list);
        
        SpellBook.CurrentList = list;
        
        SpellBook.SpellPoints = list[0];
    },
    ///////////////////////// List Buttons
    Confirm: function(){
        let exists = 'no';
        for(i = 1; i < SpellBook.CurrentList.length; i++){
            if(SpellBook.CurrentList[i].Spell[0] == SpellBook.CurrentSpell[0]){ exists = i; }}
        
        if(exists != 'no'){
    SpellBook.CurrentList[exists] = {"Spell": SpellBook.CurrentSpell, "Purchased": SpellBook.CurrentTotal, "cost": (SpellBook.CurrentTotal * SpellBook.CurrentSpell[4]), "level": SpellBook.CurrentLevel};
                
                if(SpellBook.CurrentTotal < 1){
                    SpellBook.CurrentList.splice(exists,1)
                    
                    if(SpellBook.CurrentSpell[0] == 145){
                        SpellBook.RemoveSummoner();
                    }if(SpellBook.CurrentSpell[0] == 113){
                        SpellBook.RemoveRanger();
                    }
                }
            
            
            
        }
        else{
            if(SpellBook.CurrentTotal > 0){
        SpellBook.CurrentList.push({"Spell": SpellBook.CurrentSpell, "Purchased": SpellBook.CurrentTotal, "cost": (SpellBook.CurrentTotal * SpellBook.CurrentSpell[4]), "level": SpellBook.CurrentLevel});}
        }
        SpellBook.Clear();
        
        SpellBook.CheckForArchetypes();
        
        console.log("Confirm: " + SpellBook.SpellPoints);
    },
    Clear: function(){
         document.getElementById('SpellList').classList.add('hidden');
        
        SpellBook.CurrentSpell = "";
        SpellBook.CurrentTotal= 0;
        
        
        
    },
    
    Price: function(ev){
        let MoreOrLess = ev.target.id;
        
        let AvailablePoints = 0;
    
        for(i = 0; i < 6; i++){
            if(Math.sign(SpellBook.SpellPoints[i]) == "-1"){AvailablePoints += SpellBook.SpellPoints[i];}
            else if(i >= (SpellBook.CurrentLevel-1)){AvailablePoints += SpellBook.SpellPoints[i];}}
        let max = SpellBook.CurrentSpell[3];
            
        if(max == "" || max == '-' || max == " "){ 
        max = 31;
        }
        
        if(MoreOrLess == "More"){
            if(AvailablePoints > SpellBook.CurrentSpell[4] && SpellBook.CurrentTotal < max)
                {
                    SpellBook.CurrentTotal ++;
                    SpellBook.SpellPoints[(SpellBook.CurrentLevel)-1] -= SpellBook.CurrentSpell[4];
                    
        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
                    
                    
                }else{
                    
                }
        }
        if(MoreOrLess == "Less"){
            if(SpellBook.CurrentTotal > 0){
                SpellBook.CurrentTotal --;
                
        let MainLevel = parseInt(SpellBook.CurrentSpell[4]);
        let PrevPoints = parseInt(SpellBook.SpellPoints[(SpellBook.CurrentLevel)-1]);
                
                console.log(MainLevel + PrevPoints);
                
                    SpellBook.SpellPoints[(SpellBook.CurrentLevel)-1] = MainLevel + PrevPoints;
                
                
                
                
        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
            }
        }
        
        console.log("+/=: " + SpellBook.SpellPoints);
    },
    
    Listmod: function(ev){
        try{
            document.querySelector('.active').classList.remove('active')
        } catch(err){};
        SpellBook.CurrentSpell = ev.target.parentElement.getAttribute('info').split([","]);
        SpellBook.CurrentLevel = ev.target.parentElement.getAttribute('Level');
        ev.target.parentElement.classList.add('active');
        
        x = 0;
        SpellBook.CurrentList.forEach((spell)=>{
            if(x>0){
            if(spell.Spell[0] == SpellBook.CurrentSpell[0]){
                SpellBook.CurrentTotal = spell.Purchased;
                return;
            }} x++
        })
    
    
        document.getElementById('selectedSpellCost').textContent = SpellBook.CurrentSpell[4];
        document.getElementById('selectedSpellName').textContent = abilities[SpellBook.CurrentSpell[0]].name;
        document.getElementById('selectedSpellMax').textContent = SpellBook.CurrentSpell[3];
        document.getElementById('selectedSpellUses').textContent = SpellBook.CurrentSpell[1] + "/" + SpellBook.CurrentSpell[2][1];
        
        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
    
    },
    
    CheckForArchetypes: function(){
        for(x=1; x<SpellBook.CurrentList.length; x++){
            if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Summoner') && !SpellBook.Archetypes.includes('Summoner')){
                SpellBook.AddSummoner();
            }
            if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Ranger') && !SpellBook.Archetypes.includes('Ranger')){
                SpellBook.AddRanger()
        }
        
        
        
        }
        
        
    },
    
    
    /////////////////////////////// Summoner
    AddSummoner: function(ev){
        let CanSummon = true;
        for(x=1; x<SpellBook.CurrentList.length; x++){
            let inquestion = abilities[SpellBook.CurrentList[x].Spell[0]]
            if(inquestion.type == 2 && inquestion.range > 2 ){
                CanSummon = false;
            }
            if(inquestion.name.includes('Equipment') && SpellBook.CurrentList[x].level > 2){
                CanSummon = false;
            }
        }
        
        if(CanSummon){
        for(x=1; x<SpellBook.CurrentList.length; x++){
            if(abilities[SpellBook.CurrentList[x].Spell[0]].type == 1){
                SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1])*2;
            }
        }
        document.querySelectorAll('#AbilityItem').forEach((Spell)=>{
            let AbilityLevel = Spell.getAttribute('level');
            let SpellInQuestion = Spell.getAttribute('info').split(',');
            let SpellName = abilities[SpellInQuestion[0]].name;
            let SpellType = abilities[SpellInQuestion[0]].type;
            if(SpellType == 1){
                SpellInQuestion[1] = (SpellInQuestion[1] * 2);
                Spell.setAttribute('info', SpellInQuestion);
            }else if((SpellName.includes('Equipment') && AbilityLevel > 2 )){
                Spell.classList.add('disabled');
            }else if((SpellType == 2 && abilities[SpellInQuestion[0]].range > 2)){
                Spell.classList.add('disabled');
            }
            
            Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
        })
        SpellBook.Archetypes.push('Summoner');
        }
        else{ alert('No can do buckaroo');}
        
    },
    
    RemoveSummoner: function(ev){
        for(x=1; x<SpellBook.CurrentList.length; x++){
            if(abilities[SpellBook.CurrentList[x].Spell[0]].type == 1){
                SpellBook.CurrentList[x].Spell[1] = (SpellBook.CurrentList[x].Spell[1])/2;
            }
        }
        document.querySelectorAll('#AbilityItem').forEach((Spell)=>{
            let AbilityLevel = Spell.getAttribute('level');
            let SpellInQuestion = Spell.getAttribute('info').split(',');
            let SpellName = abilities[SpellInQuestion[0]].name;
            let SpellType = abilities[SpellInQuestion[0]].type;
            if(SpellType == 1){
                SpellInQuestion[1] = (SpellInQuestion[1] / 2);
                Spell.setAttribute('info', SpellInQuestion);
            }else if((SpellName.includes('Equipment') && AbilityLevel > 2 )){
                Spell.classList.remove('disabled');
            }else if((SpellType == 2 && abilities[SpellInQuestion[0]].range > 2)){
                Spell.classList.remove('disabled');
            }
            
            Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
        })
        for(i = SpellBook.Archetypes.length; i >= 0; i--){
            if(SpellBook.Archetypes[i] == 'Summoner'){
                SpellBook.Archetypes.splice(i, 1);
            }
        }
        
        
    },
    
    
    
    //////////////////////////Ranger
    AddRanger: function(ev){
        for(x=1; x<SpellBook.CurrentList.length; x++){
            if(abilities[SpellBook.CurrentList[x].Spell[0]].type == 1){
                
                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] += SpellBook.CurrentList[x].cost;
                
                SpellBook.CurrentList[x].Spell[4] = (SpellBook.CurrentList[x].Spell[4])*2;
                SpellBook.CurrentList[x].cost = (SpellBook.CurrentList[x].cost)*2;
            }
            if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Equipment')){
                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] -= SpellBook.CurrentList[x].cost;
                SpellBook.CurrentList[x].Spell[4] = 0;
                SpellBook.CurrentList[x].cost = 0;
                
            }
        }
        document.querySelectorAll('#AbilityItem').forEach((Spell)=>{
            let AbilityLevel = Spell.getAttribute('level');
            let SpellInQuestion = Spell.getAttribute('info').split(',');
            let SpellName = abilities[SpellInQuestion[0]].name;
            let SpellType = abilities[SpellInQuestion[0]].type;
            if(SpellType == 1){
                SpellInQuestion[4] = (SpellInQuestion[4] * 2);
                Spell.setAttribute('info', SpellInQuestion);
            }else if((SpellName.includes('Equipment'))){
                SpellInQuestion[4] = 0;
            }
            Spell.setAttribute('info', SpellInQuestion);
            Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
        })
                SpellBook.Archetypes.push('Ranger');},
    
    RemoveRanger: function(ev){
        for(x=1; x<SpellBook.CurrentList.length; x++){
            if(abilities[SpellBook.CurrentList[x].Spell[0]].type == 1){
                
                SpellBook.SpellPoints[SpellBook.CurrentList[x].level] -= SpellBook.CurrentList[x].cost;
                
                SpellBook.CurrentList[x].Spell[4] = (SpellBook.CurrentList[x].Spell[4])/2;
                SpellBook.CurrentList[x].cost = (SpellBook.CurrentList[x].cost)/2;
            }
            if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Short')){
                SpellBook.SpellPoints[0] -= (SpellBook.CurrentList[x].Purchased)*2;
                SpellBook.CurrentList[x].Spell[4] = 2;
                SpellBook.CurrentList[x].cost =(SpellBook.CurrentList[x].Purchased)*2;
             } else if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Shield')){
                SpellBook.SpellPoints[1] -= 4;
                SpellBook.CurrentList[x].Spell[4] = 4;
                SpellBook.CurrentList[x].cost = 4;
             } else if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Long')){
                SpellBook.SpellPoints[3] -= 4;
                SpellBook.CurrentList[x].Spell[4] = 4;
                SpellBook.CurrentList[x].cost = 4;
             }else if(abilities[SpellBook.CurrentList[x].Spell[0]].name.includes('Great')){
                SpellBook.SpellPoints[4] -= 5;
                SpellBook.CurrentList[x].Spell[4] = 5;
                SpellBook.CurrentList[x].cost = 5;
             }
            
            
            
        }
        document.querySelectorAll('#AbilityItem').forEach((Spell)=>{
            let AbilityLevel = Spell.getAttribute('level');
            let SpellInQuestion = Spell.getAttribute('info').split(',');
            let SpellName = abilities[SpellInQuestion[0]].name;
            let SpellType = abilities[SpellInQuestion[0]].type;
            if(SpellType == 1){
                SpellInQuestion[4] = (SpellInQuestion[4] / 2);
                Spell.setAttribute('info', SpellInQuestion);
            }else if(SpellName.includes('Weapon, Short')){
                SpellInQuestion[4] = 2;
            }else if(SpellName.includes('Shield')){
                SpellInQuestion[4] = 4;
            }else if(SpellName.includes('Weapon, Long')){
                SpellInQuestion[4] = 4;
            }else if(SpellName.includes('Weapon, Great')){
                SpellInQuestion[4] = 5;
            }
            
            Spell.setAttribute('info', SpellInQuestion);
            Spell.innerHTML = `<tr><td>${abilities[SpellInQuestion[0]].name}</td><td>${SpellInQuestion[4]}</td><td>${SpellInQuestion[3]}</td><td>${SpellInQuestion[1]}${SpellInQuestion[2]}</td></tr>`;
        })
                SpellBook.Archetypes.push('Ranger');},
    
    
    
}
