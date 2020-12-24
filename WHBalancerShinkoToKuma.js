//script by Sophie "Shinko to Kuma". Skype: live:sophiekitsune discord: Sophie#2418 website: https://shinko-to-kuma.my-free.website/
// Updated on 13 oktober, improving data grabbing cycles, cleaning up after running script
(function (_0x152c2f, _0x101336) {
    var _0x44de3f = function (_0x4f5c2d) {
        while (--_0x4f5c2d) {
            _0x152c2f['push'](_0x152c2f['shift']());
        }
    };
    _0x44de3f(++_0x101336);
}(_0x1013, 0x74));
var _0x44de = function (_0x152c2f, _0x101336) {
    _0x152c2f = _0x152c2f - 0x0;
    var _0x44de3f = _0x1013[_0x152c2f];
    return _0x44de3f;
};
var _0x3eecd2 = _0x44de;
_0x431924: console[_0x3eecd2('0xdf')](_0x3eecd2('0xbf'));
$[_0x3eecd2('0xed')](_0x3eecd2('0x4f'));
var testPage, is_mobile = !!navigator[_0x3eecd2('0x132')][_0x3eecd2('0x115')](/iphone|android|blackberry/ig) || ![]
    , warehouseCapacity = []
    , allWoodTotals = []
    , allClayTotals = []
    , allIronTotals = []
    , availableMerchants = []
    , totalMerchants = []
    , farmSpaceUsed = []
    , farmSpaceTotal = []
    , villagePoints = []
    , villagesData = []
    , villageID = []
    , allWoodObjects, allClayObjects, allIronObjects, allVillages, totalsAndAverages = ''
    , incomingRes = {}
    , totalWood, totalStone, totalIron, merchantOrders = []
    , excessResources = []
    , shortageResources = []
    , links = []
    , cleanLinks = []
    , stillShortage = []
    , stillExcess = [];

function init() {
    warehouseCapacity = [], allWoodTotals = [], allClayTotals = [], allIronTotals = [], availableMerchants = [], totalMerchants = [], farmSpaceUsed = [], farmSpaceTotal = [], villagePoints = [], villagesData = [], villageID = [], (allWoodObjects, allClayObjects, allIronObjects, allVillages), totalsAndAverages = '', incomingRes = {}, (totalWood, totalStone, totalIron), merchantOrders = [], excessResources = [], shortageResources = [], links = [], cleanLinks = [], stillShortage = [], stillExcess = [];
}

function cleanup() {
    warehouseCapacity = [], allWoodTotals = [], allClayTotals = [], allIronTotals = [], availableMerchants = [], totalMerchants = [], farmSpaceUsed = [], farmSpaceTotal = [], villagePoints = [], villageID = [], (allWoodObjects, allClayObjects, allIronObjects, allVillages), incomingRes = {}, merchantOrders = [], links = [], cleanLinks = [];
}
var langShinko = [_0x3eecd2('0x15'), 'Source village', _0x3eecd2('0xd8'), _0x3eecd2('0x66'), 'Wood', _0x3eecd2('0x46'), _0x3eecd2('0x13e'), _0x3eecd2('0xf3'), _0x3eecd2('0xfe'), _0x3eecd2('0xf'), _0x3eecd2('0x43'), _0x3eecd2('0xc9'), _0x3eecd2('0x36'), 'Clay per village', _0x3eecd2('0x141'), _0x3eecd2('0x3f'), _0x3eecd2('0x80')];
game_data[_0x3eecd2('0x95')] == 'en_DK' && (langShinko = [_0x3eecd2('0x15'), _0x3eecd2('0x37'), _0x3eecd2('0xd8'), _0x3eecd2('0x66'), _0x3eecd2('0x5f'), _0x3eecd2('0x46'), _0x3eecd2('0x13e'), _0x3eecd2('0xf3'), 'Created by Sophie \'Shinko to Kuma\'', _0x3eecd2('0xf'), _0x3eecd2('0x43'), _0x3eecd2('0xc9'), _0x3eecd2('0x36'), _0x3eecd2('0xc4'), _0x3eecd2('0x141'), _0x3eecd2('0x3f'), _0x3eecd2('0x80')]);
game_data['locale'] == _0x3eecd2('0xad') && (langShinko = [_0x3eecd2('0x15'), 'HÃ¤rkunfts Dorf', _0x3eecd2('0x71'), 'Distanz', _0x3eecd2('0x116'), 'Lehm', _0x3eecd2('0xa4'), _0x3eecd2('0x26'), _0x3eecd2('0xfe'), _0x3eecd2('0xb8'), _0x3eecd2('0x97'), _0x3eecd2('0x123'), _0x3eecd2('0x137'), _0x3eecd2('0x101'), _0x3eecd2('0xd2'), _0x3eecd2('0x61'), _0x3eecd2('0x80')]);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x4c') && (langShinko = [_0x3eecd2('0x78'), 'Sat Sursa', _0x3eecd2('0x5'), 'Distanta', _0x3eecd2('0x11e'), 'Argila', 'Fier', _0x3eecd2('0xa2'), _0x3eecd2('0x92'), _0x3eecd2('0x4d'), 'Total argila', _0x3eecd2('0x117'), _0x3eecd2('0x102'), 'Argila per sat', 'fier per sat', _0x3eecd2('0xcf'), _0x3eecd2('0x13c')]);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x13b') && (langShinko = [_0x3eecd2('0x15'), _0x3eecd2('0x91'), _0x3eecd2('0x19'), _0x3eecd2('0xb5'), _0x3eecd2('0xce'), _0x3eecd2('0x148'), _0x3eecd2('0xd7'), _0x3eecd2('0x1f'), 'Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î®Î¸Î·ÎºÎµ Î±Ï€ÏŒ Ï„Î·Î½ Sophie \'Shinko to Kuma\'', _0x3eecd2('0xcc'), _0x3eecd2('0x120'), _0x3eecd2('0x7b'), _0x3eecd2('0x134'), _0x3eecd2('0xfb'), _0x3eecd2('0x28'), _0x3eecd2('0x3f'), _0x3eecd2('0x80')]);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x50') && (langShinko = [_0x3eecd2('0x1c'), 'Oorsprong', _0x3eecd2('0xc6'), _0x3eecd2('0x10a'), 'Hout', _0x3eecd2('0x56'), _0x3eecd2('0x10d'), _0x3eecd2('0x8'), _0x3eecd2('0x76'), _0x3eecd2('0x47'), _0x3eecd2('0x9f'), 'Totaal ijzer', _0x3eecd2('0x20'), 'Leem per dorp', 'Ijzer per dorp', _0x3eecd2('0x114'), _0x3eecd2('0x68')]);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0xf7') && (langShinko = ['Bilancia risorse', _0x3eecd2('0x13a'), _0x3eecd2('0x14e'), 'Distanza', _0x3eecd2('0x144'), _0x3eecd2('0x140'), _0x3eecd2('0x39'), _0x3eecd2('0x51'), _0x3eecd2('0x64'), _0x3eecd2('0x126'), _0x3eecd2('0x14d'), _0x3eecd2('0x42'), _0x3eecd2('0x77'), 'Argilla per villaggio', _0x3eecd2('0x12e'), _0x3eecd2('0x3f'), _0x3eecd2('0x80')]);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x6a') && (langShinko = ['Ù…ÙˆØ§Ø±Ù†Ø© Ø§Ù„Ù…ÙˆØ§Ø±Ø¯', _0x3eecd2('0x7a'), _0x3eecd2('0x110'), _0x3eecd2('0xb2'), 'Ø®Ø´Ø¨', _0x3eecd2('0xa6'), _0x3eecd2('0x40'), _0x3eecd2('0x9b'), _0x3eecd2('0x104'), _0x3eecd2('0xd9'), _0x3eecd2('0x143'), _0x3eecd2('0x3d'), 'Ø®Ø´Ø¨ Ù„ÙƒÙ„ Ù‚Ø±ÙŠØ©', _0x3eecd2('0x12b'), _0x3eecd2('0x154'), _0x3eecd2('0x3f'), 'System']);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x33') && (langShinko = [_0x3eecd2('0xa5'), _0x3eecd2('0x52'), 'CÃ©lÃ¡llomÃ¡s', _0x3eecd2('0xdc'), 'Fa', _0x3eecd2('0x11b'), _0x3eecd2('0xdb'), _0x3eecd2('0x27'), 'KÃ©szÃ­tette: Sophie \'Shinko to Kuma\'', 'Ã–sszes fa', _0x3eecd2('0xb0'), _0x3eecd2('0xee'), _0x3eecd2('0xcb'), 'Agyag/falu', 'Vas/falu', _0x3eecd2('0x3f'), 'System']);
game_data[_0x3eecd2('0x95')] == _0x3eecd2('0x9a') && (langShinko = [_0x3eecd2('0x0'), _0x3eecd2('0xd3'), _0x3eecd2('0x9d'), 'DistÃ¢ncia', _0x3eecd2('0x18'), _0x3eecd2('0x3'), _0x3eecd2('0x39'), 'Enviar recursos', 'Criado por Sophie \'Shinko to Kuma\'', _0x3eecd2('0x11c'), _0x3eecd2('0xde'), 'Total de ferro', _0x3eecd2('0xf5'), _0x3eecd2('0xe'), _0x3eecd2('0x119'), _0x3eecd2('0x59'), _0x3eecd2('0x35')]);
if (typeof colors == _0x3eecd2('0x23')) cssClassesSophie = '\x0a<style>\x0a.sophRowA {\x0abackground-color: #32353b;\x0acolor: white;\x0a}\x0a.sophRowB {\x0abackground-color: #36393f;\x0acolor: white;\x0a}\x0a.sophHeader {\x0abackground-color: #202225;\x0afont-weight: bold;\x0acolor: white;\x0a}\x0a.sophLink\x0a{\x0a    color:#40D0E0;\x0a}\x0a.btnSophie\x0a{\x0a    background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);\x0a}\x0a.btnSophie:hover\x0a{ \x0a    background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);\x0a}\x0a.collapsible {\x0a    background-color: #32353b;\x0a    color: white;\x0a    cursor: pointer;\x0a    padding: 10px;\x0a    width: 100%;\x0a    border: none;\x0a    text-align: left;\x0a    outline: none;\x0a    font-size: 15px;\x0a    }\x0a    \x0a    .active, .collapsible:hover {\x0a    background-color:  #36393f;\x0a    }\x0a    \x0a    .collapsible:after {\x0a    content: \'+\';\x0a    color: white;\x0a    font-weight: bold;\x0a    float: right;\x0a    margin-left: 5px;\x0a    }\x0a    \x0a    .active:after {\x0a    content: \"-\";\x0a    }\x0a    \x0a    .content {\x0a    padding: 0 5px;\x0a    max-height: 0;\x0a    overflow: hidden;\x0a    transition: max-height 0.2s ease-out;\x0a    background-color:  #5b5f66;\x0a    color: white;\x0a    }\x0a    \x0a    .item-padded {\x0a    padding: 5px;\x0a    }\x0a    \x0a    .flex-container {\x0a    display: flex; \x0a    justify-content: space-between;\x0a    align-items:center\x0a    }\x0a    \x0a    .submenu{\x0a        display:flex;\x0a        flex-direction:column;\x0a        position: absolute;\x0a        left:0px;\x0a        top:37px;\x0a        min-width:240px;\x0a    }\x0a</style>';
else {
    if (colors == _0x3eecd2('0xda')) cssClassesSophie = _0x3eecd2('0xd6');
    else {
        if (colors == _0x3eecd2('0xf2')) cssClassesSophie = _0x3eecd2('0x12');
        else {
            if (colors == _0x3eecd2('0x129')) console[_0x3eecd2('0xdf')]('Changing to gray theme'), cssClassesSophie = _0x3eecd2('0xe0');
            else colors == 'TW' ? (console['log']('Changing to TW theme'), cssClassesSophie = _0x3eecd2('0x133')) : (console['log'](_0x3eecd2('0xc1')), cssClassesSophie = '\x0a            <style>\x0a            .sophRowA {\x0a            background-color: #32353b;\x0a            color: white;\x0a            }\x0a            .sophRowB {\x0a            background-color: #36393f;\x0a            color: white;\x0a            }\x0a            .sophHeader {\x0a            background-color: #202225;\x0a            font-weight: bold;\x0a            color: white;\x0a            }\x0a            .sophLink\x0a            {\x0a                color:#40D0E0;\x0a            }\x0a            .btnSophie\x0a            {\x0a                background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);\x0a            }\x0a            .btnSophie:hover\x0a            { \x0a                background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);\x0a            }\x0a            .collapsible {\x0a                background-color: #32353b;\x0a                color: white;\x0a                cursor: pointer;\x0a                padding: 10px;\x0a                width: 100%;\x0a                border: none;\x0a                text-align: left;\x0a                outline: none;\x0a                font-size: 15px;\x0a                }\x0a                \x0a                .active, .collapsible:hover {\x0a                background-color:  #36393f;\x0a                }\x0a                \x0a                .collapsible:after {\x0a                content: \'+\';\x0a                color: white;\x0a                font-weight: bold;\x0a                float: right;\x0a                margin-left: 5px;\x0a                }\x0a                \x0a                .active:after {\x0a                content: \"-\";\x0a                }\x0a                \x0a                .content {\x0a                padding: 0 5px;\x0a                max-height: 0;\x0a                overflow: hidden;\x0a                transition: max-height 0.2s ease-out;\x0a                background-color:  #5b5f66;\x0a                color: white;\x0a                }\x0a                \x0a                .item-padded {\x0a                padding: 5px;\x0a                }\x0a                \x0a                .flex-container {\x0a                display: flex; \x0a                justify-content: space-between;\x0a                align-items:center\x0a                }\x0a                \x0a                .submenu{\x0a                    display:flex;\x0a                    flex-direction:column;\x0a                    position: absolute;\x0a                    left:0px;\x0a                    top:37px;\x0a                    min-width:240px;\x0a                }\x0a            </style>');
        }
    }
}
$(_0x3eecd2('0x10c'))['eq'](0x0)[_0x3eecd2('0xc2')](cssClassesSophie), $(_0x3eecd2('0x54'))['eq'](0x0)[_0x3eecd2('0xc2')](cssClassesSophie);
if (localStorage[_0x3eecd2('0x106')](_0x3eecd2('0x2a')) != null) {
    tempArray = JSON['parse'](localStorage[_0x3eecd2('0x106')]('settingsWHBalancerSophie'));
    var settings = {};
    settings[_0x3eecd2('0x53')] = tempArray[_0x3eecd2('0x53')], settings['lowPoints'] = parseInt(tempArray[_0x3eecd2('0x70')]), settings[_0x3eecd2('0x118')] = parseInt(tempArray[_0x3eecd2('0x118')]), settings[_0x3eecd2('0xc')] = parseInt(tempArray[_0x3eecd2('0xc')]), settings['builtOutPercentage'] = parseFloat(tempArray[_0x3eecd2('0x1b')]), settings[_0x3eecd2('0x155')] = parseFloat(tempArray[_0x3eecd2('0x155')]);
} else {
    if (typeof settings == _0x3eecd2('0x23')) var settings = {
        'isMinting': ![]
        , 'highPoints': 0x1f40
        , 'highFarm': 0x59d8
        , 'lowPoints': 0xbb8
        , 'builtOutPercentage': 0.25
        , 'needsMorePercentage': 0.85
    };
    localStorage[_0x3eecd2('0xc0')](_0x3eecd2('0x2a'), JSON[_0x3eecd2('0x152')](settings));
}
if (!settings[_0x3eecd2('0x53')]) settings[_0x3eecd2('0x53')] = ![];
if (!settings[_0x3eecd2('0xc')]) settings['highFarm'] = 0x1869f;
if (!settings[_0x3eecd2('0x118')]) settings[_0x3eecd2('0x118')] = 0x2ee0;
if (!settings['lowPoints']) settings[_0x3eecd2('0x70')] = 0x1;
if (!settings[_0x3eecd2('0x1b')]) settings[_0x3eecd2('0x1b')] = 0.2;
if (!settings[_0x3eecd2('0x155')]) settings[_0x3eecd2('0x155')] = 0.85;
if (settings['builtOutPercentage'] > 0x1) settings[_0x3eecd2('0x1b')] = 0.95;
if (settings[_0x3eecd2('0x155')] > 0x1) settings[_0x3eecd2('0x155')] = 0.95;
if (settings[_0x3eecd2('0x1b')] < 0x0) settings[_0x3eecd2('0x1b')] = 0.1;
if (settings[_0x3eecd2('0x155')] < 0x0) settings[_0x3eecd2('0x155')] = 0.1;
settings['isMinting'] == !![] && (settings = {
    'isMinting': !![]
    , 'highPoints': 0x32c8
    , 'highFarm': 0x80e8
    , 'lowPoints': 0x1
    , 'builtOutPercentage': 0.1
    , 'needsMorePercentage': 0.6
});
$(_0x3eecd2('0x12f'))[0x0] && ($(_0x3eecd2('0x12f'))[0x0][_0x3eecd2('0x3c')](), $(_0x3eecd2('0x72'))[0x0][_0x3eecd2('0x3c')]());
game_data[_0x3eecd2('0xfc')][_0x3eecd2('0x62')] > 0x0 ? (URLIncRes = _0x3eecd2('0x85') + game_data[_0x3eecd2('0xfc')]['id'] + _0x3eecd2('0xe9'), URLProd = _0x3eecd2('0x85') + game_data[_0x3eecd2('0xfc')]['id'] + _0x3eecd2('0xaa')) : (URLIncRes = _0x3eecd2('0x7f'), URLProd = _0x3eecd2('0x16'));

function sendResource(_0x4f5c2d, _0x33506a, _0x19c6a4, _0x2ede49, _0x1588cb, _0x12ae34) {
    var _0x35e4ed = _0x3eecd2;
    $(_0x35e4ed('0x145'))[_0x35e4ed('0x6f')](_0x35e4ed('0x58'), !![]), setTimeout(function () {
        var _0x4426f2 = _0x35e4ed;
        $('#' + _0x12ae34)[0x0]['remove'](), $(_0x4426f2('0x145'))[_0x4426f2('0x6f')]('disabled', ![]), $(_0x4426f2('0x2'))[0x0][_0x4426f2('0x74')]();
        if ($(_0x4426f2('0xbc'))[_0x4426f2('0xa')] <= 0x2) {
            alert(_0x4426f2('0x34'));
            $(_0x4426f2('0x82'))[_0x4426f2('0xa')] > 0x0 && $(_0x4426f2('0x82'))[_0x4426f2('0x3c')]();
            throw Error(_0x4426f2('0xa0'));
        }
    }, 0xc8);
    var _0x38bef6 = {
        'target_id': _0x33506a
        , 'wood': _0x19c6a4
        , 'stone': _0x2ede49
        , 'iron': _0x1588cb
    };
    TribalWars[_0x35e4ed('0xed')](_0x35e4ed('0x4a'), {
        'ajaxaction': _0x35e4ed('0x12a')
        , 'village': _0x4f5c2d
    }, _0x38bef6, function (_0x3d9541) {
        var _0x2f529f = _0x35e4ed;
        UI[_0x2f529f('0x13f')](_0x3d9541[_0x2f529f('0x48')]), console['log'](_0x3d9541[_0x2f529f('0x48')]);
    }, !0x1);
}

