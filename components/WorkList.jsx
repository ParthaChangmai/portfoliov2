import React from 'react';
import { works } from '../constants/constants';
import Link from 'next/dist/client/link';

const WorkList = () => {
	console.log(works);
	return (
		<>
			{works.map(({ id, image, title }) => (
				<div
					key={id}
					className="bg-slate-900/60 rounded-lg shadow-sm shadow-indigo-600 hover:shadow-lg hover:shadow-indigo-900 cursor-pointer ease-in-out duration-500"
				>
					<div>
						<img
							src={image}
							alt="project1"
							className="w-full h-full rounded-t-lg"
						/>
					</div>
					<div className="px-2 flex justify-between items-center">
						<p className="p-3">{title}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default WorkList;
