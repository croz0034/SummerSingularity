let LevelRig ={
    
    Parks: [],
    PlayerNames: [], 
    XP: [],
    Park:[],
    
    Parklist: function(){
           jsork.kingdom.getParks(31, (data)=>{data.forEach((park)=>{ LevelRig.Parks.push([park.ParkId, park.Name]); 
            document.getElementById('Parks').innerHTML += `<option value="${park.ParkId}">${park.Name}</option>`;})});
       },
     PlayerList: function(){
           let selectedPark = document.getElementById('Parks').value;
         LevelRig.Park = selectedPark;
            jsork.park.getPlayers(selectedPark, 0, function (data) {
                data.forEach((Player) => {
                        LevelRig.PlayerNames.push({
                            "Name": Player.Persona,
                            "ID": Player.MundaneId
                        });
                    
                }); 
               let NameBox = document.getElementById('CharName');
                NameBox.style.backgroundColor = "white";
                NameBox.value = "";
                NameBox.removeAttribute('readonly');
        document.getElementById('CharName').addEventListener('change', LevelRig.Authenticate)
            
        })
     },
    
    
    
    Authenticate: function(){  document.getElementById('LoginGo').removeEventListener('click', LevelRig.Retrieve);
            LevelRig.PlayerNames.forEach((playername)=>{
                if(document.getElementById('CharName').value == playername.Name){ document.getElementById('LoginGo').style.backgroundColor = "green"; document.getElementById('LoginGo').addEventListener('click', LevelRig.Retrieve)
                }
            })
    },
    
    Retrieve: function(ev){
        ev.preventDefault();
        let Player = document.getElementById('CharName').value;
        let Yolo = document.getElementById('CharName').value;
        LevelRig.PlayerNames.forEach((player)=>{
            if(Player == player.Name){ Player = player.ID}
        }
                                    )
        
        jsork.player.getClasses(Player, function(data){
            data.forEach((clas)=>{
                LevelRig.XP.push(clas);
            })
            let playerData = JSON.stringify({"PlayerName": Yolo, "Park": LevelRig.Park, "ClassCredits": LevelRig.XP});
        localStorage.setItem("Player", playerData);
        });
        Tryeltech.Next();
    },
     XPActivate: function(){
        LevelRig.XP.forEach((clas)=>{
            if(clas.class == Tryeltech.ChosenClass.Name){
                XPBarCode.update(clas.credits);
            }
        })
         
     },
    
        init: function(){
            LevelRig.Parklist();
    document.querySelector('#Parks').addEventListener('change', LevelRig.PlayerList);
            
            
            try{
                let Playerinfo = JSON.parse(localStorage.getItem('Player'));
                document.getElementById('Parks').value = Playerinfo.Park;
                document.getElementById('CharName').value = Playerinfo.PlayerName;
                LevelRig.XP = Playerinfo.ClassCredits;
                console.log(Playerinfo);
                console.log('Retrieved!')
            }
            catch(err){
                console.log('no set class')
            }
}

}

