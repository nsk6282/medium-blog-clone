export const FullBlogSkeleton  = ()=>{
    return <div>
        <div role="status" className="w-full animate-pulse">
            <div className="grid grid-cols-12 py-10 pl-10">
            <div className="col-span-12 lg:col-span-8 p-10">
                <div className="text-5xl font-extrabold py-2"> 
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4 mr-3"></div>
                </div>
                <div className="text-slate-500 text-xl py-4">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-4 mr-3"></div>
                </div>
                <div className="py-2 text-xl"> 
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4 mr-3"></div>
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4 mr-3"></div>
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4 mr-3"></div>
                <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4 mr-3"></div>
                </div>
            </div>
            <div className="col-span-4 py-12 pl-5 invisible lg:visible">
                <div className="text-2xl text-left">
                <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-4 mr-3"></div>
                </div>
                <div className="flex justify-start">
                    <div className="flex flex-col justify-center pr-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </div>
                    <div className="pr-20">
                        <div className="text-3xl font-bold pt-3">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 mr-3"></div>
                        </div>
                        <div className="text-slate-500 text-xl py-4"> 
                        <div className="h-2.5 bg-gray-200 rounded-full  w-96 mb-4 mr-3"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}