import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Image src="/logo.png" alt="Logo" width={32} height={32} />
                        <h1 className="ml-2 mt-2.5 text-blue-600 text-md font-semibold">Thryft Ship</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;