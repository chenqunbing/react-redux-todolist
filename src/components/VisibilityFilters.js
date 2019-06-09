import React from 'react'
import {connect} from 'react-redux'
import {setFilter} from '../redux/actions'
import { VISIBILITY_FILTERS} from '../consts'
// class VisibilityFilter extends React.Component{
//     render () {
//         return (
//             <div>
//                 VisibilityFilter
//             </div>
//         )
//     }
// }
const VisibilityFilter = ({activeFilter, setFilter}) => {
    return (
        <div>
            {
                Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTERS[filterKey]
                    return (
                        <span key={currentFilter} onClick={()=> {setFilter(currentFilter)}}>
                            {currentFilter}
                        </span>
                    )
                })
            }
        </div>
    )
}
const mapSateToProps = state => {
    return {
        activeFilter: state.visibilityFilter 
    }
}
export default connect(
    mapSateToProps,
    {setFilter}
)(VisibilityFilter)