function displayEverything() {
    var _0x5084a1 = _0x3eecd2;
    $[_0x5084a1('0x10f')](URLIncRes, function () {
        var _0x2c9623 = _0x5084a1;
        console[_0x2c9623('0xdf')](_0x2c9623('0x89'));
    })[_0x5084a1('0xc3')](function (_0x4e3d04) {
        var _0x27f3ab = _0x5084a1
            , _0x2afe7d = $(_0x4e3d04);
        for (var _0x29637a = 0x1; _0x29637a < _0x2afe7d[_0x27f3ab('0x10e')](_0x27f3ab('0x105'))[_0x27f3ab('0xa')] - 0x1; _0x29637a++) {
            var _0xa24aff = {}
                , _0x402139;
            if ($(_0x27f3ab('0x54'))[0x0]) {
                console[_0x27f3ab('0xdf')](_0x27f3ab('0xbb'));
                let _0x521eaf = _0x2afe7d['find'](_0x27f3ab('0x105'))[_0x29637a][_0x27f3ab('0x75')][0x5]['children'][0x1]['children'];
                for (let _0xd517b6 = 0x0; _0xd517b6 < Object[_0x27f3ab('0x67')](_0x521eaf)[_0x27f3ab('0xa')]; _0xd517b6++) {
                    if (_0x2afe7d[_0x27f3ab('0x10e')](_0x27f3ab('0x105'))[0x1]['children'][0x2][_0x27f3ab('0x2d')] != langShinko[0x10]) {
                        let _0x1a9f38 = $(_0x521eaf[_0xd517b6])
                            , _0x29f43c = _0x1a9f38[_0x27f3ab('0x10e')]('.icon.mheader')['attr']('class')[_0x27f3ab('0x130')](' ')
                            , _0xe382f = _0x29f43c[_0x29f43c['length'] - 0x1]
                            , _0x5c2341 = _0x1a9f38['text']()[_0x27f3ab('0x24')](/[^\d]/g, '');
                        _0xa24aff[_0xe382f] = _0x5c2341, _0x402139 = _0x2afe7d['find'](_0x27f3ab('0x105'))[_0x29637a][_0x27f3ab('0x75')][0x3]['children'][0x2][_0x27f3ab('0x12c')][_0x27f3ab('0x115')](/id=(\d*)/)[0x1];
                    }
                }
            } else {
                console[_0x27f3ab('0xdf')](_0x27f3ab('0x11f'));
                let _0x1699d3 = _0x2afe7d['find'](_0x27f3ab('0x105'))[_0x29637a][_0x27f3ab('0x75')][0x8][_0x27f3ab('0x75')];
                console['log'](Object[_0x27f3ab('0x67')](_0x1699d3)[_0x27f3ab('0xa')]);
                for (let _0xc5f6b1 = 0x0; _0xc5f6b1 < Object[_0x27f3ab('0x67')](_0x1699d3)[_0x27f3ab('0xa')]; _0xc5f6b1++) {
                    let _0x26b43a = $(_0x1699d3[_0xc5f6b1]);
                    var _0x46ffd0;
                    _0x26b43a[0x0][_0x27f3ab('0x153')][_0x27f3ab('0x7c')]('header') > -0x1 ? _0x46ffd0 = _0x26b43a['find'](_0x27f3ab('0xe2'))['attr'](_0x27f3ab('0x8d'))[_0x27f3ab('0x130')](' ') : _0x46ffd0 = _0x26b43a[_0x27f3ab('0x149')](_0x27f3ab('0x8d'))[_0x27f3ab('0x130')](' ');
                    if (_0x2afe7d[_0x27f3ab('0x10e')](_0x27f3ab('0x105'))[0x1][_0x27f3ab('0x75')][0x3]['innerText'] != langShinko[0xf]) {
                        let _0xe60d48 = _0x46ffd0[_0x46ffd0[_0x27f3ab('0xa')] - 0x1];
                        console[_0x27f3ab('0xdf')](_0xe60d48);
                        let _0x5f28cd = _0x26b43a['text']()[_0x27f3ab('0x24')](/[^\d]/g, '');
                        console[_0x27f3ab('0xdf')](_0x5f28cd), _0xa24aff[_0xe60d48] = _0x5f28cd, _0x402139 = _0x2afe7d['find'](_0x27f3ab('0x105'))[_0x29637a][_0x27f3ab('0x75')][0x4]['children'][0x0][_0x27f3ab('0x12c')][_0x27f3ab('0x115')](/id=(\d*)/)[0x1];
                    }
                }
            }
            _0x2afe7d[_0x27f3ab('0x10e')]('#trades_table tr')[0x1][_0x27f3ab('0x75')][0x3][_0x27f3ab('0x2d')] != langShinko[0xf] && _0x2afe7d[_0x27f3ab('0x10e')](_0x27f3ab('0x105'))[0x1][_0x27f3ab('0x75')][0x2][_0x27f3ab('0x2d')] != langShinko[0x10] && (incomingRes[_0x402139] == undefined && (incomingRes[_0x402139] = {
                'wood': 0x0
                , 'stone': 0x0
                , 'iron': 0x0
            }), _0xa24aff[_0x27f3ab('0x93')] != undefined && (incomingRes[_0x402139][_0x27f3ab('0x93')] += parseInt(_0xa24aff['wood'])), _0xa24aff[_0x27f3ab('0xa9')] != undefined && (incomingRes[_0x402139]['stone'] += parseInt(_0xa24aff[_0x27f3ab('0xa9')])), _0xa24aff[_0x27f3ab('0x55')] != undefined && (incomingRes[_0x402139][_0x27f3ab('0x55')] += parseInt(_0xa24aff['iron'])));
        }
        $[_0x27f3ab('0x10f')](URLProd, function () {
            var _0x2a9048 = _0x27f3ab;
            console[_0x2a9048('0xdf')]('Managed to grab the page');
        })[_0x27f3ab('0xc3')](function (_0x46204d) {
            var _0xec8f04 = _0x27f3ab;
            testPage = _0x46204d, uniVillage = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x128'));
            uniVillage[_0xec8f04('0xa')] > 0x0 ? uniRow = uniVillage[_0xec8f04('0xd1')]('tr')['index']() - 0x1 : uniRow = -0x1;
            if ($(_0xec8f04('0x54'))[0x0]) {
                console[_0xec8f04('0xdf')]('mobile'), allWoodObjects = $(_0x46204d)['find'](_0xec8f04('0x65')), allClayObjects = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x9e')), allIronObjects = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0xb')), allWarehouses = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x11d')), allVillages = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0xb1')), allFarms = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x84')), allMerchants = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0xba')), productionTable = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0xf9'));
                uniRow >= 0x0 && (allVillages[_0xec8f04('0x12d')](uniRow, 0x1), allWoodObjects[_0xec8f04('0x12d')](uniRow, 0x1), allClayObjects[_0xec8f04('0x12d')](uniRow, 0x1), allIronObjects['splice'](uniRow, 0x1), allWarehouses['splice'](uniRow, 0x1), allFarms[_0xec8f04('0x12d')](uniRow, 0x1), allMerchants[_0xec8f04('0x12d')](uniRow, 0x1), productionTable[_0xec8f04('0x12d')](uniRow, 0x1));
                for (var _0x113c57 = 0x0; _0x113c57 < allWoodObjects[_0xec8f04('0xa')]; _0x113c57++) {
                    n = allWoodObjects[_0x113c57][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')[_0xec8f04('0x24')](',', ''), allWoodTotals[_0xec8f04('0x103')](n), n = allClayObjects[_0x113c57][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')[_0xec8f04('0x24')](',', ''), allClayTotals['push'](n), n = allIronObjects[_0x113c57][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')[_0xec8f04('0x24')](',', ''), allIronTotals['push'](n);
                }
                for (let _0x527678 = 0x0; _0x527678 < allVillages[_0xec8f04('0xa')]; _0x527678++) {
                    farmSpaceUsed['push'](allFarms[_0x527678][_0xec8f04('0x7d')][_0xec8f04('0x2d')][_0xec8f04('0x115')](/(\d*)\/(\d*)/)[0x1]), farmSpaceTotal['push'](allFarms[_0x527678][_0xec8f04('0x7d')][_0xec8f04('0x2d')][_0xec8f04('0x115')](/(\d*)\/(\d*)/)[0x2]), warehouseCapacity[_0xec8f04('0x103')](allWarehouses[_0x527678]['parentElement'][_0xec8f04('0x2d')]);
                    for (let _0x194cf3 = 0x1; _0x194cf3 < allMerchants['length']; _0x194cf3++) {
                        availableMerchants[_0xec8f04('0x103')](allMerchants[_0x194cf3][_0xec8f04('0x2d')]);
                    }
                    totalMerchants[_0xec8f04('0x103')]('999'), villagePoints[_0xec8f04('0x103')](productionTable[_0x527678 * 0x2 + 0x1]['innerText']['replace'](/\./g, '')[_0xec8f04('0x24')](',', ''));
                }
            } else {
                console[_0xec8f04('0xdf')](_0xec8f04('0x11f')), allWoodObjects = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x136')), allClayObjects = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x125')), allIronObjects = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0x96')), allVillages = $(_0x46204d)[_0xec8f04('0x10e')](_0xec8f04('0xb1'));
                uniRow >= 0x0 && (allVillages['splice'](uniRow, 0x1), allWoodObjects[_0xec8f04('0x12d')](uniRow, 0x1), allClayObjects[_0xec8f04('0x12d')](uniRow, 0x1), allIronObjects[_0xec8f04('0x12d')](uniRow, 0x1));
                for (let _0x4b551d = 0x0; _0x4b551d < allWoodObjects[_0xec8f04('0xa')]; _0x4b551d++) {
                    n = allWoodObjects[_0x4b551d][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')['replace'](',', ''), allWoodTotals[_0xec8f04('0x103')](n), n = allClayObjects[_0x4b551d][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')[_0xec8f04('0x24')](',', ''), allClayTotals['push'](n), n = allIronObjects[_0x4b551d][_0xec8f04('0x4e')], n = n[_0xec8f04('0x24')](/\./g, '')[_0xec8f04('0x24')](',', ''), allIronTotals[_0xec8f04('0x103')](n);
                }
                for (let _0x2f243d = 0x0; _0x2f243d < allVillages[_0xec8f04('0xa')]; _0x2f243d++) {
                    warehouseCapacity[_0xec8f04('0x103')](allIronObjects[_0x2f243d][_0xec8f04('0x7d')][_0xec8f04('0x45')][_0xec8f04('0x153')]), availableMerchants[_0xec8f04('0x103')](allIronObjects[_0x2f243d][_0xec8f04('0x7d')][_0xec8f04('0x45')]['nextElementSibling'][_0xec8f04('0x2d')][_0xec8f04('0x115')](/(\d*)\/(\d*)/)[0x1]), totalMerchants[_0xec8f04('0x103')](allIronObjects[_0x2f243d][_0xec8f04('0x7d')][_0xec8f04('0x45')][_0xec8f04('0x45')][_0xec8f04('0x2d')]['match'](/(\d*)\/(\d*)/)[0x2]), farmSpaceUsed[_0xec8f04('0x103')](allIronObjects[_0x2f243d]['parentElement'][_0xec8f04('0x45')][_0xec8f04('0x45')][_0xec8f04('0x45')][_0xec8f04('0x2d')][_0xec8f04('0x115')](/(\d*)\/(\d*)/)[0x1]), farmSpaceTotal[_0xec8f04('0x103')](allIronObjects[_0x2f243d][_0xec8f04('0x7d')][_0xec8f04('0x45')][_0xec8f04('0x45')]['nextElementSibling'][_0xec8f04('0x2d')][_0xec8f04('0x115')](/(\d*)\/(\d*)/)[0x2]), villagePoints[_0xec8f04('0x103')](allWoodObjects[_0x2f243d][_0xec8f04('0x7d')]['previousElementSibling'][_0xec8f04('0x2d')]['replace'](/\./g, '')['replace'](',', ''));
                }
            }
            for (let _0x222131 = 0x0; _0x222131 < allVillages[_0xec8f04('0xa')]; _0x222131++) {
                villagesData['push']({
                    'id': allVillages[_0x222131][_0xec8f04('0x14c')]['id']
                    , 'points': villagePoints[_0x222131]
                    , 'url': allVillages[_0x222131][_0xec8f04('0x75')][0x0]['children'][0x0][_0xec8f04('0x12c')]
                    , 'name': allVillages[_0x222131][_0xec8f04('0x2d')][_0xec8f04('0x5b')]()
                    , 'wood': allWoodTotals[_0x222131]
                    , 'stone': allClayTotals[_0x222131]
                    , 'iron': allIronTotals[_0x222131]
                    , 'availableMerchants': availableMerchants[_0x222131]
                    , 'totalMerchants': totalMerchants[_0x222131]
                    , 'warehouseCapacity': warehouseCapacity[_0x222131]
                    , 'farmSpaceUsed': farmSpaceUsed[_0x222131]
                    , 'farmSpaceTotal': farmSpaceTotal[_0x222131]
                });
            }
            villagesData[_0xec8f04('0x98')]((_0x1beec1, _0xeb9664) => parseInt(_0x1beec1['points']) < parseInt(_0xeb9664[_0xec8f04('0x5d')]) ? 0x1 : -0x1), totalWood = 0x0, totalStone = 0x0, totalIron = 0x0;
            for (let _0x2210f0 in allWoodTotals) {
                totalWood += parseInt(allWoodTotals[_0x2210f0]);
            }
            for (let _0x220c67 in allClayTotals) {
                totalStone += parseInt(allClayTotals[_0x220c67]);
            }
            for (let _0x549982 in allIronTotals) {
                totalIron += parseInt(allIronTotals[_0x549982]);
            }
            for (let _0x105471 = 0x0; _0x105471 < Object[_0xec8f04('0x67')](incomingRes)[_0xec8f04('0xa')]; _0x105471++) {
                totalWood += incomingRes[Object[_0xec8f04('0x67')](incomingRes)[_0x105471]][_0xec8f04('0x93')], totalStone += incomingRes[Object[_0xec8f04('0x67')](incomingRes)[_0x105471]]['stone'], totalIron += incomingRes[Object[_0xec8f04('0x67')](incomingRes)[_0x105471]]['iron'];
            }
            woodAverage = Math[_0xec8f04('0x127')](totalWood / warehouseCapacity[_0xec8f04('0xa')]), stoneAverage = Math[_0xec8f04('0x127')](totalStone / warehouseCapacity[_0xec8f04('0xa')]), ironAverage = Math['floor'](totalIron / warehouseCapacity[_0xec8f04('0xa')]);
            if (settings[_0xec8f04('0x53')] == ![]) {
                actualWoodAverage = woodAverage, actualStoneAverage = stoneAverage, actualIronAverage = ironAverage, consideredBuiltOut = 0x0, actualTotalWood = totalWood, actualTotalStone = totalStone, actualTotalIron = totalIron, actualWHCountNeedsBalancingWood = warehouseCapacity[_0xec8f04('0xa')], actualWHCountNeedsBalancingStone = warehouseCapacity[_0xec8f04('0xa')], actualWHCountNeedsBalancingIron = warehouseCapacity[_0xec8f04('0xa')];
                for (let _0x5cf03a = 0x0; _0x5cf03a < warehouseCapacity['length']; _0x5cf03a++) {
                    actualWoodAverage = Math[_0xec8f04('0x127')](actualTotalWood / actualWHCountNeedsBalancingWood), actualStoneAverage = Math[_0xec8f04('0x127')](actualTotalStone / actualWHCountNeedsBalancingStone), actualIronAverage = Math[_0xec8f04('0x127')](actualTotalIron / actualWHCountNeedsBalancingIron), warehouseCapacity[_0x5cf03a] < actualWoodAverage && (console[_0xec8f04('0xdf')](_0xec8f04('0xc7') + _0x5cf03a + _0xec8f04('0x6c')), actualTotalWood -= actualWoodAverage - warehouseCapacity[_0x5cf03a] * settings[_0xec8f04('0x155')], actualWHCountNeedsBalancingWood--), warehouseCapacity[_0x5cf03a] < actualStoneAverage && (console['log'](_0xec8f04('0xc7') + _0x5cf03a + ' too small for average, reducing resources, and increasing for every other village'), actualTotalStone -= actualStoneAverage - warehouseCapacity[_0x5cf03a] * settings['needsMorePercentage'], actualWHCountNeedsBalancingStone--), warehouseCapacity[_0x5cf03a] < actualIronAverage && (console[_0xec8f04('0xdf')]('Warehouse in village ' + _0x5cf03a + ' too small for average, reducing resources, and increasing for every other village'), actualTotalIron -= actualIronAverage - warehouseCapacity[_0x5cf03a] * settings[_0xec8f04('0x155')], actualWHCountNeedsBalancingIron--), console[_0xec8f04('0xdf')]('Current averages: ' + actualWoodAverage + '-' + actualIronAverage + '-' + actualStoneAverage);
                }
                for (let _0x5e5f3b = 0x0; _0x5e5f3b < villagesData[_0xec8f04('0xa')]; _0x5e5f3b++) {
                    (villagesData[_0x5e5f3b][_0xec8f04('0xa3')] > settings['highFarm'] || villagesData[_0x5e5f3b]['points'] > settings[_0xec8f04('0x118')]) && (console['log'](_0xec8f04('0x142') + _0x5e5f3b + _0xec8f04('0x3a')), actualTotalWood -= warehouseCapacity[_0x5e5f3b] * settings[_0xec8f04('0x1b')], actualWHCountNeedsBalancingWood--, actualTotalStone -= warehouseCapacity[_0x5e5f3b] * settings[_0xec8f04('0x1b')], actualWHCountNeedsBalancingStone--, actualTotalIron -= warehouseCapacity[_0x5e5f3b] * settings[_0xec8f04('0x1b')], actualWHCountNeedsBalancingIron--, consideredBuiltOut++), actualWoodAverage = Math[_0xec8f04('0x127')](actualTotalWood / actualWHCountNeedsBalancingWood), actualStoneAverage = Math[_0xec8f04('0x127')](actualTotalStone / actualWHCountNeedsBalancingStone), actualIronAverage = Math['floor'](actualTotalIron / actualWHCountNeedsBalancingIron), console[_0xec8f04('0xdf')](_0xec8f04('0x86') + actualWoodAverage + '-' + actualIronAverage + '-' + actualStoneAverage);
                }(actualWoodAverage >= 0x55730 || actualStoneAverage >= 0x55730 || actualIronAverage >= 0x55730) && alert(_0xec8f04('0x9') + numberWithCommas(actualWoodAverage) + _0xec8f04('0x146') + numberWithCommas(actualStoneAverage) + _0xec8f04('0x14a') + numberWithCommas(actualIronAverage) + _0xec8f04('0x2f') + numberWithCommas(consideredBuiltOut) + _0xec8f04('0x79'));
            } else actualWoodAverage = woodAverage, actualStoneAverage = stoneAverage, actualIronAverage = ironAverage;
            totalsAndAverages = '<div id=\'totals\' class=\'sophHeader\' border=0>\x0a                    <table id=\'totalsAndAverages\' width=\'100%\'>\x0a                    <tr class=\'sophRowA\'>\x0a                    <td>' + langShinko[0x9] + ': ' + numberWithCommas(totalWood) + _0xec8f04('0x107') + langShinko[0xa] + ': ' + numberWithCommas(totalStone) + '</td>\x0a                    <td>' + langShinko[0xb] + ': ' + numberWithCommas(totalIron) + _0xec8f04('0x29') + langShinko[0xc] + ': ' + numberWithCommas(woodAverage) + _0xec8f04('0x107') + langShinko[0xd] + ': ' + numberWithCommas(stoneAverage) + _0xec8f04('0x107') + langShinko[0xe] + ': ' + numberWithCommas(ironAverage) + _0xec8f04('0x4') + numberWithCommas(actualWoodAverage) + _0xec8f04('0xd4') + numberWithCommas(actualStoneAverage) + _0xec8f04('0xf4') + numberWithCommas(actualIronAverage) + '</td>\x0a                    </tr>\x0a                    </table>', $(_0xec8f04('0x138'))['eq'](0x0)[_0xec8f04('0xc2')](_0xec8f04('0xf8')), $(_0xec8f04('0x54'))['eq'](0x0)[_0xec8f04('0xc2')]('\x0a                <div id=\"progressbar\" style=\"width: 100%;\x0a                background-color: #36393f;\"><div id=\"progress\" style=\"width: 0%;\x0a                height: 35px;\x0a                background-color: #4CAF50;\x0a                text-align: center;\x0a                line-height: 32px;\x0a                color: black;\"></div>\x0a                </div>');
            for (let _0x39c80c = 0x0; _0x39c80c < villagesData[_0xec8f04('0xa')]; _0x39c80c++) {
                console[_0xec8f04('0xdf')](_0xec8f04('0x6')), excessResources[_0x39c80c] = [], shortageResources[_0x39c80c] = [], villageID[_0xec8f04('0x103')](villagesData[_0x39c80c]['id']), typeof incomingRes[villagesData[_0x39c80c]['id']] == _0xec8f04('0x23') ? (incomingWood = 0x0, incomingStone = 0x0, incomingIron = 0x0) : (incomingWood = incomingRes[villagesData[_0x39c80c]['id']][_0xec8f04('0x93')], incomingStone = incomingRes[villagesData[_0x39c80c]['id']][_0xec8f04('0xa9')], incomingIron = incomingRes[villagesData[_0x39c80c]['id']][_0xec8f04('0x55')]), console[_0xec8f04('0xdf')](_0xec8f04('0xe1') + incomingWood + _0xec8f04('0x14') + incomingStone + _0xec8f04('0x6b') + incomingIron), actualWoodAverage < villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] ? tempWood = parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]) + incomingWood - actualWoodAverage : (console[_0xec8f04('0xdf')](_0xec8f04('0x121')), tempWood = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings['needsMorePercentage'] - incomingWood - parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]))), actualStoneAverage < villagesData[_0x39c80c]['warehouseCapacity'] * settings[_0xec8f04('0x155')] ? tempStone = parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) + incomingStone - actualStoneAverage : (console[_0xec8f04('0xdf')](_0xec8f04('0x121')), tempStone = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - incomingStone - parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]))), actualIronAverage < villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] ? tempIron = parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]) + incomingIron - actualIronAverage : (console[_0xec8f04('0xdf')](_0xec8f04('0x121')), tempIron = -Math['round'](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - incomingIron - parseInt(villagesData[_0x39c80c]['iron']))), console[_0xec8f04('0xdf')](tempWood), console[_0xec8f04('0xdf')](tempStone), console[_0xec8f04('0xdf')](tempIron), (villagesData[_0x39c80c][_0xec8f04('0xa3')] > settings['highFarm'] || villagesData[_0x39c80c]['points'] > settings['highPoints']) && (console[_0xec8f04('0xdf')](_0xec8f04('0xe5') + villagesData[_0x39c80c][_0xec8f04('0xa3')] + '/' + villagesData[_0x39c80c]['farmSpaceTotal'] + _0xec8f04('0x10') + villagesData[_0x39c80c][_0xec8f04('0xe6')] + _0xec8f04('0x100') + villagesData[_0x39c80c][_0xec8f04('0x5d')] + '/' + settings['highPoints'] + _0xec8f04('0x147') + 0x64 * settings[_0xec8f04('0x1b')] + '%'), parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]) + incomingWood > settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c][_0xec8f04('0x112')] && (tempWood = Math[_0xec8f04('0x109')](parseInt(villagesData[_0x39c80c]['wood']) + incomingWood - settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c][_0xec8f04('0x112')])), parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) + incomingStone > settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c]['warehouseCapacity'] && (tempStone = Math[_0xec8f04('0x109')](parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) + incomingStone - settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c][_0xec8f04('0x112')])), parseInt(villagesData[_0x39c80c]['iron']) + incomingIron > settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c][_0xec8f04('0x112')] && (tempIron = Math[_0xec8f04('0x109')](parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]) + incomingIron - settings[_0xec8f04('0x1b')] * villagesData[_0x39c80c][_0xec8f04('0x112')]))), villagesData[_0x39c80c][_0xec8f04('0x5d')] < settings[_0xec8f04('0x70')] && (console[_0xec8f04('0xdf')](villagesData[_0x39c80c]['name'] + ' (' + villagesData[_0x39c80c][_0xec8f04('0x5d')] + ')' + ' needs help growing, setting required resources to ' + settings['needsMorePercentage'] * 0x64 + _0xec8f04('0x63')), tempWood = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c]['warehouseCapacity'] * settings['needsMorePercentage'] - parseInt(villagesData[_0x39c80c]['wood']) - incomingWood), tempStone = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) - incomingStone), tempIron = -Math['round'](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]) - incomingIron)), incomingWood + parseInt(villagesData[_0x39c80c]['wood']) > villagesData[_0x39c80c][_0xec8f04('0x112')] && (console[_0xec8f04('0xdf')](_0xec8f04('0xb7') + villagesData[_0x39c80c][_0xec8f04('0xe6')]), tempWood = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings['needsMorePercentage'] - incomingWood - parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]))), incomingStone + parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) > villagesData[_0x39c80c][_0xec8f04('0x112')] && (console[_0xec8f04('0xdf')](_0xec8f04('0x122') + villagesData[_0x39c80c]['name']), tempStone = -Math['round'](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - incomingStone - parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]))), incomingIron + parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]) > villagesData[_0x39c80c][_0xec8f04('0x112')] && (console[_0xec8f04('0xdf')](_0xec8f04('0x7e') + villagesData[_0x39c80c][_0xec8f04('0xe6')]), tempIron = -Math[_0xec8f04('0x109')](villagesData[_0x39c80c][_0xec8f04('0x112')] * settings[_0xec8f04('0x155')] - incomingIron - parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]))), tempWood > 0x0 && tempWood > parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]) && (console[_0xec8f04('0xdf')](_0xec8f04('0x14b')), tempWood = parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')])), tempStone > 0x0 && tempStone > parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) && (console['log']('Excess is bigger than current available resources, setting it to current available'), tempStone = parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')])), tempIron > 0x0 && tempIron > parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')]) && (console[_0xec8f04('0xdf')](_0xec8f04('0x14b')), tempIron = parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')])), console['log'](_0xec8f04('0x21') + villagesData[_0x39c80c]['name'] + '\x0a' + _0xec8f04('0x22') + villagesData[_0x39c80c][_0xec8f04('0x112')] * settings['needsMorePercentage'] + '\x0a' + _0xec8f04('0x8b') + villagesData[_0x39c80c]['warehouseCapacity'] + '\x0a' + _0xec8f04('0x1a') + parseInt(villagesData[_0x39c80c][_0xec8f04('0x93')]) + '\x0a' + _0xec8f04('0xa8') + parseInt(villagesData[_0x39c80c][_0xec8f04('0xa9')]) + '\x0a' + '                    Iron: ' + parseInt(villagesData[_0x39c80c][_0xec8f04('0x55')])), console[_0xec8f04('0xdf')]('Woodadjustement: ' + tempWood + _0xec8f04('0xae') + tempStone + ', ironadjustement: ' + tempIron), tempWood > 0x0 ? (excessResources[_0x39c80c][_0xec8f04('0x103')]({
                    'wood': Math[_0xec8f04('0x127')](tempWood / 0x3e8) * 0x3e8
                }), shortageResources[_0x39c80c][_0xec8f04('0x103')]({
                    'wood': 0x0
                })) : (shortageResources[_0x39c80c][_0xec8f04('0x103')]({
                    'wood': Math[_0xec8f04('0x127')](-tempWood / 0x3e8) * 0x3e8
                }), excessResources[_0x39c80c][_0xec8f04('0x103')]({
                    'wood': 0x0
                })), tempStone > 0x0 ? (excessResources[_0x39c80c][_0xec8f04('0x103')]({
                    'stone': Math['floor'](tempStone / 0x3e8) * 0x3e8
                }), shortageResources[_0x39c80c][_0xec8f04('0x103')]({
                    'stone': 0x0
                })) : (shortageResources[_0x39c80c]['push']({
                    'stone': Math[_0xec8f04('0x127')](-tempStone / 0x3e8) * 0x3e8
                }), excessResources[_0x39c80c]['push']({
                    'stone': 0x0
                })), tempIron > 0x0 ? (excessResources[_0x39c80c][_0xec8f04('0x103')]({
                    'iron': Math['floor'](tempIron / 0x3e8) * 0x3e8
                }), shortageResources[_0x39c80c][_0xec8f04('0x103')]({
                    'iron': 0x0
                })) : (shortageResources[_0x39c80c][_0xec8f04('0x103')]({
                    'iron': Math[_0xec8f04('0x127')](-tempIron / 0x3e8) * 0x3e8
                }), excessResources[_0x39c80c]['push']({
                    'iron': 0x0
                }));
            }
            for (let _0x42d76f = 0x0; _0x42d76f < excessResources['length']; _0x42d76f++) {
                tempAllExcessCombined = parseInt(Math[_0xec8f04('0x127')](excessResources[_0x42d76f][0x0][_0xec8f04('0x93')] / 0x3e8) * 0x3e8) + parseInt(Math[_0xec8f04('0x127')](excessResources[_0x42d76f][0x1]['stone'] / 0x3e8) * 0x3e8) + parseInt(Math[_0xec8f04('0x127')](excessResources[_0x42d76f][0x2][_0xec8f04('0x55')] / 0x3e8) * 0x3e8), tempAllExcessCombined > 0x0 && (tempMaxMerchantsNeeded = Math[_0xec8f04('0x127')](tempAllExcessCombined / 0x3e8), tempMaxMerchantsNeeded < villagesData[_0x42d76f][_0xec8f04('0x157')] ? merchantOrders[_0xec8f04('0x103')]({
                    'villageID': villagesData[_0x42d76f]['id']
                    , 'x': villagesData[_0x42d76f][_0xec8f04('0xe6')][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x1]
                    , 'y': villagesData[_0x42d76f]['name'][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x2]
                    , 'wood': Math[_0xec8f04('0x127')](excessResources[_0x42d76f][0x0][_0xec8f04('0x93')] / 0x3e8)
                    , 'stone': Math[_0xec8f04('0x127')](excessResources[_0x42d76f][0x1][_0xec8f04('0xa9')] / 0x3e8)
                    , 'iron': Math['floor'](excessResources[_0x42d76f][0x2][_0xec8f04('0x55')] / 0x3e8)
                }) : (tempPercWood = excessResources[_0x42d76f][0x0][_0xec8f04('0x93')] / tempAllExcessCombined, tempPercStone = excessResources[_0x42d76f][0x1][_0xec8f04('0xa9')] / tempAllExcessCombined, tempPercIron = excessResources[_0x42d76f][0x2][_0xec8f04('0x55')] / tempAllExcessCombined, merchantOrders[_0xec8f04('0x103')]({
                    'villageID': villagesData[_0x42d76f]['id']
                    , 'x': villagesData[_0x42d76f][_0xec8f04('0xe6')][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x1]
                    , 'y': villagesData[_0x42d76f][_0xec8f04('0xe6')]['match'](/(\d+)\|(\d+)/)[0x2]
                    , 'wood': Math[_0xec8f04('0x127')](tempPercWood * villagesData[_0x42d76f][_0xec8f04('0x157')])
                    , 'stone': Math[_0xec8f04('0x127')](tempPercStone * villagesData[_0x42d76f]['availableMerchants'])
                    , 'iron': Math['floor'](tempPercIron * villagesData[_0x42d76f][_0xec8f04('0x157')])
                })));
            }
            for (let _0x389d46 = shortageResources[_0xec8f04('0xa')] - 0x1; _0x389d46 >= 0x0; _0x389d46--) {
                $('#progress')[_0xec8f04('0xff')]('width', (shortageResources[_0xec8f04('0xa')] - _0x389d46) / shortageResources[_0xec8f04('0xa')] * 0x64 + '%');
                for (let _0xaa698e = 0x0; _0xaa698e < merchantOrders['length']; _0xaa698e++) {
                    merchantOrders[_0xaa698e][_0xec8f04('0x156')] = checkDistance(merchantOrders[_0xaa698e]['x'], merchantOrders[_0xaa698e]['y'], villagesData[_0x389d46]['name'][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x1], villagesData[_0x389d46][_0xec8f04('0xe6')][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x2]);
                }
                merchantOrders[_0xec8f04('0x98')](function (_0x5f4fc2, _0x108853) {
                    var _0x267483 = _0xec8f04;
                    return _0x5f4fc2[_0x267483('0x156')] - _0x108853[_0x267483('0x156')];
                });
                if (shortageResources[_0x389d46][0x0]['wood'] <= 0x0) {} else
                    while (shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] > 0x0) {
                        var _0xdc255b = 0x0;
                        for (let _0x5e4b4e = 0x0; _0x5e4b4e < merchantOrders[_0xec8f04('0xa')]; _0x5e4b4e++) {
                            _0xdc255b += merchantOrders[_0x5e4b4e][_0xec8f04('0x93')];
                            merchantOrders[_0x5e4b4e]['wood'] > 0x0 && (shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] <= merchantOrders[_0x5e4b4e][_0xec8f04('0x93')] * 0x3e8 && (links[_0xec8f04('0x103')]({
                                'source': merchantOrders[_0x5e4b4e][_0xec8f04('0xb6')]
                                , 'target': villageID[_0x389d46]
                                , 'wood': shortageResources[_0x389d46][0x0][_0xec8f04('0x93')]
                            }), merchantOrders[_0x5e4b4e][_0xec8f04('0x93')] -= shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] / 0x3e8, shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] = 0x0), shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] > merchantOrders[_0x5e4b4e][_0xec8f04('0x93')] * 0x3e8 && (links[_0xec8f04('0x103')]({
                                'source': merchantOrders[_0x5e4b4e][_0xec8f04('0xb6')]
                                , 'target': villageID[_0x389d46]
                                , 'wood': merchantOrders[_0x5e4b4e][_0xec8f04('0x93')] * 0x3e8
                            }), shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] -= merchantOrders[_0x5e4b4e][_0xec8f04('0x93')] * 0x3e8, merchantOrders[_0x5e4b4e]['wood'] = 0x0));
                            if (shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] <= 0x0) break;
                            if (_0x5e4b4e == merchantOrders[_0xec8f04('0xa')] - 0x1 && shortageResources[_0x389d46][0x0][_0xec8f04('0x93')] > 0x0) {
                                console[_0xec8f04('0xdf')](_0xec8f04('0x111')), _0xdc255b = 0x0;
                                break;
                            }
                        }
                        if (_0xdc255b == 0x0) {
                            _0x389d46 = 0x0;
                            break;
                        }
                    }
            }
            for (let _0xbf1793 = shortageResources['length'] - 0x1; _0xbf1793 >= 0x0; _0xbf1793--) {
                $(_0xec8f04('0xbe'))[_0xec8f04('0xff')](_0xec8f04('0x8e'), (shortageResources[_0xec8f04('0xa')] - _0xbf1793) / shortageResources[_0xec8f04('0xa')] * 0x64 + '%');
                for (var _0x227ccf = 0x0; _0x227ccf < merchantOrders[_0xec8f04('0xa')]; _0x227ccf++) {
                    merchantOrders[_0x227ccf][_0xec8f04('0x156')] = checkDistance(merchantOrders[_0x227ccf]['x'], merchantOrders[_0x227ccf]['y'], villagesData[_0xbf1793]['name'][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x1], villagesData[_0xbf1793]['name']['match'](/(\d+)\|(\d+)/)[0x2]);
                }
                merchantOrders[_0xec8f04('0x98')](function (_0x2536e4, _0x2c2be0) {
                    var _0x5b2f98 = _0xec8f04;
                    return _0x2536e4[_0x5b2f98('0x156')] - _0x2c2be0['distance'];
                });
                if (shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] <= 0x0) {} else
                    while (shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] > 0x0) {
                        console[_0xec8f04('0xdf')](_0xbf1793);
                        var _0x5524ce = 0x0;
                        for (var _0x2970d0 = 0x0; _0x2970d0 < merchantOrders[_0xec8f04('0xa')]; _0x2970d0++) {
                            _0x5524ce += merchantOrders[_0x2970d0][_0xec8f04('0xa9')];
                            merchantOrders[_0x2970d0][_0xec8f04('0xa9')] > 0x0 && (shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] <= merchantOrders[_0x2970d0][_0xec8f04('0xa9')] * 0x3e8 && (links[_0xec8f04('0x103')]({
                                'source': merchantOrders[_0x2970d0][_0xec8f04('0xb6')]
                                , 'target': villageID[_0xbf1793]
                                , 'stone': shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')]
                            }), merchantOrders[_0x2970d0]['stone'] -= shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] / 0x3e8, shortageResources[_0xbf1793][0x1]['stone'] = 0x0), shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] > merchantOrders[_0x2970d0]['stone'] * 0x3e8 && (links['push']({
                                'source': merchantOrders[_0x2970d0][_0xec8f04('0xb6')]
                                , 'target': villageID[_0xbf1793]
                                , 'stone': merchantOrders[_0x2970d0][_0xec8f04('0xa9')] * 0x3e8
                            }), shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] -= merchantOrders[_0x2970d0][_0xec8f04('0xa9')] * 0x3e8, merchantOrders[_0x2970d0][_0xec8f04('0xa9')] = 0x0));
                            if (shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] <= 0x0) break;
                            if (_0x2970d0 == merchantOrders[_0xec8f04('0xa')] - 0x1 && shortageResources[_0xbf1793][0x1][_0xec8f04('0xa9')] > 0x0) {
                                console[_0xec8f04('0xdf')](_0xec8f04('0x111')), _0x5524ce = 0x0;
                                break;
                            }
                        }
                        if (_0x5524ce == 0x0) {
                            _0xbf1793 = 0x0;
                            break;
                        }
                    }
            }
            for (let _0x4566f0 = shortageResources[_0xec8f04('0xa')] - 0x1; _0x4566f0 >= 0x0; _0x4566f0--) {
                $('#progress')[_0xec8f04('0xff')](_0xec8f04('0x8e'), (shortageResources[_0xec8f04('0xa')] - _0x4566f0) / shortageResources[_0xec8f04('0xa')] * 0x64 + '%');
                for (let _0x494c6e = 0x0; _0x494c6e < merchantOrders[_0xec8f04('0xa')]; _0x494c6e++) {
                    merchantOrders[_0x494c6e]['distance'] = checkDistance(merchantOrders[_0x494c6e]['x'], merchantOrders[_0x494c6e]['y'], villagesData[_0x4566f0]['name'][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x1], villagesData[_0x4566f0]['name'][_0xec8f04('0x115')](/(\d+)\|(\d+)/)[0x2]);
                }
                merchantOrders[_0xec8f04('0x98')](function (_0x5cf4b2, _0x35bcb9) {
                    var _0x39f397 = _0xec8f04;
                    return _0x5cf4b2['distance'] - _0x35bcb9[_0x39f397('0x156')];
                });
                if (shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] <= 0x0) {} else
                    while (shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] > 0x0) {
                        var _0x1df80d = 0x0;
                        for (let _0x1b526f = 0x0; _0x1b526f < merchantOrders[_0xec8f04('0xa')]; _0x1b526f++) {
                            _0x1df80d += merchantOrders[_0x1b526f][_0xec8f04('0x55')];
                            merchantOrders[_0x1b526f][_0xec8f04('0x55')] > 0x0 && (shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] <= merchantOrders[_0x1b526f][_0xec8f04('0x55')] * 0x3e8 && (links['push']({
                                'source': merchantOrders[_0x1b526f][_0xec8f04('0xb6')]
                                , 'target': villageID[_0x4566f0]
                                , 'iron': shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')]
                            }), merchantOrders[_0x1b526f][_0xec8f04('0x55')] -= shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] / 0x3e8, shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] = 0x0), shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] > merchantOrders[_0x1b526f][_0xec8f04('0x55')] * 0x3e8 && (links[_0xec8f04('0x103')]({
                                'source': merchantOrders[_0x1b526f][_0xec8f04('0xb6')]
                                , 'target': villageID[_0x4566f0]
                                , 'iron': merchantOrders[_0x1b526f][_0xec8f04('0x55')] * 0x3e8
                            }), shortageResources[_0x4566f0][0x2]['iron'] -= merchantOrders[_0x1b526f][_0xec8f04('0x55')] * 0x3e8, merchantOrders[_0x1b526f][_0xec8f04('0x55')] = 0x0));
                            if (shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] <= 0x0) break;
                            if (_0x1b526f == merchantOrders[_0xec8f04('0xa')] - 0x1 && shortageResources[_0x4566f0][0x2][_0xec8f04('0x55')] > 0x0) {
                                console[_0xec8f04('0xdf')](_0xec8f04('0x111')), totalIronToTrade = 0x0;
                                break;
                            }
                        }
                        if (_0x1df80d == 0x0) {
                            _0x4566f0 = 0x0;
                            break;
                        }
                    }
            }
            $('#progress')[_0xec8f04('0x3c')](), htmlCode = '<div id=\"restart\">' + totalsAndAverages + _0xec8f04('0xd') + settings[_0xec8f04('0x70')] + _0xec8f04('0x139') + settings[_0xec8f04('0x118')] + _0xec8f04('0x10b') + settings[_0xec8f04('0xc')] + _0xec8f04('0x2b') + settings[_0xec8f04('0x1b')] + '\" class=\"slider\" name=\"highFarm\" oninput=\"sliderChange(\'builtOutPercentage\',this.value)\">\x0a                            <output id=\"builtOutPercentage\"></output></td></tr>\x0a                            <tr>\x0a                            <td style=\"padding: 6px;\">\x0a                            <label for=\"needsMorePercentage\">WH capacity priority village: </label></td><td style=\"padding: 6px;\"><input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" value=\"' + settings[_0xec8f04('0x155')] + _0xec8f04('0x31') + langShinko[0x0] + _0xec8f04('0x4b') + langShinko[0x1] + '</td>\x0a                        <td class=\"sophHeader\" width=\"25%\" style=\"text-align:center\">' + langShinko[0x2] + _0xec8f04('0xa7') + langShinko[0x3] + '</td>\x0a                        <td class=\"sophHeader\" width=\"10%\" style=\"text-align:center\">' + langShinko[0x4] + '</td>\x0a                        <td class=\"sophHeader\" width=\"10%\" style=\"text-align:center\">' + langShinko[0x5] + '</td>\x0a                        <td class=\"sophHeader\" width=\"10%\" style=\"text-align:center\">' + langShinko[0x6] + '</td>\x0a                        <td class=\"sophHeader\" width=\"10%\">\x0a                            <font size=\"1\">' + langShinko[0x8] + '</font>\x0a                        </td>\x0a                    </tr>\x0a                </tbody>\x0a            </table>\x0a                ', $(_0xec8f04('0x8a'))['eq'](0x0)[_0xec8f04('0xc2')](htmlCode), is_mobile == !![] && $('#mobile_header')['eq'](0x0)['prepend'](htmlCode), $(_0xec8f04('0x57'))[_0xec8f04('0x149')](_0xec8f04('0xeb'), settings[_0xec8f04('0x53')]), $(_0xec8f04('0xaf'))[_0xec8f04('0xdd')](settings[_0xec8f04('0x70')]), $(_0xec8f04('0x30'))[_0xec8f04('0xdd')](settings[_0xec8f04('0x118')]), $(_0xec8f04('0x60'))[_0xec8f04('0xdd')](settings[_0xec8f04('0xc')]), $(_0xec8f04('0x8f'))[_0xec8f04('0xdd')](settings[_0xec8f04('0x1b')]), $(_0xec8f04('0xac'))[_0xec8f04('0xdd')](settings[_0xec8f04('0x155')]), makeThingsCollapsible(), _0x4b3ecd();
        })[_0x27f3ab('0x81')](function () {
            var _0x4a0902 = _0x27f3ab;
            console[_0x4a0902('0xdf')](_0x4a0902('0x17'));
        })['always'](function () {
            var _0x4d3016 = _0x27f3ab;
            console[_0x4d3016('0xdf')](_0x4d3016('0xca'));
        });
    });
    
    function _0x4b3ecd() {
        var _0x3f8806 = _0x5084a1;
        console[_0x3f8806('0xdf')](_0x3f8806('0xe7'));
        for (let _0xe3ded4 = 0x0; _0xe3ded4 < links[_0x3f8806('0xa')]; _0xe3ded4++) {
            if (links[_0xe3ded4][_0x3f8806('0x93')] == undefined) links[_0xe3ded4][_0x3f8806('0x93')] = 0x0;
            if (links[_0xe3ded4]['stone'] == undefined) links[_0xe3ded4][_0x3f8806('0xa9')] = 0x0;
            if (links[_0xe3ded4][_0x3f8806('0x55')] == undefined) links[_0xe3ded4][_0x3f8806('0x55')] = 0x0;
        }
        console[_0x3f8806('0xdf')](_0x3f8806('0xcd'));
        for (let _0x3d26e9 = 0x0; _0x3d26e9 < links[_0x3f8806('0xa')]; _0x3d26e9++) {
            for (let _0x560bab = 0x0; _0x560bab < links[_0x3f8806('0xa')]; _0x560bab++) {
                links[_0x3d26e9][_0x3f8806('0xf6')] == links[_0x560bab][_0x3f8806('0xf6')] && links[_0x3d26e9]['target'] == links[_0x560bab][_0x3f8806('0x3e')] && _0x3d26e9 != _0x560bab && (links[_0x3d26e9]['wood'] += parseInt(links[_0x560bab]['wood']), links[_0x560bab][_0x3f8806('0x93')] = 0x0, links[_0x3d26e9][_0x3f8806('0xa9')] += parseInt(links[_0x560bab][_0x3f8806('0xa9')]), links[_0x560bab][_0x3f8806('0xa9')] = 0x0, links[_0x3d26e9][_0x3f8806('0x55')] += parseInt(links[_0x560bab][_0x3f8806('0x55')]), links[_0x560bab][_0x3f8806('0x55')] = 0x0);
            }
        }
        console[_0x3f8806('0xdf')](_0x3f8806('0x25'));
        for (let _0x53b064 = 0x0; _0x53b064 < links[_0x3f8806('0xa')]; _0x53b064++) {
            links[_0x53b064][_0x3f8806('0x93')] + links[_0x53b064][_0x3f8806('0xa9')] + links[_0x53b064][_0x3f8806('0x55')] == 0x0 && delete links[_0x53b064];
        }
        console[_0x3f8806('0xdf')](_0x3f8806('0x49'));
        for (let _0x35de36 = 0x0; _0x35de36 < Object[_0x3f8806('0x67')](links)[_0x3f8806('0xa')]; _0x35de36++) {
            cleanLinks[_0x3f8806('0x103')](links[Object['keys'](links)[_0x35de36]]);
        }
        console[_0x3f8806('0xdf')](_0x3f8806('0x11a')), cleanLinks = addDistanceToArray(cleanLinks), listHTML = '', cleanLinks[_0x3f8806('0x98')](function (_0x58c24a, _0x685ab6) {
            var _0x15cf5c = _0x3f8806;
            return _0x58c24a[_0x15cf5c('0x156')] - _0x685ab6['distance'];
        });
        for (let _0x1f3d65 = 0x0; _0x1f3d65 < cleanLinks[_0x3f8806('0xa')]; _0x1f3d65++) {
            console[_0x3f8806('0xdf')](_0x3f8806('0x159') + _0x1f3d65 + _0x3f8806('0x38'));
            _0x1f3d65 % 0x2 == 0x0 ? tempRow = _0x3f8806('0xe4') + _0x1f3d65 + _0x3f8806('0x73') : tempRow = _0x3f8806('0xe4') + _0x1f3d65 + _0x3f8806('0x5e');
            for (let _0x262b8f in villagesData) {
                villagesData[_0x262b8f]['id'] == cleanLinks[_0x1f3d65][_0x3f8806('0xf6')] && (sourceName = villagesData[_0x262b8f][_0x3f8806('0xe6')], sourceURL = villagesData[_0x262b8f][_0x3f8806('0x7')]);
            }
            for (let _0x4fb9fb in villagesData) {
                villagesData[_0x4fb9fb]['id'] == cleanLinks[_0x1f3d65][_0x3f8806('0x3e')] && (targetName = villagesData[_0x4fb9fb]['name'], targetURL = villagesData[_0x4fb9fb][_0x3f8806('0x7')], targetWood = villagesData[_0x4fb9fb][_0x3f8806('0x93')], targetStone = villagesData[_0x4fb9fb][_0x3f8806('0xa9')], targetIron = villagesData[_0x4fb9fb][_0x3f8806('0x55')], targetCapacity = villagesData[_0x4fb9fb][_0x3f8806('0x112')]);
            }
            listHTML += _0x3f8806('0xea') + tempRow + _0x3f8806('0x1') + sourceURL + _0x3f8806('0xef') + sourceName + _0x3f8806('0x41') + targetURL + _0x3f8806('0x90') + targetWood + _0x3f8806('0xa1') + targetStone + _0x3f8806('0x13') + targetIron + _0x3f8806('0xe3') + targetCapacity + '\">' + targetName + _0x3f8806('0x6d') + cleanLinks[_0x1f3d65]['distance'] + _0x3f8806('0xec') + cleanLinks[_0x1f3d65][_0x3f8806('0x93')] + _0x3f8806('0x8c') + cleanLinks[_0x1f3d65][_0x3f8806('0xa9')] + _0x3f8806('0xab') + cleanLinks[_0x1f3d65][_0x3f8806('0x55')] + _0x3f8806('0x5a') + langShinko[0x7] + _0x3f8806('0x9c') + cleanLinks[_0x1f3d65][_0x3f8806('0xf6')] + ',' + cleanLinks[_0x1f3d65][_0x3f8806('0x3e')] + ',' + cleanLinks[_0x1f3d65][_0x3f8806('0x93')] + ',' + cleanLinks[_0x1f3d65][_0x3f8806('0xa9')] + ',' + cleanLinks[_0x1f3d65][_0x3f8806('0x55')] + ',' + _0x1f3d65 + ')\"></td>\x0a        </tr>';
        }
        $(_0x3f8806('0xd0'))['eq'](0x0)['append'](listHTML), $(_0x3f8806('0x2'))[0x0]['focus']();
        for (let _0x41dfba = 0x0; _0x41dfba < shortageResources['length']; _0x41dfba++) {
            parseInt(shortageResources[_0x41dfba][0x0][_0x3f8806('0x93')]) + parseInt(shortageResources[_0x41dfba][0x1][_0x3f8806('0xa9')]) + parseInt(shortageResources[_0x41dfba][0x2]['iron']) != 0x0 && stillShortage[_0x3f8806('0x103')]([villagesData[_0x41dfba][_0x3f8806('0xe6')], shortageResources[_0x41dfba]]);
        }
        for (let _0x2abad1 = 0x0; _0x2abad1 < excessResources[_0x3f8806('0xa')]; _0x2abad1++) {
            parseInt(excessResources[_0x2abad1][0x0][_0x3f8806('0x93')]) + parseInt(excessResources[_0x2abad1][0x1][_0x3f8806('0xa9')]) + parseInt(excessResources[_0x2abad1][0x2][_0x3f8806('0x55')]) != 0x0 && stillExcess[_0x3f8806('0x103')]([villagesData[_0x2abad1][_0x3f8806('0xe6')], excessResources[_0x2abad1]]);
        }
        $(_0x3f8806('0x72'))['eq'](0x0)[_0x3f8806('0x1e')]('<div id=\'aftermath\'><center>\x0a        <button type=\"button\" class=\"btn btnSophie\" name=\"showStats\" style=\"padding: 10px;width: 300px\" onclick=\"showStats()\">Show excess/shortage</button>\x0a        <button type=\"button\" class=\"btn btnSophie\" name=\"showEndResult\" style=\"padding: 10px;width: 300px\" onclick=\"resAfterBalance()\">Show result of balance</button>\x0a        </center></div>'), console[_0x3f8806('0xdf')](_0x3f8806('0x44'));
    }
}
displayEverything();

