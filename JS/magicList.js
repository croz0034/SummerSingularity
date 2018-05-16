let SpellBook = {
        SpellLists: [],
        ListKey: ['end'],
        CurrentList: ['Spellpoints'],
        CurrentSpell: [''],
        CurrentTotal: 0,
        CurrentLevel: 0,
        CurrentClass: "",
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
            
            
            
        },
    /////////////////////////// List Populate
        Activate: function (ev) {
            
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
        additions.innerHTML += `<tr info="${SpellBook.CurrentList[i].Spell}" id="SelectedSpells"><td>${SpellBook.CurrentList[i].Purchased}</td><td>${abilities[SpellBook.CurrentList[i].Spell[0]].name}</td><td>${SpellBook.CurrentList[i].cost}</td></tr>` ;
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
            
            
            
},
    Load: function(ev){
        
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
                }
            
            
            
        }
        else{
            if(SpellBook.CurrentTotal > 0){
        SpellBook.CurrentList.push({"Spell": SpellBook.CurrentSpell, "Purchased": SpellBook.CurrentTotal, "cost": (SpellBook.CurrentTotal * SpellBook.CurrentSpell[4]), "level": SpellBook.CurrentLevel});}
        }
        SpellBook.Clear();
        
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
        
        ev.target.classList.add('active');
        
        SpellBook.CurrentList.forEach((spell)=>{
            if(spell.Spell[0] == SpellBook.CurrentSpell[0]){
                SpellBook.CurrentTotal = spell.Purchased;
                return;
            }
        })
    
    
        document.getElementById('selectedSpellCost').textContent = SpellBook.CurrentSpell[4];
        document.getElementById('selectedSpellName').textContent = abilities[SpellBook.CurrentSpell[0]].name;
        document.getElementById('selectedSpellMax').textContent = SpellBook.CurrentSpell[3];
        document.getElementById('selectedSpellUses').textContent = SpellBook.CurrentSpell[1] + "/" + SpellBook.CurrentSpell[2][1];
        
        document.getElementById('Amount').textContent = `${SpellBook.CurrentTotal} / ${SpellBook.CurrentSpell[3]}`;
    
    }
    
    
    
}
