

const TopSection = () => {


    return (
        <div>

            <div>
                <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
                    <div className="relative border-b border-white/20">
                        <a className="flex items-center gap-4 py-6 px-8" href="#/">
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Material Tailwind Dashboard</h6>
                        </a>
                        <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="m-4">
                        <ul className="mb-4 flex flex-col gap-1">
                            <li>
                                <a aria-current="page" className="active" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">profile</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">tables</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
                                    </button>
                                </a>
                            </li>
                        </ul>
                        <ul className="mb-4 flex flex-col gap-1">
                            <li className="mx-3.5 mt-4 mb-2">
                                <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign up</p>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>


            <div className={`flex h-screen bg-gray-100  ${"isSideMenuOpen" ? 'overflow-hidden' : ''}`}>

                <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                    {/* Header */}
                    <div className="z-40 py-4  bg-gray-800  ">
                        <div className="flex items-center justify-between h-8 px-6 mx-auto">

                            {/*<!-- Mobile hamburger -->*/}
                            <button className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                                aria-label="Menu">
                                <x-heroicon-o-menu className="w-6 h-6 text-white" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </button>

                            {/*<!-- Search Input -->*/}
                            <div className="flex justify-center  mt-2 mr-4">
                                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                    <input type="search" placeholder="Search"
                                        className="form-input px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                                    <span
                                        className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mt-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <ul className="flex items-center flex-shrink-0 space-x-6">

                                {/*<!-- Notifications menu -->*/}
                                <li className="relative">
                                    <button
                                        className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
                                        /* @click="toggleNotificationsMenu" @keydown.escape="closeNotificationsMenu" */
                                        aria-label="Notifications" aria-haspopup="true">
                                        <div className="flex items-cemter">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </div>
                                        {/*  <!-- Notification badge -->*/}

                                        <span aria-hidden="true"
                                            className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800">

                                        </span>
                                    </button>
                                    <template x-if="isNotificationsMenuOpen">
                                        <ul /* x-transition:leave="transition ease-in duration-150"
                                    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" */
                                            /* @click.away="closeNotificationsMenu" @keydown.escape="closeNotificationsMenu" */
                                            className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md">
                                            <li className="flex">
                                                <a className="text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                                    href="#">
                                                    <span>Messages</span>
                                                    <span
                                                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                                        13
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </template>
                                </li>

                                {/*<!-- Profile menu -->*/}
                                <li className="relative">
                                    <button
                                        className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
                               /*  @click="toggleProfileMenu" @keydown.escape="closeProfileMenu"  */ aria-label="Account"
                                        aria-haspopup="true">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                    <template x-if="isProfileMenuOpen">
                                        <ul /* x-transition:leave="transition ease-in duration-150"
                                    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" */
                                            /* @click.away="closeProfileMenu" @keydown.escape="closeProfileMenu" */
                                            className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md"
                                            aria-label="submenu">
                                            <li className="flex">
                                                <a className=" text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                                    href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Profile</span>
                                                </a>
                                            </li>
                                            <li className="flex">
                                                <a className="text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                                    href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    <span>Log out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </template>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="grid grid-cols-12 gap-6 px-6">
                        <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">

                            <div className="col-span-12 mt-8">
                                <div className="flex items-center h-10 intro-y">
                                    <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                                <div
                                                    className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                    <span className="flex items-center">30%</span>
                                                </div>
                                            </div>
                                            <div className="ml-2 w-full flex-1">
                                                <div>
                                                    <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                                                    <div className="mt-1 text-base text-gray-600">Item Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                                <div
                                                    className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                    <span className="flex items-center">30%</span>
                                                </div>
                                            </div>
                                            <div className="ml-2 w-full flex-1">
                                                <div>
                                                    <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                                                    <div className="mt-1 text-base text-gray-600">Item Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                                </svg>
                                                <div
                                                    className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                    <span className="flex items-center">30%</span>
                                                </div>
                                            </div>
                                            <div className="ml-2 w-full flex-1">
                                                <div>
                                                    <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                                                    <div className="mt-1 text-base text-gray-600">Item Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                                </svg>
                                                <div
                                                    className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                    <span className="flex items-center">30%</span>
                                                </div>
                                            </div>
                                            <div className="ml-2 w-full flex-1">
                                                <div>
                                                    <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                                                    <div className="mt-1 text-base text-gray-600">Item Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            <div className="col-span-12 mt-5">
                                <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-white shadow-lg p-4" ></div>
                                    <div className="bg-white shadow-lg" id="chartpie"></div>
                                </div>
                            </div>

                            <div className="col-span-12 mt-5">
                                <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div className="bg-white p-4 shadow-lg rounded-lg">
                                        <h1 className="font-bold text-base">Table</h1>
                                        <div className="mt-4">
                                            <div className="flex flex-col">
                                                <div className="-my-2 overflow-x-auto">
                                                    <div className="py-2 align-middle inline-block min-w-full">
                                                        <div
                                                            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                            <table className="min-w-full divide-y divide-gray-200">
                                                                <thead>
                                                                    <tr>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">PRODUCT NAME</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">Stock</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">STATUS</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">ACTION</span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-y divide-gray-200">
                                                                    <tr>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>Apple MacBook Pro 13</p>
                                                                            <p className="text-xs text-gray-400">PC & Laptop
                                                                            </p>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>77</p>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <div className="flex text-green-500">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1" fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-width="2"
                                                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                </svg>
                                                                                <p>Active</p>
                                                                            </div>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <div className="flex space-x-4">
                                                                                <a href="#" className="text-blue-500 hover:text-blue-600">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        className="w-5 h-5 mr-1"
                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                        stroke="currentColor">
                                                                                        <path stroke-linecap="round"
                                                                                            stroke-linejoin="round"
                                                                                            stroke-width="2"
                                                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                                    </svg>
                                                                                    <p>Edit</p>
                                                                                </a>
                                                                                <a href="#" className="text-red-500 hover:text-red-600">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        className="w-5 h-5 mr-1 ml-3"
                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                        stroke="currentColor">
                                                                                        <path stroke-linecap="round"
                                                                                            stroke-linejoin="round"
                                                                                            stroke-width="2"
                                                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                    </svg>
                                                                                    <p>Delete</p>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TopSection;