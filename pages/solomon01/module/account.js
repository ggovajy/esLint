const GETACCOUNTLIST = 'account/GETACCOUNTLIST';

const SETACCOUNT = 'account/SETACCOUNTLIST';

export const getAccountList = (msg) => ({
  type: GETACCOUNTLIST,
  payload: msg,
});

export const setAccount = (data) => ({
  type: SETACCOUNT,
  payload: data,
});

const initState = {
  data: 'hahah',
  dataList: [
    {
      REGST_NO: 0,
      ID: 'ID',
      PWD: 'PWD',
      NAME: 'NAME',
      EMAIL: 'EMAIL',
    },
  ],
};

function accountReducer(state = initState, action) {
  switch (action.type) {
    case GETACCOUNTLIST:
      return {
        dataList: state.dataList,
        data: action.payload,
      };
    case SETACCOUNT:
      return {
        data: state.data,
        dataList: action.payload,
      };
    default:
      return {
        state,
      };
  }
}

export default accountReducer;
