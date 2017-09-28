function Game() {

    this.friendInroCntr = new PIXI.Container();
    this.PlayAreaCtr = new PIXI.Container();
    this.pigCtr = new PIXI.Container();
    this.levelsStageCtr = new PIXI.Container();
    this.reactionCtr = new PIXI.Container();
    this.gameOverCtr = new PIXI.Container();
    this.graphics = new PIXI.Graphics();

    this.myarray = [];
    this.stagesNum = 20;

    this.pBWidth = 50;
    this.pBcurrentW = 0;

    this.availableFriends = [];
    this.windowWidth = window.innerWidth;
    this.marginLeft = (window.innerWidth - 800) / 2;
    this.marginTop = (window.innerHeight - 500) / 2;

    this.heading = new PIXI.Text("Who is your friend?", {
        fontFamily: "Bangers",
        fontSize: 56,
        fill: "orange"
    });


    this.bg = PIXI.Texture.fromImage('images/0.png');
    this.background = new PIXI.Sprite(this.bg);

    this.textureBg = PIXI.Texture.fromImage('images/background.png');
    this.background1 = new PIXI.Sprite(this.textureBg);

    this.textureArrow1 = PIXI.Texture.fromImage('images/arrow1.png');
    this.orangeArrow = new PIXI.Sprite(this.textureArrow1);

    this.texturebox = PIXI.Texture.fromImage('images/dialogue.png');
    this.dialogueBox = new PIXI.Sprite(this.texturebox);

    this.dialogueText = new PIXI.Text("let's go", {
        fontFamily: "Bangers",
        fontSize: 26,
        fill: "white"
    });

    this.textureArrow = PIXI.Texture.fromImage('images/arrow.png');
    this.yellowArrow = new PIXI.Sprite(this.textureArrow);

    this.textureLevelsBg = PIXI.Texture.fromImage('images/levels.png');
    this.levelsBg = new PIXI.Sprite(this.textureLevelsBg);


    this.texturePig = PIXI.Texture.fromImage('images/pig.png');
    this.pigSprite = new PIXI.Sprite(this.texturePig);

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


};

Game.prototype = {

    constructor: Game,
    initGameFriends: function(resources) {

        var xPos = this.marginLeft + 50;
        var yPos = this.marginTop + 200;
        this.availableFriendsName = ["", "ben10", "dora", "micki mouse", "chotta bheem", "tom"];

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
            self.name.scale.set(1.2);

        }

        function friendInteractionOut() {
            self.scale.set(.5);
            self.name.scale.set(1.2);
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

            parent.orangeArrow.visible = true;
            parent.dialogueText.visible = true;
            parent.dialogueBox.visible = true;
            parent.orangeArrow.position.set(parent.marginLeft+300, parent.marginTop+150);
            parent.dialogueText.position.set(parent.marginLeft+70, parent.marginTop+40);
            parent.dialogueBox.position.set(parent.marginLeft, parent.marginTop);

            display();

        }

        function arrowInteractionOut() {

            parent.orangeArrow.visible = false;
            parent.dialogueBox.visible = false;
            parent.dialogueText.visible = false;

        }

        function display(){
          parent.friendInroCntr.addChild(parent.orangeArrow);
          parent.friendInroCntr.addChild(parent.dialogueBox);
          parent.friendInroCntr.addChild(parent.dialogueText);
        }

        this.yellowArrow.click = function() {

           parent.friendInroCntr.visible = false;

           parent.prepareLevelsBackground();
           parent.InteractLevelObject();
           parent.displayLevels();
        }

    },

    displayStage: function () {

        this.friendInroCntr.addChild(this.background1);
        this.friendInroCntr.addChild(self);
        this.friendInroCntr.addChild(self.name);
        this.friendInroCntr.addChild(this.yellowArrow);
        app.stage.addChild(this.friendInroCntr);

    },

    prepareLevelsBackground: function() {

        this.levelsBg.position.set(this.marginLeft, this.marginTop);

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
        function levelObjInteraction(){

            inside.pigSprite.x = inside.marginLeft+215;
            inside.pigSprite.y = inside.marginTop+205;
            inside.pigSprite.anchor.x = 0.5;
            inside.pigSprite.anchor.y = 0.5;

            for(var i=0;i<30;i++)
            {

              inside.pigSprite.rotation += 0.01;

             }
         }

        function levelObjInteractionOut(){

             inside.pigSprite.rotation = 0;

          }

        this.pigSprite.click = function(){

          inside.levelsStageCtr.visible = false;
          // var playObj = new StartPlay();
          inside.playArea();
          inside.diasplayPlayArea();
          inside.pigInitialPosition();
          inside.calculation();
          inside.pigChangedPosition();

        }

    },

    displayLevels: function() {

        this.levelsStageCtr.addChild(this.levelsBg);
        this.levelsStageCtr.addChild(this.pigSprite);
        app.stage.addChild(this.levelsStageCtr);

    },




