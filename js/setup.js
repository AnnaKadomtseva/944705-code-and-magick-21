'use strict';

var WIZARDS_COUNT = 4;
var NAMES = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilatItem = similarWizardTemplate.content.querySelector('.setup-similar-item');
var similarListElement = setup.querySelector('.setup-similar-list');

var getRandomItemFromArray = function (array) {
  var randomNumber = Math.random();
  var randomElement = array[Math.floor(randomNumber * array.length)];

  return randomElement;
};

var generateArray = function (wizardsCount) {
  var wizards = [];
  for (var i = 0; i < wizardsCount; i++) {
    wizards[i] = {
      name: getRandomItemFromArray(NAMES) + ' ' + getRandomItemFromArray(SURNAMES),
      coatColor: getRandomItemFromArray(COAT_COLORS),
      eyesColor: getRandomItemFromArray(EYES_COLORS)
    };
  }
  return wizards;
};

var makeElement = function (wizard) {
  var wizardElement = setupSimilatItem.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(makeElement(wizards[i]));
  }
  return fragment;
};

var wizards = generateArray(WIZARDS_COUNT);
similarListElement.append(renderWizards(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');
