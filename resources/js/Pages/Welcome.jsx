import UserIcon from "@/Components/UserIcon";
import MenuItem from "@/Components/MenuItem";
import Footer from "@/Components/Footer";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import PetSection from "@/Components/PetSection";

const Welcome = ({ user, pets, devName }) => {

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <header className="bg-blue-600 text-white p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Pet App</h1>
                        <div>
                            <UserIcon user={user} />
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <div className="flex flex-1">
                    {/* Navigation */}
                    <nav className="bg-gray-100 w-64 p-4">
                        <ul>
                            {user && (
                                <div>
                                    <MenuItem href="/" label="Home" />
                                    <MenuItem
                                        href="/vaccinations"
                                        label="Vaccinations"
                                    />
                                    <MenuItem
                                        href="/therapies"
                                        label="Therapies"
                                    />
                                </div>
                            )}
                            <MenuItem href="/settings" label="Settings" />
                        </ul>
                    </nav>

                    {/* Main section */}
                    <main className="flex-1 p-4">
                        <Routes>
                            <Route path="/" element={<PetSection pets={pets} />}  />
                        </Routes>
                    </main>
                </div>

                {/* Footer */}
                <Footer devName={devName} />
            </div>
        </Router>
    );
};

export default Welcome;
