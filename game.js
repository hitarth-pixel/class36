class Game {
            constructor(){




            }
            getState(){
                var gameStateRef=database.ref ('gameState');
                gameStateRef.on("value",function(data){
                                gameState=data.val();
                })
            }
            update(state){
                database.ref('/').update({
                    gameState:state
                })
            }
            async start(){ 
                if(gameState === 0){
                     player = new Player(); 
                     var playerCountRef = await database.ref('playerCount').once("value");
                     if(playerCountRef.exists())
                      {
                        playerCount = playerCountRef.val();
                         player.getCount();
                     }
                        Form1 = new Form()
                        Form1.display();
                     } 
                    }

            play(){
                Form1.hide();
                textSize(30);
                fill ("red");

                text ("GAME START",120,100)
                Player.getPlayerInfo()

                if(allPlayers!=undefined){
                            var displayPos=130;
                            for(var plr in allPlayers){
                                 if (plr === "player" + player.index)
                                  fill("red") 
                                  else 
                                  fill("black");

                            displayPos+=80;
                            textSize(50);
                            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,displayPos)


                }
            }
            if(keyIsDown(UP_ARROW) && player.index !== null){ 
                player.distance +=50;
                 player.update();


            }
        }
    }
