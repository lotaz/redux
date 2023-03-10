// kho chia làm 3p
// 1 nơi lưu trữ (state)
// 2 action ( lời kêu gọi ) 
// 3 reducer (nơi nhận state thay đổi)

export const initialState = {
    list: [],
    detail: {},
}
export const actionReducer = {
    GEST_LIST_PRODUCT: 'GET_LIST_PRODUCT',
    GET_DETAIL_PRODUCT: 'GET_DETAIL_PRODUCT',
}
//action => {type: 'GET_LIST_PRODUCT' ,payload:[123]}
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionReducer.GEST_LIST_PRODUCT:
            return {
                ...state,
                list: action.payload,
            }
        case actionReducer.GET_DETAIL_PRODUCT:
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return { ...state }
    }
}