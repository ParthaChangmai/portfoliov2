import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col justify-between text-white">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
