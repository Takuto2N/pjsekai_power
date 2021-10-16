var sougouryoku=[0,0,0,0,0];
id=[];
id_alv=[];
for(let a=0;a<5;a++){
    id[4*a]="character"+(a+1)+"u";
    id[4*a+1]="character"+(a+1)+"t";
    id[4*a+2]="character"+(a+1);
    id[4*a+3]="character"+(a+1)+"r";

    id_alv[a]="character"+(a+1)+"alv";
}
id_Unit=["Leo1alv","Leo2alv","more1alv","more2alv","vivi1alv","vivi2alv","wod1alv","wond2alv","Night1alv","Night2alv"];
id_Type=["COOL1alv","COOL2alv","CUTE1alv","CUTE2alv","PURE1alv","PURE2alv","HAPPY1alv","HAPPY2alv","MYS1alv","MYS2alv"];

// キャラクターの「ユニット」「タイプ」「総合力」「キャラランク」の文字配列*5
var chara1=["","","","10"];
var chara2=["","","","10"];
var chara3=["","","","10"];
var chara4=["","","","10"];
var chara5=["","","","10"];
// var chara1=["Leo","COOL","32521","18"];
// var chara2=["Leo","COOL","9225","13"];
// var chara3=["Leo","COOL","34291","15"];
// var chara4=["Leo","COOL","34596","18"];
// var chara5=["Leo","COOL","34587","13"];


// すべてのキャラの配列の配列
var all_chara=[chara1,chara2,chara3,chara4,chara5];


// キャラクターのエリアアイテムレベル
// var charaalv=[0,0,0,0,0]; // キャラ1～キャラ5の個人エリアアイテムレベル
var charaalv=[5,5,5,5,5];

// ユニットのエリアアイテムレベル・タイプ（草）のエリアアイテムレベル
var unitalv=[0,0,0,0,0,0,0,0,0,0];
var typealv=[0,0,0,0,0,0,0,0,0,0];

// ユニットレベル
// Leo 0，1
// more 2,3
// ViVi 4,5
// Wond 6,7
// Night 8,9

// タイプレベル
// COOL 0,1
// CUTE 2,3
// PURE 4,5
// HAPPY 6,7
// MYS 8,9

// チーム内のユニットタイプが一致したらそのグループの旗を揚げる．
var FLAG_Unit=[0,0,0,0,0];
var FLAG_Type=[0,0,0,0,0];


// エリアアイテムの係数
const AreaItem = 0.02;
const UnitItem = 0.005;
const TypeItem = 0.005;

// コイン必要量の辞書
// 参考サイトURL”https://appmedia.jp/pjsekai/5393965”
var Coin_AreaItem=[
    {coin:20000,piece:100,gem:0},
    {coin:40000,piece:200,gem:0},
    {coin:70000,piece:400,gem:0},
    {coin:100000,piece:600,gem:0},
    {coin:130000,piece:800,gem:500},
    {coin:160000,piece:1000,gem:100},
    {coin:200000,piece:1200,gem:200},
    {coin:250000,piece:1400,gem:300},
    {coin:300000,piece:1700,gem:400},
    {coin:350000,piece:2000,gem:500},
];
var Coin_UnitItem=[
    {coin:50000,piece:300,gem:0},
    {coin:100000,piece:600,gem:0},
    {coin:175000,piece:1200,gem:0},
    {coin:250000,piece:1800,gem:0},
    {coin:325000,piece:2400,gem:150},
    {coin:400000,piece:3000,gem:300},
    {coin:500000,piece:3600,gem:600},
    {coin:625000,piece:4200,gem:900},
    {coin:750000,piece:5100,gem:1200},
    {coin:875000,piece:6000,gem:1500},
];
var Coin_TypeItem=[
    {coin:30000,seed:10},
    {coin:60000,seed:20},
    {coin:105000,seed:30},
    {coin:150000,seed:50},
    {coin:195000,seed:70},
    {coin:240000,seed:90},
    {coin:300000,seed:120},
    {coin:375000,seed:150},
    {coin:450000,seed:200},
    {coin:525000,seed:250},
];

var Unit=[
    'Leo/need望遠鏡','Leo/need写真',
    'MOREMOREJUMPオブジェ','MOREMOREJUMPスピーカー',
    'VividBADSQBADフライヤー','VividBADSQBADグラフティ',
    'ワンダショパレード','ワンダショフラッグ',
    '25時ナイトコードルーム','25時ナイト割れた鏡'
];

