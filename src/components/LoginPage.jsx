import React from "react";
import { connect } from "react-redux";


class LoginPage extends React.Component{
    render(){
        return(
            <div align="center">
                <h1> Login </h1>
                <form>
                    <label>Username   </label>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state /* , ownProps */) => {
    return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);