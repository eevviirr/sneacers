import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterId } from '../store/filterSlice';

function Filter() {
	const filterArr = [
		'All',
		'Shirt',
		'Trouses',
		'Short',
		'Shoe',
		'Sock',
		'Jacket',
		'Hoodie',
		'Glasses'
	];
	const filter = useSelector(state => state.filter.filterId);
	const dispatch = useDispatch();

	return (
		<div className='container pt-10 flex gap-4 flex-wrap'>
			{filterArr.map((item, id) => {
				return (
					<button
						onClick={() => dispatch(setFilterId(id))}
						key={id}
						className={`px-6 py-1 bg-slate-200 rounded-full transition ${
							filter == id ? 'bg-slate-800 text-white' : ''
						}`}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}

export default Filter;
