function Game() {

    this.friendInroCntr = new PIXI.Container();
    this.PlayAreaCtr = new PIXI.Container();
    this.pigCtr = new PIXI.Container();
    this.levelsStageCtr = new PIXI.Container();
    this.reactionCtr = new PIXI.Container();
    this.gameOverCtr = new PIXI.Container();
    this.instructionCtr = new PIXI.Container();
    this.friendCntr = new PIXI.Container();
    this.graphics = new PIXI.Graphics();

    this.myarray = [];
    this.stagesNum = 20;

    this.pBWidth = 50;
    this.pBcurrentW = 0;

    this.availableFriends = [];
    this.windowWidth = window.innerWidth;
    this.marginLeft = (window.innerWidth - 800) / 2;
    this.marginTop = (window.innerHeight - 500) / 2;

    this.heading = new PIXI.Text("ആരാണ് നിന്റെ ചങ്ങാതി?", {

        fill: "orange",
        font: "bold 56px Chilanka",
    });
    this.heading.width = 600;

    this.bg = PIXI.Texture.fromImage('images/0.png');
    this.background = new PIXI.Sprite(this.bg);

    this.textureBg = PIXI.Texture.fromImage('images/background.png');
    this.background1 = new PIXI.Sprite(this.textureBg);

    this.textureArrow1 = PIXI.Texture.fromImage('images/arrow1.png');
    this.orangeArrow = new PIXI.Sprite(this.textureArrow1);

    this.texturebox = PIXI.Texture.fromImage('images/dialogue.png');
    this.dialogueBox = new PIXI.Sprite(this.texturebox);

    this.dialogueText = new PIXI.Text("കളി തുടങ്ങാം!", {
        fontFamily: "Chilanka",
        fontSize: 26,
        fill: "white"
    });

    this.textureArrow = PIXI.Texture.fromImage('images/arrow.png');
    this.yellowArrow = new PIXI.Sprite(this.textureArrow);

    this.textureLevelsBg = PIXI.Texture.fromImage('images/levels.png');
    this.levelsBg = new PIXI.Sprite(this.textureLevelsBg);


    this.texturePig = PIXI.Texture.fromImage('images/pig.png');
    this.pigSprite = new PIXI.Sprite(this.texturePig);


    this.texturePointer = PIXI.Texture.fromImage('images/pointing_hand.png');
    this.handPointerSprite = new PIXI.Sprite(this.texturePointer);

    this.textureInstructionBg = PIXI.Texture.fromImage('images/stage1/instructionBg.png');
    this.InstructionBgSprite = new PIXI.Sprite(this.textureInstructionBg);

    this.texturePicBase = PIXI.Texture.fromImage('images/stage1/picBase.png');
    this.picBaseSprite = new PIXI.Sprite(this.texturePicBase);


    this.texturePlayArea = PIXI.Texture.fromImage('images/bg.png');
    this.playAreaSprite = new PIXI.Sprite(this.texturePlayArea);
    this.textureTick = PIXI.Texture.fromImage('images/tick.png');
    this.tickSprite = new PIXI.Sprite(this.textureTick);
    this.textureCross = PIXI.Texture.fromImage('images/cross.png');
    this.crossSprite = new PIXI.Sprite(this.textureCross);

    this.texturePig_l = PIXI.Texture.fromImage('images/stage1/pig_l.png');
    this.pig_lSprite = new PIXI.Sprite(this.texturePig_l);
    this.texturePig_r = PIXI.Texture.fromImage('images/stage1/pig_r.png');
    this.pig_rSprite = new PIXI.Sprite(this.texturePig_r);


    this.textureBen10Happy = PIXI.Texture.fromImage('images/1_happy.png');
    this.Ben10HappySprite = new PIXI.Sprite(this.textureBen10Happy);
    this.textureBen10Sad = PIXI.Texture.fromImage('images/1_sad.png');
    this.Ben10SadSprite = new PIXI.Sprite(this.textureBen10Sad);

    this.textureDoraHappy = PIXI.Texture.fromImage('images/2_happy.png');
    this.DoraHappySprite = new PIXI.Sprite(this.textureDoraHappy);
    this.textureDoraSad = PIXI.Texture.fromImage('images/2_sad.png');
    this.DoraSadSprite = new PIXI.Sprite(this.textureDoraSad);

    this.textureMickiHappy = PIXI.Texture.fromImage('images/3_happy.png');
    this.MickiHappySprite = new PIXI.Sprite(this.textureMickiHappy);
    this.textureMickiSad = PIXI.Texture.fromImage('images/3_sad.png');
    this.MickiSadSprite = new PIXI.Sprite(this.textureMickiSad);

    this.textureChottaHappy = PIXI.Texture.fromImage('images/4_happy.png');
    this.ChottaHappySprite = new PIXI.Sprite(this.textureChottaHappy);
    this.textureChottaSad = PIXI.Texture.fromImage('images/4_sad.png');
    this.ChottaSadSprite = new PIXI.Sprite(this.textureChottaSad);

    this.textureTomHappy = PIXI.Texture.fromImage('images/5_happy.png');
    this.TomHappySprite = new PIXI.Sprite(this.textureTomHappy);
    this.textureTomSad = PIXI.Texture.fromImage('images/5_sad.png');
    this.TomSadSprite = new PIXI.Sprite(this.textureTomSad);

    this.textureTomGameOver = PIXI.Texture.fromImage('images/gameOver_tom.png');
    this.TomGameOverSprite = new PIXI.Sprite(this.textureTomGameOver);
    this.textureBen10GameOver = PIXI.Texture.fromImage('images/gameOver_ben10.png');
    this.Ben10GameOverSprite = new PIXI.Sprite(this.textureBen10GameOver);
    this.textureChottaGameOver = PIXI.Texture.fromImage('images/gameOver_chotta.png');
    this.ChottaGameOverSprite = new PIXI.Sprite(this.textureChottaGameOver);
    this.textureMickiGameOver = PIXI.Texture.fromImage('images/gameOver_micki.png');
    this.MickiGameOverSprite = new PIXI.Sprite(this.textureMickiGameOver);
    this.textureDoraGameOver = PIXI.Texture.fromImage('images/gameOver_dora.png');
    this.DoraGameOverSprite = new PIXI.Sprite(this.textureDoraGameOver);

    this.textureStars = PIXI.Texture.fromImage('images/stars.png');
    this.StarsSprite = new PIXI.Sprite(this.textureStars);

};

