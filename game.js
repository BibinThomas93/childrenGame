function Game() {

    this.stagesNum = 20;

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

    this.textureBen10Happy = PIXI.Texture.fromImage('images/ben10_happy.png');
    this.Ben10HappySprite = new PIXI.Sprite(this.textureBen10Happy);
    this.textureBen10Sad = PIXI.Texture.fromImage('images/ben10_sad.png');
    this.Ben10SadSprite = new PIXI.Sprite(this.textureBen10Sad);



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
