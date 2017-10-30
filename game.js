function Game() {

    this.friendInroCntr = new PIXI.Container();
    this.avatarCntr = new PIXI.Container();
    this.PlayAreaCtr = new PIXI.Container();
    this.PlayArea2Ctr = new PIXI.Container();

    this.pigCtr = new PIXI.Container();
    this.levelsStageCtr = new PIXI.Container();
    this.reactionCtr = new PIXI.Container();
    this.gameOverCtr = new PIXI.Container();
    this.instructionCtr = new PIXI.Container();
    this.friendCntr = new PIXI.Container();

    this.myarray = [];
    this.stagesNum = 20;

    this.pBWidth = 50;
    this.pBcurrentW = 0;

    this.availableFriends = [];
    this.playSprite1 = [];
    this.playSprite2 = [];
    this.windowWidth = window.innerWidth;
    h = window.innerHeight/500;
    this.marginLeft = ((window.innerWidth - 800*h*1.1) / 2);
    this.marginTop = ((window.innerHeight - 500*h) / 2);

    this.heading = new PIXI.Text("കൂട്ടുകാരനെ തിരഞ്ഞെടുക്കാം!", {

        fill: "orange",
        font: "bold 56px Chilanka",
    });
    this.heading.width = 600;

    this.bg = PIXI.Texture.fromImage('images/gameBg.png');
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


    this.dogSprite = new PIXI.Sprite(PIXI.Texture.fromImage('images/dog.png'));

    this.pigSprite = new PIXI.Sprite(PIXI.Texture.fromImage('images/pig.png'));



    this.texturePointer = PIXI.Texture.fromImage('images/pointing_hand.png');
    this.handPointerSprite = new PIXI.Sprite(this.texturePointer);

    this.textureInstructionBg = PIXI.Texture.fromImage('images/stage1/instructionBg.png');
    this.InstructionBgSprite = new PIXI.Sprite(this.textureInstructionBg);

    this.texturePicBase = PIXI.Texture.fromImage('images/stage1/picBase.png');
    this.picBaseSprite = new PIXI.Sprite(this.texturePicBase);

    this.level2BaseSprite = new PIXI.Sprite(PIXI.Texture.fromImage('images/stage2/picBase.png'));


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

    this.StarsSprite = new PIXI.Sprite(PIXI.Texture.fromImage('images/stars.png'));
    this.StarsSprite1 = new PIXI.Sprite(PIXI.Texture.fromImage('images/stars.png'));

    for (var i = 0; i < 5; i++) {

        this.playSprite1[i] = PIXI.Texture.fromImage("images/stage2/" + i + ".png");
        this.playSprite2[i] = PIXI.Texture.fromImage("images/stage2/1" + i + ".png");

    }
    // for (var i = 0; i < 5; i++) {
    //
    //       this.avatars = new PIXI.Sprite(PIXI.Texture.fromImage("images/" + i + ".png"));
    //
    // }

};

