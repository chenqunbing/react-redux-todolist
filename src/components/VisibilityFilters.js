import React from 'react'
import {connect} from 'react-redux'
import {setFilter} from '../redux/actions'
import { VISIBILITY_FILTERS} from '../consts'
const VisibilityFilter = ({activeFilter, setFilter}) => {
    return (
        <div>
            {
                Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTERS[filterKey]
                    return (
                        <span className={'pd20'+(activeFilter === currentFilter? ' red': '')}  key={currentFilter} onClick={()=> {setFilter(currentFilter)}}>
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