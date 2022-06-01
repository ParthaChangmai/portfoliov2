import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col justify-between text-white">
			<div className="top-0 left-0 sticky">
				<Navbar />
			</div>
			<div className="flex-grow flex">{children}</div>
		</div>
	);
};

export default Layout;
