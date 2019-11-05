//Prototypeless objects
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
console.log("pizza" in map);
//Polymorphism
function rowHeights(rows){
  return rows.map(function(row){
    return row.reduce(function(max, cell){
      return Math.max(max, cell.minHeight())
    }, 0);
  });
}

function colWidths(rows){
  return rows[0].map(function(_,i){
    return rows.reduce(function(max,row){
      return Math.max(max,row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  let heights = rowHeights(rows);
  let widths = colWidths(rows);

  function drawLine(blocks, lineNo){
    return blocks.map(function(block){
      return block[lineNo]
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    let blocks = row.map(function(cell, colNum){
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo){
      return drawLine(blocks, lineNo);
    }).join("\n");
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for(let i = 0; i < times; i++)
    result += string;
  return result
}

function TextCell(text){
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function(){
  return this.text.reduce(function(width, line){
    return Math.max(width, line.length)
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
}
TextCell.prototype.draw = function(width, height){
  let result = [];
  for(let i = 0; i < height; i++){
    let line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

//Build a 5*5 checker board
let rows = [];
for (let i = 0; i < 5; i++){
  let row = [];
  for (let j = 0; j < 5; j++){
    if((j+i) % 2 == 0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}
console.log(drawTable(rows));