Game.prototype = {

    constructor: Game,
    initGameFriends: function() {

        var xPos = this.marginLeft + 50;
        var yPos = this.marginTop + 200;
        this.availableFriendsName = ["പപ്പി", "ബഡാ ഭീം", "കുഞ്ഞാവ", "ഉണ്ണിക്കുട്ടൻ", "മിങ്കൻ"];

        for (var i = 0; i < 5; i++) {

            this.availableFriends[i] = new Friend(PIXI.Texture.fromImage("images/" + i + ".png"), this.availableFriendsName[i], xPos);
            xPos += 150;

        }

    },

    prepareStage: function(self) {

        self.interactive = false;
        self.buttonMode = false;
        self.accessible = false;

        self.position.set(230, 200);
        self.scale.set(.5);
        textOfAvatar = new PIXI.Text("എന്നെ തിരഞ്ഞെടുത്തതിനു നന്ദി! ഞാൻ", {

            fill: "orange",
            font:"26px Chilanka",

        });

        self.name.position.set(605, 415);
        self.name.scale.set(1);
        textOfAvatar.position.set(100, 400);
        this.dialogueBox.scale.set(1.2);
        this.dialogueBox.position.set(300, 50);
        this.friendInroCntr.position.set(this.marginLeft, this.marginTop);

    },

    interAction: function() {

      textOfAvatarDialogue = new PIXI.Text("കളി തുടങ്ങാൻ\nആരോയിൽ\n\t\t\tതൊടാം", {

          fill: "white",
          font:"26px Chilanka",

      });
        textOfAvatarDialogue.anchor.set(0.5, 0.5);
        textOfAvatarDialogue.position.set(440, 120);
        this.yellowArrow.position.set(600, 200);
        this.yellowArrow.interactive = true;
        this.yellowArrow.accessible = true;
        this.yellowArrow.buttonMode = true;

        this.yellowArrow
            .on('pointerover', arrowInteraction)
            .on('pointerout', arrowInteractionOut)

        var parent = this;

        function arrowInteraction() {

            textOfAvatarDialogue.visible = false;

            parent.yellowArrow.alpha = 0;
            parent.orangeArrow.visible = true;
            parent.dialogueText.visible = true;
            // parent.dialogueBox.visible = true;
            parent.orangeArrow.position.set(620, 200);
            parent.dialogueText.position.set(360, 95);

            display();
        }

        function arrowInteractionOut() {

            textOfAvatarDialogue.visible = true;

            parent.yellowArrow.alpha = 1;
            parent.orangeArrow.visible = false;
            // parent.dialogueBox.visible = false;
            parent.dialogueText.visible = false;
            parent.yellowArrow.alpha = 1;

        }

        function display() {

            parent.friendInroCntr.addChild(parent.orangeArrow);
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
        this.friendInroCntr.addChild(this.dialogueBox);
        this.friendInroCntr.addChild(textOfAvatar);
        this.friendInroCntr.addChild(textOfAvatarDialogue);
        this.friendInroCntr.addChild(self.name);
        this.friendInroCntr.addChild(this.yellowArrow);
        app.stage.addChild(this.friendInroCntr);

    },


    prepareLevelsBackground: function(l) {

        // console.log(this._texture.textureCacheIds);
        this.levelText = new PIXI.Text("പടികൾ( ഘട്ടങ്ങൾ )", {
            font: "bold 56px Chilanka",
            fill: "orange"
        });

        this.StarsSprite.visible = false;
        this.StarsSprite1.visible = false;
        this.levelsBg.position.set(this.marginLeft, this.marginTop);
        this.levelText.position.set(this.marginLeft + 130, this.marginTop + 50);
        this.StarsSprite.position.set(this.marginLeft + 160, this.marginTop + 225);
        this.StarsSprite1.position.set(this.marginLeft + 345, this.marginTop + 225);
        this.dogSprite.position.set(this.marginLeft + 178, this.marginTop + 175);
        this.pigSprite.position.set(this.marginLeft + 362, this.marginTop + 175);


        this.dogSprite.interactive = true;
        this.dogSprite.buttonMode = true;
        this.dogSprite.accessible = true;

        this.pigSprite.interactive = true;
        this.pigSprite.buttonMode = true;
        this.pigSprite.accessible = true;

        if (l == 1) {

            this.dogSprite.interactive = false;
            this.dogSprite.buttonMode = false;
            this.dogSprite.accessible = false;

            this.StarsSprite.visible = true;
            this.levelsStageCtr.visible = true;
        }
        if (l == 2) {

            this.pigSprite.interactive = false;
            this.pigSprite.buttonMode = false;
            this.pigSprite.accessible = false;

            this.StarsSprite.visible = true;
            this.StarsSprite1.visible = true;
            this.levelsStageCtr.visible = true;
        }

        this.InteractLevelObject();

    },

    InteractLevelObject: function() {

        this.dogSprite.x = this.marginLeft + 215;
        this.dogSprite.y = this.marginTop + 205;
        this.dogSprite.anchor.x = 0.5;
        this.dogSprite.anchor.y = 0.5;

        this.dogSprite
            .on('pointerover', levelObjInteraction)
            .on('pointerout', levelObjInteractionOut)

        // this.pigSprite
        //     .on('pointerover', levelObjInteraction)
        //     .on('pointerout', levelObjInteractionOut)


        var inside = this;

        function levelObjInteraction() {

            var tween1 = new Tween(inside.dogSprite, "position.x", 300, 60, false);
            var tween1 = new Tween(inside.dogSprite, "rotation",.5, 200, false);
                tween1.easing = Tween.outElastic;

            // var tween1 = new Tween(inside.dogSprite, "position.y", 215, 60, false);
            // tween1.easing = Tween.outElastic;

            new ChainedTween([tween1]);

            app.ticker.add(function(delta) {

                Tween.runTweens();

            });

        }

        function levelObjInteractionOut() {

            var tween1 = new Tween(inside.dogSprite, "rotation",-.5, 200, false);
                tween1.easing = Tween.outElastic;
            // var tween1 = new Tween(inside.dogSprite, "position.y", 205, 60, false);
            // tween1.easing = Tween.outElastic;
            new ChainedTween([tween1]);

            app.ticker.add(function(delta) {

                Tween.runTweens();

            });

        }

        this.dogSprite.click = function() {

            inside.levelsStageCtr.visible = false;

            inside.instructionVideo();
        }

        this.pigSprite.click = function() {

            inside.levelsStageCtr.visible = false;

            // inside.playArea2();
            inside.insructionVideoLevel2();
        }
        this.displayLevels();

    },

    displayLevels: function() {

        this.levelsStageCtr.addChild(this.levelsBg);
        this.levelsStageCtr.addChild(this.dogSprite);
        this.levelsStageCtr.addChild(this.pigSprite);

        this.levelsStageCtr.addChild(this.StarsSprite);
        this.levelsStageCtr.addChild(this.StarsSprite1);
        this.levelsStageCtr.addChild(this.levelText);
        app.stage.addChild(this.levelsStageCtr);

    },


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

    },


    happy: function(lvalue) {

              tickText = new PIXI.Text("ശരി", {
                  font: "bold 46px Chilanka",
                  fill: "orange"
              });

        console.log(this.marginLeft)

        this.reactionCtr.visible = true;
        this.happySprite.position.set(this.marginLeft, this.marginTop);
        tickText.position.set(this.marginLeft+100, this.marginTop+20);
        this.reactionCtr.addChild(this.happySprite);
        this.reactionCtr.addChild(tickText);

        app.stage.addChild(this.reactionCtr);

        if (lvalue == 1)
            setTimeout(hideReactionCtr1, 1300);

        else if (lvalue == 2)
            setTimeout(hideReactionCtr2, 1300);

        var callObj = this.playbj;
        parent = this;

        function hideReactionCtr1() {

            parent.reactionCtr.visible = false;
            parent.pigChangedPosition();

            setTimeout(function() {
                parent.progressBar(50, lvalue);
            }, 100)
        }

        function hideReactionCtr2() {

            parent.reactionCtr.visible = false;
            parent.playArea2();
              // parent.playArea2(2)

            setTimeout(function() {
                parent.progressBar(50, lvalue);

            }, 100)
        }

    },

    sad: function(lvalue) {

      crossText = new PIXI.Text("തെറ്റിപ്പോയല്ലോ!", {
          font: "bold 46px Chilanka",
          fill: "orange"
      });

        this.reactionCtr.visible = true;
        this.sadSprite.position.set(this.marginLeft, this.marginTop);
        crossText.position.set(this.marginLeft+100, this.marginTop+20);
        this.reactionCtr.addChild(this.sadSprite);
        this.reactionCtr.addChild(crossText);
        app.stage.addChild(this.reactionCtr);

        if (lvalue == 1)
            setTimeout(hideReactionCtr1, 1300);

        parent = this;
        function hideReactionCtr1() {

            parent.reactionCtr.visible = false;
            parent.pigChangedPosition();

        }

    },

    selectAllSpritesOfFriend: function() {
        var compare = self._texture.textureCacheIds

        if (compare == "images/0.png") {
            this.happySprite = this.Ben10HappySprite;
            this.sadSprite = this.Ben10SadSprite;
            this.gameOverSprite = this.Ben10GameOverSprite;

        }

        if (compare == "images/1.png") {


            this.happySprite = this.DoraHappySprite;
            this.sadSprite = this.DoraSadSprite;
            this.gameOverSprite = this.DoraGameOverSprite;
        }

        if (compare == "images/2.png") {

            this.happySprite = this.MickiHappySprite;
            this.sadSprite = this.MickiSadSprite;
            this.gameOverSprite = this.MickiGameOverSprite;
        }

        if (compare == "images/3.png") {

            this.happySprite = this.ChottaHappySprite;
            this.sadSprite = this.ChottaSadSprite;
            this.gameOverSprite = this.ChottaGameOverSprite;

        }

        if (compare == "images/4.png") {

            this.happySprite = this.TomHappySprite;
            this.sadSprite = this.TomSadSprite;
            this.gameOverSprite = this.TomGameOverSprite;

        }

    },

    SpriteRotationBack: function(first, second) {

        var tween1 = new Tween(first, "rotation", -.05, 100, false);
        tween1.easing = Tween.outCubic;

        var tween2 = new Tween(second, "rotation", -.05, 100, false);
        tween2.easing = Tween.outCubic;


        new ChainedTween([tween1, tween2]);

        app.ticker.add(function(delta) {

            Tween.runTweens();

        });

    },

    progressBar: function(x, lvalue) {

        graphics = new PIXI.Graphics();
        console.log(this.pBcurrentW)

        if (lvalue == 1) {

            this.pBcurrentW += x;
            graphics.beginFill(0xe68a00);
            // drawRoundedRect(x, y, width, height, radius)
            graphics.drawRoundedRect(151, 461, this.pBcurrentW, 15, 8);
            graphics.endFill();

            this.PlayAreaCtr.addChild(graphics);

            if (this.pBcurrentW == 500) {
                this.gameOver(lvalue);
                this.PlayAreaCtr.visible = false;
                this.pigCtr.visible = false;

            }
        }
        else if (lvalue == 2) {

            this.pBcurrentW += x;
            graphics.beginFill(0xe68a00);
            // drawRoundedRect(x, y, width, height, radius)
            graphics.drawRoundedRect(this.marginLeft + 151, this.marginTop + 463, this.pBcurrentW, 15, 8);
            graphics.endFill();

            this.PlayArea2Ctr.addChild(graphics);

            if (this.pBcurrentW == 500) {
                this.gameOver(lvalue);
                this.PlayArea2Ctr.visible = false;

            }
        }

    },

    gameOver: function(lvalue) {

        parent.gameOverCtr.visible = true;
        this.pBcurrentW = 0;

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

        setTimeout(function(){hidegameOverCtr(lvalue);}, 4000);
        parent = this;

        function hidegameOverCtr(lvalue) {

            parent.gameOverCtr.visible = false;
            parent.prepareLevelsBackground(lvalue);

        }

    }

}

PIXI.loader.add('images/1.png')
    .add('images/2.png')
    .add('images/3.png')
    .add('images/4.png')
    .add('images/0.png')
    .load(function(loader, resources) {

        var friendObj = new Friend();
        friendObj.prepareBackground(resources);

        var game = new Game();
        game.initGameFriends();



    });
