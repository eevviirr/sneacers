import React, { useEffect, useState } from 'react';
import Button from '../components/button';
import Filter from '../components/filter';
import { setProductItem } from '../store/productSlice';

import CardItem from '../components/cardItem';
import TickerSwiper from '../components/tickerSwiper';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
	const dispatch = useDispatch();
	const searchValue = useSelector(state => state.search.searchValue);
	const filter = useSelector(state => state.filter.filterId);
	const product = useSelector(state => state.product.productItem);
	const filterRes = filter == 0 ? '' : `&type=${filter}`;
	const [more, setMore] = useState(8);

	useEffect(() => {
		axios
			.get(
				`http://localhost:3001/sneakers?q=${searchValue}${filterRes}&_start=0&_end=${more}`
			)
			.then(json => {
				dispatch(setProductItem(json.data));
			});
	}, [searchValue, filter, more]);
	return (
		<>
			<section className='hero w-full pt-80 bg-hero-pattern bg-cover bg-no-repeat'>
				<div className='container pb-60'>
					<h1 className='text-title font-bold text-white text-center leading-tight'>
						Discover your street style with Our Diverse Collection of Streetwear
					</h1>
					<p className='text-subTitle text-white text-center block px-36'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
						obcaecati quasi non amet est vero maxime aut nemo perferendis alias.
					</p>
					<div className='w-full flex justify-center'>
						<Button title='Shop now' bg={'bg-white'} />
					</div>
				</div>
			</section>

			<Filter />

			<section className='cards pt-10'>
				<div className='container flex flex-wrap justify-center gap-10'>
					{product.map((item, id) => {
						return <CardItem key={id} {...item} />;
					})}
					<div className='w-full flex justify-center'>
						<button
							className={`px-7 py-4 rounded-full mt-10 font-semibold text-2xl bg-black text-white ${
								product.length != more ? 'hidden' : ''
							}`}
							onClick={() => setMore(prev => prev + 4)}
						>
							See More
						</button>
					</div>
				</div>
			</section>

			<section className='trendSetting'>
				<div className='container flex justify-between items-center'>
					<h2 className='text-title font-bold leading-tight block w-3/5'>
						Lorem ipsum dolor sit amet.
					</h2>
					<p className='descr text-xl block w-1/3'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Exercitationem aut beatae quia quod delectus modi quibusdam.
					</p>
				</div>
				<TickerSwiper />
				<div className='container flex justify-center'>
					<Button
						title='Explore our Collection'
						bg='bg-black'
						color={'text-white'}
					/>
				</div>
			</section>

			<section className='exiting pt-10'>
				<div className='container'>
					<div className='w-full h-[500px] rounded-2xl bg-exiting-pattern bg-no-repeat bg-cover text-center pt-36 px-36 text-white'>
						<h2 className='text-5xl font-semibold leading-tight'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
							temporibus?
						</h2>
						<p className='descr px-36 pt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem consequuntur id quam quaerat atque excepturi reiciendis
							impedit tempore exercitationem illo?
						</p>
						<Button title='Grab Now' bg={'bg-white'} color={'text-black'} />
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