//Start to play , In future it may changed as class


    playArea: function() {

        this.playAreaSprite.position.set(this.marginLeft, this.marginTop);
        this.tickSprite.scale.set(.6, .6);
        this.tickSprite.position.set(this.marginLeft + 310, this.marginTop + 300);
        this.crossSprite.scale.set(.6, .6);
        this.crossSprite.position.set(this.marginLeft + 410, this.marginTop + 300);

    },

    diasplayPlayArea: function() {

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

pigInitialPosition: function(){

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

},

pigChangedPosition:function(){

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
  var lev = Math.floor((Math.random() * this.stagesNum-1) + 1);
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

            parent.happy();

        } else {
            if (flip == 1) {

                parent.happy();

            }

            if (flip == -1) {

                parent.sad();
            }

        }

    }

    this.crossSprite.click = function() {


        if (num == 3) {
          parent.happy();

        } else {

            if (flip == -1) {

                parent.happy();

            }

            if (flip == 1) {

                parent.sad();
            }

        }
    }


},


happy: function(){

  this.reactionCtr.visible = true;
  var compare = self._texture.textureCacheIds;
  if( compare == "images/1.png")
    {
      this.Ben10HappySprite.position.set(this.marginLeft, this.marginTop);
      this.reactionCtr.addChild(this.Ben10HappySprite);

    }

    if( compare == "images/2.png")
      {

        this.DoraHappySprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.DoraHappySprite);

      }

    if( compare == "images/3.png")
      {

        this.MickiHappySprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.MickiHappySprite);

      }

    if( compare == "images/4.png")
      {

        this.ChottaHappySprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.ChottaHappySprite);

      }

    if( compare == "images/5.png")
      {

        this.TomHappySprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.TomHappySprite);

      }

  app.stage.addChild(this.reactionCtr);

  setTimeout(hideReactionCtr, 1300);

  var callObj = this.playbj;
  parent = this;

  function hideReactionCtr(){

    parent.reactionCtr.visible = false;

    setTimeout(function() {
        parent.progressBar(parent.pBWidth);
    },100)
  }

},

sad: function(){
  var compare = self._texture.textureCacheIds
  this.reactionCtr.visible = true;
  if( compare == "images/1.png")
    {
      this.Ben10SadSprite.position.set(this.marginLeft, this.marginTop);
      this.reactionCtr.addChild(this.Ben10SadSprite);

    }

    if( compare == "images/2.png")
      {

        this.DoraSadSprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.DoraSadSprite);

      }

    if( compare == "images/3.png")
      {

        this.MickiSadSprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.MickiSadSprite);

      }

    if( compare == "images/4.png")
      {

        this.ChottaSadSprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.ChottaSadSprite);

      }

    if( compare == "images/5.png")
      {

        this.TomSadSprite.position.set(this.marginLeft, this.marginTop);
        this.reactionCtr.addChild(this.TomSadSprite);

      }

  app.stage.addChild(this.reactionCtr);
  setTimeout(hideReactionCtr, 1300);

  parent = this;
  function hideReactionCtr(){

    parent.reactionCtr.visible = false;
    parent.pigChangedPosition();

  }

},

progressBar: function(x)
   {

     this.pBcurrentW += x;

    //  if(this.pBcurrentW == 500)
    //  {
    //   gameOver();
    //   this.PlayAreaCtr.visible =false;
    //   this.pigCtr.visible = false;
    //  }
     //
    //  else{
         this.graphics.beginFill(0xe68a00); // Dark blue gray 'ish
         // Draw a rectangle with rounded corners
         this.graphics.drawRoundedRect(this.marginLeft+152, this.marginTop+461, this.pBcurrentW, 15, 8); // drawRoundedRect(x, y, width, height, radius)
         this.graphics.endFill();
         this.PlayAreaCtr.addChild(this.graphics);
         this.pigChangedPosition();
        //  }
   },

   gameOver: function(){

     var Text = PIXI.Text;
        over = new Text(
          "WOW...You won",
          {fontFamily: "Bangers", fontSize: 52, fill: "orange"}
           );
      over.position.set(this.marginLeft+250, marginTop+430);
      gameOverCtr.addChild(over);
      app.stage.addChild(gameOverCtr);

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
