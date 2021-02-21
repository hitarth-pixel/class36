class Form {
        constructor(){
            this.input=createInput("name");
            this.button=createButton('play');
            this.greeting=createElement('h2');
        }

        hide(){
            this.greeting.hide();
            this.button.hide();
            this.input.hide();
        }

        display(){
                    var title=createElement('h1');
                    title.html("CAR RACING GAME");
                    title.position(400,0);

                   this.input.position(400,160);

                   
                    this.button.position(400,200);

                     
                    this.button.mousePressed(()=>{
                        this.input.hide();
                        this.button.hide();

                        player.name=this.input.value();
                        playerCount+=1;
                        player.index=playerCount ;
                        player.update();
                        player.updateCount(playerCount);

                        this.greeting.html("hello " +player.name  );
                        this.greeting.position(400,160)
                    })


        }
}