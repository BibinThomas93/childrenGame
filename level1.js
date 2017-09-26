function StartPlay() {
    Game.call(this);
    PlayAreaCtr = new PIXI.Container();
    pigCtr = new PIXI.Container();
    this.myarray = [];

// get: function(){
//
// }
// set: function(){
//
// }

};

StartPlay.prototype = {
    constructor: StartPlay,
    playArea: function() {

        this.playAreaSprite.position.set(this.marginLeft, this.marginTop);
        this.tickSprite.scale.set(.6, .6);
        this.tickSprite.position.set(this.marginLeft + 310, this.marginTop + 300);
        this.crossSprite.scale.set(.6, .6);
        this.crossSprite.position.set(this.marginLeft + 410, this.marginTop + 300);

    },

    diasplayPlayArea: function() {

        PlayAreaCtr.addChild(this.playAreaSprite);
        PlayAreaCtr.addChild(this.tickSprite);
        PlayAreaCtr.addChild(this.crossSprite);
        app.stage.addChild(PlayAreaCtr);

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

      // for (i = 0; i < this.stagesNum; i++) {
      //
      //       this.myarray[i][j];
      //
      //     }

      var num = Math.floor((Math.random() * 3) + 1);
      var lev = Math.floor((Math.random() * this.stagesNum) + 1);
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
        pigCtr.addChild(this.pig_rSprite);
        pigCtr.addChild(this.pig_lSprite);
        app.stage.addChild(pigCtr);
    },


    initialiseReaction: function(num, flip) {

              this.tickSprite.interactive = true;
              this.tickSprite.buttonMode = true;
              this.tickSprite.accessible = true;

              this.crossSprite.interactive = true;
              this.crossSprite.buttonMode = true;
              this.crossSprite.accessible = true;

              reactionObj = new FriendReaction();

              this.tickSprite.click = function() {

            if (num == 3) {

                reactionObj.happy();

                // h_popupTrue(p);
                // happy(1);
                // progressBar(pW);


            } else {
                if (flip == 1) {
                    //  h_popupTrue(p);
                    //  happy(1);
                    //  progressBar(pW);
                    reactionObj.happy();

                }

                if (flip == -1) {
                    // s_popupTrue(p);
                    // sad(1);

                    reactionObj.sad();
                }

            }

        }

        this.crossSprite.click = function() {
            if (num == 3) {
              reactionObj.happy();

                //  h_popupTrue(p);
                //  happy(1);
                //  progressBar(pW);


            } else {

                if (flip == -1) {
                    // h_popupTrue(p);
                    // happy(1);
                    // progressBar(pW);
                    reactionObj.happy();
                    // reactionObj.sad();
                }

                if (flip == 1) {
                    //  s_popupTrue(p);
                    //  sad(1);

                    reactionObj.sad();
                }

            }
        }


    }

}
