import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountList, setAccount } from "../module/account";

export const AccountHook = () => {
  const data = useSelector((state) => state.accountReducer.data);
  const dataList = useSelector((state) => state.accountReducer.dataList);
  const dispatch = useDispatch();

  const getAccountListHook = useCallback(
    (msg) => dispatch(getAccountList(msg)),
    [dispatch],
  );
  const setAccountHook = useCallback((data) => dispatch(setAccount(data)), [
    dispatch,
  ]);

  return {
    data,
    dataList,
    getAccountListHook,
    setAccountHook,
  };
};
