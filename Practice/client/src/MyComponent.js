import React,{ Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    }
    static defaultProps ={
        name: 'favorite'
    }
    render() {
        const {name, favoriteNumber,children} = this.props;
        
        return (
            <div>
            이름:{name}
            props children 값은: {children}
            {favoriteNumber}
          </div>
        )
    }
}

export default MyComponent;