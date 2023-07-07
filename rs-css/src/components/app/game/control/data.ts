import { Data } from '../../../types/types';

const data: Data = {
    level_name: [
        'Select the batmen',
        'Select the deadpool, joker',
        'Select the first groot',
        'Select the two hulk',
        'Select the tor and second hulk',
        'Select the two batmen and two capitan',
        'Select the all',
        'Select the two hulk, spider, joker',
        'Select the joker, first and fourth hulk',
        'Select the first, second groot and hulk',
    ],
    level_viewer: [
        '<div class="box">\n<div class="batmen"></div>\n<div class="iron"></div>\n<div class="spider"></div>\n</div>',
        '<div class="box">\n<div class="capitan"></div>\n<div class="deadpool"></div>\n<div class="joker"></div>\n</div>',
        '<div class="box">\n<div id="groot_1"></div>\n<div id="groot_2"></div>\n<div id="groot_3"></div>\n</div>',
        '<div class="box">\n<div class="flesh">\n<div id="hulk_1"></div>\n</div>\n<div class="spider">\n<div id="hulk_2"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="iron">\n<div id="hulk_1"></div>\n</div>\n<div class="tor">\n<div id="hulk_2"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="spider">\n<div id="joker"></div>\n</div>\n<div class="batmen">\n<div id="batmen"></div>\n</div>\n<div class="capitan">\n<div id="capitan"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="batmen">\n<div id="spider"></div>\n</div>\n<div class="iron">\n<div id="hulk"></div>\n</div>\n<div class="capitan">\n<div id="tor"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="hulk">\n<div id="spider"></div>\n</div>\n<div class="batmen">\n<div id="hulk"></div>\n</div>\n<div class="flesh">\n<div id="joker"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="batmen">\n<div id="joker"></div>\n</div>\n<div class="batmen">\n<div id="groot"></div>\n</div>\n<div class="batmen">\n<div id="batmen"></div>\n</div>\n</div>',
        '<div class="box">\n<div class="groot">\n<div id="hulk"></div>\n</div>\n<div class="hulk">\n<div class="groot" id="groot"></div>\n</div>\n<div class="hulk">\n<div id="groot_1"></div>\n</div>\n</div>',
    ],
    level_editor: [
        '.batmen | .box .batmen | div + .batmen | div ~ .batmen | div > .batmen | div .batmen',
        '.deadpool, .joker | .joker, .deadpool | .box .deadpool, .joker | div + .deadpool, .joker',
        '#groot_1 | .groot + #groot_1 | .groot ~ #groot_1 | div + #groot_ 1 | div ~ #groot_1 | div > #groot_1 | div #groot_1 | .box > #groot_1 | .box #groot_1',
        '#hulk_1, #hulk_2 | #hulk_2, #hulk_1',
        '#hulk_2, .tor | .tor, #hulk_2',
        '.batmen, .capitan',
        '.iron, .capitan, #spider',
        '.hulk, #hulk, #joker',
        '.box:first-child, #batmen',
        '.box::nth-child(2), .groot',
    ],
    level_animation: [
        'batmen',
        'deadpool | joker',
        'groot_1',
        'hulk_1 | hulk_2',
        'tor | hulk_2',
        'batmen | capitan',
        'iron | spider | batmen | capitan | hulk | tor',
        'hulk | joker',
        'batmen',
        'groot | hulk',
    ],
};

export default data;
