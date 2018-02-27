function PlayLevels(){

instructionVideo: function() {

    this.pressText = new PIXI.Text("അമർത്താം ", {
        font: "bold 30px Chilanka",
        fill: "orange"
    });

    this.instructionText10 = new PIXI.Text("താഴെയുള്ള രണ്ട് വൃത്തങ്ങളിലെ ചിത്രങ്ങൾ ശ്രദ്ധിക്കൂ..", {
        font: "bold 30px Chilanka",
        fill: "orange"
    });

    this.instructionText11 = new PIXI.Text("അവ ഒരേ ദിശയിലാണെങ്കിൽ ശരി", {
        font: "bold 30px Chilanka",
        fill: "orange"
    });

    this.instructionText20 = new PIXI.Text("അവ വ്യത്യസ്ത ദിശയിലാണെങ്കിൽ തെറ്റ്", {
        font: "bold 30px Chilanka",
        fill: "orange"
    });

    this.instructionText21 = new PIXI.Text("ചിത്രങ്ങൾ വ്യത്യസ്ത ദിശയിലും ക്രമീകരണത്തിലും ആണെങ്കിലും", {
        font: "bold 30px Chilanka",
        fill: "orange"
    });

    this.InstructionBgSprite.position.set(this.marginLeft, this.marginTop);

    this.instructionCtr.addChild(this.InstructionBgSprite);

    app.stage.addChild(this.instructionCtr);

    this.pigInitialPosition();
    this.playArea();
    this.displayPlayArea();
    this.dispalyPigs();

    parent = this;
    firstInstruction11();
    displayfirstInstruction11();


    function firstInstruction11() {

          tickTexture = PIXI.Texture.fromImage('images/tick.png');
          tickPic = new PIXI.Sprite(tickTexture);
          tickPic.anchor.set(.5, .5);
          tickPic.position.set(parent.marginLeft + 250, parent.marginTop + 105);
          tickPic.scale.set(.4, .4);
          crossTexture = PIXI.Texture.fromImage('images/cross.png');
          crossPic = new PIXI.Sprite(crossTexture);
          crossPic.anchor.set(.5, .5);
          crossPic.position.set(parent.marginLeft + 250, parent.marginTop + 105);
          crossPic.scale.set(.4, .4);
          parent.pressText.visible = false;
          tickPic.visible = false;

          parent.pressText.anchor.set(.5, .5);
          parent.pressText.position.set(parent.marginLeft + 400, parent.marginTop + 100);

          parent.instructionText10.anchor.set(.5, .5);
          parent.instructionText10.position.set(parent.marginLeft + 400, parent.marginTop + 60);
          parent.instructionText11.anchor.set(.5, .5);
          parent.instructionText11.position.set(parent.marginLeft + 400, parent.marginTop + 60);
          // parent.handPointerSprite.position.set(parent.marginLeft + 400, parent.marginTop + 160);
          parent.pig_lSprite.position.set( 473, 260);
          parent.pig_lSprite.scale.set(-.7, .7);
          parent.pig_rSprite.position.set( 633, 260);
          parent.pig_rSprite.scale.set(.7, .7);
          parent.PlayAreaCtr.scale.set(.6, .6);
          parent.PlayAreaCtr.position.set(310, 150);

          parent.instructionText10.visible = true;
          parent.instructionText11.visible = false;

        parent.pig_lSprite.rotation = 1.5;
        parent.pig_rSprite.rotation = .5;

        setTimeout(function() {
            parent.SpriteRotationBack(parent.pig_lSprite, parent.pig_rSprite)
        }, 4000);
        setTimeout(instructionToDo
      , 5000);

        function instructionToDo(){

        parent.pressText.visible = true;
        tickPic.visible = true;
        parent.instructionText10.visible = false;
        parent.instructionText11.visible = true;
        }

    }

    function displayfirstInstruction11() {

        parent.instructionCtr.addChild(tickPic);
        parent.instructionCtr.addChild(parent.instructionText10);
        parent.instructionCtr.addChild(parent.pressText);
        parent.instructionCtr.addChild(parent.instructionText11);

    }

    setTimeout(secondInstruction20, 9000);


    function secondInstruction20() {

        parent.pig_lSprite.rotation = 1.5;
        parent.pig_rSprite.rotation = .5;

        parent.instructionText11.visible = false;
        tickPic.visible = false;
        parent.pig_lSprite.scale.set(.7, .7);
        parent.instructionText20.anchor.set(.5, .5);
        parent.instructionText20.position.set(parent.marginLeft + 400, parent.marginTop + 60);
        parent.instructionCtr.addChild(parent.instructionText20);
        parent.instructionCtr.addChild(crossPic);

        setTimeout(function() {
            parent.SpriteRotationBack(parent.pig_lSprite, parent.pig_rSprite)
        }, 4000);

    }

    setTimeout(invisibleTheCtnr, 16000);

    function invisibleTheCtnr() {

        parent.instructionCtr.visible = false;
        parent.playArea();
        parent.displayPlayArea();
        parent.pigInitialPosition();
        parent.calculation();
        parent.pigChangedPosition();

    }

},

//Start to play , In future it may changed as class

playArea: function() {

    // this.playAreaSprite.position.set(this.marginLeft, this.marginTop);
    this.playAreaSprite.scale.set(1, 1);
    this.tickSprite.scale.set(.6, .6);
    this.tickSprite.position.set(315, 285);
    this.crossSprite.scale.set(.6, .6);
    this.crossSprite.position.set(415, 285);
    this.PlayAreaCtr.scale.set(1, 1);
    this.PlayAreaCtr.position.set(this.marginLeft, this.marginTop);

},

displayPlayArea: function() {

    this.PlayAreaCtr.addChild(this.playAreaSprite);
    this.PlayAreaCtr.addChild(this.tickSprite);
    this.PlayAreaCtr.addChild(this.crossSprite);
    app.stage.addChild(this.PlayAreaCtr);

},

calculation: function() {

    var f = this.stagesNum * 0.5;
    var r1 = f * 0.5;
    var r2 = r1 + f * .25;
    var nfV = 1,
        fV = -1;
    var i, j;
    this.myarray = [this.stagesNum];
    var radian = (90 / r1) * (3.14 / 180);
    var radian1 = (270 / r2) * (3.14 / 180);

    for (i = 0; i < this.stagesNum; i++) {

        this.myarray[i] = [this.stagesNum];
    }

    for (i = 0; i < this.stagesNum; i++) {
        for (j = 0; j < 2; j++) {
            //first column
            //For first half

            if ((j == 0) && (i < f)) {

                this.myarray[i][j] = fV;

            }
            //For second half

            if ((j == 0) && (i >= f)) {

                this.myarray[i][j] = nfV;

            }

            //second column
            if ((j == 1) && (i < f)) {

                if (i < r1) //rotation 0 to 90 degree

                {
                    this.myarray[i][j] = i * radian;
                    this.myarray[i + f][j] = i * radian; //For second half

                } else if ((i >= r1) && (i < r2)) //rotation 90 to 225 degree
                {
                    this.myarray[i][j] = i * radian1;
                    this.myarray[i + f][j] = i * radian1; //For second half

                } else if (i >= r2) //rotation 225 to 360 degree
                {
                    this.myarray[i][j] = i * radian1;
                    this.myarray[i + f][j] = i * radian1; //For second half

                }

            }
        }

    }

},

pigInitialPosition: function() {

    this.pig_lSprite.x = this.marginLeft + 270;
    this.pig_lSprite.y = this.marginTop + 190;

    this.pig_rSprite.x = this.marginLeft + 540;
    this.pig_rSprite.y = this.marginTop + 190;

    this.pig_lSprite.scale.set(1, 1);
    this.pig_rSprite.scale.set(1, 1);
    this.pig_lSprite.rotation = 0;
    this.pig_rSprite.rotation = 0;
    this.pig_rSprite.anchor.set(0.5, 0.5);
    this.pig_lSprite.anchor.set(0.5, 0.5);

},

pigChangedPosition: function() {

    this.pigInitialPosition()

    var num = Math.floor((Math.random() * 3) + 1);
    var lev = Math.floor((Math.random() * this.stagesNum - 1) + 1);
    var flip = this.myarray[lev][0];
    var rotation = this.myarray[lev][1];

    if (num == 1) {

        this.pig_lSprite.scale.x = flip;
        this.pig_lSprite.rotation = rotation;

    } else if (num == 2) {

        this.pig_rSprite.scale.x = flip;
        this.pig_rSprite.rotation = rotation;

    } else if (num == 3) {

        this.pig_lSprite.scale.x = flip;
        this.pig_lSprite.rotation = rotation;

        this.pig_rSprite.scale.x = flip;
        this.pig_rSprite.rotation = rotation;
    }

    this.dispalyPigs();
    this.initialiseReaction(num, flip);

},

dispalyPigs: function() {
    this.pigCtr.addChild(this.pig_rSprite);
    this.pigCtr.addChild(this.pig_lSprite);
    this.PlayAreaCtr.addChild(this.pigCtr);
    app.stage.addChild(this.pigCtr);
},


initialiseReaction: function(num, flip) {

    this.tickSprite.interactive = true;
    this.tickSprite.buttonMode = true;
    this.tickSprite.accessible = true;

    this.crossSprite.interactive = true;
    this.crossSprite.buttonMode = true;
    this.crossSprite.accessible = true;

    parent = this;
    this.tickSprite.click = function() {

        if (num == 3) {

            parent.sad(1);

        } else {
            if (flip == 1) {

                parent.sad(1);

            }

            if (flip == -1) {

                parent.happy(1);
            }

        }

    }

    this.crossSprite.click = function() {


        if (num == 3) {
            parent.happy(1);

        } else {

            if (flip == -1) {

                parent.sad(1);

            }

            if (flip == 1) {

                parent.happy(1);
            }

        }
    }


},


insructionVideoLevel2: function(){

instructionCtr = new PIXI.Container();


instructionText = new PIXI.Text("താഴെയുള്ള നാല് വൃത്തങ്ങളിലെ ചിത്രങ്ങൾ ശ്രദ്ധിക്കൂ..", {
    font: "bold 30px Chilanka",
    fill: "orange"
});

instructionText1 = new PIXI.Text("അവയിലെ സമാന ചിത്രങ്ങളിൽ അമർത്തുക", {
    font: "bold 30px Chilanka",
    fill: "orange"
});
instructionText1.alpha = 0;

setTimeout(next , 4000)
function next(){

  instructionText1.alpha = 1;
  instructionText.alpha = 0;

}

this.InstructionBgSprite.position.set(this.marginLeft , this.marginTop);
instructionText.anchor.set(.5,.5);
instructionText1.anchor.set(.5,.5);
instructionText.position.set(this.marginLeft+400, this.marginTop+50);
instructionText1.position.set(this.marginLeft+400, this.marginTop+50);
instructionCtr.addChild(this.InstructionBgSprite);
instructionCtr.addChild(instructionText);
instructionCtr.addChild(instructionText1);
app.stage.addChild(instructionCtr);
this.playArea2(1);
this.PlayArea2Ctr.scale.set(.6,.6);
this.PlayArea2Ctr.position.set(this.marginLeft+100, this.marginTop+100);
parent = this;
setTimeout(invisibleTheCtnr, 12000);

function invisibleTheCtnr() {

    instructionCtr.visible = false;
    parent.calcAndDisplay();

}
},

playArea2: function(l) {

    PlaySpriteCtr = new PIXI.Container();
    PlaySpriteCtr.visible = false;
    this.calculation();

    var select = Math.floor(Math.random() * 5);
    alert(select)

    this.spriteArray = [];
    this.spriteArray[0] = new PIXI.Sprite(this.playSprite1[select]);
    this.spriteArray[2] = new PIXI.Sprite(this.playSprite1[select]);

    if(select==4){
    this.spriteArray[4] = new PIXI.Sprite(this.playSprite1[2]);
    this.spriteArray[3] = new PIXI.Sprite(this.playSprite1[3]);
    this.spriteArray[1] = new PIXI.Sprite(this.playSprite1[3]);
    }

    if((select!=4)&&(select!=0)) {
    this.spriteArray[4] = new PIXI.Sprite(this.playSprite1[select-1]);
    this.spriteArray[3] = new PIXI.Sprite(this.playSprite1[select+1]);
    this.spriteArray[1] = new PIXI.Sprite(this.playSprite1[select+1]);
    }
    if(select==0) {
    this.spriteArray[4] = new PIXI.Sprite(this.playSprite1[select+1]);
    this.spriteArray[3] = new PIXI.Sprite(this.playSprite1[select+2]);
    this.spriteArray[1] = new PIXI.Sprite(this.playSprite1[select+2]);
    }
    this.level2BaseSprite.position.set(this.marginLeft, this.marginTop);
    this.calcAndDisplay(l);
},

calcAndDisplay: function(l) {

    PlaySpriteCtr.visible = true;

    this.PlayArea2Ctr.position.set(0, 0);

    this.PlayArea2Ctr.scale.set(1,1)

    this.PlayArea2Ctr.addChild(this.level2BaseSprite);

    parent = this;
    var firstTile = null;
    // second tile picked up by the player
    var secondTile = null;
    // can the player pick up a tile?
    var canPick = true;
    var N = 5;
    var X = [330, 470, 260, 400,540];
    var Y = [180, 180, 310, 310,310];
    for (i = 0; i < 5; i++) {
        // for (j = 0; j < 2; j++) {
            // new sprite
            var tile = this.spriteArray[i];
            yellowCircle = new PIXI.Sprite(PIXI.Texture.fromImage('images/stage2/orangeCircle.png'));
            tile.alpha = 1
            // buttonmode = acts like a button
            if(l==1){
              tile.buttonMode = false;
              tile.interactive = false;
              pare = this;
              setTimeout(function() {
                pare.SpriteRotationBack(pare.spriteArray[0],pare.spriteArray[1]);
              },8000);
              setTimeout(function() {
                pare.SpriteRotationBack(pare.spriteArray[2],pare.spriteArray[3]);
              },9000);
            }
            else{
            tile.buttonMode = true;
            tile.interactive = true;
             }
            // is the tile selected?
            tile.isSelected = false;
            // set a tile value
            // alert(this.spriteArray.length)
            if(i<this.spriteArray.length-1)
            tile.theVal = i%2;
            else {
            tile.theVal = i;
            }

            var num = Math.floor((Math.random() * 3) + 1);
            var lev = Math.floor((Math.random() * this.stagesNum - 1) + 1);
            var flip = this.myarray[lev][0];
            var rotation = this.myarray[lev][1];

            var pos = Math.floor(Math.random() * N);
            tile.anchor.set(.5, .5);
            yellowCircle.anchor.set(.5, .5);
            // tile.scale.x = flip;
            tile.rotation = rotation;
            tile.position.set(this.marginLeft + X[pos], this.marginTop + Y[pos]);
            yellowCircle.position.set(this.marginLeft + X[pos], this.marginTop + Y[pos]);
            // alert(X[pos],Y[pos])
            PlaySpriteCtr.addChild(yellowCircle);
            PlaySpriteCtr.addChild(tile);
            this.PlayArea2Ctr.addChild(PlaySpriteCtr);
            // mouse-touch listener
            counter = 0;
            tile.mousedown = tile.touchstart = function(data) {
                // can I pick a tile?
                if (canPick) {
                    // is the tile already selected?
                    if (!this.isSelected) {

                        // set the tile to selected
                        this.isSelected = true;

                        // is it the first tile we uncover?
                        if (firstTile == null) {
                            firstTile = this
                        }
                        // this is the second tile
                        else {
                            secondTile = this
                            // can't pick anymore
                            canPick = false;
                            // did we pick the same tiles?

                            if (firstTile.theVal == secondTile.theVal) {
                                // wait a second then remove the tiles and make the player able to pick again
                                setTimeout(function() {

                                    parent.SpriteRotationBack(firstTile, secondTile);
                                    firstTile = null;
                                    secondTile = null;
                                    canPick = true;

                                    if (counter == 1) {
                                        setTimeout(function() {
                                            parent.happy(2)

                                        }, 1500);

                                    }
                                    counter += 1;
                                }, 500);
                            }
                            // we picked different tiles
                            else {
                                // wait a second then cover the tiles and make the player able to pick again
                                setTimeout(function() {

                                    firstTile.isSelected = false
                                    secondTile.isSelected = false
                                    // parent.sad(2);
                                    firstTile = null;
                                    secondTile = null;
                                    canPick = true
                                }, 1000);
                            }
                        }
                    }
                }
            }

            X.splice(pos, 1);
            Y.splice(pos, 1);
            N = N - 1;
        // }
    }

    app.stage.addChild(this.PlayArea2Ctr);

}
};