var Type=[
    'クールベリー','クールフラワー',
    'キュートチェリー','キュートフラワー',
    'ピュアアップル','ピュアフラワー',
    'ハッピーオレンジ','ハッピーフラワー',
    'ミステリアスグレープ','ミステリアスフラワー'
]
// 参考
// https://retroid2016.com/2018/06/01/%E3%80%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%80%91getelementbyid%E3%81%8Cnull%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AE%E5%AF%BE%E5%87%A6%E6%B3%95%E3%80%90ja/
function clickBtn1(){
    for(let x=0;x<5;x++){
        all_chara[x][0]=document.getElementById(id[4*x]).value;
        all_chara[x][1]=document.getElementById(id[4*x+1]).value;
        all_chara[x][2]=document.getElementById(id[4*x+2]).value;
        all_chara[x][3]=document.getElementById(id[4*x+3]).value;

        charaalv[x]=document.getElementById(id_alv[x]).value;
    }

    for(let y=0;y<10;y++){
        unitalv[y]=document.getElementById(id_Unit[y]).value;
        typealv[y]=document.getElementById(id_Type[y]).value;
    }

    // 1人目のキャラクターのユニットと2人目以降のユニットが一致するか判断
    // 一致すればブレイクしない。
    for(var i =1;i<5;i++){
        if(all_chara[0][0]==all_chara[i][0]){}
        else{
            break;}
    }
    // ブレイクしないとiが5になるので一致したユニット名のフラグを立てる
    if(i==5){
        switch(all_chara[0][0]){
            case "Leo":
                FLAG_Unit[0]=1;
                break;
            case "more":
                FLAG_Unit[1]=1;
                break;
            case "ViVi":
                FLAG_Unit[2]=1;
                break;
            case "Wond":
                FLAG_Unit[3]=1;
                break;
            case "Night":
                FLAG_Unit[4]=1;
                break;
        }
    }
    // 上に同じくタイプ名の一致を検証
    for(var i =1;i<5;i++){
        if(all_chara[0][1]==all_chara[i][1]){}
        else{
            break;}
    }
    if(i==5){
        switch(all_chara[0][1]){
            case "COOL":
                FLAG_Type[0]=1;
                break;
            case "CUTE":
                FLAG_Type[1]=1;
                break;
            case "PURE":
                FLAG_Type[2]=1;
                break;
            case "HAPPY":
                FLAG_Type[3]=1;
                break;
            case "MYS":
                FLAG_Type[4]=1;
                break;
        }
    }

    // 係数の計算
    // 0番目にキャラランク，1番目に個人エリアアイテムレベル，2番目にユニットボーナス，3番目にタイプの係数を入れる
    var keisuu= new Array(4);
    for(let y=0;y<5;y++){
        keisuu[y]=new Array(4).fill(0);
    }
    var SUM_FLAG_Unit = FLAG_Unit.reduce((sum,element) => sum+element,0);
    var SUM_FLAG_Type = FLAG_Type.reduce((sum,element) => sum+element,0);
    for (let n=0;n<5;n++){
        keisuu[n][0]=(Number(all_chara[n][3])*0.001); // キャラランク
        keisuu[n][1]=(charaalv[n]*AreaItem); // 個人エリアレベル
        // ユニットボーナスの計算
        for(var k=0;k<5;k++){
            let temp_lv=0;
            switch(all_chara[k][0]){
                case "Leo":
                    temp_lv=(unitalv[0]+unitalv[1]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][2]=(temp_lv*2);
                    }else{
                        keisuu[n][2]=(temp_lv);
                    }
                    break;
                case "more":
                    temp_lv=(unitalv[2]+unitalv[3]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][2]=(temp_lv*2);
                    }else{
                        keisuu[n][2]=(temp_lv);
                    }
                    break;
                case "ViVi":
                    temp_lv=(unitalv[4]+unitalv[5]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][2]=(temp_lv*2);
                    }else{
                        keisuu[n][2]=(temp_lv);
                    }
                    break;
                case "Wond":
                    temp_lv=(unitalv[6]+unitalv[7]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][2]=(temp_lv*2);
                    }else{
                        keisuu[n][2]=(temp_lv);
                    }
                    break;
                case "Night":
                    temp_lv=(unitalv[8]+unitalv[9]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][2]=(temp_lv*2);
                    }else{
                        keisuu[n][2]=(temp_lv);
                    }
                    break;
            }
        }
        // タイプの計算
        temp_lv=0;
        for(var m=0;m<5;m++){
            switch(all_chara[m][1]){
                case "COOL":
                    temp_lv=(typealv[0]+typealv[1]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][3]=(temp_lv*2);
                    }else{
                        keisuu[n][3]=(temp_lv);
                    }
                    break;
                case "CUTE":
                    temp_lv=(typealv[2]+typealv[3]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][3]=(temp_lv*2);
                    }else{
                        keisuu[n][3]=(temp_lv);
                    }
                    break;
                case "PURE":
                    temp_lv=(typealv[4]+typealv[5]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][3]=(temp_lv*2);
                    }else{
                        keisuu[n][3]=(temp_lv);
                    }
                    break;
                case "HAPPY":
                    temp_lv=(typealv[6]+typealv[7]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][3]=(temp_lv*2);
                    }else{
                        keisuu[n][3]=(temp_lv);
                    }
                    break;
                case "MYS":
                    temp_lv=(typealv[8]+typealv[9]);
                    if(SUM_FLAG_Unit==1){
                        keisuu[n][3]=(temp_lv*2);
                    }else{
                        keisuu[n][3]=(temp_lv);
                    }
                    break;
            }
        }
    }

    var SUM_keisuu = [];
    for(let i=0;i<5;i++){
        SUM_keisuu[i]=keisuu[i].reduce((sum,element) => sum+element,0);
        sougouryoku[i] = all_chara[i][2]*(1+SUM_keisuu[i]) ;
    }
    SUM_sougouryoku = sougouryoku.reduce((sum,element) => sum+element,0);

    // 一つずつ購入したときの差を計算
    var diff=[];
    for(let i=0;i<5;i++){
        diff[i]=all_chara[i][2]*AreaItem;
    }

    var diff_Unit=[0,0,0,0,0,0,0,0,0,0];
    for(let i =0;i<10;i++){
        for(let k=0;k<5;k++){
            if((i==0 || i==1)&&(all_chara[k][0]=="Leo")){
                if(SUM_FLAG_Unit==1){diff_Unit[i]+=all_chara[k][2]*UnitItem*2;}
                else{diff_Unit[i]+=all_chara[k][2]*UnitItem};
            }else if((i==2 || i==3)&&(all_chara[k][0]=="more")){
                if(SUM_FLAG_Unit==1){diff_Unit[i]+=all_chara[k][2]*UnitItem*2;}
                else{diff_Unit[i]+=all_chara[k][2]*UnitItem};
            }else if((i==4 || i==5)&&(all_chara[k][0]=="ViVi")){
                if(SUM_FLAG_Unit==1){diff_Unit[i]+=all_chara[k][2]*UnitItem*2;}
                else{diff_Unit[i]+=all_chara[k][2]*UnitItem};
            }else if((i==6 || i==7)&&(all_chara[k][0]=="Wond")){
                if(SUM_FLAG_Unit==1){diff_Unit[i]+=all_chara[k][2]*UnitItem*2;}
                else{diff_Unit[i]+=all_chara[k][2]*UnitItem};
            }else if((i==8 || i==9)&&(all_chara[k][0]=="Night")){
                if(SUM_FLAG_Unit==1){diff_Unit[i]+=all_chara[k][2]*UnitItem*2;}
                else{diff_Unit[i]+=all_chara[k][2]*UnitItem};
            }
        }
    }
    var diff_Type=[0,0,0,0,0,0,0,0,0,0];
    for(let i =0;i<10;i++){
        for(let k=0;k<5;k++){
            if((i==0 || i==1)&&(all_chara[k][0]=="COOL")){
                if(SUM_FLAG_Type==1){diff_Type[i]+=all_chara[k][2]*TypeItem*2;}
                else{diff_Type[i]+=all_chara[k][2]*TypeItem};
            }else if((i==2 || i==3)&&(all_chara[k][0]=="CUTE")){
                if(SUM_FLAG_Type==1){diff_Type[i]+=all_chara[k][2]*TypeItem*2;}
                else{diff_Type[i]+=all_chara[k][2]*TypeItem};
            }else if((i==4 || i==5)&&(all_chara[k][0]=="PURE")){
                if(SUM_FLAG_Type==1){diff_Type[i]+=all_chara[k][2]*TypeItem*2;}
                else{diff_Type[i]+=all_chara[k][2]*TypeItem};
            }else if((i==6 || i==7)&&(all_chara[k][0]=="HAPPY")){
                if(SUM_FLAG_Type==1){diff_Type[i]+=all_chara[k][2]*TypeItem*2;}
                else{diff_Type[i]+=all_chara[k][2]*TypeItem};
            }else if((i==8 || i==9)&&(all_chara[k][0]=="MYS")){
                if(SUM_FLAG_Type==1){diff_Type[i]+=all_chara[k][2]*TypeItem*2;}
                else{diff_Type[i]+=all_chara[k][2]*TypeItem};
            }
        }
    }
    // 一つあげたときに必要なコインの量を記録
    var Need_Coin_AreaItem=[];
    var Need_Coin_UnitItem=[];
    var Need_Coin_TypeItem=[];
    for(let i=0;i<5;i++){
        Need_Coin_AreaItem[i]=Coin_AreaItem[(Number(charaalv[i]))].coin;
    }
    console.log(Need_Coin_AreaItem);
    for(let i=0;i<10;i++){
        Need_Coin_UnitItem[i]=Coin_UnitItem[Number((unitalv[i]))].coin;
        Need_Coin_TypeItem[i]=Coin_TypeItem[Number((typealv[i]))].coin;
        
    }


    // // コスパを計算
    var Cosper_AreaItem=[];
    var Cosper_UnitItem=[];
    var Cosper_TypeItem=[];

    for(let i=0;i<5;i++){
        Cosper_AreaItem[i]=(diff[i]*1000)/Need_Coin_AreaItem[i];
    }
    for(let i=0;i<10;i++){
        Cosper_UnitItem[i]=(diff_Unit[i]*1000)/Need_Coin_UnitItem[i];
        Cosper_TypeItem[i]=(diff_Type[i]*1000)/Need_Coin_TypeItem[i];
    }

    var MAX_AreaItem = Cosper_AreaItem.reduce(function(a, b) {
        return Math.max(a, b);    });
    var MAX_UnitItem = Cosper_UnitItem.reduce(function(a, b) {
        return Math.max(a, b);    });
    var MAX_TypeItem = Cosper_TypeItem.reduce(function(a, b) {
        return Math.max(a, b);    });
    var MAXIndex_AreaItem =maxIndex2(Cosper_AreaItem);
    var MAXIndex_UnitItem =maxIndex2(Cosper_UnitItem);
    var MAXIndex_TypeItem =maxIndex2(Cosper_TypeItem);
    str1= '1番コスパがいいのはキャラクター'+(Number(MAXIndex_AreaItem)+1) +'のエリアアイテムです！';
    document.getElementById("span1").textContent = str1;
    str2= '1番コスパがいいのは'+Unit[(Number(MAXIndex_UnitItem))] +'です！';
    document.getElementById("span2").textContent = str2;
    str3= '1番コスパがいいのは'+Type[(Number(MAXIndex_TypeItem))] +'です！';
    document.getElementById("span3").textContent = str3;

    var ALLMAX_Cosper_Item =[MAX_AreaItem,MAX_UnitItem,MAX_TypeItem];
    switch(maxIndex2(ALLMAX_Cosper_Item)){
        case 0:
            document.getElementById("span4").textContent = 'その中でもキャラクターがいい';
            break;
        case 1:
            document.getElementById("span4").textContent = 'その中でもユニットアイテムがいい';
            break;
        case 2:
            document.getElementById("span4").textContent = 'その中でもタイプアイテムがいい';
            break   ;
        }

}

function maxIndex2(a) {
    return a.indexOf(Math.max(...a))
}


// 過去案
// チーム内のユニット・タイプ一致した際のフラグ(配列に変更)
// var FLAG_Leo=0;
// var FLAG_more=0;
// var FLAG_ViVi=0;
// var FLAG_Wond=0;
// var FLAG_Night=0;

// var FLAG_COOL=0;
// var FLAG_CUTE=0;
// var FLAG_PURE=0;
// var FLAG_HAPPY=0;
// var FLAG_MYS=0;

// フォームを通してHTMLを読もうとした
    // const character1u = document.character.character1u;
    // const num=character1u.selectedIndex;
    // const str = character1u.options[num].value;