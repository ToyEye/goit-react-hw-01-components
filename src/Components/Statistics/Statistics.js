import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function getRandomColor() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

const Statistics = ({ title, stats }) => (
    <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.statList}>
            {stats.map(stat => (
                <li key={stat.id} className={s.item} style={{backgroundColor:getRandomColor()}}>
                    <span className={s.label}>{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>
            ))}
        </ul>
     </section>
)

Statistics.defaultProps = {
    title: ''
}

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
}

export default Statistics;