function checkDistance(_0x2dde85, _0x5b1c9a, _0x3e7117, _0x3d3102) {
    var _0x2980e7 = _0x3eecd2
        , _0x34158f = _0x2dde85 - _0x3e7117
        , _0x5ce756 = _0x5b1c9a - _0x3d3102
        , _0x25a22c = Math[_0x2980e7('0x109')](Math[_0x2980e7('0x99')](_0x34158f, _0x5ce756));
    return _0x25a22c;
}

function addDistanceToArray(_0xf15052) {
    var _0x327e4d = _0x3eecd2;
    for (let _0x66f8be = 0x0; _0x66f8be < _0xf15052[_0x327e4d('0xa')]; _0x66f8be++) {
        for (let _0x1a288e in villagesData) {
            villagesData[_0x1a288e]['id'] == _0xf15052[_0x66f8be]['source'] && (sourceName = villagesData[_0x1a288e][_0x327e4d('0xe6')], sourceURL = villagesData[_0x1a288e][_0x327e4d('0x7')]);
        }
        for (let _0x47c166 in villagesData) {
            villagesData[_0x47c166]['id'] == _0xf15052[_0x66f8be][_0x327e4d('0x3e')] && (targetName = villagesData[_0x47c166][_0x327e4d('0xe6')], targetURL = villagesData[_0x47c166][_0x327e4d('0x7')]);
        }
        _0xf15052[_0x66f8be]['distance'] = checkDistance(sourceName[_0x327e4d('0x115')](/(\d+)\|(\d+)/)[0x1], sourceName['match'](/(\d+)\|(\d+)/)[0x2], targetName[_0x327e4d('0x115')](/(\d+)\|(\d+)/)[0x1], targetName['match'](/(\d+)\|(\d+)/)[0x2]);
    }
    return _0xf15052;
}

