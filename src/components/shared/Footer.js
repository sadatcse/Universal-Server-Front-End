
function Footer() {
    return (
        <footer className="p-6 dark:bg-gray-800 dark:text-gray-100 border-t-2 border-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-2xl">Online Survey</h2>
                    <p className="text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text co</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Utility-First</a>
                        <a rel="noopener noreferrer" href="#">Responsive Design</a>
                        <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
                        <a rel="noopener noreferrer" href="#">Dark Mode</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Configuration</a>
                        <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                        <a rel="noopener noreferrer" href="#">Breakpoints</a>
                        <a rel="noopener noreferrer" href="#">Customizing Colors</a>
                        <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
                        
                    </div>
                </div>
                <div className="flex flex-col my-6">
                    <h2 className="font-semibold text-2xl text-center">Get in touch</h2>
                    <div className="flex justify-center gap-4 text-sm dark:text-gray-400">
                        <a className="w-12 h-12 rounded-full bg-gray-300" href="#"></a>
                        <a className="w-12 h-12 rounded-full bg-gray-300" href="#"></a>
                        <a className="w-12 h-12 rounded-full bg-gray-300" href="#"></a>
                        
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer