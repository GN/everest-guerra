import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './style.module.scss';

export default class Grid extends React.Component {

	getGridWidth = () => {
		let rowWidth = this.props.width / this.props.columns
		return rowWidth - this.props.borderWidth * 2
	}

	getGridHeight = () => {
		let rowHeight = this.props.height / this.props.rows 
		return rowHeight - this.props.borderWidth * 2
	}

	shouldDisplaySnake = (coordinate) => {
		const { snake } = this.props;
		for(var i = 0; i < snake.length; i++) {
			if(snake[i][0] === coordinate[1] && snake[i][1] === coordinate[0]) { 
				return true
			}
		}
		return false
	}

	render() {
		let grid = []

		for(var x = 0; x < this.props.columns; x++) {
			for(var y = 0; y < this.props.rows; y++) {
				grid.push(
					<div 
						className={cx({
							[styles.grid]: true,
							[styles.snake]: this.shouldDisplaySnake([x, y]),
						})} 
						style={{ 
							width: `${this.getGridWidth()}px`, 
							height: `${this.getGridHeight()}px`,
							borderWidth: `${this.props.borderWidth}px` 
						}} 
					/>
				)
			}
		}

		return (
			grid
		)
	}
}

Grid.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	borderWidth: PropTypes.number.isRequired,
	columns: PropTypes.number.isRequired,
	rows: PropTypes.number.isRequired,
	snake: PropTypes.array.isRequired
}