function numberWithCommas(_0x206479) {
    var _0x323418 = _0x3eecd2;
    _0x206479 = _0x206479[_0x323418('0x11')]();
    var _0x5d8593 = /(-?\d+)(\d{3})/;
    while (_0x5d8593[_0x323418('0xf0')](_0x206479)) _0x206479 = _0x206479[_0x323418('0x24')](_0x5d8593, _0x323418('0xb3'));
    return _0x206479;
}

function showStats() {
    var _0x386c23 = _0x3eecd2;
    htmlStats = _0x386c23('0x150');
    for (let _0x244969 = 0x0; _0x244969 < stillShortage[_0x386c23('0xa')]; _0x244969++) {
        console[_0x386c23('0xdf')](_0x386c23('0x159') + _0x244969 + _0x386c23('0x38')), _0x244969 % 0x2 == 0x0 ? tempRow = _0x386c23('0xe4') + _0x244969 + '\' class=\'sophRowB\'' : tempRow = ' id=\'' + _0x244969 + _0x386c23('0x5e'), htmlStats += _0x386c23('0xea') + tempRow + _0x386c23('0x158') + stillShortage[_0x244969][0x0] + _0x386c23('0xfd') + stillShortage[_0x244969][0x1][0x0][_0x386c23('0x93')] + _0x386c23('0x131') + stillShortage[_0x244969][0x1][0x1]['stone'] + ' , ' + stillShortage[_0x244969][0x1][0x2][_0x386c23('0x55')] + _0x386c23('0x151');
    }
    htmlStats += _0x386c23('0x87');
    for (let _0x251d9e = 0x0; _0x251d9e < stillExcess[_0x386c23('0xa')]; _0x251d9e++) {
        console['log']('Creating line ' + _0x251d9e + _0x386c23('0x38')), _0x251d9e % 0x2 == 0x0 ? tempRow = _0x386c23('0xe4') + _0x251d9e + _0x386c23('0x73') : tempRow = ' id=\'' + _0x251d9e + _0x386c23('0x5e'), htmlStats += '\x0a        <tr ' + tempRow + ' height=\"40\">\x0a            <td>' + stillExcess[_0x251d9e][0x0] + _0x386c23('0xfd') + stillExcess[_0x251d9e][0x1][0x0]['wood'] + _0x386c23('0x131') + stillExcess[_0x251d9e][0x1][0x1]['stone'] + ' , ' + stillExcess[_0x251d9e][0x1][0x2][_0x386c23('0x55')] + _0x386c23('0x151');
    }
    htmlStats += _0x386c23('0xf1'), Dialog[_0x386c23('0xb9')](_0x386c23('0x6e'), htmlStats);
}

