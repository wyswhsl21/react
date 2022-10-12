// src/modules/toDo.js
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const VALUE_FORM = "VALUE_FORM";
const CANCEL_TODO = "CANCEL_TODO";
const DETAIL_TODO = "DETAIL_TODO";

// action creator
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
export const completeTodo = (data) => {
  return {
    type: COMPLETE_TODO,
    data,
  };
};
export const valueForm = (payload) => {
  return {
    type: VALUE_FORM,
    payload,
  };
};
export const cancelTodo = (id) => {
  return {
    type: CANCEL_TODO,
    id,
  };
};
export const detailTodo = (item) => {
  return {
    type: DETAIL_TODO,
    item,
  };
};
// export const relocatonTodo = (item) => {
//   return {
//     type: RELOCATION_TODO,
//     item,
//   };
// };

// 초기 상태값
const initialState = [
  {
    // title: "",
    // text: "",
    // id: 0,
    // isDone: false,
  },
];

// 리듀서
// [{},{}] state =[{},{},{}]
// [1,2,3,4,5,6,7] 10 ...stat, {title:action.payload[0],content:action.payload[1],id:id,isDone:true}
const toDo = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_FORM:
      console.log(action.payload);
      const id = Date.now();
      // console.log(action.payload, state);
      return [
        ...state,
        {
          title: action.payload[0],
          text: action.payload[1],
          id: id,
          isDone: false,
        },
      ];
    case COMPLETE_TODO:
      // console.log(action);
      console.log(action);
      const newState = state.map((item) => {
        if (item.id === action.data) return { ...item, isDone: true };
        return item;
      });

      return newState;
    case CANCEL_TODO:
      const cNewState = [...state];
      console.log(cNewState);
      cNewState.map((item) => {
        if (item.id === action.id) return (item.isDone = false);
      });
      state = cNewState;
      return state;
    case DELETE_TODO:
      console.log(state, action);
      const fState = state.filter((item) => item.id !== action.id);
      return fState;

    case DETAIL_TODO:
      console.log(state, action);
      const detail = state.filter((item) => item.id === action.item);
      console.log(detail);
      return [...state, detail];

    // case RELOCATION_TODO:
    //   const value = [...state];
    //   return value;

    default:
      return state;
  }
};

export default toDo;
// 모듈파일에서는 리듀서를 export default 한다.
