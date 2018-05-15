  Choose: function (ev) {
        let clearout = function(){ document.getElementById('SpellList').classList.add('hidden');
        document.getElementById("More").removeEventListener('click', price); document.getElementById("Less").removeEventListener('click', price);
     document.getElementById("Ok").removeEventListener('click', clearout2);
     document.getElementById("Cancel").removeEventListener('click', clearout);
    };
        
        document.getElementById("SpellList").classList.remove("hidden");
        let info = ev.target.parentElement.getAttribute('info').split([","]);
        let level = ev.target.parentElement.getAttribute('level');
        let name = abilities[info[0]].name;
        let cost = info[4];
        let max = info[3];
        let availablePoints = 0;
        let total = 0;
        
                if (Tryeltech.SpellLists.length > 0){
            let additions = document.getElementById('TestingBed');
            additions.innerHTML = `<tr> <th> Purchased </th><th> Name </th><th>cost</th></tr>`;
                    
            Tryeltech.SpellLists.forEach(function(spell){
        additions.innerHTML += `<tr id="Purchased" info="${spell.Spell}"><td>${spell.Purchased}</td><td>${abilities[spell.Spell[0]].name}</td><td>${spell.cost}</td></tr>`
//            
                console.log(spell);
            })
            
        document.querySelectorAll("#Purchased").forEach((Element) => {
            Element.addEventListener('click', clearout);
            Element.addEventListener('click', Tryeltech.Choose);
            Element.addEventListener('click', ()=>{ 
                try {
            let removal = document.querySelector('.active');
            removal.classList.remove('active');
        } catch (err) {};
                ev.target.parentElement.classList.add('active');
                
            })
            
        })
                    
                    
        for(i = 0; i < Tryeltech.SpellLists.length; i++){
            if(Tryeltech.SpellLists[i].Spell[0] == info[0]){
                total = Tryeltech.SpellLists[i].Purchased * cost;
            }
            
        }
                }
        

        let clearout2 = function(){
            let price = cost*total
                Tryeltech.SpellPoints[level-1] -= cost*total;
            console.log(Tryeltech.SpellPoints);
            
            let exists = 'no';
                    for(i = 0; i < Tryeltech.SpellLists.length; i++){
            if(Tryeltech.SpellLists[i].Spell[0] == info[0]){
                Tryeltech.SpellLists[i] = {"Spell": info, "Purchased": total, "cost": (total*cost), "level": level};
                exists = 'yes';
            }
            
        }
            if(exists == 'no') {               
        Tryeltech.SpellLists.push({"Spell": info, "Purchased": total, "cost": (total*cost), "level": level});  }
            

        Tryeltech.SpellLists.sort(function compare(a,b) {
  if (a.level < b.level)
    return -1;
  if (a.level > b.level)
    return 1;
});
            console.log(Tryeltech.SpellLists);
            clearout(ev);
        };
        
        
        for(i = 0; i < 6; i++){
            if(Math.sign(Tryeltech.SpellPoints[i]) == "-1"){availablePoints += Tryeltech.SpellPoints[i];}
            else if(i >= (level-1)){availablePoints += Tryeltech.SpellPoints[i];}}
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