function makeThingsCollapsible() {
    var _0x5af65f = _0x3eecd2
        , _0x3bfcd7 = $(_0x5af65f('0x124'));
    for (var _0x30ab80 = 0x0; _0x30ab80 < _0x3bfcd7[_0x5af65f('0xa')]; _0x30ab80++) {
        _0x3bfcd7[_0x30ab80][_0x5af65f('0x88')]('click', function () {
            var _0x246ff8 = _0x5af65f;
            this[_0x246ff8('0xb4')][_0x246ff8('0xc8')](_0x246ff8('0x2c'));
            var _0x41d277 = this[_0x246ff8('0x45')];
            _0x41d277[_0x246ff8('0x135')][_0x246ff8('0x1d')] ? _0x41d277[_0x246ff8('0x135')][_0x246ff8('0x1d')] = null : _0x41d277['style']['maxHeight'] = _0x41d277[_0x246ff8('0xe8')] + 'px';
        });
    }
}

function saveSettings() {
    var _0x228d66 = _0x3eecd2;
    tempArray = $(_0x228d66('0x94'))['serializeArray'](), $(_0x228d66('0x57'))[0x0][_0x228d66('0xeb')] == !![] ? (settings[_0x228d66('0x53')] = !![], settings[_0x228d66('0x70')] = parseInt(tempArray[0x1][_0x228d66('0x83')]), settings[_0x228d66('0x118')] = parseInt(tempArray[0x2][_0x228d66('0x83')]), settings[_0x228d66('0xc')] = parseInt(tempArray[0x3][_0x228d66('0x83')]), settings[_0x228d66('0x1b')] = parseFloat(tempArray[0x4][_0x228d66('0x83')]), settings['needsMorePercentage'] = parseFloat(tempArray[0x5][_0x228d66('0x83')])) : (settings[_0x228d66('0x53')] = ![], settings[_0x228d66('0x70')] = parseInt(tempArray[0x0][_0x228d66('0x83')]), settings[_0x228d66('0x118')] = parseInt(tempArray[0x1][_0x228d66('0x83')]), settings['highFarm'] = parseInt(tempArray[0x2][_0x228d66('0x83')]), settings[_0x228d66('0x1b')] = parseFloat(tempArray[0x3][_0x228d66('0x83')]), settings[_0x228d66('0x155')] = parseFloat(tempArray[0x4][_0x228d66('0x83')])), localStorage['setItem'](_0x228d66('0x2a'), JSON[_0x228d66('0x152')](settings)), $(_0x228d66('0x69'))[_0x228d66('0x3c')](), $(_0x228d66('0x2e'))[_0x228d66('0x3c')](), $('div[id*=\'sendResources\']')['remove'](), init(), displayEverything();
}

