import React from 'react'
const filterBy = ''

export function ProductFilter(props) {
    const filter = { ...props.filterBy }

    const setFilter = (ev) => {
        ev.preventDefault()
        filter.text = ev.target.value
        props.setFilterBy(filter)
    }

    return (

        <section className='product-filter'>
            <input type="text" onChange={setFilter} value={filterBy} placeholder="search for product" />
        </section>
    )
}
