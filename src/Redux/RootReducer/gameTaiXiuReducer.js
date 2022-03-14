
//Khai báo state
//true : Tài, false: Xỉu
let gameTaiXiu ={
    banChon:true,
    soBanThang:0,
    tongSoBan:0,
    mangXucXac:[
        {hinh:'./img/GameTaiXiu/1.png', diem:1},
        {hinh:'./img/GameTaiXiu/1.png', diem:1},
        {hinh:'./img/GameTaiXiu/1.png', diem:1},
    ]
}
//Tạo store redux
export const gameTaiXiuReducer = (state = gameTaiXiu, action) => { 
    switch(action.type){
        case 'DAT_CUOC':{

            state.banChon = action.chon;
            return {...state};
        }
        case 'PLAY_GAME':{
            // mảng ngẫu nhiên 1-6
            let mangNgauNhien =  [];
            // Math.floor(Math.random() * (max - min + 1) ) + min
            // tạo 3 đối tương xuc xac
            for(let i=0; i<3; i++){
                let interger = Math.floor(Math.random() * 6) + 1;
                let obj = {
                    hinh:`./img/GameTaiXiu/${interger}.png`,
                    diem:interger
                }
                mangNgauNhien.push(obj);
            }
            state.mangXucXac = mangNgauNhien;

            // tongDiem >= 11 Tài, <11 Xỉu
            // reduce((kết quả, phần tử, index)={}, giá trị mặc định của kết qua)
            let tongDiem = mangNgauNhien.reduce((tong, xucxac,index) => { 
                    return tong += xucxac.diem;
             }, 0);

            //Nếu chọn Tai(true) && tongDiem >=11 => thắng
            //Hoặc
            //Nếu chon Xỉu(false) && tongDiem <11 => thắng
             if( (state.banChon && tongDiem >=11) || (!state.banChon && tongDiem <11 )){
                 state.soBanThang +=1;
             }
             state.tongSoBan +=1;

            return {...state};
        }
        default: return state;
    }
 }