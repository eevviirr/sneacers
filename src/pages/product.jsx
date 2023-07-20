import React from 'react';
import test from '../assets/cardtest.png';
import Button from '../components/button';
import { useSelector } from 'react-redux';

function Product() {
	const product = useSelector(state => state.product.productItem);
	const productId = useSelector(state => state.product.id);
	const productItem = product.find(item => item.id === productId);
	const prodictImgs = productItem.imgs;
	return (
		<div className='product--wrapper pt-60 h-[2000px]'>
			<div className='container flex'>
				<div className='photoProduct w-3/4 h-[1000px] flex flex-wrap gap-5'>
					{prodictImgs.map(img => {
						return	<img
							src={img}
							className='h-1/2 w-[440px] rounded-2xl object-cover'
							alt=''
						/>;
					})}
				</div>
				<aside className='info w-1/4 px-5'>
					<div className='content__aside flex flex-col h-auto sticky top-0'>
						<span className='text-3xl font-semibold'>{productItem.title}</span>
						<span className='descr'>{productItem.decr}</span>
						<span className='price mt-2 text-4xl font-bold'>4000p</span>
						<div className='sizes pt-10'>
							<span className='font-semibold text-xl'>Выберите размер:</span>
							<ul className='flex flex-wrap gap-2 mt-5'>
								<li className='px-4 cursor-pointer py-1 bg-black text-white inline-block rounded-full'>
									M
								</li>
								<li className='px-4 cursor-pointer py-1 bg-slate-500 text-white inline-block rounded-full'>
									L
								</li>
								<li className='px-4 cursor-pointer py-1 bg-slate-500 text-white inline-block rounded-full'>
									XL
								</li>
								<li className='px-4 cursor-pointer py-1 bg-slate-500 text-white inline-block rounded-full'>
									XXL
								</li>
								<li className='px-4 cursor-pointer py-1 bg-slate-500 text-white inline-block rounded-full'>
									XXXL
								</li>
							</ul>
						</div>
						<Button title={'buy'} bg={'bg-black'} color={'text-white'} />
					</div>
				</aside>
			</div>
		</div>
	);
}

export default Product;
