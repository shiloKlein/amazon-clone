import React from 'react'
import { useState } from 'react'

export function SideFilter(props) {
  const [selected, setSelected] = useState('all')
  const filter = { ...props.filterBy }

  const setCategoryFilter = (category) => {
    setSelected(category||'all')
    filter.category = category
    props.setFilterBy(filter)
  }

  const setRateFilter = (ev, rate) => {
    if (rate) {
      filter.bestSeller = !filter.bestSeller
    } else {
      filter.minRate = ev.target.value
    }
    props.setFilterBy(filter)
  }

  return (
    <section className='side-filter flex column'>
      <div className='categories-filter flex column'>
        <p>categorires:</p>
        <button className={selected === 'all' ? 'selected' : ''} onClick={() => setCategoryFilter('')}>All</button>
        <button className={selected === 'computers' ? 'selected' : ''} onClick={() => setCategoryFilter('computers')}>computers</button>
        <button className={selected === 'shoes' ? 'selected' : ''} onClick={() => setCategoryFilter('shoes')}>shoes</button>
        <button className={selected === 'accessories' ? 'selected' : ''} onClick={() => setCategoryFilter('accessories')}>accessories</button>
        <button className={selected === 'tools' ? 'selected' : ''} onClick={() => setCategoryFilter('tools')}>tools</button>
      </div>
      <div className="rating-filter flex column">
        <p>rate:</p>
        {/* should be checkbox*/}
        <button onClick={(ev) => setRateFilter(ev, 'bestSellers')}>{filter.bestSeller ? 'all' : 'best sellers'}</button>
        <input type="range" min="0" max="5" onInput={(ev) => setRateFilter(ev)} />
      </div>

    </section>
  )
}
