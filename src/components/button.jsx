import React from 'react';

function Button({ title, bg, color, func }) {
	return (
		<button
			className={`px-7 py-4 rounded-full mt-10 font-semibold text-2xl ${bg} ${color}`}
			onClick={func}
		>
			{title}
		</button>
	);
}

export default Button;
