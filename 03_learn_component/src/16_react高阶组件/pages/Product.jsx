import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/theme_context'
import WithTheme from '../hoc/with_theme'
// class Product extends PureComponent {
//     render() {
//         return (
//             <div>
//                 Product:
//                 <ThemeContext.Consumer>
//                     {
//                         value => {
//                             return <h2>theme: {value.color},{value.size}</h2>
//                         }
//                     }
//                 </ThemeContext.Consumer>
//
//             </div>
//         );
//     }
// }
//
//
//
// export default Product;


class Product extends PureComponent {
    render() {
        return (
            <div>
                Product:
                {this.props.color},{this.props.size}

            </div>
        );
    }
}



export default WithTheme(Product);