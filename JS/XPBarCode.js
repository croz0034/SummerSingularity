let XPBarCode = {
    update: function(Credits){
        
        setTimeout(()=>{
        let levels = [[0, 0],[0, 5],[5,12],[12,21],[21,34],[34,53],[53, 999]];
        
if(document.querySelector(".Maxed")){
document.querySelector(".Maxed").classList.remove("Maxed");}
levels.forEach((level)=>{
        if(Credits > level[0] && Credits <= level[1]){
document.querySelector("#XP").getSVGDocument().getElementById("Progress").setAttribute("width", (1000 * ((Credits - level[0])/(level[1] - level[0]))));
}
} )
if(Credits > 53){
document.querySelector("#XP").getSVGDocument().getElementById("Progress").setAttribute("width", 1000);
document.querySelector("#XP").getSVGDocument().getElementById("Progress").classList.add("Maxed");
}}, 50)

    }
    
}