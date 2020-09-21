'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var TITLE_TEXT_X = CLOUD_X + TEXT_GAP;
var TITLE_TEXT_Y = CLOUD_Y + TEXT_GAP;
var BAR_X = CLOUD_X + TEXT_GAP;
var BAR_Y = CLOUD_Y + 80;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text, baseline) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = baseline;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var getColorBar = function (name) {
  var colorBar = 'rgba(2, 14, 134, ' + Math.random() + ')';
  if (name === 'Вы') {
    colorBar = 'rgba(255, 0, 0, 1)';
  }
  return colorBar;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, TITLE_TEXT_X, TITLE_TEXT_Y, 'Ура вы победили!', 'hanging');
  renderText(ctx, TITLE_TEXT_X, TITLE_TEXT_Y + GAP * 2, 'Список результатов:', 'hanging');

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var coordX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var coordY = BAR_Y + (BAR_HEIGHT - currentBarHeight);

    renderText(ctx, coordX, coordY, Math.floor(times[i]), 'bottom');
    renderText(ctx, coordX, BAR_Y + BAR_HEIGHT + GAP, names[i], 'hanging');

    ctx.fillStyle = getColorBar(names[i]);
    ctx.fillRect(coordX, coordY, BAR_WIDTH, currentBarHeight);
  }
};
