import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsGithub } from 'react-icons/Bs';
import { AiFillLinkedin, AiFillMail, AiOutlineClose } from 'react-icons/Ai';
import Social from './Social';

const Navbar = () => {
	const [activeNav, setActiveNav] = useState(false);

	const toggleNav = () => setActiveNav(!activeNav);

	return (
		<>
			<div className="min-w-screen flex justify-between bg-[#182647]/10 h-16 items-center font-bold  shadow-md shadow-slate-300">
				<div className="pl-3">icon</div>
				<div>
					<ul className="hidden md:flex gap-3 pr-4 ">
						<li>About</li>
						<li>Portfolio</li>
						<li>Contacts</li>
					</ul>
					<div className="md:hidden pr-4 right-0">
						{!activeNav && (
							<FiMenu onClick={toggleNav} className="text-2xl cursor-pointer" />
						)}
					</div>
				</div>
			</div>

			{/* mobile nav starts here */}

			<div
				className={
					activeNav
						? 'fixed flex flex-col h-screen justify-between left-0 top-0 w-full bg-black  p-10 ease-in duration-500  '
						: 'fixed flex flex-col h-screen justify-between left-[-100%] top-0  p-10 ease-in duration-500  '
				}
			>
				<div className="flex justify-end ">
					<AiOutlineClose
						onClick={toggleNav}
						className="bg-gray-900 p-2 text-3xl rounded-full shadow-lg shadow-indigo-600 cursor-pointer"
					/>
				</div>
				<div>
					<ul className="gap-5 pr-4 flex flex-col items-center">
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Home
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							About Me
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Portfolio
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Contacts
						</li>
					</ul>
				</div>

				<div className="flex justify-between px-6  text-3xl">
					<div>
						<BsGithub className="bg-gray-900 p-1 rounded-lg shadow-md shadow-indigo-600" />
					</div>
					<div>
						<AiFillLinkedin className="bg-gray-900 p-1 rounded-lg shadow-md shadow-indigo-600" />
					</div>
					<div>
						<AiFillMail className="bg-gray-900 p-1 rounded-lg shadow-md shadow-indigo-600" />
					</div>
				</div>
			</div>

			<Social />
		</>
	);
};

export default Navbar;
