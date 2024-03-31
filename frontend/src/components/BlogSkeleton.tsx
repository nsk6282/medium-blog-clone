export const BlogSkeleton = ()=>{
    return <div>
        <div role="status" className="w-full animate-pulse">
        <div className="flex justify-center">
            <div className="border-b border-slate-400 w-1/2 py-6 cursor-pointer">
                <div className="flex flex-row justify-start mb-4">
                    <div>
                    <svg className="w-8 h-8 me-3 text-gray-200 dark:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </div>
                    <div className="flex items-center pl-2 text-lg">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-8 mb-4 mr-3"></div>
                    </div>
                    <div className="flex items-center text-slate-500">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-8 mb-4"></div>
                    </div>
                </div>
                <div className="grid grid-cols-5 mb-5">
                    <div className="col-span-5">
                        <div className="text-2xl font-bold mb-4">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4"></div>
                        </div>
                        <div className="text-xl">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-8 mb-4"></div>
                </div>
            </div>
        </div>
            {/* <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            <span className="sr-only">Loading...</span> */}
        </div>

    </div>
}