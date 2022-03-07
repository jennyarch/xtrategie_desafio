
function Action(){

    function storageLogin({ email, password}) {
        return{
            type:'LOGIN',
            payload: {
                email,
                password,
            },
        };
    }
    
    function  logoutUser(){
        return {
            type: 'LOGOUT',
            payload: {},
        };
    }
}
export default Action;
