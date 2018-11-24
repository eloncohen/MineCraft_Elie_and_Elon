
var mineCraft = {};
mineCraft.toolSelected = '';
mineCraft.replace = false;

mineCraft.blocks = {
    'sky': {class: 'sky', data: 'nothing'},
    'cloud':{class: 'cloud',data: 'nothing'},
    'dirt':{class: 'dirt',data: 'shovel'},
    'grass': {class: 'grass',data: 'shovel'},
    'leaf': {class: 'leaf',data: 'axe'},
    'tree': {class: 'tree',data: 'axe'},
    'rock': {class: 'rock',data: 'pickaxe'}
 };
mineCraft.tools = [
    {data: 'axe', src: 'images/axe.png'},
    {data: 'pickaxe', src: 'images/pickaxe.png'},
    {data: 'shovel', src: 'images/shovel.png'}
];
mineCraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'tree', 'sky', 'sky', 'rock'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']
];

mineCraft.startGame = function(){ //lance ke jeu
    $('#landing-page').css('display', 'none'); 
    $('#gameboard').css('display', 'block');
    mineCraft.createBoard();
    mineCraft.buildToolSidebar();
};

mineCraft.createBoard = function(){
    var mainContain = $('#mainContain'); //div du jeu
  for (var i=0;i<mineCraft.matrix.length;i++){
      for(var j=0; j<mineCraft.matrix[i].length; j++){
          var tile = $('<div/>');  // chaque case de matrice on met un div tile
          tile.addClass(mineCraft.blocks[mineCraft.matrix[i][j]].class) //on lui definie la classe 
              .addClass('box')
              .attr('data',mineCraft.blocks[mineCraft.matrix[i][j]].data)
              .click(mineCraft.clickBlock);
          mainContain.append(tile);

      }
  }
};

mineCraft.buildToolSidebar = function(){
    var toolArray = $(".toolItem");
    for(var t=0;t<toolArray.length; t++ ){ //passe sur chaque div;
        toolArray.eq(t).append("<img src=" + mineCraft.tools[t].src+">") ;// met l'image, eq: a l'index (t);
        toolArray.eq(t).attr('data', mineCraft.tools[t].data);
        toolArray.eq(t).click(mineCraft.clickTool);
    }
    $('#itemSelected').click(mineCraft.blockReplacer); // si on click a la case vide;
};

mineCraft.clickTool = function (){
    mineCraft.replace = false;
        $('.toolItem').removeClass('toolSelected'); //l'outil choisit prend la classe toolSelected;
        $(this).toggleClass('toolSelected');
};

mineCraft.clickBlock = function () { //selectionne le block et envoie le match;
        var blockSelected = $(this);
        mineCraft.checkMatch(blockSelected);
};

mineCraft.checkMatch = function(blockSelected){
    if (mineCraft.replace === false){
       
        if (blockSelected.attr('data') === $('.toolSelected').attr('data')) { //si le block a le meme data que l'outil;
            mineCraft.blockMover(blockSelected);
        }
        
    }
};    

mineCraft.blockMover = function(blockSelected){ 
    if (blockSelected.not('sky box')) {
        var itemSelectedBox = $("#itemSelected"); // le block select va dans la case vide;
        itemSelectedBox.attr('class', blockSelected.attr('class'));
        itemSelectedBox.attr('data', blockSelected.attr('data'));
        blockSelected.attr('class', 'sky box'); // le block select devient ciel;
    }
};

mineCraft.blockReplacer = function() {
    mineCraft.newData = null;
    mineCraft.newClass = null;
    var itemSelected = $('#itemSelected');
    $('.toolItem').removeClass('toolSelected'); //la classe des outils devient l'outil choisit
    mineCraft.replace = true;
    mineCraft.newClass = itemSelected.attr('class');
    mineCraft.newData = itemSelected.attr('data');
    $('.box').not('#itemSelected').click(mineCraft.blockAdder);
};

mineCraft.blockAdder = function(){
    var blockSelected = $(this);
    blockSelected.attr('class', mineCraft.newClass);
    blockSelected.attr('data', mineCraft.newData);
    $('#itemSelected').removeClass();
    $('.box').not('#itemSelected').unbind('click', mineCraft.blockAdder);
};

