export default () => {
    return (dispatch, getState) => { //with redux-thunk we can manually call the dispatch 
        setTimeout(() => {
            console.log('I waited for 2 seconds');
            const reduxState = getState();
            console.log(reduxState);


            //the object below is an action
            //it will get sent to the dispatch AFTER 2 seconds
            //so we can control when to send out the action to the dispatch and subsequently to the reducers
            dispatch({
                type: 'testThunk'
            })
        }, 2000);
    }
}