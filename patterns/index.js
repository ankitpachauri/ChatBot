const patternDict =[{
    pattern:'\\b(?<greeting>Hii|hii|hello|hey|namaste|heloo)\\b',
    intent: 'Hello'
},{
    pattern:'\\b(byebye|bbye|exit|bye|biii)\\b',
    intent: 'Exit'
}];
module.exports= patternDict;
