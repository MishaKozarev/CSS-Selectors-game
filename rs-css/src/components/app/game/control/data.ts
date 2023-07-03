import { data } from '../../../types/types';

const data = {
    level_name: [
        'Select the batmen',
        'Select the deadpool, joker',
        'Select the first groot',
        'Select the 4',
        'Select the 5',
        'Select the 6',
        'Select the 7',
        'Select the 8',
        'Select the 9',
        'Select the 10',
    ],
    level_viewer: [
        '<div class="box">\n\u00A0\u00A0<div class="batmen"></div>\n\u00A0\u00A0<div class="iron"></div>\n\u00A0\u00A0<div class="spider"></div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="capitan"></div>\n\u00A0\u00A0<div class="deadpool"></div>\n\u00A0\u00A0<div class="joker"></div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div id="groot_1" class="groot"></div>\n\u00A0\u00A0<div id="groot_2" class="groot"></div>\n\u00A0\u00A0<div id="groot_3" class="groot"></div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="flesh">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk_1"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="spider">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk_2"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="iron">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk_1"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="tor">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk_2"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="spider">\n\u00A0\u00A0\u00A0\u00A0<div id="joker"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="batmen"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="capitan">\n\u00A0\u00A0\u00A0\u00A0<div id="capitan"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="spider"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="iron">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="capitan">\n\u00A0\u00A0\u00A0\u00A0<div id="tor"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="hulk">\n\u00A0\u00A0\u00A0\u00A0<div id="spider"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="flesh">\n\u00A0\u00A0\u00A0\u00A0<div id="joker"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="joker"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="groot"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="batmen">\n\u00A0\u00A0\u00A0\u00A0<div id="batmen"></div>\n\u00A0\u00A0</div>\n</div>\n',
        '<div class="box">\n\u00A0\u00A0<div class="groot">\n\u00A0\u00A0\u00A0\u00A0<div id="hulk"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="hulk">\n\u00A0\u00A0\u00A0\u00A0<div class="groot" id="groot"></div>\n\u00A0\u00A0</div>\n\u00A0\u00A0<div class="hulk">\n\u00A0\u00A0\u00A0\u00A0<div id="groot_1"></div>\n\u00A0\u00A0</div>\n</div>\n',
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
        'tor',
        'batmen | capitan',
        'iron | spider | batmen | capitan | hulk | tor',
        'hulk | joker',
        'batmen',
        'groot | hulk',
    ],
};

export default data;
