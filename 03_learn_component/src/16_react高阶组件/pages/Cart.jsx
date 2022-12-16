import React, {PureComponent} from 'react';
import loginAuth from '../hoc/login_auth'
class Cart extends PureComponent {
    render() {
        return (
            <div>
                Cart......
            </div>
        );
    }
}

Cart.propTypes = {};

export default loginAuth(Cart);