import {
    useEffect,
    useReducer
} from 'react';

/*
    A custom hook to make the API calls to fetch data.
    It return the loading state, error state and the fetched data.
*/
export default function useFetch(url) {   

    const initialState = {
        loading: true,
        error: null,
        data: []
    }

    //assiging action name to constants to reduce errors.
    const FETCH_START = 'FETCH_START';
    const FETCH_SUCCESS = 'FETCH_SUCCESS';
    const FETCH_ERROR = 'FETCH_ERROR';

    //creating reducer to update the state on different actions
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type){
            case FETCH_START:
                return {...initialState, loading: true, error:null};
            case FETCH_SUCCESS:
                return {...initialState, loading: false, data:action.payload, error:null};
            case FETCH_ERROR:
                return {...initialState, loading: false, error: action.payload};
            default:
                return state;

        }
    }, initialState);

    useEffect(() => {
        //fetching data
        const fetchData = async () => {
            dispatch({type:FETCH_START})
            try{
                const response = await fetch(url);
                const data = await response.json();
                //updating the state with the fetched data
                dispatch({type:FETCH_SUCCESS,payload:data});
            }catch(error){
                //updating the state with the error
                dispatch({type:FETCH_ERROR,payload:error});
            }
        }

        fetchData();

    }, [url])

    return {
        state
    }

}