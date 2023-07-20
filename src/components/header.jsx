import heart from '../assets/heart.svg';
import basket from '../assets/basket.svg';
import bell from '../assets/bell.svg';
import search from '../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchValue } from '../store/searchSlice';
import { Link } from 'react-router-dom';


function Header() {
	const searchValue = useSelector(state => state.search.searchValue);
	const dispatch = useDispatch();
	return (
		<header className='font-montserrat w-full bg-stone-900 text-white absolute top-0 left-0'>
			<div className='container flex p-8 items-center justify-between'>
				<Link to='' className='logotype uppercase text-4xl'>Pesion</Link>
				<label className='relative'>
					<input
						type='text'
						className='search bg-inherit outline-none rounded-full w-96 h-10 pl-5 pr-12 border-solid border border-white border-opacity-50'
						placeholder='Search product...'
						value={searchValue}
						onChange={e => dispatch(setsearchValue(e.target.value))}
					/>
					<img
						src={search}
						alt=''
						className='w-6 h-6 absolute top-1/2 -translate-y-1/2 right-4'
					/>
				</label>

				<div className='flex gap-4'>
					<div className='userBasket flex gap-4 border-r border-solid border-white pr-4'>
						<a href='#'>
							<img className='w-5 h-5' src={heart} alt='' />
						</a>
						<a href='#'>
							<img className='w-5 h-5' src={bell} alt='' />
						</a>
						<a href='#'>
							<img className='w-5 h-5' src={basket} alt='' />
						</a>
					</div>
					<a href='#' className='photoUser'>
						Войти
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
