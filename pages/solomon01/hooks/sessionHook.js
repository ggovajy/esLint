import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../module/session';

export const SessionHook = () => {
  const session = useSelector((state) => state.sessionReducer.session);

  const dispatch = useDispatch();
  const setSessionHook = useCallback(
    (session) => dispatch(setSession(session)),
    [dispatch],
  );

  return {
    session,
    setSessionHook,
  };
};
