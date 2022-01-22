import { startLoading, finishLoading } from '../module/loading';
export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILEUE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({ type: SUCCESS, payload: response });
      dispatch(finishLoading(type));
    } catch (err) {
      dispatch({ type: FAILEUE, payload: err, error: true });
      dispatch(startLoading(type));
      throw err;
    }
  };
}