Game.prototype = {

    constructor: Game,
    initGameFriends: function(resources) {

        var xPos = this.marginLeft + 50;
        var yPos = this.marginTop + 200;
        this.availableFriendsName = ["", "ബെൻ10", "ഡോറ ", "മിക്കിമൗസ് ", "ചോട്ടാഭീം ", "ടോം "];

        for (var i = 1; i < 6; i++) {
            this.availableFriends[i] = new Friend(resources["images/" + i + ".png"].texture, this.availableFriendsName[i], xPos);
            xPos += 150;
        }

    },

    prepareStage: function(self) {

        self
            .on('pointerover', friendInteraction)
            .on('pointerout', friendInteractionOut)

        function friendInteraction() {

            self.scale.set(.5);
            self.name.scale.set(1.25);
            self.name.position.set(this.marginLeft + 100, this.marginTop + 330);

        }

        function friendInteractionOut() {
            self.scale.set(.5);
            self.name.scale.set(1.25);
            self.name.position.set(this.marginLeft + 100, this.marginTop + 330);

        }

        self.scale.set(.5);
        self.name.scale.set(1.2);
        self.position.set(this.marginLeft - 50, this.marginTop + 200);
        self.name.position.set(this.marginLeft + 50, this.marginTop + 350);
        this.friendInroCntr.position.set(this.marginLeft, this.marginTop);

    },


    interAction: function() {

        this.yellowArrow.position.set(this.marginLeft + 300, this.marginTop + 150);
        this.yellowArrow.interactive = true;
        this.yellowArrow.accessible = true;
        this.yellowArrow.buttonMode = true;

        this.yellowArrow
            .on('pointerover', arrowInteraction)
            .on('pointerout', arrowInteractionOut)

        var parent = this;

        function arrowInteraction() {

            parent.yellowArrow.alpha = 0;
            parent.orangeArrow.visible = true;
            parent.dialogueText.visible = true;
            parent.dialogueBox.visible = true;

            parent.orangeArrow.position.set(parent.marginLeft + 310, parent.marginTop + 150);
            parent.dialogueText.position.set(parent.marginLeft + 40, parent.marginTop + 35);
            parent.dialogueBox.position.set(parent.marginLeft, parent.marginTop);

            display();

        }

        function arrowInteractionOut() {
            parent.yellowArrow.alpha = 1;
            parent.orangeArrow.visible = false;
            parent.dialogueBox.visible = false;
            parent.dialogueText.visible = false;
            parent.yellowArrow.alpha = 1;

        }

        function display() {
            parent.friendInroCntr.addChild(parent.orangeArrow);
            parent.friendInroCntr.addChild(parent.dialogueBox);
            parent.friendInroCntr.addChild(parent.dialogueText);
        }

        this.yellowArrow.click = function() {

            parent.friendInroCntr.visible = false;

            parent.prepareLevelsBackground();

        }

    },

    displayStage: function() {

        this.friendInroCntr.addChild(this.background1);
        this.friendInroCntr.addChild(self);
        this.friendInroCntr.addChild(self.name);
        this.friendInroCntr.addChild(this.yellowArrow);
        app.stage.addChild(this.friendInroCntr);

    },


    prepareLevelsBackground: function(l) {

        this.StarsSprite.visible = false;
        this.levelsBg.position.set(this.marginLeft, this.marginTop);
        this.StarsSprite.position.set(this.marginLeft + 160, this.marginTop + 225);

        if (l == 1) {

            this.StarsSprite.visible = true;
            this.levelsStageCtr.visible = true;
        }

        this.InteractLevelObject();

    },

    InteractLevelObject: function() {


        this.pigSprite.position.set(this.marginLeft + 178, this.marginTop + 175);

        this.pigSprite.interactive = true;
        this.pigSprite.buttonMode = true;
        this.pigSprite.accessible = true;

        this.pigSprite
            .on('pointerover', levelObjInteraction)
            .on('pointerout', levelObjInteractionOut)

        var inside = this;

        function levelObjInteraction() {

            inside.pigSprite.x = inside.marginLeft + 215;
            inside.pigSprite.y = inside.marginTop + 205;
            inside.pigSprite.anchor.x = 0.5;
            inside.pigSprite.anchor.y = 0.5;
            // inside.pigSprite.rotation += 0;

            for(var i=0;i<60;i++)
            {
              inside.pigSprite.rotation += 0.01;
            }

            // inside.levelsStageCtr.ticker.add(function() {
            //
            //
            //     inside.pigSprite.clear();
            //
            //     inside.pigSprite.rotation += 1;
            //
            // });

        }

        function levelObjInteractionOut() {

            for(var i=0;i<60;i++)
            {
              inside.pigSprite.rotation -= 0.01;
            }
            // animate1();
            // function animate1() {
            //         inside.pigSprite.rotation -= .1;
            //         requestAnimationFrame(animate1);
            //     }



        }

        this.pigSprite.click = function() {

            inside.levelsStageCtr.visible = false;

            inside.instructionVideo();
        }
        this.displayLevels();

    },


    instructionVideo: function() {

        this.pressText = new PIXI.Text("ബട്ടൺ അമർത്തുക ", {
            font: "bold 26px Chilanka",
            fill: "orange"
        });

        sW = this.marginLeft + this.marginLeft / 2;

        sH = (this.marginTop) *4;

        this.InstructionBgSprite.position.set(this.marginLeft, this.marginTop);

        parent = this;
        firstInstruction();


        function firstInstruction() {

            this.insrtuction1Ctr = new PIXI.Container();

            tickTexture = PIXI.Texture.fromImage('images/tick.png');
            tickPic = new PIXI.Sprite(tickTexture);

            parent.instructionText1 = new PIXI.Text("വൃത്തത്തിനുള്ളിലെ ചിത്രങ്ങൾ ഒരേ ദിശയിൽ ആണെങ്കിൽ", {
                font: "bold 26px Chilanka",
                fill: "orange"
            });

            parent.pressText.anchor.set(.5, .5);
            parent.pressText.position.set(parent.marginLeft + 400, parent.marginTop + 100);

            parent.instructionText1.anchor.set(.5, .5);
            parent.instructionText1.position.set(parent.marginLeft + 400, parent.marginTop + 60);

            tickPic.anchor.set(.5, .5);
            tickPic.position.set(parent.marginLeft + 250, parent.marginTop + 105);
            tickPic.scale.set(.4,.4);

            parent.handPointerSprite.position.set(sH + 370, sH + 270);
            parent.handPointerSprite.scale.set(.45, .45);


            displayInstruction1();
            parent.pigInitialPosition();
            parent.playArea();
            parent.displayPlayArea();
            parent.dispalyPigs();
            parent.pig_lSprite.position.set(sW+162, sH+60);
            parent.pig_lSprite.scale.set(.7,.7);
            parent.pig_rSprite.position.set(sW+320, sH+60);
            parent.pig_rSprite.scale.set(.7,.7);
            parent.PlayAreaCtr.scale.set(.6,.6);
            parent.PlayAreaCtr.position.set(sW, sH-50);


            function displayInstruction1(){

              this.insrtuction1Ctr.addChild(parent.InstructionBgSprite);
              // insrtuction1Ctr.addChild(parent.handPointerSprite);
              this.insrtuction1Ctr.addChild(parent.pressText);
              this.insrtuction1Ctr.addChild(tickPic);

              parent.instructionCtr.addChild(this.insrtuction1Ctr);
              parent.instructionCtr.addChild(parent.instructionText1);

              app.stage.addChild(parent.instructionCtr);
              setTimeout(nextInstruction, 4000);
            }



            function nextInstruction(){

            nextInstructionText = new PIXI.Text("ചിത്രങ്ങൾ ഒരേ ദിശയിൽ  വ്യത്യസ്ത ക്രമീകരണത്തിൽ ആണെങ്കിൽ ", {
                font: "bold 26px Chilanka",
                fill: "orange"
            });
            nextInstructionText.anchor.set(.5, .5);
            nextInstructionText.position.set(parent.marginLeft + 400, parent.marginTop + 60);

            parent.pig_lSprite.rotation= 1.5;
            parent.pig_rSprite.rotation= .5;
            parent.instructionText1.visible = false;

            this.insrtuction1Ctr.addChild(nextInstructionText);

            }

            setTimeout(invisible, 8000);

            function invisible() {
                this.insrtuction1Ctr.visible = false;
                secondInstruction();
            }


        }

        function secondInstruction() {


            insrtuction2Ctr = new PIXI.Container();

            parent.instructionText2 = new PIXI.Text("വൃത്തത്തിനുള്ളിലെ ചിത്രങ്ങൾ ഒരേ ദിശയിൽ അല്ലങ്കിൽ", {
                font: "bold 26px Chilanka",
                fill: "orange"
            });

            crossTexture = PIXI.Texture.fromImage('images/cross.png');
            crossPic = new PIXI.Sprite(crossTexture);

            parent.pressText.anchor.set(.5, .5);
            parent.pressText.position.set(parent.marginLeft + 400, parent.marginTop + 100);

            parent.instructionText2.anchor.set(.5, .5);
            parent.instructionText2.position.set(parent.marginLeft + 400, parent.marginTop + 60);

            parent.handPointerSprite.scale.x = -.5;
            parent.handPointerSprite.position.set(sH + 700, sH + 270);

            crossPic.anchor.set(.5, .5);
            crossPic.position.set(parent.marginLeft + 250, parent.marginTop + 105);
            crossPic.scale.set(.4,.4);


            displayInstruction2();
            parent.pigInitialPosition();
            parent.playArea();
            parent.displayPlayArea();
            parent.dispalyPigs();
            parent.pig_lSprite.position.set(sW+162, sH+60);
            parent.pig_lSprite.scale.set(.7,.7);
            parent.pig_rSprite.position.set(sW+320, sH+60);
            parent.pig_rSprite.scale.set(.7,.7);
            parent.PlayAreaCtr.scale.set(.6,.6);
            parent.PlayAreaCtr.position.set(sW, sH-50);

            setTimeout(invisible, 4000);

            function invisible() {
                insrtuction2Ctr.visible = false;
            }

              function displayInstruction2(){

                insrtuction2Ctr.addChild(parent.InstructionBgSprite);
                // insrtuction2Ctr.addChild(parent.handPointerSprite);
                insrtuction2Ctr.addChild(parent.pressText);
                insrtuction2Ctr.addChild(crossPic);

                parent.instructionCtr.addChild(insrtuction2Ctr);
                parent.instructionCtr.addChild(parent.instructionText2);

                app.stage.addChild(parent.instructionCtr);
                setTimeout(nextInstruction, 4000);

              }

              function nextInstruction(){

              nextInstructionText = new PIXI.Text("വ്യത്യസ്ത ദിശയിൽ ഒരേ ചിത്രങ്ങൾ വ്യത്യസ്ത ക്രമീകരണത്തിൽ ആണെങ്കിൽ ", {
                  font: "bold 26px Chilanka",
                  fill: "orange"
              });
              nextInstructionText.anchor.set(.5, .5);
              nextInstructionText.position.set(parent.marginLeft + 400, parent.marginTop + 60);

              parent.pig_lSprite.rotation= 1.5;
              parent.pig_rSprite.rotation= .5;
              parent.instructionText1.visible = false;

              this.insrtuction1Ctr.addChild(nextInstructionText);

              }

        }

        setTimeout(invisibleTheCtnr, 14000);

        parent = this;

        function invisibleTheCtnr() {

            parent.instructionCtr.visible = false;
            parent.playArea();
            parent.displayPlayArea();
            parent.pigInitialPosition();
            parent.calculation();
            parent.pigChangedPosition();

        }

    },



    displayLevels: function() {

        this.levelsStageCtr.addChild(this.levelsBg);
        this.levelsStageCtr.addChild(this.pigSprite);
        this.levelsStageCtr.addChild(this.StarsSprite);
        app.stage.addChild(this.levelsStageCtr);

    },


    //Start to play , In future it may changed as class


    playArea: function() {

        // this.playAreaSprite.position.set(this.marginLeft, this.marginTop);
        this.playAreaSprite.scale.set(1, 1);
        this.tickSprite.scale.set(.6, .6);
        this.tickSprite.position.set(this.marginLeft+30 , this.marginTop + 220);
        this.crossSprite.scale.set(.6, .6);
        this.crossSprite.position.set(this.marginLeft + 130, this.marginTop + 220);
        this.PlayAreaCtr.scale.set(1,1);
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

                    this.myarray[i][j] = nfV;

                }
                //For second half

                if ((j == 0) && (i >= f)) {

                    this.myarray[i][j] = fV;

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

        this.pig_lSprite.scale.set(1,1);
        this.pig_rSprite.scale.set(1,1);
        this.pig_lSprite.rotation = 0;
        this.pig_rSprite.rotation = 0;
        this.pig_rSprite.anchor.set(0.5, 0.5);
        this.pig_lSprite.anchor.set(0.5, 0.5);

    },

    pigChangedPosition: function() {

        this.pig_lSprite.x = this.marginLeft + 270;
        this.pig_lSprite.y = this.marginTop + 190;

        this.pig_rSprite.x = this.marginLeft + 540;
        this.pig_rSprite.y = this.marginTop + 190;

        this.pig_lSprite.scale.x = 1;
        this.pig_rSprite.scale.x = 1;
        this.pig_lSprite.rotation = 0;
        this.pig_rSprite.rotation = 0;
        this.pig_rSprite.anchor.set(0.5, 0.5);
        this.pig_lSprite.anchor.set(0.5, 0.5);

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

                parent.sad();

            } else {
                if (flip == 1) {

                    parent.sad();

                }

                if (flip == -1) {

                    parent.happy();
                }

            }

        }

        this.crossSprite.click = function() {


            if (num == 3) {
                parent.happy();

            } else {

                if (flip == -1) {

                    parent.sad();

                }

                if (flip == 1) {

                    parent.happy();
                }

            }
        }


    },


    happy: function() {

        this.reactionCtr.visible = true;
        this.happySprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.happySprite);

        app.stage.addChild(this.reactionCtr);

        setTimeout(hideReactionCtr, 1300);

        var callObj = this.playbj;
        parent = this;

        function hideReactionCtr() {

            parent.reactionCtr.visible = false;
            parent.pigChangedPosition();

            setTimeout(function() {
                parent.progressBar(parent.pBWidth);
            }, 100)
        }

    },

    sad: function() {

        this.reactionCtr.visible = true;
        this.sadSprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.sadSprite);
        app.stage.addChild(this.reactionCtr);


        setTimeout(hideReactionCtr, 1300);
        parent = this;

        function hideReactionCtr() {

            parent.reactionCtr.visible = false;
            parent.pigChangedPosition();

        }

    },

    selectAllSpritesOfFriend: function() {
        var compare = self._texture.textureCacheIds

        if (compare == "images/1.png") {
            this.happySprite = this.Ben10HappySprite;
            this.sadSprite = this.Ben10SadSprite;
            this.gameOverSprite = this.Ben10GameOverSprite;

        }

        if (compare == "images/2.png") {


            this.happySprite = this.DoraHappySprite;
            this.sadSprite = this.DoraSadSprite;
            this.gameOverSprite = this.DoraGameOverSprite;
        }

        if (compare == "images/3.png") {

            this.happySprite = this.MickiHappySprite;
            this.sadSprite = this.MickiSadSprite;
            this.gameOverSprite = this.MickiGameOverSprite;
        }

        if (compare == "images/4.png") {

            this.happySprite = this.ChottaHappySprite;
            this.sadSprite = this.ChottaSadSprite;
            this.gameOverSprite = this.ChottaGameOverSprite;

        }

        if (compare == "images/5.png") {

            this.happySprite = this.TomHappySprite;
            this.sadSprite = this.TomSadSprite;
            this.gameOverSprite = this.TomGameOverSprite;

        }

    },

    progressBar: function(x) {

        this.pBcurrentW += x;

        if (this.pBcurrentW == 500) {
            this.gameOver();
            this.PlayAreaCtr.visible = false;
            this.pigCtr.visible = false;
        } else {
            this.graphics.beginFill(0xe68a00); // Dark blue gray 'ish
            // Draw a rectangle with rounded corners
            this.graphics.drawRoundedRect(this.marginLeft-131 , this.marginTop + 396, this.pBcurrentW, 15, 8); // drawRoundedRect(x, y, width, height, radius)
            this.graphics.endFill();
            this.PlayAreaCtr.addChild(this.graphics);

        }
    },

    gameOver: function() {

        var Text = PIXI.Text;
        over = new Text(
            "നമ്മൾ വിജയിച്ചു ചങ്ങാതി..", {
                font: "bold 56px Chilanka",
                fill: "orange"
            }
        );
        over.position.set(this.marginLeft + 100, this.marginTop + 430);
        this.gameOverSprite.position.set(this.marginLeft, this.marginTop);
        this.gameOverCtr.addChild(this.gameOverSprite);
        this.gameOverCtr.addChild(over);
        app.stage.addChild(this.gameOverCtr);


        setTimeout(hidegameOverCtr, 4000);
        parent = this;

        function hidegameOverCtr() {

            parent.gameOverCtr.visible = false;
            parent.prepareLevelsBackground(1);

        }


    }

}


PIXI.loader.add('images/1.png')
    .add('images/2.png')
    .add('images/3.png')
    .add('images/4.png')
    .add('images/5.png')
    .add('images/0.png').load(function(loader, resources) {

        var friendObj = new Friend();
        friendObj.prepareBackground(resources);

        var game = new Game();
        game.initGameFriends(resources);



    });
