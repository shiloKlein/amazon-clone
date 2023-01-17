import React from 'react'
const filterBy = null

export function ProductFilter(props) {
    const filter = { ...props.filterBy }

    const setFilter = (ev) => {
        ev.preventDefault()
        filter.text = ev.target.value
        props.setFilterBy(filter)
    }

    return (

        <section className='product-filter'>
            <input type="text" onChange={setFilter} value={filterBy} placeHolder="search for product" />
        </section>
    )
}