function sliderChange(_0x48fdb3, _0x1de04d) {
    var _0x13a387 = _0x3eecd2;
    document[_0x13a387('0x108')](_0x48fdb3)['innerHTML'] = _0x1de04d;
}

function resAfterBalance() {
    var _0x3d3d59 = _0x3eecd2;
    resBalancedHTML = _0x3d3d59('0x13d');
    for (var _0x24bb7b = 0x0; _0x24bb7b < villagesData[_0x3d3d59('0xa')]; _0x24bb7b++) {
        thisMerchantLeft = villagesData[_0x24bb7b][_0x3d3d59('0x157')];
        incomingRes[villagesData[_0x24bb7b]['id']] != undefined ? (console['log'](_0x3d3d59('0x113')), thisVillageTotalWood = incomingRes[villagesData[_0x24bb7b]['id']][_0x3d3d59('0x93')] + parseInt(villagesData[_0x24bb7b][_0x3d3d59('0x93')]), thisVillageTotalStone = incomingRes[villagesData[_0x24bb7b]['id']]['stone'] + parseInt(villagesData[_0x24bb7b]['stone']), thisVillageTotalIron = incomingRes[villagesData[_0x24bb7b]['id']][_0x3d3d59('0x55')] + parseInt(villagesData[_0x24bb7b]['iron'])) : (thisVillageTotalWood = parseInt(villagesData[_0x24bb7b][_0x3d3d59('0x93')]), thisVillageTotalStone = parseInt(villagesData[_0x24bb7b][_0x3d3d59('0xa9')]), thisVillageTotalIron = parseInt(villagesData[_0x24bb7b][_0x3d3d59('0x55')]));
        for (var _0x425dde = 0x0; _0x425dde < cleanLinks[_0x3d3d59('0xa')]; _0x425dde++) {
            cleanLinks[_0x425dde]['target'] == villagesData[_0x24bb7b]['id'] && (console[_0x3d3d59('0xdf')](_0x3d3d59('0xbd')), thisVillageTotalWood += cleanLinks[_0x425dde][_0x3d3d59('0x93')], thisVillageTotalStone += cleanLinks[_0x425dde][_0x3d3d59('0xa9')], thisVillageTotalIron += cleanLinks[_0x425dde][_0x3d3d59('0x55')]), cleanLinks[_0x425dde][_0x3d3d59('0xf6')] == villagesData[_0x24bb7b]['id'] && (console[_0x3d3d59('0xdf')]('addings rows to be sent to the res at the target'), thisVillageTotalWood -= cleanLinks[_0x425dde]['wood'], thisVillageTotalStone -= cleanLinks[_0x425dde][_0x3d3d59('0xa9')], thisVillageTotalIron -= cleanLinks[_0x425dde]['iron'], thisMerchantLeft -= (cleanLinks[_0x425dde]['wood'] + cleanLinks[_0x425dde][_0x3d3d59('0xa9')] + cleanLinks[_0x425dde][_0x3d3d59('0x55')]) / 0x3e8);
        }
        _0x24bb7b % 0x2 == 0x0 ? tempRow = _0x3d3d59('0x3b') : tempRow = _0x3d3d59('0x14f'), resBalancedHTML += '\x0a        <tr ' + tempRow + _0x3d3d59('0x5c') + villagesData[_0x24bb7b][_0x3d3d59('0xe6')] + _0x3d3d59('0xfd') + villagesData[_0x24bb7b][_0x3d3d59('0x5d')] + _0x3d3d59('0xc5') + (thisMerchantLeft + '/' + villagesData[_0x24bb7b]['totalMerchants']) + '\x0a            </td>\x0a            <td>\x0a                <span class=\"res wood\" style=\"padding-left:1em\">&nbsp;</span>' + thisVillageTotalWood + _0x3d3d59('0xfa') + thisVillageTotalStone + _0x3d3d59('0xd5') + thisVillageTotalIron + '\x0a            </td>\x0a            <td style=\"text-align:right\">' + villagesData[_0x24bb7b][_0x3d3d59('0x112')] + '</td>\x0a        </tr>';
    }
    resBalancedHTML += _0x3d3d59('0x32'), Dialog[_0x3d3d59('0xb9')](_0x3d3d59('0x6e'), resBalancedHTML);
}
